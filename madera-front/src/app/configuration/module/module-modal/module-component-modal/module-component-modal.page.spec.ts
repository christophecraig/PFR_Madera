import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleComponentModalPage } from './module-component-modal.page';


describe('ComponentTechnicalClauseModalPage', () => {
  let component: ModuleComponentModalPage;
  let fixture: ComponentFixture<ModuleComponentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleComponentModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComponentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
