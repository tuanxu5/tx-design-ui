import { useState } from "react";
import TxToggle from "../components/tx-toggle/tx-toggle";

const TxToggleStory = {
  title: "tx-design-ui/Navigation/TxToggle",
  component: TxToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxToggleStory;

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <TxToggle checked={checked} onChange={setChecked} />
        <span>Default: {checked ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export const Sizes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <TxToggle checked={checked1} onChange={setChecked1} size="small" />
        <span>Small</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <TxToggle checked={checked2} onChange={setChecked2} size="medium" />
        <span>Medium (default)</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <TxToggle checked={checked3} onChange={setChecked3} size="large" />
        <span>Large</span>
      </div>
    </div>
  );
};

export const Disabled = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TxToggle checked={false} disabled />
          <span>Off (disabled)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TxToggle checked disabled />
          <span>On (disabled)</span>
        </div>
      </div>
    );
  },
};
