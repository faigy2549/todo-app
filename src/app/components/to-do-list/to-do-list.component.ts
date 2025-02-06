import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Todo } from '../../store/actions/todo.actions';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    AsyncPipe, 
    NgFor, 
    ToDoItemComponent, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule
  ],
  template: `
    <mat-card class="filter-card">
      <!-- <mat-card-title>Tasks:</mat-card-title> -->
      <div class="filter-buttons">
        <button mat-raised-button (click)="setFilter('all')" [color]="filter === 'all' ? 'primary' : ''">
          <mat-icon>format_list_bulleted</mat-icon> All
        </button>
        <button mat-raised-button (click)="setFilter('completed')" [color]="filter === 'completed' ? 'primary' : ''">
          <mat-icon>check_circle</mat-icon> Completed
        </button>
        <button mat-raised-button (click)="setFilter('incomplete')" [color]="filter === 'incomplete' ? 'primary' : ''">
          <mat-icon>highlight_off</mat-icon> Incomplete
        </button>
      </div>
    

    <div class="todo-list" [@listAnimation]>
      <app-to-do-item *ngFor="let todo of filteredTodos$ | async" [todo]="todo" [@itemAnimation]>
      </app-to-do-item>
    </div>
    </mat-card>
  `,
  styles: [
    `mat-card-title{
      padding-left:12px;
      
    }
    :host button{
      border-radius: 10px;
    }
      .filter-card {
        background: #3B82F6;
        color: white;
        margin-bottom: 10px;
        padding: 12px;
        border-radius: 10px;
     
      }
      .filter-buttons {
        display: flex;
        justify-content: center;
        gap: 8px;
        padding-top:12px;
      }
      .todo-list {
        display: flex;
        flex-direction: column;
        padding: 16px;
        overflow-y: auto;
        max-height:500px;
        min-height:400px;
        height:400px;

      }
    `,
  ],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('@itemAnimation', stagger(100, animate(300)), { optional: true })
      ])
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class ToDoListComponent {
  todos$: Observable<Todo[]>;
  filteredTodos$: Observable<Todo[]>;
  filter: 'all' | 'completed' | 'incomplete' = 'all';

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = store.select('todos');
    this.filteredTodos$ = this.todos$;
  }

  setFilter(filter: 'all' | 'completed' | 'incomplete') {
    this.filter = filter;
    this.filteredTodos$ = this.todos$.pipe(
      map(todos => {
        if (filter === 'completed') return todos.filter(todo => todo.completed);
        if (filter === 'incomplete') return todos.filter(todo => !todo.completed);
        return todos; 
      })
    );
  }
}
