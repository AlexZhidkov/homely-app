import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-roof-selection',
  templateUrl: './roof-selection.component.html',
  styleUrls: ['./roof-selection.component.css']
})
export class RoofSelectionComponent implements OnInit {
  @Input() onOpenEvent: Observable<void>;
  @Input() markup: number;
  @Input() amountRequired: number;
  private openEventSubscription: Subscription;
  selectedColourValue: string;
  showAllColours: boolean;
  selectedColour: any;

  colours: Item[] = [
    { label: 'Cove', value: 'Cove', colour: '#A59F8A', description: null, supplier: 'Colorbond', price: 100 },
    { label: 'Mangrove', value: 'Mangrove', colour: '#737562', description: null, supplier: 'Colorbond', price: 110 },
  ];

  constructor() { }

  ngOnInit(): void {
    this.openEventSubscription = this.onOpenEvent.subscribe(() => this.setup());
    this.selectedColour = this.colours[0];
    this.showAllColours = true;
  }

  setup() {
  }

  selectColour(colour: any) {

  }

  changeSelection() {

  }
}
