import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Brick } from 'src/app/model/brick';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-brick-selection',
  templateUrl: './brick-selection.component.html',
  styleUrls: ['./brick-selection.component.css']
})
export class BrickSelectionComponent implements OnInit, OnDestroy {
  @Input() onOpenEvent: Observable<void>;
  private openEventSubscription: Subscription;
  selectedBrick: Observable<Brick>;
  bricks: Observable<Brick[]>;
  selectedCourse = '1';
  selectedSupplier = 'All';
  selectedBrickValue: string;
  showAllBricks = true;
  showSelectedBrick = false;
  addenda: any;

  suppliers: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  constructor(private firestore: FirestoreService<Brick>) { }

  ngOnInit(): void {
    this.openEventSubscription = this.onOpenEvent.subscribe(() => this.setup());

    // this.update();
  }

  setup() {
    this.firestore.setCollection('bricks', ref => ref.where('course', '==', this.selectedCourse));
    this.bricks = this.firestore.list();

    this.addenda = JSON.parse(localStorage.getItem('addenda'));
    if (!this.addenda) {
      this.addenda = {};
    }
    if (this.addenda.brick) {
      this.selectedBrickValue = this.addenda.brick.value;
      this.showAllBricks = false;
      this.selectedBrick = this.firestore.get(this.addenda.brick.id);
      this.selectedBrick.subscribe(b => { this.showSelectedBrick = true; });
    }
  }

  changeFilter() {
    // ToDo refactor using switchMap
    // https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md#dynamic-querying
    if (this.selectedSupplier === 'All') {
      this.firestore.setCollection('bricks',
        ref => ref.where('course', '==', this.selectedCourse));
    } else {
      this.firestore.setCollection('bricks',
        ref => ref.where('course', '==', this.selectedCourse).where('supplier', '==', this.selectedSupplier));
    }
  }

  changeSelection() {
    this.showSelectedBrick = false;
    this.showAllBricks = true;
  }

  selectBrick(id: string, value: string) {
    this.selectedBrickValue = value;
    this.addenda.brick = { id, value };
    localStorage.setItem('addenda', JSON.stringify(this.addenda));
  }

  isSelected(value: string): boolean {
    return this.selectedBrickValue === value;
  }

  ngOnDestroy() {
    this.openEventSubscription.unsubscribe();
  }
  /*
    update(): void {
      this.bricksCollection.get().forEach(item => {
        return item.docs.map(m => {
          const data = m.data();
          return this.firestore.doc<Brick>(`bricks/${m.id}`).update({
            // tags: []
            // price: data.subtitle ? Number(data.subtitle.replace(/\D/g, '')) : 0
            // supplier: data.tags[0] ? data.tags[0] : '',
            // course: (data.tags.includes('Two Course') ? 2 : 1)
            // course: data.course.toString()
          });
        });
      });
    }
  */
}
