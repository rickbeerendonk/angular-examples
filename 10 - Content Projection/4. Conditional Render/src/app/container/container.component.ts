/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  show = input(true);
}
