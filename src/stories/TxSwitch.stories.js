import { useState } from "react";
import { TxSwitch } from "../components/tx-switch/tx-switch";

const TxSwitchStory = {
  title: "tx-design-ui/Data Entry/TxSwitch",
  component: TxSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
    onChange: { action: "changed" },
  },
};

export default TxSwitchStory;

export const Basic = {
  render: function BasicComponent(args) {
    const [checked, setChecked] = useState(false);
    return <TxSwitch {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Disabled = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <TxSwitch disabled />
      <TxSwitch checked disabled />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TxSwitch size="small" defaultChecked />
      <TxSwitch size="default" defaultChecked />
      <TxSwitch size="large" defaultChecked />
    </div>
  ),
};

export const WithText = {
  render: function WithTextComponent() {
    const [checked, setChecked] = useState(true);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TxSwitch checked={checked} onChange={setChecked} checkedChildren="开" unCheckedChildren="关" />
        <TxSwitch checked={checked} onChange={setChecked} checkedChildren="ON" unCheckedChildren="OFF" size="large" />
      </div>
    );
  },
};

export const Loading = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <TxSwitch loading />
      <TxSwitch loading checked />
      <TxSwitch loading size="small" />
    </div>
  ),
};
