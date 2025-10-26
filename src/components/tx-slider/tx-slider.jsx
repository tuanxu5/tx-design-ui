import PropTypes from "prop-types";
import { useState } from "react";
import {
  SliderContainer,
  SliderFill,
  SliderHandle,
  SliderInput,
  SliderMark,
  SliderMarks,
  SliderTrack,
  SliderValue,
  SliderWrapper,
} from "./styled";

export const TxSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 0,
  disabled = false,
  showValue = false,
  marks = null,
  onChange,
  onAfterChange,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const getPercent = () => {
    return ((currentValue - min) / (max - min)) * 100;
  };

  const handleChange = e => {
    if (disabled) return;
    const newValue = parseFloat(e.target.value);
    if (value === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleAfterChange = e => {
    if (disabled) return;
    if (onAfterChange) {
      onAfterChange(parseFloat(e.target.value));
    }
  };

  return (
    <SliderWrapper disabled={disabled} className={className}>
      <SliderContainer>
        <SliderTrack />
        <SliderFill percent={getPercent()} disabled={disabled} />
        <SliderHandle percent={getPercent()} disabled={disabled} />
        <SliderInput
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          onMouseUp={handleAfterChange}
          onTouchEnd={handleAfterChange}
          disabled={disabled}
          {...props}
        />
        {marks && (
          <SliderMarks>
            {Object.entries(marks).map(([markValue, label]) => {
              const markPercent = ((parseFloat(markValue) - min) / (max - min)) * 100;
              return (
                <SliderMark key={markValue} percent={markPercent}>
                  {label}
                </SliderMark>
              );
            })}
          </SliderMarks>
        )}
      </SliderContainer>
      {showValue && <SliderValue>{currentValue}</SliderValue>}
    </SliderWrapper>
  );
};

TxSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  showValue: PropTypes.bool,
  marks: PropTypes.object,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  className: PropTypes.string,
};

TxSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: undefined,
  defaultValue: 0,
  disabled: false,
  showValue: false,
  marks: null,
  onChange: undefined,
  onAfterChange: undefined,
  className: "",
};
