import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ToDo } from '../../../../../interfaces/item';


@Component({
  selector: 'app-done-button',
  standalone: true,
  imports: [],
  templateUrl: './done-button.component.html',
  styleUrl: './done-button.component.css'
})
export class DoneButtonComponent {
  @Input() ButtonId: number
  @Input() ToDoTasks: ToDo[] = []

  taskIsDone(){
    const indexOfInterest = this.ToDoTasks.findIndex((element) => element.Id == this.ButtonId)
    this.ToDoTasks[indexOfInterest].done=true
    sessionStorage.setItem("MyTasks", JSON.stringify(this.ToDoTasks))
  }
}
