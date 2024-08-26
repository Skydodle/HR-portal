import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEmployeeRejectedProfileComponent } from './onboarding-employee-rejected-profile.component';

describe('OnboardingEmployeeRejectedProfileComponent', () => {
  let component: OnboardingEmployeeRejectedProfileComponent;
  let fixture: ComponentFixture<OnboardingEmployeeRejectedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEmployeeRejectedProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingEmployeeRejectedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
