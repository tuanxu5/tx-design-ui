import PropTypes from "prop-types";
import { StyledDatePickerIcon, StyledDatePickerInput, StyledDatePickerWrapper } from "./styled";

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TxDatePicker = ({
  value,
  onChange,
  placeholder = "Select date",
  disabled = false,
  size = "medium",
  status,
  fullWidth = false,
  type = "date",
  min,
  max,
  ...rest
}) => {
  const handleChange = e => {
    if (!disabled && onChange) {
      onChange(e.target.value, e);
    }
  };

  return (
    <StyledDatePickerWrapper fullWidth={fullWidth}>
      <StyledDatePickerInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        status={status}
        min={min}
        max={max}
        {...rest}
      />
      <StyledDatePickerIcon disabled={disabled}>
        <CalendarIcon />
      </StyledDatePickerIcon>
    </StyledDatePickerWrapper>
  );
};

TxDatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  status: PropTypes.oneOf(["success", "warning", "error"]),
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(["date", "datetime-local", "month", "week", "time"]),
  min: PropTypes.string,
  max: PropTypes.string,
};

TxDatePicker.defaultProps = {
  placeholder: "Select date",
  disabled: false,
  size: "medium",
  fullWidth: false,
  type: "date",
};

export default TxDatePicker;
