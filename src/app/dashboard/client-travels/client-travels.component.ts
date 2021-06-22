import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-travels',
  templateUrl: './client-travels.component.html',
  styleUrls: ['./client-travels.component.css']
})
export class ClientTravelsComponent implements OnInit {

  id:string|null;

  constructor(
    private _ClientService: ClientsService,
    private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }

}
