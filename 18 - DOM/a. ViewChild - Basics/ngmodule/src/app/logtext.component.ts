/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <input autofocus (keyup)="onKeyUp($event.target.value)" />
    <h1 #h1ref></h1>
  `
})
export class LogTextComponent {
  @ViewChild('h1ref') h1Ref: ElementRef;

  onKeyUp(value: string) {
    this.h1Ref.nativeElement.innerText = value;
  }
}
