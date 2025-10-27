import TxCountdown from "../components/tx-countdown/tx-countdown";

const TxCountdownStory = {
  title: "tx-design-ui/Data Display/TxCountdown",
  component: TxCountdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxCountdownStory;

// Calculate date 7 days from now
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);

export const NextWeek = {
  args: {
    targetDate: futureDate.toISOString(),
    size: "32px",
  },
};

export const CustomSize = {
  args: {
    targetDate: futureDate.toISOString(),
    size: "48px",
  },
};

export const ShortTime = {
  render: () => {
    const shortDate = new Date();
    shortDate.setMinutes(shortDate.getMinutes() + 5);
    return <TxCountdown targetDate={shortDate.toISOString()} size="36px" />;
  },
};
