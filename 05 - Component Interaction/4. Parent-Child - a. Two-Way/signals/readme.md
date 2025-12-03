# Component Interaction - Parent-Child - Two-Way Binding - Signals

This example demonstrates the modern Angular signal-based approach for two-way binding using the `model()` function. This is a significant improvement over the traditional `@Input` + `@Output` combination.

## Key Differences from NgModule Version

### Traditional Two-Way Binding (NgModule)

The old approach required manually creating both input and output properties:

```typescript
@Input() value = 'World';
@Output() valueChange = new EventEmitter<string>();

valueChanged(target: EventTarget | null) {
  this.value = (target as HTMLInputElement).value;
  this.valueChange.emit(this.value);
}
```

### Modern Signal-Based Two-Way Binding

The new `model()` function combines both input and output into a single declaration:

```typescript
value = model('World');

valueChanged(target: EventTarget | null) {
  // Setting the model value automatically emits the change
  this.value.set((target as HTMLInputElement).value);
}
```

## How model() Works

### 1. Automatic Input/Output Creation

- `model()` automatically creates both an input property and an output event
- The output event is named with the "Change" suffix (e.g., `valueChange`)
- No need for `EventEmitter` or manual event emission

### 2. Parent Component Binding

The parent uses the same banana-in-a-box syntax `[()]`:

```html
<edit-box [(value)]="value" />
```

### 3. Automatic Synchronization

When you call `this.value.set(newValue)` in the child:

- The signal value updates locally
- The change is automatically emitted to the parent
- The parent's property is updated automatically

### 4. Template Access

Access the signal value by calling it as a function:

```html
<input [value]="value()" (input)="valueChanged($event.target)" />
```

## Benefits of model() over @Input + @Output

1. **Less Boilerplate**: Single declaration instead of two separate decorators
2. **Automatic Emission**: No need to manually call `.emit()`
3. **Type Safety**: Better type inference and compile-time checking
4. **Reactive**: Built on Angular's signal primitives for better performance
5. **Simpler Logic**: Less code to maintain and understand
6. **Convention**: Automatically follows the "Change" suffix convention

## Standalone Components & Zoneless

This example also demonstrates:

- **Standalone Components**: No NgModule required
- **Zoneless Change Detection**: Uses `provideExperimentalZonelessChangeDetection()`
- **Modern Bootstrapping**: `bootstrapApplication()` instead of module-based bootstrap

## Comparison Table

| Feature        | Old (@Input + @Output)  | New (model())             |
| -------------- | ----------------------- | ------------------------- |
| Declaration    | Two separate decorators | Single function call      |
| Event Emission | Manual `emit()`         | Automatic on `set()`      |
| Boilerplate    | High                    | Low                       |
| Type Safety    | Good                    | Better                    |
| Performance    | Standard                | Optimized (signals)       |
| Convention     | Manual naming           | Automatic "Change" suffix |

## When to Use model()

Use `model()` whenever you need two-way binding between parent and child components:

- Form controls
- Editable values
- Toggle states
- Any scenario where child changes should propagate to parent

## Copyright

Copyright © 2025 Rick Beerendonk
