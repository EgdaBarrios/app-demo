import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
  //Obtain Extra Date
  Documents: Observable<any[]>;
  Sex: Observable<any[]>;
  Departments: Observable<any[]>;
  Districts: Observable<any[]>;
  Provinces: Observable<any[]>;
  id_Driver: string|null;
  

  //Arrays

  editDriver: FormGroup;

  //Values
  documentValue: any;
  sexValue: any;
  StatusValue: any;
  districtValue: any;
  departmentValue: any;
  provinceValue: any;

  constructor(private aRouter:ActivatedRoute,
    private _DriversService:DriversService,
    private fb:FormBuilder,
    private aRoute: ActivatedRoute,
    private router:Router,
    private firestore: AngularFirestore
    )
    { 
      //Obtain Extra Date
    this.Documents = firestore.collection('DocumentTypes').valueChanges();
    this.Sex = firestore.collection('Sex').valueChanges();
    this.Departments = firestore.collection('Departments').valueChanges();
    this.Districts = firestore.collection('Districts').valueChanges();
    this.Provinces = firestore.collection('Provinces').valueChanges();
      //
    this.id_Driver=this.aRouter.snapshot.paramMap.get('id_Driver'),
    this.editDriver=this.fb.group({
      name: '',
      middle_name: '',
      last_name: '',
      document_number: '',
      sex: '',
      status: '',
      address: '',
      department: '',
      province: '',
      district: '',
      email : '',
      date_birth: '',
      license_number: '',
      date_DueDate: '',
      phone_number: '',
      reference: '',
      document_type: '',
    });
  }
  
  ngOnInit(): void {
    this.getDataAllDrivers()
  }

  getDataAllDrivers(){
    if(this.id_Driver!=null)
    this._DriversService._getDataDrivers(this.id_Driver).subscribe(dataDriver=>{
      this.editDriver.setValue({
        name: dataDriver.payload.data()['name'],
        middle_name: dataDriver.payload.data()['middle_name'],
        last_name: dataDriver.payload.data()['last_name'],
        document_number: dataDriver.payload.data()['document_number'],
        document_type: dataDriver.payload.data()['document_type']['type_id'],
        sex: dataDriver.payload.data()['sex']['sex_id'],
        status: dataDriver.payload.data()['status'],
        address: dataDriver.payload.data()['address'],
        department: dataDriver.payload.data()['department']['department_id'],
        province: dataDriver.payload.data()['province']['province_id'],
        district: dataDriver.payload.data()['district']['district_id'],
        email : dataDriver.payload.data()['email'],
        date_birth: dataDriver.payload.data()['date_birth'],
        license_number: dataDriver.payload.data()['license_number'],
        date_DueDate: dataDriver.payload.data()['date_DueDate'],
        phone_number: dataDriver.payload.data()['phone_number'],
        reference: dataDriver.payload.data()['reference'],
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
          name: this.editDriver.value.name,
          middle_name: this.editDriver.value.middle_name,
          last_name: this.editDriver.value.last_name,
          document_number: this.editDriver.value.document_number,
          'document_type.type_id': this.editDriver.value.document_type,
          'district.district_id': this.editDriver.value.district,
          'sex.sex_id' : this.editDriver.value.sex,
          status: this.editDriver.value.status,
          address: this.editDriver.value.address,
          'department.department_id': this.editDriver.value.department,
          'province.province_id': this.editDriver.value.province,
          email : this.editDriver.value.email,
          date_birth: this.editDriver.value.date_birth,
          license_number: this.editDriver.value.license_number,
          date_DueDate: this.editDriver.value.date_DueDate,
          phone_number: this.editDriver.value.phone_number,
          reference: this.editDriver.value.reference
        }
        this._DriversService.updateDriver(id_Driver, Driver).then(()=>{
          this.router.navigate(['/dashboard/drivers/driver-list']);
        });
      }


      
  }

