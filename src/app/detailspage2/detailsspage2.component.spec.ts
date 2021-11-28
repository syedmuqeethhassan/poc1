import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailspage2Component } from './detailspage2.component';

describe('Detailspage2Component', () => {
  let component: Detailspage2Component;
  let fixture: ComponentFixture<Detailspage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detailspage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailspage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
