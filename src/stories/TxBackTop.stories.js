import TxBackTop from "../components/tx-back-top/tx-back-top";

const TxBackTopStory = {
  title: "tx-design-ui/Other/TxBackTop",
  component: TxBackTop,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    visibilityHeight: { control: "number" },
    right: { control: "text" },
    bottom: { control: "text" },
  },
};

export default TxBackTopStory;

export const Basic = {
  render: () => (
    <div style={{ minHeight: "200vh", padding: "48px" }}>
      <h1>Scroll down to see the BackTop button</h1>
      <p style={{ marginTop: "24px", lineHeight: "1.8" }}>
        This is a long page. Please scroll down to see the BackTop button appear.
      </p>
      <div style={{ marginTop: "48px" }}>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={{ marginBottom: "32px", padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
            <h2>Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        ))}
      </div>
      <TxBackTop visibilityHeight={400} />
    </div>
  ),
};

export const CustomPosition = {
  render: () => (
    <div style={{ minHeight: "200vh", padding: "48px" }}>
      <h1>BackTop with custom position</h1>
      <p style={{ marginTop: "24px", lineHeight: "1.8" }}>
        This BackTop button has been positioned at the top-right instead of bottom-right.
      </p>
      <div style={{ marginTop: "48px" }}>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} style={{ marginBottom: "32px", padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
            <h2>Section {i + 1}</h2>
            <p>Scroll down to see the button appear.</p>
          </div>
        ))}
      </div>
      <TxBackTop visibilityHeight={400} right="24px" bottom="24px" />
    </div>
  ),
};

export const CustomVisibilityHeight = {
  render: () => (
    <div style={{ minHeight: "200vh", padding: "48px" }}>
      <h1>Custom visibility height</h1>
      <p style={{ marginTop: "24px", lineHeight: "1.8" }}>
        This BackTop button will appear after scrolling down only 200px (default is 400px).
      </p>
      <div style={{ marginTop: "48px" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} style={{ marginBottom: "32px", padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
            <h2>Section {i + 1}</h2>
            <p>Scroll down just a bit to see the button appear faster.</p>
          </div>
        ))}
      </div>
      <TxBackTop visibilityHeight={200} />
    </div>
  ),
};
