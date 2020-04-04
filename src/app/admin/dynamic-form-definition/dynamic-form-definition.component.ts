import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-dynamic-form-definition',
  templateUrl: './dynamic-form-definition.component.html',
  styleUrls: ['./dynamic-form-definition.component.css']
})
export class DynamicFormDefinitionComponent implements OnInit {
  dynamicFormDoc: AngularFirestoreDocument<any>;
  dynamicForm: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.dynamicFormDoc = this.afs.doc<any>('dynamic-form/external');
    this.dynamicFormDoc.valueChanges().subscribe(f => this.dynamicForm = f);
  }

}
