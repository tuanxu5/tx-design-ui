# Menu

Menu provides navigation for your application.

## When To Use

- For primary navigation in your application
- When you need a sidebar menu
- For top-level navigation with sub-menus

## Basic Usage

```jsx
import { TxMenu } from "tx-design-ui";

const items = [
  {
    key: "1",
    label: "Navigation One",
  },
  {
    key: "2",
    label: "Navigation Two",
  },
  {
    key: "3",
    label: "Navigation Three",
  },
];

<TxMenu items={items} selectedKey="1" />;
```

## With Sub-menu

Menus can have nested sub-menus.

```jsx
const items = [
  {
    key: "1",
    label: "Navigation One",
  },
  {
    key: "sub1",
    label: "Navigation Two",
    children: [
      {
        key: "2-1",
        label: "Option 1",
      },
      {
        key: "2-2",
        label: "Option 2",
      },
    ],
  },
  {
    key: "3",
    label: "Navigation Three",
  },
];

<TxMenu items={items} selectedKey="2-1" />;
```

## Horizontal Mode

Display menu horizontally for top navigation.

```jsx
<TxMenu items={items} mode="horizontal" selectedKey="1" />
```

## With Icons

Add icons to menu items.

```jsx
const items = [
  {
    key: "1",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    key: "2",
    label: "Settings",
    icon: <SettingsIcon />,
  },
];
```

## Controlled Mode

Control selected item from parent component.

```jsx
function Example() {
  const [selectedKey, setSelectedKey] = useState("1");

  return <TxMenu items={items} selectedKey={selectedKey} onSelect={key => setSelectedKey(key)} />;
}
```

## API

| Property    | Type                         | Default      | Description                 |
| ----------- | ---------------------------- | ------------ | --------------------------- |
| items       | `Array<MenuItem>`            | `[]`         | Menu items data             |
| mode        | `'horizontal' \| 'vertical'` | `'vertical'` | Display mode                |
| selectedKey | `string`                     | -            | Currently selected item key |
| onSelect    | `function(key)`              | -            | Callback when item selected |

### MenuItem

| Property | Type              | Default | Description                |
| -------- | ----------------- | ------- | -------------------------- |
| key      | `string`          | -       | Unique key (required)      |
| label    | `ReactNode`       | -       | Menu item label (required) |
| icon     | `ReactNode`       | -       | Icon for menu item         |
| disabled | `boolean`         | `false` | Whether item is disabled   |
| children | `Array<MenuItem>` | -       | Sub-menu items             |

## Notes

- Use vertical mode for sidebar navigation
- Use horizontal mode for top navigation bar
- Sub-menus can be collapsed/expanded in vertical mode
- Only one level of sub-menu is supported for better UX
- Icons help users quickly identify menu items
