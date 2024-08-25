import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeTestComponent } from './get-employee-test.component';

describe('GetEmployeeTestComponent', () => {
  let component: GetEmployeeTestComponent;
  let fixture: ComponentFixture<GetEmployeeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmployeeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
