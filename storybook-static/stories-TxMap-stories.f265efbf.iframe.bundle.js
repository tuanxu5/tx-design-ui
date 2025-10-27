"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [2643],
  {
    "./src/stories/TxMap.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Compact: () => Compact,
          CustomLocation: () => CustomLocation,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxMap",
        component: __webpack_require__("./src/components/tx-map/tx-map.jsx").A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { center: { control: "text" }, zoom: { control: "number" }, height: { control: "text" } },
      };
      var Basic = { args: { center: "New York, NY", zoom: 12, height: "400px" } },
        CustomLocation = { args: { center: "Tokyo, Japan", zoom: 14, height: "500px" } },
        Compact = { args: { center: "San Francisco, CA", zoom: 13, height: "300px" } };
      const __namedExportsOrder = ["Basic", "CustomLocation", "Compact"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    center: "New York, NY",\n    zoom: 12,\n    height: "400px"\n  }\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (CustomLocation.parameters = {
          ...CustomLocation.parameters,
          docs: {
            ...CustomLocation.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    center: "Tokyo, Japan",\n    zoom: 14,\n    height: "500px"\n  }\n}',
              ...CustomLocation.parameters?.docs?.source,
            },
          },
        }),
        (Compact.parameters = {
          ...Compact.parameters,
          docs: {
            ...Compact.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    center: "San Francisco, CA",\n    zoom: 13,\n    height: "300px"\n  }\n}',
              ...Compact.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-map/tx-map.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
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
        _excluded = ["src", "center", "zoom", "height", "title"],
        MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        TxMap = function TxMap(_ref) {
          var src = _ref.src,
            center = _ref.center,
            _ref$zoom = _ref.zoom,
            zoom = void 0 === _ref$zoom ? 10 : _ref$zoom,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "400px" : _ref$height,
            title = _ref.title,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            id = (0, react__WEBPACK_IMPORTED_MODULE_0__.useId)(),
            iframeTitle = title || "tx-map-".concat(id);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            MapContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                { style: { height } },
                props
              ),
              {},
              {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
                  title: iframeTitle,
                  src: src || "https://www.google.com/maps?q=".concat(center, "&z=").concat(zoom, "&output=embed"),
                  width: "100%",
                  height: "100%",
                  style: { border: 0 },
                  allowFullScreen: !0,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxMap;
      TxMap.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxMap",
        props: {
          zoom: { defaultValue: { value: "10", computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"400px"', computed: !1 }, required: !1 },
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
