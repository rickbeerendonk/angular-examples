/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditBoxComponent } from '../edit-box/edit-box.component';
import { GreetingComponent } from '../greeting/greeting.component';

@Component({
  selector: 'greeting-editor-default',
  standalone: true,
  imports: [CommonModule, EditBoxComponent, GreetingComponent],
  templateUrl: './greeting-editor-default.component.html'
})
export class GreetingEditorDefaultComponent {}
