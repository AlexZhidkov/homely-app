import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
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
    private addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.addendaValue = this.addendaStore.getValue(this.step, this.field.source);
    this.itemService.setCollection(this.field.source);
    this.itemService.list().subscribe(c => this.items = c);

    if (this.addendaValue) {
      this.showAllItems = false;
      this.itemService.get(this.addendaValue.id).subscribe(item => {
        this.selectedItem = item;
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
