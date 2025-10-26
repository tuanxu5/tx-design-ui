import styled from "styled-components";
import colors from "../../theme/colors";

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: transform ${props => props.speed}ms ease-in-out;
  transform: translateX(-${props => props.currentSlide * 100}%);
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgFillLight};
  border-radius: 8px;
  min-height: ${props => props.height || "300px"};
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => (props.direction === "prev" ? "left: 16px;" : "right: 16px;")}
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${colors.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

export const CarouselDot = styled.button`
  width: ${props => (props.active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  border: none;
  background-color: ${props => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: white;
  }
`;

export const CarouselCounter = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 4px 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  z-index: 2;
`;
