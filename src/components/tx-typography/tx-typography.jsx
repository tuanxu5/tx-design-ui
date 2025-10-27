import styled from "styled-components";
import colors from "../../theme/colors";

const TypographyBase = styled.div`
  color: ${props => props.color || colors.textPrimary};
  font-size: ${props => props.size || "16px"};
  font-weight: ${props => props.weight || "400"};
  line-height: ${props => props.lineHeight || "1.5"};
  text-align: ${props => props.align || "left"};
  margin: ${props => props.margin || "0"};

  ${props =>
    props.variant === "h1" &&
    `
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
  `}

  ${props =>
    props.variant === "h2" &&
    `
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
  `}

  ${props =>
    props.variant === "h3" &&
    `
    font-size: 28px;
    font-weight: 600;
    line-height: 1.3;
  `}

  ${props =>
    props.variant === "h4" &&
    `
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
  `}

  ${props =>
    props.variant === "body" &&
    `
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `}

  ${props =>
    props.variant === "caption" &&
    `
    font-size: 14px;
    color: ${colors.textSecondary};
  `}

  ${props =>
    props.ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

const TxTypography = ({ children, variant, as, ...props }) => {
  const tag = as || (variant && variant.startsWith("h") ? variant : "div");

  return (
    <TypographyBase variant={variant} as={tag} {...props}>
      {children}
    </TypographyBase>
  );
};

export default TxTypography;
