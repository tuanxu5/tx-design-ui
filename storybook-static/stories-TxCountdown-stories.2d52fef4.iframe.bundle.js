"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [676],
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
    "./src/stories/TxCountdown.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomSize: () => CustomSize,
          NextWeek: () => NextWeek,
          ShortTime: () => ShortTime,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_countdown_tx_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-countdown/tx-countdown.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxCountdown",
        component: _components_tx_countdown_tx_countdown__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      var NextWeek = { args: { targetDate: futureDate.toISOString(), size: "32px" } },
        CustomSize = { args: { targetDate: futureDate.toISOString(), size: "48px" } },
        ShortTime = {
          render: function render() {
            var shortDate = new Date();
            return (
              shortDate.setMinutes(shortDate.getMinutes() + 5),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_countdown_tx_countdown__WEBPACK_IMPORTED_MODULE_0__.A,
                { targetDate: shortDate.toISOString(), size: "36px" }
              )
            );
          },
        };
      const __namedExportsOrder = ["NextWeek", "CustomSize", "ShortTime"];
      (NextWeek.parameters = {
        ...NextWeek.parameters,
        docs: {
          ...NextWeek.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    targetDate: futureDate.toISOString(),\n    size: "32px"\n  }\n}',
            ...NextWeek.parameters?.docs?.source,
          },
        },
      }),
        (CustomSize.parameters = {
          ...CustomSize.parameters,
          docs: {
            ...CustomSize.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    targetDate: futureDate.toISOString(),\n    size: "48px"\n  }\n}',
              ...CustomSize.parameters?.docs?.source,
            },
          },
        }),
        (ShortTime.parameters = {
          ...ShortTime.parameters,
          docs: {
            ...ShortTime.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    const shortDate = new Date();\n    shortDate.setMinutes(shortDate.getMinutes() + 5);\n    return <TxCountdown targetDate={shortDate.toISOString()} size="36px" />;\n  }\n}',
              ...ShortTime.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-countdown/tx-countdown.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
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
        _excluded = ["targetDate", "size"],
        CountdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  gap: 8px;\n"]
            ))
        ),
        CountdownUnit = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n"]
            ))
        ),
        CountdownValue = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: ", ";\n  font-weight: 700;\n  color: ", ";\n  line-height: 1;\n"]
            )),
          function (props) {
            return props.size || "32px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary
        ),
        CountdownLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: 12px;\n  color: ", ";\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        TxCountdown = function TxCountdown(_ref) {
          var targetDate = _ref.targetDate,
            size = _ref.size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({ days: 0, hours: 0, minutes: 0, seconds: 0 }),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            timeLeft = _useState2[0],
            setTimeLeft = _useState2[1];
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              function () {
                var calculateTimeLeft = function calculateTimeLeft() {
                  var difference = new Date(targetDate) - new Date();
                  setTimeLeft(
                    difference > 0
                      ? {
                          days: Math.floor(difference / 864e5),
                          hours: Math.floor((difference / 36e5) % 24),
                          minutes: Math.floor((difference / 1e3 / 60) % 60),
                          seconds: Math.floor((difference / 1e3) % 60),
                        }
                      : { days: 0, hours: 0, minutes: 0, seconds: 0 }
                  );
                };
                calculateTimeLeft();
                var timer = setInterval(calculateTimeLeft, 1e3);
                return function () {
                  return clearInterval(timer);
                };
              },
              [targetDate]
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              CountdownContainer,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                  {},
                  props
                ),
                {},
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.days).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, { children: "Days" }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.hours).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, { children: "Hours" }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.minutes).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, {
                          children: "Minutes",
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.seconds).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, {
                          children: "Seconds",
                        }),
                      ],
                    }),
                  ],
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCountdown;
      TxCountdown.__docgenInfo = { description: "", methods: [], displayName: "TxCountdown" };
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
