import PropTypes from "prop-types";
import { StyledControlButton, StyledControls, StyledInputNumber, StyledInputNumberWrapper } from "./styled";

const ChevronUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

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

const TxInputNumber = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  placeholder = "Enter number",
  disabled = false,
  size = "medium",
  status,
  fullWidth = false,
  ...rest
}) => {
  const handleChange = e => {
    const newValue = e.target.value;

    if (newValue === "") {
      onChange && onChange("");
      return;
    }

    const numValue = Number(newValue);

    if (isNaN(numValue)) return;

    if (min !== undefined && numValue < min) {
      onChange && onChange(min);
      return;
    }

    if (max !== undefined && numValue > max) {
      onChange && onChange(max);
      return;
    }

    onChange && onChange(numValue);
  };

  const handleIncrement = () => {
    if (disabled) return;

    const currentValue = value === "" || value === undefined ? 0 : Number(value);
    const newValue = currentValue + step;

    if (max !== undefined && newValue > max) {
      onChange && onChange(max);
    } else {
      onChange && onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (disabled) return;

    const currentValue = value === "" || value === undefined ? 0 : Number(value);
    const newValue = currentValue - step;

    if (min !== undefined && newValue < min) {
      onChange && onChange(min);
    } else {
      onChange && onChange(newValue);
    }
  };

  const isMaxReached = max !== undefined && Number(value) >= max;
  const isMinReached = min !== undefined && Number(value) <= min;

  return (
    <StyledInputNumberWrapper fullWidth={fullWidth}>
      <StyledInputNumber
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        status={status}
        min={min}
        max={max}
        step={step}
        {...rest}
      />
      <StyledControls>
        <StyledControlButton type="button" onClick={handleIncrement} disabled={disabled || isMaxReached} size={size}>
          <ChevronUp />
        </StyledControlButton>
        <StyledControlButton type="button" onClick={handleDecrement} disabled={disabled || isMinReached} size={size}>
          <ChevronDown />
        </StyledControlButton>
      </StyledControls>
    </StyledInputNumberWrapper>
  );
};

TxInputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  status: PropTypes.oneOf(["success", "warning", "error"]),
  fullWidth: PropTypes.bool,
};

TxInputNumber.defaultProps = {
  step: 1,
  placeholder: "Enter number",
  disabled: false,
  size: "medium",
  fullWidth: false,
};

export default TxInputNumber;
