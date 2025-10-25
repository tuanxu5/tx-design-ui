import { useState } from "react";
import { TxDatePicker } from "../components";

const TxDatePickerStory = {
  title: "tx-design-ui/TxDatePicker",
  component: TxDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default TxDatePickerStory;

const PreviewDatePickerComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex-center">
      <TxDatePicker value={value} onChange={val => setValue(val)} />
    </div>
  );
};

export const PreviewDatePicker = {
  render: () => <PreviewDatePickerComponent />,
};

const SizeComponent = () => {
  const [value, setValue] = useState("2024-01-01");

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" }}
    >
      <TxDatePicker value={value} onChange={val => setValue(val)} size="small" />
      <TxDatePicker value={value} onChange={val => setValue(val)} size="medium" />
      <TxDatePicker value={value} onChange={val => setValue(val)} size="large" />
    </div>
  );
};

export const Size = {
  render: () => <SizeComponent />,
};

const TypeComponent = () => {
  const [date, setDate] = useState("2024-01-01");
  const [datetime, setDatetime] = useState("");
  const [month, setMonth] = useState("2024-01");
  const [week, setWeek] = useState("");
  const [time, setTime] = useState("12:00");

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" }}
    >
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>Date</p>
        <TxDatePicker type="date" value={date} onChange={val => setDate(val)} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>DateTime</p>
        <TxDatePicker type="datetime-local" value={datetime} onChange={val => setDatetime(val)} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>Month</p>
        <TxDatePicker type="month" value={month} onChange={val => setMonth(val)} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>Week</p>
        <TxDatePicker type="week" value={week} onChange={val => setWeek(val)} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>Time</p>
        <TxDatePicker type="time" value={time} onChange={val => setTime(val)} />
      </div>
    </div>
  );
};

export const Type = {
  render: () => <TypeComponent />,
};

const MinMaxComponent = () => {
  const [value, setValue] = useState("2024-01-15");

  return (
    <div className="flex-center" style={{ width: "300px" }}>
      <TxDatePicker value={value} onChange={val => setValue(val)} min="2024-01-01" max="2024-12-31" />
    </div>
  );
};

export const MinMax = {
  render: () => <MinMaxComponent />,
};

export const Disabled = {
  render: () => (
    <div className="flex-center" style={{ width: "300px" }}>
      <TxDatePicker value="2024-01-01" disabled />
    </div>
  ),
};

const StatusComponent = () => {
  const [value, setValue] = useState("2024-01-01");

  return (
    <div
      className="flex-center"
      style={{ flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" }}
    >
      <TxDatePicker value={value} onChange={val => setValue(val)} status="success" />
      <TxDatePicker value={value} onChange={val => setValue(val)} status="warning" />
      <TxDatePicker value={value} onChange={val => setValue(val)} status="error" />
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
      <TxDatePicker value={value} onChange={val => setValue(val)} fullWidth />
    </div>
  );
};

export const FullWidth = {
  render: () => <FullWidthComponent />,
};
