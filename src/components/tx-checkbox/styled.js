import styled from "styled-components";
import colors from "../../theme/colors";
import "../../styles/shorten.scss";

export const StyledCheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;

  &.tx-ui-tx-checkbox--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckboxBox = styled.span`
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
  border-radius: 4px;
  background-color: ${props => (props.checked ? (props.danger ? colors.danger : colors.primary) : colors.bgWhite)};
  transition: all 0.2s ease;
  flex-shrink: 0;

  svg {
    width: ${props => {
      switch (props.size) {
        case "small":
          return "10px";
        case "large":
          return "14px";
        default:
          return "12px";
      }
    }};
    height: ${props => {
      switch (props.size) {
        case "small":
          return "10px";
        case "large":
          return "14px";
        default:
          return "12px";
      }
    }};
    color: ${colors.textWhite};
    opacity: ${props => (props.checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  ${StyledCheckboxInput}:focus + & {
    outline: 2px solid ${props => (props.danger ? colors.dangerHover : colors.primaryLight)};
    outline-offset: 2px;
  }

  ${StyledCheckboxWrapper}:hover & {
    border-color: ${props => (props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderHover)};
  }

  ${StyledCheckboxWrapper}.tx-ui-tx-checkbox--disabled & {
    background-color: ${props => (props.checked ? colors.borderDefault : colors.bgFillLight)};
    border-color: ${colors.borderDefault};
    cursor: not-allowed;
  }

  ${StyledCheckboxWrapper}.tx-ui-tx-checkbox--disabled:hover & {
    border-color: ${colors.borderDefault};
  }

  &.tx-ui-tx-checkbox-box--indeterminate {
    background-color: ${props => (props.danger ? colors.danger : colors.primary)};
    border-color: ${props => (props.danger ? colors.danger : colors.primary)};

    &::after {
      content: "";
      position: absolute;
      width: 60%;
      height: 2px;
      background-color: ${colors.textWhite};
    }
  }
`;

export const StyledCheckboxLabel = styled.span`
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

  ${StyledCheckboxWrapper}.tx-ui-tx-checkbox--disabled & {
    color: ${colors.textTertiary};
  }
`;
