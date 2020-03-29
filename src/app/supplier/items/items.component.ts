import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  isLoading = true;
  items: Observable<Item[]>;
  collection: string;
  collectionId: string;

  constructor(
    private route: ActivatedRoute,
    private firestore: FirestoreService<Item>
  ) { }

  ngOnInit() {
    this.collection = this.route.snapshot.paramMap.get('collection');
    this.collectionId = this.collection.toLowerCase();
    this.firestore.setCollection(this.collectionId);
    this.items = this.firestore.list();
    this.items.subscribe(e => {
      this.isLoading = false;
    });
  }

}
