import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const SnippetContainer = styled.div`
  background: ${colors.bgFillLight};
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: ${colors.bgFillMedium};
  border-bottom: 1px solid ${colors.borderLight};
`;

const Label = styled.span`
  font-size: 12px;
  color: ${colors.textSecondary};
`;

const CopyButton = styled.button`
  background: transparent;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;
  color: ${colors.primary};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const CodeBlock = styled.pre`
  margin: 0;
  padding: 12px 16px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 14px;
  overflow-x: auto;
`;

const TxSnippet = ({ code, language, label, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SnippetContainer {...props}>
      <Header>
        <Label>{label || language}</Label>
        <CopyButton onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</CopyButton>
      </Header>
      <CodeBlock>{code}</CodeBlock>
    </SnippetContainer>
  );
};

export default TxSnippet;
