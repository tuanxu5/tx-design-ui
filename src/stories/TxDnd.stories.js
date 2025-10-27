import { useState } from "react";
import TxDnd from "../components/tx-dnd/tx-dnd";

const TxDndStory = {
  title: "tx-design-ui/Foundation/TxDnd",
  component: TxDnd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxDndStory;

function DndDemo() {
  const [files, setFiles] = useState([]);

  const handleDrop = droppedFiles => {
    setFiles(droppedFiles);
    console.log("Dropped files:", droppedFiles);
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <TxDnd onDrop={handleDrop}>Drop files here or click to browse</TxDnd>
      {files.length > 0 && (
        <div style={{ marginTop: "16px", fontSize: "14px", color: "#666" }}>{files.length} file(s) selected</div>
      )}
    </div>
  );
}

export const Interactive = DndDemo;

export const Compact = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxDnd compact>Upload files</TxDnd>
    </div>
  ),
};
