import TxEmpty from "../components/tx-empty/tx-empty";

const TxEmptyStory = {
  title: "tx-design-ui/Data Display/TxEmpty",
  component: TxEmpty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxEmptyStory;

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxEmpty />
    </div>
  ),
};

export const WithDescription = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxEmpty image="📊" title="No Data" description="There is no data to display" />
    </div>
  ),
};

export const CustomEmpty = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxEmpty image="🔍" title="Not Found" description="Please try again" />
    </div>
  ),
};
