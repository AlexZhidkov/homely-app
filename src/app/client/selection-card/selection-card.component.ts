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

  getFormattedTotal(totalCost: number): string {
    const formattedPrice = `$${(totalCost / 100).toFixed(2)}`;
    return formattedPrice;
  }

}
