import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background: white;
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  padding: 16px;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const MonthYear = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${colors.bgFillLight};
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const CalendarDay = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${colors.textSecondary};
  padding: 4px;
`;

const CalendarDate = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  background: ${props => (props.selected ? colors.primary : "transparent")};
  color: ${props => (props.selected ? "white" : colors.textPrimary)};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => (props.selected ? colors.primary : colors.bgFillLight)};
  }

  ${props =>
    props.today &&
    `
    border: 1px solid ${colors.primary};
  `}
`;

const TxCalendar = ({ value, onChange, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(value || new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

  const getDaysInMonth = () => {
    const days = [];
    const startDate = monthStart;
    const endDate = monthEnd;

    for (let i = 0; i < startDate.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= endDate.getDate(); i++) {
      days.push(i);
    }

    return days;
  };

  const handleDateClick = date => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const today = new Date();
  const isToday = date => {
    return (
      date === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = date => {
    return (
      date === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  const days = getDaysInMonth();

  return (
    <CalendarContainer {...props}>
      <CalendarHeader>
        <NavButton onClick={prevMonth}>←</NavButton>
        <MonthYear>
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </MonthYear>
        <NavButton onClick={nextMonth}>→</NavButton>
      </CalendarHeader>

      <CalendarGrid>
        {daysOfWeek.map(day => (
          <CalendarDay key={day}>{day}</CalendarDay>
        ))}
        {days.map((date, index) =>
          date ? (
            <CalendarDate
              key={index}
              onClick={() => handleDateClick(date)}
              selected={isSelected(date) ? 1 : 0}
              today={isToday(date) ? 1 : 0}
            >
              {date}
            </CalendarDate>
          ) : (
            <div key={index} />
          )
        )}
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default TxCalendar;
