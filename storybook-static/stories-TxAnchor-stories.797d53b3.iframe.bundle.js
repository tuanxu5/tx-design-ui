"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [4712, 8661],
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
    "./src/stories/TxAnchor.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          Preview: () => Preview,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_anchor_tx_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-anchor/tx-anchor.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxAnchor",
        component: _components_tx_anchor_tx_anchor__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "padded" },
        tags: ["autodocs"],
        argTypes: { offsetTop: { control: "number" } },
      };
      var items = [
          { key: "section-1", title: "Section 1" },
          { key: "section-2", title: "Section 2" },
          { key: "section-3", title: "Section 3" },
        ],
        Preview = { args: { items, offsetTop: 0 } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "40px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_anchor_tx_anchor__WEBPACK_IMPORTED_MODULE_0__.A,
                { items }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    id: "section-1",
                    style: { marginBottom: "500px" },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", { children: "Section 1" }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                        children: "Content of section 1...",
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    id: "section-2",
                    style: { marginBottom: "500px" },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", { children: "Section 2" }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                        children: "Content of section 2...",
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    id: "section-3",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", { children: "Section 3" }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                        children: "Content of section 3...",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      const __namedExportsOrder = ["Preview", "BasicUsage"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    items,\n    offsetTop: 0\n  }\n}",
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "40px"\n  }}>\n      <TxAnchor items={items} />\n      <div>\n        <div id="section-1" style={{\n        marginBottom: "500px"\n      }}>\n          <h2>Section 1</h2>\n          <p>Content of section 1...</p>\n        </div>\n        <div id="section-2" style={{\n        marginBottom: "500px"\n      }}>\n          <h2>Section 2</h2>\n          <p>Content of section 2...</p>\n        </div>\n        <div id="section-3">\n          <h2>Section 3</h2>\n          <p>Content of section 3...</p>\n        </div>\n      </div>\n    </div>;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-anchor/tx-anchor.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_anchor });
      var _templateObject,
        _templateObject2,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledAnchorWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  position: relative;\n  padding-left: 16px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
              ";\n  }\n",
            ])),
          colors.A.borderLight
        ),
        StyledAnchorLink = styled_components_browser_esm.Ay.a(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: block;\n  padding: 4px 0;\n  color: ",
              ";\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  position: relative;\n\n  &:hover {\n    color: ",
              ";\n  }\n\n  ",
              "\n",
            ])),
          function (props) {
            return props.active ? colors.A.primary : colors.A.textSecondary;
          },
          colors.A.primary,
          function (props) {
            return (
              props.active &&
              '\n    &::before {\n      content: "";\n      position: absolute;\n      left: -16px;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 2px;\n      height: 16px;\n      background-color: '.concat(
                colors.A.primary,
                ";\n    }\n  "
              )
            );
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "offsetTop"],
        TxAnchor = function TxAnchor(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$offsetTop = _ref.offsetTop,
            offsetTop = void 0 === _ref$offsetTop ? 0 : _ref$offsetTop,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(""),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            activeKey = _useState2[0],
            setActiveKey = _useState2[1];
          (0, react.useEffect)(
            function () {
              var handleScroll = function handleScroll() {
                for (var scrollPosition = window.scrollY + offsetTop + 10, i = items.length - 1; i >= 0; i--) {
                  var item = items[i],
                    element = document.getElementById(item.key);
                  if (element)
                    if (scrollPosition >= element.offsetTop) {
                      setActiveKey(item.key);
                      break;
                    }
                }
              };
              return (
                window.addEventListener("scroll", handleScroll),
                handleScroll(),
                function () {
                  window.removeEventListener("scroll", handleScroll);
                }
              );
            },
            [items, offsetTop]
          );
          return (0, jsx_runtime.jsx)(
            StyledAnchorWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, rest),
              {},
              {
                children: items.map(function (item) {
                  return (0, jsx_runtime.jsx)(
                    StyledAnchorLink,
                    {
                      href: "#".concat(item.key),
                      active: activeKey === item.key,
                      onClick: function onClick(e) {
                        return (function handleClick(e, key) {
                          e.preventDefault();
                          var element = document.getElementById(key);
                          if (element) {
                            var elementPosition = element.offsetTop - offsetTop;
                            window.scrollTo({ top: elementPosition, behavior: "smooth" }), setActiveKey(key);
                          }
                        })(e, item.key);
                      },
                      children: item.title,
                    },
                    item.key
                  );
                }),
              }
            )
          );
        };
      TxAnchor.defaultProps = { items: [], offsetTop: 0 };
      const tx_anchor = TxAnchor;
      TxAnchor.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxAnchor",
        props: {
          items: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: { key: { name: "string", required: !0 }, title: { name: "node", required: !0 } },
              },
            },
            required: !1,
          },
          offsetTop: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
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
    "./src/styles/shorten.scss": () => {},
  },
]);
