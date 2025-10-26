"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [660, 661],
  {
    "./src/stories/TxCheckbox.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          CheckboxGroup: () => CheckboxGroup,
          Danger: () => Danger,
          Disabled: () => Disabled,
          Indeterminate: () => Indeterminate,
          PreviewCheckbox: () => PreviewCheckbox,
          Size: () => Size,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxCheckbox",
        component: _components__WEBPACK_IMPORTED_MODULE_1__.Ql,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { color: { control: "color" }, onChange: { action: "changed" } },
        args: { label: "Checkbox" },
      };
      var PreviewCheckboxComponent = function PreviewCheckboxComponent() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState,
              2
            ),
            checked = _useState2[0],
            setChecked = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.Ql,
              {
                label: "Checkbox",
                checked,
                onChange: function onChange(e) {
                  return setChecked(e.target.checked);
                },
              }
            ),
          });
        },
        PreviewCheckbox = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PreviewCheckboxComponent, {});
          },
        },
        BasicUsageComponent = function BasicUsageComponent() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState3,
              2
            ),
            checked1 = _useState4[0],
            setChecked1 = _useState4[1],
            _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState5,
              2
            ),
            checked2 = _useState6[0],
            setChecked2 = _useState6[1],
            _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState7,
              2
            ),
            checked3 = _useState8[0],
            setChecked3 = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Unchecked",
                checked: checked1,
                onChange: function onChange(e) {
                  return setChecked1(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Checked",
                checked: checked2,
                onChange: function onChange(e) {
                  return setChecked2(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Without Label",
                checked: checked3,
                onChange: function onChange(e) {
                  return setChecked3(e.target.checked);
                },
              }),
            ],
          });
        },
        BasicUsage = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BasicUsageComponent, {});
          },
        },
        Disabled = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex-center",
              style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                  label: "Disabled Unchecked",
                  checked: !1,
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                  label: "Disabled Checked",
                  checked: !0,
                  disabled: !0,
                }),
              ],
            });
          },
        },
        SizeComponent = function SizeComponent() {
          var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState10 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState9,
              2
            ),
            checked1 = _useState10[0],
            setChecked1 = _useState10[1],
            _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState12 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState11,
              2
            ),
            checked2 = _useState12[0],
            setChecked2 = _useState12[1],
            _useState13 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState14 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState13,
              2
            ),
            checked3 = _useState14[0],
            setChecked3 = _useState14[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Small",
                size: "small",
                checked: checked1,
                onChange: function onChange(e) {
                  return setChecked1(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Medium (Default)",
                size: "medium",
                checked: checked2,
                onChange: function onChange(e) {
                  return setChecked2(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Large",
                size: "large",
                checked: checked3,
                onChange: function onChange(e) {
                  return setChecked3(e.target.checked);
                },
              }),
            ],
          });
        },
        Size = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SizeComponent, {});
          },
        },
        DangerComponent = function DangerComponent() {
          var _useState15 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState16 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState15,
              2
            ),
            checked1 = _useState16[0],
            setChecked1 = _useState16[1],
            _useState17 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState18 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState17,
              2
            ),
            checked2 = _useState18[0],
            setChecked2 = _useState18[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Danger Unchecked",
                danger: !0,
                checked: checked1,
                onChange: function onChange(e) {
                  return setChecked1(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Danger Checked",
                danger: !0,
                checked: checked2,
                onChange: function onChange(e) {
                  return setChecked2(e.target.checked);
                },
              }),
            ],
          });
        },
        Danger = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DangerComponent, {});
          },
        },
        IndeterminateComponent = function IndeterminateComponent() {
          var _useState19 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({ option1: !1, option2: !1, option3: !1 }),
            _useState20 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState19,
              2
            ),
            checkedItems = _useState20[0],
            setCheckedItems = _useState20[1],
            allChecked = Object.values(checkedItems).every(Boolean),
            someChecked = Object.values(checkedItems).some(Boolean) && !allChecked,
            handleCheckItem = function handleCheckItem(key) {
              return function (e) {
                var newCheckedItems = (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    {},
                    checkedItems
                  ),
                  {},
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                    {},
                    key,
                    e.target.checked
                  )
                );
                setCheckedItems(newCheckedItems);
              };
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "12px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Check All",
                checked: allChecked,
                indeterminate: someChecked,
                onChange: function handleCheckAll(e) {
                  var newChecked = e.target.checked;
                  setCheckedItems({ option1: newChecked, option2: newChecked, option3: newChecked });
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: { marginLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                    label: "Option 1",
                    checked: checkedItems.option1,
                    onChange: handleCheckItem("option1"),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                    label: "Option 2",
                    checked: checkedItems.option2,
                    onChange: handleCheckItem("option2"),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                    label: "Option 3",
                    checked: checkedItems.option3,
                    onChange: handleCheckItem("option3"),
                  }),
                ],
              }),
            ],
          });
        },
        Indeterminate = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IndeterminateComponent, {});
          },
        },
        CheckboxGroupComponent = function CheckboxGroupComponent() {
          var _useState21 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(["option2"]),
            _useState22 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState21,
              2
            ),
            checkedValues = _useState22[0],
            setCheckedValues = _useState22[1],
            handleCheckboxChange = function handleCheckboxChange(value) {
              return function (e) {
                e.target.checked
                  ? setCheckedValues(
                      [].concat(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                          checkedValues
                        ),
                        [value]
                      )
                    )
                  : setCheckedValues(
                      checkedValues.filter(function (v) {
                        return v !== value;
                      })
                    );
              };
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "12px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                style: { fontWeight: "bold", marginBottom: "8px" },
                children: "Select your preferences:",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Email Notifications",
                value: "option1",
                checked: checkedValues.includes("option1"),
                onChange: handleCheckboxChange("option1"),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "SMS Notifications",
                value: "option2",
                checked: checkedValues.includes("option2"),
                onChange: handleCheckboxChange("option2"),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Push Notifications",
                value: "option3",
                checked: checkedValues.includes("option3"),
                onChange: handleCheckboxChange("option3"),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ql, {
                label: "Newsletter",
                value: "option4",
                checked: checkedValues.includes("option4"),
                onChange: handleCheckboxChange("option4"),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: { marginTop: "12px", fontSize: "14px", color: "#666" },
                children: ["Selected: ", checkedValues.length > 0 ? checkedValues.join(", ") : "None"],
              }),
            ],
          });
        },
        CheckboxGroup = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckboxGroupComponent, {});
          },
        };
      const __namedExportsOrder = [
        "PreviewCheckbox",
        "BasicUsage",
        "Disabled",
        "Size",
        "Danger",
        "Indeterminate",
        "CheckboxGroup",
      ];
      (PreviewCheckbox.parameters = {
        ...PreviewCheckbox.parameters,
        docs: {
          ...PreviewCheckbox.parameters?.docs,
          source: {
            originalSource: "{\n  render: () => <PreviewCheckboxComponent />\n}",
            ...PreviewCheckbox.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <BasicUsageComponent />\n}",
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => {\n    return <div className="flex-center" style={{\n      flexDirection: "column",\n      gap: "16px",\n      alignItems: "flex-start"\n    }}>\n        <TxCheckbox label="Disabled Unchecked" checked={false} disabled />\n        <TxCheckbox label="Disabled Checked" checked disabled />\n      </div>;\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Size.parameters = {
          ...Size.parameters,
          docs: {
            ...Size.parameters?.docs,
            source: { originalSource: "{\n  render: () => <SizeComponent />\n}", ...Size.parameters?.docs?.source },
          },
        }),
        (Danger.parameters = {
          ...Danger.parameters,
          docs: {
            ...Danger.parameters?.docs,
            source: { originalSource: "{\n  render: () => <DangerComponent />\n}", ...Danger.parameters?.docs?.source },
          },
        }),
        (Indeterminate.parameters = {
          ...Indeterminate.parameters,
          docs: {
            ...Indeterminate.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <IndeterminateComponent />\n}",
              ...Indeterminate.parameters?.docs?.source,
            },
          },
        }),
        (CheckboxGroup.parameters = {
          ...CheckboxGroup.parameters,
          docs: {
            ...CheckboxGroup.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <CheckboxGroupComponent />\n}",
              ...CheckboxGroup.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
