import styled from "styled-components";
import "../../styles/shorten.scss";

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledTxInput = styled.input`
  padding: 30px 30px;
  border-radius: 10px;
  border: 1.5px solid #eef0f1;
  font-size: 14px;
  color: #1c252e;
  outline: none;
  width: 100%;
  transition: all 0.3s ease;
  letter-spacing: inherit;
  background-color: ${props => (props.fill && !props.status ? "#f7f8fa" : "transparent")};

  /* Custom placeholder color */
  &::placeholder {
    font-size: 13px;
    color: #8c9bab;
    opacity: 1;
  }

  /* For Internet Explorer */
  &:-ms-input-placeholder {
    color: #8c9bab;
  }

  /* For Microsoft Edge */
  &::-ms-input-placeholder {
    color: #8c9bab;
  }

  ${props => {
    const prefixPadding = props.prefixWidth ? `${props.prefixWidth + 16}px` : "40px";
    return props.prefix
      ? `
      padding-left: ${prefixPadding} !important;
    `
      : "";
  }}

  ${props => {
    const suffixPadding = props.suffixWidth ? `${props.suffixWidth + 16}px` : "40px";
    return props.suffix
      ? `
      padding-right: ${suffixPadding} !important;
    `
      : "";
  }}

  &.tx-ui-tx-input--success {
    border-color: #52c41a;
    color: #52c41a;
    ${props =>
      props.fill &&
      `
      background-color: #52c41a15;
      border-color: #52c41a15;
    `}
  }

  &.tx-ui-tx-input--warning {
    border-color: #faad14;
    color: #faad14;
    ${props =>
      props.fill &&
      `
      background-color: #faad1415;
      border-color: #faad1415;
    `}
  }

  &.tx-ui-tx-input--error {
    border-color: #ff4d4f;
    color: #ff4d4f;
    ${props =>
      props.fill &&
      `
      background-color:#ff4d4f15;
      border-color: #ff4d4f15;
    `}
  }

  &.tx-ui-tx-input--info {
    border-color: #1890ff;
    color: #1890ff;
    ${props =>
      props.fill &&
      `
      background-color: #1890ff15;
      border-color: #1890ff15;
    `};
  }

  &.tx-ui-tx-input--disabled {
    cursor: not-allowed;
    background-color: #f3f3f4;
    color: #a0a1a7;

    &::placeholder {
      color: #a0a1a7;
      opacity: 0.7;
    }
  }

  &.tx-ui-tx-input--small {
    padding: 12px 14px;
    font-size: 14px;
  }

  &.tx-ui-tx-input--medium {
    padding: 14px 16px;
    font-size: 14px;
  }

  &.tx-ui-tx-input--large {
    padding: 16px 18px;
    font-size: 14px;
  }
`;

const PrefixWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #1c252e;
  font-size: 14px;
  width: 20px;
`;

const SuffixWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #1c252e;
  font-size: 14px;
  width: 20px;
`;

const PasswordToggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1c252e;
  width: 16px;
  font-size: 14px;
`;

export { PasswordToggle, PrefixWrapper, StyledInputWrapper, StyledTxInput, SuffixWrapper };
