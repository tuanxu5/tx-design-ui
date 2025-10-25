import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledTabsWrapper = styled.div`
  width: 100%;
`;

export const StyledTabsList = styled.div`
  display: flex;
  gap: ${props => (props.type === "card" ? "4px" : "0")};
  border-bottom: ${props => (props.type === "line" ? `2px solid ${colors.borderLight}` : "none")};
  background-color: ${props => (props.type === "card" ? colors.bgFill : "transparent")};
  padding: ${props => (props.type === "card" ? "4px" : "0")};
  border-radius: ${props => (props.type === "card" ? "8px" : "0")};
`;

export const StyledTab = styled.button`
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 16px";
      case "large":
        return "16px 24px";
      default:
        return "12px 20px";
    }
  }};
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.active ? colors.primary : colors.textSecondary)};
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
  border-radius: ${props => (props.type === "card" ? "6px" : "0")};

  &:hover {
    color: ${colors.primary};
    background-color: ${props => (props.type === "card" ? colors.bgWhite : "transparent")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: ${colors.textTertiary};
  }

  ${props =>
    props.active &&
    props.type === "line" &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${colors.primary};
    }
  `}

  ${props =>
    props.active &&
    props.type === "card" &&
    `
    background-color: ${colors.bgWhite};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  `}
`;

export const StyledTabPanel = styled.div`
  padding: 24px 0;
  display: ${props => (props.active ? "block" : "none")};
`;
