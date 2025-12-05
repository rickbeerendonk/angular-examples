# Read and Write Values

This example demonstrates how to read and programmatically update field values in Signal Forms.

## Key Concepts

### Reading Values with `value()`

Access the current value of a field by calling `field().value()`:

```typescript
// In template
{
  {
    myForm.name().value();
  }
}

// In component
const currentValue = this.myForm.name().value();
```

### Writing Values with `value.set()`

Programmatically update a field's value using `value.set()`:

```typescript
updateName() {
  this.myForm.name().value.set('New Name');
}
```

## Important Notes

- **Automatic synchronization**: When you use `value.set()`, both the field value and the underlying model signal are updated automatically
- **Two-way binding**: The `[field]` directive creates two-way binding, so user changes also update the model
- **Reactive**: All updates trigger Angular's change detection through signals

## Benefits

- Read field values reactively in templates
- Programmatically set values from component methods
- Model signal stays in sync automatically
- Type-safe access to field values

## Learn More

- [Signal Forms - Reading Values](https://angular.dev/essentials/signal-forms#4-read-field-values-with-value)
- [Signal Forms - Updating Values](https://angular.dev/essentials/signal-forms#5-update-field-values-with-set)
