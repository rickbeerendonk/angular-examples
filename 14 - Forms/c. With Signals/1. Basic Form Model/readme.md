# Basic Form Model

This example demonstrates the fundamental concepts of Angular Signal Forms:

## Key Concepts

1. **Create a form model with `signal()`**: Define your form data structure using a signal
2. **Pass the model to `form()`**: Create a FieldTree that mirrors your model's shape
3. **Bind with `[field]` directive**: Connect HTML inputs to your form fields

## Code Structure

```typescript
// 1. Define your form data interface
interface FormModel {
  name: string;
}

// 2. Create a signal to hold the form data
formModel = signal<FormModel>({
  name: 'Angular Form'
});

// 3. Create the form tree
myForm = form(this.formModel);
```

```html
<!-- 4. Bind inputs using [field] directive -->
<input type="text" [field]="myForm.name" />
```

## Benefits

- **Automatic synchronization**: Changes in the input automatically update the model
- **Type-safe**: Full TypeScript support with dot notation access
- **Reactive**: Built on Angular signals for optimal change detection
- **Simple**: Less boilerplate compared to Reactive Forms

## Learn More

- [Angular Signal Forms Documentation](https://angular.dev/essentials/signal-forms)
