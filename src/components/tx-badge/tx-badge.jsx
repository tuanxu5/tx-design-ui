import PropTypes from "prop-types";
import { BadgeContent, BadgeRibbon, BadgeStandalone, BadgeWrapper, RibbonWrapper } from "./styled";

export const TxBadge = ({
  count = 0,
  dot = false,
  showZero = false,
  overflowCount = 99,
  status = "default",
  children,
  className,
  ...props
}) => {
  const displayCount = count > overflowCount ? `${overflowCount}+` : count;

  if (!children) {
    return (
      <BadgeStandalone status={status} className={className} {...props}>
        {displayCount}
      </BadgeStandalone>
    );
  }

  return (
    <BadgeWrapper className={className} {...props}>
      {children}
      <BadgeContent dot={dot} count={count} showZero={showZero} overflowCount={overflowCount} status={status}>
        {!dot && displayCount}
      </BadgeContent>
    </BadgeWrapper>
  );
};

TxBadge.propTypes = {
  count: PropTypes.number,
  dot: PropTypes.bool,
  showZero: PropTypes.bool,
  overflowCount: PropTypes.number,
  status: PropTypes.oneOf(["success", "error", "warning", "processing", "default"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

TxBadge.defaultProps = {
  count: 0,
  dot: false,
  showZero: false,
  overflowCount: 99,
  status: "default",
  children: null,
  className: "",
};

export const TxBadgeRibbon = ({ text, status = "default", placement = "end", children, className, ...props }) => {
  return (
    <RibbonWrapper className={className} {...props}>
      {children}
      <BadgeRibbon status={status} placement={placement}>
        {text}
      </BadgeRibbon>
    </RibbonWrapper>
  );
};

TxBadgeRibbon.propTypes = {
  text: PropTypes.node,
  status: PropTypes.oneOf(["success", "error", "warning", "processing", "default"]),
  placement: PropTypes.oneOf(["start", "end"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

TxBadgeRibbon.defaultProps = {
  text: "",
  status: "default",
  placement: "end",
  children: null,
  className: "",
};

TxBadge.Ribbon = TxBadgeRibbon;
