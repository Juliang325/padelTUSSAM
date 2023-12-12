import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresPagePage } from './jugadores-page.page';

const routes: Routes = [
  {
    path: '',
    component: JugadoresPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresPagePageRoutingModule {}
