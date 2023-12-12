import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePagePageRoutingModule } from './detalle-page-routing.module';

import { DetallePagePage } from './detalle-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePagePageRoutingModule
  ],
  declarations: [DetallePagePage]
})
export class DetallePagePageModule {}
