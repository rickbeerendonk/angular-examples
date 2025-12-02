/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { EditBoxComponent } from './edit-box/edit-box.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingEditorComponent } from './greeting-editor/greeting-editor.component';

@Component({
  selector: 'app',
  imports: [EditBoxComponent, GreetingComponent, GreetingEditorComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
