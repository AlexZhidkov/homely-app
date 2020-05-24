import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  step: any;
  field: FieldConfig;
  group: FormGroup;
  showAllItems: boolean;
  selectedItem: Item;
  items: Item[];
  addendaValue: any;

  constructor(
    private itemService: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
    private addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.addendaValue = this.addendaStore.getValue(this.step.label, this.field.label);
    this.itemService.setCollection(this.field.source);
    this.itemService.list().subscribe(c => {
      c.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
      this.items = c;
    });
    if (this.addendaValue && this.addendaValue.id) {
      this.showAllItems = false;
      this.itemService.get(this.addendaValue.id).subscribe(item => {
        this.selectedItem = item;
        this.selectedItem.totalCost = this.costCalculatorService.getTotalCost(this.field, item);
      });
    } else {
      this.showAllItems = true;
    }

  }

  selectItem(selectedItem: Item) {
    this.selectedItem = selectedItem;
    this.addendaStore.set(this.step.label, this.field.label, { id: selectedItem.id, value: selectedItem.value });
    this.showAllItems = false;
  }

}
