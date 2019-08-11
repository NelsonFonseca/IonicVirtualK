import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsStudentPage } from './tools-student.page';

describe('ToolsStudentPage', () => {
  let component: ToolsStudentPage;
  let fixture: ComponentFixture<ToolsStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
