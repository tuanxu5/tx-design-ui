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

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

export const StyledModalContent = styled.div`
  background: ${colors.bgWhite};
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  max-width: ${props => (props.width ? props.width : "520px")};
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideDown} 0.3s ease;
`;

export const StyledModalHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${colors.borderLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

export const StyledModalClose = styled.button`
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

export const StyledModalBody = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;

export const StyledModalFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid ${colors.borderLight};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;
