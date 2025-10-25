import { useState } from "react";
import styled from "styled-components";
import { SvgIcon } from "../assets/icons";
import TxInput from "../components/tx-input/tx-input";
import colors from "../theme/colors";

const IconLibraryStory = {
  title: "tx-design-ui/Foundation/Icons",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default IconLibraryStory;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    background-color: ${colors.primaryLight};
  }

  svg {
    width: 32px;
    height: 32px;
    color: ${colors.textPrimary};
    margin-bottom: 12px;
  }
`;

const IconName = styled.div`
  font-size: 12px;
  color: ${colors.textSecondary};
  text-align: center;
  word-break: break-all;
`;

const SearchWrapper = styled.div`
  max-width: 400px;
  margin-bottom: 16px;
`;

const StatsText = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-bottom: 8px;
`;

const CopiedToast = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  background-color: ${colors.success};
  color: ${colors.textWhite};
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const AllIcons = () => {
  const AllIconsComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [copied, setCopied] = useState(false);

    const iconEntries = Object.entries(SvgIcon);

    const filteredIcons = iconEntries.filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleCopy = iconName => {
      navigator.clipboard.writeText(`import { ${iconName} } from "tx-design-ui/assets/icons";`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div>
        <h2>Icon Library</h2>
        <SearchWrapper>
          <TxInput
            placeholder="Search icons..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            allowClear
          />
        </SearchWrapper>
        <StatsText>
          Showing {filteredIcons.length} of {iconEntries.length} icons
        </StatsText>
        <IconGrid>
          {filteredIcons.map(([name, Icon]) => (
            <IconCard key={name} onClick={() => handleCopy(name)} title="Click to copy import statement">
              <Icon />
              <IconName>{name}</IconName>
            </IconCard>
          ))}
        </IconGrid>
        {copied && <CopiedToast>✓ Copied to clipboard!</CopiedToast>}
      </div>
    );
  };

  return <AllIconsComponent />;
};

export const Usage = () => {
  return (
    <div>
      <h3>How to use icons</h3>
      <pre
        style={{
          backgroundColor: colors.bgFill,
          padding: "16px",
          borderRadius: "8px",
          overflow: "auto",
        }}
      >
        {`import { SvgIcon } from "tx-design-ui/assets/icons";

// Use individual icon
const MyComponent = () => {
  return <SvgIcon.IconCheck />;
};

// Or import specific icons
import { IconCheck, IconXClose } from "tx-design-ui/assets/icons";

const MyComponent = () => {
  return (
    <div>
      <IconCheck />
      <IconXClose />
    </div>
  );
};`}
      </pre>
    </div>
  );
};
