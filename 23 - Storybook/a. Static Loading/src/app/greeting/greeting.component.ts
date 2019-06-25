import { Component, Input } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1 *ngIf="name">Hello {{ name }}!</h1>
  `,
  styles: []
})
export class GreetingComponent {
  @Input() name?: string;
}
