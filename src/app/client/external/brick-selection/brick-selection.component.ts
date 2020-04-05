import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brick } from 'src/app/model/brick';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-brick-selection',
  templateUrl: './brick-selection.component.html',
  styleUrls: ['./brick-selection.component.css']
})
export class BrickSelectionComponent implements OnInit {
  @Input() markup: number;
  @Input() numberOfBricks: number;
  selectedBrickObservable: Observable<Brick>;
  selectedBrick: Brick;
  bricks: Brick[];
  selectedCourse = '1';
  selectedSupplier = 'All';
  showAllBricks = true;
  showSelectedBrick = false;
  addenda: any;

  suppliers: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  constructor(
    private addendaStore: AddendaStoreService,
    private firestore: FirestoreService<Brick>
  ) { }

  ngOnInit(): void {
    this.firestore.setCollection('bricks', ref => ref.where('course', '==', this.selectedCourse));
    this.firestore.list().subscribe(b => this.bricks = b);

    this.addenda = this.addendaStore.get();
    if (this.addenda.brick) {
      this.showAllBricks = false;
      this.selectedBrickObservable = this.firestore.get(this.addenda.brick.id);
      this.selectedBrickObservable.subscribe(brick => {
        this.selectedBrick = brick;
        this.showSelectedBrick = true;
      });
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
    this.firestore.list().subscribe(b => this.bricks = b);
  }

  selectBrick(selectedBrick: Brick) {
    this.selectedBrick = selectedBrick;
    this.addendaStore.set('brick', { id: selectedBrick.id, value: selectedBrick.value });
    this.showSelectedBrick = true;
    this.showAllBricks = false;
  }

  changeSelection() {
    this.showSelectedBrick = false;
    this.showAllBricks = true;
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
