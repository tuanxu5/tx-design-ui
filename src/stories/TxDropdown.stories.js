import TxButton from "../components/tx-button/tx-button";
import TxDropdown from "../components/tx-dropdown/tx-dropdown";

const TxDropdownStory = {
  title: "tx-design-ui/Navigation/TxDropdown",
  component: TxDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
    },
    trigger: {
      control: "select",
      options: ["hover", "click"],
    },
    onMenuClick: { action: "menu item clicked" },
  },
};

export default TxDropdownStory;

const menu = [
  {
    key: "1",
    label: "1st menu item",
  },
  {
    key: "2",
    label: "2nd menu item",
  },
  {
    key: "3",
    label: "3rd menu item",
  },
];

export const Preview = {
  args: {
    menu,
    placement: "bottomLeft",
    trigger: "hover",
    children: <TxButton>Hover me</TxButton>,
  },
};

export const BasicUsage = () => {
  return (
    <div style={{ padding: "100px" }}>
      <TxDropdown menu={menu}>
        <TxButton>Hover me</TxButton>
      </TxDropdown>
    </div>
  );
};

export const ClickTrigger = () => {
  return (
    <div style={{ padding: "100px" }}>
      <TxDropdown menu={menu} trigger="click">
        <TxButton>Click me</TxButton>
      </TxDropdown>
    </div>
  );
};

export const WithDivider = () => {
  const menuWithDivider = [
    {
      key: "1",
      label: "1st menu item",
    },
    {
      key: "2",
      label: "2nd menu item",
    },
    {
      key: "divider-1",
      type: "divider",
    },
    {
      key: "3",
      label: "3rd menu item",
    },
  ];

  return (
    <div style={{ padding: "100px" }}>
      <TxDropdown menu={menuWithDivider}>
        <TxButton>Hover me</TxButton>
      </TxDropdown>
    </div>
  );
};

export const WithDanger = () => {
  const menuWithDanger = [
    {
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: "Copy",
    },
    {
      key: "divider-1",
      type: "divider",
    },
    {
      key: "3",
      label: "Delete",
      danger: true,
    },
  ];

  return (
    <div style={{ padding: "100px" }}>
      <TxDropdown menu={menuWithDanger}>
        <TxButton>Actions</TxButton>
      </TxDropdown>
    </div>
  );
};

export const Placements = () => {
  return (
    <div style={{ padding: "100px", display: "flex", gap: "20px" }}>
      <TxDropdown menu={menu} placement="bottomLeft">
        <TxButton>Bottom Left</TxButton>
      </TxDropdown>
      <TxDropdown menu={menu} placement="bottomRight">
        <TxButton>Bottom Right</TxButton>
      </TxDropdown>
      <TxDropdown menu={menu} placement="topLeft">
        <TxButton>Top Left</TxButton>
      </TxDropdown>
      <TxDropdown menu={menu} placement="topRight">
        <TxButton>Top Right</TxButton>
      </TxDropdown>
    </div>
  );
};
