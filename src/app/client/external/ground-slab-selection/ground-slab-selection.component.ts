import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-ground-slab-selection',
  templateUrl: './ground-slab-selection.component.html',
  styleUrls: ['./ground-slab-selection.component.css']
})
export class GroundSlabSelectionComponent implements OnInit {
  field: FieldConfig;
  selectedSlabObservable: Observable<Item>;
  selectedSlab: Item;
  slabs: Item[];
  addendaValue: any;
  showSelectedSlab = false;
  selectedSlabThickness = 85;

  constructor(
    private addendaStore: AddendaStoreService,
    private firestore: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
  ) { }

  ngOnInit(): void {
    this.firestore.setCollection('ground_slab');
    this.firestore.list().subscribe(b => {
      this.slabs = b;
      this.slabs.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
    });

    this.addendaValue = this.addendaStore.getValue('concrete', 'slab');
    if (this.addendaValue.id) {
      this.selectedSlabObservable = this.firestore.get(this.addendaValue.id);
      this.selectedSlabObservable.subscribe(slab => {
        this.selectedSlab = slab;
        this.selectedSlab.totalCost = this.costCalculatorService.getTotalCost(this.field, slab);
        this.selectedSlabThickness = parseInt(this.addendaValue.thickness, 10);
        this.showSelectedSlab = true;
      });
    }
  }

  selectSlab(selectedSlab: Item) {
    this.selectedSlab = selectedSlab;
    this.addendaStore.set('concrete', 'slab', { id: selectedSlab.id, value: selectedSlab.value, thickness: this.selectedSlabThickness });
    this.showSelectedSlab = true;
  }

  changeSelection() {
    this.showSelectedSlab = false;
  }

}
