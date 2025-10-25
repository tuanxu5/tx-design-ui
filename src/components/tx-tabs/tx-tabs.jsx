import PropTypes from "prop-types";
import { useState } from "react";
import { StyledTab, StyledTabPanel, StyledTabsList, StyledTabsWrapper } from "./styled";

const TxTabs = ({ defaultActiveKey, activeKey, onChange, items = [], type = "line", size = "medium", ...rest }) => {
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey || items[0]?.key);

  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  const handleTabClick = key => {
    if (activeKey === undefined) {
      setInternalActiveKey(key);
    }
    if (onChange) {
      onChange(key);
    }
  };

  return (
    <StyledTabsWrapper {...rest}>
      <StyledTabsList type={type}>
        {items.map(item => (
          <StyledTab
            key={item.key}
            active={currentActiveKey === item.key}
            onClick={() => handleTabClick(item.key)}
            disabled={item.disabled}
            type={type}
            size={size}
          >
            {item.label}
          </StyledTab>
        ))}
      </StyledTabsList>
      {items.map(item => (
        <StyledTabPanel key={item.key} active={currentActiveKey === item.key}>
          {item.children}
        </StyledTabPanel>
      ))}
    </StyledTabsWrapper>
  );
};

TxTabs.propTypes = {
  defaultActiveKey: PropTypes.string,
  activeKey: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      children: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ),
  type: PropTypes.oneOf(["line", "card"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

TxTabs.defaultProps = {
  items: [],
  type: "line",
  size: "medium",
};

export default TxTabs;
