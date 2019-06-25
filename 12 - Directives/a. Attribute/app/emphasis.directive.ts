import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setColor('red');
    this.setWeight('bold');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setColor(null);
    this.setWeight('normal');
  }

  private setColor(color: string): void {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }

  private setWeight(weight: string): void {
    this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', weight);
  }
}
