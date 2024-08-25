import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfilesSummaryComponent } from './employee-profiles-summary.component';

describe('EmployeeProfilesSummaryComponent', () => {
  let component: EmployeeProfilesSummaryComponent;
  let fixture: ComponentFixture<EmployeeProfilesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfilesSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfilesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
