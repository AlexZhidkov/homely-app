import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

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
  sections: any[];

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private addendaStoreService: AddendaStoreService
  ) { }

  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    if (this.houseId === 'new') {
      this.sections = this.addendaStoreService.getSections();
      this.houseId = this.afs.createId();
      this.afs.collection('houses')
        .doc(this.houseId)
        .set({
          builder: 'builder-user-id',
          config: JSON.stringify(this.sections)
        });
    }
    this.houseDoc = this.afs.collection('houses').doc(this.houseId);
    this.house = this.houseDoc.valueChanges();
    this.house.subscribe(b => {
      this.sections = JSON.parse(b.config);
      this.isLoading = false;
    });
  }

  save() {
    this.houseDoc.update({ config: JSON.stringify(this.sections) });
  }

  navigateToClient() {
    this.router.navigate([`/client/${this.houseId}`]);
  }

  copyToClipboard() {
    const url = `${window.location.hostname}/client/${this.houseId}`;
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
