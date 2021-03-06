import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from 'src/app/model/section';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  sections: Section[];

  constructor(
    private route: ActivatedRoute,
    private store: AddendaStoreService
  ) { }

  ngOnInit(): void {
    this.sections = this.store.getSections();
  }

}
