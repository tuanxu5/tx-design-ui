import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledBreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const StyledBreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => (props.isLast ? colors.textPrimary : colors.textSecondary)};

  a {
    color: ${colors.textSecondary};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const StyledBreadcrumbSeparator = styled.span`
  color: ${colors.textTertiary};
  user-select: none;
`;
