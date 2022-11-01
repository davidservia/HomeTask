import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private _task: Task[] = [
    {
      id:1,
      name:"Barrer y fregar",
      time:60,
      picture:"https://changlonet.com/blog/wp-content/uploads/2011/11/fregar.jpg"
    },
    {
      id:2,
      name:"Poner la Lavadora",
      time:20,
      picture:"https://blog.dia.es/wp-content/uploads/2017/04/errores-al-poner-la-lavadora-2-750x501.jpg?x32725"
    },
    {
      id:3,
      name:"Cocinar",
      time:50,
      picture:"https://www.lavanguardia.com/files/image_449_220/uploads/2021/09/13/613f39f54bda0.jpeg"
    },
    {
      id:4,
      name:"Tirar la basura",
      time:15,
      picture:"https://img.sorianoticias.com/imagenes/2020-03/ContenedorBasura_1.jpg"
    }
  ];

  id: number = this._task.length+1;

  getTasks(): Task[] {
    return this._task;
  }

  getTaskById(id:number){
    return this._task.find(p=>p.id==id);
  }

  deleteTaskById(id:number){
    this._task = this._task.filter(p=>p.id != id); 
  }

  addTask(task:Task){
    task.id = this.id++;
    this._task.push(task);
  }

  updateTask(task:Task){
    var _task = this._task.find(p=>p.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.time = task.time;
      _task.picture = task.picture;
    }   
  }

}
