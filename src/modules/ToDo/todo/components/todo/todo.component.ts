import { Component, Input } from '@angular/core';
import {  ToDo  } from '../../../../../interfaces/item'
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})


export class TodoComponent {
  @Input() toDolist: ToDo[] = []
  
  printSomething(){
    console.log("Hi " + this.toDolist)
  }
  
  
}
