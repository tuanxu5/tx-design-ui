import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const TreeSelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const TreeSelectDropdown = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  margin-top: 4px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

const TreeItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: ${colors.bgFillLight};
  }
`;

const TxTreeSelect = ({ data, ...props }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue] = useState("");

  const renderTree = items => items.map(item => <TreeItem key={item.value}>{item.label}</TreeItem>);

  return (
    <TreeSelectContainer {...props}>
      <input
        readOnly
        value={selectedValue}
        onClick={() => setOpen(!open)}
        placeholder="Select..."
        style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ddd" }}
      />
      <TreeSelectDropdown open={open}>{data && renderTree(data)}</TreeSelectDropdown>
    </TreeSelectContainer>
  );
};

export default TxTreeSelect;
