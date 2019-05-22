import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationModalPage } from './specification-modal.page';

describe('SpecificationModalPage', () => {
  let component: SpecificationModalPage;
  let fixture: ComponentFixture<SpecificationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
