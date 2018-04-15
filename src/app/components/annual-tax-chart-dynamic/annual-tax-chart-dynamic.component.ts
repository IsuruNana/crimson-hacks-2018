import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { PastTaxesService } from '../../services/past-taxes.service';
import { CalculatorService } from '../../services/calculator.service';
import { Taxes } from '../../models/taxes';

@Component({
  selector: 'app-annual-tax-chart-dynamic',
  templateUrl: './annual-tax-chart-dynamic.component.html',
  styleUrls: ['./annual-tax-chart-dynamic.component.css']
})
export class AnnualTaxChartDynamicComponent implements OnInit {

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = [
    '2000',
  ];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(
    private pastTaxService: PastTaxesService,
  ) { }

  ngOnInit() {
    this.pastTaxService.getClients().subscribe(taxes => {
      //Used to get key count
      const filtered = Object.keys(taxes);
      const finalTaxes = [];
      const labels = [];

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
        if(taxes[i].year.toString() != "year" && taxes[i].year < 2018)
          labels.push(taxes[i].year.toString());
        

        let taxInfo = {
          key: taxes[i].key,
          year: taxes[i].year,
          all_taxes_2: singleTaxObj
        }

        finalTaxes.push(taxInfo);

      }

      console.log(labels);
      this.publicSetLables(labels);
      
    });
  
  }

  publicSetLables(labels) {
    this.lineChartLabels = labels;
  }

  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
