import PropTypes from "prop-types";
import {
  StyledStep,
  StyledStepContent,
  StyledStepDescription,
  StyledStepIcon,
  StyledStepsWrapper,
  StyledStepTitle,
} from "./styled";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const TxSteps = ({ current = 0, items = [], direction = "horizontal", status = "process", ...rest }) => {
  const getStepStatus = index => {
    if (status === "error" && index === current) {
      return "error";
    }
    if (index < current) {
      return "finish";
    }
    if (index === current) {
      return "process";
    }
    return "wait";
  };

  const renderIcon = (stepStatus, index) => {
    if (stepStatus === "finish") {
      return <CheckIcon />;
    }
    if (stepStatus === "error") {
      return <CloseIcon />;
    }
    return index + 1;
  };

  return (
    <StyledStepsWrapper direction={direction} {...rest}>
      {items.map((item, index) => {
        const stepStatus = getStepStatus(index);
        const isLast = index === items.length - 1;

        return (
          <StyledStep key={item.title || index} direction={direction} status={stepStatus} isLast={isLast}>
            <StyledStepIcon status={stepStatus}>{item.icon || renderIcon(stepStatus, index)}</StyledStepIcon>
            <StyledStepContent direction={direction} status={stepStatus} isLast={isLast}>
              <StyledStepTitle status={stepStatus}>{item.title}</StyledStepTitle>
              {item.description && <StyledStepDescription>{item.description}</StyledStepDescription>}
            </StyledStepContent>
          </StyledStep>
        );
      })}
    </StyledStepsWrapper>
  );
};

TxSteps.propTypes = {
  current: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      icon: PropTypes.node,
    })
  ),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  status: PropTypes.oneOf(["wait", "process", "finish", "error"]),
};

TxSteps.defaultProps = {
  current: 0,
  items: [],
  direction: "horizontal",
  status: "process",
};

export default TxSteps;
