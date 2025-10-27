"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [6277],
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
    "./src/stories/TxCalendar.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_calendar_tx_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-calendar/tx-calendar.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxCalendar",
        component: _components_tx_calendar_tx_calendar__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Default = function Default() {
        var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date()),
          _useState2 = (0,
          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
            _useState,
            2
          ),
          selectedDate = _useState2[0],
          setSelectedDate = _useState2[1];
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components_tx_calendar_tx_calendar__WEBPACK_IMPORTED_MODULE_1__.A,
              { value: selectedDate, onChange: setSelectedDate }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              style: { marginTop: "16px", fontSize: "14px", color: "#666" },
              children: ["Selected: ", selectedDate.toLocaleDateString()],
            }),
          ],
        });
      };
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '() => {\n  const [selectedDate, setSelectedDate] = useState(new Date());\n  return <div>\n      <TxCalendar value={selectedDate} onChange={setSelectedDate} />\n      <p style={{\n      marginTop: "16px",\n      fontSize: "14px",\n      color: "#666"\n    }}>\n        Selected: {selectedDate.toLocaleDateString()}\n      </p>\n    </div>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./src/components/tx-calendar/tx-calendar.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
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
        _excluded = ["value", "onChange"],
        CalendarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: 100%;\n  max-width: 350px;\n  background: white;\n  border: 1px solid ",
                ";\n  border-radius: 8px;\n  padding: 16px;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        CalendarHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n",
              ]
            ))
        ),
        MonthYear = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: 16px;\n  font-weight: 600;\n"]
            ))
        ),
        NavButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        CalendarGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n"]
            ))
        ),
        CalendarDay = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  text-align: center;\n  font-size: 12px;\n  color: ", ";\n  padding: 4px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        CalendarDate = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject7 ||
            (_templateObject7 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: 100%;\n  padding: 8px;\n  border: none;\n  background: ",
                ";\n  color: ",
                ";\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n\n  ",
                "\n",
              ]
            )),
          function (props) {
            return props.selected ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary : "transparent";
          },
          function (props) {
            return props.selected ? "white" : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary;
          },
          function (props) {
            return props.selected
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
              : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight;
          },
          function (props) {
            return (
              props.today &&
              "\n    border: 1px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary, ";\n  ")
            );
          }
        ),
        TxCalendar = function TxCalendar(_ref) {
          var value = _ref.value,
            onChange = _ref.onChange,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || new Date()),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            selectedDate = _useState2[0],
            setSelectedDate = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedDate),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState3,
              2
            ),
            currentMonth = _useState4[0],
            setCurrentMonth = _useState4[1],
            monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1),
            monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0),
            today = new Date(),
            isToday = function isToday(date) {
              return (
                date === today.getDate() &&
                currentMonth.getMonth() === today.getMonth() &&
                currentMonth.getFullYear() === today.getFullYear()
              );
            },
            isSelected = function isSelected(date) {
              return (
                date === selectedDate.getDate() &&
                currentMonth.getMonth() === selectedDate.getMonth() &&
                currentMonth.getFullYear() === selectedDate.getFullYear()
              );
            },
            days = (function getDaysInMonth() {
              for (var days = [], startDate = monthStart, endDate = monthEnd, i = 0; i < startDate.getDay(); i++)
                days.push(null);
              for (var _i = 1; _i <= endDate.getDate(); _i++) days.push(_i);
              return days;
            })();
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            CalendarContainer,
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
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CalendarHeader, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavButton, {
                        onClick: function prevMonth() {
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
                        },
                        children: "←",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(MonthYear, {
                        children: [
                          [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ][currentMonth.getMonth()],
                          " ",
                          currentMonth.getFullYear(),
                        ],
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavButton, {
                        onClick: function nextMonth() {
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
                        },
                        children: "→",
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CalendarGrid, {
                    children: [
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (day) {
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CalendarDay, { children: day }, day);
                      }),
                      days.map(function (date, index) {
                        return date
                          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              CalendarDate,
                              {
                                onClick: function onClick() {
                                  return (function handleDateClick(date) {
                                    var newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
                                    setSelectedDate(newDate), onChange && onChange(newDate);
                                  })(date);
                                },
                                selected: isSelected(date) ? 1 : 0,
                                today: isToday(date) ? 1 : 0,
                                children: date,
                              },
                              index
                            )
                          : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}, index);
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCalendar;
      TxCalendar.__docgenInfo = { description: "", methods: [], displayName: "TxCalendar" };
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
