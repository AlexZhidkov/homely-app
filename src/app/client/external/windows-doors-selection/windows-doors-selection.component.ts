import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-windows-doors-selection',
  templateUrl: './windows-doors-selection.component.html',
  styleUrls: ['./windows-doors-selection.component.css']
})
export class WindowsDoorsSelectionComponent implements OnInit {
  @Input() markup: number;
  @Input() numberOfWindows: number;
  selectedWindowObservable: Observable<Item>;
  selectedWindow: Item;
  windows: Item[];
  selectedSupplier = 'All';
  showAllWindows = true;
  showSelectedWindow = false;
  addendaValue: any;

  suppliers: string[] = [
    'Jason Windows',
    'Dowell Windows',
    'Affinity Windows',
    'Nulook Windows',
    'Stegbar',
  ];

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
  houseWindowsAndDoors: any[];

  constructor(
    private addendaStore: AddendaStoreService,
    private firestore: FirestoreService<Item>
  ) { }

  ngOnInit(): void {
    this.firestore.setCollection('windows');
    this.firestore.list().subscribe(b => this.windows = b);

    this.addendaValue = this.addendaStore.getValue('window', 'window');
    if (this.addendaValue.id) {
      this.showAllWindows = false;
      this.selectedWindowObservable = this.firestore.get(this.addendaValue.id);
      this.selectedWindowObservable.subscribe(window => {
        this.selectedWindow = window;
        this.showSelectedWindow = true;
      });
    }

    this.houseWindowsAndDoors = [{ area: null, type: null }];
  }

  changeFilter() {
    // ToDo refactor using switchMap
    // https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md#dynamic-querying
    if (this.selectedSupplier === 'All') {
      this.firestore.setCollection('windows');
    } else {
      this.firestore.setCollection('windows',
        ref => ref.where('supplier', '==', this.selectedSupplier));
    }
    this.firestore.list().subscribe(b => this.windows = b);
  }

  selectWindow(selectedWindow: Item) {
    this.selectedWindow = selectedWindow;
    this.addendaStore.set('window', 'window', { id: selectedWindow.id, value: selectedWindow.value });
    this.showSelectedWindow = true;
    this.showAllWindows = false;
  }

  changeSelection() {
    this.showSelectedWindow = false;
    this.showAllWindows = true;
  }
}
