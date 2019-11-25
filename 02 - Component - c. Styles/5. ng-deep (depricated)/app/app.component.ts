/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: ['.deprecated { color: gray }'],
  template: `
    <div>App component: div</div>
    <p>App component: p</p>
    <greeting></greeting>
    <br />
    <p class="deprecated">
      Deprecated:
      <a
        href="https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep"
        >::ng-deep</a
      >
    </p>
  `
})
export class AppComponent {}
