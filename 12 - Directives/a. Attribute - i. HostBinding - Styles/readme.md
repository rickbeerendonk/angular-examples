# Attribute Directive - HostBinding for Styles

This example demonstrates how to create an attribute directive that uses `@HostBinding` to bind to inline style properties of the host element.

## Key Concepts

- **`@HostBinding('style.color')`** - Binds a directive property to the host element's `style.color` property
- **`@HostBinding('style.font-weight')`** - Binds a directive property to the host element's `style.font-weight` property
- **`@HostListener('mouseenter')`** - Listens to the `mouseenter` event on the host element
- **`@HostListener('mouseleave')`** - Listens to the `mouseleave` event on the host element

## Usage

```html
<p emphasis>This paragraph changes color and font-weight on hover</p>
```

When you hover over the paragraph, it becomes red and bold. When you move the mouse away, it returns to normal.
