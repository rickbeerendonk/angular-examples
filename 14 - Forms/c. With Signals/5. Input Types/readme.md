# Input Types

This example demonstrates all the input types supported by Signal Forms.

## Supported Input Types

### Text Inputs

- **text**: Basic text input
- **email**: Email input with automatic validation support
- **number**: Automatically converts between strings and numbers

```html
<input type="text" [field]="myForm.name" />
<input type="email" [field]="myForm.email" />
<input type="number" [field]="myForm.age" />
```

### Date and Time

- **date**: Stores values as `YYYY-MM-DD` strings
- **time**: Stores values in `HH:mm` format

```html
<input type="date" [field]="myForm.eventDate" />
<input type="time" [field]="myForm.eventTime" />
```

Convert date strings to Date objects if needed:

```typescript
const dateObject = new Date(myForm.eventDate().value());
```

### Multiline Text

- **textarea**: For longer text input

```html
<textarea [field]="myForm.message" rows="4"></textarea>
```

### Checkboxes

- **Single checkbox**: Binds to a boolean value
- **Multiple checkboxes**: Create separate boolean fields for each option

```html
<input type="checkbox" [field]="myForm.agreeToTerms" />
<input type="checkbox" [field]="myForm.emailNotifications" />
<input type="checkbox" [field]="myForm.smsNotifications" />
```

### Radio Buttons

Radio buttons with the same `[field]` automatically get the same `name` attribute:

```html
<input type="radio" value="free" [field]="myForm.plan" />
<input type="radio" value="premium" [field]="myForm.plan" />
<input type="radio" value="enterprise" [field]="myForm.plan" />
```

The field stores the value from the selected radio button's `value` attribute.

### Select Dropdowns

Works with both static and dynamic options:

```html
<select [field]="myForm.country">
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
</select>
```

**Note**: Multiple select (`<select multiple>`) is not yet supported.

## Field Directive Features

The `[field]` directive automatically:

- Creates two-way binding between input and model
- Syncs field state attributes (`required`, `disabled`, `readonly`)
- Handles type conversions (e.g., string to number)

## Learn More

- [Signal Forms - Basic Usage](https://angular.dev/essentials/signal-forms#basic-usage)
