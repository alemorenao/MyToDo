import { Component, Input } from '@angular/core';
import { ToDo } from '../../../../../interfaces/item';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  standalone: true,
  imports: [],
  templateUrl: './done-tasks.component.html',
  styleUrl: './done-tasks.component.css'
})
export class DoneTasksComponent {
  @Input() ToDoList: ToDo[] = []

  ngOnInit(){
    let myList: ToDo[] = JSON.parse(sessionStorage.getItem("MyTasks"))
    this.ToDoList = myList.filter((task) => task.done == true)
  }
}
