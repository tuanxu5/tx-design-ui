# tx-design-ui

> A modern React UI component library

[![NPM](https://img.shields.io/npm/v/tx-design-ui.svg)](https://www.npmjs.com/package/tx-design-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tx-design-ui
```

## Components

### Available Components

- **TxButton** - Customizable button component
- **TxInput** - Input field with multiple variants
- **TxAvatar** - Avatar/profile picture component
- **TxCheckbox** - Checkbox with multiple states

## Usage

### Basic Example

```jsx
import React from "react";
import { TxButton, TxInput, TxCheckbox } from "tx-design-ui";

function App() {
  return (
    <div>
      <TxButton label="Click Me" />
      <TxInput placeholder="Enter text" />
      <TxCheckbox label="Accept terms" />
    </div>
  );
}
```

### Button

```jsx
import { TxButton } from 'tx-design-ui';

// Basic button
<TxButton label="Primary" />

// Different types
<TxButton type="secondary" label="Secondary" />
<TxButton type="dashed" label="Dashed" />
<TxButton type="text" label="Text" />

// Sizes
<TxButton size="small" label="Small" />
<TxButton size="large" label="Large" />

// States
<TxButton danger label="Danger" />
<TxButton disabled label="Disabled" />
<TxButton loading label="Loading" />
```

### Input

```jsx
import { TxInput } from 'tx-design-ui';

// Basic input
<TxInput placeholder="Enter text" />

// With icons
<TxInput prefix={<Icon />} placeholder="With prefix" />

// Status variants
<TxInput status="success" placeholder="Success" />
<TxInput status="error" placeholder="Error" />

// Password input
<TxInput password placeholder="Password" />

// With clear button
<TxInput allowClear placeholder="Clearable" />
```

### Checkbox

```jsx
import { TxCheckbox } from 'tx-design-ui';
import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <TxCheckbox
      label="Accept terms"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

// Sizes
<TxCheckbox size="small" label="Small" />
<TxCheckbox size="large" label="Large" />

// States
<TxCheckbox danger label="Danger" />
<TxCheckbox disabled label="Disabled" />
<TxCheckbox indeterminate label="Indeterminate" />
```

## Theme & Colors

TX Design UI provides a centralized color system for easy customization:

```jsx
import { colors, theme } from "tx-design-ui";

// Use individual colors
const primary = colors.primary; // "#03030f"
const danger = colors.danger; // "#e45649"

// Or use the theme object
const buttonBg = theme.button.primary.bg;
const inputBorder = theme.input.default.border;
```

### Available Colors

```javascript
colors.primary; // "#03030f"
colors.danger; // "#e45649"
colors.success; // "#52c41a"
colors.warning; // "#faad14"
colors.info; // "#1890ff"
colors.textPrimary; // "#1c252e"
colors.borderDefault; // "#d1d5db"
// ... and more
```

See [Theme Documentation](./src/theme/README.md) for complete color palette.

## Documentation

For detailed documentation and examples, visit our [Storybook](https://your-storybook-url.com) or check the [docs folder](./docs).

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm test
```

## License

MIT © [Tuanxu5](https://github.com/Tuanxu5)
