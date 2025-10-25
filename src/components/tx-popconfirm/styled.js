import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledPopconfirmWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledPopconfirmContent = styled.div`
  position: absolute;
  z-index: 9999;
  background: ${colors.bgWhite};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  padding: 12px 16px;
  min-width: 200px;
  max-width: 300px;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;

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
          top: calc(100% + ${offset}px);
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
      switch (props.placement) {
        case "top":
          return `
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-top-color: ${colors.bgWhite};
          `;
        case "bottom":
          return `
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-color: ${colors.bgWhite};
          `;
        case "left":
          return `
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-left-color: ${colors.bgWhite};
          `;
        case "right":
          return `
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border-right-color: ${colors.bgWhite};
          `;
        default:
          return `
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-color: ${colors.bgWhite};
          `;
      }
    }}
  }
`;

export const StyledPopconfirmTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: ${colors.textPrimary};
  line-height: 1.5;
`;

export const StyledPopconfirmIcon = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: ${colors.warning};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledPopconfirmButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;
