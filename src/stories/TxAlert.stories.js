import TxAlert from "../components/tx-alert/tx-alert";

const TxAlertStory = {
  title: "tx-design-ui/Feedback/TxAlert",
  component: TxAlert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "info", "warning", "error"],
    },
    title: { control: "text" },
    description: { control: "text" },
    closable: { control: "boolean" },
  },
};

export default TxAlertStory;

export const Success = {
  args: {
    type: "success",
    title: "Success Alert",
    description: "This is a success alert with a description.",
    closable: false,
  },
};

export const Info = {
  args: {
    type: "info",
    title: "Info Alert",
    description: "This is an info alert with a description.",
    closable: false,
  },
};

export const Warning = {
  args: {
    type: "warning",
    title: "Warning Alert",
    description: "This is a warning alert with a description.",
    closable: false,
  },
};

export const Error = {
  args: {
    type: "error",
    title: "Error Alert",
    description: "This is an error alert with a description.",
    closable: false,
  },
};

export const Closable = {
  args: {
    type: "info",
    title: "Closable Alert",
    description: "This alert can be closed by clicking the close button.",
    closable: true,
  },
};

export const WithoutDescription = {
  args: {
    type: "info",
    title: "Alert without description",
    closable: false,
  },
};

export const WithoutTitle = {
  args: {
    type: "warning",
    description: "This alert only has a description, no title.",
    closable: false,
  },
};

export const WithChildren = {
  args: {
    type: "info",
    children: (
      <>
        This is a custom alert with children content.
        <br />
        <strong>Important:</strong> You can add any content here.
      </>
    ),
    closable: false,
  },
};
