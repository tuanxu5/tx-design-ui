import styled from "styled-components";
import colors from "../../theme/colors";

const CardContainer = styled.div`
  background: ${props => (props.variant === "outlined" ? "transparent" : colors.bgFillLight)};
  border: 1px solid ${colors.borderLight};
  border-radius: ${props => props.radius || "8px"};
  padding: ${props => props.padding || "24px"};
  transition: all 0.2s;
  ${props =>
    props.hoverable &&
    `
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  `}
`;

const CardHeader = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
`;

const CardBody = styled.div``;

const CardFooter = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${colors.borderLight};
`;

export const TxCard = ({ title, children, extra, footer, hoverable, ...props }) => {
  return (
    <CardContainer hoverable={hoverable} {...props}>
      {title && (
        <CardHeader>
          {title} {extra && <span style={{ float: "right" }}>{extra}</span>}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};
