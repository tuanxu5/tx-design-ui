import TxTag from "../components/tx-tag/tx-tag";

const TxTagStory = {
  title: "tx-design-ui/TxTag",
  component: TxTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "info"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    closable: { control: "boolean" },
    bordered: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

export default TxTagStory;

export const Preview = {
  args: {
    children: "Tag",
    color: "default",
    size: "medium",
    closable: false,
    bordered: false,
  },
};

export const BasicUsage = () => {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <TxTag>Default Tag</TxTag>
      <TxTag color="primary">Primary Tag</TxTag>
      <TxTag color="success">Success Tag</TxTag>
      <TxTag color="warning">Warning Tag</TxTag>
      <TxTag color="danger">Danger Tag</TxTag>
      <TxTag color="info">Info Tag</TxTag>
    </div>
  );
};

export const Closable = () => {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <TxTag closable onClose={() => console.log("Tag closed")}>
        Closable Tag
      </TxTag>
      <TxTag color="primary" closable>
        Primary Tag
      </TxTag>
      <TxTag color="danger" closable>
        Danger Tag
      </TxTag>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <TxTag size="small" color="primary">
        Small
      </TxTag>
      <TxTag size="medium" color="primary">
        Medium
      </TxTag>
      <TxTag size="large" color="primary">
        Large
      </TxTag>
    </div>
  );
};

export const Bordered = () => {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <TxTag bordered>Default</TxTag>
      <TxTag color="primary" bordered>
        Primary
      </TxTag>
      <TxTag color="success" bordered>
        Success
      </TxTag>
      <TxTag color="warning" bordered>
        Warning
      </TxTag>
      <TxTag color="danger" bordered>
        Danger
      </TxTag>
    </div>
  );
};
