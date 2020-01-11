import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetAssistancePageRoutingModule } from './pet-assistance-routing.module';

import { PetAssistancePage } from './pet-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetAssistancePageRoutingModule
  ],
  declarations: [PetAssistancePage]
})
export class PetAssistancePageModule {}
