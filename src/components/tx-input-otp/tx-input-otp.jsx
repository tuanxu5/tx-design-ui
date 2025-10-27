import { useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const OtpContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const OtpInput = styled.input`
  width: 48px;
  height: 48px;
  text-align: center;
  font-size: 20px;
  border: 1px solid ${colors.borderLight};
  border-radius: 6px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primaryLight};
  }

  &:disabled {
    background: ${colors.bgFillLight};
  }
`;

const TxInputOtp = ({ length = 6, onChange, disabled = false, ...props }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!value.match(/^[0-9]$/) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (onChange) {
      onChange(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <OtpContainer {...props}>
      {Array.from({ length }).map((_, index) => (
        <OtpInput
          key={index}
          ref={el => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          disabled={disabled}
        />
      ))}
    </OtpContainer>
  );
};

export default TxInputOtp;
