import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPendingTableComponent } from './onboarding-pending-table.component';

describe('OnboardingPendingTableComponent', () => {
  let component: OnboardingPendingTableComponent;
  let fixture: ComponentFixture<OnboardingPendingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingPendingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingPendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
