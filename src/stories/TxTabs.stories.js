import TxTabs from "../components/tx-tabs/tx-tabs";

const TxTabsStory = {
  title: "tx-design-ui/Navigation/TxTabs",
  component: TxTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["line", "card"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    onChange: { action: "changed" },
  },
};

export default TxTabsStory;

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: <div>Content of Tab 1</div>,
  },
  {
    key: "2",
    label: "Tab 2",
    children: <div>Content of Tab 2</div>,
  },
  {
    key: "3",
    label: "Tab 3",
    children: <div>Content of Tab 3</div>,
  },
];

export const Preview = {
  args: {
    items,
    type: "line",
    size: "medium",
  },
};

export const BasicUsage = () => {
  return <TxTabs items={items} />;
};

export const CardType = () => {
  return <TxTabs items={items} type="card" />;
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "500px" }}>
      <TxTabs items={items} size="small" />
      <TxTabs items={items} size="medium" />
      <TxTabs items={items} size="large" />
    </div>
  );
};

export const WithDisabled = () => {
  const itemsWithDisabled = [
    ...items,
    {
      key: "4",
      label: "Disabled Tab",
      children: <div>Content of Tab 4</div>,
      disabled: true,
    },
  ];

  return <TxTabs items={itemsWithDisabled} />;
};
