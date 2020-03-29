import { ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Brick } from '../../model/brick';

@Component({
  selector: 'app-brick',
  templateUrl: './brick.component.html',
  styleUrls: ['./brick.component.css']
})
export class BrickComponent implements OnInit {
  isLoading = true;
  brickId: string;
  brickDoc: AngularFirestoreDocument<Brick>;
  brick: Observable<Brick>;
  tagList: string[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER];
  suppliers: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.brickId = this.route.snapshot.paramMap.get('id');
    if (!this.brickId) {
      this.brickId = this.afs.createId();
      this.afs.collection('bricks')
        .doc(this.brickId)
        .set({
          tags: []
        });
    }
    this.brickDoc = this.afs.collection('bricks').doc(this.brickId);
    this.brick = this.brickDoc.valueChanges();
    this.brick.subscribe(b => {
      this.tagList = b.tags;
      this.isLoading = false;
    });
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tagList.push(value.trim());
      this.brickDoc.update({ tags: this.tagList });
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tagList.indexOf(tag);

    if (index >= 0) {
      this.tagList.splice(index, 1);
      this.brickDoc.update({ tags: this.tagList });
    }
  }
}
