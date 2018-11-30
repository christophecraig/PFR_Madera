import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCreationPage } from './quote-creation.page';

describe('QuoteCreationPage', () => {
  let component: QuoteCreationPage;
  let fixture: ComponentFixture<QuoteCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteCreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
