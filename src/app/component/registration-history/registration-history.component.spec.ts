import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationHistoryComponent } from './registration-history.component';

describe('RegistrationHistoryComponent', () => {
  let component: RegistrationHistoryComponent;
  let fixture: ComponentFixture<RegistrationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
