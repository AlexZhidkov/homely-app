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
            label: 'Slab',
            items: [
              {
                label: 'Ground Slab',
                source: 'ground_slab',
                type: 'slab',
                markup: null,
                quantity: null,
                quantityLabel: 'Total concrete cubic meters',
              }
            ]
          },
          {
            label: 'Termite Control',
            items: [
              {
                label: 'Termite Control',
                source: 'termite_control',
                type: 'card',
                markup: null
              },
            ]
          },
          {
            label: 'Bricks',
            items: [
              {
                label: 'Bricks',
                source: 'bricks',
                type: 'brickwork',
                markup: null,
                quantity: null,
                quantityLabel: 'Total square meters',
              }
            ]
          },
          {
            label: 'Render',
            items: [
              {
                label: 'Front Elevation',
                options: [
                  { label: 'Brick Finish', cost: null },
                  { label: 'Painted Sand Render', cost: null },
                  { label: 'Acrylic Render', cost: null }
                ],
                type: 'radio',
                markup: null,
                quantity: null,
                quantityLabel: '',
              },
              {
                label: 'Alfresco Area',
                options: [
                  { label: 'Brick Finish', cost: null },
                  { label: 'Painted Sand Render', cost: null },
                  { label: 'Acrylic Render', cost: null }
                ],
                type: 'radio',
                markup: null,
                quantity: null,
                quantityLabel: '',
              },
              {
                label: 'Entire House',
                options: [
                  { label: 'Brick Finish', cost: null },
                  { label: 'Painted Sand Render', cost: null },
                  { label: 'Acrylic Render', cost: null }
                ],
                type: 'radio',
                markup: null,
                quantity: null,
                quantityLabel: '',
              }
            ]
          },
          {
            label: 'Roof',
            items: [
              {
                label: 'Roof',
                type: 'roof',
                markup: null,
                quantity: null,
                quantityLabel: 'Total square meters',
              },
              {
                label: 'Guttering',
                type: 'roof',
                markup: null,
                quantity: null,
                quantityLabel: 'Total Linear Meter (Lm)',
              },
              {
                label: 'Downpipes',
                type: 'roof',
                markup: null,
                quantity: null,
                quantityLabel: 'Total Linear Meter (Lm)',
              }
            ]
          },
          {
            label: 'Windows & Doors',
            items: [
              {
                label: 'Windows',
                source: 'windows',
                type: 'window',
                markup: null,
                quantity: null,
                quantityLabel: '',
              }
            ]
          },
          {
            label: 'Entry Doors',
            items: [
              {
                label: 'Entry Door',
                source: 'entry_doors',
                type: 'card',
                markup: null,
                quantity: null,
                quantityLabel: 'Number of entry doors',
              }
            ]
          },
          {
            label: 'Entry Door Furniture',
            items: [
              {
                label: 'Entry Door Furniture',
                source: 'entry_door_furniture',
                type: 'card',
                markup: null,
                quantity: null,
                quantityLabel: '',
              }
            ]
          },
          {
            label: 'Garage Doors',
            items: [
              {
                label: 'Garage Doors',
                source: 'garage_doors',
                type: 'card',
                markup: null,
                quantity: null,
                quantityLabel: '',
              }
            ]
          },
          {
            label: 'Paving',
            items: [
              {
                label: 'Paving',
                source: 'paving',
                type: 'card',
                markup: null,
                quantity: null,
                quantityLabel: 'Total square meters',
              }
            ]
          },
          {
            label: 'Hot Water System',
            items: [
              {
                label: 'Hot Water System',
                source: 'hot_water_systems',
                type: 'card',
                markup: null,
                quantity: null,
                quantityLabel: '',
              }
            ]
          },
          {
            label: 'Solar System',
            items: [
              {
                label: 'Solar System',
                source: 'solar_systems',
                type: 'card',
                markup: null,
                quantity: null,
                quantityLabel: '',
              }
            ]
          }
        ],

        collections: [
          'Termite Control',
          'Ground Slab',
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

