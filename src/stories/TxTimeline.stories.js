import { TxTimeline } from "../components/tx-timeline/tx-timeline";

export default {
  title: "tx-design-ui/Data Display/TxTimeline",
  component: TxTimeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["left", "right", "alternate"],
    },
  },
};

const basicItems = [
  {
    title: "Create a services site",
    description: "2015-09-01",
  },
  {
    title: "Solve initial network problems",
    description: "2015-09-01",
  },
  {
    title: "Technical testing",
    description: "2015-09-01",
  },
  {
    title: "Network problems being solved",
    description: "2015-09-01",
  },
];

export const Basic = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <TxTimeline items={basicItems} />
    </div>
  ),
};

const colorItems = [
  {
    title: "Create a services site",
    description: "This is the description",
    color: "success",
  },
  {
    title: "Solve initial network problems",
    description: "This is the description",
    color: "error",
  },
  {
    title: "Technical testing",
    description: "This is the description",
    color: "warning",
  },
  {
    title: "Network problems being solved",
    description: "This is the description",
    color: "processing",
  },
];

export const WithColors = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <TxTimeline items={colorItems} />
    </div>
  ),
};

const iconItems = [
  {
    title: "Success",
    description: "Operation completed successfully",
    color: "success",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Error",
    description: "An error occurred during the operation",
    color: "error",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    title: "Warning",
    description: "Please check the details",
    color: "warning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Processing",
    description: "Operation in progress",
    color: "processing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export const WithIcons = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <TxTimeline items={iconItems} />
    </div>
  ),
};

const timeItems = [
  {
    title: "Project Initialized",
    description: "Set up project structure and dependencies",
    time: "2024-01-01 09:00",
    color: "success",
  },
  {
    title: "First Deployment",
    description: "Successfully deployed to production",
    time: "2024-01-15 14:30",
    color: "success",
  },
  {
    title: "Bug Reported",
    description: "Critical bug found in payment module",
    time: "2024-02-01 11:20",
    color: "error",
  },
  {
    title: "Bug Fixed",
    description: "Payment module bug resolved and deployed",
    time: "2024-02-02 16:45",
    color: "success",
  },
];

export const WithTime = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <TxTimeline items={timeItems} />
    </div>
  ),
};

const labelItems = [
  {
    title: "Q1 2024",
    description: "Project kickoff and planning",
    label: "2024-01",
    color: "success",
  },
  {
    title: "Q2 2024",
    description: "Development phase",
    label: "2024-04",
    color: "processing",
  },
  {
    title: "Q3 2024",
    description: "Testing and bug fixes",
    label: "2024-07",
    color: "warning",
  },
  {
    title: "Q4 2024",
    description: "Production release",
    label: "2024-10",
    color: "default",
  },
];

export const WithLabels = {
  render: () => (
    <div style={{ padding: "20px", marginLeft: "120px" }}>
      <TxTimeline items={labelItems} mode="left" />
    </div>
  ),
};

const alternateItems = [
  {
    title: "Phase 1",
    description: "Planning and research",
    color: "success",
  },
  {
    title: "Phase 2",
    description: "Design and prototyping",
    color: "success",
  },
  {
    title: "Phase 3",
    description: "Development",
    color: "processing",
  },
  {
    title: "Phase 4",
    description: "Testing and deployment",
    color: "default",
  },
];

export const AlternateMode = {
  render: () => (
    <div style={{ padding: "20px 100px" }}>
      <TxTimeline items={alternateItems} mode="alternate" />
    </div>
  ),
};

export const CustomContent = {
  render: () => {
    const items = [
      {
        color: "success",
        children: (
          <div>
            <div style={{ fontWeight: "600", marginBottom: "4px" }}>Create a services site 2015-09-01</div>
            <div style={{ color: "#999", fontSize: "13px" }}>Technical testing 1</div>
            <div style={{ color: "#999", fontSize: "13px" }}>Technical testing 2</div>
            <div style={{ color: "#999", fontSize: "13px" }}>Technical testing 3 2015-09-01</div>
          </div>
        ),
      },
      {
        color: "processing",
        children: (
          <div>
            <div style={{ fontWeight: "600", marginBottom: "4px" }}>Network problems being solved 2015-09-01</div>
          </div>
        ),
      },
      {
        children: (
          <div>
            <div style={{ fontWeight: "600", marginBottom: "4px" }}>Create a services site 2015-09-01</div>
          </div>
        ),
      },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <TxTimeline items={items} />
      </div>
    );
  },
};
