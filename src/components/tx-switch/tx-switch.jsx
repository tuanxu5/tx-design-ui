import PropTypes from "prop-types";
import { LoadingIcon, SwitchInput, SwitchSlider, SwitchWrapper } from "./styled";

export const TxSwitch = ({
  checked = false,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = "default",
  checkedChildren = null,
  unCheckedChildren = null,
  onChange,
  className,
  ...props
}) => {
  const isChecked = checked !== undefined ? checked : defaultChecked;

  const handleChange = e => {
    if (disabled || loading) return;
    if (onChange) {
      onChange(e.target.checked, e);
    }
  };

  return (
    <SwitchWrapper disabled={disabled || loading} className={className}>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled || loading}
        {...props}
      />
      <SwitchSlider checked={isChecked} disabled={disabled} size={size}>
        {loading && <LoadingIcon checked={isChecked} size={size} />}
        {!loading && isChecked && checkedChildren && (
          <span
            style={{
              position: "absolute",
              left: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: size === "small" ? "10px" : "12px",
              color: "white",
            }}
          >
            {checkedChildren}
          </span>
        )}
        {!loading && !isChecked && unCheckedChildren && (
          <span
            style={{
              position: "absolute",
              right: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: size === "small" ? "10px" : "12px",
              color: "white",
            }}
          >
            {unCheckedChildren}
          </span>
        )}
      </SwitchSlider>
    </SwitchWrapper>
  );
};

TxSwitch.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"]),
  checkedChildren: PropTypes.node,
  unCheckedChildren: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

TxSwitch.defaultProps = {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  loading: false,
  size: "default",
  checkedChildren: null,
  unCheckedChildren: null,
  onChange: undefined,
  className: "",
};
