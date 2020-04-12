import { ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() collection: string;

  isLoading = true;
  itemId: string;
  itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  tagList: string[];
  readonly separatorKeysCodes: number[] = [ENTER];

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.collection = this.route.snapshot.paramMap.get('collection');
    const collectionId = this.collection.toLowerCase();

    this.itemId = this.route.snapshot.paramMap.get('id');
    if (!this.itemId) {
      this.itemId = this.afs.createId();
      this.afs.collection(collectionId)
        .doc(this.itemId)
        .set({
          tags: []
        });
    }
    this.itemDoc = this.afs.collection(collectionId).doc(this.itemId);
    this.item = this.itemDoc.valueChanges();
    this.item.subscribe(b => {
      this.tagList = b.tags;
      this.isLoading = false;
    });
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tagList.push(value.trim());
      this.itemDoc.update({ tags: this.tagList });
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tagList.indexOf(tag);

    if (index >= 0) {
      this.tagList.splice(index, 1);
      this.itemDoc.update({ tags: this.tagList });
    }
  }
}
