import { useState } from "react";
import TxPagination from "../components/tx-pagination/tx-pagination";

const TxPaginationStory = {
  title: "tx-design-ui/Navigation/TxPagination",
  component: TxPagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    current: { control: "number" },
    total: { control: "number" },
    pageSize: { control: "number" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    onChange: { action: "page changed" },
  },
};

export default TxPaginationStory;

export const Preview = {
  args: {
    current: 1,
    total: 100,
    pageSize: 10,
    size: "medium",
  },
};

export const BasicUsage = () => {
  return <TxPagination current={1} total={100} pageSize={10} />;
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
      <TxPagination current={1} total={100} pageSize={10} size="small" />
      <TxPagination current={1} total={100} pageSize={10} size="medium" />
      <TxPagination current={1} total={100} pageSize={10} size="large" />
    </div>
  );
};

export const ManyPages = () => {
  return <TxPagination current={5} total={500} pageSize={10} />;
};

export const Interactive = () => {
  const InteractiveComponent = () => {
    const [current, setCurrent] = useState(1);

    const handleChange = page => {
      setCurrent(page);
    };

    return (
      <div>
        <TxPagination current={current} total={100} pageSize={10} onChange={handleChange} />
        <div style={{ marginTop: "16px", textAlign: "center" }}>Current Page: {current}</div>
      </div>
    );
  };

  return <InteractiveComponent />;
};
