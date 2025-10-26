import { useState } from "react";
import { TxButton } from "../components/tx-button/tx-button";
import { TxCheckbox } from "../components/tx-checkbox/tx-checkbox";
import { TxForm, TxFormItem } from "../components/tx-form/tx-form";
import { TxInput } from "../components/tx-input/tx-input";

const TxFormStory = {
  title: "tx-design-ui/Data Entry/TxForm",
  component: TxForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    onSubmit: { action: "submitted" },
  },
};

export default TxFormStory;

export const Basic = {
  render: function BasicComponent() {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleSubmit = e => {
      console.log("Form submitted:", formData);
    };

    return (
      <div style={{ width: "400px" }}>
        <TxForm onSubmit={handleSubmit}>
          <TxFormItem label="Username" required>
            <TxInput
              placeholder="Enter username"
              value={formData.username}
              onChange={e => setFormData({ ...formData, username: e.target.value })}
            />
          </TxFormItem>
          <TxFormItem label="Password" required>
            <TxInput
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </TxFormItem>
          <TxForm.Footer>
            <TxButton type="submit" variant="primary">
              Submit
            </TxButton>
            <TxButton type="button">Cancel</TxButton>
          </TxForm.Footer>
        </TxForm>
      </div>
    );
  },
};

export const HorizontalLayout = {
  render: function HorizontalComponent() {
    const [formData, setFormData] = useState({ username: "", email: "" });

    return (
      <div style={{ width: "500px" }}>
        <TxForm layout="horizontal">
          <TxFormItem label="Username" required layout="horizontal">
            <TxInput
              placeholder="Enter username"
              value={formData.username}
              onChange={e => setFormData({ ...formData, username: e.target.value })}
            />
          </TxFormItem>
          <TxFormItem label="Email" required layout="horizontal">
            <TxInput
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </TxFormItem>
          <TxForm.Footer layout="horizontal">
            <TxButton type="submit" variant="primary">
              Submit
            </TxButton>
            <TxButton type="button">Cancel</TxButton>
          </TxForm.Footer>
        </TxForm>
      </div>
    );
  },
};

export const WithValidation = {
  render: function ValidationComponent() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
      const newErrors = {};
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = e => {
      if (validate()) {
        console.log("Form is valid:", formData);
      }
    };

    return (
      <div style={{ width: "400px" }}>
        <TxForm onSubmit={handleSubmit}>
          <TxFormItem label="Email" required error={errors.email}>
            <TxInput
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={e => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              status={errors.email ? "error" : ""}
            />
          </TxFormItem>
          <TxFormItem
            label="Password"
            required
            error={errors.password}
            help={!errors.password && "Password must be at least 6 characters"}
          >
            <TxInput
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={e => {
                setFormData({ ...formData, password: e.target.value });
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
              status={errors.password ? "error" : ""}
            />
          </TxFormItem>
          <TxForm.Footer>
            <TxButton type="submit" variant="primary">
              Submit
            </TxButton>
          </TxForm.Footer>
        </TxForm>
      </div>
    );
  },
};

export const CompleteForm = {
  render: function CompleteFormComponent() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });

    const handleSubmit = e => {
      console.log("Form submitted:", formData);
    };

    return (
      <div style={{ width: "500px" }}>
        <TxForm onSubmit={handleSubmit}>
          <TxFormItem label="Name" required help="Please enter your full name">
            <TxInput
              placeholder="John Doe"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </TxFormItem>
          <TxFormItem label="Email" required>
            <TxInput
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </TxFormItem>
          <TxFormItem label="Phone">
            <TxInput
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
          </TxFormItem>
          <TxFormItem label="Message">
            <TxInput
              placeholder="Enter your message"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </TxFormItem>
          <TxFormItem noMargin>
            <TxCheckbox checked={formData.agree} onChange={setFormData.agree}>
              I agree to the terms and conditions
            </TxCheckbox>
          </TxFormItem>
          <TxForm.Footer align="right">
            <TxButton type="button">Cancel</TxButton>
            <TxButton type="submit" variant="primary">
              Submit
            </TxButton>
          </TxForm.Footer>
        </TxForm>
      </div>
    );
  },
};
