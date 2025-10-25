# Notification

Display a notification message globally.

## When To Use

- To provide feedback about an operation
- A message that requires no user interaction
- To display system notifications or alerts

## Basic Usage

```jsx
import { useState } from "react";
import { TxNotification, TxButton } from "tx-design-ui";

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <TxButton onClick={() => setShow(true)}>Show Notification</TxButton>
      {show && (
        <TxNotification
          type="info"
          title="Notification"
          description="This is a notification message."
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
}
```

## Types

Four notification types are available: `success`, `info`, `warning`, and `error`.

```jsx
<TxNotification type="success" title="Success" description="Operation completed successfully!" />

<TxNotification type="info" title="Info" description="This is an information message." />

<TxNotification type="warning" title="Warning" description="Please be careful with this action." />

<TxNotification type="error" title="Error" description="Something went wrong!" />
```

## Without Description

Display a notification with title only.

```jsx
<TxNotification type="success" title="Success!" />
```

## Duration

Control how long the notification stays visible (in milliseconds). Set to `0` to disable auto-close.

```jsx
<TxNotification type="info" title="Info" description="This stays for 3 seconds" duration={3000} />

<TxNotification type="info" title="Manual Close" description="This won't auto-close" duration={0} />
```

## API

| Property    | Type                                          | Default  | Description                          |
| ----------- | --------------------------------------------- | -------- | ------------------------------------ |
| type        | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` | Type of notification                 |
| title       | `string \| ReactNode`                         | -        | Notification title                   |
| description | `string \| ReactNode`                         | -        | Notification description             |
| closable    | `boolean`                                     | `true`   | Whether to show close button         |
| onClose     | `function()`                                  | -        | Callback when notification closes    |
| duration    | `number`                                      | `4500`   | Auto-close duration (ms), 0 = manual |

## Notes

- Notifications appear in the top-right corner by default
- Multiple notifications stack vertically
- Consider using a notification manager for complex scenarios
- Keep messages concise and actionable
