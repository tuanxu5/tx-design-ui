import TxImage from "../components/tx-image/tx-image";

const TxImageStory = {
  title: "tx-design-ui/Other/TxImage",
  component: TxImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    zoom: { control: "boolean" },
    objectFit: {
      control: "select",
      options: ["cover", "contain", "fill", "none", "scale-down"],
    },
  },
};

export default TxImageStory;

export const Basic = {
  args: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    alt: "Sample image",
    width: "300px",
    height: "200px",
  },
};

export const WithZoom = {
  args: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    alt: "Sample image",
    width: "300px",
    height: "200px",
    zoom: true,
  },
};

export const Rounded = {
  args: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    alt: "Sample image",
    width: "200px",
    height: "200px",
    radius: "50%",
  },
};
