# Attribute Directive - Input Signal

This example demonstrates how to create a configurable attribute directive using Angular's modern `input()` signal API.

## Key Concepts

- **`input<string>('red')`** - Creates an input signal with a default value of `'red'`
- **Signal-based input** - Modern alternative to `@Input()` decorator
- **Reading signal values** - Use `this.color()` to read the signal value
- **`effect()`** - Can be used to react to signal changes (shown but not required here)

## Why Input Signals?

Input signals are the modern Angular way to pass data to directives and components:

- Better change detection
- More predictable reactivity
- Works seamlessly with other signals
- Cleaner API than `@Input()` with setters

## Usage

```html
<!-- Uses default red color -->
<p emphasis>Hover over me</p>

<!-- Override with blue color -->
<p emphasis color="blue">Hover over me</p>

<!-- Override with green color -->
<p emphasis color="green">Hover over me</p>
```

The directive accepts a `color` input that can be customized per usage.
