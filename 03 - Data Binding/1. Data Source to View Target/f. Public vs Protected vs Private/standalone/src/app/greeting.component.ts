/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1>Public: {{ publ }}!</h1>
    <h1>Protected: {{ prot }}! <= Since Angular v14</h1>
    <!--
      No private:
      <h1>Private: {{ priv }}!</h1>
    -->
  `,
  standalone: true
})
export class GreetingComponent {
  // Don't use private, because it won't work in AOT (ahead of time) compilation.
  // See: https://angular.io/guide/aot-compiler
  public publ = 'Public';
  protected prot = 'Protected';
  private priv = 'Private';
}
