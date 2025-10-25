import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  StyledNotification,
  StyledNotificationClose,
  StyledNotificationContent,
  StyledNotificationDescription,
  StyledNotificationIcon,
  StyledNotificationTitle,
} from "./styled";

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const XCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const getIcon = type => {
  switch (type) {
    case "success":
      return <CheckCircleIcon />;
    case "error":
      return <XCircleIcon />;
    case "warning":
      return <AlertCircleIcon />;
    case "info":
      return <InfoCircleIcon />;
    default:
      return <InfoCircleIcon />;
  }
};

const TxNotification = ({ type = "info", title, description, closable = true, onClose, duration = 4500, ...rest }) => {
  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <StyledNotification type={type} {...rest}>
      <StyledNotificationIcon type={type}>{getIcon(type)}</StyledNotificationIcon>
      <StyledNotificationContent>
        {title && <StyledNotificationTitle>{title}</StyledNotificationTitle>}
        {description && <StyledNotificationDescription>{description}</StyledNotificationDescription>}
      </StyledNotificationContent>
      {closable && (
        <StyledNotificationClose onClick={handleClose} type="button">
          <CloseIcon />
        </StyledNotificationClose>
      )}
    </StyledNotification>
  );
};

TxNotification.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  duration: PropTypes.number,
};

TxNotification.defaultProps = {
  type: "info",
  closable: true,
  duration: 4500,
};

export default TxNotification;
