"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [888],
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
    "./src/stories/TxSlider.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CustomRange: () => CustomRange,
          Disabled: () => Disabled,
          StepMarks: () => StepMarks,
          WithMarks: () => WithMarks,
          WithValue: () => WithValue,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-slider/tx-slider.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxSlider",
        component: _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          min: { control: "number" },
          max: { control: "number" },
          step: { control: "number" },
          disabled: { control: "boolean" },
          showValue: { control: "boolean" },
          onChange: { action: "changed" },
          onAfterChange: { action: "after changed" },
        },
      };
      var Basic = {
          render: function BasicComponent(args) {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(30),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState,
                2
              ),
              value = _useState2[0],
              setValue = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    {},
                    args
                  ),
                  {},
                  { value, onChange: setValue }
                )
              ),
            });
          },
        },
        WithValue = {
          render: function WithValueComponent() {
            var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(50),
              _useState4 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState3,
                2
              ),
              value = _useState4[0],
              setValue = _useState4[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
                { value, onChange: setValue, showValue: !0 }
              ),
            });
          },
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
                { defaultValue: 50, disabled: !0 }
              ),
            });
          },
        },
        CustomRange = {
          render: function CustomRangeComponent() {
            var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
              _useState6 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState5,
                2
              ),
              value = _useState6[0],
              setValue = _useState6[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
                { min: 0, max: 10, step: 0.5, value, onChange: setValue, showValue: !0 }
              ),
            });
          },
        },
        WithMarks = {
          render: function WithMarksComponent() {
            var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(37),
              _useState8 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState7,
                2
              ),
              value = _useState8[0],
              setValue = _useState8[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px", marginBottom: "40px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
                { value, onChange: setValue, marks: { 0: "0°C", 26: "26°C", 37: "37°C", 100: "100°C" } }
              ),
            });
          },
        },
        StepMarks = {
          render: function StepMarksComponent() {
            var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
              _useState10 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState9,
                2
              ),
              value = _useState10[0],
              setValue = _useState10[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px", marginBottom: "40px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_slider_tx_slider__WEBPACK_IMPORTED_MODULE_1__.m,
                {
                  value,
                  onChange: setValue,
                  marks: { 0: "0", 20: "20", 40: "40", 60: "60", 80: "80", 100: "100" },
                  step: 20,
                }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Basic", "WithValue", "Disabled", "CustomRange", "WithMarks", "StepMarks"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: function BasicComponent(args) {\n    const [value, setValue] = useState(30);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxSlider {...args} value={value} onChange={setValue} />\n      </div>;\n  }\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (WithValue.parameters = {
          ...WithValue.parameters,
          docs: {
            ...WithValue.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function WithValueComponent() {\n    const [value, setValue] = useState(50);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxSlider value={value} onChange={setValue} showValue />\n      </div>;\n  }\n}',
              ...WithValue.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px"\n  }}>\n      <TxSlider defaultValue={50} disabled />\n    </div>\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (CustomRange.parameters = {
          ...CustomRange.parameters,
          docs: {
            ...CustomRange.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function CustomRangeComponent() {\n    const [value, setValue] = useState(0);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxSlider min={0} max={10} step={0.5} value={value} onChange={setValue} showValue />\n      </div>;\n  }\n}',
              ...CustomRange.parameters?.docs?.source,
            },
          },
        }),
        (WithMarks.parameters = {
          ...WithMarks.parameters,
          docs: {
            ...WithMarks.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function WithMarksComponent() {\n    const [value, setValue] = useState(37);\n    const marks = {\n      0: "0°C",\n      26: "26°C",\n      37: "37°C",\n      100: "100°C"\n    };\n    return <div style={{\n      width: "400px",\n      marginBottom: "40px"\n    }}>\n        <TxSlider value={value} onChange={setValue} marks={marks} />\n      </div>;\n  }\n}',
              ...WithMarks.parameters?.docs?.source,
            },
          },
        }),
        (StepMarks.parameters = {
          ...StepMarks.parameters,
          docs: {
            ...StepMarks.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function StepMarksComponent() {\n    const [value, setValue] = useState(20);\n    const marks = {\n      0: "0",\n      20: "20",\n      40: "40",\n      60: "60",\n      80: "80",\n      100: "100"\n    };\n    return <div style={{\n      width: "400px",\n      marginBottom: "40px"\n    }}>\n        <TxSlider value={value} onChange={setValue} marks={marks} step={20} />\n      </div>;\n  }\n}',
              ...StepMarks.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-slider/tx-slider.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { m: () => TxSlider });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
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
        colors = __webpack_require__("./src/theme/colors.js"),
        SliderWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  opacity: ",
              ";\n  cursor: ",
              ";\n",
            ])),
          function (props) {
            return props.disabled ? 0.5 : 1;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "default";
          }
        ),
        SliderContainer = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  flex: 1;\n  height: 12px;\n  display: flex;\n  align-items: center;\n",
            ]))
        ),
        SliderTrack = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: ",
              ";\n  border-radius: 2px;\n",
            ])),
          colors.A.bgFillLight
        ),
        SliderFill = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  height: 4px;\n  background-color: ",
              ";\n  border-radius: 2px;\n  width: ",
              "%;\n  transition: width 0.2s ease;\n",
            ])),
          function (props) {
            return props.disabled ? colors.A.primary[300] : colors.A.primary[500];
          },
          function (props) {
            return props.percent;
          }
        ),
        SliderHandle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  background-color: white;\n  border: 2px solid ",
              ";\n  border-radius: 50%;\n  left: ",
              "%;\n  transform: translateX(-50%);\n  cursor: ",
              ";\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\n  &:hover {\n    transform: translateX(-50%) scale(1.1);\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  }\n\n  &:active {\n    cursor: ",
              ";\n    transform: translateX(-50%) scale(1.05);\n  }\n",
            ])),
          function (props) {
            return props.disabled ? colors.A.primary[300] : colors.A.primary[500];
          },
          function (props) {
            return props.percent;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "grab";
          },
          function (props) {
            return props.disabled ? "not-allowed" : "grabbing";
          }
        ),
        SliderInput = styled_components_browser_esm.Ay.input(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: ",
              ";\n  z-index: 1;\n\n  &::-webkit-slider-thumb {\n    width: 14px;\n    height: 14px;\n    -webkit-appearance: none;\n  }\n",
            ])),
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          }
        ),
        SliderValue = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  min-width: 40px;\n  font-size: 14px;\n  color: ",
              ";\n  text-align: center;\n  font-weight: 400;\n",
            ])),
          colors.A.textPrimary
        ),
        SliderMarks = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 100%;\n  top: 16px;\n",
            ]))
        ),
        SliderMark = styled_components_browser_esm.Ay.div(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: ",
              "%;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: ",
              ';\n  white-space: nowrap;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: -12px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 2px;\n    height: 4px;\n    background-color: ',
              ";\n  }\n",
            ])),
          function (props) {
            return props.percent;
          },
          colors.A.textSecondary,
          colors.A.borderDefault
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "min",
          "max",
          "step",
          "value",
          "defaultValue",
          "disabled",
          "showValue",
          "marks",
          "onChange",
          "onAfterChange",
          "className",
        ],
        TxSlider = function TxSlider(_ref) {
          var _ref$min = _ref.min,
            min = void 0 === _ref$min ? 0 : _ref$min,
            _ref$max = _ref.max,
            max = void 0 === _ref$max ? 100 : _ref$max,
            _ref$step = _ref.step,
            step = void 0 === _ref$step ? 1 : _ref$step,
            value = _ref.value,
            _ref$defaultValue = _ref.defaultValue,
            defaultValue = void 0 === _ref$defaultValue ? 0 : _ref$defaultValue,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$showValue = _ref.showValue,
            showValue = void 0 !== _ref$showValue && _ref$showValue,
            _ref$marks = _ref.marks,
            marks = void 0 === _ref$marks ? null : _ref$marks,
            onChange = _ref.onChange,
            onAfterChange = _ref.onAfterChange,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(defaultValue),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            internalValue = _useState2[0],
            setInternalValue = _useState2[1],
            currentValue = void 0 !== value ? value : internalValue,
            getPercent = function getPercent() {
              return ((currentValue - min) / (max - min)) * 100;
            },
            handleAfterChange = function handleAfterChange(e) {
              disabled || (onAfterChange && onAfterChange(parseFloat(e.target.value)));
            };
          return (0, jsx_runtime.jsxs)(SliderWrapper, {
            disabled,
            className,
            children: [
              (0, jsx_runtime.jsxs)(SliderContainer, {
                children: [
                  (0, jsx_runtime.jsx)(SliderTrack, {}),
                  (0, jsx_runtime.jsx)(SliderFill, { percent: getPercent(), disabled }),
                  (0, jsx_runtime.jsx)(SliderHandle, { percent: getPercent(), disabled }),
                  (0, jsx_runtime.jsx)(
                    SliderInput,
                    (0, objectSpread2.A)(
                      {
                        type: "range",
                        min,
                        max,
                        step,
                        value: currentValue,
                        onChange: function handleChange(e) {
                          if (!disabled) {
                            var newValue = parseFloat(e.target.value);
                            void 0 === value && setInternalValue(newValue), onChange && onChange(newValue);
                          }
                        },
                        onMouseUp: handleAfterChange,
                        onTouchEnd: handleAfterChange,
                        disabled,
                      },
                      props
                    )
                  ),
                  marks &&
                    (0, jsx_runtime.jsx)(SliderMarks, {
                      children: Object.entries(marks).map(function (_ref2) {
                        var _ref3 = (0, slicedToArray.A)(_ref2, 2),
                          markValue = _ref3[0],
                          label = _ref3[1],
                          markPercent = ((parseFloat(markValue) - min) / (max - min)) * 100;
                        return (0, jsx_runtime.jsx)(SliderMark, { percent: markPercent, children: label }, markValue);
                      }),
                    }),
                ],
              }),
              showValue && (0, jsx_runtime.jsx)(SliderValue, { children: currentValue }),
            ],
          });
        };
      (TxSlider.defaultProps = {
        min: 0,
        max: 100,
        step: 1,
        value: void 0,
        defaultValue: 0,
        disabled: !1,
        showValue: !1,
        marks: null,
        onChange: void 0,
        onAfterChange: void 0,
        className: "",
      }),
        (TxSlider.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxSlider",
          props: {
            min: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            max: {
              defaultValue: { value: "100", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            step: {
              defaultValue: { value: "1", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            defaultValue: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            disabled: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            showValue: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            marks: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "object" },
              required: !1,
            },
            value: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            onChange: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            onAfterChange: {
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
