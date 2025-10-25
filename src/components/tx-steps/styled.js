import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledStepsWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === "vertical" ? "column" : "row")};
  gap: ${props => (props.direction === "vertical" ? "0" : "0")};
`;

export const StyledStep = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === "vertical" ? "row" : "column")};
  align-items: ${props => (props.direction === "vertical" ? "flex-start" : "center")};
  flex: ${props => (props.direction === "vertical" ? "none" : "1")};
  position: relative;

  ${props =>
    props.direction === "horizontal" &&
    !props.isLast &&
    `
    &::after {
      content: "";
      position: absolute;
      top: 16px;
      left: calc(50% + 24px);
      right: calc(-50% + 24px);
      height: 2px;
      background-color: ${props.status === "finish" ? colors.primary : colors.borderLight};
    }
  `}
`;

export const StyledStepIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  z-index: 1;
  transition: all 0.2s ease;

  ${props => {
    switch (props.status) {
      case "finish":
        return `
          background-color: ${colors.primary};
          color: ${colors.textWhite};
          border: 2px solid ${colors.primary};
        `;
      case "process":
        return `
          background-color: ${colors.bgWhite};
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
        `;
      case "error":
        return `
          background-color: ${colors.bgWhite};
          color: ${colors.danger};
          border: 2px solid ${colors.danger};
        `;
      default:
        return `
          background-color: ${colors.bgWhite};
          color: ${colors.textTertiary};
          border: 2px solid ${colors.borderLight};
        `;
    }
  }}

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StyledStepContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.direction === "vertical" ? "0" : "8px")};
  margin-left: ${props => (props.direction === "vertical" ? "12px" : "0")};
  padding-bottom: ${props => (props.direction === "vertical" && !props.isLast ? "24px" : "0")};
  position: relative;

  ${props =>
    props.direction === "vertical" &&
    !props.isLast &&
    `
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -28px;
      bottom: 0;
      width: 2px;
      background-color: ${props.status === "finish" ? colors.primary : colors.borderLight};
    }
  `}
`;

export const StyledStepTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => {
    switch (props.status) {
      case "finish":
      case "process":
        return colors.textPrimary;
      case "error":
        return colors.danger;
      default:
        return colors.textTertiary;
    }
  }};
  margin-bottom: 4px;
`;

export const StyledStepDescription = styled.div`
  font-size: 12px;
  color: ${colors.textSecondary};
`;
