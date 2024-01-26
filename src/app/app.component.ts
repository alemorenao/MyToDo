import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ToDo } from '../interfaces/item';
import { TodoComponent } from '../modules/ToDo/todo/components/todo/todo.component';
import { NoTasksComponent } from '../modules/ToDo/todo/components/no-tasks/no-tasks.component';
import { FormComponent } from '../modules/ToDo/todo/components/form/form.component';
import { AddTaskComponent } from '../modules/ToDo/todo/components/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, TodoComponent, NoTasksComponent, FormComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MyTODO';
  showTime = false;
  timeToEdit = false;
  createdIds = 0;
  taskCount = 0;
  newItem: ToDo
  myTasks: ToDo[] = []
  
  updateShowTime(newValue: boolean){
    console.log('ShowTime value is ' + newValue);
    
    this.showTime = newValue
  }

  updateTaskCount(newValue: number){
    console.log('TaskCount value is '+ newValue)
    this.taskCount = newValue
  }

  addTask(newToDo: ToDo){
    console.log("look at this shit" + JSON.stringify(newToDo));
    
    this.myTasks.push(newToDo)
  }

  deleteTask(taskId: number){
    for (let index = 0; index < this.myTasks.length; index++) {
      const element = this.myTasks[index].Id
      if (element == taskId) {
        this.myTasks.splice(index, 1)
        this.taskCount--
        return
      }
    }
  }

  editTask(taskId: number){
    for (let index = 0; index < this.myTasks.length; index++) {
      const element = this.myTasks[index].Id
      if (element == taskId) {
        this.myTasks[index].description = prompt("New Description", this.myTasks[index].description)
        this.myTasks[index].details = prompt("New details", this.myTasks[index].details)
        this.myTasks[index].dateTime = prompt("New date", this.myTasks[index].dateTime)
      }
    }
  }
}