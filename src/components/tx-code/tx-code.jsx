import styled from "styled-components";
import colors from "../../theme/colors";

const CodeContainer = styled.code`
  padding: ${props => (props.block ? "12px 16px" : "2px 6px")};
  background: ${props => (props.variant === "outlined" ? "transparent" : colors.bgFillLight)};
  border: ${props => (props.variant === "outlined" ? `1px solid ${colors.borderLight}` : "none")};
  border-radius: 4px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: ${props => props.size || "14px"};
  color: ${colors.textPrimary};
  display: ${props => (props.block ? "block" : "inline")};
  ${props =>
    props.block &&
    `
    white-space: pre-wrap;
    word-break: break-all;
  `}
`;

const TxCode = ({ children, block = false, variant = "default", size, ...props }) => {
  return (
    <CodeContainer block={block ? 1 : 0} variant={variant} size={size} {...props}>
      {children}
    </CodeContainer>
  );
};

export default TxCode;
