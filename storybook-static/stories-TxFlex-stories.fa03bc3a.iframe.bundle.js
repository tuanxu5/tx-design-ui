"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8770],
  {
    "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _defineProperty });
      var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
      );
      function _defineProperty(e, r, t) {
        return (
          (r = (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r)) in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _objectSpread2 });
      var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
      );
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var o,
          r,
          i = (function _objectWithoutPropertiesLoose(r, e) {
            if (null == r) return {};
            var t = {};
            for (var n in r)
              if ({}.hasOwnProperty.call(r, n)) {
                if (e.includes(n)) continue;
                t[n] = r[n];
              }
            return t;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (o = s[r]), t.includes(o) || ({}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
        }
        return i;
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _objectWithoutProperties });
    },
    "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => toPropertyKey });
      var esm_typeof = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");
      function toPropertyKey(t) {
        var i = (function toPrimitive(t, r) {
          if ("object" != (0, esm_typeof.A)(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != (0, esm_typeof.A)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" == (0, esm_typeof.A)(i) ? i : i + "";
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/typeof.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _typeof(o) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _typeof });
    },
    "./src/stories/TxFlex.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Centered: () => Centered,
          Vertical: () => Vertical,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_flex_tx_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-flex/tx-flex.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxFlex",
        component: _components_tx_flex_tx_flex__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_flex_tx_flex__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                gap: "16px",
                width: "100%",
                maxWidth: "600px",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { padding: "16px", background: "#f0f0f0", borderRadius: "4px" },
                    children: "Item 1",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { padding: "16px", background: "#f0f0f0", borderRadius: "4px" },
                    children: "Item 2",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { padding: "16px", background: "#f0f0f0", borderRadius: "4px" },
                    children: "Item 3",
                  }),
                ],
              }
            );
          },
        },
        Vertical = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_flex_tx_flex__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                direction: "column",
                gap: "8px",
                width: "200px",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { padding: "12px", background: "#f0f0f0", borderRadius: "4px" },
                    children: "Item 1",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { padding: "12px", background: "#f0f0f0", borderRadius: "4px" },
                    children: "Item 2",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { padding: "12px", background: "#f0f0f0", borderRadius: "4px" },
                    children: "Item 3",
                  }),
                ],
              }
            );
          },
        },
        Centered = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _components_tx_flex_tx_flex__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                justify: "center",
                align: "center",
                gap: "16px",
                width: "100%",
                maxWidth: "400px",
                height: "200px",
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  style: { padding: "16px", background: "#f0f0f0", borderRadius: "4px" },
                  children: "Centered",
                }),
              }
            );
          },
        };
      const __namedExportsOrder = ["Basic", "Vertical", "Centered"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <TxFlex gap="16px" width="100%" maxWidth="600px">\n      <div style={{\n      padding: "16px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Item 1</div>\n      <div style={{\n      padding: "16px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Item 2</div>\n      <div style={{\n      padding: "16px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Item 3</div>\n    </TxFlex>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Vertical.parameters = {
          ...Vertical.parameters,
          docs: {
            ...Vertical.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <TxFlex direction="column" gap="8px" width="200px">\n      <div style={{\n      padding: "12px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Item 1</div>\n      <div style={{\n      padding: "12px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Item 2</div>\n      <div style={{\n      padding: "12px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Item 3</div>\n    </TxFlex>\n}',
              ...Vertical.parameters?.docs?.source,
            },
          },
        }),
        (Centered.parameters = {
          ...Centered.parameters,
          docs: {
            ...Centered.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <TxFlex justify="center" align="center" gap="16px" width="100%" maxWidth="400px" height="200px">\n      <div style={{\n      padding: "16px",\n      background: "#f0f0f0",\n      borderRadius: "4px"\n    }}>Centered</div>\n    </TxFlex>\n}',
              ...Centered.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-flex/tx-flex.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["direction", "align", "justify", "gap", "width", "children"],
        FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  display: flex;\n  flex-direction: ",
                ";\n  align-items: ",
                ";\n  justify-content: ",
                ";\n  gap: ",
                ";\n  width: ",
                ";\n",
              ]
            )),
          function (props) {
            return props.direction || "row";
          },
          function (props) {
            return props.align || "stretch";
          },
          function (props) {
            return props.justify || "flex-start";
          },
          function (props) {
            return props.gap || "0";
          },
          function (props) {
            return props.width || "100%";
          }
        ),
        TxFlex = function TxFlex(_ref) {
          var direction = _ref.direction,
            align = _ref.align,
            justify = _ref.justify,
            gap = _ref.gap,
            width = _ref.width,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            FlexContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                { direction, align, justify, gap, width },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxFlex;
      TxFlex.__docgenInfo = { description: "", methods: [], displayName: "TxFlex" };
    },
  },
]);
