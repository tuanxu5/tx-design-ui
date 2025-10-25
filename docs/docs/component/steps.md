# Steps

Steps display the progress of a multi-step process.

## When To Use

- When a task needs to be completed in multiple steps
- When you need to show the progress of a process
- For guiding users through a workflow

## Basic Usage

```jsx
import { TxSteps } from "tx-design-ui";

const items = [
  {
    title: "Step 1",
    description: "This is a description",
  },
  {
    title: "Step 2",
    description: "This is a description",
  },
  {
    title: "Step 3",
    description: "This is a description",
  },
];

<TxSteps current={1} items={items} />;
```

## Direction

Steps can be displayed horizontally or vertically.

```jsx
// Horizontal (default)
<TxSteps current={1} items={items} direction="horizontal" />

// Vertical
<TxSteps current={1} items={items} direction="vertical" />
```

## Error Status

Show error status for the current step.

```jsx
<TxSteps current={1} items={items} status="error" />
```

## Custom Icons

Provide custom icons for steps.

```jsx
const items = [
  {
    title: "Login",
    description: "Login to your account",
    icon: <UserIcon />,
  },
  {
    title: "Verification",
    description: "Verify your identity",
    icon: <CheckIcon />,
  },
  {
    title: "Complete",
    description: "Setup complete",
    icon: <FlagIcon />,
  },
];
```

## Interactive Example

```jsx
function Example() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <TxSteps current={current} items={items} />
      <div style={{ marginTop: "24px" }}>
        {current > 0 && <button onClick={prev}>Previous</button>}
        {current < items.length - 1 && <button onClick={next}>Next</button>}
        {current === items.length - 1 && <button>Done</button>}
      </div>
    </div>
  );
}
```

## API

| Property  | Type                                         | Default        | Description            |
| --------- | -------------------------------------------- | -------------- | ---------------------- |
| current   | `number`                                     | `0`            | Current step index     |
| items     | `Array<StepItem>`                            | `[]`           | Steps data             |
| direction | `'horizontal' \| 'vertical'`                 | `'horizontal'` | Direction of steps     |
| status    | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'`    | Status of current step |

### StepItem

| Property    | Type        | Default | Description           |
| ----------- | ----------- | ------- | --------------------- |
| title       | `ReactNode` | -       | Step title (required) |
| description | `ReactNode` | -       | Step description      |
| icon        | `ReactNode` | -       | Custom icon for step  |

## Notes

- Steps automatically show check icon for completed steps
- Use vertical direction for mobile or when you have limited horizontal space
- Set status to "error" to show error state on current step
- Each step shows its index number if no custom icon is provided
