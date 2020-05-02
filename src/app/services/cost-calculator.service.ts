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
}
