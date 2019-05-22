import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodFrameModalPage } from './wood-frame-modal.page';

describe('WoodFrameModalPage', () => {
  let component: WoodFrameModalPage;
  let fixture: ComponentFixture<WoodFrameModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodFrameModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodFrameModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
