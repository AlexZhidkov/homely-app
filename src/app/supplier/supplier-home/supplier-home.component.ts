import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {
  sections: Section[];

  constructor(private store: AddendaStoreService) { }

  ngOnInit(): void {
    this.sections = this.store.getSections();
  }

  getUrl(collection: string): string {
    return `supplier/items/${collection.replace(/ /g, '_')}`;
  }
}
