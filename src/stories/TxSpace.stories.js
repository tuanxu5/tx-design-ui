import TxSpace from "../components/tx-space/tx-space";

const TxSpaceStory = {
  title: "tx-design-ui/Other/TxSpace",
  component: TxSpace,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxSpaceStory;

export const Horizontal = {
  render: () => (
    <TxSpace size="16px">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </TxSpace>
  ),
};

export const Vertical = {
  render: () => (
    <TxSpace direction="vertical" size="12px" width="200px">
      <button>Item 1</button>
      <button>Item 2</button>
      <button>Item 3</button>
    </TxSpace>
  ),
};

export const LargeGap = {
  render: () => (
    <TxSpace size="32px">
      <div>Large</div>
      <div>Gap</div>
    </TxSpace>
  ),
};
