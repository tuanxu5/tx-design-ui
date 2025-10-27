import TxChart from "../components/tx-chart/tx-chart";

const TxChartStory = {
  title: "tx-design-ui/Other/TxChart",
  component: TxChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["bar", "line", "pie", "doughnut"],
    },
  },
};

export default TxChartStory;

export const Placeholder = {
  args: {
    type: "bar",
    data: { labels: ["A", "B", "C"], values: [10, 20, 30] },
    height: "300px",
  },
};
