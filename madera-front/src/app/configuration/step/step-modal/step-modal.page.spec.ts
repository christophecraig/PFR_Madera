import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepModalPage } from './step-modal.page';

describe('StepModalPage', () => {
  let component: StepModalPage;
  let fixture: ComponentFixture<StepModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
