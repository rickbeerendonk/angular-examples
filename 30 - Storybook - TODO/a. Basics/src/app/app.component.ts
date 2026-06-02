/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  imports: [EditComponent, GreetingComponent],
  template: `
    <edit [value]="name" (change)="changed($event)"></edit>
    <br />
    <greeting [name]="name"></greeting>
  `,
  styles: []
})
export class AppComponent {
  name: string = 'World';

  changed(value: string) {
    this.name = value;
  }
}
