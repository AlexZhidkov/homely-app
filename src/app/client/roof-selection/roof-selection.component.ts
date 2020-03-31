import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/model/item';
import { FirestoreService } from 'src/app/services/firestore.service';

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
  selectedRoof: string;
  selectedColour: any;
  colours: Item[];
  tiles: Item[];

  constructor(
    private colorbondService: FirestoreService<Item>,
    private tilesService: FirestoreService<Item>,
  ) { }

  ngOnInit(): void {
    this.openEventSubscription = this.onOpenEvent.subscribe(() => this.setup());
    this.showAllColours = true;
  }

  setup() {
    this.colorbondService.setCollection('colorbond');
    this.colorbondService.list().subscribe(c => this.colours = c);
    this.tilesService.setCollection('tiles');
    this.tilesService.list().subscribe(t => this.tiles = t);
  }

  selectColour(colour: any) {

  }

  changeSelection() {

  }
}
