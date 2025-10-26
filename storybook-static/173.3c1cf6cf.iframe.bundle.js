"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [173],
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
    "./src/stories/TxProgress.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Circle: () => Circle,
          CircleSizes: () => CircleSizes,
          CircleStatus: () => CircleStatus,
          CustomFormat: () => CustomFormat,
          Dynamic: () => Dynamic,
          HideInfo: () => HideInfo,
          MiniCircle: () => MiniCircle,
          Sizes: () => Sizes,
          Status: () => Status,
          Steps: () => Steps,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-progress/tx-progress.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxProgress",
        component: _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
          type: { control: { type: "select" }, options: ["line", "circle"] },
          size: { control: { type: "select" }, options: ["small", "default", "large"] },
          status: { control: { type: "select" }, options: ["normal", "success", "exception"] },
          showInfo: { control: "boolean" },
        },
      };
      var Basic = {
          args: { percent: 30 },
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  {},
                  args
                )
              ),
            });
          },
        },
        Sizes = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "400px", display: "flex", flexDirection: "column", gap: "24px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 50, size: "small" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 50, size: "default" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 50, size: "large" }
                ),
              ],
            });
          },
        },
        Status = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "400px", display: "flex", flexDirection: "column", gap: "16px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 30, status: "normal" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 100, status: "success" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 70, status: "exception" }
                ),
              ],
            });
          },
        },
        HideInfo = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "400px", display: "flex", flexDirection: "column", gap: "16px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 50, showInfo: !1 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 75 }
                ),
              ],
            });
          },
        },
        Dynamic = {
          render: function DynamicComponent() {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                _useState,
                2
              ),
              percent = _useState2[0],
              setPercent = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "400px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  style: { marginTop: "16px", display: "flex", gap: "8px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                      {
                        onClick: function decrease() {
                          setPercent(function (prev) {
                            return Math.max(prev - 10, 0);
                          });
                        },
                        children: "- 10",
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                      {
                        onClick: function increase() {
                          setPercent(function (prev) {
                            return Math.min(prev + 10, 100);
                          });
                        },
                        children: "+ 10",
                      }
                    ),
                  ],
                }),
              ],
            });
          },
        },
        Circle = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { display: "flex", gap: "24px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 30 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 70 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 100 }
                ),
              ],
            });
          },
        },
        CircleStatus = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { display: "flex", gap: "24px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 30 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 70, status: "exception" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 100, status: "success" }
                ),
              ],
            });
          },
        },
        CircleSizes = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { display: "flex", gap: "24px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 75, width: 80 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 75, width: 120 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 75, width: 160 }
                ),
              ],
            });
          },
        },
        Steps = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "400px", display: "flex", flexDirection: "column", gap: "24px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 50, steps: 5 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 70, steps: 10 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { percent: 100, steps: 8 }
                ),
              ],
            });
          },
        },
        CustomFormat = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { width: "400px", display: "flex", flexDirection: "column", gap: "16px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  {
                    percent: 75,
                    format: function format(percent) {
                      return "".concat(percent, "% Done");
                    },
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  {
                    percent: 100,
                    format: function format(percent) {
                      return "Completed ✓";
                    },
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  {
                    type: "circle",
                    percent: 85,
                    format: function format(percent) {
                      return "".concat(percent, "/100");
                    },
                  }
                ),
              ],
            });
          },
        },
        MiniCircle = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: { display: "flex", gap: "16px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 30, width: 60, strokeWidth: 8 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 50, width: 60, strokeWidth: 8 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 70, width: 60, strokeWidth: 8 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_progress_tx_progress__WEBPACK_IMPORTED_MODULE_2__.m,
                  { type: "circle", percent: 100, width: 60, strokeWidth: 8 }
                ),
              ],
            });
          },
        };
      const __namedExportsOrder = [
        "Basic",
        "Sizes",
        "Status",
        "HideInfo",
        "Dynamic",
        "Circle",
        "CircleStatus",
        "CircleSizes",
        "Steps",
        "CustomFormat",
        "MiniCircle",
      ];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    percent: 30\n  },\n  render: args => <div style={{\n    width: "400px"\n  }}>\n      <TxProgress {...args} />\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px"\n  }}>\n      <TxProgress percent={50} size="small" />\n      <TxProgress percent={50} size="default" />\n      <TxProgress percent={50} size="large" />\n    </div>\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Status.parameters = {
          ...Status.parameters,
          docs: {
            ...Status.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "16px"\n  }}>\n      <TxProgress percent={30} status="normal" />\n      <TxProgress percent={100} status="success" />\n      <TxProgress percent={70} status="exception" />\n    </div>\n}',
              ...Status.parameters?.docs?.source,
            },
          },
        }),
        (HideInfo.parameters = {
          ...HideInfo.parameters,
          docs: {
            ...HideInfo.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "16px"\n  }}>\n      <TxProgress percent={50} showInfo={false} />\n      <TxProgress percent={75} />\n    </div>\n}',
              ...HideInfo.parameters?.docs?.source,
            },
          },
        }),
        (Dynamic.parameters = {
          ...Dynamic.parameters,
          docs: {
            ...Dynamic.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function DynamicComponent() {\n    const [percent, setPercent] = useState(0);\n    const increase = () => {\n      setPercent(prev => Math.min(prev + 10, 100));\n    };\n    const decrease = () => {\n      setPercent(prev => Math.max(prev - 10, 0));\n    };\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxProgress percent={percent} />\n        <div style={{\n        marginTop: "16px",\n        display: "flex",\n        gap: "8px"\n      }}>\n          <TxButton onClick={decrease}>- 10</TxButton>\n          <TxButton onClick={increase}>+ 10</TxButton>\n        </div>\n      </div>;\n  }\n}',
              ...Dynamic.parameters?.docs?.source,
            },
          },
        }),
        (Circle.parameters = {
          ...Circle.parameters,
          docs: {
            ...Circle.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px"\n  }}>\n      <TxProgress type="circle" percent={30} />\n      <TxProgress type="circle" percent={70} />\n      <TxProgress type="circle" percent={100} />\n    </div>\n}',
              ...Circle.parameters?.docs?.source,
            },
          },
        }),
        (CircleStatus.parameters = {
          ...CircleStatus.parameters,
          docs: {
            ...CircleStatus.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px"\n  }}>\n      <TxProgress type="circle" percent={30} />\n      <TxProgress type="circle" percent={70} status="exception" />\n      <TxProgress type="circle" percent={100} status="success" />\n    </div>\n}',
              ...CircleStatus.parameters?.docs?.source,
            },
          },
        }),
        (CircleSizes.parameters = {
          ...CircleSizes.parameters,
          docs: {
            ...CircleSizes.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px",\n    alignItems: "center"\n  }}>\n      <TxProgress type="circle" percent={75} width={80} />\n      <TxProgress type="circle" percent={75} width={120} />\n      <TxProgress type="circle" percent={75} width={160} />\n    </div>\n}',
              ...CircleSizes.parameters?.docs?.source,
            },
          },
        }),
        (Steps.parameters = {
          ...Steps.parameters,
          docs: {
            ...Steps.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px"\n  }}>\n      <TxProgress percent={50} steps={5} />\n      <TxProgress percent={70} steps={10} />\n      <TxProgress percent={100} steps={8} />\n    </div>\n}',
              ...Steps.parameters?.docs?.source,
            },
          },
        }),
        (CustomFormat.parameters = {
          ...CustomFormat.parameters,
          docs: {
            ...CustomFormat.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "16px"\n  }}>\n      <TxProgress percent={75} format={percent => `${percent}% Done`} />\n      <TxProgress percent={100} format={percent => "Completed ✓"} />\n      <TxProgress type="circle" percent={85} format={percent => `${percent}/100`} />\n    </div>\n}',
              ...CustomFormat.parameters?.docs?.source,
            },
          },
        }),
        (MiniCircle.parameters = {
          ...MiniCircle.parameters,
          docs: {
            ...MiniCircle.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "16px",\n    alignItems: "center"\n  }}>\n      <TxProgress type="circle" percent={30} width={60} strokeWidth={8} />\n      <TxProgress type="circle" percent={50} width={60} strokeWidth={8} />\n      <TxProgress type="circle" percent={70} width={60} strokeWidth={8} />\n      <TxProgress type="circle" percent={100} width={60} strokeWidth={8} />\n    </div>\n}',
              ...MiniCircle.parameters?.docs?.source,
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
        icons = __webpack_require__("./src/assets/icons/index.js");
      __webpack_require__("./src/styles/shorten.scss");
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
        LoadingRotatingIcon = (0, styled_components_browser_esm.Ay)(icons.A.IconLoader01)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  animation: ", " 1s linear infinite;\n"])),
          rotate
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
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
    "./src/components/tx-progress/tx-progress.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => TxProgress });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        _templateObject12,
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
        ProgressWrapper = styled_components_browser_esm.Ay.div(
          _templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(["\n  width: 100%;\n"]))
        ),
        ProgressLine = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 12px;\n",
            ]))
        ),
        ProgressTrack = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  height: ",
              ";\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  overflow: hidden;\n  position: relative;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "6px";
              case "large":
                return "12px";
              default:
                return "8px";
            }
          },
          colors.A.bgFillLight,
          function (props) {
            switch (props.size) {
              case "small":
                return "3px";
              case "large":
                return "6px";
              default:
                return "4px";
            }
          }
        ),
        ProgressBar = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  height: 100%;\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  width: ",
              "%;\n  transition: width 0.3s ease;\n  position: relative;\n\n  ",
              "\n",
            ])),
          function (props) {
            return "exception" === props.status
              ? colors.A.danger[500]
              : "success" === props.status
              ? colors.A.success[500]
              : colors.A.primary[500];
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "3px";
              case "large":
                return "6px";
              default:
                return "4px";
            }
          },
          function (props) {
            return props.percent;
          },
          function (props) {
            return (
              props.showInfo &&
              props.format &&
              '\n    &::after {\n      content: "'.concat(
                props.format,
                '";\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      transform: translateY(-50%);\n      color: white;\n      font-size: 12px;\n      font-weight: 600;\n    }\n  '
              )
            );
          }
        ),
        ProgressText = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  min-width: 40px;\n  text-align: right;\n  font-weight: 500;\n\n  ",
              "\n\n  ",
              "\n\n  svg {\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n  }\n",
            ])),
          colors.A.textPrimary,
          function (props) {
            return "exception" === props.status && "\n    color: ".concat(colors.A.danger[500], ";\n  ");
          },
          function (props) {
            return "success" === props.status && "\n    color: ".concat(colors.A.success[500], ";\n  ");
          }
        ),
        ProgressCircle = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  width: ",
              "px;\n  height: ",
              "px;\n",
            ])),
          function (props) {
            return props.width;
          },
          function (props) {
            return props.width;
          }
        ),
        ProgressCircleSvg = styled_components_browser_esm.Ay.svg(
          _templateObject7 || (_templateObject7 = (0, taggedTemplateLiteral.A)(["\n  transform: rotate(-90deg);\n"]))
        ),
        ProgressCircleTrack = styled_components_browser_esm.Ay.circle(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  fill: none;\n  stroke: ",
              ";\n  stroke-width: ",
              ";\n",
            ])),
          colors.A.bgFillLight,
          function (props) {
            return props.strokeWidth;
          }
        ),
        ProgressCirclePath = styled_components_browser_esm.Ay.circle(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  fill: none;\n  stroke: ",
              ";\n  stroke-width: ",
              ";\n  stroke-linecap: round;\n  stroke-dasharray: ",
              ";\n  stroke-dashoffset: ",
              ";\n  transition: stroke-dashoffset 0.3s ease;\n",
            ])),
          function (props) {
            return "exception" === props.status
              ? colors.A.danger[500]
              : "success" === props.status
              ? colors.A.success[500]
              : colors.A.primary[500];
          },
          function (props) {
            return props.strokeWidth;
          },
          function (props) {
            return props.circumference;
          },
          function (props) {
            return props.offset;
          }
        ),
        ProgressCircleText = styled_components_browser_esm.Ay.div(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: ",
              ";\n  font-weight: 600;\n  color: ",
              ";\n  text-align: center;\n  line-height: 1;\n\n  ",
              "\n\n  ",
              "\n\n  svg {\n    width: ",
              ";\n    height: ",
              ";\n  }\n",
            ])),
          function (props) {
            return props.width < 80 ? "12px" : "16px";
          },
          colors.A.textPrimary,
          function (props) {
            return "exception" === props.status && "\n    color: ".concat(colors.A.danger[500], ";\n  ");
          },
          function (props) {
            return "success" === props.status && "\n    color: ".concat(colors.A.success[500], ";\n  ");
          },
          function (props) {
            return props.width < 80 ? "16px" : "24px";
          },
          function (props) {
            return props.width < 80 ? "16px" : "24px";
          }
        ),
        ProgressSteps = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 8px;\n  align-items: center;\n",
            ]))
        ),
        ProgressStep = styled_components_browser_esm.Ay.div(
          _templateObject12 ||
            (_templateObject12 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  height: ",
              ";\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  transition: background-color 0.3s ease;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "6px";
              case "large":
                return "12px";
              default:
                return "8px";
            }
          },
          function (props) {
            return props.active
              ? "exception" === props.status
                ? colors.A.danger[500]
                : "success" === props.status
                ? colors.A.success[500]
                : colors.A.primary[500]
              : colors.A.bgFillLight;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "3px";
              case "large":
                return "6px";
              default:
                return "4px";
            }
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "percent",
          "type",
          "size",
          "status",
          "showInfo",
          "strokeWidth",
          "width",
          "steps",
          "format",
          "className",
        ],
        TxProgress = function TxProgress(_ref) {
          var _ref$percent = _ref.percent,
            percent = void 0 === _ref$percent ? 0 : _ref$percent,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? "line" : _ref$type,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "default" : _ref$size,
            _ref$status = _ref.status,
            status = void 0 === _ref$status ? "normal" : _ref$status,
            _ref$showInfo = _ref.showInfo,
            showInfo = void 0 === _ref$showInfo || _ref$showInfo,
            strokeWidth = _ref.strokeWidth,
            _ref$width = _ref.width,
            width = void 0 === _ref$width ? 120 : _ref$width,
            _ref$steps = _ref.steps,
            steps = void 0 === _ref$steps ? 0 : _ref$steps,
            format = _ref.format,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            normalizedPercent = Math.min(Math.max(percent, 0), 100),
            actualStatus = percent >= 100 && "normal" === status ? "success" : status,
            displayFormat =
              format ||
              function defaultFormat(pct) {
                return "exception" === actualStatus
                  ? (0, jsx_runtime.jsxs)("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                        (0, jsx_runtime.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
                        (0, jsx_runtime.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
                      ],
                    })
                  : "success" === actualStatus
                  ? (0, jsx_runtime.jsxs)("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                        (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                      ],
                    })
                  : "".concat(Math.round(pct), "%");
              };
          if ("circle" === type) {
            var actualStrokeWidth = (function getDefaultStrokeWidth() {
                if (strokeWidth) return strokeWidth;
                if ("circle" === type) return 6;
                switch (size) {
                  case "small":
                    return 4;
                  case "large":
                    return 8;
                  default:
                    return 6;
                }
              })(),
              radius = (width - actualStrokeWidth) / 2,
              circumference = 2 * Math.PI * radius,
              offset = circumference - (normalizedPercent / 100) * circumference;
            return (0, jsx_runtime.jsxs)(
              ProgressCircle,
              (0, objectSpread2.A)(
                (0, objectSpread2.A)({ width, className }, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsxs)(ProgressCircleSvg, {
                      width,
                      height: width,
                      children: [
                        (0, jsx_runtime.jsx)(ProgressCircleTrack, {
                          cx: width / 2,
                          cy: width / 2,
                          r: radius,
                          strokeWidth: actualStrokeWidth,
                        }),
                        (0, jsx_runtime.jsx)(ProgressCirclePath, {
                          cx: width / 2,
                          cy: width / 2,
                          r: radius,
                          strokeWidth: actualStrokeWidth,
                          circumference,
                          offset,
                          status: actualStatus,
                        }),
                      ],
                    }),
                    showInfo &&
                      (0, jsx_runtime.jsx)(ProgressCircleText, {
                        width,
                        status: actualStatus,
                        children: displayFormat(normalizedPercent),
                      }),
                  ],
                }
              )
            );
          }
          if (steps > 0) {
            var activeSteps = Math.round((normalizedPercent / 100) * steps);
            return (0, jsx_runtime.jsxs)(
              ProgressWrapper,
              (0, objectSpread2.A)(
                (0, objectSpread2.A)({ className }, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsx)(ProgressSteps, {
                      children: Array.from({ length: steps }).map(function (_, index) {
                        return (0,
                        jsx_runtime.jsx)(ProgressStep, { active: index < activeSteps, size, status: actualStatus }, index);
                      }),
                    }),
                    showInfo &&
                      (0, jsx_runtime.jsx)(ProgressText, {
                        status: actualStatus,
                        style: { marginTop: "8px" },
                        children: displayFormat(normalizedPercent),
                      }),
                  ],
                }
              )
            );
          }
          return (0, jsx_runtime.jsx)(
            ProgressWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ className }, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(ProgressLine, {
                  children: [
                    (0, jsx_runtime.jsx)(ProgressTrack, {
                      size,
                      children: (0, jsx_runtime.jsx)(ProgressBar, {
                        percent: normalizedPercent,
                        size,
                        status: actualStatus,
                        showInfo: showInfo && "string" == typeof displayFormat(normalizedPercent),
                        format:
                          showInfo && "string" == typeof displayFormat(normalizedPercent)
                            ? displayFormat(normalizedPercent)
                            : null,
                      }),
                    }),
                    showInfo &&
                      (0, jsx_runtime.jsx)(ProgressText, {
                        status: actualStatus,
                        children: displayFormat(normalizedPercent),
                      }),
                  ],
                }),
              }
            )
          );
        };
      (TxProgress.defaultProps = {
        percent: 0,
        type: "line",
        size: "default",
        status: "normal",
        showInfo: !0,
        strokeWidth: void 0,
        width: 120,
        steps: 0,
        format: void 0,
        className: "",
      }),
        (TxProgress.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxProgress",
          props: {
            percent: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            type: {
              defaultValue: { value: '"line"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"line"', computed: !1 },
                  { value: '"circle"', computed: !1 },
                ],
              },
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
            status: {
              defaultValue: { value: '"normal"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"normal"', computed: !1 },
                  { value: '"success"', computed: !1 },
                  { value: '"exception"', computed: !1 },
                ],
              },
              required: !1,
            },
            showInfo: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            width: {
              defaultValue: { value: "120", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            steps: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            strokeWidth: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            format: {
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
