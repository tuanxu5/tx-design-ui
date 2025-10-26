import styled from "styled-components";
import colors from "../../theme/colors";

export const FormWrapper = styled.form`
  width: 100%;
`;

export const FormItem = styled.div`
  margin-bottom: ${props => (props.noMargin ? "0" : "24px")};
  display: flex;
  flex-direction: ${props => (props.layout === "horizontal" ? "row" : "column")};
  align-items: ${props => (props.layout === "horizontal" ? "flex-start" : "stretch")};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-bottom: ${props => (props.layout === "horizontal" ? "0" : "8px")};
  margin-right: ${props => (props.layout === "horizontal" ? "16px" : "0")};
  min-width: ${props => (props.layout === "horizontal" ? "120px" : "auto")};
  padding-top: ${props => (props.layout === "horizontal" ? "8px" : "0")};

  ${props =>
    props.required &&
    `
    &::before {
      content: "*";
      color: ${colors.danger[500]};
      margin-right: 4px;
    }
  `}

  ${props =>
    props.colon &&
    props.layout === "horizontal" &&
    `
    &::after {
      content: ":";
      margin-left: 2px;
    }
  `}
`;

export const FormControl = styled.div`
  flex: 1;
  position: relative;
`;

export const FormError = styled.div`
  font-size: 12px;
  color: ${colors.danger[500]};
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const FormHelp = styled.div`
  font-size: 12px;
  color: ${colors.textSecondary};
  margin-top: 4px;
`;

export const FormFooter = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  justify-content: ${props => {
    switch (props.align) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
        return "center";
      default:
        return "flex-start";
    }
  }};
  padding-left: ${props => (props.layout === "horizontal" && props.labelWidth ? props.labelWidth : "0")};
`;
