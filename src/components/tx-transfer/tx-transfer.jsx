import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const TransferContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const TransferBox = styled.div`
  flex: 1;
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
`;

const TransferHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.borderLight};
  font-weight: 500;
`;

const TransferList = styled.div`
  padding: 8px;
  max-height: 300px;
  overflow-y: auto;
`;

const TransferItem = styled.div`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${colors.bgFillLight};
  }

  ${props =>
    props.selected &&
    `
    background: ${colors.primaryLight};
    color: ${colors.primary};
  `}
`;

const TransferControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const TxTransfer = ({ data, titles = ["Source", "Target"], ...props }) => {
  const [leftData, setLeftData] = useState(data || []);
  const [rightData, setRightData] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const moveRight = () => {
    setRightData([...rightData, ...selectedLeft]);
    setLeftData(leftData.filter(item => !selectedLeft.includes(item)));
    setSelectedLeft([]);
  };

  const moveLeft = () => {
    setLeftData([...leftData, ...selectedRight]);
    setRightData(rightData.filter(item => !selectedRight.includes(item)));
    setSelectedRight([]);
  };

  return (
    <TransferContainer {...props}>
      <TransferBox>
        <TransferHeader>{titles[0]}</TransferHeader>
        <TransferList>
          {leftData.map((item, index) => (
            <TransferItem
              key={index}
              selected={selectedLeft.includes(item)}
              onClick={() => setSelectedLeft([...selectedLeft, item])}
            >
              {item}
            </TransferItem>
          ))}
        </TransferList>
      </TransferBox>

      <TransferControls>
        <button onClick={moveRight}>→</button>
        <button onClick={moveLeft}>←</button>
      </TransferControls>

      <TransferBox>
        <TransferHeader>{titles[1]}</TransferHeader>
        <TransferList>
          {rightData.map((item, index) => (
            <TransferItem
              key={index}
              selected={selectedRight.includes(item)}
              onClick={() => setSelectedRight([...selectedRight, item])}
            >
              {item}
            </TransferItem>
          ))}
        </TransferList>
      </TransferBox>
    </TransferContainer>
  );
};

export default TxTransfer;
