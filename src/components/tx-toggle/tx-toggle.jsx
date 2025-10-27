import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const ToggleButton = styled.button`
  position: relative;
  display: inline-block;
  width: ${props => (props.size === "large" ? "48px" : props.size === "small" ? "32px" : "40px")};
  height: ${props => (props.size === "large" ? "24px" : props.size === "small" ? "16px" : "20px")};
  background: ${props => (props.checked ? colors.primary : colors.borderMedium)};
  border-radius: ${props => (props.size === "large" ? "12px" : props.size === "small" ? "8px" : "10px")};
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ToggleThumb = styled.div`
  position: absolute;
  top: ${props => (props.size === "large" ? "2px" : props.size === "small" ? "1px" : "2px")};
  left: ${props =>
    props.checked ? (props.size === "large" ? "26px" : props.size === "small" ? "17px" : "22px") : "2px"};
  width: ${props => (props.size === "large" ? "20px" : props.size === "small" ? "14px" : "16px")};
  height: ${props => (props.size === "large" ? "20px" : props.size === "small" ? "14px" : "16px")};
  background: white;
  border-radius: 50%;
  transition: left 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TxToggle = ({ checked = false, onChange, size = "medium", disabled = false, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    if (!disabled) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <ToggleButton checked={isChecked ? 1 : 0} size={size} disabled={disabled} onClick={handleClick} {...props}>
      <ToggleThumb checked={isChecked ? 1 : 0} size={size} />
    </ToggleButton>
  );
};

export default TxToggle;
