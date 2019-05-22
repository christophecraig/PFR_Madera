import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverModalPage } from './cover-modal.page';

describe('CoverModalPage', () => {
  let component: CoverModalPage;
  let fixture: ComponentFixture<CoverModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
