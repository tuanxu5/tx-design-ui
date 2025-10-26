import styled, { keyframes } from "styled-components";
import { colors } from "../../theme/colors";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ProgressWrapper = styled.div`
  width: 100%;
`;

export const ProgressLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProgressTrack = styled.div`
  flex: 1;
  height: ${props => {
    switch (props.size) {
      case "small":
        return "6px";
      case "large":
        return "12px";
      default:
        return "8px";
    }
  }};
  background-color: ${colors.background.secondary};
  border-radius: ${props => {
    switch (props.size) {
      case "small":
        return "3px";
      case "large":
        return "6px";
      default:
        return "4px";
    }
  }};
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${props => {
    if (props.status === "exception") return colors.danger[500];
    if (props.status === "success") return colors.success[500];
    return colors.primary[500];
  }};
  border-radius: ${props => {
    switch (props.size) {
      case "small":
        return "3px";
      case "large":
        return "6px";
      default:
        return "4px";
    }
  }};
  width: ${props => props.percent}%;
  transition: width 0.3s ease;
  position: relative;

  ${props =>
    props.showInfo &&
    props.format &&
    `
    &::after {
      content: "${props.format}";
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-size: 12px;
      font-weight: 600;
    }
  `}
`;

export const ProgressText = styled.div`
  font-size: 14px;
  color: ${colors.text.primary};
  min-width: 40px;
  text-align: right;
  font-weight: 500;

  ${props =>
    props.status === "exception" &&
    `
    color: ${colors.danger[500]};
  `}

  ${props =>
    props.status === "success" &&
    `
    color: ${colors.success[500]};
  `}

  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
`;

export const ProgressCircle = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
`;

export const ProgressCircleSvg = styled.svg`
  transform: rotate(-90deg);
`;

export const ProgressCircleTrack = styled.circle`
  fill: none;
  stroke: ${colors.background.secondary};
  stroke-width: ${props => props.strokeWidth};
`;

export const ProgressCirclePath = styled.circle`
  fill: none;
  stroke: ${props => {
    if (props.status === "exception") return colors.danger[500];
    if (props.status === "success") return colors.success[500];
    return colors.primary[500];
  }};
  stroke-width: ${props => props.strokeWidth};
  stroke-linecap: round;
  stroke-dasharray: ${props => props.circumference};
  stroke-dashoffset: ${props => props.offset};
  transition: stroke-dashoffset 0.3s ease;
`;

export const ProgressCircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${props => (props.width < 80 ? "12px" : "16px")};
  font-weight: 600;
  color: ${colors.text.primary};
  text-align: center;
  line-height: 1;

  ${props =>
    props.status === "exception" &&
    `
    color: ${colors.danger[500]};
  `}

  ${props =>
    props.status === "success" &&
    `
    color: ${colors.success[500]};
  `}

  svg {
    width: ${props => (props.width < 80 ? "16px" : "24px")};
    height: ${props => (props.width < 80 ? "16px" : "24px")};
  }
`;

export const ProgressSteps = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ProgressStep = styled.div`
  flex: 1;
  height: ${props => {
    switch (props.size) {
      case "small":
        return "6px";
      case "large":
        return "12px";
      default:
        return "8px";
    }
  }};
  background-color: ${props =>
    props.active
      ? props.status === "exception"
        ? colors.danger[500]
        : props.status === "success"
        ? colors.success[500]
        : colors.primary[500]
      : colors.background.secondary};
  border-radius: ${props => {
    switch (props.size) {
      case "small":
        return "3px";
      case "large":
        return "6px";
      default:
        return "4px";
    }
  }};
  transition: background-color 0.3s ease;
`;
