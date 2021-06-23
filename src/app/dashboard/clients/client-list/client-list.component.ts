import { Component, OnInit, PipeTransform } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  Clientes:any[]=[];
  constructor(private _ClientServices: ClientsService) {

  }

  
  ngOnInit(): void {
    this.getClients()
  }

  filtrado="";
  filtrado2="";


  onClear(){
    this.filtrado = ' ';
  }

  getClients(){
    this._ClientServices.getClients().subscribe(data=>{
      this.Clientes = [];
      data.forEach((element:any)=>{
        this.Clientes.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

}
