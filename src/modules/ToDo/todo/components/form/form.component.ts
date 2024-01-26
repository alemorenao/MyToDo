import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ToDo } from '../../../../../interfaces/item';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myTitle = ''
  myDetails = ''
  myTime = ''  
  timeToEdit = false
  createdIds = 0
  taskAmount = 0
  @Output() showTime = new EventEmitter<boolean>()
  @Output() taskCount = new EventEmitter<number>()
  @Output() brandNewItem = new EventEmitter<ToDo>()

  

  handleSubmit(){
    let Id: number = this.createdIds
    let description = this.myTitle
    let details = this.myDetails
    let dateTime = this.myTime
    this.timeToEdit = false;
    this.taskAmount++;
    
    
    let newItem: ToDo = {
      Id,
      description, 
      details, 
      dateTime,
      done: false
    };
    
    this.createdIds++
    this.brandNewItem.emit(newItem)
    this.taskCount.emit(this.taskAmount)
    this.showTime.emit(false)
  }
}
