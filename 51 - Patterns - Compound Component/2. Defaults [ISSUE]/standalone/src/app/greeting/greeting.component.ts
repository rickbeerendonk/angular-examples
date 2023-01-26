/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingEditorComponent } from '../greeting-editor/greeting-editor.component';

@Component({
  selector: 'greeting',
  standalone: true,
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  constructor(protected greetingEditor: GreetingEditorComponent) {}
}
