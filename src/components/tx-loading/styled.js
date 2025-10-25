import styled, { keyframes } from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoadingWrapper = styled.div`
  display: ${props => (props.fullscreen ? "flex" : "inline-flex")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  ${props =>
    props.fullscreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 9999;
  `}
`;

export const StyledSpinner = styled.div`
  width: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "48px";
      default:
        return "32px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "24px";
      case "large":
        return "48px";
      default:
        return "32px";
    }
  }};
  border: 3px solid ${props => props.color || colors.borderLight};
  border-top-color: ${props => props.spinnerColor || colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const StyledLoadingText = styled.div`
  color: ${props => props.color || colors.textSecondary};
  font-size: 14px;
  font-weight: 400;
`;
