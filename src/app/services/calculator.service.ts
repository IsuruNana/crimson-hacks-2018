import { Injectable } from '@angular/core';
import { Taxes } from '../models/taxes';

@Injectable()
export class CalculatorService {
  total:number;
  index:number;
  taxArray:any[];

  constructor() { 
  }

  //Get total taxes for single year
  getTotal(taxForTheYear:Taxes) {
    //console.log(taxForTheYear);
    //this.taxArray = Array.from(taxForTheYear.all_taxes);

    this.total = 0;
    //for(this.index = 0; this.index < taxForTheYear.all_taxes.size; )
  }

  

}
