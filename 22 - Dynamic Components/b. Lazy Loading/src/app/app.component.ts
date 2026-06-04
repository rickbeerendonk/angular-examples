/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, computed, signal, Type } from '@angular/core';

@Component({
  selector: 'app',
  imports: [NgComponentOutlet, AsyncPipe],
  template: `
    <label>
      <input
        type="radio"
        name="language"
        value="dutch"
        [checked]="language() === 'dutch'"
        (change)="language.set('dutch')"
      />
      Dutch
    </label>
    <label>
      <input
        type="radio"
        name="language"
        value="english"
        [checked]="language() === 'english'"
        (change)="language.set('english')"
      />
      English
    </label>
    <label>
      <input
        type="radio"
        name="language"
        value="spanish"
        [checked]="language() === 'spanish'"
        (change)="language.set('spanish')"
      />
      Spanish
    </label>

    <div style="background: bisque">
      <ng-container
        *ngComponentOutlet="greetingLanguageComponent() | async"
      ></ng-container>
    </div>
  `
})
export class AppComponent {
  language = signal('english');

  greetingLanguageComponent = computed((): Promise<Type<any>> => {
    switch (this.language()) {
      case 'dutch':
        return import('./greeting-dutch.component').then(
          ({ GreetingDutchComponent }) => GreetingDutchComponent
        );
      case 'spanish':
        return import('./greeting-spanish.component').then(
          ({ GreetingSpanishComponent }) => GreetingSpanishComponent
        );
      default:
        // english
        return import('./greeting-english.component').then(
          ({ GreetingEnglishComponent }) => GreetingEnglishComponent
        );
    }
  });
}

export default AppComponent;
