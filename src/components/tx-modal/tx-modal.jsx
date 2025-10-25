import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  StyledModalBody,
  StyledModalClose,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
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

const TxModal = ({
  open = false,
  onClose,
  title,
  children,
  footer,
  width,
  closable = true,
  maskClosable = true,
  ...rest
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleOverlayClick = e => {
    if (maskClosable && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <StyledModalOverlay onClick={handleOverlayClick} {...rest}>
      <StyledModalContent width={width}>
        {(title || closable) && (
          <StyledModalHeader>
            {title && <StyledModalTitle>{title}</StyledModalTitle>}
            {closable && (
              <StyledModalClose onClick={handleClose} type="button">
                <CloseIcon />
              </StyledModalClose>
            )}
          </StyledModalHeader>
        )}
        <StyledModalBody>{children}</StyledModalBody>
        {footer && <StyledModalFooter>{footer}</StyledModalFooter>}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

TxModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  footer: PropTypes.node,
  width: PropTypes.string,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
};

TxModal.defaultProps = {
  open: false,
  closable: true,
  maskClosable: true,
};

export default TxModal;
