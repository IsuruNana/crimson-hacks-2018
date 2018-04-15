import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { PastTaxesService } from '../../services/past-taxes.service';
import { CalculatorService } from '../../services/calculator.service';
import { Taxes } from '../../models/taxes';

@Component({
  selector: 'app-annual-tax-chart',
  templateUrl: './annual-tax-chart.component.html',
  styleUrls: ['./annual-tax-chart.component.css']
})
export class AnnualTaxChartComponent implements OnInit {
  //Declare data type
  pastTaxes:Taxes[];
  specificTaxes:any[];
  singleTax:Taxes;

  constructor(
    private pastTaxService: PastTaxesService,
    private calculatorService: CalculatorService
  ) { 
    this.specificTaxes = new Array<Taxes>();
    this.singleTax = new Taxes();
  }

  ngOnInit() {
    this.pastTaxService.getClients().subscribe(taxes => {
      //Used to get key count
      const filtered = Object.keys(taxes);
      const finalTaxes = [];

      //Keep these keys
      const allowed = [
        'defense',
        'education',
        'general',
        'health_care',
        'pensions',
        'protection',
        'transportation',
        'welfare'
      ];
      
      for(let i = 0; i < filtered.length; i++) {
        let singleTaxObj = [];

        // const importantStuff = Object.keys(taxes[i])
        //   .filter(key => allowed.includes(key))
        //   .reduce((obj, key) => {
        //     obj[key] = taxes[i][key];
        //     return obj;
        //   }, {});
          

        const importantStuff = Object.keys(taxes[i])
          .filter(key => allowed.includes(key))
          .map((obj, key) => {
            console.log(taxes[i]);
            return [obj, taxes[i][obj]];
          });

        singleTaxObj.push(importantStuff);
        this.singleTax.all_taxes_2 = singleTaxObj;
        finalTaxes.push(this.singleTax)

      }

      this.setPastTaxes(finalTaxes);
      
      //console.log(filtered);
      console.log(finalTaxes);

      //console.log(this.pastTaxes);
      //this.calculatorService.getTotal(this.pastTaxes[1]);
    });
  }

  setPastTaxes(finalTaxes) {
    this.pastTaxes = finalTaxes;
  }

}
