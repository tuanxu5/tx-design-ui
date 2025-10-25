import TxButton from "../components/tx-button/tx-button";
import TxTable from "../components/tx-table/tx-table";
import TxTag from "../components/tx-tag/tx-tag";

const TxTableStory = {
  title: "tx-design-ui/TxTable",
  component: TxTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    bordered: { control: "boolean" },
    hoverable: { control: "boolean" },
    emptyText: { control: "text" },
  },
};

export default TxTableStory;

const basicColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const basicData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

export const Preview = {
  args: {
    columns: basicColumns,
    dataSource: basicData,
    size: "medium",
    bordered: true,
    hoverable: true,
  },
};

export const BasicUsage = () => {
  return <TxTable columns={basicColumns} dataSource={basicData} />;
};

export const WithActions = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <TxButton size="small" onClick={() => console.log("Edit", record)}>
            Edit
          </TxButton>
          <TxButton size="small" type="danger" onClick={() => console.log("Delete", record)}>
            Delete
          </TxButton>
        </div>
      ),
    },
  ];

  return <TxTable columns={columns} dataSource={basicData} />;
};

export const WithTags = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: status => {
        const colorMap = {
          active: "success",
          pending: "warning",
          inactive: "default",
        };
        return <TxTag color={colorMap[status]}>{status.toUpperCase()}</TxTag>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      status: "active",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      status: "pending",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      status: "inactive",
      address: "Sidney No. 1 Lake Park",
    },
  ];

  return <TxTable columns={columns} dataSource={data} />;
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4>Small</h4>
        <TxTable columns={basicColumns} dataSource={basicData} size="small" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <TxTable columns={basicColumns} dataSource={basicData} size="medium" />
      </div>
      <div>
        <h4>Large</h4>
        <TxTable columns={basicColumns} dataSource={basicData} size="large" />
      </div>
    </div>
  );
};

export const Alignment = () => {
  const columns = [
    {
      title: "Name (Left)",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "Age (Center)",
      dataIndex: "age",
      key: "age",
      align: "center",
    },
    {
      title: "Address (Right)",
      dataIndex: "address",
      key: "address",
      align: "right",
    },
  ];

  return <TxTable columns={columns} dataSource={basicData} />;
};

export const EmptyState = () => {
  return <TxTable columns={basicColumns} dataSource={[]} emptyText="No data available" />;
};
