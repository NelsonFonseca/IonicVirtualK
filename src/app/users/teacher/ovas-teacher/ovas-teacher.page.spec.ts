import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvasTeacherPage } from './ovas-teacher.page';

describe('OvasTeacherPage', () => {
  let component: OvasTeacherPage;
  let fixture: ComponentFixture<OvasTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvasTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvasTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
