import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';
//import {Client} from 'src/app/shared/models/Client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  Documents: Observable<any[]>;
  Sex:Observable<any[]>;
  editClient: FormGroup;
  id:string|null;
  Sexvalue: any;
  documentValue:any;
  statusValue:any
  public clientStatus:any;


  constructor(
    private firestore: AngularFirestore, 
    private aRoute: ActivatedRoute, 
    private fb: FormBuilder,
    private router:Router,
    private _ClientService: ClientsService,
   // private dataClient: Client
    ){
      this.Documents = firestore.collection('DocumentTypes').valueChanges();
      this.Sex = firestore.collection('Sex').valueChanges();
      this.id = this.aRoute.snapshot.paramMap.get('id');
      this.editClient=this.fb.group({
          name: '',
          middle_name: '',
          last_name: '',
          phone_number: '',
          email: '',
          nro_document: '',
          sex_id: '',
          type_id: '',
          status: ''
        });
      }
  

  

  ngOnInit(): void {
    this.edit();
    this.Attributes();
  }

  edit(){
    if(this.id !== null){
      this._ClientService.getClient(this.id).subscribe(data=>{
        this.editClient.setValue({
          name:data.payload.data()['name'],
          middle_name:data.payload.data()['middle_name'],
          last_name:data.payload.data()['last_name'],
          phone_number:data.payload.data()['phone_number'],
          nro_document:data.payload.data()['nro_document'],
          email:data.payload.data()['email'],
          // Datos Especiales
          sex_id:data.payload.data()['sex_id'],
          type_id:data.payload.data()['type_id'],
          status:data.payload.data()['status']
        })
        /*
        this.dataClient=new Client(
          name:data.payload.data()['name'],
          middle_name:data.payload.data()['middle_name'],
          last_name:data.payload.data()['last_name'],
          sex_id:data.payload.data()['sex_id'],
          nro_document:data.payload.data()['nro_document'],
          phone_number:data.payload.data()['phone_number'],
          status:data.payload.data()['status'],
          type_id:data.payload.data()['type_id'],
          email:data.payload.data()['email']
          // Datos Especiales
          );
        */
        // this.dataClient={
        //   name:data.payload.data()['name'],
        //   middle_name:data.payload.data()['middle_name'],
        //   last_name:data.payload.data()['last_name'],
        //   phone_number:data.payload.data()['phone_number'],
        //   nro_document:data.payload.data()['nro_document'],
        //   email:data.payload.data()['email'],
        //   // Datos Especiales
        //   sex_id:data.payload.data()['sex_id'],
        //   type_id:data.payload.data()['type_id'],
        //   status:data.payload.data()['status']
        // }

      })
    };
  }
  Attributes() {
    if(this.id !== null){
      this.Sexvalue=this._ClientService.getClient(this.id).subscribe(data=>{
       data.payload.data()['sex_id']
      })
      this.statusValue=this._ClientService.getClient(this.id).subscribe(data=>{
        data.payload.data()['status']
      })
      this.documentValue=this._ClientService.getClient(this.id).subscribe(data=>{
        data.payload.data()['nro_document']
      })
    }
  }

  onSubmit(){
    if(this.id!==null){
    this.EditarClient(this.id);
    }
  }

  EditarClient(id:string) {
    const empleado: any = {
      name: this.editClient.value.name,
      middle_name: this.editClient.value.middle_name,
      last_name: this.editClient.value.last_name,
      phone_number: this.editClient.value.phone_number,
      nro_document: this.editClient.value.nro_document,
      email: this.editClient.value.email,    
      sex_id: this.editClient.value.sex_id,
      status: this.editClient.value.status, 
      type_id: this.editClient.value.type_id 
    }
    this._ClientService.updateClient(id, empleado).then(()=>{
      this.router.navigate(['/dashboard/clients']);
    });
  }
}
