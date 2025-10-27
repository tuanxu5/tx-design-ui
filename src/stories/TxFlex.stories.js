import TxFlex from "../components/tx-flex/tx-flex";

const TxFlexStory = {
  title: "tx-design-ui/Foundation/TxFlex",
  component: TxFlex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxFlexStory;

export const Basic = {
  render: () => (
    <TxFlex gap="16px" width="100%" maxWidth="600px">
      <div style={{ padding: "16px", background: "#f0f0f0", borderRadius: "4px" }}>Item 1</div>
      <div style={{ padding: "16px", background: "#f0f0f0", borderRadius: "4px" }}>Item 2</div>
      <div style={{ padding: "16px", background: "#f0f0f0", borderRadius: "4px" }}>Item 3</div>
    </TxFlex>
  ),
};

export const Vertical = {
  render: () => (
    <TxFlex direction="column" gap="8px" width="200px">
      <div style={{ padding: "12px", background: "#f0f0f0", borderRadius: "4px" }}>Item 1</div>
      <div style={{ padding: "12px", background: "#f0f0f0", borderRadius: "4px" }}>Item 2</div>
      <div style={{ padding: "12px", background: "#f0f0f0", borderRadius: "4px" }}>Item 3</div>
    </TxFlex>
  ),
};

export const Centered = {
  render: () => (
    <TxFlex justify="center" align="center" gap="16px" width="100%" maxWidth="400px" height="200px">
      <div style={{ padding: "16px", background: "#f0f0f0", borderRadius: "4px" }}>Centered</div>
    </TxFlex>
  ),
};
