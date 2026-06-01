/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

class Person {
  constructor(public name: string) {}
}

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{ person()?.name }}!</h1>'
})
export class GreetingComponent {
  person = signal<Person | undefined>(new Person('John Johnson'));

  constructor() {
    // Remove the person after 5 seconds and observe the UI change
    //
    // In the template, change "person()?.name" into "person()!.name", then:
    // The old value remains visible, so...
    // ...check the Browser's console for errors:
    setTimeout(() => this.person.set(undefined), 5000);
  }
}
