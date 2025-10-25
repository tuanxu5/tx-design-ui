import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  StyledDrawerBody,
  StyledDrawerClose,
  StyledDrawerContent,
  StyledDrawerFooter,
  StyledDrawerHeader,
  StyledDrawerOverlay,
  StyledDrawerTitle,
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

const TxDrawer = ({
  open = false,
  onClose,
  title,
  children,
  footer,
  placement = "right",
  width,
  height,
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

  const handleOverlayClick = () => {
    if (maskClosable && onClose) {
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
    <>
      <StyledDrawerOverlay onClick={handleOverlayClick} />
      <StyledDrawerContent placement={placement} width={width} height={height} {...rest}>
        {(title || closable) && (
          <StyledDrawerHeader>
            {title && <StyledDrawerTitle>{title}</StyledDrawerTitle>}
            {closable && (
              <StyledDrawerClose onClick={handleClose} type="button">
                <CloseIcon />
              </StyledDrawerClose>
            )}
          </StyledDrawerHeader>
        )}
        <StyledDrawerBody>{children}</StyledDrawerBody>
        {footer && <StyledDrawerFooter>{footer}</StyledDrawerFooter>}
      </StyledDrawerContent>
    </>
  );
};

TxDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  footer: PropTypes.node,
  placement: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  width: PropTypes.string,
  height: PropTypes.string,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
};

TxDrawer.defaultProps = {
  open: false,
  placement: "right",
  closable: true,
  maskClosable: true,
};

export default TxDrawer;
