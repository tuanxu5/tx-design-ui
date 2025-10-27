import React from "react";
import styled from "styled-components";

const SpaceContainer = styled.div`
  display: inline-flex;
  flex-direction: ${props => props.direction || "horizontal"};
  align-items: center;
  gap: ${props => props.size || "8px"};
  width: ${props => (props.direction === "vertical" ? "100%" : "auto")};
`;

const TxSpace = ({ direction = "horizontal", size = "8px", children, ...props }) => {
  return (
    <SpaceContainer direction={direction} size={size} {...props}>
      {React.Children.map(children, child => (
        <div key={child.key || Math.random()}>{child}</div>
      ))}
    </SpaceContainer>
  );
};

export default TxSpace;
