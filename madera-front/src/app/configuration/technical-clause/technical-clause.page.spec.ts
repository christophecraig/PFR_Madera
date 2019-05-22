import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalClausePage } from './technical-clause.page';

describe('TechnicalClausePage', () => {
  let component: TechnicalClausePage;
  let fixture: ComponentFixture<TechnicalClausePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalClausePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalClausePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
