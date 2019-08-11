import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OvasTeacherPage } from './ovas-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: OvasTeacherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OvasTeacherPage]
})
export class OvasTeacherPageModule {}
