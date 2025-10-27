"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [715],
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
    "./src/stories/TxAlert.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Closable: () => Closable,
          Error: () => Error,
          Info: () => Info,
          Success: () => Success,
          Warning: () => Warning,
          WithChildren: () => WithChildren,
          WithoutDescription: () => WithoutDescription,
          WithoutTitle: () => WithoutTitle,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_alert_tx_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-alert/tx-alert.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxAlert",
        component: _components_tx_alert_tx_alert__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          type: { control: { type: "select" }, options: ["success", "info", "warning", "error"] },
          title: { control: "text" },
          description: { control: "text" },
          closable: { control: "boolean" },
        },
      };
      var Success = {
          args: {
            type: "success",
            title: "Success Alert",
            description: "This is a success alert with a description.",
            closable: !1,
          },
        },
        Info = {
          args: {
            type: "info",
            title: "Info Alert",
            description: "This is an info alert with a description.",
            closable: !1,
          },
        },
        Warning = {
          args: {
            type: "warning",
            title: "Warning Alert",
            description: "This is a warning alert with a description.",
            closable: !1,
          },
        },
        Error = {
          args: {
            type: "error",
            title: "Error Alert",
            description: "This is an error alert with a description.",
            closable: !1,
          },
        },
        Closable = {
          args: {
            type: "info",
            title: "Closable Alert",
            description: "This alert can be closed by clicking the close button.",
            closable: !0,
          },
        },
        WithoutDescription = { args: { type: "info", title: "Alert without description", closable: !1 } },
        WithoutTitle = {
          args: { type: "warning", description: "This alert only has a description, no title.", closable: !1 },
        },
        WithChildren = {
          args: {
            type: "info",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
              {
                children: [
                  "This is a custom alert with children content.",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", { children: "Important:" }),
                  " You can add any content here.",
                ],
              }
            ),
            closable: !1,
          },
        };
      const __namedExportsOrder = [
        "Success",
        "Info",
        "Warning",
        "Error",
        "Closable",
        "WithoutDescription",
        "WithoutTitle",
        "WithChildren",
      ];
      (Success.parameters = {
        ...Success.parameters,
        docs: {
          ...Success.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    type: "success",\n    title: "Success Alert",\n    description: "This is a success alert with a description.",\n    closable: false\n  }\n}',
            ...Success.parameters?.docs?.source,
          },
        },
      }),
        (Info.parameters = {
          ...Info.parameters,
          docs: {
            ...Info.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "info",\n    title: "Info Alert",\n    description: "This is an info alert with a description.",\n    closable: false\n  }\n}',
              ...Info.parameters?.docs?.source,
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "warning",\n    title: "Warning Alert",\n    description: "This is a warning alert with a description.",\n    closable: false\n  }\n}',
              ...Warning.parameters?.docs?.source,
            },
          },
        }),
        (Error.parameters = {
          ...Error.parameters,
          docs: {
            ...Error.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "error",\n    title: "Error Alert",\n    description: "This is an error alert with a description.",\n    closable: false\n  }\n}',
              ...Error.parameters?.docs?.source,
            },
          },
        }),
        (Closable.parameters = {
          ...Closable.parameters,
          docs: {
            ...Closable.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "info",\n    title: "Closable Alert",\n    description: "This alert can be closed by clicking the close button.",\n    closable: true\n  }\n}',
              ...Closable.parameters?.docs?.source,
            },
          },
        }),
        (WithoutDescription.parameters = {
          ...WithoutDescription.parameters,
          docs: {
            ...WithoutDescription.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "info",\n    title: "Alert without description",\n    closable: false\n  }\n}',
              ...WithoutDescription.parameters?.docs?.source,
            },
          },
        }),
        (WithoutTitle.parameters = {
          ...WithoutTitle.parameters,
          docs: {
            ...WithoutTitle.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "warning",\n    description: "This alert only has a description, no title.",\n    closable: false\n  }\n}',
              ...WithoutTitle.parameters?.docs?.source,
            },
          },
        }),
        (WithChildren.parameters = {
          ...WithChildren.parameters,
          docs: {
            ...WithChildren.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    type: "info",\n    children: <>\n        This is a custom alert with children content.\n        <br />\n        <strong>Important:</strong> You can add any content here.\n      </>,\n    closable: false\n  }\n}',
              ...WithChildren.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-alert/tx-alert.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_alert });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        AlertContainer = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n  border: 1px solid;\n  background-color: ",
              ";\n  border-color: ",
              ";\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n\n  ",
              "\n",
            ])),
          function (props) {
            var type = props.type;
            return (
              {
                success: colors.A.success + "08",
                info: colors.A.info + "08",
                warning: colors.A.warning + "08",
                error: colors.A.error + "08",
              }[type] || colors.A.bgFillLight
            );
          },
          function (props) {
            var type = props.type;
            return (
              { success: colors.A.success, info: colors.A.info, warning: colors.A.warning, error: colors.A.error }[
                type
              ] || colors.A.borderDefault
            );
          },
          function (props) {
            return props.closable && "\n    padding-right: 32px;\n  ";
          }
        ),
        AlertIcon = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
            ])),
          function (props) {
            var type = props.type;
            return (
              { success: colors.A.success, info: colors.A.info, warning: colors.A.warning, error: colors.A.error }[
                type
              ] || colors.A.textSecondary
            );
          }
        ),
        AlertContent = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n",
            ]))
        ),
        AlertTitle = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  line-height: 1.5;\n",
            ])),
          colors.A.textPrimary
        ),
        AlertDescription = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  line-height: 1.5;\n",
            ])),
          colors.A.textSecondary
        ),
        AlertClose = styled_components_browser_esm.Ay.button(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.textPrimary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["type", "title", "description", "closable", "onClose", "children"],
        getIcon = function getIcon(type) {
          var iconProps = {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          };
          switch (type) {
            case "success":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                      (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                    ],
                  }
                )
              );
            case "error":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                      (0, jsx_runtime.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
                      (0, jsx_runtime.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
                    ],
                  }
                )
              );
            case "warning":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("path", {
                        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                      }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
                    ],
                  }
                )
              );
            default:
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                    ],
                  }
                )
              );
          }
        },
        TxAlert = function TxAlert(_ref) {
          var type = _ref.type,
            title = _ref.title,
            description = _ref.description,
            closable = _ref.closable,
            onClose = _ref.onClose,
            children = _ref.children,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!0),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          return visible
            ? (0, jsx_runtime.jsxs)(
                AlertContainer,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ type, closable }, props),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)(AlertIcon, { type, children: getIcon(type) }),
                      (0, jsx_runtime.jsxs)(AlertContent, {
                        children: [
                          title && (0, jsx_runtime.jsx)(AlertTitle, { children: title }),
                          description && (0, jsx_runtime.jsx)(AlertDescription, { children: description }),
                          children && (0, jsx_runtime.jsx)(AlertDescription, { children }),
                        ],
                      }),
                      closable &&
                        (0, jsx_runtime.jsx)(AlertClose, {
                          onClick: function handleClose() {
                            setVisible(!1), onClose && onClose();
                          },
                          "aria-label": "Close",
                          children: (0, jsx_runtime.jsxs)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                            ],
                          }),
                        }),
                    ],
                  }
                )
              )
            : null;
        };
      TxAlert.defaultProps = { type: "info", closable: !1 };
      const tx_alert = TxAlert;
      TxAlert.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxAlert",
        props: {
          type: {
            defaultValue: { value: '"info"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"info"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          title: { description: "", type: { name: "string" }, required: !1 },
          description: { description: "", type: { name: "string" }, required: !1 },
          onClose: { description: "", type: { name: "func" }, required: !1 },
          children: { description: "", type: { name: "node" }, required: !1 },
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
