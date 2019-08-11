import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  public appPages = [
    {
      title: 'Inicio',
      url: '/teacher',
      icon: 'home'
    },
    {
      title: 'General',
      url: '/teacher',
      icon: 'book'
    },
    {
      title: 'Presentaciones',
      url: '/teacher/presentation',
      icon: 'desktop'
    },
    {
      title: 'Herramientas',
      url: '/teacher/tools',
      icon: 'construct'
    },
    {
      title: 'Entregas',
      url: '/teacher/deliveries',
      icon: 'folder'
    },
    {
      title: 'Talleres',
      url: '/teacher/workshop',
      icon: 'create'
    },
    {
      title: 'OVAs',
      url: '/teacher/ovas',
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
