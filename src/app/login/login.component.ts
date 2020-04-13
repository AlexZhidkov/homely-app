import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { SignInProvider } from '../model/sign-in-providers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providerName = SignInProvider;

  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() { }

  login(providerName: SignInProvider) {
    let provider: any;
    switch (providerName) {
      case SignInProvider.google:
        provider = new auth.GoogleAuthProvider();
        provider.addScope('email');
        break;
      case SignInProvider.facebook:
        provider = new auth.FacebookAuthProvider();
        provider.addScope('email');
        break;
      case SignInProvider.microsoft:
        provider = new auth.OAuthProvider('microsoft.com');
        break;
    }
    this.afAuth.signInWithPopup(provider)
      .then(() => this.redirectAfterLogin())
      .catch(err => {
        this.snackBar.open(err.message, null, {
          duration: 5000
        });
      });
  }

  redirectAfterLogin() {
    const authReturnUrl = localStorage.getItem('authReturnUrl');
    localStorage.removeItem('authReturnUrl');
    const redirectAfterLoginPath = authReturnUrl ? authReturnUrl : '/';
    this.router.navigate([redirectAfterLoginPath]);
  }
}
