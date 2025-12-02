/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input, Input } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [NgIf, NgTemplateOutlet],
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() show = true;
}
