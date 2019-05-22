import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulationModalPage } from './insulation-modal.page';

describe('InsulationModalPage', () => {
  let component: InsulationModalPage;
  let fixture: ComponentFixture<InsulationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsulationModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsulationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
