import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
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
  constructor(
    private afs: AngularFirestore,
    public addendaStore: AddendaStoreService
  ) { }

  ngOnInit(): void {
    this.dynamicFormDoc = this.afs.doc<any>('dynamic-form/external');
    this.dynamicFormDoc.valueChanges().subscribe(f => this.dynamicForm = f);
  }

  public onStepChange(event: any): void {
    switch (event.selectedIndex) {
      default:
        break;
    }
  }

  submit(event: any) {
    debugger;
  }
}
