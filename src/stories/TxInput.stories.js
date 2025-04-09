import { fn } from "@storybook/addon-actions";
import React from "react";
import { SvgIcon } from "../assets/icons";
import TxInput from "../components/tx-input/tx-input";

const TxInputStory = {
  title: "tx-design-ui/TxInput",
  component: TxInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    onChange: { action: "changed" },
    status: {
      control: { type: "select" },
      options: [null, "success", "warning", "error", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
    },
  },
  args: {
    placeholder: "Input placeholder",
    onChange: fn,
  },
};

export default TxInputStory;

// Default Input
export const Default = {
  render: args => (
    <div style={{ width: "300px" }}>
      <TxInput {...args} />
    </div>
  ),
};

// Sizes
export const Sizes = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} size="small" placeholder="Small input" />
      <TxInput {...args} size="medium" placeholder="Medium input" />
      <TxInput {...args} size="large" placeholder="Large input" />
    </div>
  ),
};

// Fill vs Outline
export const FillVariants = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} placeholder="Default outline input" />
      <TxInput {...args} fill placeholder="Fill input" />
    </div>
  ),
};

export const ClearInput = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} allowClear placeholder="Clear input" />
      <TxInput {...args} allowClear fill placeholder="Clear fill input" />
    </div>
  ),
};

// Status States
export const StatusStates = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} status="success" placeholder="Success input" />
      <TxInput {...args} status="warning" placeholder="Warning input" />
      <TxInput {...args} status="error" placeholder="Error input" />
      <TxInput {...args} status="info" placeholder="Info input" />
      <TxInput {...args} status="success" fill placeholder="Success input" />
      <TxInput {...args} status="warning" fill placeholder="Warning input" />
      <TxInput {...args} status="error" fill placeholder="Error input" />
      <TxInput {...args} status="info" fill placeholder="Info input" />
    </div>
  ),
};

// Password Input
export const PasswordInput = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} password placeholder="Password with toggle" />
      <TxInput {...args} password passwordToggle={false} placeholder="Password without toggle" />
    </div>
  ),
};

// Disabled State
export const DisabledState = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} disabled placeholder="Disabled input" />
      <TxInput {...args} disabled fill placeholder="Disabled fill input" />
    </div>
  ),
};

// Prefix and Suffix
export const PrefixSuffix = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} prefix={<SvgIcon.IconCursor04 />} placeholder="With prefix" />
      <TxInput {...args} suffix={<SvgIcon.IconKeySquare01 />} placeholder="With suffix" />
      <TxInput
        {...args}
        prefix={<SvgIcon.IconCursor04 />}
        suffix={<SvgIcon.IconKeySquare01 />}
        placeholder="With prefix and suffix"
      />
    </div>
  ),
};

// Max length
export const MaxLength = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput {...args} placeholder="Max length is 10" maxLength={10} />
      <TxInput {...args} placeholder="Max length is 20" maxLength={20} />
    </div>
  ),
};

// Combined Features
export const CombinedFeatures = {
  render: args => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TxInput
        {...args}
        prefix={<SvgIcon.IconUserSquare01 />}
        status="success"
        size="large"
        placeholder="Success with prefix"
      />
      <TxInput
        {...args}
        suffix={<SvgIcon.IconCursor04 />}
        status="warning"
        fill
        placeholder="Warning fill with suffix"
      />
      <TxInput {...args} password status="error" size="small" placeholder="Error password small" />
      <TxInput
        {...args}
        prefix={<SvgIcon.IconUserSquare01 />}
        suffix={<SvgIcon.IconKeySquare01 />}
        status="info"
        placeholder="URL with domain parts"
      />
    </div>
  ),
};
