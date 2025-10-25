import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledMenuWrapper = styled.div`
  width: ${props => (props.mode === "horizontal" ? "100%" : "256px")};
  background-color: ${colors.bgWhite};
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: flex;
  flex-direction: ${props => (props.mode === "horizontal" ? "row" : "column")};
  gap: 4px;
`;

export const StyledMenuItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  color: ${props => (props.active ? colors.primary : colors.textPrimary)};
  background-color: ${props => (props.active ? colors.primaryLight : "transparent")};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    background-color: ${props => (props.active ? colors.primaryLight : colors.bgFill)};
    color: ${colors.primary};
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

export const StyledSubMenu = styled.div``;

export const StyledSubMenuTitle = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  color: ${colors.textPrimary};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &:hover {
    background-color: ${colors.bgFill};
    color: ${colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
    transform: ${props => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

export const StyledSubMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 24px;
  display: ${props => (props.open ? "block" : "none")};
`;
