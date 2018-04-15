import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  getTotal(year:any) {
    console.log(year);
  }
}
