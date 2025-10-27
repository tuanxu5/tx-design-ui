"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [2931],
  {
    "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _arrayLikeToArray });
    },
    "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _iterableToArray(r) {
        if (("undefined" != typeof Symbol && null != r[Symbol.iterator]) || null != r["@@iterator"])
          return Array.from(r);
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _iterableToArray });
    },
    "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _toConsumableArray });
      var arrayLikeToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");
      var iterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"),
        unsupportedIterableToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
        );
      function _toConsumableArray(r) {
        return (
          (function _arrayWithoutHoles(r) {
            if (Array.isArray(r)) return (0, arrayLikeToArray.A)(r);
          })(r) ||
          (0, iterableToArray.A)(r) ||
          (0, unsupportedIterableToArray.A)(r) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _unsupportedIterableToArray });
      var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
      );
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return (
            "Object" === t && r.constructor && (t = r.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(r)
              : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r, a)
              : void 0
          );
        }
      }
    },
    "./src/stories/TxGrid.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Responsive: () => Responsive,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
        _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-grid/tx-grid.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxGrid",
        component: _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.b,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "800px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.b,
                {
                  columns: "repeat(3, 1fr)",
                  gap: "16px",
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O,
                      { children: "Item 1" }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O,
                      { children: "Item 2" }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O,
                      { children: "Item 3" }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O,
                      { children: "Item 4" }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O,
                      { children: "Item 5" }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O,
                      { children: "Item 6" }
                    ),
                  ],
                }
              ),
            });
          },
        },
        Responsive = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "900px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.b,
                {
                  columns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: "12px",
                  children: (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                    Array(12)
                  ).map(function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_tx_grid_tx_grid__WEBPACK_IMPORTED_MODULE_0__.O, { children: ["Item ", i + 1] }, i);
                  }),
                }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Basic", "Responsive"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "800px"\n  }}>\n      <TxGrid columns="repeat(3, 1fr)" gap="16px">\n        <TxGridItem>Item 1</TxGridItem>\n        <TxGridItem>Item 2</TxGridItem>\n        <TxGridItem>Item 3</TxGridItem>\n        <TxGridItem>Item 4</TxGridItem>\n        <TxGridItem>Item 5</TxGridItem>\n        <TxGridItem>Item 6</TxGridItem>\n      </TxGrid>\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Responsive.parameters = {
          ...Responsive.parameters,
          docs: {
            ...Responsive.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "900px"\n  }}>\n      <TxGrid columns="repeat(auto-fill, minmax(150px, 1fr))" gap="12px">\n        {[...Array(12)].map((_, i) => <TxGridItem key={i}>Item {i + 1}</TxGridItem>)}\n      </TxGrid>\n    </div>\n}',
              ...Responsive.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-grid/tx-grid.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { O: () => TxGridItem, b: () => TxGrid });
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
        _excluded = ["columns", "gap", "children"],
        _excluded2 = ["children"],
        GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  display: grid;\n  grid-template-columns: ", ";\n  gap: ", ";\n  width: 100%;\n"]
            )),
          function (props) {
            return props.columns || "repeat(auto-fit, minmax(200px, 1fr))";
          },
          function (props) {
            return props.gap || "16px";
          }
        ),
        GridItem = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  background: ", ";\n  padding: 16px;\n  border-radius: 8px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight
        ),
        TxGrid = function TxGrid(_ref) {
          var columns = _ref.columns,
            gap = _ref.gap,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            GridContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { columns, gap },
                props
              ),
              {},
              { children }
            )
          );
        },
        TxGridItem = function TxGridItem(_ref2) {
          var children = _ref2.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref2,
              _excluded2
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            GridItem,
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
      (TxGrid.__docgenInfo = { description: "", methods: [], displayName: "TxGrid" }),
        (TxGridItem.__docgenInfo = { description: "", methods: [], displayName: "TxGridItem" });
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
