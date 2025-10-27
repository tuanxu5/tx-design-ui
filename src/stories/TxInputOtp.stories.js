import { useState } from "react";
import TxInputOtp from "../components/tx-input-otp/tx-input-otp";

const TxInputOtpStory = {
  title: "tx-design-ui/Data Entry/TxInputOtp",
  component: TxInputOtp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxInputOtpStory;

export const Default = () => {
  const [otp, setOtp] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <TxInputOtp length={6} onChange={setOtp} />
      <p style={{ fontSize: "14px", color: "#666" }}>OTP: {otp}</p>
    </div>
  );
};

export const Disabled = {
  render: () => {
    return <TxInputOtp length={6} disabled />;
  },
};
