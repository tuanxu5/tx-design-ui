import TxSegmented from "../components/tx-segmented/tx-segmented";

const TxSegmentedStory = {
  title: "tx-design-ui/Other/TxSegmented",
  component: TxSegmented,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxSegmentedStory;

const options = [
  { label: "List", value: "list" },
  { label: "Grid", value: "grid" },
  { label: "Card", value: "card" },
];

export const Basic = {
  render: () => <TxSegmented options={options} />,
};

export const MoreOptions = {
  render: () => (
    <TxSegmented
      options={[
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Pending", value: "pending" },
        { label: "Completed", value: "completed" },
      ]}
    />
  ),
};
