import TxKbd from "../components/tx-kbd/tx-kbd";

const TxKbdStory = {
  title: "tx-design-ui/Other/TxKbd",
  component: TxKbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxKbdStory;

export const Single = {
  render: () => (
    <div>
      <p>
        Press <TxKbd>Ctrl</TxKbd> + <TxKbd>K</TxKbd> to open the command palette
      </p>
    </div>
  ),
};

export const Multiple = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <p>
        <TxKbd>Esc</TxKbd> to close
      </p>
      <p>
        <TxKbd>Ctrl</TxKbd> + <TxKbd>S</TxKbd> to save
      </p>
      <p>
        <TxKbd>Ctrl</TxKbd> + <TxKbd>Shift</TxKbd> + <TxKbd>P</TxKbd> for settings
      </p>
    </div>
  ),
};
