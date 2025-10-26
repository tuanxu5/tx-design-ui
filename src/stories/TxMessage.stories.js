import { TxButton } from "../components/tx-button/tx-button";
import { TxMessage } from "../components/tx-message/tx-message";

const TxMessageStory = {
  title: "tx-design-ui/Feedback/TxMessage",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxMessageStory;

export const Basic = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <TxButton onClick={() => TxMessage.info("This is an info message")}>Info</TxButton>
      <TxButton onClick={() => TxMessage.success("This is a success message")}>Success</TxButton>
      <TxButton onClick={() => TxMessage.warning("This is a warning message")}>Warning</TxButton>
      <TxButton onClick={() => TxMessage.error("This is an error message")}>Error</TxButton>
    </div>
  ),
};

export const WithDescription = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <TxButton
        onClick={() =>
          TxMessage.open({
            type: "success",
            content: "Success!",
            description: "Your operation has been completed successfully.",
          })
        }
      >
        Success with Description
      </TxButton>
      <TxButton
        onClick={() =>
          TxMessage.open({
            type: "error",
            content: "Error Occurred",
            description: "Something went wrong. Please try again later.",
          })
        }
      >
        Error with Description
      </TxButton>
    </div>
  ),
};

export const CustomDuration = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <TxButton onClick={() => TxMessage.info("1 second", 1000)}>1 Second</TxButton>
      <TxButton onClick={() => TxMessage.info("3 seconds", 3000)}>3 Seconds</TxButton>
      <TxButton onClick={() => TxMessage.info("5 seconds", 5000)}>5 Seconds</TxButton>
      <TxButton
        onClick={() =>
          TxMessage.open({
            type: "info",
            content: "Won't auto close",
            duration: 0,
            closable: true,
          })
        }
      >
        No Auto Close
      </TxButton>
    </div>
  ),
};

export const Closable = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <TxButton
        onClick={() =>
          TxMessage.open({
            type: "info",
            content: "This message can be closed manually",
            closable: true,
            duration: 0,
          })
        }
      >
        Show Closable Message
      </TxButton>
    </div>
  ),
};

export const MultipleMessages = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
      <TxButton
        onClick={() => {
          TxMessage.success("First message");
          setTimeout(() => TxMessage.info("Second message"), 300);
          setTimeout(() => TxMessage.warning("Third message"), 600);
        }}
      >
        Show Multiple Messages
      </TxButton>
      <TxButton onClick={() => TxMessage.destroy()}>Clear All Messages</TxButton>
    </div>
  ),
};

export const LongContent = {
  render: () => (
    <TxButton
      onClick={() =>
        TxMessage.open({
          type: "info",
          content: "Long Message Title",
          description:
            "This is a very long message description that demonstrates how the message component handles longer content. It should wrap properly and maintain good readability.",
          duration: 5000,
          closable: true,
        })
      }
    >
      Show Long Message
    </TxButton>
  ),
};
