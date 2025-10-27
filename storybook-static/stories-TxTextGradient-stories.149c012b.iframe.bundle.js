"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [7106],
  {
    "./src/stories/TxTextGradient.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BlueGreen: () => BlueGreen,
          CustomGradient: () => CustomGradient,
          Default: () => Default,
          LargeSize: () => LargeSize,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxTextGradient",
        component: __webpack_require__("./src/components/tx-text-gradient/tx-text-gradient.jsx").A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Default = { args: { children: "Gradient Text" } },
        CustomGradient = {
          args: { children: "Custom Purple Gradient", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
        },
        BlueGreen = {
          args: { children: "Blue to Green", gradient: "linear-gradient(135deg, #00bcff 0%, #00d9ff 100%)" },
        },
        LargeSize = { args: { children: "Large Gradient Text", size: "48px", weight: "700" } };
      const __namedExportsOrder = ["Default", "CustomGradient", "BlueGreen", "LargeSize"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    children: "Gradient Text"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (CustomGradient.parameters = {
          ...CustomGradient.parameters,
          docs: {
            ...CustomGradient.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Custom Purple Gradient",\n    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n  }\n}',
              ...CustomGradient.parameters?.docs?.source,
            },
          },
        }),
        (BlueGreen.parameters = {
          ...BlueGreen.parameters,
          docs: {
            ...BlueGreen.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Blue to Green",\n    gradient: "linear-gradient(135deg, #00bcff 0%, #00d9ff 100%)"\n  }\n}',
              ...BlueGreen.parameters?.docs?.source,
            },
          },
        }),
        (LargeSize.parameters = {
          ...LargeSize.parameters,
          docs: {
            ...LargeSize.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Large Gradient Text",\n    size: "48px",\n    weight: "700"\n  }\n}',
              ...LargeSize.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-text-gradient/tx-text-gradient.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "gradient", "weight", "size"],
        GradientText = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  background: ",
                ";\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: ",
                ";\n  font-size: ",
                ";\n",
              ]
            )),
          function (props) {
            return props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
          },
          function (props) {
            return props.weight || "600";
          },
          function (props) {
            return props.size || "inherit";
          }
        ),
        TxTextGradient = function TxTextGradient(_ref) {
          var children = _ref.children,
            gradient = _ref.gradient,
            weight = _ref.weight,
            size = _ref.size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            GradientText,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                { gradient, weight, size },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTextGradient;
      TxTextGradient.__docgenInfo = { description: "", methods: [], displayName: "TxTextGradient" };
    },
  },
]);
