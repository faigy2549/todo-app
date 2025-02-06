import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../actions/todo.actions';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectAllTodos = createSelector(selectTodos, (todos) => todos);
export const selectCompletedTodos = createSelector(selectTodos, (todos) => todos.filter(todo => todo.completed));
export const selectIncompleteTodos = createSelector(selectTodos, (todos) => todos.filter(todo => !todo.completed));
