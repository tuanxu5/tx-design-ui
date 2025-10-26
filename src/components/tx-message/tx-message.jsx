import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  MessageClose,
  MessageContainer,
  MessageContent,
  MessageDescription,
  MessageIcon,
  MessageTitle,
  MessageWrapper,
} from "./styled";

const MessageComponent = ({ type, content, description, duration, onClose, closable }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case "error":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        );
      case "warning":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case "info":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
    }
  };

  return (
    <MessageWrapper type={type} isClosing={isClosing}>
      <MessageIcon type={type}>{getIcon()}</MessageIcon>
      <MessageContent>
        {content && <MessageTitle>{content}</MessageTitle>}
        {description && <MessageDescription>{description}</MessageDescription>}
      </MessageContent>
      {closable && (
        <MessageClose onClick={handleClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </MessageClose>
      )}
    </MessageWrapper>
  );
};

MessageComponent.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  content: PropTypes.node,
  description: PropTypes.node,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
};

let messageContainer = null;
let messagesRoot = null;
const messages = [];

const getContainer = () => {
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    document.body.appendChild(messageContainer);
    messagesRoot = createRoot(messageContainer);
  }
  return messageContainer;
};

const renderMessages = () => {
  if (messagesRoot) {
    messagesRoot.render(
      <MessageContainer>
        {messages.map(msg => (
          <MessageComponent key={msg.key} {...msg} />
        ))}
      </MessageContainer>
    );
  }
};

const open = config => {
  getContainer();
  const key = Date.now();
  const message = {
    key,
    type: config.type || "info",
    content: config.content,
    description: config.description,
    duration: config.duration !== undefined ? config.duration : 3000,
    closable: config.closable !== undefined ? config.closable : false,
    onClose: () => {
      const index = messages.findIndex(m => m.key === key);
      if (index > -1) {
        messages.splice(index, 1);
        renderMessages();
        if (config.onClose) config.onClose();
      }
    },
  };
  messages.push(message);
  renderMessages();
};

export const TxMessage = {
  success: (content, duration = 3000) => {
    open({ type: "success", content, duration });
  },
  error: (content, duration = 3000) => {
    open({ type: "error", content, duration });
  },
  warning: (content, duration = 3000) => {
    open({ type: "warning", content, duration });
  },
  info: (content, duration = 3000) => {
    open({ type: "info", content, duration });
  },
  open: config => {
    open(config);
  },
  destroy: () => {
    messages.length = 0;
    renderMessages();
  },
};
