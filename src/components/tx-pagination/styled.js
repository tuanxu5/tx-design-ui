import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledPaginationItem = styled.button`
  min-width: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "40px";
      default:
        return "32px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "40px";
      default:
        return "32px";
    }
  }};
  padding: 0 ${props => (props.size === "small" ? "6px" : props.size === "large" ? "12px" : "8px")};
  border: 1px solid ${props => (props.active ? colors.primary : colors.borderLight)};
  border-radius: 6px;
  background-color: ${props => (props.active ? colors.primary : colors.bgWhite)};
  color: ${props => (props.active ? colors.textWhite : colors.textPrimary)};
  font-size: ${props => (props.size === "small" ? "12px" : "14px")};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${colors.primary};
    color: ${props => (props.active ? colors.textWhite : colors.primary)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${colors.bgFill};
    border-color: ${colors.borderLight};
    color: ${colors.textTertiary};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const StyledPaginationEllipsis = styled.span`
  min-width: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "40px";
      default:
        return "32px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "40px";
      default:
        return "32px";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textTertiary};
  font-size: ${props => (props.size === "small" ? "12px" : "14px")};
`;
