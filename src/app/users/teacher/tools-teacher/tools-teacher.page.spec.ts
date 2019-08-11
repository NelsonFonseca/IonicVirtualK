import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTeacherPage } from './tools-teacher.page';

describe('ToolsTeacherPage', () => {
  let component: ToolsTeacherPage;
  let fixture: ComponentFixture<ToolsTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
