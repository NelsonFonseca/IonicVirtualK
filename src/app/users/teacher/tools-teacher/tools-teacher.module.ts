import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolsTeacherPage } from './tools-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsTeacherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolsTeacherPage]
})
export class ToolsTeacherPageModule {}
