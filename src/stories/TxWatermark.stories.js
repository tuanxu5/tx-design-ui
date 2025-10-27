import TxWatermark from "../components/tx-watermark/tx-watermark";

const TxWatermarkStory = {
  title: "tx-design-ui/Data Display/TxWatermark",
  component: TxWatermark,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxWatermarkStory;

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "500px", padding: "40px", background: "white", borderRadius: "8px" }}>
      <TxWatermark text="CONFIDENTIAL">
        <p>This content has a watermark overlay applied to it.</p>
      </TxWatermark>
    </div>
  ),
};

export const Custom = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "500px", padding: "40px", background: "white", borderRadius: "8px" }}>
      <TxWatermark text="DRAFT" color="#00bcff" opacity={0.2}>
        <h2>Document Title</h2>
        <p>Document content goes here...</p>
      </TxWatermark>
    </div>
  ),
};
