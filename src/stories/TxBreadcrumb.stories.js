import TxBreadcrumb from "../components/tx-breadcrumb/tx-breadcrumb";

const TxBreadcrumbStory = {
  title: "tx-design-ui/Navigation/TxBreadcrumb",
  component: TxBreadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    separator: { control: "text" },
  },
};

export default TxBreadcrumbStory;

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

export const Preview = {
  args: {
    items,
    separator: "/",
  },
};

export const BasicUsage = () => {
  return <TxBreadcrumb items={items} />;
};

export const CustomSeparator = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TxBreadcrumb items={items} separator=">" />
      <TxBreadcrumb items={items} separator="-" />
      <TxBreadcrumb items={items} separator="•" />
    </div>
  );
};

export const WithoutLinks = () => {
  const itemsWithoutLinks = [
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

  return <TxBreadcrumb items={itemsWithoutLinks} />;
};
