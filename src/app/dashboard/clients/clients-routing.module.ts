import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientTravelsComponent } from './client-travels/client-travels.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
    children: [
      {
        path: 'clients',
        component: ClientListComponent
      },
      {
        path: 'client-edit/:id',
        component: ClientEditComponent
      },
      {
        path: 'client-travels/:id',
        component: ClientTravelsComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
