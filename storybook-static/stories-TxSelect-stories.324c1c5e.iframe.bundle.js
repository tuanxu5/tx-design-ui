"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [7911, 8661],
  {
    "./src/stories/TxSelect.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Disabled: () => Disabled,
          Empty: () => Empty,
          FullWidth: () => FullWidth,
          PreviewSelect: () => PreviewSelect,
          Size: () => Size,
          Status: () => Status,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxSelect",
        component: _components__WEBPACK_IMPORTED_MODULE_1__.zB,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { onChange: { action: "changed" } },
      };
      var options = [
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
          { label: "Option 4", value: "4" },
        ],
        PreviewSelectComponent = function PreviewSelectComponent() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState,
              2
            ),
            value = _useState2[0],
            setValue = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.zB,
              {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                placeholder: "Select an option",
              }
            ),
          });
        },
        PreviewSelect = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PreviewSelectComponent, {});
          },
        },
        SizeComponent = function SizeComponent() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("1"),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState3,
              2
            ),
            value = _useState4[0],
            setValue = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zB, {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                size: "small",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zB, {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                size: "medium",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zB, {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                size: "large",
              }),
            ],
          });
        },
        Size = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SizeComponent, {});
          },
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex-center",
              style: { width: "300px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_1__.zB,
                { options, value: "1", disabled: !0 }
              ),
            });
          },
        },
        StatusComponent = function StatusComponent() {
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("1"),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState5,
              2
            ),
            value = _useState6[0],
            setValue = _useState6[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "stretch", width: "300px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zB, {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                status: "success",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zB, {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                status: "warning",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zB, {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                status: "error",
              }),
            ],
          });
        },
        Status = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StatusComponent, {});
          },
        },
        FullWidthComponent = function FullWidthComponent() {
          var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState7,
              2
            ),
            value = _useState8[0],
            setValue = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: { width: "100%", padding: "20px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.zB,
              {
                options,
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                fullWidth: !0,
              }
            ),
          });
        },
        FullWidth = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FullWidthComponent, {});
          },
        },
        Empty = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex-center",
              style: { width: "300px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_1__.zB,
                { options: [], placeholder: "No options" }
              ),
            });
          },
        };
      const __namedExportsOrder = ["PreviewSelect", "Size", "Disabled", "Status", "FullWidth", "Empty"];
      (PreviewSelect.parameters = {
        ...PreviewSelect.parameters,
        docs: {
          ...PreviewSelect.parameters?.docs,
          source: {
            originalSource: "{\n  render: () => <PreviewSelectComponent />\n}",
            ...PreviewSelect.parameters?.docs?.source,
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
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="flex-center" style={{\n    width: "300px"\n  }}>\n      <TxSelect options={options} value="1" disabled />\n    </div>\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Status.parameters = {
          ...Status.parameters,
          docs: {
            ...Status.parameters?.docs,
            source: { originalSource: "{\n  render: () => <StatusComponent />\n}", ...Status.parameters?.docs?.source },
          },
        }),
        (FullWidth.parameters = {
          ...FullWidth.parameters,
          docs: {
            ...FullWidth.parameters?.docs,
            source: {
              originalSource: "{\n  render: () => <FullWidthComponent />\n}",
              ...FullWidth.parameters?.docs?.source,
            },
          },
        }),
        (Empty.parameters = {
          ...Empty.parameters,
          docs: {
            ...Empty.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="flex-center" style={{\n    width: "300px"\n  }}>\n      <TxSelect options={[]} placeholder="No options" />\n    </div>\n}',
              ...Empty.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
