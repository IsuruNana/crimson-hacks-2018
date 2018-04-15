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
    {data: [], label: 'defense'},
    {data: [], label: 'education'},
    {data: [], label: 'general'},
    {data: [], label: 'health_care'},
    {data: [], label: 'pensions'},
    {data: [], label: 'protection'},
    {data: [], label: 'transportation'},
    {data: [], label: 'welfare'},
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(
    private pastTaxService: PastTaxesService,
  ) {

  }

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
          .forEach((obj, key) => {
            //console.log(taxes[i]);
            //console.log(obj);
            //console.log(taxes[i][obj]);
            let entry = {
              label: obj,
              value: taxes[i][obj]
            }
            this.setLineChartData(entry);
        });

        singleTaxObj.push(importantStuff);
        if(taxes[i].year.toString() != "year" && taxes[i].year < 2018)
          labels.push(taxes[i].year.toString());


        let taxInfo = {
          key: taxes[i].key,
          year: taxes[i].year,
          all_taxes_2: singleTaxObj
        }

        let entry = {
          label: taxes[i]
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

  setLineChartData(entry) {
    console.log(entry);
    //this.lineChartData.push(entry);
    let i = 0;
    for(i; i < this.lineChartData.length; i++) {
      if(this.lineChartData[i].label == entry.label) {
        this.lineChartData[i].data.push(entry.value);
      }
    }
  }


  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(0,255,0,0.3)',
      borderColor: 'rgba(0,255,0,1)',
      pointBackgroundColor: 'rgba(0,255,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'rgba(0,0,255,1)',
      pointBackgroundColor: 'rgba(0,0,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {
      backgroundColor: 'rgba(255,255,0,0.3)',
      borderColor: 'rgba(255,255,0,1)',
      pointBackgroundColor: 'rgba(255,255,0,1)',
      pointBorderColor: '#3399ff',
      pointHoverBackgroundColor: '#3399ff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

  },
  {
      backgroundColor: 'rgba(0,255,255,0.3)',
      borderColor: 'rgba(0,255,255,1)',
      pointBackgroundColor: 'rgba(0,255,255,1)',
      pointBorderColor: '#3399ff',
      pointHoverBackgroundColor: '#3399ff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

  },
  {
      backgroundColor: 'rgba(255,0,255,0.3)',
      borderColor: 'rgba(255,0,255,1)',
      pointBackgroundColor: 'rgba(255,0,255,1)',
      pointBorderColor: '#3399ff',
      pointHoverBackgroundColor: '#3399ff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

  },
  {
      backgroundColor: 'rgba(128,0,0,0.3)',
      borderColor: 'rgba(128,0,0,1)',
      pointBackgroundColor: 'rgba(128,0,0,1)',
      pointBorderColor: '#3399ff',
      pointHoverBackgroundColor: '#3399ff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

  },
  {
      backgroundColor: 'rgba(0,128,128,0.3)',
      borderColor: 'rgba(0,128,128,1)',
      pointBackgroundColor: 'rgba(0,128,128,1)',
      pointBorderColor: '#3399ff',
      pointHoverBackgroundColor: '#3399ff',
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
