import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNavbarLayoutComponent } from './no-navbar-layout.component';

describe('NoNavbarLayoutComponent', () => {
  let component: NoNavbarLayoutComponent;
  let fixture: ComponentFixture<NoNavbarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoNavbarLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoNavbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
