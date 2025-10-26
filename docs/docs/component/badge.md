# Badge

Small numerical value or status descriptor for UI elements.

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## Examples

### Basic Usage

```jsx
import { TxBadge } from "tx-design-ui";
import { TxAvatar } from "tx-design-ui";

function App() {
  return (
    <TxBadge count={5}>
      <TxAvatar shape="square" size="large" />
    </TxBadge>
  );
}
```

### Show Zero

Control whether to show badge when count is zero.

```jsx
<TxBadge count={0} showZero>
  <TxAvatar shape="square" size="large" />
</TxBadge>
```

### Overflow Count

Set max count to show. When count exceeds, it displays as `{overflowCount}+`.

```jsx
<TxBadge count={99}>
  <TxAvatar shape="square" />
</TxBadge>

<TxBadge count={100}>
  <TxAvatar shape="square" />
</TxBadge>

<TxBadge count={999} overflowCount={999}>
  <TxAvatar shape="square" />
</TxBadge>

<TxBadge count={1000} overflowCount={999}>
  <TxAvatar shape="square" />
</TxBadge>
```

### Red Dot

Simplest usage without count number.

```jsx
<TxBadge dot>
  <TxAvatar shape="square" size="large" />
</TxBadge>

<TxBadge dot>
  <span>🔔</span>
</TxBadge>

<TxBadge dot>
  <a href="#">Link something</a>
</TxBadge>
```

### Status

Badges with different status colors.

```jsx
<TxBadge count={5} status="success">
  <TxAvatar shape="square" />
</TxBadge>

<TxBadge count={5} status="error">
  <TxAvatar shape="square" />
</TxBadge>

<TxBadge count={5} status="warning">
  <TxAvatar shape="square" />
</TxBadge>

<TxBadge count={5} status="processing">
  <TxAvatar shape="square" />
</TxBadge>
```

### Standalone

Used as a standalone element without wrapping other components.

```jsx
<TxBadge count={25} />
<TxBadge count={4} status="success" />
<TxBadge count={109} status="error" />
```

### Ribbon

Ribbon badge for corners or edges.

```jsx
<TxBadge.Ribbon text="Hippies">
  <div style={{ width: '200px', height: '100px', background: '#f0f0f0' }}>
    Content
  </div>
</TxBadge.Ribbon>

<TxBadge.Ribbon text="Hippies" status="success" placement="start">
  <div style={{ width: '200px', height: '100px', background: '#f0f0f0' }}>
    Content
  </div>
</TxBadge.Ribbon>
```

### Ribbon with Status

```jsx
<TxBadge.Ribbon text="Success" status="success">
  <div style={{ width: '150px', height: '80px' }}>Content</div>
</TxBadge.Ribbon>

<TxBadge.Ribbon text="Error" status="error">
  <div style={{ width: '150px', height: '80px' }}>Content</div>
</TxBadge.Ribbon>

<TxBadge.Ribbon text="Warning" status="warning">
  <div style={{ width: '150px', height: '80px' }}>Content</div>
</TxBadge.Ribbon>
```

## API

### TxBadge

| Property      | Description                | Type                                                           | Default   |
| ------------- | -------------------------- | -------------------------------------------------------------- | --------- |
| count         | Number to show in badge    | number                                                         | 0         |
| dot           | Show as a red dot          | boolean                                                        | false     |
| showZero      | Show badge when count is 0 | boolean                                                        | false     |
| overflowCount | Max count to show          | number                                                         | 99        |
| status        | Badge status               | 'success' \| 'error' \| 'warning' \| 'processing' \| 'default' | 'default' |
| children      | Content to wrap            | ReactNode                                                      | -         |
| className     | Additional CSS class       | string                                                         | -         |

### TxBadge.Ribbon

| Property  | Description          | Type                                                           | Default   |
| --------- | -------------------- | -------------------------------------------------------------- | --------- |
| text      | Ribbon text          | ReactNode                                                      | -         |
| status    | Ribbon status        | 'success' \| 'error' \| 'warning' \| 'processing' \| 'default' | 'default' |
| placement | Ribbon placement     | 'start' \| 'end'                                               | 'end'     |
| children  | Content to wrap      | ReactNode                                                      | -         |
| className | Additional CSS class | string                                                         | -         |
