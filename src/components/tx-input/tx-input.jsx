import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { SvgIcon } from "../../assets/icons";
import { ClearButton, PasswordToggle, PrefixWrapper, StyledInputWrapper, StyledTxInput, SuffixWrapper } from "./styled";

const TxInput = ({
  placeholder,
  value,
  onChange,
  type = "text",
  background,
  color,
  size,
  disabled,
  prefix,
  suffix,
  shape,
  loading,
  danger,
  status,
  fill,
  passwordToggle = true,
  password,
  placeholderColor,
  allowClear = false,
  onClear,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [prefixWidth, setPrefixWidth] = useState(0);
  const [suffixWidth, setSuffixWidth] = useState(0);
  const [showClear, setShowClear] = useState(false);

  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  // Show clear button only when there is a value
  useEffect(() => {
    setShowClear(allowClear && value && value.toString().length > 0);
  }, [allowClear, value]);

  // Get status color for icons
  const getStatusColor = () => {
    if (disabled) return "#a0a1a7";

    switch (status) {
      case "success":
        return "#52c41a";
      case "warning":
        return "#faad14";
      case "error":
        return "#ff4d4f";
      case "info":
        return "#1890ff";
      default:
        return "#1c252e";
    }
  };

  // Measure width of prefix and suffix elements
  useEffect(() => {
    if (prefixRef.current) {
      setPrefixWidth(prefixRef.current.offsetWidth);
    }
    if (suffixRef.current) {
      setSuffixWidth(suffixRef.current.offsetWidth);
    }
  }, [prefix, suffix, password, passwordToggle, status, showClear]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClearInput = e => {
    e.stopPropagation();

    // Create synthetic event for onChange handler
    const syntheticEvent = {
      target: {
        value: "",
      },
    };

    // Call provided onChange
    onChange && onChange(syntheticEvent);

    // Call onClear if provided
    onClear && onClear();
  };

  const actualType = password && !passwordVisible ? "password" : "text";

  // Determine what's showing in suffix area to calculate correct padding
  const hasSuffixContent = suffix || (password && passwordToggle) || showClear;

  const iconColor = getStatusColor();

  return (
    <StyledInputWrapper>
      {prefix && (
        <PrefixWrapper ref={prefixRef} color={iconColor}>
          {prefix}
        </PrefixWrapper>
      )}

      <StyledTxInput
        type={actualType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        prefix={prefix}
        suffix={hasSuffixContent}
        prefixWidth={prefixWidth}
        suffixWidth={suffixWidth}
        fill={fill}
        status={status}
        className={[
          "tx-ui-tx-input",
          disabled && "tx-ui-tx-input--disabled",
          loading && "tx-ui-tx-input--loading",
          danger && "tx-ui-tx-input--danger",
          status && `tx-ui-tx-input--${status}`,
          `tx-ui-tx-input--${size}`,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          color: color || (status ? getStatusColor() : "#1c252e"),
          background: background || "",
          "--placeholder-color": placeholderColor || "#8c9bab",
        }}
        {...rest}
      />

      {hasSuffixContent && (
        <SuffixWrapper ref={suffixRef} color={iconColor}>
          {showClear && !disabled && (
            <ClearButton onClick={handleClearInput} color={status ? iconColor : "#8c9bab"}>
              <SvgIcon.IconXClose />
            </ClearButton>
          )}
          {password && passwordToggle && (
            <PasswordToggle onClick={togglePasswordVisibility} color={iconColor}>
              {passwordVisible ? <SvgIcon.IconEye01 /> : <SvgIcon.IconEyeSlash01 />}
            </PasswordToggle>
          )}
          {suffix && suffix}
        </SuffixWrapper>
      )}
    </StyledInputWrapper>
  );
};

TxInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  danger: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["text", "password", "email", "number", "tel", "url"]),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(["success", "warning", "error", "info"]),
  fill: PropTypes.bool,
  passwordToggle: PropTypes.bool,
  password: PropTypes.bool,
  placeholderColor: PropTypes.string,
  allowClear: PropTypes.bool,
  onClear: PropTypes.func,
};

TxInput.defaultProps = {
  placeholder: "",
  type: "text",
  size: "medium",
  onChange: () => {},
  disabled: false,
  loading: false,
  danger: false,
  fill: false,
  passwordToggle: true,
  allowClear: false,
};

export default TxInput;
