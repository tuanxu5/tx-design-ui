import { useState } from "react";
import TxTour from "../components/tx-tour/tx-tour";

const TxTourStory = {
  title: "tx-design-ui/Navigation/TxTour",
  component: TxTour,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default TxTourStory;

function TourDemo() {
  const [open, setOpen] = useState(false);

  const steps = [
    { title: "Welcome", content: "This is step 1" },
    { title: "Settings", content: "This is step 2" },
    { title: "Done", content: "This is the final step" },
  ];

  return (
    <>
      <button onClick={() => setOpen(true)}>Start Tour</button>
      <TxTour steps={steps} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export const Interactive = TourDemo;
