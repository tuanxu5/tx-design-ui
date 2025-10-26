---
sidebar_position: 7
title: InputNumber
featured: true
component: true
description: Enter a number within certain range with the mouse or keyboard.
---

# InputNumber

Enter a number within certain range with the mouse or keyboard.

## When To Use

When a numeric value needs to be provided.

## Import

```jsx
import { TxInputNumber } from "tx-design-ui";
```

## Examples

### Basic Usage

Numeric input with increment and decrement controls.

```jsx
import { TxInputNumber } from "tx-design-ui";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return <TxInputNumber value={value} onChange={val => setValue(val)} />;
}
```

### Sizes

InputNumber comes in three sizes: `small`, `medium` (default), and `large`.

```jsx
<TxInputNumber value={10} size="small" />
<TxInputNumber value={10} size="medium" />
<TxInputNumber value={10} size="large" />
```

### Min and Max

Set minimum and maximum values.

```jsx
<TxInputNumber value={5} min={0} max={10} />
```

### Step

Set the step for incrementing/decrementing.

```jsx
<TxInputNumber value={0} step={1} />
<TxInputNumber value={0} step={5} />
<TxInputNumber value={0} step={10} />
```

### Disabled

Disabled input number.

```jsx
<TxInputNumber value={5} disabled />
```

### Status

Add status to InputNumber with `status`, which could be `success`, `warning`, or `error`.

```jsx
<TxInputNumber value={10} status="success" />
<TxInputNumber value={10} status="warning" />
<TxInputNumber value={10} status="error" />
```

### Full Width

Make the input number take full width.

```jsx
<TxInputNumber value={50} fullWidth />
```

## API

| Property    | Type                                | Default          | Description                                             |
| ----------- | ----------------------------------- | ---------------- | ------------------------------------------------------- |
| value       | `number \| string`                  | -                | Current value                                           |
| onChange    | `function(value)`                   | -                | Callback when value is changed                          |
| min         | `number`                            | -                | Minimum value                                           |
| max         | `number`                            | -                | Maximum value                                           |
| step        | `number`                            | `1`              | The number to which the value is increased or decreased |
| placeholder | `string`                            | `'Enter number'` | Placeholder text                                        |
| disabled    | `boolean`                           | `false`          | Whether disabled                                        |
| size        | `'small' \| 'medium' \| 'large'`    | `'medium'`       | Size of input                                           |
| status      | `'success' \| 'warning' \| 'error'` | -                | Set validation status                                   |
| fullWidth   | `boolean`                           | `false`          | Take full width of container                            |

## Notes

- The up/down buttons are automatically disabled when reaching min/max values
- You can also type the number directly into the input
- Invalid input (non-numeric) will be ignored
- The native browser number spinner is hidden in favor of custom controls
- Empty value is allowed and can be handled by the onChange callback
