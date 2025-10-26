import { useState } from "react";
import { TxSlider } from "../components/tx-slider/tx-slider";

export default {
  title: "tx-design-ui/Data Entry/TxSlider",
  component: TxSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
    showValue: { control: "boolean" },
    onChange: { action: "changed" },
    onAfterChange: { action: "after changed" },
  },
};

export const Basic = {
  render: function BasicComponent(args) {
    const [value, setValue] = useState(30);
    return (
      <div style={{ width: "400px" }}>
        <TxSlider {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithValue = {
  render: function WithValueComponent() {
    const [value, setValue] = useState(50);
    return (
      <div style={{ width: "400px" }}>
        <TxSlider value={value} onChange={setValue} showValue />
      </div>
    );
  },
};

export const Disabled = {
  render: () => (
    <div style={{ width: "400px" }}>
      <TxSlider defaultValue={50} disabled />
    </div>
  ),
};

export const CustomRange = {
  render: function CustomRangeComponent() {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: "400px" }}>
        <TxSlider min={0} max={10} step={0.5} value={value} onChange={setValue} showValue />
      </div>
    );
  },
};

export const WithMarks = {
  render: function WithMarksComponent() {
    const [value, setValue] = useState(37);
    const marks = {
      0: "0°C",
      26: "26°C",
      37: "37°C",
      100: "100°C",
    };
    return (
      <div style={{ width: "400px", marginBottom: "40px" }}>
        <TxSlider value={value} onChange={setValue} marks={marks} />
      </div>
    );
  },
};

export const StepMarks = {
  render: function StepMarksComponent() {
    const [value, setValue] = useState(20);
    const marks = {
      0: "0",
      20: "20",
      40: "40",
      60: "60",
      80: "80",
      100: "100",
    };
    return (
      <div style={{ width: "400px", marginBottom: "40px" }}>
        <TxSlider value={value} onChange={setValue} marks={marks} step={20} />
      </div>
    );
  },
};
