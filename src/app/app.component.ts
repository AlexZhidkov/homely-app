import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Addenda Selection';

  constructor(private router: Router,
              public afAuth: AngularFireAuth) { }

  onSignOut() {
    this.afAuth.signOut().then(() =>
      this.router.navigate(['/']).then(() =>
        location.reload())
    );
  }
}
