import { useState } from "react";
import TxButton from "../components/tx-button/tx-button";
import TxDrawer from "../components/tx-drawer/tx-drawer";

const TxDrawerStory = {
  title: "tx-design-ui/TxDrawer",
  component: TxDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    placement: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    width: { control: "text" },
    height: { control: "text" },
    closable: { control: "boolean" },
    maskClosable: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

export default TxDrawerStory;

const PreviewComponent = args => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Drawer</TxButton>
      <TxDrawer {...args} open={open} onClose={() => setOpen(false)}>
        <p>Drawer content goes here...</p>
      </TxDrawer>
    </>
  );
};

export const Preview = {
  render: PreviewComponent,
  args: {
    title: "Drawer Title",
    placement: "right",
    closable: true,
    maskClosable: true,
  },
};

export const BasicUsage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Drawer</TxButton>
      <TxDrawer open={open} onClose={() => setOpen(false)} title="Basic Drawer">
        <p>This is the drawer content.</p>
        <p>You can put any content here.</p>
      </TxDrawer>
    </>
  );
};

export const Placements = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <TxButton onClick={() => setLeftOpen(true)}>Left</TxButton>
      <TxButton onClick={() => setRightOpen(true)}>Right</TxButton>
      <TxButton onClick={() => setTopOpen(true)}>Top</TxButton>
      <TxButton onClick={() => setBottomOpen(true)}>Bottom</TxButton>

      <TxDrawer open={leftOpen} onClose={() => setLeftOpen(false)} title="Left Drawer" placement="left">
        <p>Drawer from left side</p>
      </TxDrawer>

      <TxDrawer open={rightOpen} onClose={() => setRightOpen(false)} title="Right Drawer" placement="right">
        <p>Drawer from right side</p>
      </TxDrawer>

      <TxDrawer open={topOpen} onClose={() => setTopOpen(false)} title="Top Drawer" placement="top">
        <p>Drawer from top</p>
      </TxDrawer>

      <TxDrawer open={bottomOpen} onClose={() => setBottomOpen(false)} title="Bottom Drawer" placement="bottom">
        <p>Drawer from bottom</p>
      </TxDrawer>
    </div>
  );
};

export const WithFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Drawer</TxButton>
      <TxDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Drawer with Footer"
        footer={
          <>
            <TxButton onClick={() => setOpen(false)}>Cancel</TxButton>
            <TxButton type="primary" onClick={() => setOpen(false)}>
              Submit
            </TxButton>
          </>
        }
      >
        <p>This drawer has a footer with action buttons.</p>
      </TxDrawer>
    </>
  );
};

export const CustomSize = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Large Drawer</TxButton>
      <TxDrawer open={open} onClose={() => setOpen(false)} title="Large Drawer" width="600px">
        <p>This drawer has a custom width of 600px.</p>
      </TxDrawer>
    </>
  );
};
