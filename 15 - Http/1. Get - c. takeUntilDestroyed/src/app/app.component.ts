/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos'; // Free online service
  private http = inject(HttpClient);

  todos = signal<Todo[]>([]);

  constructor() {
    this.http
      .get<Todo[]>(this.baseUrl)
      .pipe(takeUntilDestroyed())
      .subscribe(todos => this.todos.set(todos));
  }
}
