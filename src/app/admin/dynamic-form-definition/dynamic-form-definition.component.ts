import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-form-definition',
  templateUrl: './dynamic-form-definition.component.html',
  styleUrls: ['./dynamic-form-definition.component.css']
})
export class DynamicFormDefinitionComponent implements OnInit {
  dynamicFormDoc: AngularFirestoreDocument<any>;
  dynamicForm: any;
  collectionId: string;

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.collectionId = this.route.snapshot.paramMap.get('collection');

    this.dynamicFormDoc = this.afs.collection('dynamic-form').doc<any>(this.collectionId);
    this.dynamicFormDoc.valueChanges().subscribe(f => {
      if (f) {
        this.dynamicForm = f;
      } else {
        this.dynamicForm = {
          label: this.collectionId,
          collections: [],
          labels: []
        };
        this.afs.collection('dynamic-form').doc(this.collectionId).set(this.dynamicForm);
      }
    });
  }

  addStep(newStepLabel: string) {
    this.dynamicForm.labels.push(newStepLabel);
    const newStepCollection = newStepLabel.toLowerCase().replace(/ /g, '_');
    this.dynamicForm.collections.push(newStepCollection);
    this.afs.collection('dynamic-form').doc(this.collectionId).set(this.dynamicForm);
  }
}
