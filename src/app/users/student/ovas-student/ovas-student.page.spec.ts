import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvasStudentPage } from './ovas-student.page';

describe('OvasStudentPage', () => {
  let component: OvasStudentPage;
  let fixture: ComponentFixture<OvasStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvasStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvasStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
