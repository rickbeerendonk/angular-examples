/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { CustomContentComponent } from './custom-content/custom-content.component';
import { EditBoxComponent } from './edit-box/edit-box.component';
import { GreetingEditorComponent } from './greeting-editor/greeting-editor.component';

@Component({
  selector: 'app',
  imports: [CustomContentComponent, EditBoxComponent, GreetingEditorComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
