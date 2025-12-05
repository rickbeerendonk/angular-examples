# Submit

This example demonstrates handling form submission with Signal Forms.

## Key Concepts

### Form Submission

Handle the form's submit event in your template:

```html
<form (submit)="onSubmit($event)">
  <!-- Form fields -->
  <button type="submit">Submit</button>
</form>
```

### Accessing Form Data

Access the complete form data from the model signal:

```typescript
onSubmit(event: Event) {
  event.preventDefault();

  // Get the current form data
  const formData = this.loginModel();
  console.log('Form data:', formData);

  // Process the data (e.g., send to API)
}
```

## Important Notes

- **Prevent default**: Always call `event.preventDefault()` to prevent page reload
- **Model signal**: The form model signal always contains the current form state
- **Type-safe**: Access form data with full TypeScript support
- **Validation**: You can check validation state before submitting (see Validation example)

## Best Practices

1. Prevent default form submission
2. Validate data before processing
3. Show loading state during submission
4. Handle errors gracefully
5. Provide user feedback on success/failure

## Learn More

- [Signal Forms Documentation](https://angular.dev/essentials/signal-forms)
