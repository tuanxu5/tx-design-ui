import PropTypes from "prop-types";
import {
  TimelineAlternate,
  TimelineAlternateDot,
  TimelineAlternateItem,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineLabel,
  TimelineTime,
  TimelineTitle,
  TimelineWrapper,
} from "./styled";

export const TxTimeline = ({ items = [], mode = "left", className, ...props }) => {
  if (mode === "alternate") {
    return (
      <TimelineAlternate className={className} {...props}>
        {items.map((item, index) => {
          const position = index % 2 === 0 ? "left" : "right";
          return (
            <TimelineAlternateItem key={index} position={position}>
              <TimelineAlternateDot color={item.color} icon={item.icon}>
                {item.icon}
              </TimelineAlternateDot>
              <TimelineContent>
                {item.label && <TimelineLabel mode={position}>{item.label}</TimelineLabel>}
                {item.title && <TimelineTitle>{item.title}</TimelineTitle>}
                {item.description && <TimelineDescription>{item.description}</TimelineDescription>}
                {item.children}
                {item.time && <TimelineTime>{item.time}</TimelineTime>}
              </TimelineContent>
            </TimelineAlternateItem>
          );
        })}
      </TimelineAlternate>
    );
  }

  return (
    <TimelineWrapper className={className} {...props}>
      {items.map((item, index) => (
        <TimelineItem key={index} isLast={index === items.length - 1}>
          <TimelineDot color={item.color} icon={item.icon}>
            {item.icon}
          </TimelineDot>
          <TimelineContent>
            {item.label && <TimelineLabel mode={mode}>{item.label}</TimelineLabel>}
            {item.title && <TimelineTitle>{item.title}</TimelineTitle>}
            {item.description && <TimelineDescription>{item.description}</TimelineDescription>}
            {item.children}
            {item.time && <TimelineTime>{item.time}</TimelineTime>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineWrapper>
  );
};

TxTimeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      description: PropTypes.node,
      children: PropTypes.node,
      color: PropTypes.oneOf(["default", "success", "error", "warning", "processing"]),
      icon: PropTypes.node,
      label: PropTypes.node,
      time: PropTypes.node,
    })
  ),
  mode: PropTypes.oneOf(["left", "right", "alternate"]),
  className: PropTypes.string,
};

TxTimeline.defaultProps = {
  items: [],
  mode: "left",
  className: "",
};

export const TxTimelineItem = ({
  title,
  description,
  children,
  color = "default",
  icon,
  label,
  time,
  isLast = false,
  className,
  ...props
}) => {
  return (
    <TimelineItem isLast={isLast} className={className} {...props}>
      <TimelineDot color={color} icon={icon}>
        {icon}
      </TimelineDot>
      <TimelineContent>
        {label && <TimelineLabel>{label}</TimelineLabel>}
        {title && <TimelineTitle>{title}</TimelineTitle>}
        {description && <TimelineDescription>{description}</TimelineDescription>}
        {children}
        {time && <TimelineTime>{time}</TimelineTime>}
      </TimelineContent>
    </TimelineItem>
  );
};

TxTimelineItem.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.oneOf(["default", "success", "error", "warning", "processing"]),
  icon: PropTypes.node,
  label: PropTypes.node,
  time: PropTypes.node,
  isLast: PropTypes.bool,
  className: PropTypes.string,
};

TxTimelineItem.defaultProps = {
  title: null,
  description: null,
  children: null,
  color: "default",
  icon: null,
  label: null,
  time: null,
  isLast: false,
  className: "",
};

TxTimeline.Item = TxTimelineItem;
