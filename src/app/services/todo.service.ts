import { Injectable, isDevMode } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo, addTodo, deleteTodo, toggleComplete } from '../store/actions/todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private store: Store<{ todos: Todo[] }>) {
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        const parsedTodos: Todo[] = JSON.parse(storedTodos);
        parsedTodos.forEach(todo => this.store.dispatch(addTodo({ todo })));
      }

      this.store.select('todos').subscribe(todos => {
        if (typeof localStorage !== 'undefined' && localStorage !== null) {
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
    } else {
      if (isDevMode()) {
        console.warn('localStorage is not available.');
      }
    }
  }

  addTodo(title: string, description?: string) {
    const todo: Todo = { id: Date.now(), title, description, completed: false };
    this.store.dispatch(addTodo({ todo }));
  }

  deleteTodo(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }

  toggleComplete(id: number) {
    this.store.dispatch(toggleComplete({ id }));
  }
}
