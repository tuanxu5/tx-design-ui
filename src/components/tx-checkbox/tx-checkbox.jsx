import PropTypes from "prop-types";
import { SvgIcon } from "../../assets/icons";
import { StyledCheckboxBox, StyledCheckboxInput, StyledCheckboxLabel, StyledCheckboxWrapper } from "./styled";

const TxCheckbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
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

  const checkboxId = id || `tx-checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <StyledCheckboxWrapper
      htmlFor={checkboxId}
      className={[
        "tx-ui-tx-checkbox",
        disabled && "tx-ui-tx-checkbox--disabled",
        danger && "tx-ui-tx-checkbox--danger",
        `tx-ui-tx-checkbox--${size}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <StyledCheckboxInput
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        value={value}
        name={name}
        {...rest}
      />
      <StyledCheckboxBox
        checked={checked}
        size={size}
        danger={danger}
        className={indeterminate && !checked ? "tx-ui-tx-checkbox-box--indeterminate" : ""}
      >
        {checked && <SvgIcon.IconCheck />}
      </StyledCheckboxBox>
      {label && (
        <StyledCheckboxLabel size={size} color={color}>
          {label}
        </StyledCheckboxLabel>
      )}
    </StyledCheckboxWrapper>
  );
};

TxCheckbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  danger: PropTypes.bool,
  color: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

TxCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: "medium",
  danger: false,
};

export default TxCheckbox;
