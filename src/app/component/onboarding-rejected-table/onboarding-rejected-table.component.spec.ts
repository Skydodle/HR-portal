import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingRejectedTableComponent } from './onboarding-rejected-table.component';

describe('OnboardingRejectedTableComponent', () => {
  let component: OnboardingRejectedTableComponent;
  let fixture: ComponentFixture<OnboardingRejectedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingRejectedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingRejectedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
