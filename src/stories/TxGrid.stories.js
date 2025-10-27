import { TxGrid, TxGridItem } from "../components/tx-grid/tx-grid";

const TxGridStory = {
  title: "tx-design-ui/Foundation/TxGrid",
  component: TxGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxGridStory;

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <TxGrid columns="repeat(3, 1fr)" gap="16px">
        <TxGridItem>Item 1</TxGridItem>
        <TxGridItem>Item 2</TxGridItem>
        <TxGridItem>Item 3</TxGridItem>
        <TxGridItem>Item 4</TxGridItem>
        <TxGridItem>Item 5</TxGridItem>
        <TxGridItem>Item 6</TxGridItem>
      </TxGrid>
    </div>
  ),
};

export const Responsive = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <TxGrid columns="repeat(auto-fill, minmax(150px, 1fr))" gap="12px">
        {[...Array(12)].map((_, i) => (
          <TxGridItem key={i}>Item {i + 1}</TxGridItem>
        ))}
      </TxGrid>
    </div>
  ),
};
