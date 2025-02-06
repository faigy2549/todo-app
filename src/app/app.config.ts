import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './store/reducers/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideStore({ todos: todoReducer })],
};
