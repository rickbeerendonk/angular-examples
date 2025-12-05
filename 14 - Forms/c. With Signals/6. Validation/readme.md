# Validation

This example demonstrates built-in validators in Signal Forms.

## Adding Validation

Pass a schema function as the second argument to `form()`:

```typescript
myForm = form(this.formModel, schemaPath => {
  // Add validation rules
  required(schemaPath.email);
  email(schemaPath.email);
});
```

## Built-in Validators

### `required()`

Ensures the field has a value:

```typescript
required(schemaPath.username, { message: 'Username is required' });
```

### `email()`

Validates email format:

```typescript
email(schemaPath.email, { message: 'Please enter a valid email address' });
```

### `minLength()` / `maxLength()`

Validates string or collection length:

```typescript
minLength(schemaPath.username, 3, {
  message: 'Username must be at least 3 characters'
});
maxLength(schemaPath.username, 20, {
  message: 'Username must be at most 20 characters'
});
```

### `min()` / `max()`

Validates number ranges:

```typescript
min(schemaPath.age, 18, { message: 'You must be at least 18 years old' });
max(schemaPath.age, 120, { message: 'Please enter a valid age' });
```

### `pattern()`

Validates against a regex pattern:

```typescript
pattern(schemaPath.website, /^https?:\\/\\/.+/, {
  message: 'Website must start with http:// or https://'
});
```

## Displaying Errors

Access validation errors through the `errors()` signal:

```html
@for (error of myForm.email().errors(); track error.kind) {
<small class="error">{{ error.message }}</small>
}
```

Each error has:

- `kind`: The type of validation error (e.g., 'required', 'email')
- `message`: The custom error message you provided

## Custom Error Messages

Always provide custom error messages for better user experience:

```typescript
required(schemaPath.email, { message: 'Email is required' });
// Instead of just: required(schemaPath.email);
```

## Learn More

- [Signal Forms - Validation](https://angular.dev/essentials/signal-forms#validation-and-state)
- [Signal Forms - Validation Guide](https://angular.dev/guide/forms/signals/validation)
