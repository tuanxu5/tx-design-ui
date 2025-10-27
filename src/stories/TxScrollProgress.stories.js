import TxScrollProgress from "../components/tx-scroll-progress/tx-scroll-progress";

const TxScrollProgressStory = {
  title: "tx-design-ui/Feedback/TxScrollProgress",
  component: TxScrollProgress,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default TxScrollProgressStory;

export const Fixed = {
  render: () => (
    <div>
      <TxScrollProgress fixed />
      <div style={{ padding: "40px" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>
            Scroll down to see the progress bar at the top of the page. This is paragraph {i + 1}. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    </div>
  ),
};

export const Sticky = {
  render: () => (
    <div>
      <TxScrollProgress fixed={false} top="64px" />
      <div style={{ padding: "40px" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>
            This is a sticky progress bar. This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        ))}
      </div>
    </div>
  ),
};
