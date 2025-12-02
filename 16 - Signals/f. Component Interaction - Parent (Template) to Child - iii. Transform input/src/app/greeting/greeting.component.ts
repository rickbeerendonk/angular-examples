/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';
import { booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <div class="greeting">
      <p><strong>Name (uppercase):</strong> {{ name() }}</p>
      <p>
        <strong>Count (number):</strong> {{ count() }} (type:
        {{ typeof count() }})
      </p>
      <p>
        <strong>Active (boolean):</strong> {{ active() }} (type:
        {{ typeof active() }})
      </p>
    </div>
  `,
  styles: [
    `
      .greeting {
        margin: 20px 0;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      p {
        margin: 5px 0;
      }
    `
  ]
})
export class GreetingComponent {
  // Input with custom transform function
  name = input<string, string>('', {
    transform: (value: string) => value.toUpperCase()
  });

  // Input with built-in number transform
  count = input<number, string | number>(0, {
    transform: numberAttribute
  });

  // Input with built-in boolean transform
  active = input<boolean, boolean | string>(false, {
    transform: booleanAttribute
  });

  // Helper method for template
  typeof(value: any): string {
    return typeof value;
  }
}
