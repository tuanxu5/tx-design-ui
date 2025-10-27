"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [3512],
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
    "./src/stories/TxTypography.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Body: () => Body,
          Caption: () => Caption,
          H1: () => H1,
          H2: () => H2,
          H3: () => H3,
          WithEllipsis: () => WithEllipsis,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxTypography",
        component: __webpack_require__("./src/components/tx-typography/tx-typography.jsx").A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { variant: { control: "select", options: ["h1", "h2", "h3", "h4", "body", "caption"] } },
      };
      var H1 = { args: { variant: "h1", children: "Heading 1" } },
        H2 = { args: { variant: "h2", children: "Heading 2" } },
        H3 = { args: { variant: "h3", children: "Heading 3" } },
        Body = { args: { variant: "body", children: "Body text for paragraphs and general content" } },
        Caption = { args: { variant: "caption", children: "Caption text for smaller information" } },
        WithEllipsis = {
          args: {
            children: "This is a very long text that will be truncated with ellipsis",
            ellipsis: !0,
            width: "200px",
          },
        };
      const __namedExportsOrder = ["H1", "H2", "H3", "Body", "Caption", "WithEllipsis"];
      (H1.parameters = {
        ...H1.parameters,
        docs: {
          ...H1.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    variant: "h1",\n    children: "Heading 1"\n  }\n}',
            ...H1.parameters?.docs?.source,
          },
        },
      }),
        (H2.parameters = {
          ...H2.parameters,
          docs: {
            ...H2.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    variant: "h2",\n    children: "Heading 2"\n  }\n}',
              ...H2.parameters?.docs?.source,
            },
          },
        }),
        (H3.parameters = {
          ...H3.parameters,
          docs: {
            ...H3.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    variant: "h3",\n    children: "Heading 3"\n  }\n}',
              ...H3.parameters?.docs?.source,
            },
          },
        }),
        (Body.parameters = {
          ...Body.parameters,
          docs: {
            ...Body.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "body",\n    children: "Body text for paragraphs and general content"\n  }\n}',
              ...Body.parameters?.docs?.source,
            },
          },
        }),
        (Caption.parameters = {
          ...Caption.parameters,
          docs: {
            ...Caption.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "caption",\n    children: "Caption text for smaller information"\n  }\n}',
              ...Caption.parameters?.docs?.source,
            },
          },
        }),
        (WithEllipsis.parameters = {
          ...WithEllipsis.parameters,
          docs: {
            ...WithEllipsis.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "This is a very long text that will be truncated with ellipsis",\n    ellipsis: true,\n    width: "200px"\n  }\n}',
              ...WithEllipsis.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-typography/tx-typography.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
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
        _excluded = ["children", "variant", "as"],
        TypographyBase = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  color: ",
                ";\n  font-size: ",
                ";\n  font-weight: ",
                ";\n  line-height: ",
                ";\n  text-align: ",
                ";\n  margin: ",
                ";\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n",
              ]
            )),
          function (props) {
            return props.color || _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary;
          },
          function (props) {
            return props.size || "16px";
          },
          function (props) {
            return props.weight || "400";
          },
          function (props) {
            return props.lineHeight || "1.5";
          },
          function (props) {
            return props.align || "left";
          },
          function (props) {
            return props.margin || "0";
          },
          function (props) {
            return "h1" === props.variant && "\n    font-size: 48px;\n    font-weight: 700;\n    line-height: 1.2;\n  ";
          },
          function (props) {
            return "h2" === props.variant && "\n    font-size: 36px;\n    font-weight: 700;\n    line-height: 1.2;\n  ";
          },
          function (props) {
            return "h3" === props.variant && "\n    font-size: 28px;\n    font-weight: 600;\n    line-height: 1.3;\n  ";
          },
          function (props) {
            return "h4" === props.variant && "\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.3;\n  ";
          },
          function (props) {
            return (
              "body" === props.variant && "\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n  "
            );
          },
          function (props) {
            return (
              "caption" === props.variant &&
              "\n    font-size: 14px;\n    color: ".concat(
                _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary,
                ";\n  "
              )
            );
          },
          function (props) {
            return (
              props.ellipsis && "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "
            );
          }
        ),
        TxTypography = function TxTypography(_ref) {
          var children = _ref.children,
            variant = _ref.variant,
            as = _ref.as,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            ),
            tag = as || (variant && variant.startsWith("h") ? variant : "div");
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            TypographyBase,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { variant, as: tag },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTypography;
      TxTypography.__docgenInfo = { description: "", methods: [], displayName: "TxTypography" };
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
