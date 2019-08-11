import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkshopsStudentPage } from './workshops-student.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsStudentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkshopsStudentPage]
})
export class WorkshopsStudentPageModule {}
