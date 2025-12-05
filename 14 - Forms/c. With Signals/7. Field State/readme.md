# Field State

This example demonstrates all field state signals available in Signal Forms.

## Field State Signals

Every field provides these reactive state signals:

### `value()`

Returns the current field value:

```typescript
const currentValue = myForm.email().value();
```

### `valid()`

Returns `true` if the field passes all validation rules:

```typescript
const isValid = myForm.email().valid();
```

### `touched()`

Returns `true` if the user has focused and then blurred the field:

```typescript
const isTouched = myForm.email().touched();
```

Use this to show validation errors only after the user has interacted with the field.

### `dirty()`

Returns `true` if the user has changed the value:

```typescript
const isDirty = myForm.email().dirty();
```

Opposite of `pristine` in Reactive Forms.

### `disabled()`

Returns `true` if the field is disabled:

```typescript
const isDisabled = myForm.email().disabled();
```

### `readonly()`

Returns `true` if the field is readonly:

```typescript
const isReadonly = myForm.email().readonly();
```

### `pending()`

Returns `true` if async validation is in progress:

```typescript
const isPending = myForm.email().pending();
```

### `errors()`

Returns an array of validation errors:

```typescript
const errors = myForm.email().errors();
// Each error has: { kind: string, message: string }
```

## Common Patterns

### Show errors only after user interaction:

```html
@if (myForm.email().touched() && !myForm.email().valid()) { @for (error of
myForm.email().errors(); track error.kind) {
<small class="error">{{ error.message }}</small>
} }
```

### Disable submit button until form is valid:

```html
<button type="submit" [disabled]="!myForm.email().valid()">Submit</button>
```

### Show loading state during async validation:

```html
@if (myForm.email().pending()) {
<span class="spinner">Validating...</span>
}
```

## Comparison to Reactive Forms

| Reactive Forms     | Signal Forms         |
| ------------------ | -------------------- |
| `control.value`    | `field().value()`    |
| `control.valid`    | `field().valid()`    |
| `control.touched`  | `field().touched()`  |
| `control.dirty`    | `field().dirty()`    |
| `control.disabled` | `field().disabled()` |
| `control.pending`  | `field().pending()`  |
| `control.errors`   | `field().errors()`   |

## Learn More

- [Signal Forms - Field State](https://angular.dev/essentials/signal-forms#field-state-signals)
- [Signal Forms - Field State Management Guide](https://angular.dev/guide/forms/signals/field-state-management)
