import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresPagePageRoutingModule } from './jugadores-page-routing.module';

import { JugadoresPagePage } from './jugadores-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresPagePageRoutingModule
  ],
  declarations: [JugadoresPagePage]
})
export class JugadoresPagePageModule {}
