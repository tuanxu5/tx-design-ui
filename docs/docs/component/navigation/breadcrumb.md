# Breadcrumb

Breadcrumb displays the current location within a hierarchy.

## When To Use

- When the system has multiple layers of hierarchy
- When you need to inform the user of where they are
- When you need to provide quick navigation to parent pages

## Basic Usage

```jsx
import { TxBreadcrumb } from "tx-design-ui";

const items = [
  {
    key: "home",
    label: "Home",
    href: "/",
  },
  {
    key: "category",
    label: "Category",
    href: "/category",
  },
  {
    key: "product",
    label: "Product",
  },
];

<TxBreadcrumb items={items} />;
```

## Custom Separator

Change the separator between breadcrumb items.

```jsx
<TxBreadcrumb items={items} separator=">" />
<TxBreadcrumb items={items} separator="-" />
<TxBreadcrumb items={items} separator="•" />
```

## Without Links

Display breadcrumbs without navigation links.

```jsx
const items = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "product",
    label: "Product",
  },
];

<TxBreadcrumb items={items} />;
```

## With Icons

Add icons to breadcrumb items.

```jsx
const items = [
  {
    key: "home",
    label: (
      <>
        <HomeIcon /> Home
      </>
    ),
    href: "/",
  },
  {
    key: "user",
    label: (
      <>
        <UserIcon /> Users
      </>
    ),
    href: "/users",
  },
  {
    key: "profile",
    label: "Profile",
  },
];
```

## Dynamic Breadcrumb

Generate breadcrumb items from route path.

```jsx
function Example() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter(i => i);

  const items = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      label: snippet,
      href: index < pathSnippets.length - 1 ? url : undefined,
    };
  });

  return <TxBreadcrumb items={[{ key: "home", label: "Home", href: "/" }, ...items]} />;
}
```

## API

| Property  | Type                    | Default | Description      |
| --------- | ----------------------- | ------- | ---------------- |
| items     | `Array<BreadcrumbItem>` | `[]`    | Breadcrumb items |
| separator | `ReactNode`             | `'/'`   | Custom separator |

### BreadcrumbItem

| Property | Type        | Default | Description           |
| -------- | ----------- | ------- | --------------------- |
| key      | `string`    | -       | Unique key            |
| label    | `ReactNode` | -       | Item label (required) |
| href     | `string`    | -       | Link URL (optional)   |

## Notes

- The last breadcrumb item is not clickable by default
- Use `href` property to make items clickable
- Breadcrumb should be placed near the top of the page
- Keep breadcrumb labels concise and meaningful
- Consider mobile responsiveness when having many items
