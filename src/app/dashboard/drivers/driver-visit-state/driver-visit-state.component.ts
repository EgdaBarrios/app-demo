import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-driver-visit-state',
  templateUrl: './driver-visit-state.component.html',
  styleUrls: ['./driver-visit-state.component.css']
})
export class DriverVisitStateComponent implements OnInit {
  id_Driver: string | null;
  dataDriver: FormGroup;
  newStatus: FormGroup;
  dataStatusDriver: any[] = [];
  //Value
  statusValue = "";

  constructor(
    private firestore: AngularFirestore,
    private aRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private _DriverService: DriversService
  ) {
    this.id_Driver = this.aRouter.snapshot.paramMap.get('id_Driver')
    this.dataDriver = this.fb.group({
      fullname: '',
      status: ''
    })
    this.newStatus=this.fb.group({
      status: '',
      status_motive: '',
      status_comentary: '',
    })
  }

  ngOnInit(): void {
    this.getDataDriver()
    this.getDataStatus()
  }

  getDataDriver() {
    if (this.id_Driver != null) {
      this._DriverService._getDataDrivers(this.id_Driver).subscribe((dataInfo: any) => {
        this.dataDriver.setValue({
          fullname: dataInfo.payload.data()['name'] + '  ' + dataInfo.payload.data()['middle_name'] + ' ' + dataInfo.payload.data()['last_name'],
          status: dataInfo.payload.data()['status']
        })
      });
    }
  }

  getDataStatus() {
    this._DriverService._getDataStatusDriver(this.id_Driver).subscribe(data => {
      this.dataStatusDriver = [];
      data.forEach((element: any) => {
        this.dataStatusDriver.push({
          id_document: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
}

  onSubmit() {
    const newStatus: any = {
      status: this.newStatus.value.status,
      status_motive: this.newStatus.value.status_motive,
      status_comentary: this.newStatus.value.status_comentary,
      id_Driver: this.id_Driver,
      date_status: new Date()
    }
    this._DriverService.addStatus(newStatus)
    this.EditStatusOnDriver()
  }

  EditStatusOnDriver(){
    if (this.id_Driver != null) {
    const data: any = {
      status: this.newStatus.value.status
    }
    this._DriverService.updateDriver(this.id_Driver,data)
  }
  }
  
}
