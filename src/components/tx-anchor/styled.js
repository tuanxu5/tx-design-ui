import styled from "styled-components";
import "../../styles/shorten.scss";
import colors from "../../theme/colors";

export const StyledAnchorWrapper = styled.div`
  position: relative;
  padding-left: 16px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${colors.borderLight};
  }
`;

export const StyledAnchorLink = styled.a`
  display: block;
  padding: 4px 0;
  color: ${props => (props.active ? colors.primary : colors.textSecondary)};
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: ${colors.primary};
  }

  ${props =>
    props.active &&
    `
    &::before {
      content: "";
      position: absolute;
      left: -16px;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 16px;
      background-color: ${colors.primary};
    }
  `}
`;
