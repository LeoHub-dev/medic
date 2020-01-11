import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'tariffs',
    loadChildren: () => import('./tariffs/tariffs.module').then(m => m.TariffsPageModule)
  },
  {
    path: 'benefits',
    loadChildren: () => import('./benefits/benefits.module').then(m => m.BenefitsPageModule)
  },
  {
    path: 'pet-assistance',
    loadChildren: () => import('./pet-assistance/pet-assistance.module').then(m => m.PetAssistancePageModule)
  },
  {
    path: 'medic-assistance',
    loadChildren: () => import('./medic-assistance/medic-assistance.module').then(m => m.MedicAssistancePageModule)
  },
  {
    path: 'repatriation-assistance',
    loadChildren: () => import('./repatriation-assistance/repatriation-assistance.module').then(m => m.RepatriationAssistancePageModule)
  },
  {
    path: 'bike-assistance',
    loadChildren: () => import('./bike-assistance/bike-assistance.module').then(m => m.BikeAssistancePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
