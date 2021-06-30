import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-inspection',
  templateUrl: './driver-inspection.component.html',
  styleUrls: ['./driver-inspection.component.css']
})
export class DriverInspectionComponent implements OnInit {
  id_Driver: string | null;
  Drivers: any[]=[];
  dataInspectionSheet: any[] = [];
  Driver_Inspect: FormGroup;
  newInspect: FormGroup;

  //Value
  valueStatus="";

  constructor(
    private _DriversService:DriversService,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder
  ){ 
    this.id_Driver=this.aRouter.snapshot.paramMap.get('id_Driver')
    this.Driver_Inspect=this.fb.group({
      fullname: '',
      status: ''
    });
    this.newInspect=this.fb.group({
      date_visite: '',
      inspect_comentary: '',
      inspect_hour: '',
      status: '',
    })

  }

  ngOnInit(){
    this.getFullnameStatusDriver()
    this.getDataInspectionSheetByDriver()
  }

  getDataInspectionSheetByDriver() {
    this._DriversService._getDataInspectionSheetDriver(this.id_Driver).subscribe(data => {
      this.dataInspectionSheet = [];
      data.forEach((element: any) => {
        this.dataInspectionSheet.push({
         id_document: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
  }

  onSubmit() {
    const newInspection: any = {
      date_visite: this.newInspect.value.date_visite,
      status: this.newInspect.value.status,
      inspect_comentary: this.newInspect.value.inspect_comentary,
      inspect_hour: this.newInspect.value.inspect_hour,
      id_Driver: this.id_Driver,
    }
    this._DriversService.addInspection(newInspection)
  }

  getFullnameStatusDriver(){
    if(this.id_Driver!=null)
    this._DriversService._getDataDrivers(this.id_Driver).subscribe(dataDriver=>{
      this.Driver_Inspect.setValue({
        fullname: dataDriver.payload.data()['name'] +' '+ dataDriver.payload.data()['middle_name'] +' '+ dataDriver.payload.data()['last_name'],
        status: dataDriver.payload.data()['status']
      })
    })
  }



  

}
