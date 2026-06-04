/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { FarewellComponent } from './farewell.component';
import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentComponent: Type<unknown> = GreetingComponent;
  userName = 'Angular';

  toggle() {
    this.currentComponent =
      this.currentComponent === GreetingComponent
        ? FarewellComponent
        : GreetingComponent;
  }
}
