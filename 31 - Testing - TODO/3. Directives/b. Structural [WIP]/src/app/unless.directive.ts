import {
  Directive,
  effect,
  input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[unless]',
  standalone: true
})
export class UnlessDirective {
  unless = input.required<boolean>();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    effect(() => {
      if (!this.unless()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
