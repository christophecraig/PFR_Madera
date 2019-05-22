import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePage } from './module.page.page';

describe('ModulePage', () => {
  let component: ModulePage;
  let fixture: ComponentFixture<ModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
