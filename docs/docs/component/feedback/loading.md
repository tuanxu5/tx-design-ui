# Loading

A spinner for displaying loading state of a page or a section.

## When To Use

- When a part of the page is waiting for asynchronous data or during a rendering process
- When displaying a loading indicator to inform users that the system is processing

## Basic Usage

```jsx
import { TxLoading } from "tx-design-ui";

<TxLoading />;
```

## With Text

Add descriptive text to the loading spinner.

```jsx
<TxLoading text="Loading..." />
```

## Sizes

Three sizes are available: `small`, `medium` (default), and `large`.

```jsx
<TxLoading size="small" text="Small" />
<TxLoading size="medium" text="Medium" />
<TxLoading size="large" text="Large" />
```

## Fullscreen

Display the loading spinner in fullscreen mode.

```jsx
<TxLoading fullscreen text="Loading..." />
```

## Custom Colors

Customize the spinner and text colors.

```jsx
<TxLoading spinnerColor="#6253e1" textColor="#6253e1" text="Custom Color" />
```

## API

| Property     | Type                             | Default    | Description                |
| ------------ | -------------------------------- | ---------- | -------------------------- |
| size         | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of loading spinner    |
| text         | `string`                         | -          | Loading text               |
| fullscreen   | `boolean`                        | `false`    | Display in fullscreen mode |
| spinnerColor | `string`                         | -          | Custom spinner color       |
| textColor    | `string`                         | -          | Custom text color          |

## Notes

- Use fullscreen mode sparingly as it blocks all user interactions
- Consider adding descriptive text to improve user experience
- For inline loading states, use the default size without fullscreen
