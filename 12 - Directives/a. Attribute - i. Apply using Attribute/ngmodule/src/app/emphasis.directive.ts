import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

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

  private setColor(color: string | null): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  private setWeight(weight: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', weight);
  }
}
