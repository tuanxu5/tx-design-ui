"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [7560],
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
    "./src/stories/TxAffix.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CustomOffset: () => CustomOffset,
          WithButtons: () => WithButtons,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_affix_tx_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-affix/tx-affix.jsx"
        ),
        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Other/TxAffix",
        component: _components_tx_affix_tx_affix__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "padded" },
        tags: ["autodocs"],
        argTypes: { offsetTop: { control: "number" } },
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: {
                padding: "24px",
                height: "300vh",
                background: "linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)",
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_affix_tx_affix__WEBPACK_IMPORTED_MODULE_0__.A,
                  {
                    offsetTop: 24,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      style: {
                        background: "white",
                        padding: "16px 24px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        border: "1px solid #d9d9d9",
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", { children: "Fixed Header" }),
                        " - This will stick to the top when scrolling",
                      ],
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { marginTop: "48px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
                      children: "Scroll down to see the Affix in action",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                      style: { marginTop: "16px", lineHeight: "1.8" },
                      children:
                        "The content above will stick to the top when you scroll. This is commonly used for navigation bars, table headers, or important information that should remain visible.",
                    }),
                    Array.from({ length: 20 }, function (_, i) {
                      return (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", { style: { marginTop: "32px", padding: "24px", background: "white", borderRadius: "8px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", { children: ["Section ", i + 1] }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })] }, i);
                    }),
                  ],
                }),
              ],
            });
          },
        },
        WithButtons = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: {
                padding: "24px",
                height: "300vh",
                background: "linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)",
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_affix_tx_affix__WEBPACK_IMPORTED_MODULE_0__.A,
                  {
                    offsetTop: 0,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      style: {
                        background: "#001529",
                        padding: "12px 24px",
                        display: "flex",
                        gap: "12px",
                        borderBottom: "1px solid #1890ff",
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                          { type: "primary", label: "Home" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                          { label: "About" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                          { label: "Services" }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                          { label: "Contact" }
                        ),
                      ],
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { marginTop: "48px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
                      children: "Navigation Bar Example",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                      style: { marginTop: "16px" },
                      children: "This is an example of a navigation bar that sticks to the top when scrolling.",
                    }),
                    Array.from({ length: 15 }, function (_, i) {
                      return (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", { style: { marginTop: "32px", padding: "24px", background: "white", borderRadius: "8px" }, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", { children: ["Content Section ", i + 1] }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", { children: "Keep scrolling to see the navigation bar remain fixed at the top." })] }, i);
                    }),
                  ],
                }),
              ],
            });
          },
        },
        CustomOffset = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { padding: "24px", height: "300vh" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_affix_tx_affix__WEBPACK_IMPORTED_MODULE_0__.A,
                  {
                    offsetTop: 100,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: {
                        background: "rgba(0,188,255,0.1)",
                        padding: "16px 24px",
                        borderRadius: "8px",
                        border: "2px solid #00bcff",
                      },
                      children: "Affix with 100px offset from top",
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  style: { marginTop: "48px" },
                  children: Array.from({ length: 10 }, function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", { style: { marginTop: "32px", padding: "24px", background: "white", borderRadius: "8px" }, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", { children: ["Section ", i + 1] }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", { children: "This affix has a 100px offset from the top of the viewport." })] }, i);
                  }),
                }),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Basic", "WithButtons", "CustomOffset"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    padding: "24px",\n    height: "300vh",\n    background: "linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)"\n  }}>\n      <TxAffix offsetTop={24}>\n        <div style={{\n        background: "white",\n        padding: "16px 24px",\n        borderRadius: "8px",\n        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",\n        border: "1px solid #d9d9d9"\n      }}>\n          <strong>Fixed Header</strong> - This will stick to the top when scrolling\n        </div>\n      </TxAffix>\n\n      <div style={{\n      marginTop: "48px"\n    }}>\n        <h1>Scroll down to see the Affix in action</h1>\n        <p style={{\n        marginTop: "16px",\n        lineHeight: "1.8"\n      }}>\n          The content above will stick to the top when you scroll. This is commonly used for navigation bars, table\n          headers, or important information that should remain visible.\n        </p>\n\n        {Array.from({\n        length: 20\n      }, (_, i) => <div key={i} style={{\n        marginTop: "32px",\n        padding: "24px",\n        background: "white",\n        borderRadius: "8px",\n        boxShadow: "0 1px 4px rgba(0,0,0,0.1)"\n      }}>\n            <h2>Section {i + 1}</h2>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n              ea commodo consequat.\n            </p>\n          </div>)}\n      </div>\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (WithButtons.parameters = {
          ...WithButtons.parameters,
          docs: {
            ...WithButtons.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "24px",\n    height: "300vh",\n    background: "linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)"\n  }}>\n      <TxAffix offsetTop={0}>\n        <div style={{\n        background: "#001529",\n        padding: "12px 24px",\n        display: "flex",\n        gap: "12px",\n        borderBottom: "1px solid #1890ff"\n      }}>\n          <TxButton type="primary" label="Home" />\n          <TxButton label="About" />\n          <TxButton label="Services" />\n          <TxButton label="Contact" />\n        </div>\n      </TxAffix>\n\n      <div style={{\n      marginTop: "48px"\n    }}>\n        <h1>Navigation Bar Example</h1>\n        <p style={{\n        marginTop: "16px"\n      }}>\n          This is an example of a navigation bar that sticks to the top when scrolling.\n        </p>\n\n        {Array.from({\n        length: 15\n      }, (_, i) => <div key={i} style={{\n        marginTop: "32px",\n        padding: "24px",\n        background: "white",\n        borderRadius: "8px"\n      }}>\n            <h2>Content Section {i + 1}</h2>\n            <p>Keep scrolling to see the navigation bar remain fixed at the top.</p>\n          </div>)}\n      </div>\n    </div>\n}',
              ...WithButtons.parameters?.docs?.source,
            },
          },
        }),
        (CustomOffset.parameters = {
          ...CustomOffset.parameters,
          docs: {
            ...CustomOffset.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "24px",\n    height: "300vh"\n  }}>\n      <TxAffix offsetTop={100}>\n        <div style={{\n        background: "rgba(0,188,255,0.1)",\n        padding: "16px 24px",\n        borderRadius: "8px",\n        border: "2px solid #00bcff"\n      }}>\n          Affix with 100px offset from top\n        </div>\n      </TxAffix>\n\n      <div style={{\n      marginTop: "48px"\n    }}>\n        {Array.from({\n        length: 10\n      }, (_, i) => <div key={i} style={{\n        marginTop: "32px",\n        padding: "24px",\n        background: "white",\n        borderRadius: "8px"\n      }}>\n            <h2>Section {i + 1}</h2>\n            <p>This affix has a 100px offset from the top of the viewport.</p>\n          </div>)}\n      </div>\n    </div>\n}',
              ...CustomOffset.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-affix/tx-affix.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_affix });
      var _templateObject,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        AffixContainer = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ).Ay.div(_templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(["\n  ", "\n"])), function (props) {
          return (
            props.fixed &&
            "\n    position: fixed;\n    top: "
              .concat(props.offsetTop || 0, "px;\n    left: ")
              .concat(props.offsetLeft, "px;\n    right: ")
              .concat(props.offsetRight, "px;\n    bottom: ")
              .concat(props.offsetBottom, "px;\n    z-index: ")
              .concat(props.zIndex || 1e3, ";\n    width: ")
              .concat(props.width || "auto", ";\n  ")
          );
        }),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["offsetTop", "offsetBottom", "onChange", "children"],
        TxAffix = function TxAffix(_ref) {
          var _ref$offsetTop = _ref.offsetTop,
            offsetTop = void 0 === _ref$offsetTop ? 0 : _ref$offsetTop,
            onChange = (_ref.offsetBottom, _ref.onChange),
            children = _ref.children,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            fixed = _useState2[0],
            setFixed = _useState2[1],
            affixRef = (0, react.useRef)(null),
            containerRef = (0, react.useRef)(null);
          return (
            (0, react.useEffect)(
              function () {
                var handleScroll = function handleScroll() {
                  if (containerRef.current && affixRef.current) {
                    var containerRect = containerRef.current.getBoundingClientRect(),
                      targetOffset = offsetTop || 0;
                    if (fixed) {
                      if (containerRect.top < targetOffset && containerRect.bottom > targetOffset) return;
                      containerRect.bottom <= targetOffset && (setFixed(!1), onChange && onChange(!1));
                    } else containerRect.top <= targetOffset && (setFixed(!0), onChange && onChange(!0));
                  }
                };
                return (
                  window.addEventListener("scroll", handleScroll),
                  window.addEventListener("resize", handleScroll),
                  handleScroll(),
                  function () {
                    window.removeEventListener("scroll", handleScroll),
                      window.removeEventListener("resize", handleScroll);
                  }
                );
              },
              [offsetTop, fixed, onChange]
            ),
            (0, jsx_runtime.jsx)(
              "div",
              (0, objectSpread2.A)(
                (0, objectSpread2.A)({ ref: containerRef }, props),
                {},
                {
                  children: (0, jsx_runtime.jsx)(AffixContainer, {
                    ref: affixRef,
                    fixed,
                    offsetTop,
                    width: affixRef.current ? affixRef.current.offsetWidth : "auto",
                    children,
                  }),
                }
              )
            )
          );
        };
      const tx_affix = TxAffix;
      TxAffix.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxAffix",
        props: {
          offsetTop: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          offsetBottom: { description: "", type: { name: "number" }, required: !1 },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          children: { description: "", type: { name: "node" }, required: !0 },
        },
      };
    },
    "./src/components/tx-button/tx-button.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_button });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        outline = __webpack_require__("./src/assets/icons/outline/index.js"),
        jsx_runtime =
          (__webpack_require__("./src/styles/shorten.scss"),
          __webpack_require__("./node_modules/react/jsx-runtime.js"));
      const styled = styled_components_browser_esm.Ay.button(
        _templateObject ||
          (_templateObject = (0, taggedTemplateLiteral.A)([
            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: ",
            ";\n  border: ",
            ";\n  border-radius: ",
            ";\n  font-size: 14px;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  font-weight: 500;\n  padding: ",
            ";\n  transition: background-color 0.25s ease, transform 0.25s ease;\n  background: ",
            ";\n\n  &.tx-ui-tx-button {\n    &:hover {\n      opacity: 0.8;\n      box-shadow: 0px 0px 8px 2px #03030f30;\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }\n\n    &.tx-ui-tx-button--large {\n      font-size: 16px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--small {\n      font-size: 12px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--danger {\n      background-color: #e45649 !important;\n      border: 1px solid #e45649 !important;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      background-color: #f3f3f4 !important;\n      border: 1px solid #a0a1a7 !important;\n      color: #a0a1a7;\n      outline: none;\n      cursor: not-allowed;\n      &:hover {\n        opacity: 1;\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n      cursor: not-allowed;\n      &:hover {\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--secondary {\n    background: #ffffff;\n    border: 1px solid #03030f;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      background: #03030f;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e45649 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #ffffff;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--dashed {\n    background: #ffffff;\n    border: 1px dashed #03030f;\n    color: #03030f;\n\n    &:hover {\n      border: 1px dashed #1fa9ff;\n      color: #1fa9ff;\n      box-shadow: 0px 0px 8px 2px #1fa9ff30;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #e45649;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--filled {\n    background: #03030f20;\n    border: 1px solid #03030f00;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #e4564920 !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #03030f00 !important;\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--text {\n    background: white;\n    border: 1px solid #ffffff;\n    background: #ffffff;\n    color: #03030f;\n    &:hover {\n      background: #03030f10;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: none;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n\n  &.tx-ui-tx-button--link {\n    background: white;\n    border: none;\n    background: #ffffff;\n    border: 1px solid #ffffff;\n    color: #1fa9ff;\n    &:hover {\n      box-shadow: none;\n      border: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        border: 1px solid transparent !important;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n",
          ])),
        function (props) {
          return props.color || "#ffffff";
        },
        function (props) {
          return props.gradientBackground ? "1px solid #ffffff" : "1px solid #0e0e13ff";
        },
        function (props) {
          return "circle" === props.shape ? "100px" : "10px";
        },
        function (props) {
          return "circle" === props.shape ? "12px 12px !important" : "12px 22px !important";
        },
        function (props) {
          return props.gradientBackground
            ? "linear-gradient("
                .concat(props.gradientBackground.degree || 135, "deg, ")
                .concat(
                  props.gradientBackground.colors && props.gradientBackground.colors.length > 0
                    ? props.gradientBackground.colors.join(", ")
                    : ["#6253e1", "#04befe"].join(", "),
                  ")"
                )
            : props.backgroundColor || "#03030f";
        },
        function (props) {
          return "circle" === props.shape ? "14px 14px !important" : "14px 24px !important";
        },
        function (props) {
          return "circle" === props.shape ? "10px 10px !important" : "10px 20px !important";
        }
      );
      var rotate = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        LoadingRotatingIcon = (0, styled_components_browser_esm.Ay)((0, jsx_runtime.jsx)(outline.e.IconAdd, {}))(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  animation: ", " 1s linear infinite;\n"])),
          rotate
        ),
        _excluded = [
          "label",
          "onClick",
          "background",
          "color",
          "primary",
          "size",
          "type",
          "disabled",
          "prefix",
          "suffix",
          "shape",
          "loading",
          "danger",
          "gradientBackground",
        ],
        TxButton = function TxButton(_ref) {
          var _ref$label = _ref.label,
            label = void 0 === _ref$label ? "Click Me" : _ref$label,
            onClick = _ref.onClick,
            background = _ref.background,
            color = _ref.color,
            size = (_ref.primary, _ref.size),
            type = _ref.type,
            disabled = _ref.disabled,
            prefix = _ref.prefix,
            suffix = _ref.suffix,
            shape = _ref.shape,
            loading = _ref.loading,
            danger = _ref.danger,
            gradientBackground = _ref.gradientBackground,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            styled,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onClick,
                  className: [
                    "tx-ui-tx-button",
                    disabled && "tx-ui-tx-button--disabled",
                    loading && "tx-ui-tx-button--loading",
                    danger && "tx-ui-tx-button--danger",
                    "tx-ui-tx-button--".concat(size),
                    "tx-ui-tx-button--".concat(type),
                  ].join(" "),
                  style: {
                    padding: "10px 20px",
                    background: background || "defaultBackground",
                    color: color || "defaultColor",
                  },
                  disabled: loading,
                  shape,
                  danger,
                  gradientBackground: gradientBackground && gradientBackground,
                },
                rest
              ),
              {},
              {
                children: [
                  loading && (0, jsx_runtime.jsx)(LoadingRotatingIcon, {}),
                  prefix && !loading && prefix,
                  label,
                  suffix && suffix,
                ],
              }
            )
          );
        };
      TxButton.defaultProps = { backgroundColor: null, type: "primary", size: "medium", onClick: void 0 };
      const tx_button = TxButton;
      TxButton.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxButton",
        props: {
          label: {
            defaultValue: { value: '"Click Me"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          backgroundColor: {
            defaultValue: { value: "null", computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          type: {
            defaultValue: { value: '"primary"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"primary"', computed: !1 },
                { value: '"secondary"', computed: !1 },
                { value: '"filled"', computed: !1 },
                { value: '"text"', computed: !1 },
                { value: '"link"', computed: !1 },
                { value: '"dashed"', computed: !1 },
              ],
            },
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
          onClick: {
            defaultValue: { value: "undefined", computed: !0 },
            description: "",
            type: { name: "func" },
            required: !1,
          },
          loading: { description: "", type: { name: "bool" }, required: !1 },
          danger: { description: "", type: { name: "bool" }, required: !1 },
          shape: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          prefix: { description: "", type: { name: "node" }, required: !1 },
          suffix: { description: "", type: { name: "node" }, required: !1 },
          gradientBackground: {
            description: "",
            type: {
              name: "shape",
              value: {
                degree: { name: "number", required: !1 },
                colors: { name: "arrayOf", value: { name: "string" }, required: !1 },
              },
            },
            required: !1,
          },
        },
      };
    },
    "./src/styles/shorten.scss": () => {},
  },
]);
