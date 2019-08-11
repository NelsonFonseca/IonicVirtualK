import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesTeacherPage } from './deliveries-teacher.page';

describe('DeliveriesTeacherPage', () => {
  let component: DeliveriesTeacherPage;
  let fixture: ComponentFixture<DeliveriesTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveriesTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
