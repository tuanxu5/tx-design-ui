import PropTypes from "prop-types";
import { ResultContainer, ResultExtra, ResultIcon, ResultSubtitle, ResultTitle } from "./styled";

const getStatusIcon = status => {
  const iconProps = {
    width: "72",
    height: "72",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (status) {
    case "success":
      return (
        <svg {...iconProps}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "error":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "warning":
      return (
        <svg {...iconProps}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case "info":
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
};

const TxResult = ({ status, icon, title, subTitle, extra, children }) => {
  return (
    <ResultContainer>
      <ResultIcon status={status}>{icon || getStatusIcon(status)}</ResultIcon>
      {title && <ResultTitle>{title}</ResultTitle>}
      {subTitle && <ResultSubtitle>{subTitle}</ResultSubtitle>}
      {extra && <ResultExtra>{extra}</ResultExtra>}
      {children && <ResultExtra>{children}</ResultExtra>}
    </ResultContainer>
  );
};

TxResult.propTypes = {
  status: PropTypes.oneOf(["success", "error", "warning", "info"]),
  icon: PropTypes.node,
  title: PropTypes.node,
  subTitle: PropTypes.node,
  extra: PropTypes.node,
  children: PropTypes.node,
};

TxResult.defaultProps = {
  status: "info",
};

export default TxResult;
