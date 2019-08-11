import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsTeacherPage } from './workshops-teacher.page';

describe('WorkshopsTeacherPage', () => {
  let component: WorkshopsTeacherPage;
  let fixture: ComponentFixture<WorkshopsTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
