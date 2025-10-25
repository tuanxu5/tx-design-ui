import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledColorPickerWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const StyledColorPickerInput = styled.input`
  width: ${props => {
    switch (props.size) {
      case "small":
        return "32px";
      case "large":
        return "48px";
      default:
        return "40px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "32px";
      case "large":
        return "48px";
      default:
        return "40px";
    }
  }};
  border: 2px solid ${props => (props.disabled ? colors.borderDisabled : colors.borderDefault)};
  border-radius: 8px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryLight};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 6px;
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: 6px;
  }
`;

export const StyledColorPickerLabel = styled.span`
  font-size: 14px;
  color: ${props => (props.disabled ? colors.textDisabled : colors.textPrimary)};
  font-weight: 400;
`;

export const StyledColorValue = styled.input`
  padding: 8px 12px;
  border: 1.5px solid ${colors.borderLight};
  border-radius: 6px;
  font-size: 14px;
  color: ${colors.textPrimary};
  background-color: ${props => (props.disabled ? colors.bgFillLight : colors.bgWhite)};
  outline: none;
  width: 100px;
  font-family: monospace;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${colors.primary};
  }

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryLight};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.textDisabled};
  }
`;

export const StyledColorPresets = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const StyledPresetColor = styled.button`
  width: 28px;
  height: 28px;
  border: 2px solid ${props => (props.selected ? colors.primary : colors.borderDefault)};
  border-radius: 6px;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => (props.selected ? `0 0 0 2px ${colors.primaryLight}` : "none")};

  &:hover {
    border-color: ${colors.primary};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
