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
  step: string;
  field: FieldConfig;
  group: FormGroup;
  showAllItems: boolean;
  selectedItem: Item;
  items: Item[];
  addendaValue: any;

  markup = 0;
  amountRequired = 1;

  constructor(
    private itemService: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
    private addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.addendaValue = this.addendaStore.getValue(this.step, this.field.source);
    this.itemService.setCollection(this.field.source);
    this.itemService.list().subscribe(c => {
      c.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field.source, i.price, this.field.markup));
      this.items = c;
    });
    if (this.addendaValue.id) {
      this.showAllItems = false;
      this.itemService.get(this.addendaValue.id).subscribe(item => {
        this.selectedItem = item;
        this.selectedItem.totalCost = this.costCalculatorService.getTotalCost(this.field.source, item.price, this.field.markup);
      });
    } else {
      this.showAllItems = true;
    }

  }

  selectItem(selectedItem: Item) {
    this.selectedItem = selectedItem;
    this.addendaStore.set(this.step, this.field.source, { id: selectedItem.id, value: selectedItem.value });
    this.showAllItems = false;
  }

}
