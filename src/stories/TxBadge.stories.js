import { TxAvatar } from "../components/tx-avatar/tx-avatar";
import { TxBadge } from "../components/tx-badge/tx-badge";

export default {
  title: "tx-design-ui/Data Display/TxBadge",
  component: TxBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number" },
    dot: { control: "boolean" },
    showZero: { control: "boolean" },
    overflowCount: { control: "number" },
    status: {
      control: { type: "select" },
      options: ["success", "error", "warning", "processing", "default"],
    },
  },
};

export const Basic = {
  render: args => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <TxBadge {...args} count={5}>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge {...args} count={0} showZero>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
    </div>
  ),
};

export const OverflowCount = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <TxBadge count={99}>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge count={100}>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge count={999} overflowCount={999}>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge count={1000} overflowCount={999}>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
    </div>
  ),
};

export const Dot = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <TxBadge dot>
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge dot>
        <span style={{ fontSize: "20px" }}>🔔</span>
      </TxBadge>
      <TxBadge dot>
        <a href="#" style={{ fontSize: "14px" }}>
          Link something
        </a>
      </TxBadge>
    </div>
  ),
};

export const Status = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <TxBadge count={5} status="success">
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge count={5} status="error">
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge count={5} status="warning">
        <TxAvatar shape="square" size="large" />
      </TxBadge>
      <TxBadge count={5} status="processing">
        <TxAvatar shape="square" size="large" />
      </TxBadge>
    </div>
  ),
};

export const Standalone = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <TxBadge count={25} />
      <TxBadge count={4} status="success" />
      <TxBadge count={109} status="error" />
      <TxBadge count={200} status="warning" overflowCount={150} />
    </div>
  ),
};

export const Ribbon = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TxBadge.Ribbon text="Hippies">
        <div
          style={{
            width: "200px",
            height: "100px",
            background: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Push to start
        </div>
      </TxBadge.Ribbon>
      <TxBadge.Ribbon text="Hippies" status="success" placement="start">
        <div
          style={{
            width: "200px",
            height: "100px",
            background: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Push to start
        </div>
      </TxBadge.Ribbon>
    </div>
  ),
};

export const RibbonStatus = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <TxBadge.Ribbon text="Default">
        <div
          style={{
            width: "150px",
            height: "80px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        />
      </TxBadge.Ribbon>
      <TxBadge.Ribbon text="Success" status="success">
        <div
          style={{
            width: "150px",
            height: "80px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        />
      </TxBadge.Ribbon>
      <TxBadge.Ribbon text="Error" status="error">
        <div
          style={{
            width: "150px",
            height: "80px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        />
      </TxBadge.Ribbon>
      <TxBadge.Ribbon text="Warning" status="warning">
        <div
          style={{
            width: "150px",
            height: "80px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        />
      </TxBadge.Ribbon>
      <TxBadge.Ribbon text="Processing" status="processing">
        <div
          style={{
            width: "150px",
            height: "80px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        />
      </TxBadge.Ribbon>
    </div>
  ),
};
