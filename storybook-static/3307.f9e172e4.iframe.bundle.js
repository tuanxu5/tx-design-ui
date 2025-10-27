"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [3307],
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
    "./src/stories/TxResult.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomIcon: () => CustomIcon,
          Error: () => Error,
          Info: () => Info,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_result_tx_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-result/tx-result.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxResult",
        component: _components_tx_result_tx_result__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          status: { control: { type: "select" }, options: ["success", "error", "warning", "info"] },
          title: { control: "text" },
          subTitle: { control: "text" },
        },
      };
      var Success = {
          args: {
            status: "success",
            title: "Successfully Purchased!",
            subTitle: "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",
            extra: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { type: "primary", label: "Go Console" },
                "success-go-console"
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { label: "Print" },
                "success-print"
              ),
            ],
          },
        },
        Error = {
          args: {
            status: "error",
            title: "Submission Failed",
            subTitle: "Please check and modify the following information before resubmitting.",
            extra: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { type: "primary", label: "Go Console" },
                "error-go-console"
              ),
            ],
          },
        },
        Warning = {
          args: {
            status: "warning",
            title: "Your operation has been executed",
            subTitle: "This is a warning feedback. Please check your information.",
            extra: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { type: "primary", label: "Go Console" },
                "warning-go-console"
              ),
            ],
          },
        },
        Info = {
          args: {
            status: "info",
            title: "Your operation has been recorded",
            subTitle: "The content of the modal dialog tells you about something.",
            extra: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { type: "primary", label: "Primary" },
                "info-primary"
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { label: "Secondary" },
                "info-secondary"
              ),
            ],
          },
        },
        CustomIcon = {
          args: {
            status: "success",
            icon: "🎉",
            title: "Congratulations!",
            subTitle: "You have successfully completed the task.",
            extra: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                { type: "primary", label: "Continue" },
                "customicon-continue"
              ),
            ],
          },
        };
      const __namedExportsOrder = ["Success", "Error", "Warning", "Info", "CustomIcon"];
      (Success.parameters = {
        ...Success.parameters,
        docs: {
          ...Success.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    status: "success",\n    title: "Successfully Purchased!",\n    subTitle: "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",\n    extra: [<TxButton key="success-go-console" type="primary" label="Go Console" />, <TxButton key="success-print" label="Print" />]\n  }\n}',
            ...Success.parameters?.docs?.source,
          },
        },
      }),
        (Error.parameters = {
          ...Error.parameters,
          docs: {
            ...Error.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    status: "error",\n    title: "Submission Failed",\n    subTitle: "Please check and modify the following information before resubmitting.",\n    extra: [<TxButton key="error-go-console" type="primary" label="Go Console" />]\n  }\n}',
              ...Error.parameters?.docs?.source,
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    status: "warning",\n    title: "Your operation has been executed",\n    subTitle: "This is a warning feedback. Please check your information.",\n    extra: [<TxButton key="warning-go-console" type="primary" label="Go Console" />]\n  }\n}',
              ...Warning.parameters?.docs?.source,
            },
          },
        }),
        (Info.parameters = {
          ...Info.parameters,
          docs: {
            ...Info.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    status: "info",\n    title: "Your operation has been recorded",\n    subTitle: "The content of the modal dialog tells you about something.",\n    extra: [<TxButton key="info-primary" type="primary" label="Primary" />, <TxButton key="info-secondary" label="Secondary" />]\n  }\n}',
              ...Info.parameters?.docs?.source,
            },
          },
        }),
        (CustomIcon.parameters = {
          ...CustomIcon.parameters,
          docs: {
            ...CustomIcon.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    status: "success",\n    icon: "🎉",\n    title: "Congratulations!",\n    subTitle: "You have successfully completed the task.",\n    extra: [<TxButton key="customicon-continue" type="primary" label="Continue" />]\n  }\n}',
              ...CustomIcon.parameters?.docs?.source,
            },
          },
        });
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
    "./src/components/tx-result/tx-result.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_result });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        ResultContainer = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  padding: 48px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n",
            ]))
        ),
        ResultIcon = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  margin-bottom: 24px;\n  font-size: 72px;\n  line-height: 1;\n  color: ",
              ";\n",
            ])),
          function (props) {
            var status = props.status;
            return (
              { success: colors.A.success, error: colors.A.error, warning: colors.A.warning, info: colors.A.info }[
                status
              ] || colors.A.textPrimary
            );
          }
        ),
        ResultTitle = styled_components_browser_esm.Ay.h3(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 24px;\n  font-weight: 600;\n  color: ",
              ";\n  margin: 0 0 16px;\n",
            ])),
          colors.A.textPrimary
        ),
        ResultSubtitle = styled_components_browser_esm.Ay.p(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  margin: 0 0 24px;\n  max-width: 500px;\n",
            ])),
          colors.A.textSecondary
        ),
        ResultExtra = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        getStatusIcon = function getStatusIcon(status) {
          var iconProps = {
            width: "72",
            height: "72",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          };
          switch (status) {
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
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
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
        TxResult = function TxResult(_ref) {
          var status = _ref.status,
            icon = _ref.icon,
            title = _ref.title,
            subTitle = _ref.subTitle,
            extra = _ref.extra,
            children = _ref.children;
          return (0, jsx_runtime.jsxs)(ResultContainer, {
            children: [
              (0, jsx_runtime.jsx)(ResultIcon, { status, children: icon || getStatusIcon(status) }),
              title && (0, jsx_runtime.jsx)(ResultTitle, { children: title }),
              subTitle && (0, jsx_runtime.jsx)(ResultSubtitle, { children: subTitle }),
              extra && (0, jsx_runtime.jsx)(ResultExtra, { children: extra }),
              children && (0, jsx_runtime.jsx)(ResultExtra, { children }),
            ],
          });
        };
      TxResult.defaultProps = { status: "info" };
      const tx_result = TxResult;
      TxResult.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxResult",
        props: {
          status: {
            defaultValue: { value: '"info"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"error"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"info"', computed: !1 },
              ],
            },
            required: !1,
          },
          icon: { description: "", type: { name: "node" }, required: !1 },
          title: { description: "", type: { name: "node" }, required: !1 },
          subTitle: { description: "", type: { name: "node" }, required: !1 },
          extra: { description: "", type: { name: "node" }, required: !1 },
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
    "./src/styles/shorten.scss": () => {},
  },
]);
