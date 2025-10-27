import { useState } from "react";
import TxTimeInput from "../components/tx-time-input/tx-time-input";

const TxTimeInputStory = {
  title: "tx-design-ui/Data Entry/TxTimeInput",
  component: TxTimeInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxTimeInputStory;

export const Default = () => {
  const [time, setTime] = useState("");
  return (
    <div style={{ width: "200px" }}>
      <TxTimeInput value={time} onChange={setTime} />
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>Selected: {time}</p>
    </div>
  );
};

export const Disabled = {
  render: () => {
    return (
      <div style={{ width: "200px" }}>
        <TxTimeInput value="14:30" disabled />
      </div>
    );
  },
};
