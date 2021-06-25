import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientTravelsComponent } from './client-travels/client-travels.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'client-list',
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
      { path: '', redirectTo: 'client-list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
