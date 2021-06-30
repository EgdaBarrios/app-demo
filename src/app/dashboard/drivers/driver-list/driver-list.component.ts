import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  Drivers : any[]=[];
  StatusDrivers: any[]=[];
  fullnameFilter="";
  filtrado="";
  filtrado2="";
  filterVehicle_Plate="";
  constructor(
    private _DriversService:DriversService,
  ) {

  }

  ngOnInit(): void {
    this.getDataAllDrivers()
  }

  getDataAllDrivers(){
    this._DriversService._getDataAllDrivers().subscribe(dataDrivers=>{
      this.Drivers=[]
      dataDrivers.forEach((getAllData :any) => {
        this.Drivers.push({
        id_Driver:getAllData.payload.doc.id,
        fullname:getAllData.payload.doc.data()['name'] +' '+getAllData.payload.doc.data()['middle_name'] +' '+getAllData.payload.doc.data()['last_name'],
        ...getAllData.payload.doc.data()
        })
      });
    })
  }

}
