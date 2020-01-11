import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepatriationAssistancePage } from './repatriation-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: RepatriationAssistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepatriationAssistancePageRoutingModule {}
