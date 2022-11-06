import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'Home' },
    { title: 'Gestion de Personas', url: '/people', icon: 'Person' },
    { title: 'Gestion de Tareas', url: '/tasks', icon: 'server' },
    { title: 'Asignar Tareas', url: '/assign', icon: 'archive' },
    { title: 'Ver Tareas Asignadas', url: '/gtareas', icon: 'reader' },
  ];
  public labels: any
  constructor() {}
}
