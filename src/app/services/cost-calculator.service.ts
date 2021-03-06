import { Injectable } from '@angular/core';
import { Brick } from '../model/brick';
import { FieldConfig } from '../model/fieldConfig';
import { Item } from '../model/item';
import { PackedItem } from '../model/packed-item';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorService {

  constructor() { }

  getTotalCost(field: FieldConfig, item: Item): number {
    if (isNaN(item.price)) {
      return null;
    };
    if (!field.quantity || isNaN(field.quantity)) {
      field.quantity = 1;
    };

    let quantity = 1;
    let cost = 0;
    switch (field.source) {
      case 'guttering':
        cost = this.calculateGutteringCost(field, item);
        break;
      case 'downpipes':
        cost = this.calculateDownpipesCost(field, item);
        break;
      case 'termite_control':
        cost = this.calculateTermiteControlItemCost(field, item);
        break;
      case 'colorbond':
        cost = 0;
        break;
      default:
        switch (field.source) {
          case 'bricks':
            quantity = this.brickworkQuantity(field, item as Brick);
            break;
          case 'paving':
            quantity = this.packedItemQuantity(field, item as PackedItem);
            break;
          case 'ground_slab':
            quantity = this.slabQuantity(field, item);
            break;
          default:
            quantity = field.quantity;
            break;
        }
        cost = quantity * item.price;
    }
    return this.getCostPlusMarkup(cost, field.markup);
  }

  getCostPlusMarkup(cost: number, fieldMarkup: any): number {
    const markup = isNaN(fieldMarkup) ? 0 : fieldMarkup;
    const total = cost + Math.round((cost * markup) / 100);
    return total;
  }

  calculateDownpipesCost(field: FieldConfig, item: Item): number {
    let cost = field.quantity * item.price;
    switch (item.value) {
      case 'Round':
        cost += field.extras.round.quantity * field.quantity;
        break;
      case 'Rectangular':
        cost += field.extras.rectangular.quantity * field.quantity;
        break;
    }
    return cost;
  }

  calculateGutteringCost(field: FieldConfig, item: Item): number {
    let cost = field.quantity * item.price;
    switch (item.value) {
      case '125 Quarter Round':
        cost += field.extras.quarterRound.quantity * field.quantity;
        break;
      case '150 Half Round':
        cost += field.extras.halfRound.quantity * field.quantity;
        break;
      case 'Wide Based Ovolo':
        cost += field.extras.wideBasedOvolo.quantity * field.quantity;
        break;
      case 'Longline':
        cost += field.extras.longline.quantity * field.quantity;
        break;
    }
    return cost;
  }

  calculateTermiteControlItemCost(field: FieldConfig, item: Item): number {
    switch (item.value) {
      case 'Homeguard Blue':
        return field.extras.termiteCollars.quantity * field.extras.collarPrice.quantity +
          (field.extras.housePerimeter.quantity + field.extras.garageZeroLotWall.quantity) * item.price
        break;
      default:
        return (field.extras.houseArea.quantity + (field.extras.garageZeroLotWall.quantity * 0.20)) * item.price
        break;
    }
    return 0;
  }

  getTermiteControlCost(field: FieldConfig): number {
    const cost = field.extras.termiteCollars.quantity * field.extras.collarPrice.quantity +
      (field.extras.housePerimeter.quantity + field.extras.garageZeroLotWall.quantity) * field.extras.chemicalPreTreatment.quantity;
    return this.getCostPlusMarkup(cost, field.markup);
  }

  brickworkQuantity(field: FieldConfig, brick: Brick): number {
    const numberOfBricks = field.quantity * brick.bricksPerSqm;
    const packs = Math.ceil(numberOfBricks / brick.bricksPerPack);
    return packs;
  }

  packedItemQuantity(field: FieldConfig, item: PackedItem): number {
    const numberOfItems = field.quantity * item.itemsPerSqm;
    const packs = Math.ceil(numberOfItems / item.itemsPerPack);
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
