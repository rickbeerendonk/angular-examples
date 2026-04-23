/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Tick interval: {{ interval() }}ms</h1>
    <button (click)="setInterval(500)">500ms</button>
    <button (click)="setInterval(1000)">1000ms</button>
    <button (click)="setInterval(2000)">2000ms</button>
    <p>Open the console — cleanup runs before each new interval.</p>
  `
})
export class AppComponent {
  interval = signal(1000);

  constructor() {
    effect(onCleanup => {
      const ms = this.interval();
      console.log(`▶ Starting interval @ ${ms}ms`);
      const id = window.setInterval(() => console.log('tick'), ms);

      // Runs before the next execution and on destroy
      onCleanup(() => {
        console.log(`⏹ Cleaning up interval @ ${ms}ms`);
        clearInterval(id);
      });
    });
  }

  setInterval(ms: number) {
    this.interval.set(ms);
  }
}
