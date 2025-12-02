/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <input (input)="onInput($event.target)" />
    <h1 #h1ref></h1>
  `
})
export class LogTextComponent implements AfterViewInit {
  @ViewChild('h1ref') h1Ref?: ElementRef;

  onInput(target: EventTarget | null) {
    this.h1Ref!.nativeElement.innerText = (target as HTMLInputElement).value;
  }

  ngAfterViewInit(): void {
    this.h1Ref!.nativeElement.innerText = 'Initialized';
  }
}
