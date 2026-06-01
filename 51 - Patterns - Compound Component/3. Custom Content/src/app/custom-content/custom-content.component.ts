/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { GreetingEditorComponent } from '../greeting-editor/greeting-editor.component';

@Component({
  selector: 'custom-content',
  templateUrl: './custom-content.component.html',
  styleUrl: './custom-content.component.css'
})
export class CustomContentComponent {
  protected greetingEditor = inject(GreetingEditorComponent);
}
