import { Component, Input, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-downpipes-selection',
  templateUrl: './downpipes-selection.component.html',
  styleUrls: ['./downpipes-selection.component.css']
})
export class DownpipesSelectionComponent implements OnInit {
  @Input() markup: number;
  @Input() amountRequired: number;
  field: FieldConfig;

  colours: Item[];
  selectedDownpipesType: string;
  showAllDownpipesColours: boolean;
  selectedDownpipesColour: Item;
  downpipesColours: Item[];

  addenda: any;

  constructor(
    private addendaStore: AddendaStoreService,
    private colorService: FirestoreService<Item>,
    private downpipesColourService: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
  ) { }

  ngOnInit(): void {
    this.addenda = this.addendaStore.getStep('roof');
    this.selectedDownpipesType = this.addenda.downpipesType ?? null;

    this.colorService.setCollection('colorbond');
    this.colorService.list().subscribe(c => {
      this.colours = c;
      this.colours.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
    });

    this.downpipesColourService.setCollection('colorbond');
    if (this.addenda.downpipesColour) {
      this.showAllDownpipesColours = false;
      this.downpipesColourService.get(this.addenda.downpipesColour.id).subscribe(downpipesColour => {
        this.selectedDownpipesColour = downpipesColour;
        this.selectedDownpipesColour.totalCost =
          this.costCalculatorService.getTotalCost(this.field, downpipesColour);
      });
    } else {
      this.showAllDownpipesColours = true;
    }
  }

  selectDownpipesType(type: string) {
    this.selectedDownpipesType = type;
    this.addendaStore.set('roof', 'downpipesType', type);
  }

  selectDownpipesColour(selectedDownpipesColour: Item) {
    this.selectedDownpipesColour = selectedDownpipesColour;
    this.addendaStore.set('roof', 'downpipesColour', { id: selectedDownpipesColour.id, value: selectedDownpipesColour.value });
    this.showAllDownpipesColours = false;
  }
}
