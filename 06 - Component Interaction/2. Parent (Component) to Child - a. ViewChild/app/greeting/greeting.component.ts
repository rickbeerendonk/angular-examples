/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  private points: string = '.';

  public name: string = 'World';

  addPoint() {
    this.points += '.';
  }
}
