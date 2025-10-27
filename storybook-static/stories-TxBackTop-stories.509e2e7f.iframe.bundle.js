"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [4167],
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
    "./src/stories/TxBackTop.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CustomPosition: () => CustomPosition,
          CustomVisibilityHeight: () => CustomVisibilityHeight,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_back_top_tx_back_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-back-top/tx-back-top.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Other/TxBackTop",
        component: _components_tx_back_top_tx_back_top__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "fullscreen" },
        tags: ["autodocs"],
        argTypes: { visibilityHeight: { control: "number" }, right: { control: "text" }, bottom: { control: "text" } },
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { minHeight: "200vh", padding: "48px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
                  children: "Scroll down to see the BackTop button",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  style: { marginTop: "24px", lineHeight: "1.8" },
                  children: "This is a long page. Please scroll down to see the BackTop button appear.",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  style: { marginTop: "48px" },
                  children: Array.from({ length: 20 }, function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", { style: { marginBottom: "32px", padding: "16px", background: "#f5f5f5", borderRadius: "8px" }, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", { children: ["Section ", i + 1] }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." })] }, i);
                  }),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_back_top_tx_back_top__WEBPACK_IMPORTED_MODULE_0__.A,
                  { visibilityHeight: 400 }
                ),
              ],
            });
          },
        },
        CustomPosition = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { minHeight: "200vh", padding: "48px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
                  children: "BackTop with custom position",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  style: { marginTop: "24px", lineHeight: "1.8" },
                  children: "This BackTop button has been positioned at the top-right instead of bottom-right.",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  style: { marginTop: "48px" },
                  children: Array.from({ length: 15 }, function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", { style: { marginBottom: "32px", padding: "16px", background: "#f5f5f5", borderRadius: "8px" }, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", { children: ["Section ", i + 1] }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Scroll down to see the button appear." })] }, i);
                  }),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_back_top_tx_back_top__WEBPACK_IMPORTED_MODULE_0__.A,
                  { visibilityHeight: 400, right: "24px", bottom: "24px" }
                ),
              ],
            });
          },
        },
        CustomVisibilityHeight = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: { minHeight: "200vh", padding: "48px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", { children: "Custom visibility height" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  style: { marginTop: "24px", lineHeight: "1.8" },
                  children: "This BackTop button will appear after scrolling down only 200px (default is 400px).",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  style: { marginTop: "48px" },
                  children: Array.from({ length: 10 }, function (_, i) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", { style: { marginBottom: "32px", padding: "16px", background: "#f5f5f5", borderRadius: "8px" }, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", { children: ["Section ", i + 1] }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", { children: "Scroll down just a bit to see the button appear faster." })] }, i);
                  }),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components_tx_back_top_tx_back_top__WEBPACK_IMPORTED_MODULE_0__.A,
                  { visibilityHeight: 200 }
                ),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Basic", "CustomPosition", "CustomVisibilityHeight"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    minHeight: "200vh",\n    padding: "48px"\n  }}>\n      <h1>Scroll down to see the BackTop button</h1>\n      <p style={{\n      marginTop: "24px",\n      lineHeight: "1.8"\n    }}>\n        This is a long page. Please scroll down to see the BackTop button appear.\n      </p>\n      <div style={{\n      marginTop: "48px"\n    }}>\n        {Array.from({\n        length: 20\n      }, (_, i) => <div key={i} style={{\n        marginBottom: "32px",\n        padding: "16px",\n        background: "#f5f5f5",\n        borderRadius: "8px"\n      }}>\n            <h2>Section {i + 1}</h2>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n            </p>\n          </div>)}\n      </div>\n      <TxBackTop visibilityHeight={400} />\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (CustomPosition.parameters = {
          ...CustomPosition.parameters,
          docs: {
            ...CustomPosition.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    minHeight: "200vh",\n    padding: "48px"\n  }}>\n      <h1>BackTop with custom position</h1>\n      <p style={{\n      marginTop: "24px",\n      lineHeight: "1.8"\n    }}>\n        This BackTop button has been positioned at the top-right instead of bottom-right.\n      </p>\n      <div style={{\n      marginTop: "48px"\n    }}>\n        {Array.from({\n        length: 15\n      }, (_, i) => <div key={i} style={{\n        marginBottom: "32px",\n        padding: "16px",\n        background: "#f5f5f5",\n        borderRadius: "8px"\n      }}>\n            <h2>Section {i + 1}</h2>\n            <p>Scroll down to see the button appear.</p>\n          </div>)}\n      </div>\n      <TxBackTop visibilityHeight={400} right="24px" bottom="24px" />\n    </div>\n}',
              ...CustomPosition.parameters?.docs?.source,
            },
          },
        }),
        (CustomVisibilityHeight.parameters = {
          ...CustomVisibilityHeight.parameters,
          docs: {
            ...CustomVisibilityHeight.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    minHeight: "200vh",\n    padding: "48px"\n  }}>\n      <h1>Custom visibility height</h1>\n      <p style={{\n      marginTop: "24px",\n      lineHeight: "1.8"\n    }}>\n        This BackTop button will appear after scrolling down only 200px (default is 400px).\n      </p>\n      <div style={{\n      marginTop: "48px"\n    }}>\n        {Array.from({\n        length: 10\n      }, (_, i) => <div key={i} style={{\n        marginBottom: "32px",\n        padding: "16px",\n        background: "#f5f5f5",\n        borderRadius: "8px"\n      }}>\n            <h2>Section {i + 1}</h2>\n            <p>Scroll down just a bit to see the button appear faster.</p>\n          </div>)}\n      </div>\n      <TxBackTop visibilityHeight={200} />\n    </div>\n}',
              ...CustomVisibilityHeight.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-back-top/tx-back-top.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_back_top });
      var _templateObject,
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        BackTopButton = styled_components_browser_esm.Ay.button(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  right: ",
              ";\n  bottom: ",
              ";\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
              ";\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 188, 255, 0.4);\n  transition: all 0.3s;\n  z-index: 1000;\n  opacity: ",
              ";\n  pointer-events: ",
              ";\n\n  &:hover {\n    background-color: ",
              ";\n    box-shadow: 0 6px 16px rgba(0, 188, 255, 0.5);\n    transform: translateY(-4px);\n  }\n\n  &:active {\n    transform: translateY(-2px);\n  }\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n",
            ])),
          function (props) {
            return props.right || "48px";
          },
          function (props) {
            return props.bottom || "48px";
          },
          colors.A.primary,
          function (props) {
            return props.visible ? 1 : 0;
          },
          function (props) {
            return props.visible ? "auto" : "none";
          },
          colors.A.primaryDark
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        TxBackTop = function TxBackTop(_ref) {
          var _ref$visibilityHeight = _ref.visibilityHeight,
            visibilityHeight = void 0 === _ref$visibilityHeight ? 400 : _ref$visibilityHeight,
            right = _ref.right,
            bottom = _ref.bottom,
            onClick = _ref.onClick,
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          (0, react.useEffect)(
            function () {
              var toggleVisible = function toggleVisible() {
                var scrolled = document.documentElement.scrollTop;
                setVisible(scrolled > visibilityHeight);
              };
              return (
                window.addEventListener("scroll", toggleVisible),
                function () {
                  window.removeEventListener("scroll", toggleVisible);
                }
              );
            },
            [visibilityHeight]
          );
          return (0, jsx_runtime.jsx)(BackTopButton, {
            visible,
            right,
            bottom,
            onClick: function scrollToTop() {
              window.scrollTo({ top: 0, behavior: "smooth" }), onClick && onClick();
            },
            "aria-label": "Back to top",
            children: (0, jsx_runtime.jsxs)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [
                (0, jsx_runtime.jsx)("polyline", { points: "5 10 12 3 19 10" }),
                (0, jsx_runtime.jsx)("path", { d: "M12 3v22" }),
              ],
            }),
          });
        };
      const tx_back_top = TxBackTop;
      TxBackTop.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxBackTop",
        props: {
          visibilityHeight: {
            defaultValue: { value: "400", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          right: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          bottom: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          onClick: { description: "", type: { name: "func" }, required: !1 },
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
