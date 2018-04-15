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
import { UserFormComponent } from './components/user-form/user-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AnnualTaxChartComponent } from './components/annual-tax-chart/annual-tax-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnualTaxListComponent,
    UserFormComponent,
    NavBarComponent,
    AnnualTaxChartComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'tax-trackr'),
    AngularFireAuthModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireDatabase,
    PastTaxesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
