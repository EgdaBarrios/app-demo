import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private firestore:AngularFirestore){}

  getClients(): Observable<any>{
    return this.firestore.collection('Clients').snapshotChanges();
  }

  getClient(id: string):Observable <any>{
    return this.firestore.collection('Clients').doc(id).snapshotChanges();
  }

  updateClient(id: string, data:any): Promise<any> {
    return this.firestore.collection('Clients').doc(id).update(data);
  }

  getdataTravels2(id: any) {
    return this.firestore.collection('Travels',ref=>ref.where('client_id','==',id)).snapshotChanges();
  }

  getMoreDestination(id: any){
    return this.firestore.collection('Travels',ref=>ref.where('client_id','==',id).where('is_multidestination', '==' , true)).snapshotChanges();
  }
  getMoreDestination2(ids: any){
    return this.firestore.collection('Travels').doc(ids).collection('Destinations').get();
  }
  
}

