import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderModalPage } from './provider-modal.page';

describe('ProviderModalPage', () => {
  let component: ProviderModalPage;
  let fixture: ComponentFixture<ProviderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
