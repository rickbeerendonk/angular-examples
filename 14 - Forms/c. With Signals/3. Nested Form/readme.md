# Nested Form

This example demonstrates working with nested objects in Signal Forms (equivalent to nested FormGroups in Reactive Forms).

## Key Concepts

### Nested Object Structure

Define nested objects in your form model interface:

```typescript
interface FormModel {
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}
```

### Accessing Nested Fields

Use dot notation to access nested fields:

```html
<input type="text" [field]="myForm.address.street" />
<input type="text" [field]="myForm.address.city" />
<input type="text" [field]="myForm.address.zipCode" />
```

## Benefits

- **Natural structure**: Matches your application's data model
- **Type-safe**: Full TypeScript support for nested properties
- **Simple syntax**: Dot notation access just like regular objects
- **Automatic synchronization**: All nested fields stay in sync with the model

## Comparison to Reactive Forms

| Reactive Forms                      | Signal Forms              |
| ----------------------------------- | ------------------------- |
| `FormGroup` with nested `FormGroup` | Nested objects in model   |
| `formGroup.get('address.street')`   | `myForm.address.street()` |
| More boilerplate                    | Less boilerplate          |

## Learn More

- [Signal Forms Documentation](https://angular.dev/essentials/signal-forms)
