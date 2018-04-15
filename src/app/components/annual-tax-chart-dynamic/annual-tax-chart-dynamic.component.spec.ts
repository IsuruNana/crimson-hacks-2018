import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualTaxChartDynamicComponent } from './annual-tax-chart-dynamic.component';

describe('AnnualTaxChartDynamicComponent', () => {
  let component: AnnualTaxChartDynamicComponent;
  let fixture: ComponentFixture<AnnualTaxChartDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualTaxChartDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualTaxChartDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
