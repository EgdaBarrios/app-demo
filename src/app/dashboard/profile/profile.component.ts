import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //let user: firebase.User | null;

  // Users: Observable<any[]>;

  nombre: string | undefined;
  
  constructor(
    public auth: AngularFireAuth) {}

  ngOnInit(): void {
  }

  // Getting user
  /*
  public getUser(user_id: string) {
    return this.firestore.collection('Users').doc(user_id).snapshotChanges();
  }
  */
  /*
  editProfile(){
    let user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: this.name
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      console.log(error);
      // An error happened.
    });

    this.auth.currentUser.updateProfile({
      displayName:this.name
    });
  }*/
}
