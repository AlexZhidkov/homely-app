import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseConfig } from 'src/app/model/house-config';
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
    const houseConfigBase64 = this.route.snapshot.paramMap.get('houseConfig');
    if (houseConfigBase64 && houseConfigBase64 !== 'undefined') {
      const houseConfig = window.atob(houseConfigBase64);
      localStorage.setItem('houseConfig', houseConfig);
    } else {
      if (!localStorage.getItem('houseConfig')) {
        localStorage.setItem('houseConfig', JSON.stringify(new HouseConfig()));
      }
    }
    this.sections = this.store.getSections();
  }

}
