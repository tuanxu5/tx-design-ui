import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledDatePickerWrapper = styled.div`
  position: relative;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  min-width: 200px;
`;

export const StyledDatePickerInput = styled.input`
  width: 100%;
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 36px 8px 12px";
      case "large":
        return "14px 45px 14px 20px";
      default:
        return "10px 40px 10px 16px";
    }
  }};
  border: 1.5px solid
    ${props => {
      if (props.disabled) return colors.borderDisabled;
      if (props.status === "error") return colors.danger;
      if (props.status === "success") return colors.success;
      if (props.status === "warning") return colors.warning;
      return colors.borderLight;
    }};
  border-radius: 10px;
  background-color: ${props => (props.disabled ? colors.bgFillLight : colors.bgWhite)};
  color: ${props => (props.disabled ? colors.textDisabled : colors.textPrimary)};
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
  outline: none;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
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

  /* Date picker icon styles */
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const StyledDatePickerIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => (props.disabled ? colors.textDisabled : colors.textSecondary)};
  pointer-events: none;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
`;
