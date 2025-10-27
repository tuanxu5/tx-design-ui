import styled from "styled-components";
import colors from "../../theme/colors";

const TextareaStyled = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${colors.borderLight};
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: ${props => props.resize || "vertical"};
  min-height: ${props => props.minHeight || "80px"};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primaryLight};
  }

  &:disabled {
    background: ${colors.bgFillLight};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

const TxTextarea = ({ placeholder, value, onChange, disabled, resize, minHeight, ...props }) => {
  return (
    <TextareaStyled
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      resize={resize}
      minHeight={minHeight}
      {...props}
    />
  );
};

export default TxTextarea;
