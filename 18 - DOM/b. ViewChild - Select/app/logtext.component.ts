/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <input
      autofocus
      #inputRef
      (keyup)="onKeyUp($event.target.value)"
      [value]="text"
    />
    <h1>{{ text }}</h1>
  `
})
export class LogTextComponent implements AfterViewInit {
  @ViewChild('inputRef') inputRef: ElementRef;

  text: string = 'initial';

  ngAfterViewInit() {
    this.inputRef.nativeElement.select();
  }

  onKeyUp(value: string) {
    this.text = value;
  }
}
