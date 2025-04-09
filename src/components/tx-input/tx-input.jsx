import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { SvgIcon } from "../../assets/icons";
import { PasswordToggle, PrefixWrapper, StyledInputWrapper, StyledTxInput, SuffixWrapper } from "./styled";

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
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [prefixWidth, setPrefixWidth] = useState(0);
  const [suffixWidth, setSuffixWidth] = useState(0);

  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  // Measure width of prefix and suffix elements
  useEffect(() => {
    if (prefixRef.current) {
      setPrefixWidth(prefixRef.current.offsetWidth);
    }
    if (suffixRef.current) {
      setSuffixWidth(suffixRef.current.offsetWidth);
    }
  }, [prefix, suffix, password, passwordToggle, status]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const actualType = password && !passwordVisible ? "password" : "text";

  // Determine what's showing in suffix area to calculate correct padding
  const hasSuffixContent = suffix || (password && passwordToggle);

  return (
    <StyledInputWrapper>
      {prefix && <PrefixWrapper ref={prefixRef}>{prefix}</PrefixWrapper>}

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
          color,
          background: background || "",
          "--placeholder-color": placeholderColor || "#8c9bab",
        }}
        {...rest}
      />

      {hasSuffixContent && (
        <SuffixWrapper ref={suffixRef}>
          {password && passwordToggle && (
            <PasswordToggle onClick={togglePasswordVisibility}>
              {passwordVisible ? <SvgIcon.IconEye01 /> : <SvgIcon.IconEyeSlash01 />}
            </PasswordToggle>
          )}
          {suffix && !((password && passwordToggle) || status) && suffix}
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
};

export default TxInput;
