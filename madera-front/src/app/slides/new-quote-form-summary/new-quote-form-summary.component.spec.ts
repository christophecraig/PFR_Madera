import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteFormSummaryComponent } from './new-quote-form-summary.component';

describe('NewQuoteFormSummaryComponent', () => {
  let component: NewQuoteFormSummaryComponent;
  let fixture: ComponentFixture<NewQuoteFormSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuoteFormSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteFormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
