"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [6489],
  {
    "./src/stories/TxChart.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Placeholder: () => Placeholder,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxChart",
        component: __webpack_require__("./src/components/tx-chart/tx-chart.jsx").A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { type: { control: "select", options: ["bar", "line", "pie", "doughnut"] } },
      };
      var Placeholder = {
        args: { type: "bar", data: { labels: ["A", "B", "C"], values: [10, 20, 30] }, height: "300px" },
      };
      const __namedExportsOrder = ["Placeholder"];
      Placeholder.parameters = {
        ...Placeholder.parameters,
        docs: {
          ...Placeholder.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    type: "bar",\n    data: {\n      labels: ["A", "B", "C"],\n      values: [10, 20, 30]\n    },\n    height: "300px"\n  }\n}',
            ...Placeholder.parameters?.docs?.source,
          },
        },
      };
    },
    "./src/components/tx-chart/tx-chart.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
        _excluded = ["type", "data", "options", "width", "height"],
        ChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  width: 100%;\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",
                ";\n  border-radius: 8px;\n  padding: 24px;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        TxChart = function TxChart(_ref) {
          var _ref$type = _ref.type,
            type = void 0 === _ref$type ? "bar" : _ref$type,
            data = _ref.data,
            options = _ref.options,
            _ref$width = _ref.width,
            width = void 0 === _ref$width ? "100%" : _ref$width,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "300px" : _ref$height,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            chartRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              function () {
                chartRef.current && (console.log("Chart data:", data), console.log("Chart options:", options));
              },
              [data, options]
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              ChartContainer,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                  { ref: chartRef, style: { width, height } },
                  props
                ),
                {},
                {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    style: { textAlign: "center", color: _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                        style: { fontSize: "16px", fontWeight: "500" },
                        children: "Chart Component",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                        style: { fontSize: "14px", marginTop: "8px" },
                        children: [
                          "Chart type: ",
                          type,
                          " - Data visualization component (integrate with Chart.js or similar)",
                        ],
                      }),
                    ],
                  }),
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxChart;
      TxChart.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxChart",
        props: {
          type: { defaultValue: { value: '"bar"', computed: !1 }, required: !1 },
          width: { defaultValue: { value: '"100%"', computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"300px"', computed: !1 }, required: !1 },
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
