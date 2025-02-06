import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoItemComponent } from './to-do-item.component';
import { TodoService } from '../../services/todo.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { Todo } from '../../store/actions/todo.actions';
import { of } from 'rxjs';

describe('ToDoItemComponent', () => {
  let component: ToDoItemComponent;
  let fixture: ComponentFixture<ToDoItemComponent>;
  let mockTodoService: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    mockTodoService = jasmine.createSpyObj('TodoService', ['toggleComplete', 'deleteTodo']);

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        MatCheckboxModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        ToDoItemComponent
      ],
      providers: [{ provide: TodoService, useValue: mockTodoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteTodo on TodoService when delete button is clicked', () => {
    const todo: Todo = { id: 1, title: 'Test Todo', description: 'Test Description', completed: false };
    component.todo = todo;
    fixture.detectChanges();

    const deleteButton = fixture.debugElement.query(By.css('button'));
    deleteButton.triggerEventHandler('click', null);

    expect(mockTodoService.deleteTodo).toHaveBeenCalledWith(todo.id);
  });

  it('should call toggleComplete on TodoService when checkbox is clicked', () => {
    const todo: Todo = { id: 1, title: 'Test Todo', description: 'Test Description', completed: false };
    component.todo = todo;
    fixture.detectChanges();

    const checkbox = fixture.debugElement.query(By.css('mat-checkbox'));
    checkbox.triggerEventHandler('change', {});

    expect(mockTodoService.toggleComplete).toHaveBeenCalledWith(todo.id);
  });
});
