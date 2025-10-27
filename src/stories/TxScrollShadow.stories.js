import TxScrollShadow from "../components/tx-scroll-shadow/tx-scroll-shadow";

const TxScrollShadowStory = {
  title: "tx-design-ui/Feedback/TxScrollShadow",
  component: TxScrollShadow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxScrollShadowStory;

export const Default = {
  render: () => (
    <TxScrollShadow height="300px">
      <div style={{ padding: "20px" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>
            Item {i + 1}: Scroll this content to see shadow effects at the top and bottom. This demonstrates the scroll
            shadow component in action.
          </p>
        ))}
      </div>
    </TxScrollShadow>
  ),
};
