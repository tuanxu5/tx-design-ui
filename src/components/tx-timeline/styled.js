import styled from "styled-components";
import colors from "../../theme/colors";

export const TimelineWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-bottom: ${props => (props.isLast ? "0" : "24px")};
  padding-left: 28px;

  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 20px;
    bottom: 0;
    width: 2px;
    background-color: ${colors.borderDefault};
    display: ${props => (props.isLast ? "none" : "block")};
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 0;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid
    ${props => {
      switch (props.color) {
        case "success":
          return colors.success[500];
        case "error":
          return colors.danger[500];
        case "warning":
          return colors.warning[500];
        case "processing":
          return colors.info[500];
        default:
          return colors.primary[500];
      }
    }};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${props =>
    props.icon &&
    `
    width: 20px;
    height: 20px;
    border: none;
    background-color: ${
      props.color === "success"
        ? colors.success[500]
        : props.color === "error"
        ? colors.danger[500]
        : props.color === "warning"
        ? colors.warning[500]
        : props.color === "processing"
        ? colors.info[500]
        : colors.primary[500]
    };
    color: white;
    font-size: 12px;
  `}

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const TimelineContent = styled.div`
  position: relative;
  top: -4px;
`;

export const TimelineTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 4px;
  line-height: 1.5;
`;

export const TimelineDescription = styled.div`
  font-size: 13px;
  color: ${colors.textSecondary};
  line-height: 1.5;
  font-weight: 400;
`;

export const TimelineTime = styled.div`
  font-size: 12px;
  color: ${colors.textTertiary};
  margin-top: 4px;
`;

export const TimelineLabel = styled.div`
  position: absolute;
  left: ${props => (props.mode === "left" ? "auto" : "-120px")};
  right: ${props => (props.mode === "left" ? "-120px" : "auto")};
  top: 0;
  width: 100px;
  text-align: ${props => (props.mode === "left" ? "left" : "right")};
  font-size: 12px;
  color: ${colors.textTertiary};
`;

export const TimelineAlternate = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${colors.borderDefault};
    transform: translateX(-50%);
  }
`;

export const TimelineAlternateItem = styled.li`
  position: relative;
  padding: ${props => (props.position === "left" ? "0 calc(50% + 28px) 24px 0" : "0 0 24px calc(50% + 28px)")};
  text-align: ${props => (props.position === "left" ? "right" : "left")};

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineAlternateDot = styled.div`
  position: absolute;
  left: 50%;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transform: translateX(-50%);
  border: 2px solid
    ${props => {
      switch (props.color) {
        case "success":
          return colors.success[500];
        case "error":
          return colors.danger[500];
        case "warning":
          return colors.warning[500];
        case "processing":
          return colors.info[500];
        default:
          return colors.primary[500];
      }
    }};
  background-color: white;
  z-index: 1;

  ${props =>
    props.icon &&
    `
    width: 20px;
    height: 20px;
    border: none;
    background-color: ${
      props.color === "success"
        ? colors.success[500]
        : props.color === "error"
        ? colors.danger[500]
        : props.color === "warning"
        ? colors.warning[500]
        : props.color === "processing"
        ? colors.info[500]
        : colors.primary[500]
    };
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  svg {
    width: 12px;
    height: 12px;
  }
`;
