import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss'],
})
export class LoginTeacherComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {}

  closeWindow(){
    this.modal.dismiss();
  }

}
