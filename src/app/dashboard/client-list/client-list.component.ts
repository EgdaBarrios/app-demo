import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client$: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.client$ = firestore.collection('Clients').valueChanges();
  }

  ngOnInit(): void {
  }

}
