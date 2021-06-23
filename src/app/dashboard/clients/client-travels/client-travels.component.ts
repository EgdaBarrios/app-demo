import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-travels',
  templateUrl: './client-travels.component.html',
  styleUrls: ['./client-travels.component.css']
})
export class ClientTravelsComponent implements OnInit {
  fullname: any;
  id: string | null;
  ids: any;
  fullnameClient: FormGroup;
  dataTravel: any;
  Clientes: any[] = [];
  ClientesWithDestinations: any[] = [];
  filtrado2 = "";


  constructor(
    private _ClientService: ClientsService,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.fullnameClient = this.fb.group({
      fullname: ''
    })
  }


  ngOnInit(): void {
    this.getNameClient()
    this.getget()
  }


  getNameClient() {
    if (this.id !== null) {
      this._ClientService.getClient(this.id).subscribe(data => {
        this.fullnameClient.setValue({
          fullname: data.payload.data()['name'] + ' ' + data.payload.data()['middle_name'] + ' ' + data.payload.data()['last_name']
        })
      })
    }
  }

  getget() {
    this._ClientService.getdataTravels2(this.id).subscribe(data => {
      this.Clientes = [];
      data.forEach((element: any) => {
        this.Clientes.push({
          ids: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
    // this._ClientService.getMoreDestination2(this.ids).subscribe(data => {
    //   console.log("nuevo",data.payload.doc.data()['address'])
    //   this.ClientesWithDestinations = [];
    //   data.forEach((element: any) => {
    //     this.ClientesWithDestinations.push({
    //       idNuevo: element.payload.doc.id,
    //       ...element.payload.doc.data()
    //     })
    //   })
      
    // })
    
    
  }
}
