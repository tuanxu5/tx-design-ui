import { useState } from "react";
import TxMenu from "../components/tx-menu/tx-menu";

const TxMenuStory = {
  title: "tx-design-ui/Navigation/TxMenu",
  component: TxMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    onSelect: { action: "selected" },
  },
};

export default TxMenuStory;

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

const itemsWithSub = [
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

export const Preview = {
  args: {
    items,
    mode: "vertical",
  },
};

export const BasicUsage = () => {
  return <TxMenu items={items} selectedKey="1" />;
};

export const WithSubmenu = () => {
  return <TxMenu items={itemsWithSub} selectedKey="2-1" />;
};

export const Horizontal = () => {
  return <TxMenu items={items} mode="horizontal" selectedKey="1" />;
};

export const Interactive = () => {
  const InteractiveComponent = () => {
    const [selectedKey, setSelectedKey] = useState("1");

    return (
      <div>
        <TxMenu items={itemsWithSub} selectedKey={selectedKey} onSelect={key => setSelectedKey(key)} />
        <div style={{ marginTop: "16px" }}>Selected: {selectedKey}</div>
      </div>
    );
  };

  return <InteractiveComponent />;
};
