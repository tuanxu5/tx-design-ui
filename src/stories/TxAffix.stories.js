import TxAffix from "../components/tx-affix/tx-affix";
import { TxButton } from "../components/tx-button/tx-button";

const TxAffixStory = {
  title: "tx-design-ui/Other/TxAffix",
  component: TxAffix,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    offsetTop: { control: "number" },
  },
};

export default TxAffixStory;

export const Basic = {
  render: () => (
    <div style={{ padding: "24px", height: "300vh", background: "linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)" }}>
      <TxAffix offsetTop={24}>
        <div
          style={{
            background: "white",
            padding: "16px 24px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            border: "1px solid #d9d9d9",
          }}
        >
          <strong>Fixed Header</strong> - This will stick to the top when scrolling
        </div>
      </TxAffix>

      <div style={{ marginTop: "48px" }}>
        <h1>Scroll down to see the Affix in action</h1>
        <p style={{ marginTop: "16px", lineHeight: "1.8" }}>
          The content above will stick to the top when you scroll. This is commonly used for navigation bars, table
          headers, or important information that should remain visible.
        </p>

        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              marginTop: "32px",
              padding: "24px",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const WithButtons = {
  render: () => (
    <div style={{ padding: "24px", height: "300vh", background: "linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)" }}>
      <TxAffix offsetTop={0}>
        <div
          style={{
            background: "#001529",
            padding: "12px 24px",
            display: "flex",
            gap: "12px",
            borderBottom: "1px solid #1890ff",
          }}
        >
          <TxButton type="primary" label="Home" />
          <TxButton label="About" />
          <TxButton label="Services" />
          <TxButton label="Contact" />
        </div>
      </TxAffix>

      <div style={{ marginTop: "48px" }}>
        <h1>Navigation Bar Example</h1>
        <p style={{ marginTop: "16px" }}>
          This is an example of a navigation bar that sticks to the top when scrolling.
        </p>

        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} style={{ marginTop: "32px", padding: "24px", background: "white", borderRadius: "8px" }}>
            <h2>Content Section {i + 1}</h2>
            <p>Keep scrolling to see the navigation bar remain fixed at the top.</p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const CustomOffset = {
  render: () => (
    <div style={{ padding: "24px", height: "300vh" }}>
      <TxAffix offsetTop={100}>
        <div
          style={{
            background: "rgba(0,188,255,0.1)",
            padding: "16px 24px",
            borderRadius: "8px",
            border: "2px solid #00bcff",
          }}
        >
          Affix with 100px offset from top
        </div>
      </TxAffix>

      <div style={{ marginTop: "48px" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} style={{ marginTop: "32px", padding: "24px", background: "white", borderRadius: "8px" }}>
            <h2>Section {i + 1}</h2>
            <p>This affix has a 100px offset from the top of the viewport.</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
