import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEmployeeProfileComponent } from './onboarding-employee-profile.component';

describe('OnboardingEmployeeProfileComponent', () => {
  let component: OnboardingEmployeeProfileComponent;
  let fixture: ComponentFixture<OnboardingEmployeeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEmployeeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
