import styled, { keyframes } from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideInBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const StyledDrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

export const StyledDrawerContent = styled.div`
  position: fixed;
  background: ${colors.bgWhite};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 1001;

  ${props => {
    switch (props.placement) {
      case "left":
        return `
          top: 0;
          left: 0;
          bottom: 0;
          width: ${props.width || "378px"};
          animation: ${slideInLeft} 0.3s ease;
        `;
      case "right":
        return `
          top: 0;
          right: 0;
          bottom: 0;
          width: ${props.width || "378px"};
          animation: ${slideInRight} 0.3s ease;
        `;
      case "top":
        return `
          top: 0;
          left: 0;
          right: 0;
          height: ${props.height || "378px"};
          animation: ${slideInTop} 0.3s ease;
        `;
      case "bottom":
        return `
          bottom: 0;
          left: 0;
          right: 0;
          height: ${props.height || "378px"};
          animation: ${slideInBottom} 0.3s ease;
        `;
      default:
        return `
          top: 0;
          right: 0;
          bottom: 0;
          width: ${props.width || "378px"};
          animation: ${slideInRight} 0.3s ease;
        `;
    }
  }}
`;

export const StyledDrawerHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${colors.borderLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDrawerTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

export const StyledDrawerClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.bgFill};
    color: ${colors.textPrimary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledDrawerBody = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;

export const StyledDrawerFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid ${colors.borderLight};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;
