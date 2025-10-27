import TxRate from "../components/tx-rate/tx-rate";

const TxRateStory = {
  title: "tx-design-ui/Other/TxRate",
  component: TxRate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxRateStory;

export const Basic = {
  args: {
    value: 3,
    count: 5,
  },
};

export const Large = {
  args: {
    value: 4,
    count: 5,
    size: "32px",
  },
};

export const HalfStar = {
  args: {
    value: 2.5,
    count: 5,
    allowHalf: true,
  },
};
