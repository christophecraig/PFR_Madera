import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ModuleFixture, TestBed } from '@angular/core/testing';

import { ModelPage } from './model.page.page';

describe('ModelPage', () => {
  let module: ModelPage;
  let fixture: ModuleFixture<ModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModel({
      declarations: [ ModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileModules();
  }));

  beforeEach(() => {
    fixture = TestBed.createModule(ModelPage);
    module = fixture.moduleInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
