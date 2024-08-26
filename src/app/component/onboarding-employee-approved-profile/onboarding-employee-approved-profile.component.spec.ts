import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEmployeeApprovedProfileComponent } from './onboarding-employee-approved-profile.component';

describe('OnboardingEmployeeApprovedProfileComponent', () => {
  let component: OnboardingEmployeeApprovedProfileComponent;
  let fixture: ComponentFixture<OnboardingEmployeeApprovedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEmployeeApprovedProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingEmployeeApprovedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
