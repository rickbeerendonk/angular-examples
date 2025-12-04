# Attribute Directive - Element Selector

This example demonstrates how to create a directive that automatically applies to all elements of a specific type using an element selector.

## Key Concepts

- **`selector: 'p'`** - Element selector (instead of attribute selector like `[emphasis]`)
- **Auto-apply** - Directive applies to ALL matching elements automatically
- **No attribute needed** - Elements don't need to add any attribute

## Element Selector vs Attribute Selector

```typescript
// Attribute selector (must be explicitly added)
selector: '[emphasis]'; // <p emphasis>

// Element selector (auto-applies to all <p> tags)
selector: 'p'; // <p>
```

## When to Use Element Selectors?

- Global styling for specific elements
- Polyfills or browser compatibility fixes
- Automatic behavior for all instances of an element
- Plugin-like functionality

⚠️ **Use with caution**: Affects ALL matching elements in the component!

## Usage

```html
<!-- Both paragraphs automatically get the directive -->
<p>This paragraph gets the directive automatically</p>
<p>This one too!</p>
<span>This span is NOT affected</span>
```
