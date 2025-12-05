# Angular Signal Forms Examples

This folder contains examples demonstrating Angular Signal Forms, an experimental feature that manages form state using Angular signals for automatic synchronization between your data model and the UI.

> ⚠️ **Important**: Signal Forms are [experimental](https://angular.dev/reference/releases#experimental). The API may change in future releases. Avoid using experimental APIs in production applications without understanding the risks.

## What are Signal Forms?

Signal Forms provide a simpler, more reactive alternative to Reactive Forms by leveraging Angular's signals system. They offer:

- **Automatic synchronization** between data model and UI
- **Less boilerplate** compared to Reactive Forms
- **Type-safe** access with dot notation
- **Built-in validators** for common scenarios
- **Reactive state signals** for field tracking

## Examples

1. **Basic Form Model** - Creating a form with `signal()` and `form()`
2. **Read and Write Values** - Using `value()` to read and `value.set()` to update fields
3. **Nested Form** - Working with nested objects (equivalent to nested FormGroups)
4. **Submit** - Handling form submission
5. **Input Types** - All supported input types (text, email, number, date, time, textarea, checkbox, radio, select)
6. **Validation** - Built-in validators (required, email, min, max, minLength, maxLength, pattern)
7. **Field State** - Field state signals (valid, touched, dirty, disabled, readonly, pending, errors)

## Quick Start

```typescript
import { Component, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  imports: [Field],
  template: `
    <form (submit)="onSubmit($event)">
      <input type="email" [field]="loginForm.email" />
      <input type="password" [field]="loginForm.password" />
      <button type="submit">Log In</button>
    </form>
  `
})
export class LoginFormComponent {
  loginModel = signal<LoginData>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel);

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
  }
}
```

## Comparison to Reactive Forms

| Feature        | Reactive Forms       | Signal Forms          |
| -------------- | -------------------- | --------------------- |
| Form creation  | `new FormGroup()`    | `form(signal())`      |
| Field access   | `form.get('field')`  | `form.field()`        |
| Value access   | `control.value`      | `field().value()`     |
| Value update   | `control.setValue()` | `field().value.set()` |
| Nested forms   | Nested `FormGroup`   | Nested objects        |
| Validation     | Validators array     | Schema function       |
| State tracking | Properties           | Signal methods        |
| Boilerplate    | More                 | Less                  |

## Key Concepts

### 1. Create a Form Model

```typescript
formModel = signal<FormModel>({ name: '' });
```

### 2. Create a Field Tree

```typescript
myForm = form(this.formModel);
```

### 3. Bind with [field] Directive

```html
<input [field]="myForm.name" />
```

### 4. Add Validation (Optional)

```typescript
myForm = form(this.formModel, schemaPath => {
  required(schemaPath.name);
  email(schemaPath.email);
});
```

## Learn More

- [Signal Forms Essentials](https://angular.dev/essentials/signal-forms)
- [Signal Forms Overview](https://angular.dev/guide/forms/signals/overview)
- [Form Models Guide](https://angular.dev/guide/forms/signals/models)
- [Validation Guide](https://angular.dev/guide/forms/signals/validation)
- [Field State Management](https://angular.dev/guide/forms/signals/field-state-management)

## Note on Production Use

Signal Forms are experimental and their API may change. For production applications, consider using [Reactive Forms](../a.%20Reactive/) which are stable and production-ready.
