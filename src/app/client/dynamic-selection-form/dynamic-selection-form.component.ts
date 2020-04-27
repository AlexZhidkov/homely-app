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
  houseId: string;
  collectionId: string;
  jobNumber: string;
  section: any;
  isLoading = true;

  constructor(
    private afs: AngularFirestore,
    public addendaStore: AddendaStoreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    this.collectionId = this.route.snapshot.paramMap.get('collection');

    const houseConfigDoc = this.afs.collection('houses').doc<any>(this.houseId);
    houseConfigDoc.valueChanges().subscribe(h => {
      this.jobNumber = h.jobNumber;
      const houseConfig: any[] = JSON.parse(h.config);
      this.section = houseConfig.find(c => c.id === this.collectionId);
      this.isLoading = false;
    });

  }

  submit(event: any) {
    debugger;
  }
}
