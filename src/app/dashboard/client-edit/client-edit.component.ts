import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';

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

  constructor(
    firestore: AngularFirestore, 
    private aRoute: ActivatedRoute, 
    private fb: FormBuilder,
    private router:Router,
    private _ClientService: ClientsService
    
    ){
      this.Documents = firestore.collection('DocumentTypes').valueChanges();
      this.Sex = firestore.collection('Sex').valueChanges();
      this.editClient=this.fb.group({
          name: '',
          middle_name: '',
          last_name: '',
          phone_number: '',
          email: '',
          nro_document: ''
          // sex: '',
          // type_id: '',
          // status: '',
        });
        this.id = this.aRoute.snapshot.paramMap.get('id');
      }
  

  

  ngOnInit(): void {
    this.edit();
  }

  edit(){
    if(this.id !== null){
      this._ClientService.getEmpleado(this.id).subscribe(data=>{
        this.editClient.setValue({
          name:data.payload.data()['name'],
          middle_name:data.payload.data()['middle_name'],
          last_name:data.payload.data()['last_name'],
          phone_number:data.payload.data()['phone_number'],
          nro_document:data.payload.data()['nro_document'],
          email:data.payload.data()['email']
          // Datos Especiales
          // Sex:data.payload.data()['sex_id'],
          // type_id:data.payload.data()['type_id'],
          // status:data.payload.data()['status']
        })
      })
    };
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
    }
    this._ClientService.actualizarEmpleado(id, empleado).then(()=>{
      this.router.navigate(['/dashboard/clients']);
    });
  }
}
