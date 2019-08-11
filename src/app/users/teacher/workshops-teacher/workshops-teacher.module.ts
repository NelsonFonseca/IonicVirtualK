import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopsTeacherPage } from './workshops-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsTeacherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopsTeacherPage]
})
export class WorkshopsTeacherPageModule {}
