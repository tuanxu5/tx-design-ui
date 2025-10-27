import TxDateRangePicker from "../components/tx-date-range-picker/tx-date-range-picker";

const TxDateRangePickerStory = {
  title: "tx-design-ui/Data Entry/TxDateRangePicker",
  component: TxDateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxDateRangePickerStory;

export const Basic = {
  render: () => <TxDateRangePicker />,
};

export const WithCallback = {
  render: () => <TxDateRangePicker onChange={range => console.log("Date range:", range)} />,
};
