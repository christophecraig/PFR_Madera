import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPage } from './component.page';

describe('ComponentPage', () => {
  let component: ComponentPage;
  let fixture: ComponentFixture<ComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
