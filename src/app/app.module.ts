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
import { UserFormComponent } from './components/user-form/user-form.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AnnualTaxListComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'tax-trackr'),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireDatabase,
    PastTaxesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
