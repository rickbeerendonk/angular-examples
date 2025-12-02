# Signal Input with Transform (Angular 21)

This example demonstrates how to use transform functions with signal inputs in Angular 21.

## Features

- **Custom Transform Functions** - Transform input values before they're set
- **Built-in Transforms** - Use `numberAttribute` and `booleanAttribute` helpers
- **Type-Safe** - Full TypeScript support with proper typing
- **Zoneless** - Uses zoneless change detection

## Transform Types

### Custom Transform

```typescript
name = input<string, string>('', {
  transform: (value: string) => value.toUpperCase()
});
```

### Number Transform

```typescript
count = input<number, string | number>(0, {
  transform: numberAttribute
});
```

Accepts both strings and numbers, converts to number.

### Boolean Transform

```typescript
active = input<boolean, boolean | string>(false, {
  transform: booleanAttribute
});
```

Accepts boolean or string ('true', 'false', '', etc.), converts to boolean.

## Benefits

1. **Type Coercion** - Automatically convert attribute types
2. **Data Validation** - Transform and validate input values
3. **Reusability** - Share transform functions across components
4. **Type Safety** - Declare both input and output types

## Usage

```html
<!-- String transformed to uppercase -->
<greeting [name]="'alice'" />

<!-- String/number converted to number -->
<greeting [count]="42" />

<!-- String converted to boolean -->
<greeting [active]="'true'" />
```

---

**European Union Public Licence version 1.2**  
**Copyright © 2025 Rick Beerendonk**
