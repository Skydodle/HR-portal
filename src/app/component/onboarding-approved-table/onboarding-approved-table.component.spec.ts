import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingApprovedTableComponent } from './onboarding-approved-table.component';

describe('OnboardingApprovedTableComponent', () => {
  let component: OnboardingApprovedTableComponent;
  let fixture: ComponentFixture<OnboardingApprovedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingApprovedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingApprovedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
