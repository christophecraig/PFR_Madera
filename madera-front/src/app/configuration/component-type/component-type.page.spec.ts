import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTypePage } from './component-type.page';

describe('ComponentTypePage', () => {
  let component: ComponentTypePage;
  let fixture: ComponentFixture<ComponentTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
