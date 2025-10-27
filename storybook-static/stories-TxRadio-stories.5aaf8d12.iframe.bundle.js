"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9216, 8661],
  {
    "./src/stories/TxRadio.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          Danger: () => Danger,
          Disabled: () => Disabled,
          PreviewRadio: () => PreviewRadio,
          RadioGroup: () => RadioGroup,
          RadioGroupDisabled: () => RadioGroupDisabled,
          Size: () => Size,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxRadio",
        component: _components__WEBPACK_IMPORTED_MODULE_1__.Up,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { color: { control: "color" }, onChange: { action: "changed" } },
        args: { label: "Radio" },
      };
      var PreviewRadioComponent = function PreviewRadioComponent() {
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
              _components__WEBPACK_IMPORTED_MODULE_1__.Up,
              {
                label: "Radio",
                checked,
                onChange: function onChange(e) {
                  return setChecked(e.target.checked);
                },
              }
            ),
          });
        },
        PreviewRadio = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PreviewRadioComponent, {});
          },
        },
        BasicUsageComponent = function BasicUsageComponent() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState3,
              2
            ),
            selected = _useState4[0],
            setSelected = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Option 1",
                value: "option1",
                checked: "option1" === selected,
                onChange: function onChange() {
                  return setSelected("option1");
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Option 2",
                value: "option2",
                checked: "option2" === selected,
                onChange: function onChange() {
                  return setSelected("option2");
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Option 3",
                value: "option3",
                checked: "option3" === selected,
                onChange: function onChange() {
                  return setSelected("option3");
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
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex-center",
              style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                  label: "Disabled Unchecked",
                  checked: !1,
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                  label: "Disabled Checked",
                  checked: !0,
                  disabled: !0,
                }),
              ],
            });
          },
        },
        SizeComponent = function SizeComponent() {
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState5,
              2
            ),
            checked = _useState6[0],
            setChecked = _useState6[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Small",
                size: "small",
                checked,
                onChange: function onChange(e) {
                  return setChecked(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Medium (Default)",
                size: "medium",
                checked,
                onChange: function onChange(e) {
                  return setChecked(e.target.checked);
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Large",
                size: "large",
                checked,
                onChange: function onChange(e) {
                  return setChecked(e.target.checked);
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
          var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("option1"),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState7,
              2
            ),
            selected = _useState8[0],
            setSelected = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Delete permanently",
                value: "option1",
                danger: !0,
                checked: "option1" === selected,
                onChange: function onChange() {
                  return setSelected("option1");
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                label: "Remove account",
                value: "option2",
                danger: !0,
                checked: "option2" === selected,
                onChange: function onChange() {
                  return setSelected("option2");
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
        RadioGroupComponent = function RadioGroupComponent() {
          var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("option1"),
            _useState10 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState9,
              2
            ),
            value = _useState10[0],
            setValue = _useState10[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "24px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                    style: { marginBottom: "12px" },
                    children: "Vertical (Default)",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                    _components__WEBPACK_IMPORTED_MODULE_1__.Up.Group,
                    {
                      value,
                      onChange: function onChange(val) {
                        return setValue(val);
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components__WEBPACK_IMPORTED_MODULE_1__.Up,
                          { label: "Option 1", value: "option1" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components__WEBPACK_IMPORTED_MODULE_1__.Up,
                          { label: "Option 2", value: "option2" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components__WEBPACK_IMPORTED_MODULE_1__.Up,
                          { label: "Option 3", value: "option3" }
                        ),
                      ],
                    }
                  ),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                    style: { marginBottom: "12px" },
                    children: "Horizontal",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                    _components__WEBPACK_IMPORTED_MODULE_1__.Up.Group,
                    {
                      value,
                      onChange: function onChange(val) {
                        return setValue(val);
                      },
                      direction: "horizontal",
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components__WEBPACK_IMPORTED_MODULE_1__.Up,
                          { label: "Option 1", value: "option1" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components__WEBPACK_IMPORTED_MODULE_1__.Up,
                          { label: "Option 2", value: "option2" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components__WEBPACK_IMPORTED_MODULE_1__.Up,
                          { label: "Option 3", value: "option3" }
                        ),
                      ],
                    }
                  ),
                ],
              }),
            ],
          });
        },
        RadioGroup = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RadioGroupComponent, {});
          },
        },
        RadioGroupDisabledComponent = function RadioGroupDisabledComponent() {
          var _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("option1"),
            _useState12 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState11,
              2
            ),
            value = _useState12[0],
            setValue = _useState12[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              _components__WEBPACK_IMPORTED_MODULE_1__.Up.Group,
              {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                disabled: !0,
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                    label: "Option 1",
                    value: "option1",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                    label: "Option 2",
                    value: "option2",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Up, {
                    label: "Option 3",
                    value: "option3",
                  }),
                ],
              }
            ),
          });
        },
        RadioGroupDisabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RadioGroupDisabledComponent, {});
          },
        };
      const __namedExportsOrder = [
        "PreviewRadio",
        "BasicUsage",
        "Disabled",
        "Size",
        "Danger",
        "RadioGroup",
        "RadioGroupDisabled",
      ];
      (PreviewRadio.parameters = {
        ...PreviewRadio.parameters,
        docs: {
          ...PreviewRadio.parameters?.docs,
          source: {
            originalSource: "{\n  render: () => <PreviewRadioComponent />\n}",
            ...PreviewRadio.parameters?.docs?.source,
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
                '{\n  render: () => <div className="flex-center" style={{\n    flexDirection: "column",\n    gap: "16px",\n    alignItems: "flex-start"\n  }}>\n      <TxRadio label="Disabled Unchecked" checked={false} disabled />\n      <TxRadio label="Disabled Checked" checked disabled />\n    </div>\n}',
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
        (RadioGroup.parameters = {
          ...RadioGroup.parameters,
          docs: {
            ...RadioGroup.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <RadioGroupComponent />\n}",
              ...RadioGroup.parameters?.docs?.source,
            },
          },
        }),
        (RadioGroupDisabled.parameters = {
          ...RadioGroupDisabled.parameters,
          docs: {
            ...RadioGroupDisabled.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <RadioGroupDisabledComponent />\n}",
              ...RadioGroupDisabled.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
