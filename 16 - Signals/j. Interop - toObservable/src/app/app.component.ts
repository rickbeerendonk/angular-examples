/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  imports: [AsyncPipe],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  query = signal('');

  // Signal -> Observable. Emits every time the signal changes,
  // so RxJS operators can be applied to it.
  upper$ = toObservable(this.query).pipe(map(q => q.toUpperCase()));

  onInput(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
