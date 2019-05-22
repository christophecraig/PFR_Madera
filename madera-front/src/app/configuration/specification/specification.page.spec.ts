import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationPage } from './specification.page';

describe('SpecificationPage', () => {
  let component: SpecificationPage;
  let fixture: ComponentFixture<SpecificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
