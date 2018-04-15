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
  baseYear:number;
  currYear:number;
  displayYear:number;

  // Pie
  public pieChartLabels:string[] = [
    'defense',
    'education',
    'general',
    'health_care',
    'pensions',
    'protection',
    'transportation',
    'welfare'
  ];
  public pieChartData:number[] = new Array<number>(8);
  public pieChartType:string = 'pie';

  constructor(
    private pastTaxService: PastTaxesService,
    private calculatorService: CalculatorService
  ) { 
    this.baseYear = 2000;
    this.currYear = 0;
    this.displayYear = this.baseYear + this.currYear;
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
        let key;
        let year;

        //Filter into array of arrays
        const importantStuff = Object.keys(taxes[i])
          .filter(key => allowed.includes(key))
          .map((obj, key) => {
            //console.log(taxes[i]);
            return [obj, parseInt(taxes[i][obj])];
          });

        singleTaxObj.push(importantStuff);
        

        let taxInfo = {
          key: taxes[i].key,
          year: taxes[i].year,
          all_taxes_2: singleTaxObj
        }

        finalTaxes.push(taxInfo)
      }

      this.setPastTaxes(finalTaxes);
      
    });
  }

  setPastTaxes(finalTaxes) {
    this.pastTaxes = finalTaxes;

    this.updatePieChart();
    console.log(this.pastTaxes);
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public onYearButtonClicked(e:any): void {
    this.currYear = (this.currYear + 1) % 18;
    this.displayYear = this.baseYear + this.currYear;
    this.updatePieChart();
  }

  public updatePieChart() {
    let i = 0;
    let j = 0;
    let currArr;
    let currArr2 = [];
    for(i; i < 25; i++) {
      if(this.displayYear.toString() == this.pastTaxes[i].year) {
        for(j; j < 8; j++) {
          currArr = this.pastTaxes[i].all_taxes_2[0][j][1];
          console.log(currArr);
          this.pieChartData[j] = parseInt(currArr);
        }
        break;
      }
    }
    console.log(this.pieChartData);
  }
}
