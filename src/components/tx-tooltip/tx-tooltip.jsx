import PropTypes from "prop-types";
import { useState } from "react";
import { StyledTooltipContent, StyledTooltipWrapper } from "./styled";

const TxTooltip = ({ children, title, placement = "top", color, trigger = "hover", ...rest }) => {
  const [visible, setVisible] = useState(false);

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

  return (
    <StyledTooltipWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {title && (
        <StyledTooltipContent visible={visible} placement={placement} color={color}>
          {title}
        </StyledTooltipContent>
      )}
    </StyledTooltipWrapper>
  );
};

TxTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  color: PropTypes.string,
  trigger: PropTypes.oneOf(["hover", "click"]),
};

TxTooltip.defaultProps = {
  placement: "top",
  trigger: "hover",
};

export default TxTooltip;
