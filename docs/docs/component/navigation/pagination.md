# Pagination

Pagination is used to separate content into discrete pages.

## When To Use

- When you have a large dataset that needs to be divided into pages
- When loading all data at once would impact performance
- For better user experience with large lists or tables

## Basic Usage

```jsx
import { TxPagination } from "tx-design-ui";

<TxPagination current={1} total={100} pageSize={10} />;
```

## Controlled Mode

Use `onChange` callback to handle page changes.

```jsx
function Example() {
  const [current, setCurrent] = useState(1);

  const handleChange = page => {
    setCurrent(page);
    // Fetch data for the new page
  };

  return <TxPagination current={current} total={100} pageSize={10} onChange={handleChange} />;
}
```

## Sizes

Three sizes are available: `small`, `medium` (default), and `large`.

```jsx
<TxPagination current={1} total={100} pageSize={10} size="small" />
<TxPagination current={1} total={100} pageSize={10} size="medium" />
<TxPagination current={1} total={100} pageSize={10} size="large" />
```

## Many Pages

Pagination automatically shows ellipsis for many pages.

```jsx
<TxPagination current={5} total={500} pageSize={10} />
```

## With Table

Pagination is commonly used with tables.

```jsx
function Example() {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    // Fetch data based on current page
    fetchData(current, pageSize).then(setData);
  }, [current]);

  return (
    <>
      <TxTable dataSource={data} columns={columns} />
      <TxPagination current={current} total={100} pageSize={pageSize} onChange={setCurrent} />
    </>
  );
}
```

## API

| Property        | Type                             | Default    | Description                |
| --------------- | -------------------------------- | ---------- | -------------------------- |
| current         | `number`                         | `1`        | Current page number        |
| total           | `number`                         | `0`        | Total number of items      |
| pageSize        | `number`                         | `10`       | Number of items per page   |
| onChange        | `function(page, pageSize)`       | -          | Callback when page changes |
| showSizeChanger | `boolean`                        | `false`    | Show page size changer     |
| size            | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of pagination         |

## Notes

- Total pages is automatically calculated from total and pageSize
- Previous button is disabled on first page
- Next button is disabled on last page
- Ellipsis is shown when there are more than 7 pages
- Use with Table component for complete data display solution
