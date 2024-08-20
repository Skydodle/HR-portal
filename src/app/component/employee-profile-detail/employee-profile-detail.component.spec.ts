import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileDetailComponent } from './employee-profile-detail.component';

describe('EmployeeProfileDetailComponent', () => {
  let component: EmployeeProfileDetailComponent;
  let fixture: ComponentFixture<EmployeeProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
