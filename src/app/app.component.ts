import { Component } from '@angular/core';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoListComponent, AddToDoComponent,MatCardModule,MatIconModule],
  template: `
    <div class="app-container">
    <mat-card class="title"> <mat-icon>check_circle</mat-icon> TASK MANAGER</mat-card>
      <div class="flex-container">
        <app-to-do-list class="todo-list"></app-to-do-list>
        <app-add-to-do class="todo-form"></app-add-to-do>
      </div>
    </div>
  `,
  styles: [
    `
      .app-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 3rem 10rem;
      }

      .flex-container {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 5rem;
      }
      .title{ 
        background: #3B82F6;
        display: flex;
        flex-direction:row;
        gap:12px;
        align-items:center;
        color: white;
        margin-bottom: 48px;
        padding:12px 36px 12px 36px;
        border-radius: 10px;
        font-size:24px;
      }
      .todo-list {
        flex: 1; 
        max-width: 100rem; 
      }

      .todo-form {
        flex: 0 0 300px;
        max-width: 100rem; 
      }
      body{
        background-color:#fafafc;
      }

    
    `,
  ],
})
export class AppComponent { title = 'todo-app';}

