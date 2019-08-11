import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveriesTeacherPage } from './deliveries-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveriesTeacherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeliveriesTeacherPage]
})
export class DeliveriesTeacherPageModule {}
