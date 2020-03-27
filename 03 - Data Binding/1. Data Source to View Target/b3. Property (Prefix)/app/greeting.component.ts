/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1>Hello <span bind-innerText="name"></span>!</h1>'
})
export class GreetingComponent {
  name: string = 'World';
}
