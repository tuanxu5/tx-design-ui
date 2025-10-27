import { useState } from "react";
import styled from "styled-components";
import { TxIconOutline } from "../../assets/icons/outline";
import colors from "../../theme/colors";

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${props => (props.compact ? "4px 8px" : "8px 16px")};
  background: ${props => (props.copied ? colors.successLight : colors.bgFillLight)};
  border: 1px solid ${colors.borderLight};
  border-radius: 6px;
  color: ${props => (props.copied ? colors.success : colors.textPrimary)};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => (props.copied ? colors.successLight : colors.bgFillMedium)};
    border-color: ${props => (props.copied ? colors.success : colors.borderMedium)};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const TxCopy = ({ text, compact = false, children, onCopy, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (onCopy) onCopy(text);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <CopyButton compact={compact} copied={copied ? 1 : 0} onClick={handleCopy} {...props}>
      {copied ? (
        <>
          <TxIconOutline.IconCheck style={{ width: "16px", height: "16px" }} />
          Copied!
        </>
      ) : (
        <>
          <TxIconOutline.IconCrossSmall style={{ width: "16px", height: "16px" }} />
          {children || "Copy"}
        </>
      )}
    </CopyButton>
  );
};

export default TxCopy;
