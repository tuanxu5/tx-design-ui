import styled from "styled-components";
import colors from "../../theme/colors";

const WatermarkContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const WatermarkOverlay = styled.div`
  position: ${props => (props.fullPage ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: ${props => props.zIndex || 1};
  background-image: repeating-linear-gradient(
    ${props => props.angle || "45deg"},
    transparent,
    transparent ${props => props.spacing || "100px"},
    rgba(0, 0, 0, 0.03) ${props => props.spacing || "100px"},
    rgba(0, 0, 0, 0.03) ${props => (props.spacing || 100) * 2 + "px"}
  );
`;

const WatermarkText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle || "-45"}deg);
  color: ${props => props.color || colors.textSecondary};
  font-size: ${props => props.fontSize || "48px"};
  opacity: ${props => props.opacity || 0.1};
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
`;

const TxWatermark = ({
  text = "WATERMARK",
  fullPage = false,
  zIndex = 1,
  angle = -45,
  opacity = 0.1,
  color,
  fontSize,
  children,
  ...props
}) => {
  return (
    <WatermarkContainer {...props}>
      {children}
      <WatermarkOverlay fullPage={fullPage} zIndex={zIndex} angle={angle}>
        <WatermarkText angle={angle} color={color} fontSize={fontSize} opacity={opacity}>
          {text}
        </WatermarkText>
      </WatermarkOverlay>
    </WatermarkContainer>
  );
};

export default TxWatermark;
