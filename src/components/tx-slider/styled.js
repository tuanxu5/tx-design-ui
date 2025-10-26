import styled from "styled-components";
import { colors } from "../../theme/colors";

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? "not-allowed" : "default")};
`;

export const SliderContainer = styled.div`
  position: relative;
  flex: 1;
  height: 12px;
  display: flex;
  align-items: center;
`;

export const SliderTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${colors.background.secondary};
  border-radius: 2px;
`;

export const SliderFill = styled.div`
  position: absolute;
  height: 4px;
  background-color: ${props => (props.disabled ? colors.primary[300] : colors.primary[500])};
  border-radius: 2px;
  width: ${props => props.percent}%;
  transition: width 0.2s ease;
`;

export const SliderHandle = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: white;
  border: 2px solid ${props => (props.disabled ? colors.primary[300] : colors.primary[500])};
  border-radius: 50%;
  left: ${props => props.percent}%;
  transform: translateX(-50%);
  cursor: ${props => (props.disabled ? "not-allowed" : "grab")};
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    cursor: ${props => (props.disabled ? "not-allowed" : "grabbing")};
    transform: translateX(-50%) scale(1.05);
  }
`;

export const SliderInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  z-index: 1;

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    -webkit-appearance: none;
  }
`;

export const SliderValue = styled.div`
  min-width: 40px;
  font-size: 14px;
  color: ${colors.text.primary};
  text-align: center;
  font-weight: 400;
`;

export const SliderMarks = styled.div`
  position: absolute;
  width: 100%;
  top: 16px;
`;

export const SliderMark = styled.div`
  position: absolute;
  left: ${props => props.percent}%;
  transform: translateX(-50%);
  font-size: 12px;
  color: ${colors.text.secondary};
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 4px;
    background-color: ${colors.border.default};
  }
`;
