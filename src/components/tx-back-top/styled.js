import styled from "styled-components";
import colors from "../../theme/colors";

export const BackTopButton = styled.button`
  position: fixed;
  right: ${props => props.right || "48px"};
  bottom: ${props => props.bottom || "48px"};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 188, 255, 0.4);
  transition: all 0.3s;
  z-index: 1000;
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? "auto" : "none")};

  &:hover {
    background-color: ${colors.primaryDark};
    box-shadow: 0 6px 16px rgba(0, 188, 255, 0.5);
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
