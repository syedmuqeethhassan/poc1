import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginpage2Component } from './loginpage2.component';

describe('Loginpage2Component', () => {
  let component: Loginpage2Component;
  let fixture: ComponentFixture<Loginpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loginpage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
