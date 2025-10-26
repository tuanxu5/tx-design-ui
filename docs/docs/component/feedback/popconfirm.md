# Popconfirm

A simple confirmation dialog triggered by a click on an element.

## When To Use

- To confirm a user action before executing it
- As a lightweight alternative to Modal for simple confirmations
- When the action is destructive or cannot be easily undone

## Basic Usage

```jsx
import { TxPopconfirm, TxButton } from "tx-design-ui";

function Example() {
  const handleConfirm = () => {
    console.log("Confirmed!");
  };

  return (
    <TxPopconfirm title="Are you sure to delete this item?" onConfirm={handleConfirm}>
      <TxButton type="danger">Delete</TxButton>
    </TxPopconfirm>
  );
}
```

## Placement

Set the position of the popconfirm relative to the target element.

```jsx
<TxPopconfirm title="Delete this item?" placement="top">
  <TxButton type="danger">Top</TxButton>
</TxPopconfirm>

<TxPopconfirm title="Delete this item?" placement="bottom">
  <TxButton type="danger">Bottom</TxButton>
</TxPopconfirm>

<TxPopconfirm title="Delete this item?" placement="left">
  <TxButton type="danger">Left</TxButton>
</TxPopconfirm>

<TxPopconfirm title="Delete this item?" placement="right">
  <TxButton type="danger">Right</TxButton>
</TxPopconfirm>
```

## Custom Text

Customize the button text and type.

```jsx
<TxPopconfirm
  title="Do you want to archive this?"
  okText="Archive"
  cancelText="Cancel"
  onConfirm={() => console.log("Archived")}
>
  <TxButton>Archive</TxButton>
</TxPopconfirm>

<TxPopconfirm
  title="Confirm submission?"
  okText="Submit"
  cancelText="Back"
  okType="success"
  onConfirm={() => console.log("Submitted")}
>
  <TxButton type="primary">Submit</TxButton>
</TxPopconfirm>
```

## API

| Property   | Type                                     | Default           | Description                     |
| ---------- | ---------------------------------------- | ----------------- | ------------------------------- |
| children   | `ReactNode`                              | -                 | Target element (required)       |
| title      | `string \| ReactNode`                    | `'Are you sure?'` | Confirmation message            |
| placement  | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'`        | Position of the popconfirm      |
| onConfirm  | `function(e)`                            | -                 | Callback when OK is clicked     |
| onCancel   | `function(e)`                            | -                 | Callback when Cancel is clicked |
| okText     | `string`                                 | `'Yes'`           | Text of the OK button           |
| cancelText | `string`                                 | `'No'`            | Text of the Cancel button       |
| okType     | `string`                                 | `'primary'`       | Button type of the OK button    |

## Notes

- Use Popconfirm for simple yes/no confirmations
- For complex confirmations with forms, use Modal instead
- The popconfirm closes automatically after clicking OK or Cancel
- Consider using warning icon color for destructive actions
