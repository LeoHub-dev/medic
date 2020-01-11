import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepatriationAssistancePageRoutingModule } from './repatriation-assistance-routing.module';

import { RepatriationAssistancePage } from './repatriation-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepatriationAssistancePageRoutingModule
  ],
  declarations: [RepatriationAssistancePage]
})
export class RepatriationAssistancePageModule {}
