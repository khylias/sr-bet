import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'panier',
    component: CheckoutComponent
  },
  {
    path: 'espace-client',
    loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'authentification',
    loadChildren: () => import('./components/authentification/authentification.module').then(m => m.AuthentificationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
