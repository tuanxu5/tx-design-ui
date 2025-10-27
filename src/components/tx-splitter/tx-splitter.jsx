import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const SplitterContainer = styled.div`
  display: flex;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "400px"};
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  overflow: hidden;
`;

const Panel = styled.div`
  flex: ${props => props.flex || 1};
  overflow: ${props => props.overflow || "auto"};
  background: ${colors.bgFillLight};
`;

const Resizer = styled.div`
  width: ${props => (props.direction === "horizontal" ? "8px" : "100%")};
  height: ${props => (props.direction === "vertical" ? "8px" : "100%")};
  background: ${colors.borderLight};
  cursor: ${props => (props.direction === "horizontal" ? "col-resize" : "row-resize")};
  transition: background 0.2s;

  &:hover {
    background: ${colors.primary};
  }
`;

const TxSplitter = ({ direction = "horizontal", children, ...props }) => {
  const [sizes] = useState([50, 50]);

  // Simple splitter logic
  const panels = React.Children.toArray(children);

  return (
    <SplitterContainer {...props}>
      {panels.map((panel, index) => (
        <React.Fragment key={index}>
          <Panel flex={sizes[index]}>{panel}</Panel>
          {index < panels.length - 1 && <Resizer direction={direction} />}
        </React.Fragment>
      ))}
    </SplitterContainer>
  );
};

export default TxSplitter;
