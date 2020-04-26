import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorService {

  constructor() { }

  getTotalCost(itemType: string, price: number): number {
    return price;
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
