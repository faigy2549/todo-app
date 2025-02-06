import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../store/actions/todo.actions';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [
    CommonModule, 
    MatCheckboxModule, 
    MatButtonModule, 
    MatListModule,
    MatIconModule
  ],
  template: `
    <mat-list-item class="todo-item">

      <span class="todo-item-section" >
      <button  (click)="deleteTodo()"  aria-label="Delete Todo">
        <mat-icon>delete</mat-icon>
      </button> 
      <mat-checkbox 
        [checked]="todo.completed" 
        (change)="toggleComplete()" 
        color="primary">
      </mat-checkbox>
      <span [class.completed]="todo.completed" >{{ todo.title }}   </span>
      <span *ngIf="todo.description!=''"> - </span>
      <span>{{ todo.description }}</span>
      </span>
      
    </mat-list-item>
  `,
  styles: [
    ` 
      .completed {
        text-decoration: line-through;
        color: gray;
      }
      :host mat-list-item {
        display: flex;
        justify-content:space-between;
        padding: 8px 16px;
        background-color:#fafafc;
        border-radius:10px;
        margin:8px;  
        align-items:center;
        height:50px;
      }
      mat-icon{
        color:red;
        padding-top:4px;
      }
      span{
        color: #3B82F6;;
      }
      .todo-item-section{
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding: 0px 24px;
      }
      button{
        border:none;
        background-color: #fafafc;
      }
      button :hover{
        cursor:pointer;
      }
    `,
  ],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ToDoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  toggleComplete() {
    this.todoService.toggleComplete(this.todo.id);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }
}
