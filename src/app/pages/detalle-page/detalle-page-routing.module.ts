import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePagePage } from './detalle-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePagePageRoutingModule {}
