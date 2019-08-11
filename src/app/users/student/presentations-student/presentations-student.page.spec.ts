import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsStudentPage } from './presentations-student.page';

describe('PresentationsStudentPage', () => {
  let component: PresentationsStudentPage;
  let fixture: ComponentFixture<PresentationsStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationsStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
