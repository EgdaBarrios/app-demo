import { Injectable } from '@angular/core';

// import auth from 'firebase/app';
import User from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable()

export class AuthService {

  public user: typeof User | undefined;

  constructor(
    public auth:AngularFireAuth,
    private router:Router) { }

  loginRedirect() {
    this.router.navigate(['/dashboard/homeAdmin']);
  };

  logoutRedirect() {
    this.router.navigate(['/auth']);
  };

  login(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.loginRedirect();
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      }).catch((error) => {
        console.log(error);
        // Handle error.
    });
  }

  logout() {
    this.auth.signOut()
      .then((result) => {
        console.log(result);
        this.logoutRedirect();
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      }).catch((error) => {
        console.log(error);
        // Handle error.
    });
  };

  getCurrentUser() {
    this.auth.authState.pipe(first()).toPromise();
  };
}
/*
function first(): import("rxjs").OperatorFunction<User.User | null, unknown> {
  throw new Error('Function not implemented.');
}*/