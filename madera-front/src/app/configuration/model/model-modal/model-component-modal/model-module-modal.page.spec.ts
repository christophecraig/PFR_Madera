import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelModuleModalPage } from './model-module-modal.page';


describe('ModuleTechnicalClauseModalPage', () => {
  let module: ModelModuleModalPage;
  let fixture: ComponentFixture<ModelModuleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelModuleModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelModuleModalPage);
    module = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
