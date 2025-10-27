import TxSplitter from "../components/tx-splitter/tx-splitter";

const TxSplitterStory = {
  title: "tx-design-ui/Foundation/TxSplitter",
  component: TxSplitter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxSplitterStory;

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <TxSplitter width="100%" height="400px">
        <div style={{ padding: "20px" }}>Left Panel</div>
        <div style={{ padding: "20px" }}>Right Panel</div>
      </TxSplitter>
    </div>
  ),
};

export const ThreePanels = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <TxSplitter width="100%" height="300px">
        <div style={{ padding: "20px" }}>Panel 1</div>
        <div style={{ padding: "20px" }}>Panel 2</div>
        <div style={{ padding: "20px" }}>Panel 3</div>
      </TxSplitter>
    </div>
  ),
};
