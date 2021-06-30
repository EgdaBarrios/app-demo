import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-driver-doc',
  templateUrl: './driver-doc.component.html',
  styleUrls: ['./driver-doc.component.css']
})
export class DriverDocComponent implements OnInit {
  id_Driver: string | null;
  editDriver: FormGroup;

  constructor(
    private _DriversService: DriversService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private firestore: AngularFirestore
  ){
    //Extra Data
    //
    this.id_Driver=this.aRouter.snapshot.paramMap.get('id_Driver'),
    this.editDriver=this.fb.group({
      fullname: '',
      status: '',
    })
  }

  ngOnInit(): void {
    this.getDataAllDrivers()
  }
  getDataAllDrivers(){
    if(this.id_Driver!=null)
    this._DriversService._getDataDrivers(this.id_Driver).subscribe(dataDriver=>{
      this.editDriver.setValue({
        fullname: dataDriver.payload.data()['name'] +' '+ dataDriver.payload.data()['middle_name'] +' '+ dataDriver.payload.data()['last_name'],
        status: dataDriver.payload.data()['status']
      })
    })
  }
}
