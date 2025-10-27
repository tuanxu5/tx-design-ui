"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [350],
  {
    "./src/stories/TxDivider.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomThickness: () => CustomThickness,
          Horizontal: () => Horizontal,
          Vertical: () => Vertical,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-divider/tx-divider.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxDivider",
        component: _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Horizontal = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { width: "400px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Content above the divider" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__.A,
                  {}
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Content below the divider" }),
              ],
            });
          },
        },
        Vertical = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { display: "flex", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { children: "Left" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__.A,
                  { vertical: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { children: "Middle" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__.A,
                  { vertical: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { children: "Right" }),
              ],
            });
          },
        },
        CustomThickness = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { width: "400px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Normal divider" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__.A,
                  { thickness: "1px" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Thick divider" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_divider_tx_divider__WEBPACK_IMPORTED_MODULE_0__.A,
                  { thickness: "4px" }
                ),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Horizontal", "Vertical", "CustomThickness"];
      (Horizontal.parameters = {
        ...Horizontal.parameters,
        docs: {
          ...Horizontal.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    width: "400px"\n  }}>\n      <p>Content above the divider</p>\n      <TxDivider />\n      <p>Content below the divider</p>\n    </div>\n}',
            ...Horizontal.parameters?.docs?.source,
          },
        },
      }),
        (Vertical.parameters = {
          ...Vertical.parameters,
          docs: {
            ...Vertical.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    alignItems: "center"\n  }}>\n      <span>Left</span>\n      <TxDivider vertical />\n      <span>Middle</span>\n      <TxDivider vertical />\n      <span>Right</span>\n    </div>\n}',
              ...Vertical.parameters?.docs?.source,
            },
          },
        }),
        (CustomThickness.parameters = {
          ...CustomThickness.parameters,
          docs: {
            ...CustomThickness.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px"\n  }}>\n      <p>Normal divider</p>\n      <TxDivider thickness="1px" />\n      <p>Thick divider</p>\n      <TxDivider thickness="4px" />\n    </div>\n}',
              ...CustomThickness.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-divider/tx-divider.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
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
        _excluded = ["vertical", "thickness", "margin"],
        DividerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.hr(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  border: none;\n  border-top: ", " solid ", ";\n  margin: ", " 0;\n  ", "\n"]
            )),
          function (props) {
            return props.thickness || "1px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          function (props) {
            return props.margin || "16px";
          },
          function (props) {
            return (
              props.vertical &&
              "\n    border-top: none;\n    border-left: "
                .concat(props.thickness || "1px", " solid ")
                .concat(
                  _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
                  ";\n    display: inline-block;\n    margin: 0 "
                )
                .concat(props.margin || "8px", ";\n    vertical-align: middle;\n  ")
            );
          }
        ),
        TxDivider = function TxDivider(_ref) {
          var _ref$vertical = _ref.vertical,
            vertical = void 0 !== _ref$vertical && _ref$vertical,
            thickness = _ref.thickness,
            margin = _ref.margin,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            DividerStyled,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              { vertical: vertical ? 1 : 0, thickness, margin },
              props
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxDivider;
      TxDivider.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDivider",
        props: { vertical: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
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
