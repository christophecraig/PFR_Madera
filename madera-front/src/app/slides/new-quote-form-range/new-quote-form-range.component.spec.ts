import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteFormRangeComponent } from './new-quote-form-range.component';

describe('NewQuoteFormRangeComponent', () => {
  let component: NewQuoteFormRangeComponent;
  let fixture: ComponentFixture<NewQuoteFormRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuoteFormRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteFormRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
