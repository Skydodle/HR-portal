import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaStatusDetailComponent } from './visa-status-detail.component';

describe('VisaStatusDetailComponent', () => {
  let component: VisaStatusDetailComponent;
  let fixture: ComponentFixture<VisaStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaStatusDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
