/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styles: ['div { color: #d676ff }'] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <child></child>`
})
export class GreetingComponent {
}
