import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.align || "stretch"};
  justify-content: ${props => props.justify || "flex-start"};
  gap: ${props => props.gap || "0"};
  width: ${props => props.width || "100%"};
`;

const TxFlex = ({ direction, align, justify, gap, width, children, ...props }) => {
  return (
    <FlexContainer direction={direction} align={align} justify={justify} gap={gap} width={width} {...props}>
      {children}
    </FlexContainer>
  );
};

export default TxFlex;
