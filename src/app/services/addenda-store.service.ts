import { Injectable } from '@angular/core';
import { Section } from '../model/section';

@Injectable({
  providedIn: 'root'
})
export class AddendaStoreService {

  constructor() { }

  get(): any {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    return addenda ? addenda : {};
  }

  set(step: string, key: string, value: any) {
    const addenda = JSON.parse(localStorage.getItem('addenda')) ?? {};
    const addendaStep = addenda[step];
    if (addendaStep) {
      addendaStep[key] = value;
    } else {
      addenda[step] = {};
      addenda[step][key] = value;
    }
    localStorage.setItem('addenda', JSON.stringify(addenda));
  }

  getStep(step: string) {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    return addenda ? (addenda[step] ? addenda[step] : {}) : {};
  }

  getValue(step: string, key: string) {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    return addenda ? (addenda[step] ? addenda[step][key] : {}) : {};
  }

  clear() {
    localStorage.setItem('addenda', JSON.stringify({}));
  }

  getSections(): Section[] {
    return [
      {
        id: 'external', label: 'External',
        collections: [
          'Termite Control',
          'Bricks',
          'Colorbond',
          'Roof Tiles',
          'Guttering',
          'Windows',
          'Entry Doors',
          'Entry Door Furniture',
          'Garage Doors',
          'Paving',
          'Hot Water Systems',
          'Solar Systems'
        ]
      },
      {
        id: 'internal', label: 'Internal',
        collections: [
          'Internal Doors',
          'Internal Door Furniture',
          'Robe Doors',
          'Cornice',
          'Wet-area Tiling',
          'Air Conditioning',
          'Wall Painting',
          'Balustrade'
        ]
      },
      {
        id: 'kitchen', label: 'Kitchen',
        collections: [
          'Sinks',
          'Tapware',
          'Ovens',
          'Cooktops',
          'Range Hoods',
          'Dishwashers',
          'Countertops',
          'Overhead Cupboards',
          'Cupboard And Cupboard Doors'
        ]
      },
      {
        id: 'scullery', label: 'Scullery',
        collections: [
          'Sinks',
          'Tapware',
          'Dishwashers',
          'Countertops',
          'Overhead Cupboards',
          'Cupboard And Cupboard Doors'
        ]
      },
      {
        id: 'laundry', label: 'Laundry',
        collections: [
          'Troughs',
          'Tapware',
          'Dishwashers',
          'Countertops',
          'Overhead Cupboards',
          'Cupboard And Cupboard Doors'
        ]
      },
      {
        id: 'ens', label: 'Ens And Bathrooms',
        collections: [
          'Cupboard And Cupboard Doors',
          'Counter Tops',
          'Mirrors',
          'Basins',
          'Tapware',
          'Shower Screens',
          'Shower Heads',
          'Shower shop dishes',
          'Towel Rails & Racks',
          'Bath Tubs',
          'Bath Tub Tapware'
        ]
      },
      {
        id: 'wc', label: 'WC & PDR Rooms',
        collections: [
          'Toilet Suites',
          'Toilet Roll Holders',
          'Cupboard And Cupboard Doors',
          'Counter Tops',
          'Mirrors',
          'Basins',
          'Tapware',
          'Towel Rails And Racks'
        ]
      },
      {
        id: 'electrical', label: 'Electrical',
        collections: [
          'Power-Points And Switches',
          'Lighting',
          'Exhaust Fans',
          'Fans',
          'Smart Wiring']
      },
    ];
  }
}

