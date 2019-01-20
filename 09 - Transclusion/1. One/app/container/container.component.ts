/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() name: string;
}
