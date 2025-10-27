import styled from "styled-components";
import colors from "../../theme/colors";

export const AlertContainer = styled.div`
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid;
  background-color: ${props => {
    const { type } = props;
    const colorMap = {
      success: colors.success + "08",
      info: colors.info + "08",
      warning: colors.warning + "08",
      error: colors.error + "08",
    };
    return colorMap[type] || colors.bgFillLight;
  }};
  border-color: ${props => {
    const { type } = props;
    const colorMap = {
      success: colors.success,
      info: colors.info,
      warning: colors.warning,
      error: colors.error,
    };
    return colorMap[type] || colors.borderDefault;
  }};
  display: flex;
  align-items: flex-start;
  gap: 12px;

  ${props =>
    props.closable &&
    `
    padding-right: 32px;
  `}
`;

export const AlertIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => {
    const { type } = props;
    const colorMap = {
      success: colors.success,
      info: colors.info,
      warning: colors.warning,
      error: colors.error,
    };
    return colorMap[type] || colors.textSecondary;
  }};
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AlertContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AlertTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.textPrimary};
  line-height: 1.5;
`;

export const AlertDescription = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
  line-height: 1.5;
`;

export const AlertClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: ${colors.textPrimary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
