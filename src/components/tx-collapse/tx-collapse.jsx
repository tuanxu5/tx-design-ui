import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const CollapseContainer = styled.div`
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  overflow: hidden;
`;

const CollapseHeader = styled.div`
  padding: 16px;
  background: ${colors.bgFillLight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${colors.bgFillMedium};
  }
`;

const CollapseContent = styled.div`
  max-height: ${props => (props.expanded ? "2000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => (props.expanded ? "16px" : "0")};
`;

export const TxCollapse = ({ title, children, defaultExpanded = false, ...props }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <CollapseContainer {...props}>
      <CollapseHeader onClick={() => setExpanded(!expanded)}>
        {title}
        <span>{expanded ? "−" : "+"}</span>
      </CollapseHeader>
      <CollapseContent expanded={expanded}>{children}</CollapseContent>
    </CollapseContainer>
  );
};
