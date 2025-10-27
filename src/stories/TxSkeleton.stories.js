import TxSkeleton from "../components/tx-skeleton/tx-skeleton";

const TxSkeletonStory = {
  title: "tx-design-ui/Other/TxSkeleton",
  component: TxSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxSkeletonStory;

export const Basic = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxSkeleton width="100%" height="20px" />
    </div>
  ),
};

export const Multiple = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <TxSkeleton width="100%" height="60px" style={{ marginBottom: "16px" }} />
      <TxSkeleton width="80%" height="20px" style={{ marginBottom: "8px" }} />
      <TxSkeleton width="60%" height="20px" />
    </div>
  ),
};

export const Circle = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <TxSkeleton width="40px" variant="circle" />
      <div>
        <TxSkeleton width="150px" height="16px" style={{ marginBottom: "8px" }} />
        <TxSkeleton width="100px" height="14px" />
      </div>
    </div>
  ),
};
