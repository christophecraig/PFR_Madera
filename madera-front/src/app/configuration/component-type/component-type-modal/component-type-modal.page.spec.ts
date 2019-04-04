import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTypeModalPage } from './component-type-modal.page';

describe('ComponentTypeModalPage', () => {
  let component: ComponentTypeModalPage;
  let fixture: ComponentFixture<ComponentTypeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTypeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTypeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
