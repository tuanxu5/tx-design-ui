# Tag

Tags are used to label, categorize, or organize items using keywords.

## When To Use

- It can be used to tag categories, properties, or states.
- Provide users with a way to easily identify, classify, and filter content.

## Basic Usage

```jsx
import { TxTag } from "tx-design-ui";

<TxTag>Default Tag</TxTag>
<TxTag color="primary">Primary Tag</TxTag>
<TxTag color="success">Success Tag</TxTag>
<TxTag color="warning">Warning Tag</TxTag>
<TxTag color="danger">Danger Tag</TxTag>
```

## Closable

Set `closable` to make the tag removable.

```jsx
<TxTag closable onClose={() => console.log("Tag closed")}>
  Closable Tag
</TxTag>
```

## Sizes

Three sizes are available: `small`, `medium` (default), and `large`.

```jsx
<TxTag size="small">Small</TxTag>
<TxTag size="medium">Medium</TxTag>
<TxTag size="large">Large</TxTag>
```

## Bordered

Add a border to the tag.

```jsx
<TxTag bordered>Default</TxTag>
<TxTag color="primary" bordered>
  Primary
</TxTag>
```

## API

| Property | Type                                                                     | Default     | Description                   |
| -------- | ------------------------------------------------------------------------ | ----------- | ----------------------------- |
| children | `ReactNode`                                                              | -           | Tag content                   |
| color    | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Color of the tag              |
| closable | `boolean`                                                                | `false`     | Whether the tag can be closed |
| onClose  | `function(e)`                                                            | -           | Callback when tag is closed   |
| size     | `'small' \| 'medium' \| 'large'`                                         | `'medium'`  | Size of tag                   |
| bordered | `boolean`                                                                | `false`     | Whether to show border        |

## Notes

- The Tag component is commonly used in combination with other components like Table or Card
- When using closable tags, make sure to handle the removal logic in the parent component
- Consider using different colors to represent different states or categories
