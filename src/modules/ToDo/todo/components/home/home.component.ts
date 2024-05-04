import { Component } from '@angular/core';
import { ToDo } from '../../../../../interfaces/item';
import { TodoComponent } from '../todo/todo.component';
import { NoTasksComponent } from '../no-tasks/no-tasks.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoComponent, NoTasksComponent, AddTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myTasks: ToDo[] = []

  addTask(newItem: ToDo){
    this.myTasks.push(newItem)
    sessionStorage.setItem("MyTasks", JSON.stringify(this.myTasks))
  }

  areThereUndone(){
    if(sessionStorage.getItem("MyTasks")){
      let savedTasks: ToDo[] = JSON.parse(sessionStorage.getItem("MyTasks"))
      this.myTasks = savedTasks
    }
    return this.myTasks.some((task) => task.done == false)
  }
}
