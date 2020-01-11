import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeAssistancePageRoutingModule } from './bike-assistance-routing.module';

import { BikeAssistancePage } from './bike-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeAssistancePageRoutingModule
  ],
  declarations: [BikeAssistancePage]
})
export class BikeAssistancePageModule {}
