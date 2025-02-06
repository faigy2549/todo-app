import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, toggleComplete, Todo } from '../actions/todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleComplete, (state, { id }) =>
    state.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  )
);
