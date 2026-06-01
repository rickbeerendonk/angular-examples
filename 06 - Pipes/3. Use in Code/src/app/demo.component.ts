/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  providers: [UpperCasePipe, DatePipe]
})
export class DemoComponent {
  private readonly upperCasePipe = inject(UpperCasePipe);
  private readonly datePipe = inject(DatePipe);

  person = {
    name: 'Jan Jansen',
    dob: new Date(1951, 11, 24),
    retired: true,
    children: 3
  };

  // Transformed
  nameUpperCase = this.upperCasePipe.transform(this.person.name);
  dobString = this.datePipe.transform(this.person.dob, 'dd-MM-yyyy');
}
