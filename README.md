# tx-design-ui

> A modern React UI component library

[![NPM](https://img.shields.io/npm/v/tx-design-ui.svg)](https://www.npmjs.com/package/tx-design-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tx-design-ui
```

## Components

### Available Components

**Form Components:**

- **TxButton** - Customizable button component
- **TxInput** - Input field with multiple variants
- **TxCheckbox** - Checkbox with multiple states
- **TxRadio** - Radio button for single selection
- **TxSelect** - Dropdown select component
- **TxInputNumber** - Numeric input with controls
- **TxDatePicker** - Date and time picker
- **TxColorPicker** - Color selection with presets
- **TxSwitch** - Toggle switch component
- **TxSlider** - Slider for value selection
- **TxUpload** - File upload with drag and drop
- **TxForm** - Form with validation

**Display Components:**

- **TxAvatar** - Avatar/profile picture component
- **TxTag** - Tag labels for categorization
- **TxTable** - Data table display
- **TxBadge** - Badge for counts and status
- **TxTimeline** - Vertical timeline display
- **TxCarousel** - Carousel/slider for images and content

**Feedback Components:**

- **TxModal** - Modal dialog
- **TxDrawer** - Side panel drawer
- **TxNotification** - Notification messages
- **TxPopconfirm** - Confirmation popover
- **TxTooltip** - Tooltip on hover
- **TxLoading** - Loading spinner
- **TxMessage** - Global message feedback
- **TxProgress** - Progress indicator

**Navigation Components:**

- **TxTabs** - Tab navigation
- **TxSteps** - Step-by-step wizard
- **TxPagination** - Pagination controls
- **TxMenu** - Navigation menu
- **TxDropdown** - Dropdown menu
- **TxBreadcrumb** - Breadcrumb navigation
- **TxAnchor** - Anchor links

## Usage

### Basic Example

```jsx
import React, { useState } from "react";
import { TxButton, TxInput, TxCheckbox, TxSelect, TxRadio } from "tx-design-ui";

function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <TxButton label="Click Me" />
      <TxInput placeholder="Enter text" value={value} onChange={e => setValue(e.target.value)} />
      <TxCheckbox label="Accept terms" />
      <TxSelect options={[{ label: "Option 1", value: "1" }]} />
      <TxRadio label="Radio option" />
    </div>
  );
}
```

### Button

```jsx
import { TxButton } from 'tx-design-ui';

// Basic button
<TxButton label="Primary" />

// Different types
<TxButton type="secondary" label="Secondary" />
<TxButton type="dashed" label="Dashed" />
<TxButton type="text" label="Text" />

// Sizes
<TxButton size="small" label="Small" />
<TxButton size="large" label="Large" />

// States
<TxButton danger label="Danger" />
<TxButton disabled label="Disabled" />
<TxButton loading label="Loading" />
```

### Input

```jsx
import { TxInput } from 'tx-design-ui';

// Basic input
<TxInput placeholder="Enter text" />

// With icons
<TxInput prefix={<Icon />} placeholder="With prefix" />

// Status variants
<TxInput status="success" placeholder="Success" />
<TxInput status="error" placeholder="Error" />

// Password input
<TxInput password placeholder="Password" />

// With clear button
<TxInput allowClear placeholder="Clearable" />
```

### Checkbox

```jsx
import { TxCheckbox } from 'tx-design-ui';
import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <TxCheckbox
      label="Accept terms"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

// Sizes
<TxCheckbox size="small" label="Small" />
<TxCheckbox size="large" label="Large" />

// States
<TxCheckbox danger label="Danger" />
<TxCheckbox disabled label="Disabled" />
<TxCheckbox indeterminate label="Indeterminate" />
```

### Switch

```jsx
import { TxSwitch } from 'tx-design-ui';
import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <TxSwitch checked={checked} onChange={setChecked} />
  );
}

// With text
<TxSwitch checkedChildren="ON" unCheckedChildren="OFF" />

// Sizes
<TxSwitch size="small" />
<TxSwitch size="large" />

// Loading
<TxSwitch loading />
```

### Slider

```jsx
import { TxSlider } from "tx-design-ui";
import { useState } from "react";

function Example() {
  const [value, setValue] = useState(30);

  return <TxSlider value={value} onChange={setValue} showValue />;
}

// With marks
const marks = { 0: "0°C", 26: "26°C", 37: "37°C", 100: "100°C" };
<TxSlider marks={marks} defaultValue={37} />;
```

### Upload

```jsx
import { TxUpload } from 'tx-design-ui';
import { useState } from 'react';

function Example() {
  const [fileList, setFileList] = useState([]);

  return (
    <TxUpload
      fileList={fileList}
      onChange={setFileList}
      multiple
    />
  );
}

// Picture card
<TxUpload listType="picture-card" accept="image/*" />

// With max size
<TxUpload maxSize={2} /> // 2MB max
```

### Form

```jsx
import { TxForm, TxFormItem } from "tx-design-ui";
import { TxInput, TxButton } from "tx-design-ui";

function Example() {
  const [formData, setFormData] = useState({ username: "", email: "" });

  return (
    <TxForm onSubmit={e => console.log("Submit", formData)}>
      <TxFormItem label="Username" required>
        <TxInput value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} />
      </TxFormItem>
      <TxFormItem label="Email" required>
        <TxInput
          type="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
      </TxFormItem>
      <TxForm.Footer>
        <TxButton type="submit" variant="primary">
          Submit
        </TxButton>
      </TxForm.Footer>
    </TxForm>
  );
}
```

### Message

```jsx
import { TxMessage } from "tx-design-ui";

// Simple usage
TxMessage.success("Operation successful!");
TxMessage.error("Something went wrong");
TxMessage.warning("Please check your input");
TxMessage.info("Information message");

// With description
TxMessage.open({
  type: "success",
  content: "Success!",
  description: "Your operation has been completed.",
  duration: 3000,
});
```

### Badge

```jsx
import { TxBadge } from 'tx-design-ui';

// Basic badge
<TxBadge count={5}>
  <div>Content</div>
</TxBadge>

// Standalone
<TxBadge count={25} />

// Status colors
<TxBadge count={5} status="success" />
<TxBadge count={5} status="error" />

// Dot
<TxBadge dot>
  <span>🔔</span>
</TxBadge>

// Ribbon
<TxBadge.Ribbon text="New">
  <div>Content</div>
</TxBadge.Ribbon>
```

### Progress

```jsx
import { TxProgress } from 'tx-design-ui';

// Line progress
<TxProgress percent={50} />
<TxProgress percent={100} status="success" />
<TxProgress percent={70} status="exception" />

// Circle progress
<TxProgress type="circle" percent={75} />

// With steps
<TxProgress percent={50} steps={5} />
```

### Timeline

```jsx
import { TxTimeline } from 'tx-design-ui';

const items = [
  {
    title: 'Create a services site',
    description: '2015-09-01',
    color: 'success'
  },
  {
    title: 'Solve initial problems',
    description: '2015-09-01',
    color: 'processing'
  }
];

<TxTimeline items={items} />

// Alternate mode
<TxTimeline items={items} mode="alternate" />
```

### Carousel

```jsx
import { TxCarousel } from 'tx-design-ui';

<TxCarousel autoPlay autoPlaySpeed={3000}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</TxCarousel>

// With counter
<TxCarousel showCounter>
  <div>Slide 1</div>
  <div>Slide 2</div>
</TxCarousel>
```

## Theme & Colors

TX Design UI provides a centralized color system for easy customization:

```jsx
import { colors, theme } from "tx-design-ui";

// Use individual colors
const primary = colors.primary; // "#03030f"
const danger = colors.danger; // "#e45649"

// Or use the theme object
const buttonBg = theme.button.primary.bg;
const inputBorder = theme.input.default.border;
```

### Available Colors

```javascript
colors.primary; // "#03030f"
colors.danger; // "#e45649"
colors.success; // "#52c41a"
colors.warning; // "#faad14"
colors.info; // "#1890ff"
colors.textPrimary; // "#1c252e"
colors.borderDefault; // "#d1d5db"
// ... and more
```

See [Theme Documentation](./src/theme/README.md) for complete color palette.

## Documentation

For detailed documentation and examples, visit our [Storybook](https://your-storybook-url.com) or check the [docs folder](./docs).

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm test
```

## License

MIT © [Tuanxu5](https://github.com/Tuanxu5)
