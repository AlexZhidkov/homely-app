import { Injectable } from '@angular/core';
import { FieldConfig } from '../model/fieldConfig';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorService {

  constructor() { }

  getTotalCost(field: FieldConfig, price: number): number {
    if (isNaN(price)) {
      return null;
    }
    const markup = isNaN(field.markup) ? 0 : field.markup;
    const quantity = isNaN(field.quantity) ? 1 : field.quantity;
    const total = quantity * (price + Math.round((price * markup) / 100));
    return total;
  }

  brickwork(): number {
    return 99950;
  }

  singleItemWithMarkup(price: number, markup: number): string {
    if (!(isNaN(price) && isNaN(markup))) {
      return '';
    }
    const total = ((price + Math.round((price * markup) / 100)) / 100).toFixed(2);
    const formattedPrice = `$${total}`;
    return formattedPrice;
  }

}
