import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { LoginStudentComponent } from '../login/login-student/login-student.component';
import { LoginTeacherComponent } from '../login/login-teacher/login-teacher.component';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController : ModalController) {}

  openLoginStudent(){
    this.modalController.create({
      component: LoginStudentComponent
    }).then( (modal) => modal.present())
  }

  openLoginTeacher(){
    this.modalController.create({
      component: LoginTeacherComponent
    }).then( (modal) => modal.present())
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage
  //   });
  //   return await modal.present();
  // }

}
