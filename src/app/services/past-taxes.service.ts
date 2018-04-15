import { Injectable } from '@angular/core';
import {
  AngularFireDatabase, 
  AngularFireList, 
  AngularFireObject} from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

import { Taxes } from '../models/taxes';

@Injectable()
export class PastTaxesService {
  taxesRef: AngularFireList<any>;
  taxesPast: Observable<any[]>;
  tax: Observable<any>;

  // pastTaxesReturn:any[];

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.taxesRef = this.db.list('past-taxes');
    this.taxesPast = this.taxesRef.snapshotChanges().map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
    });
  }

  getClients() {
    return this.taxesPast;
  }

  // getClientsFormatted() {
  //   return this.taxesPast.subscribe(taxes => {
  //     //this.pastTaxes = taxes;
  //     this.pastTaxes= taxes.map(tax => {
  //       console.log(tax);
  //       return {
          
  //       };
  //     });
  //   });
  // }

}
