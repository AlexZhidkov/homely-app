import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-components/dynamic-form/dynamic-form.component';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-dynamic-selection-form',
  templateUrl: './dynamic-selection-form.component.html',
  styleUrls: ['./dynamic-selection-form.component.css']
})
export class DynamicSelectionFormComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  dynamicFormDoc: AngularFirestoreDocument<any>;
  dynamicForm: any;
  collectionId: string;
  isLoading = true;

  constructor(
    private afs: AngularFirestore,
    public addendaStore: AddendaStoreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.collectionId = this.route.snapshot.paramMap.get('collection');
    this.dynamicFormDoc = this.afs.collection('dynamic-form').doc<any>(this.collectionId);
    this.dynamicFormDoc.valueChanges().subscribe(f => {
      this.dynamicForm = f;
      this.isLoading = false;
    });
  }

  submit(event: any) {
    debugger;
  }
}
