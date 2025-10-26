import { useState } from "react";
import { TxButton } from "../components/tx-button/tx-button";
import { TxProgress } from "../components/tx-progress/tx-progress";

const TxProgressStory = {
  title: "tx-design-ui/Feedback/TxProgress",
  component: TxProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
    type: {
      control: { type: "select" },
      options: ["line", "circle"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
    status: {
      control: { type: "select" },
      options: ["normal", "success", "exception"],
    },
    showInfo: { control: "boolean" },
  },
};

export default TxProgressStory;

export const Basic = {
  args: {
    percent: 30,
  },
  render: args => (
    <div style={{ width: "400px" }}>
      <TxProgress {...args} />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <TxProgress percent={50} size="small" />
      <TxProgress percent={50} size="default" />
      <TxProgress percent={50} size="large" />
    </div>
  ),
};

export const Status = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <TxProgress percent={30} status="normal" />
      <TxProgress percent={100} status="success" />
      <TxProgress percent={70} status="exception" />
    </div>
  ),
};

export const HideInfo = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <TxProgress percent={50} showInfo={false} />
      <TxProgress percent={75} />
    </div>
  ),
};

export const Dynamic = {
  render: function DynamicComponent() {
    const [percent, setPercent] = useState(0);

    const increase = () => {
      setPercent(prev => Math.min(prev + 10, 100));
    };

    const decrease = () => {
      setPercent(prev => Math.max(prev - 10, 0));
    };

    return (
      <div style={{ width: "400px" }}>
        <TxProgress percent={percent} />
        <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
          <TxButton onClick={decrease}>- 10</TxButton>
          <TxButton onClick={increase}>+ 10</TxButton>
        </div>
      </div>
    );
  },
};

export const Circle = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TxProgress type="circle" percent={30} />
      <TxProgress type="circle" percent={70} />
      <TxProgress type="circle" percent={100} />
    </div>
  ),
};

export const CircleStatus = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TxProgress type="circle" percent={30} />
      <TxProgress type="circle" percent={70} status="exception" />
      <TxProgress type="circle" percent={100} status="success" />
    </div>
  ),
};

export const CircleSizes = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <TxProgress type="circle" percent={75} width={80} />
      <TxProgress type="circle" percent={75} width={120} />
      <TxProgress type="circle" percent={75} width={160} />
    </div>
  ),
};

export const Steps = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <TxProgress percent={50} steps={5} />
      <TxProgress percent={70} steps={10} />
      <TxProgress percent={100} steps={8} />
    </div>
  ),
};

export const CustomFormat = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <TxProgress percent={75} format={percent => `${percent}% Done`} />
      <TxProgress percent={100} format={percent => "Completed ✓"} />
      <TxProgress type="circle" percent={85} format={percent => `${percent}/100`} />
    </div>
  ),
};

export const MiniCircle = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <TxProgress type="circle" percent={30} width={60} strokeWidth={8} />
      <TxProgress type="circle" percent={50} width={60} strokeWidth={8} />
      <TxProgress type="circle" percent={70} width={60} strokeWidth={8} />
      <TxProgress type="circle" percent={100} width={60} strokeWidth={8} />
    </div>
  ),
};
