import { Component, OnInit, PipeTransform } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  
  Clients: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.Clients = firestore.collection('Clients').valueChanges();
  }

  // #pipe para reconocer informacion - > return

  ngOnInit(): void {
  }

  filtrado="";
  filtrado2="";

  onClear(){
    // text='';
    // console.log("Borrando");
    this.filtrado = ' ';
  }
}
