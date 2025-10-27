import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const SegmentedContainer = styled.div`
  display: inline-flex;
  background: ${colors.bgFillLight};
  border-radius: 8px;
  padding: 4px;
  position: relative;
`;

const SegmentedButton = styled.button`
  padding: 8px 16px;
  background: ${props => (props.active ? colors.primary : "transparent")};
  color: ${props => (props.active ? "white" : colors.textPrimary)};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: ${props => (props.active ? colors.primary : colors.bgFillMedium)};
  }
`;

const TxSegmented = ({ options, value, onChange, block = false, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(value || options[0]?.value);

  const handleClick = optionValue => {
    setSelectedValue(optionValue);
    if (onChange) onChange(optionValue);
  };

  return (
    <SegmentedContainer {...props}>
      {options.map(option => (
        <SegmentedButton
          key={option.value}
          active={selectedValue === option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </SegmentedButton>
      ))}
    </SegmentedContainer>
  );
};

export default TxSegmented;
