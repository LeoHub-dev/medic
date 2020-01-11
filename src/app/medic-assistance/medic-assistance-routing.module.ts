import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicAssistancePage } from './medic-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: MedicAssistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicAssistancePageRoutingModule {}
