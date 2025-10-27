"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [3536],
  {
    "./src/stories/TxCode.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Block: () => Block,
          Inline: () => Inline,
          Outlined: () => Outlined,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_code_tx_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-code/tx-code.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxCode",
        component: _components_tx_code_tx_code__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Inline = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                children: [
                  "Use ",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_code_tx_code__WEBPACK_IMPORTED_MODULE_0__.A,
                    { children: "console.log()" }
                  ),
                  " to debug your code.",
                ],
              }),
            });
          },
        },
        Block = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_code_tx_code__WEBPACK_IMPORTED_MODULE_0__.A,
                { block: !0, children: 'function hello() {\n  console.log("Hello World");\n}' }
              ),
            });
          },
        },
        Outlined = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_code_tx_code__WEBPACK_IMPORTED_MODULE_0__.A,
                { block: !0, variant: "outlined", children: 'function hello() {\n  console.log("Hello World");\n}' }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Inline", "Block", "Outlined"];
      (Inline.parameters = {
        ...Inline.parameters,
        docs: {
          ...Inline.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <div>\n      <p>\n        Use <TxCode>console.log()</TxCode> to debug your code.\n      </p>\n    </div>\n}",
            ...Inline.parameters?.docs?.source,
          },
        },
      }),
        (Block.parameters = {
          ...Block.parameters,
          docs: {
            ...Block.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    return <div style={{\n      width: "600px"\n    }}>\n        <TxCode block>\n          {`function hello() {\n  console.log("Hello World");\n}`}\n        </TxCode>\n      </div>;\n  }\n}',
              ...Block.parameters?.docs?.source,
            },
          },
        }),
        (Outlined.parameters = {
          ...Outlined.parameters,
          docs: {
            ...Outlined.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    return <div style={{\n      width: "600px"\n    }}>\n        <TxCode block variant="outlined">\n          {`function hello() {\n  console.log("Hello World");\n}`}\n        </TxCode>\n      </div>;\n  }\n}',
              ...Outlined.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-code/tx-code.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "block", "variant", "size"],
        CodeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.code(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  padding: ",
                ";\n  background: ",
                ";\n  border: ",
                ";\n  border-radius: 4px;\n  font-size: ",
                ";\n  color: ",
                ";\n  display: ",
                ";\n  ",
                "\n",
              ]
            )),
          function (props) {
            return props.block ? "12px 16px" : "2px 6px";
          },
          function (props) {
            return "outlined" === props.variant
              ? "transparent"
              : _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight;
          },
          function (props) {
            return "outlined" === props.variant
              ? "1px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight)
              : "none";
          },
          function (props) {
            return props.size || "14px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary,
          function (props) {
            return props.block ? "block" : "inline";
          },
          function (props) {
            return props.block && "\n    white-space: pre-wrap;\n    word-break: break-all;\n  ";
          }
        ),
        TxCode = function TxCode(_ref) {
          var children = _ref.children,
            _ref$block = _ref.block,
            block = void 0 !== _ref$block && _ref$block,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? "default" : _ref$variant,
            size = _ref.size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            CodeContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { block: block ? 1 : 0, variant, size },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCode;
      TxCode.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxCode",
        props: {
          block: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          variant: { defaultValue: { value: '"default"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/theme/colors.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var colors = {
        primary: "#03030f",
        primaryLight: "#03030f30",
        primaryBorder: "#0e0e13ff",
        danger: "#e45649",
        dangerLight: "#e4564920",
        dangerLighter: "#e4564915",
        dangerShadow: "#e4564930",
        dangerHover: "#e4564950",
        success: "#52c41a",
        warning: "#faad14",
        info: "#1890ff",
        link: "#1fa9ff",
        linkLight: "#1fa9ff30",
        linkLighter: "#1fa9ff50",
        textPrimary: "#1c252e",
        textSecondary: "#8c9bab",
        textTertiary: "#9ca3af",
        textDisabled: "#a0a1a7",
        textWhite: "#ffffff",
        bgWhite: "#ffffff",
        bgPrimary: "#03030f",
        bgFill: "#f7f8fa",
        bgFillLight: "#f3f4f6",
        bgDisabled: "#f3f3f4",
        bgPrimaryLight: "#03030f10",
        bgPrimaryLighter: "#03030f20",
        borderLight: "#eef0f1",
        borderDefault: "#d1d5db",
        borderDisabled: "#a0a1a7",
        borderFocus: "#d1d5db",
        borderHover: "#9ca3af",
        gradientPurple: "#6253e1",
        gradientBlue: "#04befe",
        placeholder: "#8c9bab",
        shadowDefault: "#03030f30",
      };
      "0px 0px 8px 2px ".concat(colors.primaryLight), "0px 0px 8px 2px ".concat(colors.dangerShadow);
      const __WEBPACK_DEFAULT_EXPORT__ = colors;
    },
  },
]);
