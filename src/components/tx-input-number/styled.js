import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledInputNumberWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
`;

export const StyledInputNumber = styled.input`
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 40px 8px 12px";
      case "large":
        return "14px 50px 14px 20px";
      default:
        return "10px 45px 10px 16px";
    }
  }};
  border-radius: 10px;
  border: 1.5px solid
    ${props => {
      if (props.disabled) return colors.borderDisabled;
      if (props.status === "error") return colors.danger;
      if (props.status === "success") return colors.success;
      if (props.status === "warning") return colors.warning;
      return colors.borderLight;
    }};
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "13px";
      case "large":
        return "15px";
      default:
        return "14px";
    }
  }};
  color: ${props => (props.disabled ? colors.textDisabled : colors.textPrimary)};
  background-color: ${props => (props.disabled ? colors.bgFillLight : colors.bgWhite)};
  outline: none;
  width: 100%;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${colors.placeholder};
  }

  &:hover:not(:disabled) {
    border-color: ${props => (props.status === "error" ? colors.danger : colors.primary)};
  }

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryLight};
  }

  /* Remove default number arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const StyledControls = styled.div`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledControlButton = styled.button`
  width: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "32px";
      default:
        return "28px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${props => (props.disabled ? colors.textDisabled : colors.textSecondary)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  border-radius: 4px;
  padding: 0;

  &:hover:not(:disabled) {
    background-color: ${colors.bgFill};
    color: ${colors.primary};
  }

  &:active:not(:disabled) {
    background-color: ${colors.bgPrimaryLight};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;
