import { useState } from "react";
import { TxRadio } from "../components";

const TxRadioStory = {
  title: "tx-design-ui/TxRadio",
  component: TxRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    onChange: { action: "changed" },
  },
  args: {
    label: "Radio",
  },
};

export default TxRadioStory;

const PreviewRadioComponent = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex-center">
      <TxRadio label="Radio" checked={checked} onChange={e => setChecked(e.target.checked)} />
    </div>
  );
};

export const PreviewRadio = {
  render: () => <PreviewRadioComponent />,
};

const BasicUsageComponent = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxRadio
        label="Option 1"
        value="option1"
        checked={selected === "option1"}
        onChange={() => setSelected("option1")}
      />
      <TxRadio
        label="Option 2"
        value="option2"
        checked={selected === "option2"}
        onChange={() => setSelected("option2")}
      />
      <TxRadio
        label="Option 3"
        value="option3"
        checked={selected === "option3"}
        onChange={() => setSelected("option3")}
      />
    </div>
  );
};

export const BasicUsage = {
  render: () => <BasicUsageComponent />,
};

export const Disabled = {
  render: () => (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxRadio label="Disabled Unchecked" checked={false} disabled />
      <TxRadio label="Disabled Checked" checked disabled />
    </div>
  ),
};

const SizeComponent = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxRadio label="Small" size="small" checked={checked} onChange={e => setChecked(e.target.checked)} />
      <TxRadio label="Medium (Default)" size="medium" checked={checked} onChange={e => setChecked(e.target.checked)} />
      <TxRadio label="Large" size="large" checked={checked} onChange={e => setChecked(e.target.checked)} />
    </div>
  );
};

export const Size = {
  render: () => <SizeComponent />,
};

const DangerComponent = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxRadio
        label="Delete permanently"
        value="option1"
        danger
        checked={selected === "option1"}
        onChange={() => setSelected("option1")}
      />
      <TxRadio
        label="Remove account"
        value="option2"
        danger
        checked={selected === "option2"}
        onChange={() => setSelected("option2")}
      />
    </div>
  );
};

export const Danger = {
  render: () => <DangerComponent />,
};

const RadioGroupComponent = () => {
  const [value, setValue] = useState("option1");

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Vertical (Default)</h4>
        <TxRadio.Group value={value} onChange={val => setValue(val)}>
          <TxRadio label="Option 1" value="option1" />
          <TxRadio label="Option 2" value="option2" />
          <TxRadio label="Option 3" value="option3" />
        </TxRadio.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>Horizontal</h4>
        <TxRadio.Group value={value} onChange={val => setValue(val)} direction="horizontal">
          <TxRadio label="Option 1" value="option1" />
          <TxRadio label="Option 2" value="option2" />
          <TxRadio label="Option 3" value="option3" />
        </TxRadio.Group>
      </div>
    </div>
  );
};

export const RadioGroup = {
  render: () => <RadioGroupComponent />,
};

const RadioGroupDisabledComponent = () => {
  const [value, setValue] = useState("option1");

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxRadio.Group value={value} onChange={val => setValue(val)} disabled>
        <TxRadio label="Option 1" value="option1" />
        <TxRadio label="Option 2" value="option2" />
        <TxRadio label="Option 3" value="option3" />
      </TxRadio.Group>
    </div>
  );
};

export const RadioGroupDisabled = {
  render: () => <RadioGroupDisabledComponent />,
};
