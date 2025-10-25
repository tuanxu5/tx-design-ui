import PropTypes from "prop-types";
import React from "react";
import { StyledRadioCircle, StyledRadioGroup, StyledRadioInput, StyledRadioLabel, StyledRadioWrapper } from "./styled";

const TxRadio = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = "medium",
  danger = false,
  color,
  value,
  name,
  id,
  ...rest
}) => {
  const handleChange = e => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  const radioId = id || `tx-radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <StyledRadioWrapper
      htmlFor={radioId}
      className={[
        "tx-ui-tx-radio",
        disabled && "tx-ui-tx-radio--disabled",
        danger && "tx-ui-tx-radio--danger",
        `tx-ui-tx-radio--${size}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <StyledRadioInput
        type="radio"
        id={radioId}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        value={value}
        name={name}
        {...rest}
      />
      <StyledRadioCircle checked={checked} size={size} danger={danger} />
      {label && (
        <StyledRadioLabel size={size} color={color}>
          {label}
        </StyledRadioLabel>
      )}
    </StyledRadioWrapper>
  );
};

TxRadio.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  danger: PropTypes.bool,
  color: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

TxRadio.defaultProps = {
  checked: false,
  disabled: false,
  size: "medium",
  danger: false,
};

// Radio Group Component
const TxRadioGroup = ({ children, value, onChange, name, direction = "vertical", disabled = false, ...rest }) => {
  const handleChange = childValue => e => {
    if (!disabled && onChange) {
      onChange(childValue, e);
    }
  };

  return (
    <StyledRadioGroup direction={direction} {...rest}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onChange: handleChange(child.props.value),
            name: name || "radio-group",
            disabled: disabled || child.props.disabled,
          });
        }
        return child;
      })}
    </StyledRadioGroup>
  );
};

TxRadioGroup.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  disabled: PropTypes.bool,
};

TxRadioGroup.defaultProps = {
  direction: "vertical",
  disabled: false,
};

TxRadio.Group = TxRadioGroup;

export default TxRadio;
