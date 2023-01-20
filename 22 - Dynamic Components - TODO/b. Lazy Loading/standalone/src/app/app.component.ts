/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label>
      <input
        [(ngModel)]="language"
        name="language"
        type="radio"
        value="dutch"
      />
      Dutch
    </label>
    <label>
      <input
        [(ngModel)]="language"
        name="language"
        type="radio"
        value="english"
      />
      English
    </label>
    <label>
      <input
        [(ngModel)]="language"
        name="language"
        type="radio"
        value="spanish"
      />
      Spanish
    </label>

    <div style="background: bisque">
      <ng-container
        *ngComponentOutlet="greetingLanguageComponent | async"
      ></ng-container>
    </div>
  `
})
export class AppComponent implements OnInit {
  private _language = 'english';

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
    this.greetingLanguageComponent = this.getGreetingLanguageComponent();
  }

  greetingLanguageComponent!: Promise<Type<any>>;

  ngOnInit() {
    this.greetingLanguageComponent = this.getGreetingLanguageComponent();
  }

  getGreetingLanguageComponent() {
    switch (this.language) {
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
  }
}

export default AppComponent;
