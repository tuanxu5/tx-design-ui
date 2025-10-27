import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const TourOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  transition: all 0.3s;
`;

const TourTooltip = styled.div`
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

const TourTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const TourContent = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-bottom: 12px;
`;

const TourActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const TxTour = ({ steps = [], current = 0, open = false, onClose, ...props }) => {
  const [currentStep, setCurrentStep] = useState(current);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose?.();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!open || steps.length === 0) return null;

  const currentStepData = steps[currentStep];

  return (
    <TourOverlay open={open}>
      <TourTooltip {...props}>
        <TourTitle>{currentStepData.title}</TourTitle>
        <TourContent>{currentStepData.content}</TourContent>
        <TourActions>
          <button onClick={prevStep} disabled={currentStep === 0}>
            Back
          </button>
          <button onClick={nextStep}>{currentStep === steps.length - 1 ? "Finish" : "Next"}</button>
        </TourActions>
      </TourTooltip>
    </TourOverlay>
  );
};

export default TxTour;
