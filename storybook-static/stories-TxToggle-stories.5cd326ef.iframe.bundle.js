"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [2799],
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
    "./src/stories/TxToggle.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Sizes: () => Sizes,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-toggle/tx-toggle.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxToggle",
        component: _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Default = function Default() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState,
              2
            ),
            checked = _useState2[0],
            setChecked = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: { display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", alignItems: "center", gap: "12px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
                  { checked, onChange: setChecked }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  children: ["Default: ", checked ? "ON" : "OFF"],
                }),
              ],
            }),
          });
        },
        Sizes = function Sizes() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState3,
              2
            ),
            checked1 = _useState4[0],
            setChecked1 = _useState4[1],
            _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState5,
              2
            ),
            checked2 = _useState6[0],
            setChecked2 = _useState6[1],
            _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState7,
              2
            ),
            checked3 = _useState8[0],
            setChecked3 = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "24px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: "12px" },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
                    { checked: checked1, onChange: setChecked1, size: "small" }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", { children: "Small" }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: "12px" },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
                    { checked: checked2, onChange: setChecked2, size: "medium" }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", { children: "Medium (default)" }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: "12px" },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
                    { checked: checked3, onChange: setChecked3, size: "large" }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", { children: "Large" }),
                ],
              }),
            ],
          });
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", flexDirection: "column", gap: "24px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { display: "flex", alignItems: "center", gap: "12px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
                      { checked: !1, disabled: !0 }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", { children: "Off (disabled)" }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { display: "flex", alignItems: "center", gap: "12px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_toggle_tx_toggle__WEBPACK_IMPORTED_MODULE_1__.A,
                      { checked: !0, disabled: !0 }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", { children: "On (disabled)" }),
                  ],
                }),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Default", "Sizes", "Disabled"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '() => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px",\n    alignItems: "flex-start"\n  }}>\n      <div style={{\n      display: "flex",\n      alignItems: "center",\n      gap: "12px"\n    }}>\n        <TxToggle checked={checked} onChange={setChecked} />\n        <span>Default: {checked ? "ON" : "OFF"}</span>\n      </div>\n    </div>;\n}',
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
                '() => {\n  const [checked1, setChecked1] = useState(false);\n  const [checked2, setChecked2] = useState(false);\n  const [checked3, setChecked3] = useState(false);\n  return <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px"\n  }}>\n      <div style={{\n      display: "flex",\n      alignItems: "center",\n      gap: "12px"\n    }}>\n        <TxToggle checked={checked1} onChange={setChecked1} size="small" />\n        <span>Small</span>\n      </div>\n      <div style={{\n      display: "flex",\n      alignItems: "center",\n      gap: "12px"\n    }}>\n        <TxToggle checked={checked2} onChange={setChecked2} size="medium" />\n        <span>Medium (default)</span>\n      </div>\n      <div style={{\n      display: "flex",\n      alignItems: "center",\n      gap: "12px"\n    }}>\n        <TxToggle checked={checked3} onChange={setChecked3} size="large" />\n        <span>Large</span>\n      </div>\n    </div>;\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      gap: "24px"\n    }}>\n        <div style={{\n        display: "flex",\n        alignItems: "center",\n        gap: "12px"\n      }}>\n          <TxToggle checked={false} disabled />\n          <span>Off (disabled)</span>\n        </div>\n        <div style={{\n        display: "flex",\n        alignItems: "center",\n        gap: "12px"\n      }}>\n          <TxToggle checked disabled />\n          <span>On (disabled)</span>\n        </div>\n      </div>;\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-toggle/tx-toggle.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
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
        _excluded = ["checked", "onChange", "size", "disabled"],
        ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  display: inline-block;\n  width: ",
                ";\n  height: ",
                ";\n  background: ",
                ";\n  border-radius: ",
                ";\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n",
              ]
            )),
          function (props) {
            return "large" === props.size ? "48px" : "small" === props.size ? "32px" : "40px";
          },
          function (props) {
            return "large" === props.size ? "24px" : "small" === props.size ? "16px" : "20px";
          },
          function (props) {
            return props.checked
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
              : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderMedium;
          },
          function (props) {
            return "large" === props.size ? "12px" : "small" === props.size ? "8px" : "10px";
          }
        ),
        ToggleThumb = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: absolute;\n  top: ",
                ";\n  left: ",
                ";\n  width: ",
                ";\n  height: ",
                ";\n  background: white;\n  border-radius: 50%;\n  transition: left 0.2s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n",
              ]
            )),
          function (props) {
            return "large" === props.size ? "2px" : "small" === props.size ? "1px" : "2px";
          },
          function (props) {
            return props.checked ? ("large" === props.size ? "26px" : "small" === props.size ? "17px" : "22px") : "2px";
          },
          function (props) {
            return "large" === props.size ? "20px" : "small" === props.size ? "14px" : "16px";
          },
          function (props) {
            return "large" === props.size ? "20px" : "small" === props.size ? "14px" : "16px";
          }
        ),
        TxToggle = function TxToggle(_ref) {
          var _ref$checked = _ref.checked,
            checked = void 0 !== _ref$checked && _ref$checked,
            onChange = _ref.onChange,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(checked),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            isChecked = _useState2[0],
            setIsChecked = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            ToggleButton,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                {
                  checked: isChecked ? 1 : 0,
                  size,
                  disabled,
                  onClick: function handleClick() {
                    if (!disabled) {
                      var newValue = !isChecked;
                      setIsChecked(newValue), onChange && onChange(newValue);
                    }
                  },
                },
                props
              ),
              {},
              {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleThumb, {
                  checked: isChecked ? 1 : 0,
                  size,
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxToggle;
      TxToggle.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxToggle",
        props: {
          checked: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          size: { defaultValue: { value: '"medium"', computed: !1 }, required: !1 },
          disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
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
