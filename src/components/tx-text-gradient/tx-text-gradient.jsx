import styled from "styled-components";

const GradientText = styled.span`
  background: ${props => props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${props => props.weight || "600"};
  font-size: ${props => props.size || "inherit"};
`;

const TxTextGradient = ({ children, gradient, weight, size, ...props }) => {
  return (
    <GradientText gradient={gradient} weight={weight} size={size} {...props}>
      {children}
    </GradientText>
  );
};

export default TxTextGradient;
