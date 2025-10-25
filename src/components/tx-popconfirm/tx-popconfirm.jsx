import PropTypes from "prop-types";
import { useState } from "react";
import TxButton from "../tx-button/tx-button";
import {
  StyledPopconfirmButtons,
  StyledPopconfirmContent,
  StyledPopconfirmIcon,
  StyledPopconfirmTitle,
  StyledPopconfirmWrapper,
} from "./styled";

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

const TxPopconfirm = ({
  children,
  title = "Are you sure?",
  placement = "bottom",
  onConfirm,
  onCancel,
  okText = "Yes",
  cancelText = "No",
  okType = "primary",
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const handleConfirm = e => {
    e.stopPropagation();
    if (onConfirm) {
      onConfirm(e);
    }
    setVisible(false);
  };

  const handleCancel = e => {
    e.stopPropagation();
    if (onCancel) {
      onCancel(e);
    }
    setVisible(false);
  };

  return (
    <StyledPopconfirmWrapper onClick={handleClick} {...rest}>
      {children}
      <StyledPopconfirmContent visible={visible} placement={placement}>
        <StyledPopconfirmTitle>
          <StyledPopconfirmIcon>
            <AlertCircleIcon />
          </StyledPopconfirmIcon>
          <div>{title}</div>
        </StyledPopconfirmTitle>
        <StyledPopconfirmButtons>
          <TxButton size="small" onClick={handleCancel}>
            {cancelText}
          </TxButton>
          <TxButton size="small" type={okType} onClick={handleConfirm}>
            {okText}
          </TxButton>
        </StyledPopconfirmButtons>
      </StyledPopconfirmContent>
    </StyledPopconfirmWrapper>
  );
};

TxPopconfirm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  okType: PropTypes.string,
};

TxPopconfirm.defaultProps = {
  title: "Are you sure?",
  placement: "bottom",
  okText: "Yes",
  cancelText: "No",
  okType: "primary",
};

export default TxPopconfirm;
