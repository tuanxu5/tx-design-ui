import PropTypes from "prop-types";
import { useState } from "react";
import {
  StyledMenuItem,
  StyledMenuList,
  StyledMenuWrapper,
  StyledSubMenu,
  StyledSubMenuList,
  StyledSubMenuTitle,
} from "./styled";

const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const TxMenu = ({ items = [], mode = "vertical", selectedKey, onSelect, ...rest }) => {
  const [openKeys, setOpenKeys] = useState([]);

  const handleItemClick = key => {
    if (onSelect) {
      onSelect(key);
    }
  };

  const handleSubMenuClick = key => {
    if (openKeys.includes(key)) {
      setOpenKeys(openKeys.filter(k => k !== key));
    } else {
      setOpenKeys([...openKeys, key]);
    }
  };

  const renderMenuItem = item => {
    if (item.children) {
      return (
        <StyledSubMenu key={item.key}>
          <StyledSubMenuTitle onClick={() => handleSubMenuClick(item.key)} open={openKeys.includes(item.key)}>
            <span>
              {item.icon}
              {item.label}
            </span>
            <ChevronDown />
          </StyledSubMenuTitle>
          <StyledSubMenuList open={openKeys.includes(item.key)}>
            {item.children.map(child => (
              <StyledMenuItem
                key={child.key}
                active={selectedKey === child.key}
                onClick={() => handleItemClick(child.key)}
                disabled={child.disabled}
              >
                {child.icon}
                {child.label}
              </StyledMenuItem>
            ))}
          </StyledSubMenuList>
        </StyledSubMenu>
      );
    }

    return (
      <StyledMenuItem
        key={item.key}
        active={selectedKey === item.key}
        onClick={() => handleItemClick(item.key)}
        disabled={item.disabled}
      >
        {item.icon}
        {item.label}
      </StyledMenuItem>
    );
  };

  return (
    <StyledMenuWrapper mode={mode} {...rest}>
      <StyledMenuList mode={mode}>{items.map(item => renderMenuItem(item))}</StyledMenuList>
    </StyledMenuWrapper>
  );
};

TxMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      children: PropTypes.array,
    })
  ),
  mode: PropTypes.oneOf(["horizontal", "vertical"]),
  selectedKey: PropTypes.string,
  onSelect: PropTypes.func,
};

TxMenu.defaultProps = {
  items: [],
  mode: "vertical",
};

export default TxMenu;
