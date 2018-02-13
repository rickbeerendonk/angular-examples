/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

import Greeting from './GreetingComponent';

@Component({
  selector: 'app',
  template: `
  <div data-replace>Should be replaced.</div>
  <div>Should not be replaced.</div>
  `
})
class AppComponent {
}

export default AppComponent;