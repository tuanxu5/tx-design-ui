import TxAnchor from "../components/tx-anchor/tx-anchor";

const TxAnchorStory = {
  title: "tx-design-ui/Navigation/TxAnchor",
  component: TxAnchor,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    offsetTop: { control: "number" },
  },
};

export default TxAnchorStory;

const items = [
  {
    key: "section-1",
    title: "Section 1",
  },
  {
    key: "section-2",
    title: "Section 2",
  },
  {
    key: "section-3",
    title: "Section 3",
  },
];

export const Preview = {
  args: {
    items,
    offsetTop: 0,
  },
};

export const BasicUsage = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <TxAnchor items={items} />
      <div>
        <div id="section-1" style={{ marginBottom: "500px" }}>
          <h2>Section 1</h2>
          <p>Content of section 1...</p>
        </div>
        <div id="section-2" style={{ marginBottom: "500px" }}>
          <h2>Section 2</h2>
          <p>Content of section 2...</p>
        </div>
        <div id="section-3">
          <h2>Section 3</h2>
          <p>Content of section 3...</p>
        </div>
      </div>
    </div>
  );
};
