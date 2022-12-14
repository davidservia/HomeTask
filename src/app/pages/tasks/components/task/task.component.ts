import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task:Task;

  constructor(
    private tasksService:TasksService
  ){

  }

  ngOnInit() {}

  onEditClick(){
    this.onEdit.emit(this.task);
  }

  onDeleteClick(){
    this.onDelete.emit(this.task);
  }


}
