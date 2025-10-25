import styled, { keyframes } from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledNotificationContainer = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  pointer-events: none;
`;

export const StyledNotification = styled.div`
  background: ${colors.bgWhite};
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  padding: 16px 24px;
  min-width: 384px;
  display: flex;
  gap: 12px;
  animation: ${slideInRight} 0.3s ease;
  pointer-events: all;
  border-left: 4px solid
    ${props => {
      switch (props.type) {
        case "success":
          return colors.success;
        case "error":
          return colors.danger;
        case "warning":
          return colors.warning;
        case "info":
          return colors.info;
        default:
          return colors.primary;
      }
    }};
`;

export const StyledNotificationIcon = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: ${props => {
    switch (props.type) {
      case "success":
        return colors.success;
      case "error":
        return colors.danger;
      case "warning":
        return colors.warning;
      case "info":
        return colors.info;
      default:
        return colors.primary;
    }
  }};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledNotificationContent = styled.div`
  flex: 1;
`;

export const StyledNotificationTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 4px;
`;

export const StyledNotificationDescription = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
  line-height: 1.5;
`;

export const StyledNotificationClose = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${colors.textTertiary};
  width: 20px;
  height: 20px;
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
    width: 16px;
    height: 16px;
  }
`;
