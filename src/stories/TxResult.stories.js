import { TxButton } from "../components/tx-button/tx-button";
import TxResult from "../components/tx-result/tx-result";

const TxResultStory = {
  title: "tx-design-ui/Feedback/TxResult",
  component: TxResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    title: { control: "text" },
    subTitle: { control: "text" },
  },
};

export default TxResultStory;

export const Success = {
  args: {
    status: "success",
    title: "Successfully Purchased!",
    subTitle: "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",
    extra: [
      <TxButton key="success-go-console" type="primary" label="Go Console" />,
      <TxButton key="success-print" label="Print" />,
    ],
  },
};

export const Error = {
  args: {
    status: "error",
    title: "Submission Failed",
    subTitle: "Please check and modify the following information before resubmitting.",
    extra: [<TxButton key="error-go-console" type="primary" label="Go Console" />],
  },
};

export const Warning = {
  args: {
    status: "warning",
    title: "Your operation has been executed",
    subTitle: "This is a warning feedback. Please check your information.",
    extra: [<TxButton key="warning-go-console" type="primary" label="Go Console" />],
  },
};

export const Info = {
  args: {
    status: "info",
    title: "Your operation has been recorded",
    subTitle: "The content of the modal dialog tells you about something.",
    extra: [
      <TxButton key="info-primary" type="primary" label="Primary" />,
      <TxButton key="info-secondary" label="Secondary" />,
    ],
  },
};

export const CustomIcon = {
  args: {
    status: "success",
    icon: "🎉",
    title: "Congratulations!",
    subTitle: "You have successfully completed the task.",
    extra: [<TxButton key="customicon-continue" type="primary" label="Continue" />],
  },
};
