import { useState } from "react";
import TxCalendar from "../components/tx-calendar/tx-calendar";

const TxCalendarStory = {
  title: "tx-design-ui/Navigation/TxCalendar",
  component: TxCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxCalendarStory;

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <TxCalendar value={selectedDate} onChange={setSelectedDate} />
      <p style={{ marginTop: "16px", fontSize: "14px", color: "#666" }}>
        Selected: {selectedDate.toLocaleDateString()}
      </p>
    </div>
  );
};
