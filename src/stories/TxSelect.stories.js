import { useState } from "react";
import { TxSelect } from "../components";

const TxSelectStory = {
  title: "tx-design-ui/Data Entry/TxSelect",
  component: TxSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default TxSelectStory;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

const PreviewSelectComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex-center">
      <TxSelect options={options} value={value} onChange={val => setValue(val)} placeholder="Select an option" />
    </div>
  );
};

export const PreviewSelect = {
  render: () => <PreviewSelectComponent />,
};

const SizeComponent = () => {
  const [value, setValue] = useState("1");

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" }}
    >
      <TxSelect options={options} value={value} onChange={val => setValue(val)} size="small" />
      <TxSelect options={options} value={value} onChange={val => setValue(val)} size="medium" />
      <TxSelect options={options} value={value} onChange={val => setValue(val)} size="large" />
    </div>
  );
};

export const Size = {
  render: () => <SizeComponent />,
};

export const Disabled = {
  render: () => (
    <div className="flex-center" style={{ width: "300px" }}>
      <TxSelect options={options} value="1" disabled />
    </div>
  ),
};

const StatusComponent = () => {
  const [value, setValue] = useState("1");

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" }}
    >
      <TxSelect options={options} value={value} onChange={val => setValue(val)} status="success" />
      <TxSelect options={options} value={value} onChange={val => setValue(val)} status="warning" />
      <TxSelect options={options} value={value} onChange={val => setValue(val)} status="error" />
    </div>
  );
};

export const Status = {
  render: () => <StatusComponent />,
};

const FullWidthComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <TxSelect options={options} value={value} onChange={val => setValue(val)} fullWidth />
    </div>
  );
};

export const FullWidth = {
  render: () => <FullWidthComponent />,
};

export const Empty = {
  render: () => (
    <div className="flex-center" style={{ width: "300px" }}>
      <TxSelect options={[]} placeholder="No options" />
    </div>
  ),
};
