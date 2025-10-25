import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  StyledSelectArrow,
  StyledSelectButton,
  StyledSelectDropdown,
  StyledSelectEmpty,
  StyledSelectOption,
  StyledSelectValue,
  StyledSelectWrapper,
} from "./styled";

const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const TxSelect = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  size = "medium",
  status,
  fullWidth = false,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = option => {
    if (!disabled && onChange) {
      onChange(option.value, option);
      setIsOpen(false);
    }
  };

  return (
    <StyledSelectWrapper ref={wrapperRef} fullWidth={fullWidth} {...rest}>
      <StyledSelectButton
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        isOpen={isOpen}
        size={size}
        status={status}
      >
        <StyledSelectValue placeholder={!selectedOption}>{displayValue}</StyledSelectValue>
        <StyledSelectArrow isOpen={isOpen} disabled={disabled}>
          <ChevronDown />
        </StyledSelectArrow>
      </StyledSelectButton>

      <StyledSelectDropdown isOpen={isOpen}>
        {options.length === 0 ? (
          <StyledSelectEmpty>No options available</StyledSelectEmpty>
        ) : (
          options.map(option => (
            <StyledSelectOption
              key={option.value}
              selected={option.value === value}
              size={size}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </StyledSelectOption>
          ))
        )}
      </StyledSelectDropdown>
    </StyledSelectWrapper>
  );
};

TxSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  status: PropTypes.oneOf(["success", "warning", "error"]),
  fullWidth: PropTypes.bool,
};

TxSelect.defaultProps = {
  options: [],
  placeholder: "Select an option",
  disabled: false,
  size: "medium",
  fullWidth: false,
};

export default TxSelect;
