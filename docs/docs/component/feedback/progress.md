# Progress

Display the current progress of an operation flow.

## When To Use

If it will take a long time to complete an operation, you can use Progress to show the current progress and status.

- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds
- When you need to display the completion percentage of an operation

## Examples

### Basic Usage

```jsx
import { TxProgress } from "tx-design-ui";

function App() {
  return <TxProgress percent={30} />;
}
```

### Sizes

Three sizes are available: `small`, `default`, and `large`.

```jsx
<TxProgress percent={50} size="small" />
<TxProgress percent={50} size="default" />
<TxProgress percent={50} size="large" />
```

### Progress Status

There are 3 status colors: normal (blue), success (green), and exception (red). Auto shows success color when percent reaches 100.

```jsx
<TxProgress percent={30} status="normal" />
<TxProgress percent={100} status="success" />
<TxProgress percent={70} status="exception" />
```

### Hide Info

Hide progress info text.

```jsx
<TxProgress percent={50} showInfo={false} />
```

### Dynamic Progress

```jsx
import { useState } from "react";

function App() {
  const [percent, setPercent] = useState(0);

  const increase = () => {
    setPercent(prev => Math.min(prev + 10, 100));
  };

  const decrease = () => {
    setPercent(prev => Math.max(prev - 10, 0));
  };

  return (
    <>
      <TxProgress percent={percent} />
      <button onClick={decrease}>- 10</button>
      <button onClick={increase}>+ 10</button>
    </>
  );
}
```

### Circle Progress

```jsx
<TxProgress type="circle" percent={30} />
<TxProgress type="circle" percent={70} />
<TxProgress type="circle" percent={100} />
```

### Circle Status

```jsx
<TxProgress type="circle" percent={30} />
<TxProgress type="circle" percent={70} status="exception" />
<TxProgress type="circle" percent={100} status="success" />
```

### Circle Sizes

Set different circle sizes with the `width` prop.

```jsx
<TxProgress type="circle" percent={75} width={80} />
<TxProgress type="circle" percent={75} width={120} />
<TxProgress type="circle" percent={75} width={160} />
```

### Progress with Steps

```jsx
<TxProgress percent={50} steps={5} />
<TxProgress percent={70} steps={10} />
<TxProgress percent={100} steps={8} />
```

### Custom Format

Custom text format using the `format` prop.

```jsx
<TxProgress percent={75} format={(percent) => `${percent}% Done`} />
<TxProgress percent={100} format={(percent) => 'Completed ✓'} />
<TxProgress
  type="circle"
  percent={85}
  format={(percent) => `${percent}/100`}
/>
```

### Mini Circle

Small circle progress for inline display.

```jsx
<TxProgress type="circle" percent={30} width={60} strokeWidth={8} />
<TxProgress type="circle" percent={50} width={60} strokeWidth={8} />
<TxProgress type="circle" percent={100} width={60} strokeWidth={8} />
```

## API

| Property    | Description                 | Type                                 | Default                    |
| ----------- | --------------------------- | ------------------------------------ | -------------------------- |
| percent     | Progress percentage (0-100) | number                               | 0                          |
| type        | Progress type               | 'line' \| 'circle'                   | 'line'                     |
| size        | Progress size (line only)   | 'small' \| 'default' \| 'large'      | 'default'                  |
| status      | Progress status             | 'normal' \| 'success' \| 'exception' | 'normal'                   |
| showInfo    | Show progress text          | boolean                              | true                       |
| strokeWidth | Progress bar width          | number                               | auto                       |
| width       | Circle width (circle only)  | number                               | 120                        |
| steps       | Show progress as steps      | number                               | 0                          |
| format      | Custom text format          | function(percent)                    | (percent) => `${percent}%` |
| className   | Additional CSS class        | string                               | -                          |

## Notes

- Progress automatically switches to success status when reaching 100%
- Circle progress uses SVG for smooth rendering
- Steps mode divides progress into discrete segments
- Use `format` to customize the displayed text or add custom icons
