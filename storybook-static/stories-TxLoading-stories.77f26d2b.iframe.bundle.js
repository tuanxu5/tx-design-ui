"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [5709, 8661],
  {
    "./src/stories/TxLoading.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          CustomColors: () => CustomColors,
          Preview: () => Preview,
          Sizes: () => Sizes,
          WithText: () => WithText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-loading/tx-loading.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxLoading",
        component: _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          size: { control: "select", options: ["small", "medium", "large"] },
          text: { control: "text" },
          fullscreen: { control: "boolean" },
          spinnerColor: { control: "color" },
          textColor: { control: "color" },
        },
      };
      var Preview = { args: { size: "medium", text: "Loading...", fullscreen: !1 } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: { padding: "40px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
              {}
            ),
          });
        },
        WithText = function WithText() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: { padding: "40px" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
              { text: "Loading..." }
            ),
          });
        },
        Sizes = function Sizes() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "40px", alignItems: "center", padding: "40px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
                { size: "small", text: "Small" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
                { size: "medium", text: "Medium" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
                { size: "large", text: "Large" }
              ),
            ],
          });
        },
        CustomColors = function CustomColors() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "40px", alignItems: "center", padding: "40px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
                { spinnerColor: "#6253e1", textColor: "#6253e1", text: "Custom Purple" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
                { spinnerColor: "#ff6b6b", textColor: "#ff6b6b", text: "Custom Red" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_loading_tx_loading__WEBPACK_IMPORTED_MODULE_0__.A,
                { spinnerColor: "#4ecdc4", textColor: "#4ecdc4", text: "Custom Teal" }
              ),
            ],
          });
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "WithText", "Sizes", "CustomColors"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    size: "medium",\n    text: "Loading...",\n    fullscreen: false\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    padding: "40px"\n  }}>\n      <TxLoading />\n    </div>;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (WithText.parameters = {
          ...WithText.parameters,
          docs: {
            ...WithText.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    padding: "40px"\n  }}>\n      <TxLoading text="Loading..." />\n    </div>;\n}',
              ...WithText.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "40px",\n    alignItems: "center",\n    padding: "40px"\n  }}>\n      <TxLoading size="small" text="Small" />\n      <TxLoading size="medium" text="Medium" />\n      <TxLoading size="large" text="Large" />\n    </div>;\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (CustomColors.parameters = {
          ...CustomColors.parameters,
          docs: {
            ...CustomColors.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "40px",\n    alignItems: "center",\n    padding: "40px"\n  }}>\n      <TxLoading spinnerColor="#6253e1" textColor="#6253e1" text="Custom Purple" />\n      <TxLoading spinnerColor="#ff6b6b" textColor="#ff6b6b" text="Custom Red" />\n      <TxLoading spinnerColor="#4ecdc4" textColor="#4ecdc4" text="Custom Teal" />\n    </div>;\n}',
              ...CustomColors.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-loading/tx-loading.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_loading });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        spin = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        StyledLoadingWrapper = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: ",
              ";\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n  ",
              "\n",
            ])),
          function (props) {
            return props.fullscreen ? "flex" : "inline-flex";
          },
          function (props) {
            return (
              props.fullscreen &&
              "\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.9);\n    z-index: 9999;\n  "
            );
          }
        ),
        StyledSpinner = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  border: 3px solid ",
              ";\n  border-top-color: ",
              ";\n  border-radius: 50%;\n  animation: ",
              " 0.8s linear infinite;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "48px";
              default:
                return "32px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "48px";
              default:
                return "32px";
            }
          },
          function (props) {
            return props.color || colors.A.borderLight;
          },
          function (props) {
            return props.spinnerColor || colors.A.primary;
          },
          spin
        ),
        StyledLoadingText = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  color: ",
              ";\n  font-size: 14px;\n  font-weight: 400;\n",
            ])),
          function (props) {
            return props.color || colors.A.textSecondary;
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["size", "text", "fullscreen", "spinnerColor", "textColor"],
        TxLoading = function TxLoading(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            text = _ref.text,
            _ref$fullscreen = _ref.fullscreen,
            fullscreen = void 0 !== _ref$fullscreen && _ref$fullscreen,
            spinnerColor = _ref.spinnerColor,
            textColor = _ref.textColor,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            StyledLoadingWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ fullscreen }, rest),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(StyledSpinner, { size, spinnerColor }),
                  text && (0, jsx_runtime.jsx)(StyledLoadingText, { color: textColor, children: text }),
                ],
              }
            )
          );
        };
      TxLoading.defaultProps = { size: "medium", fullscreen: !1 };
      const tx_loading = TxLoading;
      TxLoading.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxLoading",
        props: {
          size: {
            defaultValue: { value: '"medium"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"small"', computed: !1 },
                { value: '"medium"', computed: !1 },
                { value: '"large"', computed: !1 },
              ],
            },
            required: !1,
          },
          fullscreen: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          text: { description: "", type: { name: "string" }, required: !1 },
          spinnerColor: { description: "", type: { name: "string" }, required: !1 },
          textColor: { description: "", type: { name: "string" }, required: !1 },
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
    "./src/styles/shorten.scss": () => {},
  },
]);
