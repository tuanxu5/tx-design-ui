import { useState } from "react";
import TxButton from "../components/tx-button/tx-button";
import TxModal from "../components/tx-modal/tx-modal";

const TxModalStory = {
  title: "tx-design-ui/TxModal",
  component: TxModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    width: { control: "text" },
    closable: { control: "boolean" },
    maskClosable: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

export default TxModalStory;

const PreviewComponent = args => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Modal</TxButton>
      <TxModal {...args} open={open} onClose={() => setOpen(false)}>
        <p>Modal content goes here...</p>
      </TxModal>
    </>
  );
};

export const Preview = {
  render: PreviewComponent,
  args: {
    title: "Modal Title",
    closable: true,
    maskClosable: true,
  },
};

export const BasicUsage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Modal</TxButton>
      <TxModal open={open} onClose={() => setOpen(false)} title="Basic Modal">
        <p>This is the modal content.</p>
        <p>You can put any content here.</p>
      </TxModal>
    </>
  );
};

export const WithFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Modal</TxButton>
      <TxModal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal with Footer"
        footer={
          <>
            <TxButton onClick={() => setOpen(false)}>Cancel</TxButton>
            <TxButton type="primary" onClick={() => setOpen(false)}>
              OK
            </TxButton>
          </>
        }
      >
        <p>This modal has a footer with action buttons.</p>
      </TxModal>
    </>
  );
};

export const CustomWidth = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Large Modal</TxButton>
      <TxModal open={open} onClose={() => setOpen(false)} title="Large Modal" width="800px">
        <p>This modal has a custom width of 800px.</p>
        <p>You can set any width you want.</p>
      </TxModal>
    </>
  );
};

export const LongContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TxButton onClick={() => setOpen(true)}>Open Modal</TxButton>
      <TxModal open={open} onClose={() => setOpen(false)} title="Modal with Long Content">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>This is paragraph {i + 1} of the modal content.</p>
        ))}
      </TxModal>
    </>
  );
};
