import { useState } from "react";
import TxButton from "../components/tx-button/tx-button";
import TxSteps from "../components/tx-steps/tx-steps";

const TxStepsStory = {
  title: "tx-design-ui/Navigation/TxSteps",
  component: TxSteps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    current: { control: "number" },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    status: {
      control: "select",
      options: ["wait", "process", "finish", "error"],
    },
  },
};

export default TxStepsStory;

const items = [
  {
    title: "Step 1",
    description: "This is a description",
  },
  {
    title: "Step 2",
    description: "This is a description",
  },
  {
    title: "Step 3",
    description: "This is a description",
  },
];

export const Preview = {
  args: {
    current: 1,
    items,
    direction: "horizontal",
    status: "process",
  },
};

export const BasicUsage = () => {
  return <TxSteps current={1} items={items} />;
};

export const Vertical = () => {
  return <TxSteps current={1} items={items} direction="vertical" />;
};

export const WithError = () => {
  return <TxSteps current={1} items={items} status="error" />;
};

export const Interactive = () => {
  const InteractiveComponent = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };

    return (
      <div style={{ width: "600px" }}>
        <TxSteps current={current} items={items} />
        <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
          {current > 0 && <TxButton onClick={prev}>Previous</TxButton>}
          {current < items.length - 1 && (
            <TxButton type="primary" onClick={next}>
              Next
            </TxButton>
          )}
          {current === items.length - 1 && <TxButton type="primary">Done</TxButton>}
        </div>
      </div>
    );
  };

  return <InteractiveComponent />;
};
