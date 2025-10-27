import TxDivider from "../components/tx-divider/tx-divider";

const TxDividerStory = {
  title: "tx-design-ui/Data Display/TxDivider",
  component: TxDivider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxDividerStory;

export const Horizontal = {
  render: () => (
    <div style={{ width: "400px" }}>
      <p>Content above the divider</p>
      <TxDivider />
      <p>Content below the divider</p>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>Left</span>
      <TxDivider vertical />
      <span>Middle</span>
      <TxDivider vertical />
      <span>Right</span>
    </div>
  ),
};

export const CustomThickness = {
  render: () => (
    <div style={{ width: "400px" }}>
      <p>Normal divider</p>
      <TxDivider thickness="1px" />
      <p>Thick divider</p>
      <TxDivider thickness="4px" />
    </div>
  ),
};
