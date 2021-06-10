import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Input() action:string | undefined;

  email = 'user@example.com';
  password = '123456';

  constructor(
    public auth:AngularFireAuth,
    private router:Router) { }

  ngOnInit() {
    console.log(this.action);
  }

  redirect() {
    this.router.navigate(['/dashboard/homeAdmin']);
  }

  loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  customLogin() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log(result);
        this.redirect();
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      }).catch((error) => {
        console.log(error);
        // Handle error.
    });
  }

  logout() {
    this.auth.signOut();
  }
}
