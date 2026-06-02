/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject, signal } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app',
  template: `<h1>provideHttpClient() Interceptors</h1>
    <p style="color: gray">
      Open the console to see functional and class-based interceptors.
    </p>
    <button (click)="loadData()">Load Todo</button>
    <pre>{{ response() }}</pre>`
})
export class AppComponent {
  private readonly dataService = inject(DataService);
  protected readonly response = signal('No data loaded yet.');

  loadData() {
    this.dataService.loadTodo().subscribe({
      next: value => this.response.set(JSON.stringify(value, null, 2)),
      error: err => this.response.set(`Request failed: ${String(err)}`)
    });
  }
}
