import PropTypes from "prop-types";
import { StyledLoadingText, StyledLoadingWrapper, StyledSpinner } from "./styled";

const TxLoading = ({ size = "medium", text, fullscreen = false, spinnerColor, textColor, ...rest }) => {
  return (
    <StyledLoadingWrapper fullscreen={fullscreen} {...rest}>
      <StyledSpinner size={size} spinnerColor={spinnerColor} />
      {text && <StyledLoadingText color={textColor}>{text}</StyledLoadingText>}
    </StyledLoadingWrapper>
  );
};

TxLoading.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  text: PropTypes.string,
  fullscreen: PropTypes.bool,
  spinnerColor: PropTypes.string,
  textColor: PropTypes.string,
};

TxLoading.defaultProps = {
  size: "medium",
  fullscreen: false,
};

export default TxLoading;
