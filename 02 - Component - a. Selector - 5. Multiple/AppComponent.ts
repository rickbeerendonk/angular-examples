/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

import Greeting from './GreetingComponent';

@Component({
  selector: 'app',
  template: `
  <greeting>Should be replaced.</greeting>
  <br>
  <groet>Should be replaced.</groet>
  <br>
  <div class="replace">Should be replaced.</div>
  <br>
  <div data-replace>Should be replaced.</div>
  <br>
  <div data-should-replace="true">Should be replaced.</div>
  <br>
  <div>Should not be replaced.</div>
  `
})
class AppComponent {
}

export default AppComponent;