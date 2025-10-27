"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [4777, 8661],
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
    "./src/stories/TxTag.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          Bordered: () => Bordered,
          Closable: () => Closable,
          Preview: () => Preview,
          Sizes: () => Sizes,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-tag/tx-tag.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxTag",
        component: _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          color: { control: "select", options: ["default", "primary", "success", "warning", "danger", "info"] },
          size: { control: "select", options: ["small", "medium", "large"] },
          closable: { control: "boolean" },
          bordered: { control: "boolean" },
          onClose: { action: "closed" },
        },
      };
      var Preview = { args: { children: "Tag", color: "default", size: "medium", closable: !1, bordered: !1 } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "8px", flexWrap: "wrap" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { children: "Default Tag" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "primary", children: "Primary Tag" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "success", children: "Success Tag" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "warning", children: "Warning Tag" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "danger", children: "Danger Tag" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "info", children: "Info Tag" }
              ),
            ],
          });
        },
        Closable = function Closable() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "8px", flexWrap: "wrap" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                {
                  closable: !0,
                  onClose: function onClose() {
                    return console.log("Tag closed");
                  },
                  children: "Closable Tag",
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "primary", closable: !0, children: "Primary Tag" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "danger", closable: !0, children: "Danger Tag" }
              ),
            ],
          });
        },
        Sizes = function Sizes() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "8px", alignItems: "center" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { size: "small", color: "primary", children: "Small" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { size: "medium", color: "primary", children: "Medium" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { size: "large", color: "primary", children: "Large" }
              ),
            ],
          });
        },
        Bordered = function Bordered() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", gap: "8px", flexWrap: "wrap" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { bordered: !0, children: "Default" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "primary", bordered: !0, children: "Primary" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "success", bordered: !0, children: "Success" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "warning", bordered: !0, children: "Warning" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_0__.A,
                { color: "danger", bordered: !0, children: "Danger" }
              ),
            ],
          });
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "Closable", "Sizes", "Bordered"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: "Tag",\n    color: "default",\n    size: "medium",\n    closable: false,\n    bordered: false\n  }\n}',
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
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "8px",\n    flexWrap: "wrap"\n  }}>\n      <TxTag>Default Tag</TxTag>\n      <TxTag color="primary">Primary Tag</TxTag>\n      <TxTag color="success">Success Tag</TxTag>\n      <TxTag color="warning">Warning Tag</TxTag>\n      <TxTag color="danger">Danger Tag</TxTag>\n      <TxTag color="info">Info Tag</TxTag>\n    </div>;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (Closable.parameters = {
          ...Closable.parameters,
          docs: {
            ...Closable.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "8px",\n    flexWrap: "wrap"\n  }}>\n      <TxTag closable onClose={() => console.log("Tag closed")}>\n        Closable Tag\n      </TxTag>\n      <TxTag color="primary" closable>\n        Primary Tag\n      </TxTag>\n      <TxTag color="danger" closable>\n        Danger Tag\n      </TxTag>\n    </div>;\n}',
              ...Closable.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "8px",\n    alignItems: "center"\n  }}>\n      <TxTag size="small" color="primary">\n        Small\n      </TxTag>\n      <TxTag size="medium" color="primary">\n        Medium\n      </TxTag>\n      <TxTag size="large" color="primary">\n        Large\n      </TxTag>\n    </div>;\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Bordered.parameters = {
          ...Bordered.parameters,
          docs: {
            ...Bordered.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    gap: "8px",\n    flexWrap: "wrap"\n  }}>\n      <TxTag bordered>Default</TxTag>\n      <TxTag color="primary" bordered>\n        Primary\n      </TxTag>\n      <TxTag color="success" bordered>\n        Success\n      </TxTag>\n      <TxTag color="warning" bordered>\n        Warning\n      </TxTag>\n      <TxTag color="danger" bordered>\n        Danger\n      </TxTag>\n    </div>;\n}',
              ...Bordered.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-tag/tx-tag.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_tag });
      var _templateObject,
        _templateObject2,
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
        StyledTag = styled_components_browser_esm.Ay.span(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: ",
              ";\n  border-radius: 4px;\n  font-size: ",
              ";\n  font-weight: 400;\n  line-height: 1.5;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n  cursor: ",
              ";\n\n  /* Color variants */\n  ",
              "\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "2px 8px";
              case "large":
                return "6px 16px";
              default:
                return "4px 12px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "12px";
              case "large":
                return "16px";
              default:
                return "14px";
            }
          },
          function (props) {
            return props.closable ? "default" : "inherit";
          },
          function (props) {
            var colorMap = {
                default: { bg: colors.A.bgFill, color: colors.A.textPrimary, border: colors.A.borderDefault },
                primary: { bg: colors.A.primaryLight, color: colors.A.primary, border: colors.A.primary },
                success: { bg: "".concat(colors.A.success, "15"), color: colors.A.success, border: colors.A.success },
                warning: { bg: "".concat(colors.A.warning, "15"), color: colors.A.warning, border: colors.A.warning },
                danger: { bg: colors.A.dangerLight, color: colors.A.danger, border: colors.A.danger },
                info: { bg: "".concat(colors.A.info, "15"), color: colors.A.info, border: colors.A.info },
              },
              style = colorMap[props.color] || colorMap.default;
            return "\n      background-color: "
              .concat(style.bg, ";\n      color: ")
              .concat(style.color, ";\n      border-color: ")
              .concat(props.bordered ? style.border : "transparent", ";\n    ");
          }
        ),
        StyledTagClose = styled_components_browser_esm.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  width: 14px;\n  height: 14px;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "color", "closable", "onClose", "size", "bordered"],
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxTag = function TxTag(_ref) {
          var children = _ref.children,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? "default" : _ref$color,
            _ref$closable = _ref.closable,
            closable = void 0 !== _ref$closable && _ref$closable,
            onClose = _ref.onClose,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$bordered = _ref.bordered,
            bordered = void 0 !== _ref$bordered && _ref$bordered,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            StyledTag,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ color, size, bordered, closable }, rest),
              {},
              {
                children: [
                  children,
                  closable &&
                    (0, jsx_runtime.jsx)(StyledTagClose, {
                      onClick: function handleClose(e) {
                        e.stopPropagation(), onClose && onClose(e);
                      },
                      type: "button",
                      children: (0, jsx_runtime.jsx)(CloseIcon, {}),
                    }),
                ],
              }
            )
          );
        };
      TxTag.defaultProps = { color: "default", closable: !1, size: "medium", bordered: !1 };
      const tx_tag = TxTag;
      TxTag.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTag",
        props: {
          color: {
            defaultValue: { value: '"default"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"primary"', computed: !1 },
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"danger"', computed: !1 },
                { value: '"info"', computed: !1 },
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
          bordered: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !1 },
          onClose: { description: "", type: { name: "func" }, required: !1 },
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
