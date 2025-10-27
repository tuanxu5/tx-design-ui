"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9182],
  {
    "./src/stories/TxSkeleton.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Circle: () => Circle,
          Multiple: () => Multiple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-skeleton/tx-skeleton.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxSkeleton",
        component: _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                { width: "100%", height: "20px" }
              ),
            });
          },
        },
        Multiple = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { width: "100%", maxWidth: "400px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                  { width: "100%", height: "60px", style: { marginBottom: "16px" } }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                  { width: "80%", height: "20px", style: { marginBottom: "8px" } }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                  { width: "60%", height: "20px" }
                ),
              ],
            });
          },
        },
        Circle = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { display: "flex", gap: "16px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                  { width: "40px", variant: "circle" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                      { width: "150px", height: "16px", style: { marginBottom: "8px" } }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_skeleton_tx_skeleton__WEBPACK_IMPORTED_MODULE_0__.A,
                      { width: "100px", height: "14px" }
                    ),
                  ],
                }),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Basic", "Multiple", "Circle"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "400px"\n  }}>\n      <TxSkeleton width="100%" height="20px" />\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Multiple.parameters = {
          ...Multiple.parameters,
          docs: {
            ...Multiple.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "400px"\n  }}>\n      <TxSkeleton width="100%" height="60px" style={{\n      marginBottom: "16px"\n    }} />\n      <TxSkeleton width="80%" height="20px" style={{\n      marginBottom: "8px"\n    }} />\n      <TxSkeleton width="60%" height="20px" />\n    </div>\n}',
              ...Multiple.parameters?.docs?.source,
            },
          },
        }),
        (Circle.parameters = {
          ...Circle.parameters,
          docs: {
            ...Circle.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "16px",\n    alignItems: "center"\n  }}>\n      <TxSkeleton width="40px" variant="circle" />\n      <div>\n        <TxSkeleton width="150px" height="16px" style={{\n        marginBottom: "8px"\n      }} />\n        <TxSkeleton width="100px" height="14px" />\n      </div>\n    </div>\n}',
              ...Circle.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-skeleton/tx-skeleton.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["width", "height", "variant", "radius"],
        shimmer = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.i7)(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n",
              ]
            ))
        ),
        SkeletonBase = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  background: linear-gradient(90deg, ",
                " 25%, ",
                " 50%, ",
                " 75%);\n  background-size: 2000px 100%;\n  animation: ",
                " 1.5s infinite;\n  border-radius: ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillMedium,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          shimmer,
          function (props) {
            return props.radius || "4px";
          }
        ),
        TxSkeleton = function TxSkeleton(_ref) {
          var _ref$width = _ref.width,
            width = void 0 === _ref$width ? "100%" : _ref$width,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "20px" : _ref$height,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? "rect" : _ref$variant,
            radius = _ref.radius,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            ),
            isCircle = "circle" === variant;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            SkeletonBase,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              { style: { width, height: isCircle ? width : height, borderRadius: isCircle ? "50%" : radius || "4px" } },
              props
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSkeleton;
      TxSkeleton.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSkeleton",
        props: {
          width: { defaultValue: { value: '"100%"', computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"20px"', computed: !1 }, required: !1 },
          variant: { defaultValue: { value: '"rect"', computed: !1 }, required: !1 },
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
