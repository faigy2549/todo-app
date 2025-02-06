import { createAction, props } from '@ngrx/store';

export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export const addTodo = createAction('[ToDo] Add', props<{ todo: Todo }>());
export const deleteTodo = createAction('[ToDo] Delete', props<{ id: number }>());
export const toggleComplete = createAction('[ToDo] Toggle Complete', props<{ id: number }>());
