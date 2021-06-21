import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private firestore:AngularFirestore){}

  getEmpleados(): Observable<any>{
    return this.firestore.collection('Clients').snapshotChanges();
  }

  getEmpleado(id: string):Observable <any>{
    return this.firestore.collection('Clients').doc(id).snapshotChanges();
  }

  actualizarEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('Clients').doc(id).update(data);
  }
}
