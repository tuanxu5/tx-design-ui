import { useState } from "react";
import { TxUpload } from "../components/tx-upload/tx-upload";

export default {
  title: "tx-design-ui/Data Entry/TxUpload",
  component: TxUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    accept: { control: "text" },
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
    listType: {
      control: { type: "select" },
      options: ["text", "picture", "picture-card"],
    },
    onChange: { action: "changed" },
    onRemove: { action: "removed" },
  },
};

export const Basic = {
  render: function BasicComponent(args) {
    const [fileList, setFileList] = useState([]);
    return (
      <div style={{ width: "400px" }}>
        <TxUpload {...args} fileList={fileList} onChange={setFileList} />
      </div>
    );
  },
};

export const DefaultFileList = {
  render: () => {
    const defaultFiles = [
      {
        uid: "1",
        name: "document.pdf",
        status: "done",
        url: "https://example.com/document.pdf",
      },
      {
        uid: "2",
        name: "image.png",
        status: "done",
        url: "https://example.com/image.png",
      },
    ];
    return (
      <div style={{ width: "400px" }}>
        <TxUpload defaultFileList={defaultFiles} />
      </div>
    );
  },
};

export const Multiple = {
  render: function MultipleComponent() {
    const [fileList, setFileList] = useState([]);
    return (
      <div style={{ width: "400px" }}>
        <TxUpload multiple fileList={fileList} onChange={setFileList} />
      </div>
    );
  },
};

export const PictureCard = {
  render: function PictureCardComponent() {
    const [fileList, setFileList] = useState([]);
    return (
      <div>
        <TxUpload listType="picture-card" accept="image/*" multiple fileList={fileList} onChange={setFileList} />
      </div>
    );
  },
};

export const Disabled = {
  render: () => (
    <div style={{ width: "400px" }}>
      <TxUpload disabled />
    </div>
  ),
};

export const CustomAccept = {
  render: function CustomAcceptComponent() {
    const [fileList, setFileList] = useState([]);
    return (
      <div style={{ width: "400px" }}>
        <TxUpload accept="image/*" multiple fileList={fileList} onChange={setFileList} />
      </div>
    );
  },
};

export const WithMaxSize = {
  render: function WithMaxSizeComponent() {
    const [fileList, setFileList] = useState([]);
    return (
      <div style={{ width: "400px" }}>
        <TxUpload maxSize={2} fileList={fileList} onChange={setFileList} />
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>Max file size: 2MB</p>
      </div>
    );
  },
};

export const CustomChildren = {
  render: function CustomChildrenComponent() {
    const [fileList, setFileList] = useState([]);
    return (
      <div style={{ width: "400px" }}>
        <TxUpload fileList={fileList} onChange={setFileList}>
          <div
            style={{
              padding: "20px",
              border: "2px dashed #00a4db",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>📁</div>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>Drop files here or click to browse</div>
          </div>
        </TxUpload>
      </div>
    );
  },
};
