/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1>Hello <span [innerText]="name"></span>!</h1>'
})
export class GreetingComponent {
  // Don't use private, because it won't work in AOT (ahead of time) compilation.
  // See: https://angular.io/guide/aot-compiler
  name: string = 'World';
}
