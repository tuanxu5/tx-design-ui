"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8750],
  {
    "./src/stories/TxEmpty.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CustomEmpty: () => CustomEmpty,
          WithDescription: () => WithDescription,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_empty_tx_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-empty/tx-empty.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxEmpty",
        component: _components_tx_empty_tx_empty__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_empty_tx_empty__WEBPACK_IMPORTED_MODULE_0__.A,
                {}
              ),
            });
          },
        },
        WithDescription = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_empty_tx_empty__WEBPACK_IMPORTED_MODULE_0__.A,
                { image: "📊", title: "No Data", description: "There is no data to display" }
              ),
            });
          },
        },
        CustomEmpty = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_empty_tx_empty__WEBPACK_IMPORTED_MODULE_0__.A,
                { image: "🔍", title: "Not Found", description: "Please try again" }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Basic", "WithDescription", "CustomEmpty"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "400px"\n  }}>\n      <TxEmpty />\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (WithDescription.parameters = {
          ...WithDescription.parameters,
          docs: {
            ...WithDescription.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "400px"\n  }}>\n      <TxEmpty image="📊" title="No Data" description="There is no data to display" />\n    </div>\n}',
              ...WithDescription.parameters?.docs?.source,
            },
          },
        }),
        (CustomEmpty.parameters = {
          ...CustomEmpty.parameters,
          docs: {
            ...CustomEmpty.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "400px"\n  }}>\n      <TxEmpty image="🔍" title="Not Found" description="Please try again" />\n    </div>\n}',
              ...CustomEmpty.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-empty/tx-empty.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
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
        _excluded = ["image", "title", "description"],
        EmptyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  color: ",
                ";\n  text-align: center;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary
        ),
        EmptyImage = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.3;\n"]
            ))
        ),
        EmptyTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary
        ),
        EmptyDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 14px;\n  color: ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary
        ),
        TxEmpty = function TxEmpty(_ref) {
          var _ref$image = _ref.image,
            image = void 0 === _ref$image ? "📭" : _ref$image,
            _ref$title = _ref.title,
            title = void 0 === _ref$title ? "No Data" : _ref$title,
            description = _ref.description,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            EmptyContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyImage, { children: image }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyTitle, { children: title }),
                  description &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyDescription, {
                      children: description,
                    }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxEmpty;
      TxEmpty.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxEmpty",
        props: {
          image: { defaultValue: { value: '"📭"', computed: !1 }, required: !1 },
          title: { defaultValue: { value: '"No Data"', computed: !1 }, required: !1 },
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
