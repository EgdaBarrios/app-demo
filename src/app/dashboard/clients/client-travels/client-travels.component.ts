import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';
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
  Array: any[] = []
  filtrado2 = "";
  ClientesResult: any[] = [];

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
    this.getTravelAddress()


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

  getTravelAddress() {
    this._ClientService.getdataTravelsWithMultidestionation(this.id).subscribe(data => {
      data.map((dataClient: any) => {
        this.Clientes.push({
          id_document: dataClient.payload.doc.id,
          destination_address: dataClient.payload.doc.data()['destination_address'],
          ...dataClient.payload.doc.data()
        })
        const id_document = dataClient.payload.doc.id
        this._ClientService.getMoreDestination(this.id, id_document).subscribe(MoreDestination => {
          MoreDestination.map((extraAddress: any) => {
            this.Array.push({
              id_document: dataClient.payload.doc.id,
              address: extraAddress.payload.doc.data()['address'],
            })
          }) 
        })
      })
      // this.ClientesResult = this.Clientes.map((result1) => {
      //   const id_document = result1.id_document
      //   this.Array.map((result2) => {
      //     const id_document2 = result2.id_document
      //     console.log("ID2", id_document2);
      //     if (id_document == id_document2) {
      //       result1.destination_address = result1.destination_address.concat(' / ' + result2.address)
      //       console.log(result1.destination_address);
      //     }
      //   })
      //   return result1
      //})
    })
    
  }

}


