import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore'
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {

  Clientes: Observable<any[]>;
  constructor(firestore: AngularFirestore){
          this.Clientes = firestore.collection('Clients').valueChanges();
  }
  filtrado="";
  

  ngOnInit(): void {
  }

}
