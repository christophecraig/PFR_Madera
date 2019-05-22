import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleModalPage } from './module-modal.page';

describe('ModuleModalPage', () => {
  let component: ModuleModalPage;
  let fixture: ComponentFixture<ModuleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
