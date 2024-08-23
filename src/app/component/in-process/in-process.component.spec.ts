import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessComponent } from './in-process.component';

describe('InProcessComponent', () => {
  let component: InProcessComponent;
  let fixture: ComponentFixture<InProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
