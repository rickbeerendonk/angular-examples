# Component Interaction: ViewChild with Signals

## Angular 21 - Signals Approach

This example demonstrates how to access child components from a parent using the **`viewChild()`** signal query function.

### Key Concepts

- **`viewChild()`**: Signal-based query for accessing child components
- **`viewChild.required()`**: Ensures the child component exists (throws error if not found)
- **Signal-based state**: Child component uses signals for reactive state management
- Replaces `@ViewChild` decorator and lifecycle hooks

### Traditional vs Signals Approach

**NgModule (with `@ViewChild`):**

```typescript
export class AppComponent implements AfterViewInit {
  @ViewChild(GreetingComponent, { static: true })
  private greetingComponent!: GreetingComponent;

  ngAfterViewInit() {
    setTimeout(() => {
      this.greetingComponent.name = 'Angular';
    }, 0);
  }
}
```

**Signals (with `viewChild()`):**

```typescript
export class AppComponent {
  private greetingComponent = viewChild.required(GreetingComponent);

  constructor() {
    effect(() => {
      const greeting = this.greetingComponent();
      greeting.name.set('Angular');
    });
  }
}
```

### Benefits of Signals Approach

1. **No Lifecycle Hooks**: No need for `AfterViewInit`
2. **No setTimeout**: No timing issues with change detection
3. **Type Safety**: `viewChild.required()` guarantees non-null value
4. **Reactive**: Automatically updates when view changes
5. **Simpler**: Less boilerplate code

### ViewChild Signal Options

```typescript
// Required (throws if not found)
child = viewChild.required(ChildComponent);

// Optional (returns undefined if not found)
child = viewChild(ChildComponent);

// With read option (read specific type)
elementRef = viewChild('myRef', { read: ElementRef });
```

### When to Use

- Calling methods on child components
- Reading child component state
- Manipulating child component properties
- Coordinating parent-child interactions

### Best Practice

Prefer **inputs/outputs** for parent-child communication when possible. Use `viewChild()` only when you need direct access to the child component's API.

---

**Copyright © 2025 Rick Beerendonk**  
European Union Public License version 1.2
