import TxCopy from "../components/tx-copy/tx-copy";

const TxCopyStory = {
  title: "tx-design-ui/Other/TxCopy",
  component: TxCopy,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxCopyStory;

export const Basic = {
  args: {
    text: "https://example.com/share-link",
    children: "Copy link",
  },
};

export const Compact = {
  args: {
    text: "Some text to copy",
    compact: true,
    children: "Copy",
  },
};

export const WithLongText = {
  args: {
    text: "This is a very long text that will be copied to clipboard when you click the button",
    children: "Copy text",
  },
};
