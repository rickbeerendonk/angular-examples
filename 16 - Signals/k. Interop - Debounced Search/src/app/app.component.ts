/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private http = inject(HttpClient);

  query = signal('');

  // The Sandwich: Signal -> Observable (operators) -> Signal
  results = toSignal(
    toObservable(this.query).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(q =>
        q.length === 0
          ? of<Todo[]>([])
          : this.http.get<Todo[]>(
              `https://jsonplaceholder.typicode.com/todos?title_like=${q}`
            )
      )
    ),
    { initialValue: [] as Todo[] }
  );

  onInput(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
