import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeacherPage } from './teacher.page';
import { DeliveriesTeacherPage } from './deliveries-teacher/deliveries-teacher.page';
import { HomeTeacherPage } from './home-teacher/home-teacher.page';
import { OvasTeacherPage } from './ovas-teacher/ovas-teacher.page';
import { PresentationsTeacherPage } from './presentations-teacher/presentations-teacher.page';
import { ToolsTeacherPage } from './tools-teacher/tools-teacher.page';
import { WorkshopsTeacherPage } from './workshops-teacher/workshops-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage,
    children: [
      {
        path: '',
        component: HomeTeacherPage
      },
      {
        path: 'deliveries',
        component: DeliveriesTeacherPage
      },
      {
        path: 'ovas',
        component: OvasTeacherPage
      },
      {
        path: 'presentation',
        component: PresentationsTeacherPage
      },
      {
        path: 'tools',
        component: ToolsTeacherPage
      },
      {
        path: 'workshop',
        component: WorkshopsTeacherPage
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
    TeacherPage,
    DeliveriesTeacherPage,
    HomeTeacherPage,
    OvasTeacherPage,
    PresentationsTeacherPage,
    ToolsTeacherPage,
    WorkshopsTeacherPage
  ]
})
export class TeacherPageModule {}
