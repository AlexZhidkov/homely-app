import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorService {

  constructor() { }

  getTotalCost(itemType: string, price: number, markup: number): number {
    if (isNaN(price)) {
      return null;
    }
    if (isNaN(markup)) {
      markup = 0;
    }
    const total = price + Math.round((price * markup) / 100);
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
