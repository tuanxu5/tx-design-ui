---
sidebar_position: 2
title: Button
featured: true
component: true
description: Buttons are interactive UI elements that trigger actions or navigate users when clicked, offering various styles like primary, secondary, outline, and icon-based options for diverse functionality.
---

# Button

Buttons allow users to take actions and make choices with a single tap. They communicate calls to action to the user and allow users to interact with pages in a variety of ways.

## When To Use

- A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic
- In Ant Design we provide 6 types of button: Primary, Secondary, Dashed, Text, Link, and Filled

## Import

```jsx
import { TxButton } from "tx-design-ui";
```

## Examples

### Type

There are 6 types of button: `primary`, `secondary`, `dashed`, `filled`, `text`, and `link`.

```jsx
import { TxButton } from "tx-design-ui";

<TxButton type="primary" label="Primary" />
<TxButton type="secondary" label="Secondary" />
<TxButton type="dashed" label="Dashed" />
<TxButton type="filled" label="Filled" />
<TxButton type="text" label="Text" />
<TxButton type="link" label="Link" />
```

### Size

TX Design UI supports 3 button sizes: `large`, `medium` (default), and `small`.

```jsx
<TxButton size="large" label="Large" />
<TxButton size="medium" label="Medium" />
<TxButton size="small" label="Small" />
```

### Disabled

To mark a button as disabled, add the `disabled` property to the button.

```jsx
<TxButton disabled label="Disabled Primary" />
<TxButton type="secondary" disabled label="Disabled Secondary" />
<TxButton type="dashed" disabled label="Disabled Dashed" />
```

### Loading

A loading indicator can be added to a button by setting the `loading` property on the button.

```jsx
<TxButton loading label="Loading" />
<TxButton type="secondary" loading label="Loading Secondary" />
```

### Danger

`danger` is a property of button after antd 4.0. Buttons with danger property can be used in dangerous situations.

```jsx
<TxButton danger label="Danger Primary" />
<TxButton type="secondary" danger label="Danger Secondary" />
<TxButton type="dashed" danger label="Danger Dashed" />
<TxButton type="text" danger label="Danger Text" />
<TxButton type="link" danger label="Danger Link" />
```

### Icon

Button components can contain an Icon. This is done by setting the `prefix` or `suffix` property.

```jsx
import { SvgIcon } from "tx-design-ui";

<TxButton prefix={<SvgIcon.IconCursor04 />} label="Icon Prefix" />
<TxButton label={<SvgIcon.IconCursor04 />} />
<TxButton suffix={<SvgIcon.IconCursor04 />} label="Icon Suffix" />
```

### Shape

Button components can have different shapes. Set the `shape` property to `circle` to make a circular button.

```jsx
<TxButton label="Default" />
<TxButton shape="circle" label={<SvgIcon.IconCursor04 />} />
<TxButton shape="circle" label="A" />
```

### Gradient Background

You can create buttons with gradient backgrounds using the `gradientBackground` prop.

```jsx
const gradientBackground = {
  degree: 135,
  colors: ["#6253e1", "#04befe"],
};

<TxButton label="Gradient Button" gradientBackground={gradientBackground} />;
```

## API

| Property           | Type                                                                   | Default     | Description                                                  |
| ------------------ | ---------------------------------------------------------------------- | ----------- | ------------------------------------------------------------ |
| label              | `string \| ReactNode`                                                  | "Click Me"  | The text or content to be displayed on the button            |
| onClick            | `function(e)`                                                          | -           | Set the handler to handle click event                        |
| type               | `'primary' \| 'secondary' \| 'filled' \| 'text' \| 'link' \| 'dashed'` | `'primary'` | Can be set to primary, secondary, dashed, filled, text, link |
| size               | `'small' \| 'medium' \| 'large'`                                       | `'medium'`  | Set the size of button                                       |
| disabled           | `boolean`                                                              | `false`     | Disabled state of button                                     |
| loading            | `boolean`                                                              | `false`     | Set the loading status of button                             |
| danger             | `boolean`                                                              | `false`     | Set the danger status of button                              |
| shape              | `'default' \| 'circle'`                                                | `'default'` | Can be set to circle or omitted                              |
| prefix             | `ReactNode`                                                            | -           | Set the icon component in front of the button text           |
| suffix             | `ReactNode`                                                            | -           | Set the icon component after the button text                 |
| background         | `string`                                                               | -           | Custom background color                                      |
| color              | `string`                                                               | -           | Custom text color                                            |
| gradientBackground | `{ degree: number, colors: string[] }`                                 | -           | Gradient background configuration                            |

## Notes

- When loading, the button becomes disabled automatically
- Danger button should be used carefully as it indicates destructive actions
- Icon-only buttons should use circle shape for better visual appearance
- Gradient backgrounds override the standard type styling
