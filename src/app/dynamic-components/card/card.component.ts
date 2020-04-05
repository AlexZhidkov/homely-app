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
  field: FieldConfig;
  group: FormGroup;
  showAllItems: boolean;
  selectedItem: Item;
  items: Item[];
  addenda: any;

  markup = 0;
  amountRequired = 1;

  constructor(
    private itemService: FirestoreService<Item>,
    private addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.addenda = this.addendaStore.get();

    this.itemService.setCollection(this.field.source);
    this.itemService.list().subscribe(c => this.items = c);

    if (this.addenda[this.field.source]) {
      this.showAllItems = false;
      this.itemService.get(this.addenda[this.field.source].id).subscribe(item => {
        this.selectedItem = item;
      });
    } else {
      this.showAllItems = true;
    }

  }

  selectItem(selectedItem: Item) {
    this.selectedItem = selectedItem;
    this.addendaStore.set(this.field.source, { id: selectedItem.id, value: selectedItem.value });
    this.showAllItems = false;
  }

}
