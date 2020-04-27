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
        steps: [
          {
            label: 'Concrete',
            items: [
              {
                label: 'Termite Control',
                source: 'termite_control',
                type: 'card',
                markup: null
              },
              {
                label: 'Ground Slab',
                options: [{ label: '85 mm', cost: null }, { label: '100 mm', cost: null }],
                type: 'radio'
              },
            ]
          },
          {
            label: 'Brickwork',
            items: [
              {
                label: 'Bricks',
                source: 'bricks',
                type: 'brickwork',
                markup: null,
                quantity: null,
                quantityLabel: 'Total square meters',
                cost: { Single_Course_Total: null, Two_Course_Total: null }
              }
            ]
          }
        ],

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
        steps: [
        ],
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
        steps: [
        ],
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
        steps: [
        ],
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
        steps: [
        ],
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
        steps: [
        ],
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
        steps: [
        ],
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
        steps: [
        ],
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

