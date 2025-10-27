import TxTransfer from "../components/tx-transfer/tx-transfer";

const TxTransferStory = {
  title: "tx-design-ui/Data Entry/TxTransfer",
  component: TxTransfer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxTransferStory;

const data = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "700px" }}>
      <TxTransfer data={data} />
    </div>
  ),
};

export const CustomTitles = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "700px" }}>
      <TxTransfer data={data} titles={["Available", "Selected"]} />
    </div>
  ),
};
