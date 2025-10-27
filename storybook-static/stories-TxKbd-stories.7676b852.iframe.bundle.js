"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [3912],
  {
    "./src/stories/TxKbd.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Multiple: () => Multiple,
          Single: () => Single,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-kbd/tx-kbd.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxKbd",
        component: _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Single = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                children: [
                  "Press ",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                    { children: "Ctrl" }
                  ),
                  " + ",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                    { children: "K" }
                  ),
                  " to open the command palette",
                ],
              }),
            });
          },
        },
        Multiple = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { display: "flex", flexDirection: "column", gap: "16px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "Esc" }
                    ),
                    " to close",
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "Ctrl" }
                    ),
                    " + ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "S" }
                    ),
                    " to save",
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "Ctrl" }
                    ),
                    " + ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "Shift" }
                    ),
                    " + ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_kbd_tx_kbd__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "P" }
                    ),
                    " for settings",
                  ],
                }),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Single", "Multiple"];
      (Single.parameters = {
        ...Single.parameters,
        docs: {
          ...Single.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <div>\n      <p>\n        Press <TxKbd>Ctrl</TxKbd> + <TxKbd>K</TxKbd> to open the command palette\n      </p>\n    </div>\n}",
            ...Single.parameters?.docs?.source,
          },
        },
      }),
        (Multiple.parameters = {
          ...Multiple.parameters,
          docs: {
            ...Multiple.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "16px"\n  }}>\n      <p>\n        <TxKbd>Esc</TxKbd> to close\n      </p>\n      <p>\n        <TxKbd>Ctrl</TxKbd> + <TxKbd>S</TxKbd> to save\n      </p>\n      <p>\n        <TxKbd>Ctrl</TxKbd> + <TxKbd>Shift</TxKbd> + <TxKbd>P</TxKbd> for settings\n      </p>\n    </div>\n}',
              ...Multiple.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-kbd/tx-kbd.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
        _excluded = ["children"],
        KbdStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.kbd(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  display: inline-block;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: ",
                ";\n  background: ",
                ";\n  border: 1px solid ",
                ";\n  border-radius: 4px;\n  box-shadow: 0 1px 0 ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderMedium
        ),
        TxKbd = function TxKbd(_ref) {
          var children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            KbdStyled,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxKbd;
      TxKbd.__docgenInfo = { description: "", methods: [], displayName: "TxKbd" };
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
