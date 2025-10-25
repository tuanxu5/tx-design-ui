import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledSelectWrapper = styled.div`
  position: relative;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  min-width: 200px;
`;

export const StyledSelectButton = styled.button`
  width: 100%;
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 32px 8px 12px";
      case "large":
        return "14px 40px 14px 20px";
      default:
        return "10px 36px 10px 16px";
    }
  }};
  border: 1.5px solid
    ${props => {
      if (props.disabled) return colors.borderDisabled;
      if (props.status === "error") return colors.danger;
      if (props.status === "success") return colors.success;
      if (props.status === "warning") return colors.warning;
      return props.isOpen ? colors.primary : colors.borderLight;
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
  text-align: left;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover:not(:disabled) {
    border-color: ${props => (props.status === "error" ? colors.danger : colors.primary)};
  }

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryLight};
  }
`;

export const StyledSelectValue = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => (props.placeholder ? colors.placeholder : "inherit")};
`;

export const StyledSelectArrow = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${props => (props.isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${props => (props.disabled ? colors.textDisabled : colors.textSecondary)};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StyledSelectDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${colors.bgWhite};
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props => (props.isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.2s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.bgFill};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.borderDefault};
    border-radius: 3px;

    &:hover {
      background: ${colors.borderHover};
    }
  }
`;

export const StyledSelectOption = styled.div`
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 12px";
      case "large":
        return "12px 20px";
      default:
        return "10px 16px";
    }
  }};
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => (props.selected ? colors.bgPrimaryLighter : "transparent")};
  color: ${props => (props.selected ? colors.primary : colors.textPrimary)};
  font-weight: ${props => (props.selected ? "500" : "400")};

  &:hover {
    background-color: ${props => (props.selected ? colors.bgPrimaryLighter : colors.bgFill)};
  }

  &:active {
    background-color: ${colors.bgPrimaryLight};
  }
`;

export const StyledSelectEmpty = styled.div`
  padding: 20px 16px;
  text-align: center;
  color: ${colors.textSecondary};
  font-size: 14px;
`;
