import styled, { keyframes } from "styled-components";
import colors from "../../theme/colors";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const MessageContainer = styled.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 500px;
  pointer-events: auto;
  animation: ${props => (props.isClosing ? slideUp : slideDown)} 0.3s ease;

  ${props => {
    switch (props.type) {
      case "success":
        return `border-left: 4px solid ${colors.success[500]};`;
      case "error":
        return `border-left: 4px solid ${colors.danger[500]};`;
      case "warning":
        return `border-left: 4px solid ${colors.warning[500]};`;
      case "info":
        return `border-left: 4px solid ${colors.info[500]};`;
      default:
        return `border-left: 4px solid ${colors.primary[500]};`;
    }
  }}
`;

export const MessageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;
  }

  ${props => {
    switch (props.type) {
      case "success":
        return `color: ${colors.success[500]};`;
      case "error":
        return `color: ${colors.danger[500]};`;
      case "warning":
        return `color: ${colors.warning[500]};`;
      case "info":
        return `color: ${colors.info[500]};`;
      default:
        return `color: ${colors.primary[500]};`;
    }
  }}
`;

export const MessageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MessageTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.textPrimary};
  line-height: 1.4;
`;

export const MessageDescription = styled.div`
  font-size: 13px;
  color: ${colors.textSecondary};
  line-height: 1.4;
  font-weight: 400;
`;

export const MessageClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${colors.textSecondary};
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.textPrimary};
    transform: scale(1.1);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
