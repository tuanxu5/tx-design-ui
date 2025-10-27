import { TxCard } from "../components/tx-card/tx-card";

const TxCardStory = {
  title: "tx-design-ui/Data Display/TxCard",
  component: TxCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxCardStory;

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxCard title="Card Title">This is the card content.</TxCard>
    </div>
  ),
};

export const WithFooter = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxCard title="Card Title" footer={<button>Action</button>}>
        Card content with footer
      </TxCard>
    </div>
  ),
};

export const Hoverable = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxCard title="Hoverable Card" hoverable>
        Hover over me!
      </TxCard>
    </div>
  ),
};
