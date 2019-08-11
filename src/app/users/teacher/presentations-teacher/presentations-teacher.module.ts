import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentationsTeacherPage } from './presentations-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: PresentationsTeacherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentationsTeacherPage]
})
export class PresentationsTeacherPageModule {}
