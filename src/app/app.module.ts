import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AnnualTaxListComponent } from './components/annual-tax-list/annual-tax-list.component';


//Services
import { PastTaxesService } from './services/past-taxes.service';
import { CalculatorService } from './services/calculator.service';

import { UserFormComponent } from './components/user-form/user-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AnnualTaxChartComponent } from './components/annual-tax-chart/annual-tax-chart.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { AnnualTaxChartDynamicComponent } from './components/annual-tax-chart-dynamic/annual-tax-chart-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnualTaxListComponent,
    UserFormComponent,
    NavBarComponent,
    AnnualTaxChartComponent,
    AnnualTaxChartDynamicComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'tax-trackr'),
    AngularFireAuthModule,
    AppRoutingModule,
    ChartsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireDatabase,
    PastTaxesService,
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
