import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Addenda Selection';
  user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.user.subscribe(u => this.user = u);
  }

  logout() {
    this.afAuth.signOut();
  }
}
