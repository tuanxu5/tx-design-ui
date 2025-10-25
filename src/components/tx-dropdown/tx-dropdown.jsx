import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { StyledDropdownDivider, StyledDropdownItem, StyledDropdownMenu, StyledDropdownWrapper } from "./styled";

const TxDropdown = ({ children, menu = [], placement = "bottomLeft", trigger = "hover", onMenuClick, ...rest }) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setVisible(false);
    }
  };

  const handleClick = () => {
    if (trigger === "click") {
      setVisible(!visible);
    }
  };

  const handleMenuItemClick = (key, item) => {
    if (!item.disabled) {
      if (onMenuClick) {
        onMenuClick(key);
      }
      setVisible(false);
    }
  };

  const renderMenuItem = item => {
    if (item.type === "divider") {
      return <StyledDropdownDivider key={item.key || Math.random()} />;
    }

    return (
      <StyledDropdownItem
        key={item.key}
        onClick={() => handleMenuItemClick(item.key, item)}
        disabled={item.disabled}
        danger={item.danger}
      >
        {item.icon}
        {item.label}
      </StyledDropdownItem>
    );
  };

  return (
    <StyledDropdownWrapper
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...rest}
    >
      {children}
      <StyledDropdownMenu visible={visible} placement={placement}>
        {menu.map(item => renderMenuItem(item))}
      </StyledDropdownMenu>
    </StyledDropdownWrapper>
  );
};

TxDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.node,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      danger: PropTypes.bool,
      type: PropTypes.oneOf(["divider"]),
    })
  ),
  placement: PropTypes.oneOf(["topLeft", "topRight", "bottomLeft", "bottomRight"]),
  trigger: PropTypes.oneOf(["hover", "click"]),
  onMenuClick: PropTypes.func,
};

TxDropdown.defaultProps = {
  menu: [],
  placement: "bottomLeft",
  trigger: "hover",
};

export default TxDropdown;
