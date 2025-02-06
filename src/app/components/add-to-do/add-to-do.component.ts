import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [NgIf, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule],
  template: `
  <h1>"Tasking to  perfection"</h1>
    <form #todoForm="ngForm" (ngSubmit)="addTodo(todoForm)">
      <mat-card class="add-card">
        <mat-card-title>+ Task</mat-card-title>
        <mat-form-field appearance="fill">
          <mat-label>Title</mat-label>
          <input matInput type="text" id="title" [(ngModel)]="title" name="title" required minlength="3" #titleInput="ngModel" />
          <mat-error *ngIf="titleInput.invalid && titleInput.touched">
            <div *ngIf="titleInput.errors?.['required']">Title is required.</div>
            <div *ngIf="titleInput.errors?.['minlength']">Title must be at least 3 characters long.</div>
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Description (optional)</mat-label>
          <input matInput [(ngModel)]="description" name="description" />
        </mat-form-field>

        <button mat-raised-button  type="submit" [disabled]="titleInput.invalid">Add To-Do</button>
      </mat-card>
    </form>
  `,
  styles: [
    `:host mat-card{
    background: #3B82F6;
        display: flex;
        flex-direction:column;
        gap:12px;
        align-items:center;
        color: white;
        border-radius: 10px;
        font-size:24px;
        padding: 24px;
    }
    :host mat-form-field{
      background-color:#fafafc;
      border-radius:10px;
      margin-bottom:24px;
    }

    :host.mdc-text-field--filled:not(.mdc-text-field--disabled) {
      background-color:#fafafc;
     }

    :host button{
      border-radius: 10px;
      background-color:#fafafc;
      padding:12px 36px 12px 36px;
    }
    h1{
      color: #3B82F6;
    }

`]
})
export class AddToDoComponent {
  title = '';
  description = '';

  constructor(private todoService: TodoService) {}

  addTodo(form: NgForm) {
    if (this.title.trim().length < 3) return;

    this.todoService.addTodo(this.title, this.description);

    form.resetForm();
    this.title = '';  
    this.description = ''; 
  }
}
