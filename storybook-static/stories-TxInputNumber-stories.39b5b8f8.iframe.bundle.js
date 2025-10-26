"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [162, 661],
  {
    "./src/stories/TxInputNumber.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Disabled: () => Disabled,
          FullWidth: () => FullWidth,
          MinMax: () => MinMax,
          PreviewInputNumber: () => PreviewInputNumber,
          Size: () => Size,
          Status: () => Status,
          Step: () => Step,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxInputNumber",
        component: _components__WEBPACK_IMPORTED_MODULE_1__.EE,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { onChange: { action: "changed" } },
      };
      var PreviewInputNumberComponent = function PreviewInputNumberComponent() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
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
              _components__WEBPACK_IMPORTED_MODULE_1__.EE,
              {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
              }
            ),
          });
        },
        PreviewInputNumber = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PreviewInputNumberComponent, {});
          },
        },
        SizeComponent = function SizeComponent() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState3,
              2
            ),
            value = _useState4[0],
            setValue = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "stretch", width: "200px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                size: "small",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                size: "medium",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
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
        MinMaxComponent = function MinMaxComponent() {
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState5,
              2
            ),
            value = _useState6[0],
            setValue = _useState6[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex-center",
            style: { width: "200px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.EE,
              {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                min: 0,
                max: 10,
              }
            ),
          });
        },
        MinMax = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MinMaxComponent, {});
          },
        },
        StepComponent = function StepComponent() {
          var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState7,
              2
            ),
            value = _useState8[0],
            setValue = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "stretch", width: "200px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    style: { marginBottom: "8px", fontSize: "14px" },
                    children: "Step: 1 (Default)",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                    value,
                    onChange: function onChange(val) {
                      return setValue(val);
                    },
                    step: 1,
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    style: { marginBottom: "8px", fontSize: "14px" },
                    children: "Step: 5",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                    value,
                    onChange: function onChange(val) {
                      return setValue(val);
                    },
                    step: 5,
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    style: { marginBottom: "8px", fontSize: "14px" },
                    children: "Step: 10",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                    value,
                    onChange: function onChange(val) {
                      return setValue(val);
                    },
                    step: 10,
                  }),
                ],
              }),
            ],
          });
        },
        Step = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StepComponent, {});
          },
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex-center",
              style: { width: "200px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_1__.EE,
                { value: 5, disabled: !0 }
              ),
            });
          },
        },
        StatusComponent = function StatusComponent() {
          var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),
            _useState10 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState9,
              2
            ),
            value = _useState10[0],
            setValue = _useState10[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex-center",
            style: { flexDirection: "column", gap: "16px", alignItems: "stretch", width: "200px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                status: "success",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
                value,
                onChange: function onChange(val) {
                  return setValue(val);
                },
                status: "warning",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.EE, {
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
          var _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(50),
            _useState12 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState11,
              2
            ),
            value = _useState12[0],
            setValue = _useState12[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: { width: "100%", padding: "20px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.EE,
              {
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
        };
      const __namedExportsOrder = ["PreviewInputNumber", "Size", "MinMax", "Step", "Disabled", "Status", "FullWidth"];
      (PreviewInputNumber.parameters = {
        ...PreviewInputNumber.parameters,
        docs: {
          ...PreviewInputNumber.parameters?.docs,
          source: {
            originalSource: "{\n  render: () => <PreviewInputNumberComponent />\n}",
            ...PreviewInputNumber.parameters?.docs?.source,
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
        (MinMax.parameters = {
          ...MinMax.parameters,
          docs: {
            ...MinMax.parameters?.docs,
            source: { originalSource: "{\n  render: () => <MinMaxComponent />\n}", ...MinMax.parameters?.docs?.source },
          },
        }),
        (Step.parameters = {
          ...Step.parameters,
          docs: {
            ...Step.parameters?.docs,
            source: { originalSource: "{\n  render: () => <StepComponent />\n}", ...Step.parameters?.docs?.source },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="flex-center" style={{\n    width: "200px"\n  }}>\n      <TxInputNumber value={5} disabled />\n    </div>\n}',
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
        });
    },
  },
]);
