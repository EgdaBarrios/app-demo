import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  Documents: Observable<any[]>;
  Sex:Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.Documents = firestore.collection('DocumentTypes').valueChanges();
    this.Sex = firestore.collection('Sex').valueChanges();
  }

  ngOnInit(): void {
  }

}
