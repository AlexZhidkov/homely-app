import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-builder-home',
  templateUrl: './builder-home.component.html',
  styleUrls: ['./builder-home.component.css']
})
export class BuilderHomeComponent implements OnInit {
  isLoading = true;
  houses: Observable<any[]>;

  constructor(
    private firestore: FirestoreService<any>
  ) { }

  ngOnInit(): void {
    this.firestore.setCollection('houses');
    this.houses = this.firestore.list();
    this.houses.subscribe(e => {
      this.isLoading = false;
    });
  }


}
