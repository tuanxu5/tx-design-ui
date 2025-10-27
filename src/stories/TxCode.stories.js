import TxCode from "../components/tx-code/tx-code";

const TxCodeStory = {
  title: "tx-design-ui/Data Display/TxCode",
  component: TxCode,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxCodeStory;

export const Inline = {
  render: () => (
    <div>
      <p>
        Use <TxCode>console.log()</TxCode> to debug your code.
      </p>
    </div>
  ),
};

export const Block = {
  render: () => {
    return (
      <div style={{ width: "600px" }}>
        <TxCode block>
          {`function hello() {
  console.log("Hello World");
}`}
        </TxCode>
      </div>
    );
  },
};

export const Outlined = {
  render: () => {
    return (
      <div style={{ width: "600px" }}>
        <TxCode block variant="outlined">
          {`function hello() {
  console.log("Hello World");
}`}
        </TxCode>
      </div>
    );
  },
};
