# Component Interaction - Child to Parent - Signals

This example demonstrates the modern Angular signal-based approach for passing events from a child component to a parent component using the `output()` function.

## Key Differences from NgModule Version

### Signal-based Output

- **Old (NgModule)**: Uses `@Output()` decorator with `EventEmitter`
  ```typescript
  @Output() change = new EventEmitter<string>();
  ```
- **New (Signals)**: Uses `output<T>()` function
  ```typescript
  change = output<string>();
  ```

### Event Emission

Both versions use the same `.emit()` method:

```typescript
this.change.emit(value);
```

### Template Binding

Parent component binding remains the same:

```html
<greeting (change)="greetingChanged($event)"></greeting>
```

### Standalone Components

- No NgModule required
- Components import other components directly
- Uses `standalone: true` flag

### Bootstrapping

- **Old**: `platformBrowserDynamic().bootstrapModule(AppModule)`
- **New**: `bootstrapApplication(AppComponent, { providers: [...] })`

### Zoneless Change Detection

- Uses `provideExperimentalZonelessChangeDetection()`
- No `zone.js` polyfill needed
- More efficient change detection

## Benefits of Signal-based Outputs

1. **Type Safety**: Better type inference and compile-time checking
2. **Performance**: More efficient change detection
3. **Consistency**: Aligns with signal-based inputs for a unified API
4. **Simplicity**: Less boilerplate, no need for EventEmitter import
5. **Modern**: Part of Angular's signal-based future direction

## How It Works

1. **Child Component** (`GreetingComponent`):

   - Declares an output using `output<string>()`
   - Emits events when the input value changes
   - Uses `.emit()` to send data to the parent

2. **Parent Component** (`AppComponent`):
   - Listens to the child's `change` event in the template
   - Handles the event with `greetingChanged($event)` method
   - Updates a signal with the received value
   - Displays the value in the template using `greetingText()`

## Type Safety

The `output<T>()` function provides strong typing:

- The generic type parameter (`<string>`) defines the event payload type
- TypeScript ensures emitted values match this type
- Parent event handlers receive correctly typed `$event` data

## Copyright

Copyright © 2025 Rick Beerendonk

European Union Public License version 1.2
