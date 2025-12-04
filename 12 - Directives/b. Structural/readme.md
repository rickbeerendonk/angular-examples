# Structural Directive with Input Signal

This example demonstrates how to create a custom structural directive using Angular's modern `input()` signal API with `effect()`.

## Key Concepts

- **Structural directive** - Adds or removes DOM elements (uses `*` syntax)
- **`input.required<boolean>()`** - Required input signal (no default value)
- **`effect()`** - Reacts to signal changes to update the DOM
- **`TemplateRef`** - Reference to the template to be rendered
- **`ViewContainerRef`** - Container where template is rendered

## How It Works

1. The directive receives a boolean condition via `input()` signal
2. An `effect()` watches the signal for changes
3. When condition is `false`, the template is displayed
4. When condition is `true`, the template is removed
5. This is the opposite of `*ngIf` (hence the name "unless")

## Why Use Signals?

Modern structural directives use signals instead of `@Input()` with setters:

- More declarative
- Better integration with Angular's reactivity
- Cleaner code with `effect()`
- Consistent with other signal-based APIs

## Usage

```html
<!-- Shorthand syntax (most common) -->
<p *unless="flag1">Displayed unless flag1 is true</p>

<!-- Explicit syntax -->
<ng-template [unless]="flag1">
  <p>Displayed unless flag1 is true</p>
</ng-template>
```

## Comparison with ngIf

```html
<!-- ngIf shows when true -->
<p *ngIf="show">Visible when show is true</p>

<!-- unless shows when false (opposite) -->
<p *unless="show">Visible when show is false</p>
```
