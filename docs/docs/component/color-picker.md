---
sidebar_position: 9
title: ColorPicker
featured: true
component: true
description: Components providing the ability to select colors.
---

# ColorPicker

Components providing the ability to select colors. Built on top of HTML5 color input with enhancements.

## When To Use

- When the user needs to select a color
- When displaying color swatches for theming
- When building design tools or customization interfaces

## Import

```jsx
import { TxColorPicker } from "tx-design-ui";
```

## Examples

### Basic Usage

Basic color picker.

```jsx
import { TxColorPicker } from "tx-design-ui";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#1890ff");

  return <TxColorPicker value={color} onChange={val => setColor(val)} />;
}
```

### Sizes

ColorPicker comes in three sizes: `small`, `medium` (default), and `large`.

```jsx
<TxColorPicker value="#1890ff" size="small" />
<TxColorPicker value="#1890ff" size="medium" />
<TxColorPicker value="#1890ff" size="large" />
```

### With Label

Add a label to the color picker.

```jsx
<TxColorPicker value="#52c41a" label="Pick a color" />
```

### Without Input

Hide the hex input field.

```jsx
<TxColorPicker value="#ff4d4f" showInput={false} label="Color" />
```

### With Presets

Provide preset colors for quick selection.

```jsx
const presets = [
  "#f5222d",
  "#fa541c",
  "#fa8c16",
  "#faad14",
  "#fadb14",
  "#a0d911",
  "#52c41a",
  "#13c2c2",
  "#1890ff",
  "#2f54eb",
  "#722ed1",
  "#eb2f96",
];

<TxColorPicker value="#1890ff" presets={presets} label="Choose color" />;
```

### Custom Presets

Create custom preset palettes.

```jsx
const gradientColors = ["#6253e1", "#04befe", "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7", "#fd79a8"];

<TxColorPicker value="#6253e1" presets={gradientColors} label="Gradient Colors" />;
```

### Disabled

Disabled color picker.

```jsx
<TxColorPicker value="#1890ff" disabled label="Disabled" />
```

## API

| Property  | Type                             | Default     | Description                      |
| --------- | -------------------------------- | ----------- | -------------------------------- |
| value     | `string`                         | `'#000000'` | Current color value (hex format) |
| onChange  | `function(value, event)`         | -           | Callback when color is changed   |
| label     | `string`                         | -           | Label text for the color picker  |
| disabled  | `boolean`                        | `false`     | Whether disabled                 |
| size      | `'small' \| 'medium' \| 'large'` | `'medium'`  | Size of color picker             |
| showInput | `boolean`                        | `true`      | Whether to show hex input field  |
| presets   | `Array<string>`                  | `[]`        | Array of preset color hex values |

## Notes

- Uses native HTML5 color input for better browser support
- Color values must be in hex format (#RRGGBB)
- The hex input automatically adds the # prefix if missing
- Preset colors provide quick access to commonly used colors
- Invalid hex values in the input are ignored
- You can manually type hex values in the input field
- Preset colors show a visual indicator when selected
