# Timeline

Vertical display timeline.

## When To Use

- When a series of information needs to be ordered by time (ascending or descending)
- When you need to show the history or progress of events

## Examples

### Basic Usage

```jsx
import { TxTimeline } from "tx-design-ui";

const items = [
  {
    title: "Create a services site",
    description: "2015-09-01",
  },
  {
    title: "Solve initial network problems",
    description: "2015-09-01",
  },
  {
    title: "Technical testing",
    description: "2015-09-01",
  },
];

function App() {
  return <TxTimeline items={items} />;
}
```

### Color

Set the color of circles. Options: `default`, `success`, `error`, `warning`, `processing`.

```jsx
const items = [
  {
    title: "Create a services site",
    description: "This is the description",
    color: "success",
  },
  {
    title: "Solve initial network problems",
    description: "This is the description",
    color: "error",
  },
  {
    title: "Technical testing",
    description: "This is the description",
    color: "warning",
  },
  {
    title: "Network problems being solved",
    description: "This is the description",
    color: "processing",
  },
];

<TxTimeline items={items} />;
```

### Custom Icon

Set custom icon for each timeline item.

```jsx
const items = [
  {
    title: "Success",
    description: "Operation completed successfully",
    color: "success",
    icon: <CheckIcon />,
  },
  {
    title: "Error",
    description: "An error occurred",
    color: "error",
    icon: <ErrorIcon />,
  },
  {
    title: "Warning",
    description: "Please check the details",
    color: "warning",
    icon: <WarningIcon />,
  },
];

<TxTimeline items={items} />;
```

### Time

Add time information to timeline items.

```jsx
const items = [
  {
    title: "Project Initialized",
    description: "Set up project structure",
    time: "2024-01-01 09:00",
    color: "success",
  },
  {
    title: "First Deployment",
    description: "Successfully deployed",
    time: "2024-01-15 14:30",
    color: "success",
  },
  {
    title: "Bug Reported",
    description: "Critical bug found",
    time: "2024-02-01 11:20",
    color: "error",
  },
];

<TxTimeline items={items} />;
```

### Labels

Add labels to the left or right of timeline items.

```jsx
const items = [
  {
    title: "Q1 2024",
    description: "Project kickoff",
    label: "2024-01",
    color: "success",
  },
  {
    title: "Q2 2024",
    description: "Development phase",
    label: "2024-04",
    color: "processing",
  },
];

<TxTimeline items={items} mode="left" />;
```

### Alternate Mode

Timeline items alternate between left and right sides.

```jsx
const items = [
  {
    title: "Phase 1",
    description: "Planning and research",
    color: "success",
  },
  {
    title: "Phase 2",
    description: "Design and prototyping",
    color: "success",
  },
  {
    title: "Phase 3",
    description: "Development",
    color: "processing",
  },
];

<TxTimeline items={items} mode="alternate" />;
```

### Custom Content

Use the `children` prop for fully custom content.

```jsx
const items = [
  {
    color: "success",
    children: (
      <div>
        <div style={{ fontWeight: "600" }}>Create a services site 2015-09-01</div>
        <div style={{ color: "#999", fontSize: "13px" }}>Technical testing 1</div>
        <div style={{ color: "#999", fontSize: "13px" }}>Technical testing 2</div>
      </div>
    ),
  },
  {
    color: "processing",
    children: (
      <div>
        <div style={{ fontWeight: "600" }}>Network problems being solved</div>
      </div>
    ),
  },
];

<TxTimeline items={items} />;
```

## API

### TxTimeline

| Property  | Description          | Type                             | Default |
| --------- | -------------------- | -------------------------------- | ------- |
| items     | Timeline items data  | TimelineItem[]                   | []      |
| mode      | Display mode         | 'left' \| 'right' \| 'alternate' | 'left'  |
| className | Additional CSS class | string                           | -       |

### TimelineItem

| Property    | Description                                  | Type                                                           | Default   |
| ----------- | -------------------------------------------- | -------------------------------------------------------------- | --------- |
| title       | Title of the timeline item                   | ReactNode                                                      | -         |
| description | Description text                             | ReactNode                                                      | -         |
| children    | Custom content (overrides title/description) | ReactNode                                                      | -         |
| color       | Color of the timeline dot                    | 'default' \| 'success' \| 'error' \| 'warning' \| 'processing' | 'default' |
| icon        | Custom icon inside the dot                   | ReactNode                                                      | -         |
| label       | Label text (shown on left/right)             | ReactNode                                                      | -         |
| time        | Time information                             | ReactNode                                                      | -         |

### TxTimeline.Item (Alternative Usage)

You can also use Timeline.Item for more flexible composition:

```jsx
<TxTimeline>
  <TxTimeline.Item title="Create a services site" color="success" />
  <TxTimeline.Item title="Solve problems" color="error" />
  <TxTimeline.Item title="Technical testing" />
</TxTimeline>
```

Note: The `items` array prop is recommended for most use cases.
