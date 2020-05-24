import { ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PackedItem } from 'src/app/model/packed-item';

@Component({
  selector: 'app-paving',
  templateUrl: './paving.component.html',
  styleUrls: ['./paving.component.css']
})
// ToDo review for potential refactoring. It's very similar to BrickComponent. Can they be combined?
export class PavingComponent implements OnInit {
  isLoading = true;
  pavingId: string;
  pavingDoc: AngularFirestoreDocument<PackedItem>;
  paving: Observable<PackedItem>;
  tagList: string[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER];

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.pavingId = this.route.snapshot.paramMap.get('id');
    if (!this.pavingId) {
      this.pavingId = this.afs.createId();
      this.afs.collection('paving')
        .doc(this.pavingId)
        .set({
          tags: []
        });
    }
    this.pavingDoc = this.afs.collection('paving').doc(this.pavingId);
    this.paving = this.pavingDoc.valueChanges();
    this.paving.subscribe(b => {
      this.tagList = b.tags;
      this.isLoading = false;
    });
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tagList.push(value.trim());
      this.pavingDoc.update({ tags: this.tagList });
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tagList.indexOf(tag);

    if (index >= 0) {
      this.tagList.splice(index, 1);
      this.pavingDoc.update({ tags: this.tagList });
    }
  }
}
