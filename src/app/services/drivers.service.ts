import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private firestore:AngularFirestore) {}
  
  _getDataAllDrivers(): Observable<any>{
    return this.firestore.collection('Drivers').snapshotChanges();
  }

  _getDataDrivers(id_Driver:string): Observable<any>{
    return this.firestore.collection('Drivers').doc(id_Driver).snapshotChanges();
  }

  _getDataInspectDriver(id_Driver:string): Observable<any>{
    return this.firestore.collection('InspectionSheet').doc(id_Driver).snapshotChanges();
  }
  
  updateDriver(id_Driver: string, data:any): Promise<any> {
    return this.firestore.collection('Drivers').doc(id_Driver).update(data);
  }

  addStatus(newStatus:any): Promise<any> {
    return this.firestore.collection('StatusDriver').add(newStatus);
  }

  _getDataStatusDriver(id_Driver:any): Observable<any>{
    return this.firestore.collection('StatusDriver',ref=>ref.where('id_Driver','==',id_Driver).orderBy('date_status','asc')).snapshotChanges();
  }

  _getDataInspectionSheetDriver(id_Driver:any): Observable<any>{
    return this.firestore.collection('InspectionSheet',ref=>ref.where('id_Driver','==',id_Driver).orderBy('date_visite','asc')).snapshotChanges();
  }

  addInspection(newInspection:any): Promise<any> {
    return this.firestore.collection('InspectionSheet').add(newInspection);
  }

}
