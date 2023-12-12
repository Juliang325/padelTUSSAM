import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidospagePageRoutingModule } from './partidospage-routing.module';

import { PartidospagePage } from './partidospage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartidospagePageRoutingModule
  ],
  declarations: [PartidospagePage]
})
export class PartidospagePageModule {}
