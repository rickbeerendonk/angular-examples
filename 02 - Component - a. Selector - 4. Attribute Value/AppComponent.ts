/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

import Greeting from './GreetingComponent';

@Component({
  selector: 'app',
  template: `
  <div data-replace="true">Should be replaced.</div>
  <br>
  <div data-replace="false">Should not be replaced.</div>
  `
})
class AppComponent {
}

export default AppComponent;