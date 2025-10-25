import TxButton from "../components/tx-button/tx-button";
import TxTooltip from "../components/tx-tooltip/tx-tooltip";

const TxTooltipStory = {
  title: "tx-design-ui/TxTooltip",
  component: TxTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    color: { control: "color" },
    trigger: {
      control: "select",
      options: ["hover", "click"],
    },
  },
};

export default TxTooltipStory;

export const Preview = {
  args: {
    title: "Tooltip text",
    placement: "top",
    trigger: "hover",
    children: <TxButton>Hover me</TxButton>,
  },
};

export const BasicUsage = () => {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <TxTooltip title="This is a tooltip">
        <TxButton>Hover me</TxButton>
      </TxTooltip>
    </div>
  );
};

export const Placements = () => {
  return (
    <div style={{ padding: "100px", display: "flex", flexDirection: "column", gap: "60px", alignItems: "center" }}>
      <div>
        <TxTooltip title="Top tooltip" placement="top">
          <TxButton>Top</TxButton>
        </TxTooltip>
      </div>
      <div style={{ display: "flex", gap: "60px" }}>
        <TxTooltip title="Left tooltip" placement="left">
          <TxButton>Left</TxButton>
        </TxTooltip>
        <TxTooltip title="Right tooltip" placement="right">
          <TxButton>Right</TxButton>
        </TxTooltip>
      </div>
      <div>
        <TxTooltip title="Bottom tooltip" placement="bottom">
          <TxButton>Bottom</TxButton>
        </TxTooltip>
      </div>
    </div>
  );
};

export const CustomColor = () => {
  return (
    <div style={{ padding: "100px", display: "flex", gap: "20px" }}>
      <TxTooltip title="Custom purple" color="#6253e1">
        <TxButton>Purple</TxButton>
      </TxTooltip>
      <TxTooltip title="Custom red" color="#ff6b6b">
        <TxButton>Red</TxButton>
      </TxTooltip>
      <TxTooltip title="Custom teal" color="#4ecdc4">
        <TxButton>Teal</TxButton>
      </TxTooltip>
    </div>
  );
};

export const ClickTrigger = () => {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <TxTooltip title="Click tooltip" trigger="click">
        <TxButton>Click me</TxButton>
      </TxTooltip>
    </div>
  );
};
