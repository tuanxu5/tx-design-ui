"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [114, 661],
  {
    "./src/stories/TxColorPicker.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomPresets: () => CustomPresets,
          Disabled: () => Disabled,
          PreviewColorPicker: () => PreviewColorPicker,
          Size: () => Size,
          WithLabel: () => WithLabel,
          WithPresets: () => WithPresets,
          WithoutInput: () => WithoutInput,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/TxColorPicker",
        component: _components__WEBPACK_IMPORTED_MODULE_1__.gU,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { onChange: { action: "changed" } },
      };
      var PreviewColorPickerComponent = function PreviewColorPickerComponent() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("#1890ff"),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState,
              2
            ),
            color = _useState2[0],
            setColor = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.gU,
              {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
              }
            ),
          });
        },
        PreviewColorPicker = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PreviewColorPickerComponent, {});
          },
        },
        SizeComponent = function SizeComponent() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("#1890ff"),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState3,
              2
            ),
            color = _useState4[0],
            setColor = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "flex-start" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.gU, {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                size: "small",
                label: "Small",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.gU, {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                size: "medium",
                label: "Medium",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.gU, {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                size: "large",
                label: "Large",
              }),
            ],
          });
        },
        Size = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SizeComponent, {});
          },
        },
        WithLabelComponent = function WithLabelComponent() {
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("#52c41a"),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState5,
              2
            ),
            color = _useState6[0],
            setColor = _useState6[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.gU,
              {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                label: "Pick a color",
              }
            ),
          });
        },
        WithLabel = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WithLabelComponent, {});
          },
        },
        WithoutInputComponent = function WithoutInputComponent() {
          var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ff4d4f"),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState7,
              2
            ),
            color = _useState8[0],
            setColor = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.gU,
              {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                showInput: !1,
                label: "Color",
              }
            ),
          });
        },
        WithoutInput = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WithoutInputComponent, {});
          },
        },
        WithPresetsComponent = function WithPresetsComponent() {
          var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("#1890ff"),
            _useState10 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState9,
              2
            ),
            color = _useState10[0],
            setColor = _useState10[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.gU,
              {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                label: "Choose color",
                presets: [
                  "#f5222d",
                  "#fa541c",
                  "#fa8c16",
                  "#faad14",
                  "#fadb14",
                  "#a0d911",
                  "#52c41a",
                  "#13c2c2",
                  "#1890ff",
                  "#2f54eb",
                  "#722ed1",
                  "#eb2f96",
                ],
              }
            ),
          });
        },
        WithPresets = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WithPresetsComponent, {});
          },
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex-center",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_1__.gU,
                { value: "#1890ff", disabled: !0, label: "Disabled" }
              ),
            });
          },
        },
        CustomPresetsComponent = function CustomPresetsComponent() {
          var _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("#6253e1"),
            _useState12 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState11,
              2
            ),
            color = _useState12[0],
            setColor = _useState12[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.gU,
              {
                value: color,
                onChange: function onChange(val) {
                  return setColor(val);
                },
                label: "Gradient Colors",
                presets: ["#6253e1", "#04befe", "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7", "#fd79a8"],
              }
            ),
          });
        },
        CustomPresets = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CustomPresetsComponent, {});
          },
        };
      const __namedExportsOrder = [
        "PreviewColorPicker",
        "Size",
        "WithLabel",
        "WithoutInput",
        "WithPresets",
        "Disabled",
        "CustomPresets",
      ];
      (PreviewColorPicker.parameters = {
        ...PreviewColorPicker.parameters,
        docs: {
          ...PreviewColorPicker.parameters?.docs,
          source: {
            originalSource: "{\n  render: () => <PreviewColorPickerComponent />\n}",
            ...PreviewColorPicker.parameters?.docs?.source,
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
        (WithLabel.parameters = {
          ...WithLabel.parameters,
          docs: {
            ...WithLabel.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <WithLabelComponent />\n}",
              ...WithLabel.parameters?.docs?.source,
            },
          },
        }),
        (WithoutInput.parameters = {
          ...WithoutInput.parameters,
          docs: {
            ...WithoutInput.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <WithoutInputComponent />\n}",
              ...WithoutInput.parameters?.docs?.source,
            },
          },
        }),
        (WithPresets.parameters = {
          ...WithPresets.parameters,
          docs: {
            ...WithPresets.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <WithPresetsComponent />\n}",
              ...WithPresets.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="flex-center">\n      <TxColorPicker value="#1890ff" disabled label="Disabled" />\n    </div>\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (CustomPresets.parameters = {
          ...CustomPresets.parameters,
          docs: {
            ...CustomPresets.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <CustomPresetsComponent />\n}",
              ...CustomPresets.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
