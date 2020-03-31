import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.css']
})
export class SelectionCardComponent implements OnInit {
  @Input() item: any;
  @Input() isItemSelected: boolean;
  @Input() numberOfItems: number;
  @Input() markup: number;
  @Output() selectionChangeRequested = new EventEmitter();
  @Output() selectionChanged = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  changeSelection() {
    this.selectionChangeRequested.emit();
  }

  makeSelection(item: Item) {
    this.selectionChanged.emit(item);
  }

  getFormattedPrice(price: number): string {
    const formattedPrice = `$${((price + this.getMarkupAmount(price)) / 100).toFixed(2)}`;
    return formattedPrice;
  }

  getFormattedTotal(price: number): string {
    return `$${((price + this.getMarkupAmount(price)) * this.numberOfItems / 100).toFixed(2)}`;
  }

  getMarkupAmount(price: number): number {
    const markupAmount = Math.round((price * this.markup) / 100);
    return markupAmount;
  }

}
