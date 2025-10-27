import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const CountdownContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CountdownUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const CountdownValue = styled.div`
  font-size: ${props => props.size || "32px"};
  font-weight: 700;
  color: ${colors.textPrimary};
  line-height: 1;
`;

const CountdownLabel = styled.div`
  font-size: 12px;
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TxCountdown = ({ targetDate, size, ...props }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownContainer {...props}>
      <CountdownUnit>
        <CountdownValue size={size}>{String(timeLeft.days).padStart(2, "0")}</CountdownValue>
        <CountdownLabel>Days</CountdownLabel>
      </CountdownUnit>
      <CountdownUnit>
        <CountdownValue size={size}>{String(timeLeft.hours).padStart(2, "0")}</CountdownValue>
        <CountdownLabel>Hours</CountdownLabel>
      </CountdownUnit>
      <CountdownUnit>
        <CountdownValue size={size}>{String(timeLeft.minutes).padStart(2, "0")}</CountdownValue>
        <CountdownLabel>Minutes</CountdownLabel>
      </CountdownUnit>
      <CountdownUnit>
        <CountdownValue size={size}>{String(timeLeft.seconds).padStart(2, "0")}</CountdownValue>
        <CountdownLabel>Seconds</CountdownLabel>
      </CountdownUnit>
    </CountdownContainer>
  );
};

export default TxCountdown;
