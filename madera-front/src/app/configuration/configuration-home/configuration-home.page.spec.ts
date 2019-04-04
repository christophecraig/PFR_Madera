import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationHomePage } from './configuration-home.page';

describe('ConfigurationHomePage', () => {
  let component: ConfigurationHomePage;
  let fixture: ComponentFixture<ConfigurationHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
