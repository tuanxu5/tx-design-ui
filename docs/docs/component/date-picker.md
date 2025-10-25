---
sidebar_position: 8
title: DatePicker
featured: true
component: true
description: To select or input a date.
---

# DatePicker

To select or input a date. Built on top of HTML5 date input with custom styling.

## When To Use

- When the user needs to select a date
- When the user needs to input a date and time

## Import

```jsx
import { TxDatePicker } from "tx-design-ui";
```

## Examples

### Basic Usage

Basic date picker.

```jsx
import { TxDatePicker } from "tx-design-ui";
import { useState } from "react";

function App() {
  const [date, setDate] = useState("");

  return <TxDatePicker value={date} onChange={val => setDate(val)} />;
}
```

### Sizes

DatePicker comes in three sizes: `small`, `medium` (default), and `large`.

```jsx
<TxDatePicker value="2024-01-01" size="small" />
<TxDatePicker value="2024-01-01" size="medium" />
<TxDatePicker value="2024-01-01" size="large" />
```

### Date Types

Different types of date selection.

```jsx
// Date only
<TxDatePicker type="date" />

// Date and time
<TxDatePicker type="datetime-local" />

// Month
<TxDatePicker type="month" />

// Week
<TxDatePicker type="week" />

// Time
<TxDatePicker type="time" />
```

### Min and Max

Set minimum and maximum dates.

```jsx
<TxDatePicker min="2024-01-01" max="2024-12-31" />
```

### Disabled

Disabled date picker.

```jsx
<TxDatePicker value="2024-01-01" disabled />
```

### Status

Add status to DatePicker with `status`, which could be `success`, `warning`, or `error`.

```jsx
<TxDatePicker value="2024-01-01" status="success" />
<TxDatePicker value="2024-01-01" status="warning" />
<TxDatePicker value="2024-01-01" status="error" />
```

### Full Width

Make the date picker take full width.

```jsx
<TxDatePicker fullWidth />
```

## API

| Property    | Type                                                        | Default         | Description                     |
| ----------- | ----------------------------------------------------------- | --------------- | ------------------------------- |
| value       | `string`                                                    | -               | Current value (ISO 8601 format) |
| onChange    | `function(value, event)`                                    | -               | Callback when value is changed  |
| placeholder | `string`                                                    | `'Select date'` | Placeholder text                |
| disabled    | `boolean`                                                   | `false`         | Whether disabled                |
| size        | `'small' \| 'medium' \| 'large'`                            | `'medium'`      | Size of picker                  |
| status      | `'success' \| 'warning' \| 'error'`                         | -               | Set validation status           |
| fullWidth   | `boolean`                                                   | `false`         | Take full width of container    |
| type        | `'date' \| 'datetime-local' \| 'month' \| 'week' \| 'time'` | `'date'`        | Type of date picker             |
| min         | `string`                                                    | -               | Minimum date                    |
| max         | `string`                                                    | -               | Maximum date                    |

## Notes

- Uses native HTML5 date input for better mobile support
- Date values should be in ISO 8601 format (YYYY-MM-DD for date)
- The appearance may vary slightly across different browsers
- The calendar icon is purely decorative and doesn't interfere with functionality
- Min/max dates help enforce valid date ranges
