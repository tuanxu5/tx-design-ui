import styled from "styled-components";

export const AffixContainer = styled.div`
  ${props =>
    props.fixed &&
    `
    position: fixed;
    top: ${props.offsetTop || 0}px;
    left: ${props.offsetLeft}px;
    right: ${props.offsetRight}px;
    bottom: ${props.offsetBottom}px;
    z-index: ${props.zIndex || 1000};
    width: ${props.width || "auto"};
  `}
`;
