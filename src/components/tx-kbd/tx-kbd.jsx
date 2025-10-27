import styled from "styled-components";
import colors from "../../theme/colors";

const KbdStyled = styled.kbd`
  display: inline-block;
  padding: 2px 8px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textPrimary};
  background: ${colors.bgFillLight};
  border: 1px solid ${colors.borderLight};
  border-radius: 4px;
  box-shadow: 0 1px 0 ${colors.borderMedium};
`;

const TxKbd = ({ children, ...props }) => {
  return <KbdStyled {...props}>{children}</KbdStyled>;
};

export default TxKbd;
