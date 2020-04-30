import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-room-window-selection',
  templateUrl: './room-window-selection.component.html',
  styleUrls: ['./room-window-selection.component.css']
})
export class RoomWindowSelectionComponent implements OnInit {
  @Input() supplier: string;
  field: FieldConfig;
  area: string;
  selectedWindowObservable: Observable<Item>;
  selectedWindow: Item;
  windows: Item[];
  selectedType: string;
  showAllWindows = true;
  showSelectedWindow = false;
  markup = 0;
  numberOfWindows = 1;

  windowDoorTypes: string[] = [
    'Sliding Window',
    'Awning Window',
    'Fixed Window',
    'Double Hung Window',
    'Awning Gas Strut Window',
    'Bi-Fold Window',
    'Louvre Window',
    'Casement Window',
    'Sliding Door',
    'Stacker Door',
    'Bi-Fold Door',
  ];
  constructor(
    private firestore: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
  ) { }

  ngOnInit(): void {
  }

  changeType() {
    // ToDo refactor using switchMap
    // https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md#dynamic-querying
    this.firestore.setCollection('windows',
      ref => ref.where('supplier', '==', this.supplier).where('tags', 'array-contains', this.selectedType));
    this.firestore.list().subscribe(b => {
      this.windows = b;
      this.windows.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i.price));
    });
  }

  selectWindow(selectedWindow: Item) {
    this.selectedWindow = selectedWindow;
    // this.addendaStore.set('window', 'window', { id: selectedWindow.id, value: selectedWindow.value });
    this.showSelectedWindow = true;
    this.showAllWindows = false;
  }

  changeSelection() {
    this.showSelectedWindow = false;
    this.showAllWindows = true;
  }
}
