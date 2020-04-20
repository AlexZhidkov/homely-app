import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-house-config',
  templateUrl: './house-config.component.html',
  styleUrls: ['./house-config.component.css']
})
export class HouseConfigComponent implements OnInit {
  houseId: string;
  houseDoc: AngularFirestoreDocument<any>;
  house: Observable<any>;
  isLoading = true;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    if (this.houseId === 'new') {
      this.houseId = this.afs.createId();
      this.afs.collection('houses')
        .doc(this.houseId)
        .set({
          builder: 'builder-user-id'
        });
    }
    this.houseDoc = this.afs.collection('houses').doc(this.houseId);
    this.house = this.houseDoc.valueChanges();
    this.house.subscribe(b => {
      this.isLoading = false;
    });
  }

  navigateToClient() {
    this.router.navigate([`/client/`]);
  }

  copyToClipboard() {
    const url = `${window.location.hostname}/client/`;
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
