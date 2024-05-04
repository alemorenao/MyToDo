import { Component, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../../../../interfaces/item';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  myTitle: string = ''
  myDetails: string = ''
  myTime: string = ''  
  createdIds: number = 0
  @Output() brandNewItem = new EventEmitter<ToDo>()

  handleSubmit(){
    let Id: number = this.createdIds
    let description: string = this.myTitle
    let details: string = this.myDetails
    let dateTime: string = this.myTime
    
    let newItem: ToDo = {
      Id,
      description, 
      details, 
      dateTime,
      done: false
    };
    
    this.createdIds++
    this.brandNewItem.emit(newItem)
  }
}
