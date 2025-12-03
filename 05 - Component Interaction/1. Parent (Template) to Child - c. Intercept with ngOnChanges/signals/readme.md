# Component Interaction: Intercept Input Changes with effect()

## Angular 21 - Signals Approach

This example demonstrates how to intercept and react to input changes using **signals** and the `effect()` function.

### Key Concepts

- **`input<T>()`**: Signal-based input that automatically tracks changes
- **`effect()`**: Runs code whenever tracked signals change
- Replaces the `ngOnChanges` lifecycle hook used in NgModule examples

### Traditional vs Signals Approach

**NgModule (with `ngOnChanges`):**

```typescript
export class GreetingComponent implements OnChanges {
  @Input() name?: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log(`name changed to: ${changes['name'].currentValue}`);
  }
}
```

**Signals (with `effect()`):**

```typescript
export class GreetComponent {
  name = input<string>();

  constructor() {
    effect(() => {
      console.log(`name changed to: ${this.name()}`);
    });
  }
}
```

### Benefits of Signals Approach

1. **Automatic Tracking**: `effect()` automatically tracks all signals read inside it
2. **Type Safety**: Full TypeScript inference with `input<T>()`
3. **Simpler API**: No need to check which property changed
4. **Fine-Grained**: Only runs when the specific signal(s) change
5. **Composable**: Can track multiple signals in one effect

### When to Use

- Logging input changes for debugging
- Triggering side effects when inputs change
- Validating input values
- Synchronizing with external state

### Note

In most cases, you can use **computed signals** instead of effects for derived state:

```typescript
uppercaseName = computed(() => this.name()?.toUpperCase());
```

Use `effect()` only when you need to perform side effects (like logging, API calls, or DOM manipulation).

---

**Copyright © 2025 Rick Beerendonk**  
European Union Public License version 1.2
