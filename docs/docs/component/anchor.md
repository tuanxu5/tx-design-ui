# Anchor

Anchor links for navigating within a page.

## When To Use

- For navigating between sections of a long page
- When you need a table of contents for your page
- For documentation pages with multiple sections

## Basic Usage

```jsx
import { TxAnchor } from "tx-design-ui";

const items = [
  {
    key: "section-1",
    title: "Section 1",
  },
  {
    key: "section-2",
    title: "Section 2",
  },
  {
    key: "section-3",
    title: "Section 3",
  },
];

// In your page
<div style={{ display: "flex" }}>
  <TxAnchor items={items} />
  <div>
    <div id="section-1">
      <h2>Section 1</h2>
      <p>Content...</p>
    </div>
    <div id="section-2">
      <h2>Section 2</h2>
      <p>Content...</p>
    </div>
    <div id="section-3">
      <h2>Section 3</h2>
      <p>Content...</p>
    </div>
  </div>
</div>;
```

## With Offset

Add offset for fixed headers.

```jsx
// If you have a fixed header of 80px
<TxAnchor items={items} offsetTop={80} />
```

## Auto Highlighting

The active link is automatically highlighted based on scroll position.

```jsx
// Anchor automatically detects which section is in view
<TxAnchor items={items} />
```

## Sticky Anchor

Make anchor sticky while scrolling.

```jsx
<div style={{ position: "sticky", top: "20px" }}>
  <TxAnchor items={items} />
</div>
```

## Complete Example

```jsx
function DocumentationPage() {
  const items = [
    {
      key: "introduction",
      title: "Introduction",
    },
    {
      key: "installation",
      title: "Installation",
    },
    {
      key: "usage",
      title: "Usage",
    },
    {
      key: "api",
      title: "API Reference",
    },
    {
      key: "examples",
      title: "Examples",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <aside style={{ position: "sticky", top: "20px", width: "200px" }}>
        <TxAnchor items={items} offsetTop={20} />
      </aside>
      <main style={{ flex: 1 }}>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>Content here...</p>
        </section>
        <section id="installation">
          <h2>Installation</h2>
          <p>Content here...</p>
        </section>
        <section id="usage">
          <h2>Usage</h2>
          <p>Content here...</p>
        </section>
        <section id="api">
          <h2>API Reference</h2>
          <p>Content here...</p>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <p>Content here...</p>
        </section>
      </main>
    </div>
  );
}
```

## API

| Property  | Type                | Default | Description                              |
| --------- | ------------------- | ------- | ---------------------------------------- |
| items     | `Array<AnchorItem>` | `[]`    | Anchor items                             |
| offsetTop | `number`            | `0`     | Offset from top when scrolling to target |

### AnchorItem

| Property | Type        | Default | Description              |
| -------- | ----------- | ------- | ------------------------ |
| key      | `string`    | -       | Section ID (required)    |
| title    | `ReactNode` | -       | Display title (required) |

## Notes

- Make sure each section has an `id` attribute matching the anchor key
- The component automatically tracks scroll position
- Clicking an anchor link smoothly scrolls to the target section
- Active link is highlighted based on which section is in viewport
- Use `offsetTop` if you have a fixed header to adjust scroll position
- Best used with sticky positioning for always-visible navigation
