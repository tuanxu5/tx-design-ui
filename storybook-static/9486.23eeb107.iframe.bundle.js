"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9486],
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
    "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _arrayWithHoles });
    },
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
    "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _nonIterableRest });
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
    "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _slicedToArray });
      var arrayWithHoles = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
      var unsupportedIterableToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
        ),
        nonIterableRest = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");
      function _slicedToArray(r, e) {
        return (
          (0, arrayWithHoles.A)(r) ||
          (function _iterableToArrayLimit(r, l) {
            var t = null == r ? null : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
            if (null != t) {
              var e,
                n,
                i,
                u,
                a = [],
                f = !0,
                o = !1;
              try {
                if (((i = (t = t.call(r)).next), 0 === l)) {
                  if (Object(t) !== t) return;
                  f = !1;
                } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
              } catch (r) {
                (o = !0), (n = r);
              } finally {
                try {
                  if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(r, e) ||
          (0, unsupportedIterableToArray.A)(r, e) ||
          (0, nonIterableRest.A)()
        );
      }
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
    "./node_modules/@storybook/addon-actions/dist/index.mjs": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__("storybook/internal/preview-api"),
        __webpack_require__("storybook/internal/preview-errors"),
        __webpack_require__("@storybook/global");
    },
    "./src/stories/TxInput.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ClearInput: () => ClearInput,
          CombinedFeatures: () => CombinedFeatures,
          Default: () => Default,
          DisabledState: () => DisabledState,
          FillVariants: () => FillVariants,
          MaxLength: () => MaxLength,
          PasswordInput: () => PasswordInput,
          PrefixSuffix: () => PrefixSuffix,
          Sizes: () => Sizes,
          StatusStates: () => StatusStates,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/index.mjs"
        ),
        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/icons/outline/index.js"),
        _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-input/tx-input.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxInput",
        component: _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          background: { control: "color" },
          color: { control: "color" },
          onChange: { action: "changed" },
          status: { control: { type: "select" }, options: [null, "success", "warning", "error", "info"] },
          size: { control: { type: "select" }, options: ["small", "medium", "large"] },
          type: { control: { type: "select" }, options: ["text", "password", "email", "number", "tel", "url"] },
        },
        args: { placeholder: "Input placeholder", onChange: _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.fn },
      };
      var Default = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              style: { width: "300px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  {},
                  args
                )
              ),
            });
          },
        },
        Sizes = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { size: "small", placeholder: "Small input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { size: "medium", placeholder: "Medium input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { size: "large", placeholder: "Large input" }
                  )
                ),
              ],
            });
          },
        },
        FillVariants = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { placeholder: "Default outline input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { fill: !0, placeholder: "Fill input" }
                  )
                ),
              ],
            });
          },
        },
        ClearInput = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { allowClear: !0, placeholder: "Clear input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { allowClear: !0, fill: !0, placeholder: "Clear fill input" }
                  )
                ),
              ],
            });
          },
        },
        StatusStates = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "success", placeholder: "Success input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "warning", placeholder: "Warning input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "error", placeholder: "Error input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "info", placeholder: "Info input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "success", fill: !0, placeholder: "Success input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "warning", fill: !0, placeholder: "Warning input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "error", fill: !0, placeholder: "Error input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { status: "info", fill: !0, placeholder: "Info input" }
                  )
                ),
              ],
            });
          },
        },
        PasswordInput = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { password: !0, placeholder: "Password with toggle" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { password: !0, passwordToggle: !1, placeholder: "Password without toggle" }
                  )
                ),
              ],
            });
          },
        },
        DisabledState = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { disabled: !0, placeholder: "Disabled input" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { disabled: !0, fill: !0, placeholder: "Disabled fill input" }
                  )
                ),
              ],
            });
          },
        },
        PrefixSuffix = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      prefix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      placeholder: "With prefix",
                    }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      suffix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      placeholder: "With suffix",
                    }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      prefix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      suffix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      placeholder: "With prefix and suffix",
                    }
                  )
                ),
              ],
            });
          },
        },
        MaxLength = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { placeholder: "Max length is 10", maxLength: 10 }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { placeholder: "Max length is 20", maxLength: 20 }
                  )
                ),
              ],
            });
          },
        },
        CombinedFeatures = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "300px", display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      prefix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      status: "success",
                      size: "large",
                      placeholder: "Success with prefix",
                    }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      suffix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      status: "warning",
                      fill: !0,
                      placeholder: "Warning fill with suffix",
                    }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    { password: !0, status: "error", size: "small", placeholder: "Error password small" }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      prefix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      suffix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                        {}
                      ),
                      status: "info",
                      placeholder: "URL with domain parts",
                    }
                  )
                ),
              ],
            });
          },
        };
      const __namedExportsOrder = [
        "Default",
        "Sizes",
        "FillVariants",
        "ClearInput",
        "StatusStates",
        "PasswordInput",
        "DisabledState",
        "PrefixSuffix",
        "MaxLength",
        "CombinedFeatures",
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <div style={{\n    width: "300px"\n  }}>\n      <TxInput {...args} />\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} size="small" placeholder="Small input" />\n      <TxInput {...args} size="medium" placeholder="Medium input" />\n      <TxInput {...args} size="large" placeholder="Large input" />\n    </div>\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (FillVariants.parameters = {
          ...FillVariants.parameters,
          docs: {
            ...FillVariants.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} placeholder="Default outline input" />\n      <TxInput {...args} fill placeholder="Fill input" />\n    </div>\n}',
              ...FillVariants.parameters?.docs?.source,
            },
          },
        }),
        (ClearInput.parameters = {
          ...ClearInput.parameters,
          docs: {
            ...ClearInput.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} allowClear placeholder="Clear input" />\n      <TxInput {...args} allowClear fill placeholder="Clear fill input" />\n    </div>\n}',
              ...ClearInput.parameters?.docs?.source,
            },
          },
        }),
        (StatusStates.parameters = {
          ...StatusStates.parameters,
          docs: {
            ...StatusStates.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} status="success" placeholder="Success input" />\n      <TxInput {...args} status="warning" placeholder="Warning input" />\n      <TxInput {...args} status="error" placeholder="Error input" />\n      <TxInput {...args} status="info" placeholder="Info input" />\n      <TxInput {...args} status="success" fill placeholder="Success input" />\n      <TxInput {...args} status="warning" fill placeholder="Warning input" />\n      <TxInput {...args} status="error" fill placeholder="Error input" />\n      <TxInput {...args} status="info" fill placeholder="Info input" />\n    </div>\n}',
              ...StatusStates.parameters?.docs?.source,
            },
          },
        }),
        (PasswordInput.parameters = {
          ...PasswordInput.parameters,
          docs: {
            ...PasswordInput.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} password placeholder="Password with toggle" />\n      <TxInput {...args} password passwordToggle={false} placeholder="Password without toggle" />\n    </div>\n}',
              ...PasswordInput.parameters?.docs?.source,
            },
          },
        }),
        (DisabledState.parameters = {
          ...DisabledState.parameters,
          docs: {
            ...DisabledState.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} disabled placeholder="Disabled input" />\n      <TxInput {...args} disabled fill placeholder="Disabled fill input" />\n    </div>\n}',
              ...DisabledState.parameters?.docs?.source,
            },
          },
        }),
        (PrefixSuffix.parameters = {
          ...PrefixSuffix.parameters,
          docs: {
            ...PrefixSuffix.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} prefix={<TxIconOutline.IconAdd />} placeholder="With prefix" />\n      <TxInput {...args} suffix={<TxIconOutline.IconAdd />} placeholder="With suffix" />\n      <TxInput {...args} prefix={<TxIconOutline.IconAdd />} suffix={<TxIconOutline.IconAdd />} placeholder="With prefix and suffix" />\n    </div>\n}',
              ...PrefixSuffix.parameters?.docs?.source,
            },
          },
        }),
        (MaxLength.parameters = {
          ...MaxLength.parameters,
          docs: {
            ...MaxLength.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} placeholder="Max length is 10" maxLength={10} />\n      <TxInput {...args} placeholder="Max length is 20" maxLength={20} />\n    </div>\n}',
              ...MaxLength.parameters?.docs?.source,
            },
          },
        }),
        (CombinedFeatures.parameters = {
          ...CombinedFeatures.parameters,
          docs: {
            ...CombinedFeatures.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div style={{\n    width: "300px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "20px"\n  }}>\n      <TxInput {...args} prefix={<TxIconOutline.IconAdd />} status="success" size="large" placeholder="Success with prefix" />\n      <TxInput {...args} suffix={<TxIconOutline.IconAdd />} status="warning" fill placeholder="Warning fill with suffix" />\n      <TxInput {...args} password status="error" size="small" placeholder="Error password small" />\n      <TxInput {...args} prefix={<TxIconOutline.IconAdd />} suffix={<TxIconOutline.IconAdd />} status="info" placeholder="URL with domain parts" />\n    </div>\n}',
              ...CombinedFeatures.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-input/tx-input.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_input });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        outline = __webpack_require__("./src/assets/icons/outline/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        StyledInputWrapper =
          (__webpack_require__("./src/styles/shorten.scss"),
          styled_components_browser_esm.Ay.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.A)([
                "\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n",
              ]))
          )),
        StyledTxInput = styled_components_browser_esm.Ay.input(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 30px 30px;\n  border-radius: 10px;\n  border: 1.5px solid #eef0f1;\n  font-size: 14px;\n  color: #1c252e;\n  outline: none;\n  width: 100%;\n  transition: all 0.3s ease;\n  letter-spacing: inherit;\n  background-color: ",
              ";\n\n  /* Custom placeholder color */\n  &::placeholder {\n    font-size: 13px;\n    color: #8c9bab;\n    opacity: 1;\n  }\n\n  /* For Internet Explorer */\n  &:-ms-input-placeholder {\n    color: #8c9bab;\n  }\n\n  /* For Microsoft Edge */\n  &::-ms-input-placeholder {\n    color: #8c9bab;\n  }\n\n  /* Dynamic padding based on prefix/suffix */\n  ",
              "\n\n  ",
              "\n\n  /* Status styles */\n  &.tx-ui-tx-input--success {\n    border-color: #52c41a;\n    color: #52c41a;\n    ",
              "\n  }\n\n  &.tx-ui-tx-input--warning {\n    border-color: #faad14;\n    color: #faad14;\n    ",
              "\n  }\n\n  &.tx-ui-tx-input--error {\n    border-color: #ff4d4f;\n    color: #ff4d4f;\n    ",
              "\n  }\n\n  &.tx-ui-tx-input--info {\n    border-color: #1890ff;\n    color: #1890ff;\n    ",
              ";\n  }\n\n  &.tx-ui-tx-input--disabled {\n    cursor: not-allowed;\n    background-color: #f3f3f4;\n    color: #a0a1a7;\n    &::placeholder {\n      color: #a0a1a7;\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-input--small {\n    padding: 12px 14px;\n    font-size: 14px;\n  }\n\n  &.tx-ui-tx-input--medium {\n    padding: 14px 16px;\n    font-size: 14px;\n  }\n\n  &.tx-ui-tx-input--large {\n    padding: 16px 18px;\n    font-size: 14px;\n  }\n",
            ])),
          function (props) {
            return props.fill && !props.status ? "#f7f8fa" : "transparent";
          },
          function (props) {
            var prefixPadding = props.prefixWidth ? "".concat(props.prefixWidth + 16, "px") : "40px";
            return props.prefix ? "\n      padding-left: ".concat(prefixPadding, " !important;\n    ") : "";
          },
          function (props) {
            var suffixPadding = props.suffixWidth ? "".concat(props.suffixWidth + 16, "px") : "40px";
            return props.suffix ? "\n      padding-right: ".concat(suffixPadding, " !important;\n    ") : "";
          },
          function (props) {
            return props.fill && "\n      background-color: #52c41a15;\n      border-color: #52c41a15;\n    ";
          },
          function (props) {
            return props.fill && "\n      background-color: #faad1415;\n      border-color: #faad1415;\n    ";
          },
          function (props) {
            return props.fill && "\n      background-color:#ff4d4f15;\n      border-color: #ff4d4f15;\n    ";
          },
          function (props) {
            return props.fill && "\n      background-color: #1890ff15;\n      border-color: #1890ff15;\n    ";
          }
        ),
        PrefixWrapper = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  color: ",
              ";\n  font-size: 14px;\n  width: 20px;\n",
            ])),
          function (props) {
            return props.color || "#1c252e";
          }
        ),
        SuffixWrapper = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  color: ",
              ";\n  font-size: 14px;\n  gap: 8px;\n",
            ])),
          function (props) {
            return props.color || "#1c252e";
          }
        ),
        PasswordToggle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: ",
              ";\n  width: 16px;\n  font-size: 14px;\n",
            ])),
          function (props) {
            return props.color || "#1c252e";
          }
        ),
        ClearButton = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  width: 16px;\n  height: 16px;\n  font-size: 14px;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.color || "#8c9bab";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "placeholder",
          "value",
          "onChange",
          "type",
          "background",
          "color",
          "size",
          "disabled",
          "prefix",
          "suffix",
          "shape",
          "loading",
          "danger",
          "status",
          "fill",
          "passwordToggle",
          "password",
          "placeholderColor",
          "allowClear",
          "onClear",
        ],
        TxInput = function TxInput(_ref) {
          var placeholder = _ref.placeholder,
            value = _ref.value,
            onChange = _ref.onChange,
            background = (_ref.type, _ref.background),
            color = _ref.color,
            size = _ref.size,
            disabled = _ref.disabled,
            prefix = _ref.prefix,
            suffix = _ref.suffix,
            loading = (_ref.shape, _ref.loading),
            danger = _ref.danger,
            status = _ref.status,
            fill = _ref.fill,
            _ref$passwordToggle = _ref.passwordToggle,
            passwordToggle = void 0 === _ref$passwordToggle || _ref$passwordToggle,
            password = _ref.password,
            placeholderColor = _ref.placeholderColor,
            _ref$allowClear = _ref.allowClear,
            allowClear = void 0 !== _ref$allowClear && _ref$allowClear,
            onClear = _ref.onClear,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            passwordVisible = _useState2[0],
            setPasswordVisible = _useState2[1],
            _useState3 = (0, react.useState)(0),
            _useState4 = (0, slicedToArray.A)(_useState3, 2),
            prefixWidth = _useState4[0],
            setPrefixWidth = _useState4[1],
            _useState5 = (0, react.useState)(0),
            _useState6 = (0, slicedToArray.A)(_useState5, 2),
            suffixWidth = _useState6[0],
            setSuffixWidth = _useState6[1],
            _useState7 = (0, react.useState)(!1),
            _useState8 = (0, slicedToArray.A)(_useState7, 2),
            showClear = _useState8[0],
            setShowClear = _useState8[1],
            prefixRef = (0, react.useRef)(null),
            suffixRef = (0, react.useRef)(null);
          (0, react.useEffect)(
            function () {
              setShowClear(allowClear && value && value.toString().length > 0);
            },
            [allowClear, value]
          );
          var getStatusColor = function getStatusColor() {
            if (disabled) return "#a0a1a7";
            switch (status) {
              case "success":
                return "#52c41a";
              case "warning":
                return "#faad14";
              case "error":
                return "#ff4d4f";
              case "info":
                return "#1890ff";
              default:
                return "#1c252e";
            }
          };
          (0, react.useEffect)(
            function () {
              prefixRef.current && setPrefixWidth(prefixRef.current.offsetWidth),
                suffixRef.current && setSuffixWidth(suffixRef.current.offsetWidth);
            },
            [prefix, suffix, password, passwordToggle, status, showClear]
          );
          var actualType = password && !passwordVisible ? "password" : "text",
            hasSuffixContent = suffix || (password && passwordToggle) || showClear,
            iconColor = getStatusColor();
          return (0, jsx_runtime.jsxs)(StyledInputWrapper, {
            children: [
              prefix && (0, jsx_runtime.jsx)(PrefixWrapper, { ref: prefixRef, color: iconColor, children: prefix }),
              (0, jsx_runtime.jsx)(
                StyledTxInput,
                (0, objectSpread2.A)(
                  {
                    type: actualType,
                    value,
                    onChange,
                    placeholder,
                    disabled,
                    prefix,
                    suffix: hasSuffixContent,
                    prefixWidth,
                    suffixWidth,
                    fill,
                    status,
                    className: [
                      "tx-ui-tx-input",
                      disabled && "tx-ui-tx-input--disabled",
                      loading && "tx-ui-tx-input--loading",
                      danger && "tx-ui-tx-input--danger",
                      status && "tx-ui-tx-input--".concat(status),
                      "tx-ui-tx-input--".concat(size),
                    ]
                      .filter(Boolean)
                      .join(" "),
                    style: {
                      color: color || (status ? getStatusColor() : "#1c252e"),
                      background: background || "",
                      "--placeholder-color": placeholderColor || "#8c9bab",
                    },
                  },
                  rest
                )
              ),
              hasSuffixContent &&
                (0, jsx_runtime.jsxs)(SuffixWrapper, {
                  ref: suffixRef,
                  color: iconColor,
                  children: [
                    showClear &&
                      !disabled &&
                      (0, jsx_runtime.jsx)(ClearButton, {
                        onClick: function handleClearInput(e) {
                          e.stopPropagation();
                          onChange && onChange({ target: { value: "" } }), onClear && onClear();
                        },
                        color: status ? iconColor : "#8c9bab",
                        children: (0, jsx_runtime.jsx)(outline.e.IconCrossSmall, {}),
                      }),
                    password &&
                      passwordToggle &&
                      (0, jsx_runtime.jsx)(PasswordToggle, {
                        onClick: function togglePasswordVisibility() {
                          setPasswordVisible(!passwordVisible);
                        },
                        color: iconColor,
                        children: (0, jsx_runtime.jsx)(outline.e.IconEye, {}),
                      }),
                    suffix && suffix,
                  ],
                }),
            ],
          });
        };
      TxInput.defaultProps = {
        placeholder: "",
        type: "text",
        size: "medium",
        onChange: function onChange() {},
        disabled: !1,
        loading: !1,
        danger: !1,
        fill: !1,
        passwordToggle: !0,
        allowClear: !1,
      };
      const tx_input = TxInput;
      TxInput.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxInput",
        props: {
          type: {
            defaultValue: { value: '"text"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"text"', computed: !1 },
                { value: '"password"', computed: !1 },
                { value: '"email"', computed: !1 },
                { value: '"number"', computed: !1 },
                { value: '"tel"', computed: !1 },
                { value: '"url"', computed: !1 },
              ],
            },
            required: !1,
          },
          passwordToggle: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          allowClear: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          placeholder: {
            defaultValue: { value: '""', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
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
          onChange: {
            defaultValue: { value: "() => {}", computed: !1 },
            description: "",
            type: { name: "func" },
            required: !1,
          },
          disabled: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          loading: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          danger: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          fill: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          value: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          background: { description: "", type: { name: "string" }, required: !1 },
          color: { description: "", type: { name: "string" }, required: !1 },
          prefix: { description: "", type: { name: "node" }, required: !1 },
          suffix: { description: "", type: { name: "node" }, required: !1 },
          status: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
                { value: '"info"', computed: !1 },
              ],
            },
            required: !1,
          },
          password: { description: "", type: { name: "bool" }, required: !1 },
          placeholderColor: { description: "", type: { name: "string" }, required: !1 },
          onClear: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/styles/shorten.scss": () => {},
  },
]);
