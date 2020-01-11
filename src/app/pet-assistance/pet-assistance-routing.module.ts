import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetAssistancePage } from './pet-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: PetAssistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetAssistancePageRoutingModule {}
