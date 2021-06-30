import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-driver-vehicle',
  templateUrl: './driver-vehicle.component.html',
  styleUrls: ['./driver-vehicle.component.css']
})
export class DriverVehicleComponent implements OnInit {
  Drivers: any[]=[];
  editDriver: FormGroup;
  id_Driver:string|null;
  Color:Observable<any[]>;
  //
  Colorvalue=""
  constructor(
    private _DriversService: DriversService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private firestore: AngularFirestore
  ){
    //Extra Data
    this.Color = firestore.collection('VehicleColor').valueChanges();
    //
    this.id_Driver=this.aRouter.snapshot.paramMap.get('id_Driver'),
    this.editDriver=this.fb.group({
      fullname: '',
      status: '',
      vehicle_plate: '',
      vehicle_year: '',
      vehicle_color: '',
      vehicle_license: '',
      vehicle_brand: '',
      vehicle_model: '',
      property_card: '',

    });
   }


  ngOnInit(): void {
    this.getDataAllDrivers();
  }
  
  getDataAllDrivers(){
    if(this.id_Driver!=null)
    this._DriversService._getDataDrivers(this.id_Driver).subscribe(dataDriver=>{
      this.editDriver.setValue({
        fullname: dataDriver.payload.data()['name'] +' '+ dataDriver.payload.data()['middle_name'] +' '+ dataDriver.payload.data()['last_name'],
        status: dataDriver.payload.data()['status'],
        vehicle_plate: dataDriver.payload.data()['vehicle_plate'],
        vehicle_year: dataDriver.payload.data()['vehicle_year'],
        vehicle_color: dataDriver.payload.data()['vehicle_color']['color_id'],
        vehicle_license: dataDriver.payload.data()['vehicle_license'],
        vehicle_brand: dataDriver.payload.data()['vehicle_brand'],
        vehicle_model: dataDriver.payload.data()['vehicle_model'],
        property_card: dataDriver.payload.data()['property_card']
        })
      })
    }

    onSubmit(){
      if(this.id_Driver!==null){
        this.EditDriver(this.id_Driver);
        }
    }

    EditDriver(id_Driver:string) {
      const Driver: any = {
        vehicle_plate: this.editDriver.value.vehicle_plate,
        vehicle_year: this.editDriver.value.vehicle_year,
        'vehicle_color.color_id': this.editDriver.value.vehicle_color,
        vehicle_license : this.editDriver.value.vehicle_license,
        vehicle_brand: this.editDriver.value.vehicle_brand,
        vehicle_model: this.editDriver.value.vehicle_model,
        property_card: this.editDriver.value.property_card,
      }
      this._DriversService.updateDriver(id_Driver, Driver).then(()=>{
        this.router.navigate(['/dashboard/drivers/driver-list']);
      });
    }

}
