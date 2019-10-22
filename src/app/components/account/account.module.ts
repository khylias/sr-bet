import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { ParametersComponent } from './parameters/parameters.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [AccountComponent, ParametersComponent, HistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
      },
      {
        path: 'historique-commandes',
        component: HistoryComponent
      },
      {
        path: 'parametres',
        component: ParametersComponent
      }
    ])
  ]
})
export class AccountModule { }
