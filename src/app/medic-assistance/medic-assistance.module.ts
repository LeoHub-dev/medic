import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicAssistancePageRoutingModule } from './medic-assistance-routing.module';

import { MedicAssistancePage } from './medic-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicAssistancePageRoutingModule
  ],
  declarations: [MedicAssistancePage]
})
export class MedicAssistancePageModule {}
