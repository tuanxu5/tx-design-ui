import { useState } from "react";
import { TxCheckbox } from "../components";

const TxCheckboxStory = {
  title: "tx-design-ui/Data Entry/TxCheckbox",
  component: TxCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    onChange: { action: "changed" },
  },
  args: {
    label: "Checkbox",
  },
};

export default TxCheckboxStory;

const PreviewCheckboxComponent = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex-center">
      <TxCheckbox label="Checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
    </div>
  );
};

export const PreviewCheckbox = {
  render: () => <PreviewCheckboxComponent />,
};

const BasicUsageComponent = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxCheckbox label="Unchecked" checked={checked1} onChange={e => setChecked1(e.target.checked)} />
      <TxCheckbox label="Checked" checked={checked2} onChange={e => setChecked2(e.target.checked)} />
      <TxCheckbox label="Without Label" checked={checked3} onChange={e => setChecked3(e.target.checked)} />
    </div>
  );
};

export const BasicUsage = {
  render: () => <BasicUsageComponent />,
};

export const Disabled = {
  render: args => {
    return (
      <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
        <TxCheckbox label="Disabled Unchecked" checked={false} disabled />
        <TxCheckbox label="Disabled Checked" checked disabled />
      </div>
    );
  },
};

const SizeComponent = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxCheckbox label="Small" size="small" checked={checked1} onChange={e => setChecked1(e.target.checked)} />
      <TxCheckbox
        label="Medium (Default)"
        size="medium"
        checked={checked2}
        onChange={e => setChecked2(e.target.checked)}
      />
      <TxCheckbox label="Large" size="large" checked={checked3} onChange={e => setChecked3(e.target.checked)} />
    </div>
  );
};

export const Size = {
  render: () => <SizeComponent />,
};

const DangerComponent = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <TxCheckbox label="Danger Unchecked" danger checked={checked1} onChange={e => setChecked1(e.target.checked)} />
      <TxCheckbox label="Danger Checked" danger checked={checked2} onChange={e => setChecked2(e.target.checked)} />
    </div>
  );
};

export const Danger = {
  render: () => <DangerComponent />,
};

const IndeterminateComponent = () => {
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const someChecked = Object.values(checkedItems).some(Boolean) && !allChecked;

  const handleCheckAll = e => {
    const newChecked = e.target.checked;
    setCheckedItems({
      option1: newChecked,
      option2: newChecked,
      option3: newChecked,
    });
  };

  const handleCheckItem = key => e => {
    const newCheckedItems = {
      ...checkedItems,
      [key]: e.target.checked,
    };
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
      <TxCheckbox label="Check All" checked={allChecked} indeterminate={someChecked} onChange={handleCheckAll} />
      <div style={{ marginLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <TxCheckbox label="Option 1" checked={checkedItems.option1} onChange={handleCheckItem("option1")} />
        <TxCheckbox label="Option 2" checked={checkedItems.option2} onChange={handleCheckItem("option2")} />
        <TxCheckbox label="Option 3" checked={checkedItems.option3} onChange={handleCheckItem("option3")} />
      </div>
    </div>
  );
};

export const Indeterminate = {
  render: () => <IndeterminateComponent />,
};

const CheckboxGroupComponent = () => {
  const [checkedValues, setCheckedValues] = useState(["option2"]);

  const handleCheckboxChange = value => e => {
    if (e.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter(v => v !== value));
    }
  };

  return (
    <div className="flex-center" style={{ flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Select your preferences:</div>
      <TxCheckbox
        label="Email Notifications"
        value="option1"
        checked={checkedValues.includes("option1")}
        onChange={handleCheckboxChange("option1")}
      />
      <TxCheckbox
        label="SMS Notifications"
        value="option2"
        checked={checkedValues.includes("option2")}
        onChange={handleCheckboxChange("option2")}
      />
      <TxCheckbox
        label="Push Notifications"
        value="option3"
        checked={checkedValues.includes("option3")}
        onChange={handleCheckboxChange("option3")}
      />
      <TxCheckbox
        label="Newsletter"
        value="option4"
        checked={checkedValues.includes("option4")}
        onChange={handleCheckboxChange("option4")}
      />
      <div style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Selected: {checkedValues.length > 0 ? checkedValues.join(", ") : "None"}
      </div>
    </div>
  );
};

export const CheckboxGroup = {
  render: () => <CheckboxGroupComponent />,
};
