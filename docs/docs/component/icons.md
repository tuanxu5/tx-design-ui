# Icons

TX Design UI includes a collection of SVG icons that you can use in your application.

## When To Use

- To provide visual cues and improve user experience
- To make interfaces more intuitive and easier to understand
- To save space by replacing text labels

## Basic Usage

```jsx
import { SvgIcon } from "tx-design-ui/assets/icons";

function MyComponent() {
  return (
    <div>
      <SvgIcon.IconCheck />
      <SvgIcon.IconXClose />
    </div>
  );
}
```

## Import Specific Icons

You can also import specific icons directly.

```jsx
import { IconCheck, IconXClose } from "tx-design-ui/assets/icons";

function MyComponent() {
  return (
    <div>
      <IconCheck />
      <IconXClose />
    </div>
  );
}
```

## Available Icons

### System Icons

- **IconCheck** - Checkmark icon for success states
- **IconXClose** - Close/dismiss icon
- **IconLoader01** - Loading spinner icon

### UI Icons

- **IconCursor04** - Cursor/pointer icon
- **IconEye01** - Show/visible icon
- **IconEyeSlash01** - Hide/invisible icon
- **IconKeySquare01** - Password/security icon
- **IconUserSquare01** - User/profile icon

## Styling Icons

Icons inherit color from their parent element and can be styled with CSS.

```jsx
// Using inline styles
<IconCheck style={{ color: "#52c41a", width: "24px", height: "24px" }} />

// Using CSS classes
<IconCheck className="success-icon" />

// Using styled-components
const StyledIcon = styled(IconCheck)`
  color: ${colors.success};
  width: 20px;
  height: 20px;
`;
```

## With Buttons

Icons work great with buttons.

```jsx
import { TxButton } from "tx-design-ui";
import { IconCheck, IconXClose } from "tx-design-ui/assets/icons";

<TxButton icon={<IconCheck />}>Confirm</TxButton>
<TxButton icon={<IconXClose />} type="danger">Cancel</TxButton>
```

## Sizing

Control icon size using width and height.

```jsx
// Small icon
<IconCheck style={{ width: "16px", height: "16px" }} />

// Medium icon (default)
<IconCheck style={{ width: "20px", height: "20px" }} />

// Large icon
<IconCheck style={{ width: "24px", height: "24px" }} />
```

## Colors

Icons inherit text color from parent.

```jsx
// Primary color
<div style={{ color: "#03030f" }}>
  <IconCheck />
</div>

// Success color
<div style={{ color: "#52c41a" }}>
  <IconCheck />
</div>

// Danger color
<div style={{ color: "#e45649" }}>
  <IconXClose />
</div>
```

## Best Practices

### Do's ✓

- Use icons to enhance, not replace, text labels
- Keep icon sizes consistent throughout your application
- Use meaningful icons that users will understand
- Provide tooltips for icon-only buttons
- Use proper ARIA labels for accessibility

### Don'ts ✗

- Don't use too many different icon styles
- Don't make icons too small (below 16px)
- Don't use icons without context
- Don't forget about color contrast for accessibility

## Accessibility

Always consider accessibility when using icons.

```jsx
// Icon with accessible label
<button aria-label="Close">
  <IconXClose />
</button>

// Icon with tooltip
<TxTooltip title="Delete">
  <button>
    <IconXClose />
  </button>
</TxTooltip>
```

## Custom Icons

You can add your own SVG icons to the project.

1. Add your SVG file to `src/assets/icons/`
2. Export it in `src/assets/icons/index.js`

```jsx
// In src/assets/icons/index.js
import { ReactComponent as IconCustom } from "./icon-custom.svg";

const SvgIcon = {
  // ... existing icons
  IconCustom,
};

export { SvgIcon };
```

## Icon List

| Icon Name        | Usage                  | Example                        |
| ---------------- | ---------------------- | ------------------------------ |
| IconCheck        | Success, confirmation  | Form validation, completed     |
| IconXClose       | Close, dismiss, cancel | Modal close, remove item       |
| IconLoader01     | Loading state          | Data fetching, processing      |
| IconCursor04     | Interactive element    | Clickable items, links         |
| IconEye01        | Show, visible          | Password visibility toggle     |
| IconEyeSlash01   | Hide, invisible        | Password visibility toggle     |
| IconKeySquare01  | Password, security     | Password input, authentication |
| IconUserSquare01 | User, profile          | User menu, profile page        |

## Notes

- All icons are SVG format for scalability
- Icons automatically scale without losing quality
- Icons support all modern browsers
- Icons can be animated using CSS
- Consider using icon fonts for very large icon sets
