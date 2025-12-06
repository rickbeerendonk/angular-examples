import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlessDirective } from './unless.directive';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <ng-template [unless]="condition">
      <p>Content will be displayed when condition is false</p>
    </ng-template>
  `
})
class TestComponent {
  condition = false;
}

describe('UnlessDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let viewContainerRef: ViewContainerRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlessDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    viewContainerRef = fixture.debugElement.injector.get(ViewContainerRef);
    spyOn(viewContainerRef, 'createEmbeddedView').and.callThrough();
    spyOn(viewContainerRef, 'clear').and.callThrough();
    component.condition = true;
    fixture.detectChanges();
  });

  it('should clear the view container when condition is true', () => {
    expect(viewContainerRef.clear).toHaveBeenCalled();
  });

  it('should create an embedded view when condition is false', () => {
    component.condition = false;
    fixture.detectChanges();
    const templateRef = fixture.debugElement
      .query(By.css('ng-template'))
      .injector.get(TemplateRef);
    expect(viewContainerRef.createEmbeddedView).toHaveBeenCalled();
  });

  it('should create an embedded view when condition is false', () => {
    component.condition = false;
    fixture.detectChanges();
    expect(viewContainerRef.length).toBe(1);
  });

  it('should clear the view container when condition is true', () => {
    component.condition = true;
    fixture.detectChanges();
    expect(viewContainerRef.length).toBe(0);
  });
});
