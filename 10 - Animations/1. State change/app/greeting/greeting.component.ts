/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Component } from '@angular/core';

// Imports for animations
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  animations: [
    trigger('componentState', [
      state('normal', style({})),
      state('special',   style({
        backgroundColor: '#d676ff',
        color: '#444',
        transform: 'scale(2) translate(50px, 50px)'
      })),
      transition('normal => special', animate('2000ms ease-in')),
      transition('special => normal', animate('500ms ease-out'))
    ])
  ]
})
export class GreetingComponent {
  state: string;

  constructor() {
    this.state = 'normal';
  }

  toggleState() {
    this.state = this.state === 'normal' ? 'special' : 'normal';
  }
}