import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameModalPage } from './frame-modal.page';

describe('FrameModalPage', () => {
  let component: FrameModalPage;
  let fixture: ComponentFixture<FrameModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
