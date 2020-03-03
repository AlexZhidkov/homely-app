import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brick } from '../model/brick';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-bricks',
  templateUrl: './bricks.component.html',
  styleUrls: ['./bricks.component.css']
})
export class BricksComponent implements OnInit {
  isLoading = true;
  bricks: Observable<Brick[]>;

  constructor(private firestore: FirestoreService<Brick>) { }

  ngOnInit() {
    this.firestore.setCollection('bricks');
    this.bricks = this.firestore.list();
    this.bricks.subscribe(e => {
      this.isLoading = false;
    });
  }

}

