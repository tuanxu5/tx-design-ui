import styled from "styled-components";
import colors from "../../theme/colors";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || "repeat(auto-fit, minmax(200px, 1fr))"};
  gap: ${props => props.gap || "16px"};
  width: 100%;
`;

const GridItem = styled.div`
  background: ${colors.bgFillLight};
  padding: 16px;
  border-radius: 8px;
`;

export const TxGrid = ({ columns, gap, children, ...props }) => {
  return (
    <GridContainer columns={columns} gap={gap} {...props}>
      {children}
    </GridContainer>
  );
};

export const TxGridItem = ({ children, ...props }) => {
  return <GridItem {...props}>{children}</GridItem>;
};
