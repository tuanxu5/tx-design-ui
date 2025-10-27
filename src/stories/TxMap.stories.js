import TxMap from "../components/tx-map/tx-map";

const TxMapStory = {
  title: "tx-design-ui/Other/TxMap",
  component: TxMap,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    center: { control: "text" },
    zoom: { control: "number" },
    height: { control: "text" },
  },
};

export default TxMapStory;

export const Basic = {
  args: {
    center: "New York, NY",
    zoom: 12,
    height: "400px",
  },
};

export const CustomLocation = {
  args: {
    center: "Tokyo, Japan",
    zoom: 14,
    height: "500px",
  },
};

export const Compact = {
  args: {
    center: "San Francisco, CA",
    zoom: 13,
    height: "300px",
  },
};
