/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

class Person {
  constructor(public name: string) {}
}

@Component({
  selector: 'greeting',
  template: `
    <h1>Hello {{ person?.name }}!</h1>
  `
})
export class GreetingComponent {
  person: Person = new Person('John Johnson');

  constructor() {
    // Remove the person after 5 seconds and observe the UI change
    //
    // In the template, change "person?.name" into "person.name", then:
    // The old value remains visible, so...
    // ...check the Browser's console for errors:
    setTimeout(() => (this.person = null), 5000);
  }
}
