import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteListPage } from './quote-list.page';

describe('QuoteListPage', () => {
  let component: QuoteListPage;
  let fixture: ComponentFixture<QuoteListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
