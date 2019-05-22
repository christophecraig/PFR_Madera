import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPage } from './cover.page';

describe('CoverPage', () => {
  let component: CoverPage;
  let fixture: ComponentFixture<CoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
