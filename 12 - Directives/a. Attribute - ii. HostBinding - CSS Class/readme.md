# Attribute Directive - HostBinding for CSS Class

This example demonstrates how to create an attribute directive that uses `@HostBinding` to conditionally add/remove CSS classes on the host element.

## Key Concepts

- **`@HostBinding('class.emphasis')`** - Binds a boolean property to a CSS class on the host element
- When the property is `true`, the class is added: `class="emphasis"`
- When the property is `false`, the class is removed
- **`@HostListener`** - Listens to events to toggle the class

## Why HostBinding for Classes?

`@HostBinding('class.X')` is the recommended way to toggle CSS classes. It's more declarative and testable than using `Renderer2.addClass/removeClass()`.

## Usage

```html
<p emphasis>This paragraph gets the 'emphasis' class on hover</p>
```

```css
.emphasis {
  color: red;
  font-weight: bold;
}
```

The directive toggles the CSS class, and the styles are defined in the component's CSS.
