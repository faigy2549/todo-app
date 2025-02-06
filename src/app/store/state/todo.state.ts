import { Todo } from "../actions/todo.actions";

export interface TodoState {
    todos: Todo[];
  }
  
  export const initialState: TodoState = {
    todos: []
  };
  