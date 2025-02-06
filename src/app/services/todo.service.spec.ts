import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Store, StoreModule } from '@ngrx/store';
import { Todo, addTodo, deleteTodo, toggleComplete } from '../store/actions/todo.actions'; 
import { of } from 'rxjs'; 

describe('TodoService', () => {
  let service: TodoService;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    storeSpy.select.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}) 
      ],
      providers: [
        TodoService,
        { provide: Store, useValue: storeSpy }, 
      ],
    });

    service = TestBed.inject(TodoService);
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    const newTodo = { title: 'Test todo', description: 'description', completed: false, id: Date.now() };
    service.addTodo(newTodo.title, newTodo.description);
    expect(store.dispatch).toHaveBeenCalledWith(addTodo({ todo: newTodo }));
  });

  it('should delete a todo', () => {
    const todoId = 1;
    service.deleteTodo(todoId);
    expect(store.dispatch).toHaveBeenCalledWith(deleteTodo({ id: todoId }));
  });

  it('should toggle completion of a todo', () => {
    const todoId = 1;
    service.toggleComplete(todoId);
    expect(store.dispatch).toHaveBeenCalledWith(toggleComplete({ id: todoId }));
  });
});
