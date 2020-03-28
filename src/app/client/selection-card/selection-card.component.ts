import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() selectionChanged = new EventEmitter<{ id: string, value: string }>();

  selectedItemValue: string;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  selectItem(id: string, value: string) {
    this.selectedItemValue = value;
    // this.ref.detectChanges();
  }

  isSelected(value: string): boolean {
    return this.selectedItemValue === value;
  }

  changeSelection() {
    this.selectionChangeRequested.emit();
  }

  makeSelection(id: string, value: string) {
    this.selectionChanged.emit({ id, value });
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
