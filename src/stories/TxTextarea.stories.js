import { useState } from "react";
import TxTextarea from "../components/tx-textarea/tx-textarea";

const TxTextareaStory = {
  title: "tx-design-ui/Other/TxTextarea",
  component: TxTextarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxTextareaStory;

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: "400px" }}>
      <TxTextarea value={value} onChange={e => setValue(e.target.value)} placeholder="Enter text..." />
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>Value: {value}</p>
    </div>
  );
};

export const Resize = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: "400px" }}>
      <TxTextarea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="This textarea can be resized"
        resize="both"
      />
    </div>
  );
};

export const Disabled = {
  render: () => {
    return (
      <div style={{ width: "400px" }}>
        <TxTextarea value="Disabled textarea" disabled />
      </div>
    );
  },
};
