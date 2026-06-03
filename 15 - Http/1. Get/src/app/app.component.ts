/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

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

  // httpResource: signal-native HTTP GET with automatic reloads, loading & error state
  todos = httpResource<Todo[]>(() => this.baseUrl);
  other1 = httpResource(() => {
    todos.value();
  });
  other2 = httpResource(() => {
    todos.value();
  });
  result = computed(() => {
    return other1 + other2;
  });
}
