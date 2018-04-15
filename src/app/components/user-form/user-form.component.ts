import { Component, OnInit, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  total:number;
  percents:number[];
  buttonDisable:boolean;
  warning:string;
  categories:string[];

  value = 0;
  disabled = false;

  constructor() { 
    this.total = 100;
    this.percents = new Array<number>(8);
    this.categories = [
      'Defense',
      'Education',
      'Health Care',
      'Pensions',
      'Protection',
      'Transportation',
      'Welfare'
    ]
  }

  ngOnInit() {
  }

  trackValue(index, value) {
    console.log(value);
    //return hero ? hero.id : undefined;
  }

}
