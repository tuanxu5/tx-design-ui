# Switch

Toggle the state between two options.

## When To Use

- Need to represent the switching between two states or on-off state
- The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation

## Examples

### Basic Usage

```jsx
import { TxSwitch } from "tx-design-ui";

function App() {
  const [checked, setChecked] = useState(false);

  return <TxSwitch checked={checked} onChange={setChecked} />;
}
```

### Disabled

```jsx
<TxSwitch disabled />
<TxSwitch checked disabled />
```

### Sizes

Three sizes are available: small, default (medium), and large.

```jsx
<TxSwitch size="small" defaultChecked />
<TxSwitch size="default" defaultChecked />
<TxSwitch size="large" defaultChecked />
```

### Text & Icon

```jsx
<TxSwitch checkedChildren="ON" unCheckedChildren="OFF" />
<TxSwitch checkedChildren="开" unCheckedChildren="关" />
```

### Loading

```jsx
<TxSwitch loading />
<TxSwitch loading checked />
```

## API

| Property          | Description                                | Type                                     | Default   |
| ----------------- | ------------------------------------------ | ---------------------------------------- | --------- |
| checked           | Controlled checked state                   | boolean                                  | false     |
| defaultChecked    | Initial checked state                      | boolean                                  | false     |
| disabled          | Disable switch                             | boolean                                  | false     |
| loading           | Loading state of switch                    | boolean                                  | false     |
| size              | Size of the switch                         | 'small' \| 'default' \| 'large'          | 'default' |
| checkedChildren   | Content to be shown when checked           | ReactNode                                | -         |
| unCheckedChildren | Content to be shown when unchecked         | ReactNode                                | -         |
| onChange          | Trigger when the checked state is changing | function(checked: boolean, event: Event) | -         |
| className         | Additional CSS class                       | string                                   | -         |
