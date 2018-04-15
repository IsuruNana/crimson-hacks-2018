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

  constructor(
    private pastTaxService: PastTaxesService,
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.pastTaxService.getClients().subscribe(taxes => {
      //this.pastTaxes = taxes;
      this.pastTaxes= taxes.map(tax => {
        //console.log(tax);
        return {
          key: tax.key,
          all_taxes: {
            defense: tax.defense,
            education:tax.education,
            general:tax.general,
            health_care:tax.health_care,
            pensions:tax.pensions,
            protection:tax.protection,
            transportation:tax.transportation,
            welfare:tax.welfare
          },
          year: tax.year
        };
      });
      console.log(this.pastTaxes);
      this.calculatorService.getTotal(this.pastTaxes[1]);
    });
  }

}
