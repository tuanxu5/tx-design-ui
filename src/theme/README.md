# Theme Colors

This folder contains the centralized color management system for TX Design UI.

## Usage

### Import Colors

```javascript
import colors from "tx-design-ui/theme/colors";
// or
import { colors, theme } from "tx-design-ui";
```

### Basic Colors

```javascript
import colors from "tx-design-ui/theme/colors";

// Primary
colors.primary; // "#03030f"
colors.primaryLight; // "#03030f30"
colors.primaryBorder; // "#0e0e13ff"

// Danger
colors.danger; // "#e45649"
colors.dangerLight; // "#e4564920"

// Text
colors.textPrimary; // "#1c252e"
colors.textSecondary; // "#8c9bab"
colors.textDisabled; // "#a0a1a7"

// Background
colors.bgWhite; // "#ffffff"
colors.bgFill; // "#f7f8fa"
colors.bgDisabled; // "#f3f3f4"

// Border
colors.borderLight; // "#eef0f1"
colors.borderDefault; // "#d1d5db"
```

### Using in Components

```javascript
import styled from "styled-components";
import colors from "../../theme/colors";

const StyledButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.textWhite};
  border: 1px solid ${colors.borderDefault};

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;
```

### Using Theme Object

For more structured access, use the theme object:

```javascript
import { theme } from "tx-design-ui";

// Button colors
theme.button.primary.bg; // "#03030f"
theme.button.primary.color; // "#ffffff"
theme.button.danger.bg; // "#e45649"

// Input colors
theme.input.default.border; // "#eef0f1"
theme.input.status.success; // "#52c41a"
theme.input.status.error; // "#e45649"

// Checkbox colors
theme.checkbox.default.bg; // "#ffffff"
theme.checkbox.default.checked.bg; // "#03030f"
```

## Color Palette

### Primary Colors

- `primary`: Main brand color
- `primaryLight`: For shadows and hovers
- `primaryBorder`: For borders

### Status Colors

- `danger`: Error/destructive actions
- `success`: Success states
- `warning`: Warning states
- `info`: Info states

### Text Colors

- `textPrimary`: Main text
- `textSecondary`: Secondary text
- `textTertiary`: Tertiary text
- `textDisabled`: Disabled text

### Background Colors

- `bgWhite`: White background
- `bgFill`: Filled backgrounds
- `bgDisabled`: Disabled backgrounds

### Border Colors

- `borderLight`: Light borders
- `borderDefault`: Default borders
- `borderDisabled`: Disabled borders

## Customization

To customize colors for your project, you can:

1. **Override individual colors:**

```javascript
import colors from "tx-design-ui/theme/colors";

const customColors = {
  ...colors,
  primary: "#your-color",
};
```

2. **Create your own theme:**

```javascript
import { theme } from "tx-design-ui";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#your-color",
  },
};
```

## Best Practices

1. **Use semantic color names** rather than hardcoded hex values
2. **Keep colors consistent** across components
3. **Update colors.js** when adding new colors
4. **Document new colors** in this README
5. **Use the theme object** for component-specific colors

## Adding New Colors

When adding new colors:

1. Add the color to `colors.js`
2. Update the theme object if needed
3. Document it in this README
4. Update affected components
