import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteFormBaseComponent } from './new-quote-form-base.component';

describe('NewQuoteFormBaseComponent', () => {
  let component: NewQuoteFormBaseComponent;
  let fixture: ComponentFixture<NewQuoteFormBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuoteFormBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
