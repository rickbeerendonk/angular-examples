# Component Interaction - Parent (Template) to Child - Signals

This example demonstrates the modern Angular signal-based approach for passing data from a parent component to a child component through the template.

## Key Differences from NgModule Version

### Signal-based Input

- **Old (NgModule)**: Uses `@Input()` decorator
  ```typescript
  @Input() name = 'Default';
  ```
- **New (Signals)**: Uses `input()` signal function
  ```typescript
  name = input('Default');
  ```

### Template Access

- **Old**: Direct property access
  ```html
  <div>Hello {{ name }}!</div>
  ```
- **New**: Call the signal as a function
  ```html
  <div>Hello {{ name() }}!</div>
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

## Benefits of Signal-based Inputs

1. **Type Safety**: Better type inference
2. **Performance**: More granular change detection
3. **Reactivity**: Built-in reactive primitives
4. **Simplicity**: Less boilerplate code
5. **Modern**: Aligns with Angular's future direction

## Copyright

European Union Public License version 1.2  
Copyright © 2025 Rick Beerendonk
