import { Injectable } from '@angular/core';
import { Brick } from '../model/brick';
import { FieldConfig } from '../model/fieldConfig';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorService {

  constructor() { }

  getTotalCost(field: FieldConfig, item: Item): number {
    if (isNaN(item.price)) {
      return null;
    };
    if (isNaN(field.quantity)) {
      field.quantity = 1;
    };

    let quantity = 1;
    switch (field.type) {
      case 'brickwork':
        quantity = this.brickworkQuantity(field, item as Brick);
        break;
      case 'slab':
        quantity = this.slabQuantity(field, item);
        break;
      default:
        quantity = field.quantity;
        break;
    }
    const cost = quantity * item.price;
    const markup = isNaN(field.markup) ? 0 : field.markup;
    const total = cost + Math.round((cost * markup) / 100);
    return total;
  }

  brickworkQuantity(field: FieldConfig, brick: Brick): number {
    const numberOfBricks = field.quantity * (brick.course === '1' ? 48.5 : 19.4);
    const packs = Math.ceil(numberOfBricks / (brick.course === '1' ? 264 : 132));
    return packs;
  }

  slabQuantity(field: FieldConfig, slab: Item): number {
    const groundSlab = field.extras.houseSize.quantity * slab.extras.selectedSlabThickness / 1000;
    const perimeter = field.extras.housePerimeter.quantity * 0.3 * (slab.extras.selectedSlabThickness === 100 ? 0.072 : 0.087);
    const waste = (groundSlab + perimeter) * 0.03;
    const perimeter2 = field.extras.housePerimeter.quantity * 0.3 * 0.28;
    const walls = field.extras.freestandingWalls.quantity * 0.3 * 0.28;
    const pillars = field.extras.pillarsPerimeter.quantity * 0.28;
    const wastage = (perimeter2 + walls + pillars) * 0.06;
    const total = groundSlab + perimeter + waste + perimeter2 + walls + pillars + wastage;
    return total;
  }
}
