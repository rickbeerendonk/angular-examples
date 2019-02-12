/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'match',
  template: `
    <h1>Match</h1>
    <p>First goal: {{ firstGoal | async | date: 'HH:mm:ss' }}</p>
  `
})
export class MatchComponent {
  firstGoal: Promise<Date>;

  constructor() {
    this.firstGoal = new Promise(function(resolve /*, reject */) {
      setTimeout(function() {
        resolve(new Date());
      }, 3000);
    });
  }
}
