import TxLoading from "../components/tx-loading/tx-loading";

const TxLoadingStory = {
  title: "tx-design-ui/TxLoading",
  component: TxLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    text: { control: "text" },
    fullscreen: { control: "boolean" },
    spinnerColor: { control: "color" },
    textColor: { control: "color" },
  },
};

export default TxLoadingStory;

export const Preview = {
  args: {
    size: "medium",
    text: "Loading...",
    fullscreen: false,
  },
};

export const BasicUsage = () => {
  return (
    <div style={{ padding: "40px" }}>
      <TxLoading />
    </div>
  );
};

export const WithText = () => {
  return (
    <div style={{ padding: "40px" }}>
      <TxLoading text="Loading..." />
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", gap: "40px", alignItems: "center", padding: "40px" }}>
      <TxLoading size="small" text="Small" />
      <TxLoading size="medium" text="Medium" />
      <TxLoading size="large" text="Large" />
    </div>
  );
};

export const CustomColors = () => {
  return (
    <div style={{ display: "flex", gap: "40px", alignItems: "center", padding: "40px" }}>
      <TxLoading spinnerColor="#6253e1" textColor="#6253e1" text="Custom Purple" />
      <TxLoading spinnerColor="#ff6b6b" textColor="#ff6b6b" text="Custom Red" />
      <TxLoading spinnerColor="#4ecdc4" textColor="#4ecdc4" text="Custom Teal" />
    </div>
  );
};
