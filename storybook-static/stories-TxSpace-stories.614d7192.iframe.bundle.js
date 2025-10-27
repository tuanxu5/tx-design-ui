"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [7775],
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
    "./src/stories/TxSpace.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Horizontal: () => Horizontal,
          LargeGap: () => LargeGap,
          Vertical: () => Vertical,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_space_tx_space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-space/tx-space.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxSpace",
        component: _components_tx_space_tx_space__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Horizontal = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_space_tx_space__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                size: "16px",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", { children: "Button 1" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", { children: "Button 2" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", { children: "Button 3" }),
                ],
              }
            );
          },
        },
        Vertical = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_space_tx_space__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                direction: "vertical",
                size: "12px",
                width: "200px",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", { children: "Item 1" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", { children: "Item 2" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", { children: "Item 3" }),
                ],
              }
            );
          },
        },
        LargeGap = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_space_tx_space__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                size: "32px",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: "Large" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: "Gap" }),
                ],
              }
            );
          },
        };
      const __namedExportsOrder = ["Horizontal", "Vertical", "LargeGap"];
      (Horizontal.parameters = {
        ...Horizontal.parameters,
        docs: {
          ...Horizontal.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <TxSpace size="16px">\n      <button>Button 1</button>\n      <button>Button 2</button>\n      <button>Button 3</button>\n    </TxSpace>\n}',
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
                '{\n  render: () => <TxSpace direction="vertical" size="12px" width="200px">\n      <button>Item 1</button>\n      <button>Item 2</button>\n      <button>Item 3</button>\n    </TxSpace>\n}',
              ...Vertical.parameters?.docs?.source,
            },
          },
        }),
        (LargeGap.parameters = {
          ...LargeGap.parameters,
          docs: {
            ...LargeGap.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <TxSpace size="32px">\n      <div>Large</div>\n      <div>Gap</div>\n    </TxSpace>\n}',
              ...LargeGap.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-space/tx-space.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["direction", "size", "children"],
        SpaceContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  display: inline-flex;\n  flex-direction: ",
                ";\n  align-items: center;\n  gap: ",
                ";\n  width: ",
                ";\n",
              ]
            )),
          function (props) {
            return props.direction || "horizontal";
          },
          function (props) {
            return props.size || "8px";
          },
          function (props) {
            return "vertical" === props.direction ? "100%" : "auto";
          }
        ),
        TxSpace = function TxSpace(_ref) {
          var _ref$direction = _ref.direction,
            direction = void 0 === _ref$direction ? "horizontal" : _ref$direction,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "8px" : _ref$size,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            SpaceContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { direction, size },
                props
              ),
              {},
              {
                children: react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: child }, child.key || Math.random());
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSpace;
      TxSpace.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSpace",
        props: {
          direction: { defaultValue: { value: '"horizontal"', computed: !1 }, required: !1 },
          size: { defaultValue: { value: '"8px"', computed: !1 }, required: !1 },
        },
      };
    },
  },
]);
