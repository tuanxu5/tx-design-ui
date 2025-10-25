import { useState } from "react";
import { TxInputNumber } from "../components";

const TxInputNumberStory = {
  title: "tx-design-ui/Data Entry/TxInputNumber",
  component: TxInputNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default TxInputNumberStory;

const PreviewInputNumberComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex-center">
      <TxInputNumber value={value} onChange={val => setValue(val)} />
    </div>
  );
};

export const PreviewInputNumber = {
  render: () => <PreviewInputNumberComponent />,
};

const SizeComponent = () => {
  const [value, setValue] = useState(10);

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "200px" }}
    >
      <TxInputNumber value={value} onChange={val => setValue(val)} size="small" />
      <TxInputNumber value={value} onChange={val => setValue(val)} size="medium" />
      <TxInputNumber value={value} onChange={val => setValue(val)} size="large" />
    </div>
  );
};

export const Size = {
  render: () => <SizeComponent />,
};

const MinMaxComponent = () => {
  const [value, setValue] = useState(5);

  return (
    <div className="flex-center" style={{ width: "200px" }}>
      <TxInputNumber value={value} onChange={val => setValue(val)} min={0} max={10} />
    </div>
  );
};

export const MinMax = {
  render: () => <MinMaxComponent />,
};

const StepComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "200px" }}
    >
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px" }}>Step: 1 (Default)</p>
        <TxInputNumber value={value} onChange={val => setValue(val)} step={1} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px" }}>Step: 5</p>
        <TxInputNumber value={value} onChange={val => setValue(val)} step={5} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px" }}>Step: 10</p>
        <TxInputNumber value={value} onChange={val => setValue(val)} step={10} />
      </div>
    </div>
  );
};

export const Step = {
  render: () => <StepComponent />,
};

export const Disabled = {
  render: () => (
    <div className="flex-center" style={{ width: "200px" }}>
      <TxInputNumber value={5} disabled />
    </div>
  ),
};

const StatusComponent = () => {
  const [value, setValue] = useState(10);

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "200px" }}
    >
      <TxInputNumber value={value} onChange={val => setValue(val)} status="success" />
      <TxInputNumber value={value} onChange={val => setValue(val)} status="warning" />
      <TxInputNumber value={value} onChange={val => setValue(val)} status="error" />
    </div>
  );
};

export const Status = {
  render: () => <StatusComponent />,
};

const FullWidthComponent = () => {
  const [value, setValue] = useState(50);

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <TxInputNumber value={value} onChange={val => setValue(val)} fullWidth />
    </div>
  );
};

export const FullWidth = {
  render: () => <FullWidthComponent />,
};
