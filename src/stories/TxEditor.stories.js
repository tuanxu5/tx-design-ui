import { useState } from "react";
import TxEditor from "../components/tx-editor/tx-editor";

const TxEditorStory = {
  title: "tx-design-ui/Foundation/TxEditor",
  component: TxEditor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxEditorStory;

function EditorDemo() {
  const [value, setValue] = useState("Start typing...");

  return (
    <div style={{ width: "100%", maxWidth: "700px" }}>
      <TxEditor value={value} onChange={setValue} />
    </div>
  );
}

export const Interactive = EditorDemo;
