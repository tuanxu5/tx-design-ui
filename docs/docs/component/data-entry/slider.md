# Slider

A slider component for displaying and selecting values within a range.

## When To Use

- To input a value in a range
- To adjust settings, such as volume or brightness

## Examples

### Basic Usage

```jsx
import { TxSlider } from "tx-design-ui";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(30);

  return <TxSlider value={value} onChange={setValue} />;
}
```

### Show Value

Display the current value next to the slider.

```jsx
const [value, setValue] = useState(50);

<TxSlider value={value} onChange={setValue} showValue />;
```

### Disabled

```jsx
<TxSlider defaultValue={50} disabled />
```

### Custom Range and Step

```jsx
const [value, setValue] = useState(0);

<TxSlider min={0} max={10} step={0.5} value={value} onChange={setValue} showValue />;
```

### With Marks

Add marks to the slider to show specific values.

```jsx
const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: "100°C",
};

<TxSlider marks={marks} defaultValue={37} />;
```

### Step Marks

```jsx
const marks = {
  0: "0",
  20: "20",
  40: "40",
  60: "60",
  80: "80",
  100: "100",
};

<TxSlider marks={marks} step={20} defaultValue={20} />;
```

## API

| Property      | Description                 | Type            | Default |
| ------------- | --------------------------- | --------------- | ------- |
| min           | Minimum value               | number          | 0       |
| max           | Maximum value               | number          | 100     |
| step          | Step size for value changes | number          | 1       |
| value         | Current value (controlled)  | number          | -       |
| defaultValue  | Initial value               | number          | 0       |
| disabled      | Disable the slider          | boolean         | false   |
| showValue     | Show current value          | boolean         | false   |
| marks         | Labels for specific values  | object          | -       |
| onChange      | Callback when value changes | function(value) | -       |
| onAfterChange | Callback when dragging ends | function(value) | -       |
| className     | Additional CSS class        | string          | -       |
