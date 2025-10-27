"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9939, 8661],
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
    "./src/stories/TxPagination.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          Interactive: () => Interactive,
          ManyPages: () => ManyPages,
          Preview: () => Preview,
          Sizes: () => Sizes,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-pagination/tx-pagination.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxPagination",
        component: _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          current: { control: "number" },
          total: { control: "number" },
          pageSize: { control: "number" },
          size: { control: "select", options: ["small", "medium", "large"] },
          onChange: { action: "page changed" },
        },
      };
      var Preview = { args: { current: 1, total: 100, pageSize: 10, size: "medium" } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
            { current: 1, total: 100, pageSize: 10 }
          );
        },
        Sizes = function Sizes() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
                { current: 1, total: 100, pageSize: 10, size: "small" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
                { current: 1, total: 100, pageSize: 10, size: "medium" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
                { current: 1, total: 100, pageSize: 10, size: "large" }
              ),
            ],
          });
        },
        ManyPages = function ManyPages() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
            { current: 5, total: 500, pageSize: 10 }
          );
        },
        Interactive = function Interactive() {
          var InteractiveComponent = function InteractiveComponent() {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState,
                2
              ),
              current = _useState2[0],
              setCurrent = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_pagination_tx_pagination__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    current,
                    total: 100,
                    pageSize: 10,
                    onChange: function handleChange(page) {
                      setCurrent(page);
                    },
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { marginTop: "16px", textAlign: "center" },
                  children: ["Current Page: ", current],
                }),
              ],
            });
          };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InteractiveComponent, {});
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "Sizes", "ManyPages", "Interactive"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    current: 1,\n    total: 100,\n    pageSize: 10,\n    size: "medium"\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource: "() => {\n  return <TxPagination current={1} total={100} pageSize={10} />;\n}",
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px",\n    alignItems: "center"\n  }}>\n      <TxPagination current={1} total={100} pageSize={10} size="small" />\n      <TxPagination current={1} total={100} pageSize={10} size="medium" />\n      <TxPagination current={1} total={100} pageSize={10} size="large" />\n    </div>;\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (ManyPages.parameters = {
          ...ManyPages.parameters,
          docs: {
            ...ManyPages.parameters?.docs,
            source: {
              originalSource: "() => {\n  return <TxPagination current={5} total={500} pageSize={10} />;\n}",
              ...ManyPages.parameters?.docs?.source,
            },
          },
        }),
        (Interactive.parameters = {
          ...Interactive.parameters,
          docs: {
            ...Interactive.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const InteractiveComponent = () => {\n    const [current, setCurrent] = useState(1);\n    const handleChange = page => {\n      setCurrent(page);\n    };\n    return <div>\n        <TxPagination current={current} total={100} pageSize={10} onChange={handleChange} />\n        <div style={{\n        marginTop: "16px",\n        textAlign: "center"\n      }}>Current Page: {current}</div>\n      </div>;\n  };\n  return <InteractiveComponent />;\n}',
              ...Interactive.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-pagination/tx-pagination.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_pagination });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledPaginationWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n",
            ]))
        ),
        StyledPaginationItem = styled_components_browser_esm.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  min-width: ",
              ";\n  height: ",
              ";\n  padding: 0 ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 6px;\n  background-color: ",
              ";\n  color: ",
              ";\n  font-size: ",
              ";\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n    color: ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    background-color: ",
              ";\n    border-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          function (props) {
            return "small" === props.size ? "6px" : "large" === props.size ? "12px" : "8px";
          },
          function (props) {
            return props.active ? colors.A.primary : colors.A.borderLight;
          },
          function (props) {
            return props.active ? colors.A.primary : colors.A.bgWhite;
          },
          function (props) {
            return props.active ? colors.A.textWhite : colors.A.textPrimary;
          },
          function (props) {
            return "small" === props.size ? "12px" : "14px";
          },
          colors.A.primary,
          function (props) {
            return props.active ? colors.A.textWhite : colors.A.primary;
          },
          colors.A.bgFill,
          colors.A.borderLight,
          colors.A.textTertiary
        ),
        StyledPaginationEllipsis = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  min-width: ",
              ";\n  height: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  font-size: ",
              ";\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          colors.A.textTertiary,
          function (props) {
            return "small" === props.size ? "12px" : "14px";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["current", "total", "pageSize", "onChange", "showSizeChanger", "size"],
        ChevronLeft = function ChevronLeft() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "15 18 9 12 15 6" }),
          });
        },
        ChevronRight = function ChevronRight() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "9 18 15 12 9 6" }),
          });
        },
        TxPagination = function TxPagination(_ref) {
          var _ref$current = _ref.current,
            current = void 0 === _ref$current ? 1 : _ref$current,
            _ref$total = _ref.total,
            total = void 0 === _ref$total ? 0 : _ref$total,
            _ref$pageSize = _ref.pageSize,
            pageSize = void 0 === _ref$pageSize ? 10 : _ref$pageSize,
            onChange = _ref.onChange,
            _ref$size = (_ref.showSizeChanger, _ref.size),
            size = void 0 === _ref$size ? "medium" : _ref$size,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            totalPages = Math.ceil(total / pageSize),
            handlePageChange = function handlePageChange(page) {
              page < 1 || page > totalPages || page === current || (onChange && onChange(page, pageSize));
            };
          return (0, jsx_runtime.jsxs)(
            StyledPaginationWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, rest),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(StyledPaginationItem, {
                    onClick: function onClick() {
                      return handlePageChange(current - 1);
                    },
                    disabled: 1 === current,
                    size,
                    children: (0, jsx_runtime.jsx)(ChevronLeft, {}),
                  }),
                  (function renderPageNumbers() {
                    var pages = [];
                    if (totalPages <= 7)
                      for (
                        var _loop = function _loop(i) {
                            pages.push(
                              (0, jsx_runtime.jsx)(
                                StyledPaginationItem,
                                {
                                  active: i === current,
                                  onClick: function onClick() {
                                    return handlePageChange(i);
                                  },
                                  size,
                                  children: i,
                                },
                                i
                              )
                            );
                          },
                          i = 1;
                        i <= totalPages;
                        i++
                      )
                        _loop(i);
                    else {
                      pages.push(
                        (0, jsx_runtime.jsx)(
                          StyledPaginationItem,
                          {
                            active: 1 === current,
                            onClick: function onClick() {
                              return handlePageChange(1);
                            },
                            size,
                            children: "1",
                          },
                          1
                        )
                      ),
                        current > 3 &&
                          pages.push(
                            (0, jsx_runtime.jsx)(StyledPaginationEllipsis, { size, children: "•••" }, "ellipsis-start")
                          );
                      for (
                        var start = Math.max(2, current - 1),
                          end = Math.min(totalPages - 1, current + 1),
                          _loop2 = function _loop2(_i) {
                            pages.push(
                              (0, jsx_runtime.jsx)(
                                StyledPaginationItem,
                                {
                                  active: _i === current,
                                  onClick: function onClick() {
                                    return handlePageChange(_i);
                                  },
                                  size,
                                  children: _i,
                                },
                                _i
                              )
                            );
                          },
                          _i = start;
                        _i <= end;
                        _i++
                      )
                        _loop2(_i);
                      current < totalPages - 2 &&
                        pages.push(
                          (0, jsx_runtime.jsx)(StyledPaginationEllipsis, { size, children: "•••" }, "ellipsis-end")
                        ),
                        pages.push(
                          (0, jsx_runtime.jsx)(
                            StyledPaginationItem,
                            {
                              active: totalPages === current,
                              onClick: function onClick() {
                                return handlePageChange(totalPages);
                              },
                              size,
                              children: totalPages,
                            },
                            totalPages
                          )
                        );
                    }
                    return pages;
                  })(),
                  (0, jsx_runtime.jsx)(StyledPaginationItem, {
                    onClick: function onClick() {
                      return handlePageChange(current + 1);
                    },
                    disabled: current === totalPages,
                    size,
                    children: (0, jsx_runtime.jsx)(ChevronRight, {}),
                  }),
                ],
              }
            )
          );
        };
      TxPagination.defaultProps = { current: 1, total: 0, pageSize: 10, showSizeChanger: !1, size: "medium" };
      const tx_pagination = TxPagination;
      TxPagination.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxPagination",
        props: {
          current: {
            defaultValue: { value: "1", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          total: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          pageSize: {
            defaultValue: { value: "10", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          showSizeChanger: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
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
          onChange: { description: "", type: { name: "func" }, required: !1 },
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
