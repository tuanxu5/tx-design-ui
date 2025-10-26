import styled from "styled-components";
import colors from "../../theme/colors";

export const SwitchWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  gap: 8px;
`;

export const SwitchInput = styled.input`
  display: none;
`;

export const SwitchSlider = styled.span`
  position: relative;
  display: inline-block;
  width: ${props => (props.size === "small" ? "28px" : props.size === "large" ? "48px" : "38px")};
  height: ${props => (props.size === "small" ? "16px" : props.size === "large" ? "26px" : "22px")};
  background-color: ${props =>
    props.checked ? (props.disabled ? colors.primary[300] : colors.primary[500]) : "rgba(0, 0, 0, 0.25)"};
  border-radius: ${props => (props.size === "small" ? "8px" : props.size === "large" ? "13px" : "11px")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    height: ${props => (props.size === "small" ? "12px" : props.size === "large" ? "22px" : "18px")};
    width: ${props => (props.size === "small" ? "12px" : props.size === "large" ? "22px" : "18px")};
    left: ${({ checked, size }) =>
      checked ? `calc(100% - ${size === "small" ? "14px" : size === "large" ? "24px" : "20px"})` : "2px"};
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const SwitchLabel = styled.span`
  font-size: 14px;
  color: ${colors.textPrimary};
  user-select: none;
  font-weight: 400;
`;

export const LoadingIcon = styled.div`
  display: inline-block;
  width: ${props => (props.size === "small" ? "10px" : props.size === "large" ? "16px" : "14px")};
  height: ${props => (props.size === "small" ? "10px" : props.size === "large" ? "16px" : "14px")};
  border: 2px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.6s linear infinite;
  position: absolute;
  top: 50%;
  left: ${props => (props.checked ? "auto" : "50%")};
  right: ${props => (props.checked ? "50%" : "auto")};
  transform: translate(${props => (props.checked ? "50%" : "-50%")}, -50%);

  @keyframes spin {
    to {
      transform: translate(${props => (props.checked ? "50%" : "-50%")}, -50%) rotate(360deg);
    }
  }
`;
