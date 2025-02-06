import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { todoReducer } from './app/store/reducers/todo.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ todos: todoReducer }), provideAnimationsAsync()],
});
