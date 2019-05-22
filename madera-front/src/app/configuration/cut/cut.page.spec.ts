import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutPage } from './cut.page';

describe('CutPage', () => {
  let component: CutPage;
  let fixture: ComponentFixture<CutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
