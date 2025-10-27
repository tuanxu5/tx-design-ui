import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const StarContainer = styled.div`
  display: inline-flex;
  gap: 4px;
  font-size: ${props => props.size || "20px"};
`;

const StarButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.filled ? colors.warning : colors.borderMedium)};
  cursor: pointer;
  font-size: inherit;
  transition: all 0.2s;

  &:hover {
    color: ${colors.warning};
    transform: scale(1.1);
  }
`;

const TxRate = ({ value = 0, onChange, count = 5, allowHalf = false, disabled = false, size, ...props }) => {
  const [hoverValue, setHoverValue] = useState(0);
  const [rating, setRating] = useState(value);

  const handleClick = newValue => {
    if (!disabled) {
      setRating(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const stars = [];
  const displayValue = hoverValue || rating;

  for (let i = 1; i <= count; i++) {
    const isFilled = i <= displayValue;
    stars.push(
      <StarButton
        key={i}
        filled={isFilled}
        onClick={() => handleClick(i)}
        onMouseEnter={() => !disabled && setHoverValue(i)}
        onMouseLeave={() => setHoverValue(0)}
        disabled={disabled}
        size={size}
      >
        ★
      </StarButton>
    );
  }

  return (
    <StarContainer size={size} {...props}>
      {stars}
    </StarContainer>
  );
};

export default TxRate;
