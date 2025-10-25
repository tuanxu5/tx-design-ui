import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledDropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: ${props => {
    switch (props.placement) {
      case "topLeft":
      case "bottomLeft":
        return "0";
      case "topRight":
      case "bottomRight":
        return "auto";
      default:
        return "0";
    }
  }};
  right: ${props => {
    switch (props.placement) {
      case "topRight":
      case "bottomRight":
        return "0";
      default:
        return "auto";
    }
  }};
  bottom: ${props => {
    if (props.placement === "topLeft" || props.placement === "topRight") {
      return "calc(100% + 8px)";
    }
    return "auto";
  }};
  min-width: 160px;
  background-color: ${colors.bgWhite};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  padding: 8px;
  z-index: 1000;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transform: ${props => (props.visible ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.2s ease;
`;

export const StyledDropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  color: ${props => (props.danger ? colors.danger : colors.textPrimary)};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    background-color: ${props => (props.danger ? colors.dangerLight : colors.bgFill)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: ${colors.textTertiary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StyledDropdownDivider = styled.div`
  height: 1px;
  background-color: ${colors.borderLight};
  margin: 4px 0;
`;
