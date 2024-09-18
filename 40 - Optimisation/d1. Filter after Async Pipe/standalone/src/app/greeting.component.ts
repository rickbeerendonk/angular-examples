/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

function getData(): Observable<{ value1: number; value2: number }> {
  return interval(1000).pipe(
    map(i => ({
      value1: Math.floor(i / 3),
      value2: i
    }))
  );
}

@Component({
  selector: 'greeting',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  imports: [AsyncPipe],
  template: `<h1>Hello {{ (value$ | async)?.value1 ?? 0 }}</h1>`
})
export class GreetingComponent implements AfterViewChecked {
  value$ = getData();

  ngAfterViewChecked(): void {
    console.count('GreetingComponent.AfterViewChecked');
  }
}
