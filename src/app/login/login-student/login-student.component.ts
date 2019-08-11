import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss'],
})
export class LoginStudentComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {}

  closeWindow(){
    this.modal.dismiss();
  }

}
