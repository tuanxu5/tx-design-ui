import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledTooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledTooltipContent = styled.div`
  position: absolute;
  z-index: 9999;
  padding: 6px 12px;
  background-color: ${props => props.color || colors.primary};
  color: ${colors.textWhite};
  font-size: 12px;
  line-height: 1.5;
  border-radius: 6px;
  white-space: nowrap;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;
  pointer-events: none;
  max-width: 300px;
  word-wrap: break-word;
  white-space: normal;

  ${props => {
    const offset = 8;
    switch (props.placement) {
      case "top":
        return `
          bottom: calc(100% + ${offset}px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return `
          top: calc(100% + ${offset}px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case "left":
        return `
          right: calc(100% + ${offset}px);
          top: 50%;
          transform: translateY(-50%);
        `;
      case "right":
        return `
          left: calc(100% + ${offset}px);
          top: 50%;
          transform: translateY(-50%);
        `;
      default:
        return `
          bottom: calc(100% + ${offset}px);
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  &::after {
    content: "";
    position: absolute;
    border: 6px solid transparent;

    ${props => {
      const color = props.color || colors.primary;
      switch (props.placement) {
        case "top":
          return `
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-top-color: ${color};
          `;
        case "bottom":
          return `
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-color: ${color};
          `;
        case "left":
          return `
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-left-color: ${color};
          `;
        case "right":
          return `
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-right-color: ${color};
          `;
        default:
          return `
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-top-color: ${color};
          `;
      }
    }}
  }
`;
