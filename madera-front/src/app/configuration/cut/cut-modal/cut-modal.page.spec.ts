import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutModalPage } from './cut-modal.page';

describe('CutModalPage', () => {
  let component: CutModalPage;
  let fixture: ComponentFixture<CutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
