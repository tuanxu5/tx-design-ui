import { useState } from "react";
import TxLightbox from "../components/tx-lightbox/tx-lightbox";

const TxLightboxStory = {
  title: "tx-design-ui/Data Display/TxLightbox",
  component: TxLightbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxLightboxStory;

function LightboxDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ padding: "12px 24px", cursor: "pointer" }}>
        Open Lightbox
      </button>
      <TxLightbox
        open={open}
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export const Interactive = LightboxDemo;
