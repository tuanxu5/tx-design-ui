import TxButton from "../components/tx-button/tx-button";
import TxPopconfirm from "../components/tx-popconfirm/tx-popconfirm";

const TxPopconfirmStory = {
  title: "tx-design-ui/Feedback/TxPopconfirm",
  component: TxPopconfirm,
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
    okText: { control: "text" },
    cancelText: { control: "text" },
    okType: { control: "text" },
    onConfirm: { action: "confirmed" },
    onCancel: { action: "cancelled" },
  },
};

export default TxPopconfirmStory;

export const Preview = {
  args: {
    title: "Are you sure?",
    placement: "bottom",
    okText: "Yes",
    cancelText: "No",
    children: <TxButton type="danger">Delete</TxButton>,
  },
};

export const BasicUsage = () => {
  const handleConfirm = () => {
    console.log("Confirmed!");
  };

  const handleCancel = () => {
    console.log("Cancelled!");
  };

  return (
    <div style={{ padding: "100px" }}>
      <TxPopconfirm title="Are you sure to delete this item?" onConfirm={handleConfirm} onCancel={handleCancel}>
        <TxButton type="danger">Delete</TxButton>
      </TxPopconfirm>
    </div>
  );
};

export const Placements = () => {
  return (
    <div style={{ padding: "100px", display: "flex", flexDirection: "column", gap: "60px", alignItems: "center" }}>
      <div>
        <TxPopconfirm title="Delete this item?" placement="top">
          <TxButton type="danger">Top</TxButton>
        </TxPopconfirm>
      </div>
      <div style={{ display: "flex", gap: "60px" }}>
        <TxPopconfirm title="Delete this item?" placement="left">
          <TxButton type="danger">Left</TxButton>
        </TxPopconfirm>
        <TxPopconfirm title="Delete this item?" placement="right">
          <TxButton type="danger">Right</TxButton>
        </TxPopconfirm>
      </div>
      <div>
        <TxPopconfirm title="Delete this item?" placement="bottom">
          <TxButton type="danger">Bottom</TxButton>
        </TxPopconfirm>
      </div>
    </div>
  );
};

export const CustomText = () => {
  return (
    <div style={{ padding: "100px", display: "flex", gap: "20px" }}>
      <TxPopconfirm
        title="Do you want to archive this?"
        okText="Archive"
        cancelText="Cancel"
        onConfirm={() => console.log("Archived")}
      >
        <TxButton>Archive</TxButton>
      </TxPopconfirm>

      <TxPopconfirm
        title="Confirm submission?"
        okText="Submit"
        cancelText="Back"
        okType="success"
        onConfirm={() => console.log("Submitted")}
      >
        <TxButton type="primary">Submit</TxButton>
      </TxPopconfirm>
    </div>
  );
};

export const LongTitle = () => {
  return (
    <div style={{ padding: "100px" }}>
      <TxPopconfirm title="Are you sure you want to delete this item? This action cannot be undone and all associated data will be permanently removed.">
        <TxButton type="danger">Delete</TxButton>
      </TxPopconfirm>
    </div>
  );
};
