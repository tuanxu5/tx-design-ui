import TxTypography from "../components/tx-typography/tx-typography";

const TxTypographyStory = {
  title: "tx-design-ui/Other/TxTypography",
  component: TxTypography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "body", "caption"],
    },
  },
};

export default TxTypographyStory;

export const H1 = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const H2 = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const H3 = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Body = {
  args: {
    variant: "body",
    children: "Body text for paragraphs and general content",
  },
};

export const Caption = {
  args: {
    variant: "caption",
    children: "Caption text for smaller information",
  },
};

export const WithEllipsis = {
  args: {
    children: "This is a very long text that will be truncated with ellipsis",
    ellipsis: true,
    width: "200px",
  },
};
