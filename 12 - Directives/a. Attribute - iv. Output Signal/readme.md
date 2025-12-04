# Attribute Directive - Output Signal

This example demonstrates how to create an attribute directive that emits events using Angular's modern `output()` signal API.

## Key Concepts

- **`output<boolean>()`** - Creates an output signal that can emit values
- **Signal-based output** - Modern alternative to `@Output()` decorator with `EventEmitter`
- **Emitting events** - Use `.emit(value)` to send data to parent components
- **Event binding** - Parent listens with `(eventName)="handler($event)"`

## Why Output Signals?

Output signals are the modern Angular way to emit events from directives and components:

- Simpler than `EventEmitter`
- Better TypeScript types
- Consistent with input signals
- Part of Angular's reactive primitives

## Usage

```html
<p emphasis (hoverStateChanged)="onHoverChange($event)">
  Hover over me to emit events
</p>
```

```typescript
onHoverChange(isHovering: boolean): void {
  console.log('Hover state:', isHovering);
}
```

The directive emits `true` when the mouse enters and `false` when it leaves.
