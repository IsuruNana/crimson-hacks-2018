import { Injectable } from '@angular/core';
import { Taxes } from '../models/taxes';

@Injectable()
export class CalculatorService {

  constructor() { }

  getTotal(taxForTheYear:Taxes) {
    console.log(taxForTheYear);
  }
}
