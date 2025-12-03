/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  Component,
  Input,
  effect,
  signal,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { LoggerService } from '../logger/logger.service';

@Component({
  selector: 'greet',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  standalone: true
})
export class GreetingComponent
  implements
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit
{
  @Input() name?: string;
  count = signal(0);

  constructor(private loggerService: LoggerService) {
    this.loggerService.logEvent('constructor', this.name, this.count());

    // React to count signal changes
    effect(() => {
      this.loggerService.logEvent(
        'effect (count changed)',
        this.name,
        this.count()
      );
    });

    setTimeout(() => {
      this.count.set(1);
    }, 200);
  }

  // Init & Destroy

  ngOnInit() {
    this.loggerService.logEvent('ngOnInit', this.name, this.count());
  }

  ngOnDestroy() {
    this.loggerService.logEvent('ngOnDestroy', this.name, this.count());
  }

  // Changes

  ngOnChanges(changes: SimpleChanges) {
    // Only triggers when @Input() properties change, not when internal signals change
    this.loggerService.logEvent(
      `ngOnChanges(${JSON.stringify(changes)})`,
      this.name,
      this.count()
    );
  }

  // Check

  ngDoCheck() {
    // In zoneless Angular, this doesn't run on every change detection cycle
    this.loggerService.logEvent('ngDoCheck', this.name, this.count());
  }

  ngAfterContentInit() {
    this.loggerService.logEvent('ngAfterContentInit', this.name, this.count());
  }

  ngAfterContentChecked() {
    // Only runs after content checks, not on every signal update
    this.loggerService.logEvent(
      'ngAfterContentChecked',
      this.name,
      this.count()
    );
  }

  ngAfterViewInit() {
    this.loggerService.logEvent('ngAfterViewInit', this.name, this.count());
  }

  ngAfterViewChecked() {
    // Only runs after view checks, not on every signal update
    this.loggerService.logEvent('ngAfterViewChecked', this.name, this.count());
  }
}
