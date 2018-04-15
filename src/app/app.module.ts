import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AnnualTaxListComponent } from './components/annual-tax-list/annual-tax-list.component';


//Services
import { PastTaxesService } from './services/past-taxes.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnualTaxListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'tax-trackr'),
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireDatabase,
    PastTaxesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
