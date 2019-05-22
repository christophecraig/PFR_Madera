import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitModalPage } from './unit-modal.page';

describe('UnitModalPage', () => {
  let component: UnitModalPage;
  let fixture: ComponentFixture<UnitModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
