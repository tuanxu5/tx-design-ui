import styled from "styled-components";
import colors from "../../theme/colors";

export const ResultContainer = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ResultIcon = styled.div`
  margin-bottom: 24px;
  font-size: 72px;
  line-height: 1;
  color: ${props => {
    const { status } = props;
    const colorMap = {
      success: colors.success,
      error: colors.error,
      warning: colors.warning,
      info: colors.info,
    };
    return colorMap[status] || colors.textPrimary;
  }};
`;

export const ResultTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin: 0 0 16px;
`;

export const ResultSubtitle = styled.p`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin: 0 0 24px;
  max-width: 500px;
`;

export const ResultExtra = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
