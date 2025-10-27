import styled from "styled-components";
import colors from "../../theme/colors";

const EditorContainer = styled.div`
  border: 1px solid ${colors.borderLight};
  border-radius: 8px;
  overflow: hidden;
`;

const EditorToolbar = styled.div`
  background: ${colors.bgFillLight};
  padding: 8px 16px;
  border-bottom: 1px solid ${colors.borderLight};
  display: flex;
  gap: 8px;
`;

const EditorButton = styled.button`
  padding: 4px 8px;
  background: transparent;
  border: 1px solid ${colors.borderLight};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${colors.bgFillMedium};
  }
`;

const EditorContent = styled.textarea`
  width: 100%;
  border: none;
  padding: 16px;
  font-size: 14px;
  font-family: monospace;
  resize: vertical;
  min-height: 300px;

  &:focus {
    outline: none;
  }
`;

const TxEditor = ({ value = "", onChange, placeholder = "Start typing...", ...props }) => {
  return (
    <EditorContainer {...props}>
      <EditorToolbar>
        <EditorButton>B</EditorButton>
        <EditorButton>I</EditorButton>
        <EditorButton>U</EditorButton>
      </EditorToolbar>
      <EditorContent value={value} onChange={e => onChange?.(e.target.value)} placeholder={placeholder} />
    </EditorContainer>
  );
};

export default TxEditor;
