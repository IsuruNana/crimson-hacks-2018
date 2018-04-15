import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'

import { PastTaxesService } from '../../services/past-taxes.service';
import { Taxes } from '../../models/taxes';

@Component({
  selector: 'app-annual-tax-list',
  templateUrl: './annual-tax-list.component.html',
  styleUrls: ['./annual-tax-list.component.css']
})
export class AnnualTaxListComponent implements OnInit {
  //Declare data type
  pastTaxes:any[];

  constructor(
    private pastTaxService: PastTaxesService
  ) { }

  ngOnInit() {
    this.pastTaxService.getClients().subscribe(taxes => {
      console.log(taxes);
      this.pastTaxes = taxes;
    });
  }

}
