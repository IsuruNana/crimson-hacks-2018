import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualTaxListComponent } from './annual-tax-list.component';

describe('AnnualTaxListComponent', () => {
  let component: AnnualTaxListComponent;
  let fixture: ComponentFixture<AnnualTaxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualTaxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualTaxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
