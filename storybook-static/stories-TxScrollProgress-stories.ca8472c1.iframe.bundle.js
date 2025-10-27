"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9469],
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
    "./src/stories/TxScrollProgress.stories.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Fixed: () => Fixed,
          Sticky: () => Sticky,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_scroll_progress_tx_scroll_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-scroll-progress/tx-scroll-progress.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxScrollProgress",
        component: _components_tx_scroll_progress_tx_scroll_progress__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "fullscreen" },
        tags: ["autodocs"],
      };
      var Fixed = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_scroll_progress_tx_scroll_progress__WEBPACK_IMPORTED_MODULE_0__.A,
                  { fixed: !0 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  style: { padding: "40px" },
                  children: Array.from({ length: 30 }).map(function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", { children: ["Scroll down to see the progress bar at the top of the page. This is paragraph ", i + 1, ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."] }, i);
                  }),
                }),
              ],
            });
          },
        },
        Sticky = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_scroll_progress_tx_scroll_progress__WEBPACK_IMPORTED_MODULE_0__.A,
                  { fixed: !1, top: "64px" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  style: { padding: "40px" },
                  children: Array.from({ length: 30 }).map(function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", { children: ["This is a sticky progress bar. This is paragraph ", i + 1, ". Lorem ipsum dolor sit amet, consectetur adipiscing elit."] }, i);
                  }),
                }),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Fixed", "Sticky"];
      (Fixed.parameters = {
        ...Fixed.parameters,
        docs: {
          ...Fixed.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div>\n      <TxScrollProgress fixed />\n      <div style={{\n      padding: "40px"\n    }}>\n        {Array.from({\n        length: 30\n      }).map((_, i) => <p key={i}>\n            Scroll down to see the progress bar at the top of the page. This is paragraph {i + 1}. Lorem ipsum dolor sit\n            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          </p>)}\n      </div>\n    </div>\n}',
            ...Fixed.parameters?.docs?.source,
          },
        },
      }),
        (Sticky.parameters = {
          ...Sticky.parameters,
          docs: {
            ...Sticky.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div>\n      <TxScrollProgress fixed={false} top="64px" />\n      <div style={{\n      padding: "40px"\n    }}>\n        {Array.from({\n        length: 30\n      }).map((_, i) => <p key={i}>\n            This is a sticky progress bar. This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit.\n          </p>)}\n      </div>\n    </div>\n}',
              ...Sticky.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-scroll-progress/tx-scroll-progress.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["fixed", "top", "height"],
        ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: ",
                ";\n  top: ",
                ";\n  left: 0;\n  right: 0;\n  height: ",
                ";\n  background: ",
                ";\n  z-index: 1000;\n",
              ]
            )),
          function (props) {
            return props.fixed ? "fixed" : "sticky";
          },
          function (props) {
            return props.top || "0";
          },
          function (props) {
            return props.height || "4px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        ProgressFill = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  height: 100%;\n  width: ", "%;\n  background: ", ";\n  transition: width 0.1s linear;\n"]
            )),
          function (props) {
            return props.progress;
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
        ),
        TxScrollProgress = function TxScrollProgress(_ref) {
          var _ref$fixed = _ref.fixed,
            fixed = void 0 === _ref$fixed || _ref$fixed,
            _ref$top = _ref.top,
            top = void 0 === _ref$top ? "0" : _ref$top,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "4px" : _ref$height,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            progress = _useState2[0],
            setProgress = _useState2[1];
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
              var handleScroll = function handleScroll() {
                var windowHeight = window.innerHeight,
                  documentHeight = document.documentElement.scrollHeight,
                  scrollPercent = (window.scrollY / (documentHeight - windowHeight)) * 100;
                setProgress(Math.min(100, Math.max(0, scrollPercent)));
              };
              return (
                window.addEventListener("scroll", handleScroll),
                function () {
                  return window.removeEventListener("scroll", handleScroll);
                }
              );
            }, []),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              ProgressBar,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                  { fixed: fixed ? 1 : 0, top, height },
                  props
                ),
                {},
                { children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProgressFill, { progress }) }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxScrollProgress;
      TxScrollProgress.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxScrollProgress",
        props: {
          fixed: { defaultValue: { value: "true", computed: !1 }, required: !1 },
          top: { defaultValue: { value: '"0"', computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"4px"', computed: !1 }, required: !1 },
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
