import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingSummaryComponent } from './housing-summary.component';

describe('HousingSummaryComponent', () => {
  let component: HousingSummaryComponent;
  let fixture: ComponentFixture<HousingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
