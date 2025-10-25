import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${colors.borderLight};
  border-radius: 12px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background: ${colors.bgWhite};
`;

export const StyledTableHead = styled.thead`
  background-color: ${colors.bgFill};
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${colors.borderLight};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  ${props =>
    props.hoverable &&
    `
    &:hover {
      background-color: ${colors.bgFillLight};
    }
  `}
`;

export const StyledTableHeader = styled.th`
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 12px";
      case "large":
        return "20px 16px";
      default:
        return "12px 16px";
    }
  }};
  text-align: ${props => props.align || "left"};
  font-weight: 600;
  color: ${colors.textPrimary};
  white-space: nowrap;
`;

export const StyledTableCell = styled.td`
  padding: ${props => {
    switch (props.size) {
      case "small":
        return "8px 12px";
      case "large":
        return "20px 16px";
      default:
        return "12px 16px";
    }
  }};
  text-align: ${props => props.align || "left"};
  color: ${colors.textSecondary};
`;

export const StyledEmptyText = styled.div`
  padding: 48px 24px;
  text-align: center;
  color: ${colors.textTertiary};
  font-size: 14px;
`;
