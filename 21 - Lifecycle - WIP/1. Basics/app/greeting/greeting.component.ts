/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
  OnInit
} from '@angular/core';

import { LoggerService } from '../logger/logger.service';

@Component({
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'greet',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent
  implements DoCheck, OnChanges, OnDestroy, OnInit
{
  @Input() name: string;
  count = 0;

  constructor(private loggerService: LoggerService) {
    this.loggerService.logEvent('constructor', this.name, this.count);

    setTimeout(() => (this.count = 1), 200);
  }

  // Init & Destroy

  ngOnInit() {
    this.loggerService.logEvent('ngOnInit', this.name, this.count);
  }

  ngOnDestroy() {
    this.loggerService.logEvent('ngOnDestroy', this.name, this.count);
  }

  // Changes

  ngOnChanges(changes: SimpleChanges) {
    this.loggerService.logEvent(
      `ngOnChanges(${JSON.stringify(changes)})`,
      this.name,
      this.count
    );
  }

  // Check

  ngDoCheck() {
    this.loggerService.logEvent('ngDoCheck', this.name, this.count);
  }
}
