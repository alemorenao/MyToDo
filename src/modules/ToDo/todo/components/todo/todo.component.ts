import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {  ToDo  } from '../../../../../interfaces/item'
import { DoneButtonComponent } from '../done-button/done-button.component';
import { NoTasksComponent } from '../no-tasks/no-tasks.component';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DoneButtonComponent, NoTasksComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})


export class TodoComponent{
  @Input() toDolist: ToDo[] = []
}
