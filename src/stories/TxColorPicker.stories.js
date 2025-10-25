import { useState } from "react";
import { TxColorPicker } from "../components";

const TxColorPickerStory = {
  title: "tx-design-ui/TxColorPicker",
  component: TxColorPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default TxColorPickerStory;

const PreviewColorPickerComponent = () => {
  const [color, setColor] = useState("#1890ff");

  return (
    <div className="flex-center">
      <TxColorPicker value={color} onChange={val => setColor(val)} />
    </div>
  );
};

export const PreviewColorPicker = {
  render: () => <PreviewColorPickerComponent />,
};

const SizeComponent = () => {
  const [color, setColor] = useState("#1890ff");

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxColorPicker value={color} onChange={val => setColor(val)} size="small" label="Small" />
      <TxColorPicker value={color} onChange={val => setColor(val)} size="medium" label="Medium" />
      <TxColorPicker value={color} onChange={val => setColor(val)} size="large" label="Large" />
    </div>
  );
};

export const Size = {
  render: () => <SizeComponent />,
};

const WithLabelComponent = () => {
  const [color, setColor] = useState("#52c41a");

  return (
    <div className="flex-center">
      <TxColorPicker value={color} onChange={val => setColor(val)} label="Pick a color" />
    </div>
  );
};

export const WithLabel = {
  render: () => <WithLabelComponent />,
};

const WithoutInputComponent = () => {
  const [color, setColor] = useState("#ff4d4f");

  return (
    <div className="flex-center">
      <TxColorPicker value={color} onChange={val => setColor(val)} showInput={false} label="Color" />
    </div>
  );
};

export const WithoutInput = {
  render: () => <WithoutInputComponent />,
};

const WithPresetsComponent = () => {
  const [color, setColor] = useState("#1890ff");

  const presets = [
    "#f5222d",
    "#fa541c",
    "#fa8c16",
    "#faad14",
    "#fadb14",
    "#a0d911",
    "#52c41a",
    "#13c2c2",
    "#1890ff",
    "#2f54eb",
    "#722ed1",
    "#eb2f96",
  ];

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px" }}>
      <TxColorPicker value={color} onChange={val => setColor(val)} label="Choose color" presets={presets} />
    </div>
  );
};

export const WithPresets = {
  render: () => <WithPresetsComponent />,
};

export const Disabled = {
  render: () => (
    <div className="flex-center">
      <TxColorPicker value="#1890ff" disabled label="Disabled" />
    </div>
  ),
};

const CustomPresetsComponent = () => {
  const [color, setColor] = useState("#6253e1");

  const gradientColors = ["#6253e1", "#04befe", "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7", "#fd79a8"];

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px" }}>
      <TxColorPicker value={color} onChange={val => setColor(val)} label="Gradient Colors" presets={gradientColors} />
    </div>
  );
};

export const CustomPresets = {
  render: () => <CustomPresetsComponent />,
};
