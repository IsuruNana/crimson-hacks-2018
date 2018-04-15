import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnualTaxListComponent } from './components/annual-tax-list/annual-tax-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AnnualTaxChartComponent} from './components/annual-tax-chart/annual-tax-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/annual-tax-list', pathMatch: 'full' },
  { path: 'annual-tax-list', component: AnnualTaxListComponent },
  { path: 'annual-tax-chart', component: AnnualTaxChartComponent },
  { path: 'user-form', component: UserFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
