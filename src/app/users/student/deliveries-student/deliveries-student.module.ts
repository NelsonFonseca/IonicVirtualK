import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveriesStudentPage } from './deliveries-student.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveriesStudentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeliveriesStudentPage]
})
export class DeliveriesStudentPageModule {}
