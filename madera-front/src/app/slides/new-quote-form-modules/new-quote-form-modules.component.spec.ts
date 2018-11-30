import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteFormModulesComponent } from './new-quote-form-modules.component';

describe('NewQuoteFormModulesComponent', () => {
  let component: NewQuoteFormModulesComponent;
  let fixture: ComponentFixture<NewQuoteFormModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuoteFormModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteFormModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
