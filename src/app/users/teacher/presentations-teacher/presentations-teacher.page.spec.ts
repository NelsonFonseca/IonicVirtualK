import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsTeacherPage } from './presentations-teacher.page';

describe('PresentationsTeacherPage', () => {
  let component: PresentationsTeacherPage;
  let fixture: ComponentFixture<PresentationsTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationsTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
