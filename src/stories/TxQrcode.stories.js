import TxQrcode from "../components/tx-qrcode/tx-qrcode";

const TxQrcodeStory = {
  title: "tx-design-ui/Data Display/TxQrcode",
  component: TxQrcode,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
  },
};

export default TxQrcodeStory;

export const Basic = {
  args: {
    value: "https://www.example.com",
    size: 200,
  },
};

export const Small = {
  args: {
    value: "Hello World",
    size: 150,
  },
};

export const Large = {
  args: {
    value: "https://example.com",
    size: 300,
  },
};
