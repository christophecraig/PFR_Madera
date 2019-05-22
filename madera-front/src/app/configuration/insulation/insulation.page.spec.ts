import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulationPage } from './insulation.page';

describe('InsulationPage', () => {
  let component: InsulationPage;
  let fixture: ComponentFixture<InsulationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsulationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
