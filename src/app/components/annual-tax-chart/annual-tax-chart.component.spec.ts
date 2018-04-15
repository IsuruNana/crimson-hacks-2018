import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualTaxChartComponent } from './annual-tax-chart.component';

describe('AnnualTaxChartComponent', () => {
  let component: AnnualTaxChartComponent;
  let fixture: ComponentFixture<AnnualTaxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualTaxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualTaxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
