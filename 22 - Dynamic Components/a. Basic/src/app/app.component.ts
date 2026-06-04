/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, computed, signal, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { GreetingDutchComponent } from './greeting-dutch.component';
import { GreetingEnglishComponent } from './greeting-english.component';
import { GreetingSpanishComponent } from './greeting-spanish.component';

@Component({
  selector: 'app',
  imports: [NgComponentOutlet],
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
        *ngComponentOutlet="greetingLanguageComponent()"
      ></ng-container>
    </div>
  `
})
export class AppComponent {
  language = signal('english');

  greetingLanguageComponent = computed((): Type<any> => {
    switch (this.language()) {
      case 'dutch':
        return GreetingDutchComponent;
      case 'spanish':
        return GreetingSpanishComponent;
      default:
        // english
        return GreetingEnglishComponent;
    }
  });
}

export default AppComponent;
