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
  taskCount: number = 0
  myTitle: string = ''
  myDetails: string = ''
  myTime: string = ''  
  createdIds: number = 0
  myTasks: ToDo[] = []
  @Output() taskAmount = new EventEmitter<number>()
  @Output() brandNewItem = new EventEmitter<ToDo>()


  addTask(newToDo: ToDo){
    console.log("look at this shit" + JSON.stringify(newToDo));
    
    this.myTasks.push(newToDo)
  }

  handleSubmit(){
    let Id: number = this.createdIds
    let description: string = this.myTitle
    let details: string = this.myDetails
    let dateTime: string = this.myTime
    this.taskCount++;
    
    
    let newItem: ToDo = {
      Id,
      description, 
      details, 
      dateTime,
      done: false
    };
    
    this.createdIds++
    this.brandNewItem.emit(newItem)
    this.taskAmount.emit(this.taskCount)
  }
}
