import PropTypes from "prop-types";
import { useState } from "react";
import {
  StyledColorPickerInput,
  StyledColorPickerLabel,
  StyledColorPickerWrapper,
  StyledColorPresets,
  StyledColorValue,
  StyledPresetColor,
} from "./styled";

const TxColorPicker = ({
  value = "#000000",
  onChange,
  label,
  disabled = false,
  size = "medium",
  showInput = true,
  presets = [],
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);

  const handleColorChange = e => {
    const newColor = e.target.value;
    setLocalValue(newColor);
    if (onChange) {
      onChange(newColor, e);
    }
  };

  const handleInputChange = e => {
    let newColor = e.target.value;

    // Add # if missing
    if (!newColor.startsWith("#")) {
      newColor = "#" + newColor;
    }

    // Validate hex color
    const hexRegex = /^#[0-9A-F]{6}$/i;
    if (hexRegex.test(newColor)) {
      setLocalValue(newColor);
      if (onChange) {
        onChange(newColor, e);
      }
    }
  };

  const handlePresetClick = color => {
    setLocalValue(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div>
      <StyledColorPickerWrapper>
        <StyledColorPickerInput
          type="color"
          value={localValue}
          onChange={handleColorChange}
          disabled={disabled}
          size={size}
          {...rest}
        />
        {label && <StyledColorPickerLabel disabled={disabled}>{label}</StyledColorPickerLabel>}
        {showInput && (
          <StyledColorValue
            type="text"
            value={localValue}
            onChange={handleInputChange}
            disabled={disabled}
            maxLength={7}
          />
        )}
      </StyledColorPickerWrapper>

      {presets.length > 0 && (
        <StyledColorPresets>
          {presets.map(preset => (
            <StyledPresetColor
              key={preset}
              type="button"
              color={preset}
              selected={localValue === preset}
              onClick={() => handlePresetClick(preset)}
              disabled={disabled}
              title={preset}
            />
          ))}
        </StyledColorPresets>
      )}
    </div>
  );
};

TxColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  showInput: PropTypes.bool,
  presets: PropTypes.arrayOf(PropTypes.string),
};

TxColorPicker.defaultProps = {
  value: "#000000",
  disabled: false,
  size: "medium",
  showInput: true,
  presets: [],
};

export default TxColorPicker;
