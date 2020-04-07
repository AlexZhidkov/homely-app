import { Component, OnInit } from '@angular/core';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {
  sections: any;

  constructor(private store: AddendaStoreService) { }

  ngOnInit(): void {
    this.sections = this.store.getSections();
  }

  getUrl(step: string): string {
    return `supplier/items/${step.replace(/ /g, '_')}`;
  }
}
