import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TariffsPage } from './tariffs.page';

const routes: Routes = [
  {
    path: '',
    component: TariffsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TariffsPageRoutingModule {}
