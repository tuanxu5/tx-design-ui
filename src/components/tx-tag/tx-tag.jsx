import PropTypes from "prop-types";
import { StyledTag, StyledTagClose } from "./styled";

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

const TxTag = ({
  children,
  color = "default",
  closable = false,
  onClose,
  size = "medium",
  bordered = false,
  ...rest
}) => {
  const handleClose = e => {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <StyledTag color={color} size={size} bordered={bordered} closable={closable} {...rest}>
      {children}
      {closable && (
        <StyledTagClose onClick={handleClose} type="button">
          <CloseIcon />
        </StyledTagClose>
      )}
    </StyledTag>
  );
};

TxTag.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  bordered: PropTypes.bool,
};

TxTag.defaultProps = {
  color: "default",
  closable: false,
  size: "medium",
  bordered: false,
};

export default TxTag;
