# Attribute Directive - Template Variable (exportAs)

This example demonstrates how to expose a directive's public properties to the template using `exportAs`.

## Key Concepts

- **`exportAs: 'mouseCaptured'`** - Names the directive for template reference
- **Template variable** - Use `#variable="directiveName"` to get directive instance
- **Public properties** - Any public property/method becomes accessible in template
- **Multiple instances** - Each element gets its own directive instance

## Why exportAs?

`exportAs` allows templates to:

- Read directive state (like `captured` in this example)
- Call directive methods
- Pass directive references to other components
- Access directive data without two-way binding

## Usage

```html
<p mouseCaptured #mouse1="mouseCaptured">
  Paragraph 1 contains the mouse: {{ mouse1.captured }}
</p>

<p mouseCaptured #mouse2="mouseCaptured">
  Paragraph 2 contains the mouse: {{ mouse2.captured }}
</p>
```

Each paragraph has its own directive instance. The template can read the `captured` property which tracks whether the mouse is hovering over that specific element.

## Real-world Examples

Angular's built-in directives use this:

- `<form #myForm="ngForm">` - Access form state
- `<input #myInput="ngModel">` - Access model state
