import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { log } from 'node:console';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ToDo } from '../interfaces/item';
import { TodoComponent } from '../modules/ToDo/todo/components/todo/todo.component';
import { NoTasksComponent } from '../modules/ToDo/todo/components/no-tasks/no-tasks.component';
import { AddTaskComponent } from '../modules/ToDo/todo/components/add-task/add-task.component';
import { DoneTasksComponent } from '../modules/ToDo/todo/components/done-tasks/done-tasks.component';
import { HeaderComponent } from '../modules/ToDo/todo/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, TodoComponent, NoTasksComponent, AddTaskComponent, DoneTasksComponent, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'MyTODO'; 
}