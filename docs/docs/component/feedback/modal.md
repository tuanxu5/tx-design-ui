# Modal

Modal dialogs are used to display content in a layer above the app.

## When To Use

- When requiring users to interact with the application without navigating to a new page
- When content needs to be displayed that requires user attention
- When you want to show a confirmation dialog before performing an action

## Basic Usage

```jsx
import { useState } from "react";
import { TxModal, TxButton } from "tx-design-ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Modal</TxButton>
      <TxModal open={open} onClose={() => setOpen(false)} title="Basic Modal">
        <p>This is the modal content.</p>
      </TxModal>
    </>
  );
}
```

## With Footer

Add action buttons in the footer.

```jsx
function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Modal</TxButton>
      <TxModal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal with Footer"
        footer={
          <>
            <TxButton onClick={() => setOpen(false)}>Cancel</TxButton>
            <TxButton type="primary" onClick={() => setOpen(false)}>
              OK
            </TxButton>
          </>
        }
      >
        <p>This modal has a footer with action buttons.</p>
      </TxModal>
    </>
  );
}
```

## Custom Width

Set a custom width for the modal.

```jsx
<TxModal open={open} onClose={() => setOpen(false)} title="Large Modal" width="800px">
  <p>This modal has a custom width.</p>
</TxModal>
```

## Without Close Button

Hide the close button.

```jsx
<TxModal open={open} onClose={() => setOpen(false)} title="Modal" closable={false}>
  <p>This modal has no close button.</p>
</TxModal>
```

## API

| Property     | Type                  | Default   | Description                          |
| ------------ | --------------------- | --------- | ------------------------------------ |
| open         | `boolean`             | `false`   | Whether the modal is visible         |
| onClose      | `function()`          | -         | Callback when modal is closed        |
| title        | `string \| ReactNode` | -         | Modal title                          |
| children     | `ReactNode`           | -         | Modal content                        |
| footer       | `ReactNode`           | -         | Modal footer content                 |
| width        | `string`              | `'520px'` | Width of the modal                   |
| closable     | `boolean`             | `true`    | Whether to show close button         |
| maskClosable | `boolean`             | `true`    | Whether to close modal on mask click |

## Notes

- The modal body will automatically scroll if content exceeds the viewport height
- Always provide a way to close the modal, even if `closable` is false
- Consider using Drawer for side panels or settings
