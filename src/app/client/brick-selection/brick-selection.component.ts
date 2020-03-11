import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Brick } from 'src/app/model/brick';

@Component({
  selector: 'app-brick-selection',
  templateUrl: './brick-selection.component.html',
  styleUrls: ['./brick-selection.component.css']
})
export class BrickSelectionComponent implements OnInit {
  private bricksCollection: AngularFirestoreCollection<Brick>;
  bricks: Observable<Brick[]>;

  suppliers: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.bricksCollection = this.afs.collection<Brick>('bricks');
    this.bricks = this.bricksCollection.valueChanges();
    // this.update();
  }

  filterChanged(newFilter: string) {
    // ToDo refactor using switchMap
    // https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md#dynamic-querying
    this.bricksCollection = this.afs.collection<Brick>('bricks', ref => ref.where('tags', 'array-contains', newFilter));
    this.bricks = this.bricksCollection.valueChanges();
  }

  update(): void {
    this.bricksCollection.get().forEach(item => {
      return item.docs.map(m => {
        const data = m.data();
        return this.afs.doc<Brick>(`bricks/${m.id}`).update({
          // tags: []
          // price: data.subtitle ? Number(data.subtitle.replace(/\D/g, '')) : 0
          // supplier: data.tags[0] ? data.tags[0] : '',
          // course: (data.tags.includes('Two Course') ? 2 : 1)
          // course: data.course.toString()
        });
      });
    });
  }

}
