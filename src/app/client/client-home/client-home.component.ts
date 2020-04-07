import { Component, OnInit } from '@angular/core';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  sections: any;

  constructor(private store: AddendaStoreService) { }

  ngOnInit(): void {
    this.sections = this.store.getSections();
  }

}
