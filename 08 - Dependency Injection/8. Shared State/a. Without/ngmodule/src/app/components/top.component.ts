/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { reduceEachLeadingCommentRange } from 'typescript';

@Component({
  selector: 'top',
  template: `
    <middle [color]="color" />
    <switch (switch)="handleSwitch()"></switch>
  `
})
export class TopComponent {
  color = 'red';
  handleSwitch() {
    this.color = this.color === 'red' ? 'green' : 'red';
  }
}
