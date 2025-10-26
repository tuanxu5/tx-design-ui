import PropTypes from "prop-types";
import {
  ProgressBar,
  ProgressCircle,
  ProgressCirclePath,
  ProgressCircleSvg,
  ProgressCircleText,
  ProgressCircleTrack,
  ProgressLine,
  ProgressStep,
  ProgressSteps,
  ProgressText,
  ProgressTrack,
  ProgressWrapper,
} from "./styled";

export const TxProgress = ({
  percent = 0,
  type = "line",
  size = "default",
  status = "normal",
  showInfo = true,
  strokeWidth,
  width = 120,
  steps = 0,
  format,
  className,
  ...props
}) => {
  const normalizedPercent = Math.min(Math.max(percent, 0), 100);
  const actualStatus = percent >= 100 && status === "normal" ? "success" : status;

  const getDefaultStrokeWidth = () => {
    if (strokeWidth) return strokeWidth;
    if (type === "circle") return 6;
    switch (size) {
      case "small":
        return 4;
      case "large":
        return 8;
      default:
        return 6;
    }
  };

  const defaultFormat = pct => {
    if (actualStatus === "exception") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      );
    }
    if (actualStatus === "success") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    }
    return `${Math.round(pct)}%`;
  };

  const displayFormat = format || defaultFormat;

  if (type === "circle") {
    const actualStrokeWidth = getDefaultStrokeWidth();
    const radius = (width - actualStrokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (normalizedPercent / 100) * circumference;

    return (
      <ProgressCircle width={width} className={className} {...props}>
        <ProgressCircleSvg width={width} height={width}>
          <ProgressCircleTrack cx={width / 2} cy={width / 2} r={radius} strokeWidth={actualStrokeWidth} />
          <ProgressCirclePath
            cx={width / 2}
            cy={width / 2}
            r={radius}
            strokeWidth={actualStrokeWidth}
            circumference={circumference}
            offset={offset}
            status={actualStatus}
          />
        </ProgressCircleSvg>
        {showInfo && (
          <ProgressCircleText width={width} status={actualStatus}>
            {displayFormat(normalizedPercent)}
          </ProgressCircleText>
        )}
      </ProgressCircle>
    );
  }

  if (steps > 0) {
    const activeSteps = Math.round((normalizedPercent / 100) * steps);
    return (
      <ProgressWrapper className={className} {...props}>
        <ProgressSteps>
          {Array.from({ length: steps }).map((_, index) => (
            <ProgressStep key={index} active={index < activeSteps} size={size} status={actualStatus} />
          ))}
        </ProgressSteps>
        {showInfo && (
          <ProgressText status={actualStatus} style={{ marginTop: "8px" }}>
            {displayFormat(normalizedPercent)}
          </ProgressText>
        )}
      </ProgressWrapper>
    );
  }

  return (
    <ProgressWrapper className={className} {...props}>
      <ProgressLine>
        <ProgressTrack size={size}>
          <ProgressBar
            percent={normalizedPercent}
            size={size}
            status={actualStatus}
            showInfo={showInfo && typeof displayFormat(normalizedPercent) === "string"}
            format={
              showInfo && typeof displayFormat(normalizedPercent) === "string" ? displayFormat(normalizedPercent) : null
            }
          />
        </ProgressTrack>
        {showInfo && <ProgressText status={actualStatus}>{displayFormat(normalizedPercent)}</ProgressText>}
      </ProgressLine>
    </ProgressWrapper>
  );
};

TxProgress.propTypes = {
  percent: PropTypes.number,
  type: PropTypes.oneOf(["line", "circle"]),
  size: PropTypes.oneOf(["small", "default", "large"]),
  status: PropTypes.oneOf(["normal", "success", "exception"]),
  showInfo: PropTypes.bool,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  steps: PropTypes.number,
  format: PropTypes.func,
  className: PropTypes.string,
};

TxProgress.defaultProps = {
  percent: 0,
  type: "line",
  size: "default",
  status: "normal",
  showInfo: true,
  strokeWidth: undefined,
  width: 120,
  steps: 0,
  format: undefined,
  className: "",
};
