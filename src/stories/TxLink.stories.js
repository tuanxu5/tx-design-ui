import TxLink from "../components/tx-link/tx-link";

const TxLinkStory = {
  title: "tx-design-ui/Foundation/TxLink",
  component: TxLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxLinkStory;

export const Default = {
  render: () => (
    <div>
      <p>
        Visit our <TxLink href="https://example.com">website</TxLink> for more information.
      </p>
    </div>
  ),
};

export const Underlined = {
  render: () => (
    <div>
      <p>
        This is an{" "}
        <TxLink href="https://example.com" underline>
          underlined link
        </TxLink>
        .
      </p>
    </div>
  ),
};

export const Visited = {
  render: () => (
    <div>
      <p>
        <TxLink href="https://example.com" visited>
          Visited link
        </TxLink>
      </p>
    </div>
  ),
};
