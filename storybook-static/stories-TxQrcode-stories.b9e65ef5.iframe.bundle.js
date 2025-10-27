"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [5269],
  {
    "./src/stories/TxQrcode.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Large: () => Large,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxQrcode",
        component: __webpack_require__("./src/components/tx-qrcode/tx-qrcode.jsx").A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { size: { control: "number" } },
      };
      var Basic = { args: { value: "https://www.example.com", size: 200 } },
        Small = { args: { value: "Hello World", size: 150 } },
        Large = { args: { value: "https://example.com", size: 300 } };
      const __namedExportsOrder = ["Basic", "Small", "Large"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    value: "https://www.example.com",\n    size: 200\n  }\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    value: "Hello World",\n    size: 150\n  }\n}',
              ...Small.parameters?.docs?.source,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    value: "https://example.com",\n    size: 300\n  }\n}',
              ...Large.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-qrcode/tx-qrcode.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["value", "size"],
        QRCodeContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: inline-flex;\n  padding: 16px;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        QRCodeCanvas = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.canvas(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: block;\n"]
            ))
        ),
        TxQrcode = function TxQrcode(_ref) {
          var value = _ref.value,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 200 : _ref$size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            canvasRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
              function () {
                var canvas = canvasRef.current;
                if (canvas && value) {
                  var ctx = canvas.getContext("2d");
                  ctx.clearRect(0, 0, size, size),
                    (ctx.fillStyle = "white"),
                    ctx.fillRect(0, 0, size, size),
                    (ctx.fillStyle = "black"),
                    (ctx.font = "14px Arial"),
                    (ctx.textAlign = "center"),
                    ctx.fillText("QR Code", size / 2, size / 2 - 10),
                    ctx.fillText(value.substring(0, 20), size / 2, size / 2 + 10);
                }
              },
              [value, size]
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              QRCodeContainer,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                  {},
                  props
                ),
                {},
                {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(QRCodeCanvas, {
                    ref: canvasRef,
                    width: size,
                    height: size,
                  }),
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxQrcode;
      TxQrcode.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxQrcode",
        props: { size: { defaultValue: { value: "200", computed: !1 }, required: !1 } },
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
