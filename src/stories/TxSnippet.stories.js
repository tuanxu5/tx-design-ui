import TxSnippet from "../components/tx-snippet/tx-snippet";

const TxSnippetStory = {
  title: "tx-design-ui/Other/TxSnippet",
  component: TxSnippet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxSnippetStory;

export const Default = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxSnippet
        language="javascript"
        code={`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}`}
      />
    </div>
  ),
};

export const WithoutLabel = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxSnippet code="npm install tx-design-ui" />
    </div>
  ),
};
