import React, { useState } from "react";
import { TxCheckbox } from "tx-design-ui";

// Basic Example
export function BasicCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <TxCheckbox label="Accept terms and conditions" checked={checked} onChange={e => setChecked(e.target.checked)} />
  );
}

// Size Examples
export function CheckboxSizes() {
  const [checked, setChecked] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <TxCheckbox label="Small" size="small" checked={checked} onChange={e => setChecked(e.target.checked)} />
      <TxCheckbox
        label="Medium (Default)"
        size="medium"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <TxCheckbox label="Large" size="large" checked={checked} onChange={e => setChecked(e.target.checked)} />
    </div>
  );
}

// Disabled Example
export function DisabledCheckbox() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <TxCheckbox label="Disabled Unchecked" checked={false} disabled />
      <TxCheckbox label="Disabled Checked" checked={true} disabled />
    </div>
  );
}

// Danger Example
export function DangerCheckbox() {
  const [checked, setChecked] = useState(true);

  return (
    <TxCheckbox
      label="Delete all data (Danger)"
      danger
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
}

// Indeterminate Example
export function IndeterminateCheckbox() {
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: true,
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
    setCheckedItems({
      ...checkedItems,
      [key]: e.target.checked,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <TxCheckbox label="Check All" checked={allChecked} indeterminate={someChecked} onChange={handleCheckAll} />
      <div style={{ marginLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <TxCheckbox label="Option 1" checked={checkedItems.option1} onChange={handleCheckItem("option1")} />
        <TxCheckbox label="Option 2" checked={checkedItems.option2} onChange={handleCheckItem("option2")} />
        <TxCheckbox label="Option 3" checked={checkedItems.option3} onChange={handleCheckItem("option3")} />
      </div>
    </div>
  );
}

// Checkbox Group Example
export function CheckboxGroup() {
  const [checkedValues, setCheckedValues] = useState(["email"]);

  const handleCheckboxChange = value => e => {
    if (e.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter(v => v !== value));
    }
  };

  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: "12px" }}>Select your notification preferences:</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <TxCheckbox
          label="Email Notifications"
          value="email"
          checked={checkedValues.includes("email")}
          onChange={handleCheckboxChange("email")}
        />
        <TxCheckbox
          label="SMS Notifications"
          value="sms"
          checked={checkedValues.includes("sms")}
          onChange={handleCheckboxChange("sms")}
        />
        <TxCheckbox
          label="Push Notifications"
          value="push"
          checked={checkedValues.includes("push")}
          onChange={handleCheckboxChange("push")}
        />
        <TxCheckbox
          label="Newsletter"
          value="newsletter"
          checked={checkedValues.includes("newsletter")}
          onChange={handleCheckboxChange("newsletter")}
        />
      </div>
      <div style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Selected: {checkedValues.length > 0 ? checkedValues.join(", ") : "None"}
      </div>
    </div>
  );
}
