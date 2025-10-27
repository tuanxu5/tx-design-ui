import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const DateRangeContainer = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.borderLight};
  border-radius: 6px;
  font-size: 14px;
  width: 150px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const TxDateRangePicker = ({ onChange, ...props }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartChange = e => {
    setStartDate(e.target.value);
    if (onChange) onChange({ start: e.target.value, end: endDate });
  };

  const handleEndChange = e => {
    setEndDate(e.target.value);
    if (onChange) onChange({ start: startDate, end: e.target.value });
  };

  return (
    <DateRangeContainer {...props}>
      <DateInput type="date" value={startDate} onChange={handleStartChange} />
      <span>to</span>
      <DateInput type="date" value={endDate} onChange={handleEndChange} />
    </DateRangeContainer>
  );
};

export default TxDateRangePicker;
