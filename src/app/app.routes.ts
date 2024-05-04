import { Routes } from '@angular/router';
import { AddTaskComponent } from '../modules/ToDo/todo/components/add-task/add-task.component';
import { TodoComponent } from '../modules/ToDo/todo/components/todo/todo.component';
import { DoneTasksComponent } from '../modules/ToDo/todo/components/done-tasks/done-tasks.component';
import { NoTasksComponent } from '../modules/ToDo/todo/components/no-tasks/no-tasks.component';
import { HomeComponent } from '../modules/ToDo/todo/components/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'done-tasks', component: DoneTasksComponent},
];
