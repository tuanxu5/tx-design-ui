import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "2px 8px";
      case "large":
        return "6px 16px";
      default:
        return "4px 12px";
    }
  }};
  border-radius: 4px;
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "12px";
      case "large":
        return "16px";
      default:
        return "14px";
    }
  }};
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: ${props => (props.closable ? "default" : "inherit")};

  /* Color variants */
  ${props => {
    const colorMap = {
      default: { bg: colors.bgFill, color: colors.textPrimary, border: colors.borderDefault },
      primary: { bg: colors.primaryLight, color: colors.primary, border: colors.primary },
      success: { bg: `${colors.success}15`, color: colors.success, border: colors.success },
      warning: { bg: `${colors.warning}15`, color: colors.warning, border: colors.warning },
      danger: { bg: colors.dangerLight, color: colors.danger, border: colors.danger },
      info: { bg: `${colors.info}15`, color: colors.info, border: colors.info },
    };

    const style = colorMap[props.color] || colorMap.default;

    return `
      background-color: ${style.bg};
      color: ${style.color};
      border-color: ${props.bordered ? style.border : "transparent"};
    `;
  }}
`;

export const StyledTagClose = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  width: 14px;
  height: 14px;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
