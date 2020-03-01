import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from '../../dynamic-components/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../model/fieldConfig';

@Component({
  selector: 'app-addenda-selection',
  templateUrl: './addenda-selection.component.html',
  styleUrls: ['./addenda-selection.component.css']
})
export class AddendaSelectionComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  bricks: Observable<FieldConfig[]>;

  options: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  private bricksCollection: AngularFirestoreCollection<FieldConfig>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.bricksCollection = this.afs.collection<FieldConfig>('bricks');
    this.bricks = this.bricksCollection.valueChanges();
  }

  filterChanged(newFilter: string) {
    // ToDo refactor using switchMap
    // https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md#dynamic-querying
    this.bricksCollection = this.afs.collection<FieldConfig>('bricks', ref => ref.where('tags', 'array-contains', newFilter));
    this.bricks = this.bricksCollection.valueChanges();
  }

  submit(event: any) {
    debugger;
  }
}
