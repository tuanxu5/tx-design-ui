import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledRadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;

  &.tx-ui-tx-radio--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledRadioCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
  border: 2px solid ${props => (props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderDefault)};
  border-radius: 50%;
  background-color: ${colors.bgWhite};
  transition: all 0.2s ease;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: ${props => {
      switch (props.size) {
        case "small":
          return "6px";
        case "large":
          return "10px";
        default:
          return "8px";
      }
    }};
    height: ${props => {
      switch (props.size) {
        case "small":
          return "6px";
        case "large":
          return "10px";
        default:
          return "8px";
      }
    }};
    border-radius: 50%;
    background-color: ${props => (props.danger ? colors.danger : colors.primary)};
    opacity: ${props => (props.checked ? 1 : 0)};
    transform: scale(${props => (props.checked ? 1 : 0)});
    transition: all 0.2s ease;
  }

  ${StyledRadioInput}:focus + & {
    outline: 2px solid ${props => (props.danger ? colors.dangerHover : colors.primaryLight)};
    outline-offset: 2px;
  }

  ${StyledRadioWrapper}:hover & {
    border-color: ${props => (props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderHover)};
  }

  ${StyledRadioWrapper}.tx-ui-tx-radio--disabled & {
    background-color: ${colors.bgFillLight};
    border-color: ${colors.borderDefault};
    cursor: not-allowed;

    &::after {
      background-color: ${colors.textDisabled};
    }
  }

  ${StyledRadioWrapper}.tx-ui-tx-radio--disabled:hover & {
    border-color: ${colors.borderDefault};
  }
`;

export const StyledRadioLabel = styled.span`
  color: ${props => props.color || colors.textPrimary};
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "12px";
      case "large":
        return "16px";
      default:
        return "14px";
    }
  }};
  font-weight: 400;
  line-height: 1.5;

  ${StyledRadioWrapper}.tx-ui-tx-radio--disabled & {
    color: ${colors.textTertiary};
  }
`;

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === "horizontal" ? "row" : "column")};
  gap: ${props => (props.direction === "horizontal" ? "16px" : "8px")};
  flex-wrap: ${props => (props.direction === "horizontal" ? "wrap" : "nowrap")};
`;
