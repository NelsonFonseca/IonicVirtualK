import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesStudentPage } from './deliveries-student.page';

describe('DeliveriesStudentPage', () => {
  let component: DeliveriesStudentPage;
  let fixture: ComponentFixture<DeliveriesStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveriesStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
