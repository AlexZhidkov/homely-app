import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-termite-control-selection',
  templateUrl: './termite-control-selection.component.html',
  styleUrls: ['./termite-control-selection.component.css']
})
export class TermiteControlSelectionComponent implements OnInit {
  field: FieldConfig;
  addenda: any;

  controlLevelOne: string;
  showAllTermiteControls: boolean;
  selectedTermiteControl: Item;
  termiteControls: Item[];

  termiteControlCost: number;

  constructor(
    public addendaStore: AddendaStoreService,
    private termiteControlService: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
  ) { }

  ngOnInit(): void {
    this.addenda = this.addendaStore.getStep('termite_control');
    this.termiteControlService.setCollection('termite_control');
    this.termiteControlService.list().subscribe(t => {
      this.termiteControls = t;
      this.termiteControls.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
    });

    if (this.addenda) {
      this.controlLevelOne = this.addenda.controlLevelOne
    }
    if (this.addenda.selectedItem) {
      this.showAllTermiteControls = false;
      this.termiteControlService.get(this.addenda.selectedItem.id).subscribe(item => {
        this.selectedTermiteControl = item;
        this.selectedTermiteControl.totalCost = this.costCalculatorService.getTotalCost(this.field, item);
      });
    } else {
      this.showAllTermiteControls = true;
    }

    this.termiteControlCost = this.costCalculatorService.getTermiteControlCost(this.field);
  }

  select(value: any) {
    this.addenda = this.addendaStore.set('termite_control', 'controlLevelOne', value);
  }

  selectTermiteControl(selectedItem: Item) {
    this.selectedTermiteControl = selectedItem;
    this.addendaStore.set('termite_control', 'selectedItem', { id: selectedItem.id, value: selectedItem.value });
    this.showAllTermiteControls = false;
  }
}
