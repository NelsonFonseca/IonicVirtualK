import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  public appPages = [
    {
      title: 'Inicio',
      url: '/student',
      icon: 'home'
    },
    {
      title: 'General',
      url: '/student',
      icon: 'book'
    },
    {
      title: 'Presentaciones',
      url: '/student/presentation',
      icon: 'desktop'
    },
    {
      title: 'Herramientas',
      url: '/student/tools',
      icon: 'construct'
    },
    {
      title: 'Entregas',
      url: '/student/deliveries',
      icon: 'folder'
    },
    {
      title: 'Talleres',
      url: '/student/workshop',
      icon: 'create'
    },
    {
      title: 'OVAs',
      url: '/student/ovas',
      icon: 'videocam'
    },
    {
      title: 'Cerrar sesión',
      url: '',
      icon: 'videocam'
    }
  ];

  openFirst() {
    this.menu.enable(true, 'one');
    this.menu.open('one');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
