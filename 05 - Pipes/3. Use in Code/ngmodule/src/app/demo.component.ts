/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  providers: [UpperCasePipe, DatePipe]
})
export class DemoComponent {
  person = {
    name: 'Jan Jansen',
    dob: new Date(1951, 11, 24),
    retired: true,
    children: 3
  };

  // Transformed
  nameUpperCase?: string;
  dobString?: string;

  constructor(upperCasePipe: UpperCasePipe, datePipe: DatePipe) {
    this.nameUpperCase = upperCasePipe.transform(this.person.name);
    this.dobString = datePipe.transform(this.person.dob, 'dd-MM-yyyy');
  }
}
