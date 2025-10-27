import TxTextGradient from "../components/tx-text-gradient/tx-text-gradient";

const TxTextGradientStory = {
  title: "tx-design-ui/Other/TxTextGradient",
  component: TxTextGradient,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxTextGradientStory;

export const Default = {
  args: {
    children: "Gradient Text",
  },
};

export const CustomGradient = {
  args: {
    children: "Custom Purple Gradient",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
};

export const BlueGreen = {
  args: {
    children: "Blue to Green",
    gradient: "linear-gradient(135deg, #00bcff 0%, #00d9ff 100%)",
  },
};

export const LargeSize = {
  args: {
    children: "Large Gradient Text",
    size: "48px",
    weight: "700",
  },
};
