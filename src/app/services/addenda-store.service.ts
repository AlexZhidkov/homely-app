import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddendaStoreService {

  constructor() { }

  get(): any {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    return addenda ? addenda : {};
  }

  set(key: string, value: any) {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    addenda[key] = value;
    localStorage.setItem('addenda', JSON.stringify(addenda));
  }

  clear() {
    localStorage.setItem('addenda', JSON.stringify({}));
  }

  getSections() {
    return [
      { id: 'external', label: 'External', steps: ['Bricks', 'Colorbond', 'Roof Tiles', 'Guttering', 'Entry Doors', 'Entry Door Furniture', 'Garage Doors', 'Paving', 'Hot Water Systems', 'Solar Systems'] },
      { id: 'internal', label: 'Internal', steps: ['', ] },
      { id: 'kitchen', label: 'Kitchen', steps: ['', ] },
      { id: 'scullery', label: 'Scullery', steps: ['', ] },
      { id: 'laundry', label: 'Laundry', steps: ['', ] },
      { id: 'ens', label: 'Ens And Bathrooms', steps: ['', ] },
      { id: 'wc', label: 'WC & PDR Rooms', steps: ['', ] },
      { id: 'electrical', label: 'Electrical', steps: ['', ] },
    ];
  }
}

