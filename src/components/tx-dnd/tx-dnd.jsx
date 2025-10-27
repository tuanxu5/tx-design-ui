import { useRef, useState } from "react";
import styled from "styled-components";
import { TxIconOutline } from "../../assets/icons/outline";
import colors from "../../theme/colors";

const DropZone = styled.div`
  border: 2px dashed ${props => (props.isDragging ? colors.primary : colors.borderLight)};
  background: ${props => (props.isDragging ? colors.primaryLight : colors.bgFillLight)};
  border-radius: 8px;
  padding: ${props => (props.compact ? "20px" : "40px")};
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${colors.primary};
    background: ${colors.primaryLight};
  }
`;

const DropZoneIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: ${colors.textSecondary};
`;

const DropZoneText = styled.div`
  color: ${colors.textSecondary};
  font-size: 14px;
`;

const TxDnd = ({ onDrop, compact = false, children, ...props }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (onDrop) {
      onDrop(files);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = e => {
    const files = Array.from(e.target.files);
    if (onDrop) {
      onDrop(files);
    }
  };

  return (
    <>
      <input ref={fileInputRef} type="file" multiple style={{ display: "none" }} onChange={handleFileChange} />
      <DropZone
        isDragging={isDragging}
        compact={compact}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        {...props}
      >
        <DropZoneIcon>
          <TxIconOutline.IconCrossSmall style={{ width: "48px", height: "48px" }} />
        </DropZoneIcon>
        <DropZoneText>{children || "Drag and drop files here, or click to select"}</DropZoneText>
      </DropZone>
    </>
  );
};

export default TxDnd;
