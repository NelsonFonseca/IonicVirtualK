import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentPage } from './student.page';
import { HomeStudentPage } from './home-student/home-student.page';
import { DeliveriesStudentPage } from './deliveries-student/deliveries-student.page';
import { OvasStudentPage } from './ovas-student/ovas-student.page';
import { PresentationsStudentPage } from './presentations-student/presentations-student.page';
import { ToolsStudentPage } from './tools-student/tools-student.page';
import { WorkshopsStudentPage } from './workshops-student/workshops-student.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPage,
    children: [
      {
        path: '',
        component: HomeStudentPage
      },
      {
        path: 'deliveries',
        component: DeliveriesStudentPage
      },
      {
        path: 'ovas',
        component: OvasStudentPage
      },
      {
        path: 'presentation',
        component: PresentationsStudentPage
      },
      {
        path: 'tools',
        component: ToolsStudentPage
      },
      {
        path: 'workshop',
        component: WorkshopsStudentPage
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StudentPage, 
    HomeStudentPage,
    DeliveriesStudentPage,
    OvasStudentPage,
    PresentationsStudentPage,
    ToolsStudentPage,
    WorkshopsStudentPage
  ]
})
export class StudentPageModule {}
