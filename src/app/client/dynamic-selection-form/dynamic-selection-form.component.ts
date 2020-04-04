import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DynamicFormComponent } from 'src/app/dynamic-components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-dynamic-selection-form',
  templateUrl: './dynamic-selection-form.component.html',
  styleUrls: ['./dynamic-selection-form.component.css']
})
export class DynamicSelectionFormComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  dynamicFormDoc: AngularFirestoreDocument<any>;
  dynamicForm: any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    // this.dynamicFormDoc = this.afs.doc<any>('dynamic-form');
    // this.dynamicFormDoc.valueChanges().subscribe(f => this.dynamicForm = f);
  }


  submit(event: any) {
    debugger;
  }
}
