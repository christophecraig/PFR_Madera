import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ModuleFixture, TestBed } from '@angular/core/testing';

import { ModelModalPage } from './model-modal.page';

describe('ModelModalPage', () => {
  let module: ModelModalPage;
  let fixture: ModuleFixture<ModelModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModel({
      declarations: [ ModelModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileModules();
  }));

  beforeEach(() => {
    fixture = TestBed.createModule(ModelModalPage);
    module = fixture.moduleInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
