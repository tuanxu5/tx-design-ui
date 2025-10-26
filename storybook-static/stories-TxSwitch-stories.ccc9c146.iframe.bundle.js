"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [995],
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
    "./src/stories/TxSwitch.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Disabled: () => Disabled,
          Loading: () => Loading,
          Sizes: () => Sizes,
          WithText: () => WithText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-switch/tx-switch.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxSwitch",
        component: _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          checked: { control: "boolean" },
          defaultChecked: { control: "boolean" },
          disabled: { control: "boolean" },
          loading: { control: "boolean" },
          size: { control: { type: "select" }, options: ["small", "default", "large"] },
          onChange: { action: "changed" },
        },
      };
      var Basic = {
          render: function BasicComponent(args) {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState,
                2
              ),
              checked = _useState2[0],
              setChecked = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  {},
                  args
                ),
                {},
                { checked, onChange: setChecked }
              )
            );
          },
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "16px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { disabled: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { checked: !0, disabled: !0 }
                ),
              ],
            });
          },
        },
        Sizes = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", flexDirection: "column", gap: "16px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { size: "small", defaultChecked: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { size: "default", defaultChecked: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { size: "large", defaultChecked: !0 }
                ),
              ],
            });
          },
        },
        WithText = {
          render: function WithTextComponent() {
            var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
              _useState4 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState3,
                2
              ),
              checked = _useState4[0],
              setChecked = _useState4[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", flexDirection: "column", gap: "16px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { checked, onChange: setChecked, checkedChildren: "开", unCheckedChildren: "关" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { checked, onChange: setChecked, checkedChildren: "ON", unCheckedChildren: "OFF", size: "large" }
                ),
              ],
            });
          },
        },
        Loading = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "16px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { loading: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { loading: !0, checked: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_switch_tx_switch__WEBPACK_IMPORTED_MODULE_1__.Z,
                  { loading: !0, size: "small" }
                ),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Basic", "Disabled", "Sizes", "WithText", "Loading"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: function BasicComponent(args) {\n    const [checked, setChecked] = useState(false);\n    return <TxSwitch {...args} checked={checked} onChange={setChecked} />;\n  }\n}",
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "16px",\n    alignItems: "center"\n  }}>\n      <TxSwitch disabled />\n      <TxSwitch checked disabled />\n    </div>\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "16px"\n  }}>\n      <TxSwitch size="small" defaultChecked />\n      <TxSwitch size="default" defaultChecked />\n      <TxSwitch size="large" defaultChecked />\n    </div>\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (WithText.parameters = {
          ...WithText.parameters,
          docs: {
            ...WithText.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function WithTextComponent() {\n    const [checked, setChecked] = useState(true);\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      gap: "16px"\n    }}>\n        <TxSwitch checked={checked} onChange={setChecked} checkedChildren="开" unCheckedChildren="关" />\n        <TxSwitch checked={checked} onChange={setChecked} checkedChildren="ON" unCheckedChildren="OFF" size="large" />\n      </div>;\n  }\n}',
              ...WithText.parameters?.docs?.source,
            },
          },
        }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "16px",\n    alignItems: "center"\n  }}>\n      <TxSwitch loading />\n      <TxSwitch loading checked />\n      <TxSwitch loading size="small" />\n    </div>\n}',
              ...Loading.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-switch/tx-switch.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => TxSwitch });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
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
        colors = __webpack_require__("./src/theme/colors.js"),
        SwitchWrapper = styled_components_browser_esm.Ay.label(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  cursor: ",
              ";\n  opacity: ",
              ";\n  gap: 8px;\n",
            ])),
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          function (props) {
            return props.disabled ? 0.5 : 1;
          }
        ),
        SwitchInput = styled_components_browser_esm.Ay.input(
          _templateObject2 || (_templateObject2 = (0, taggedTemplateLiteral.A)(["\n  display: none;\n"]))
        ),
        SwitchSlider = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  width: ",
              ";\n  height: ",
              ";\n  background-color: ",
              ";\n  border-radius: ",
              ';\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &::before {\n    content: "";\n    position: absolute;\n    height: ',
              ";\n    width: ",
              ";\n    left: ",
              ";\n    bottom: 2px;\n    background-color: white;\n    border-radius: 50%;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  }\n",
            ])),
          function (props) {
            return "small" === props.size ? "28px" : "large" === props.size ? "48px" : "38px";
          },
          function (props) {
            return "small" === props.size ? "16px" : "large" === props.size ? "26px" : "22px";
          },
          function (props) {
            return props.checked
              ? props.disabled
                ? colors.A.primary[300]
                : colors.A.primary[500]
              : "rgba(0, 0, 0, 0.25)";
          },
          function (props) {
            return "small" === props.size ? "8px" : "large" === props.size ? "13px" : "11px";
          },
          function (props) {
            return "small" === props.size ? "12px" : "large" === props.size ? "22px" : "18px";
          },
          function (props) {
            return "small" === props.size ? "12px" : "large" === props.size ? "22px" : "18px";
          },
          function (_ref) {
            var checked = _ref.checked,
              size = _ref.size;
            return checked
              ? "calc(100% - ".concat("small" === size ? "14px" : "large" === size ? "24px" : "20px", ")")
              : "2px";
          }
        ),
        LoadingIcon =
          (styled_components_browser_esm.Ay.span(
            _templateObject4 ||
              (_templateObject4 = (0, taggedTemplateLiteral.A)([
                "\n  font-size: 14px;\n  color: ",
                ";\n  user-select: none;\n  font-weight: 400;\n",
              ])),
            colors.A.textPrimary
          ),
          styled_components_browser_esm.Ay.div(
            _templateObject5 ||
              (_templateObject5 = (0, taggedTemplateLiteral.A)([
                "\n  display: inline-block;\n  width: ",
                ";\n  height: ",
                ";\n  border: 2px solid white;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 0.6s linear infinite;\n  position: absolute;\n  top: 50%;\n  left: ",
                ";\n  right: ",
                ";\n  transform: translate(",
                ", -50%);\n\n  @keyframes spin {\n    to {\n      transform: translate(",
                ", -50%) rotate(360deg);\n    }\n  }\n",
              ])),
            function (props) {
              return "small" === props.size ? "10px" : "large" === props.size ? "16px" : "14px";
            },
            function (props) {
              return "small" === props.size ? "10px" : "large" === props.size ? "16px" : "14px";
            },
            function (props) {
              return props.checked ? "auto" : "50%";
            },
            function (props) {
              return props.checked ? "50%" : "auto";
            },
            function (props) {
              return props.checked ? "50%" : "-50%";
            },
            function (props) {
              return props.checked ? "50%" : "-50%";
            }
          )),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "checked",
          "defaultChecked",
          "disabled",
          "loading",
          "size",
          "checkedChildren",
          "unCheckedChildren",
          "onChange",
          "className",
        ],
        TxSwitch = function TxSwitch(_ref) {
          var _ref$checked = _ref.checked,
            checked = void 0 !== _ref$checked && _ref$checked,
            _ref$defaultChecked = _ref.defaultChecked,
            defaultChecked = void 0 !== _ref$defaultChecked && _ref$defaultChecked,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$loading = _ref.loading,
            loading = void 0 !== _ref$loading && _ref$loading,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "default" : _ref$size,
            _ref$checkedChildren = _ref.checkedChildren,
            checkedChildren = void 0 === _ref$checkedChildren ? null : _ref$checkedChildren,
            _ref$unCheckedChildre = _ref.unCheckedChildren,
            unCheckedChildren = void 0 === _ref$unCheckedChildre ? null : _ref$unCheckedChildre,
            onChange = _ref.onChange,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            isChecked = void 0 !== checked ? checked : defaultChecked;
          return (0, jsx_runtime.jsxs)(SwitchWrapper, {
            disabled: disabled || loading,
            className,
            children: [
              (0, jsx_runtime.jsx)(
                SwitchInput,
                (0, objectSpread2.A)(
                  {
                    type: "checkbox",
                    checked: isChecked,
                    onChange: function handleChange(e) {
                      disabled || loading || (onChange && onChange(e.target.checked, e));
                    },
                    disabled: disabled || loading,
                  },
                  props
                )
              ),
              (0, jsx_runtime.jsxs)(SwitchSlider, {
                checked: isChecked,
                disabled,
                size,
                children: [
                  loading && (0, jsx_runtime.jsx)(LoadingIcon, { checked: isChecked, size }),
                  !loading &&
                    isChecked &&
                    checkedChildren &&
                    (0, jsx_runtime.jsx)("span", {
                      style: {
                        position: "absolute",
                        left: "6px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "small" === size ? "10px" : "12px",
                        color: "white",
                      },
                      children: checkedChildren,
                    }),
                  !loading &&
                    !isChecked &&
                    unCheckedChildren &&
                    (0, jsx_runtime.jsx)("span", {
                      style: {
                        position: "absolute",
                        right: "6px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "small" === size ? "10px" : "12px",
                        color: "white",
                      },
                      children: unCheckedChildren,
                    }),
                ],
              }),
            ],
          });
        };
      (TxSwitch.defaultProps = {
        checked: void 0,
        defaultChecked: !1,
        disabled: !1,
        loading: !1,
        size: "default",
        checkedChildren: null,
        unCheckedChildren: null,
        onChange: void 0,
        className: "",
      }),
        (TxSwitch.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxSwitch",
          props: {
            checked: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            defaultChecked: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
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
            size: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"small"', computed: !1 },
                  { value: '"default"', computed: !1 },
                  { value: '"large"', computed: !1 },
                ],
              },
              required: !1,
            },
            checkedChildren: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            unCheckedChildren: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            onChange: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
          },
        });
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
