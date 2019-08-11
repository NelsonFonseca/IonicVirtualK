import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'teacher', loadChildren: './users/teacher/teacher.module#TeacherPageModule' },
  { path: 'student', loadChildren: './users/student/student.module#StudentPageModule' },
  { path: 'home-student', loadChildren: './users/student/home-student/home-student.module#HomeStudentPageModule' },
  { path: 'presentations-student', loadChildren: './users/student/presentations-student/presentations-student.module#PresentationsStudentPageModule' },
  { path: 'tools-student', loadChildren: './users/student/tools-student/tools-student.module#ToolsStudentPageModule' },
  { path: 'deliveries-student', loadChildren: './users/student/deliveries-student/deliveries-student.module#DeliveriesStudentPageModule' },
  { path: 'workshops-student', loadChildren: './users/student/workshops-student/workshops-student.module#WorkshopsStudentPageModule' },
  { path: 'ovas-student', loadChildren: './users/student/ovas-student/ovas-student.module#OvasStudentPageModule' },
  { path: 'home-teacher', loadChildren: './users/teacher/home-teacher/home-teacher.module#HomeTeacherPageModule' },
  { path: 'presentations-teacher', loadChildren: './users/teacher/presentations-teacher/presentations-teacher.module#PresentationsTeacherPageModule' },
  { path: 'tools-teacher', loadChildren: './users/teacher/tools-teacher/tools-teacher.module#ToolsTeacherPageModule' },
  { path: 'deliveries-teacher', loadChildren: './users/teacher/deliveries-teacher/deliveries-teacher.module#DeliveriesTeacherPageModule' },
  { path: 'workshops-teacher', loadChildren: './users/teacher/workshops-teacher/workshops-teacher.module#WorkshopsTeacherPageModule' },
  { path: 'ovas-teacher', loadChildren: './users/teacher/ovas-teacher/ovas-teacher.module#OvasTeacherPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
