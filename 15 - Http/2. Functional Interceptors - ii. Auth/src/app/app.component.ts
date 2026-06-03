/*! Copyright © 2026 Rick Beerendonk !*/

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private http = inject(HttpClient);
  readonly authService = inject(AuthService);
  todo = signal<unknown>(null);

  loadTodo() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => {
        this.todo.set(data);
      });
  }

  clearToken() {
    this.authService.setToken(null);
  }
}
