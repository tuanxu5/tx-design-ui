import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${colors.borderLight};
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primaryLight};
  }

  &:disabled {
    background: ${colors.bgFillLight};
    cursor: not-allowed;
  }
`;

const TxTimeInput = ({ value, onChange, disabled, ...props }) => {
  const [time, setTime] = useState(value || "");

  const handleChange = e => {
    setTime(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return <Input type="time" value={time} onChange={handleChange} disabled={disabled} {...props} />;
};

export default TxTimeInput;
