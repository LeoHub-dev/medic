import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TariffsPageRoutingModule } from './tariffs-routing.module';

import { TariffsPage } from './tariffs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TariffsPageRoutingModule
  ],
  declarations: [TariffsPage]
})
export class TariffsPageModule {}
