import styled from "styled-components";
import { colors } from "../../theme/colors";

export const BadgeWrapper = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1;
`;

export const BadgeContent = styled.sup`
  position: absolute;
  top: ${props => (props.dot ? "-4px" : "0")};
  right: ${props => (props.dot ? "-4px" : "0")};
  transform: ${props => (props.dot ? "none" : "translate(50%, -50%)")};
  transform-origin: 100% 0%;
  z-index: 1;
  min-width: ${props => (props.dot ? "6px" : "20px")};
  height: ${props => (props.dot ? "6px" : "20px")};
  padding: ${props => (props.dot ? "0" : "0 6px")};
  font-size: ${props => (props.dot ? "0" : "12px")};
  font-weight: 600;
  line-height: ${props => (props.dot ? "6px" : "20px")};
  text-align: center;
  background-color: ${props => {
    switch (props.status) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.danger[500];
    }
  }};
  color: white;
  border-radius: ${props => (props.dot ? "50%" : "10px")};
  box-shadow: 0 0 0 1px #fff;
  white-space: nowrap;
  transition: all 0.3s ease;

  ${props =>
    props.showZero === false &&
    props.count === 0 &&
    `
    display: none;
  `}

  ${props =>
    props.overflowCount &&
    props.count > props.overflowCount &&
    `
    padding: 0 8px;
  `}
`;

export const BadgeStandalone = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: white;
  background-color: ${props => {
    switch (props.status) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.primary[500];
    }
  }};
  border-radius: 10px;
  white-space: nowrap;
  transition: all 0.3s ease;
`;

export const BadgeRibbon = styled.div`
  position: absolute;
  top: 8px;
  right: ${props => (props.placement === "start" ? "auto" : "-8px")};
  left: ${props => (props.placement === "start" ? "-8px" : "auto")};
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: ${props => {
    switch (props.status) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.primary[500];
    }
  }};
  border-radius: 2px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    ${props => (props.placement === "start" ? "left" : "right")}: 0;
    width: 8px;
    height: 8px;
    background-color: ${props => {
      switch (props.status) {
        case "success":
          return colors.success[700];
        case "error":
          return colors.danger[700];
        case "warning":
          return colors.warning[700];
        case "processing":
          return colors.info[700];
        default:
          return colors.primary[700];
      }
    }};
    clip-path: polygon(${props => (props.placement === "start" ? "0 0, 100% 0, 0 100%" : "0 0, 100% 0, 100% 100%")});
  }
`;

export const RibbonWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
