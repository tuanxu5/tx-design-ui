"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [41],
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
    "./src/stories/TxMessage.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Closable: () => Closable,
          CustomDuration: () => CustomDuration,
          LongContent: () => LongContent,
          MultipleMessages: () => MultipleMessages,
          WithDescription: () => WithDescription,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-message/tx-message.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxMessage",
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "12px", flexWrap: "wrap" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.info(
                        "This is an info message"
                      );
                    },
                    children: "Info",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.success(
                        "This is a success message"
                      );
                    },
                    children: "Success",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.warning(
                        "This is a warning message"
                      );
                    },
                    children: "Warning",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.error(
                        "This is an error message"
                      );
                    },
                    children: "Error",
                  }
                ),
              ],
            });
          },
        },
        WithDescription = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "12px", flexWrap: "wrap" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.open({
                        type: "success",
                        content: "Success!",
                        description: "Your operation has been completed successfully.",
                      });
                    },
                    children: "Success with Description",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.open({
                        type: "error",
                        content: "Error Occurred",
                        description: "Something went wrong. Please try again later.",
                      });
                    },
                    children: "Error with Description",
                  }
                ),
              ],
            });
          },
        },
        CustomDuration = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "12px", flexWrap: "wrap" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.info("1 second", 1e3);
                    },
                    children: "1 Second",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.info("3 seconds", 3e3);
                    },
                    children: "3 Seconds",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.info("5 seconds", 5e3);
                    },
                    children: "5 Seconds",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.open({
                        type: "info",
                        content: "Won't auto close",
                        duration: 0,
                        closable: !0,
                      });
                    },
                    children: "No Auto Close",
                  }
                ),
              ],
            });
          },
        },
        Closable = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { display: "flex", gap: "12px", flexWrap: "wrap" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                {
                  onClick: function onClick() {
                    return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.open({
                      type: "info",
                      content: "This message can be closed manually",
                      closable: !0,
                      duration: 0,
                    });
                  },
                  children: "Show Closable Message",
                }
              ),
            });
          },
        },
        MultipleMessages = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "12px", flexDirection: "column" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.success("First message"),
                        setTimeout(function () {
                          return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.info(
                            "Second message"
                          );
                        }, 300),
                        setTimeout(function () {
                          return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.warning(
                            "Third message"
                          );
                        }, 600);
                    },
                    children: "Show Multiple Messages",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
                  {
                    onClick: function onClick() {
                      return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.destroy();
                    },
                    children: "Clear All Messages",
                  }
                ),
              ],
            });
          },
        },
        LongContent = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.TxButton,
              {
                onClick: function onClick() {
                  return _components_tx_message_tx_message__WEBPACK_IMPORTED_MODULE_1__.k.open({
                    type: "info",
                    content: "Long Message Title",
                    description:
                      "This is a very long message description that demonstrates how the message component handles longer content. It should wrap properly and maintain good readability.",
                    duration: 5e3,
                    closable: !0,
                  });
                },
                children: "Show Long Message",
              }
            );
          },
        };
      const __namedExportsOrder = [
        "Basic",
        "WithDescription",
        "CustomDuration",
        "Closable",
        "MultipleMessages",
        "LongContent",
      ];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "12px",\n    flexWrap: "wrap"\n  }}>\n      <TxButton onClick={() => TxMessage.info("This is an info message")}>Info</TxButton>\n      <TxButton onClick={() => TxMessage.success("This is a success message")}>Success</TxButton>\n      <TxButton onClick={() => TxMessage.warning("This is a warning message")}>Warning</TxButton>\n      <TxButton onClick={() => TxMessage.error("This is an error message")}>Error</TxButton>\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (WithDescription.parameters = {
          ...WithDescription.parameters,
          docs: {
            ...WithDescription.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "12px",\n    flexWrap: "wrap"\n  }}>\n      <TxButton onClick={() => TxMessage.open({\n      type: "success",\n      content: "Success!",\n      description: "Your operation has been completed successfully."\n    })}>\n        Success with Description\n      </TxButton>\n      <TxButton onClick={() => TxMessage.open({\n      type: "error",\n      content: "Error Occurred",\n      description: "Something went wrong. Please try again later."\n    })}>\n        Error with Description\n      </TxButton>\n    </div>\n}',
              ...WithDescription.parameters?.docs?.source,
            },
          },
        }),
        (CustomDuration.parameters = {
          ...CustomDuration.parameters,
          docs: {
            ...CustomDuration.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "12px",\n    flexWrap: "wrap"\n  }}>\n      <TxButton onClick={() => TxMessage.info("1 second", 1000)}>1 Second</TxButton>\n      <TxButton onClick={() => TxMessage.info("3 seconds", 3000)}>3 Seconds</TxButton>\n      <TxButton onClick={() => TxMessage.info("5 seconds", 5000)}>5 Seconds</TxButton>\n      <TxButton onClick={() => TxMessage.open({\n      type: "info",\n      content: "Won\'t auto close",\n      duration: 0,\n      closable: true\n    })}>\n        No Auto Close\n      </TxButton>\n    </div>\n}',
              ...CustomDuration.parameters?.docs?.source,
            },
          },
        }),
        (Closable.parameters = {
          ...Closable.parameters,
          docs: {
            ...Closable.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "12px",\n    flexWrap: "wrap"\n  }}>\n      <TxButton onClick={() => TxMessage.open({\n      type: "info",\n      content: "This message can be closed manually",\n      closable: true,\n      duration: 0\n    })}>\n        Show Closable Message\n      </TxButton>\n    </div>\n}',
              ...Closable.parameters?.docs?.source,
            },
          },
        }),
        (MultipleMessages.parameters = {
          ...MultipleMessages.parameters,
          docs: {
            ...MultipleMessages.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "12px",\n    flexDirection: "column"\n  }}>\n      <TxButton onClick={() => {\n      TxMessage.success("First message");\n      setTimeout(() => TxMessage.info("Second message"), 300);\n      setTimeout(() => TxMessage.warning("Third message"), 600);\n    }}>\n        Show Multiple Messages\n      </TxButton>\n      <TxButton onClick={() => TxMessage.destroy()}>Clear All Messages</TxButton>\n    </div>\n}',
              ...MultipleMessages.parameters?.docs?.source,
            },
          },
        }),
        (LongContent.parameters = {
          ...LongContent.parameters,
          docs: {
            ...LongContent.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <TxButton onClick={() => TxMessage.open({\n    type: "info",\n    content: "Long Message Title",\n    description: "This is a very long message description that demonstrates how the message component handles longer content. It should wrap properly and maintain good readability.",\n    duration: 5000,\n    closable: true\n  })}>\n      Show Long Message\n    </TxButton>\n}',
              ...LongContent.parameters?.docs?.source,
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
    "./src/components/tx-message/tx-message.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { k: () => TxMessage });
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
        react = __webpack_require__("./node_modules/react/index.js"),
        client = __webpack_require__("./node_modules/react-dom/client.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        slideDown = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n",
            ]))
        ),
        slideUp = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n",
            ]))
        ),
        MessageContainer = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  pointer-events: none;\n",
            ]))
        ),
        MessageWrapper = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 300px;\n  max-width: 500px;\n  pointer-events: auto;\n  animation: ",
              " 0.3s ease;\n\n  ",
              "\n",
            ])),
          function (props) {
            return props.isClosing ? slideUp : slideDown;
          },
          function (props) {
            switch (props.type) {
              case "success":
                return "border-left: 4px solid ".concat(colors.A.success[500], ";");
              case "error":
                return "border-left: 4px solid ".concat(colors.A.danger[500], ";");
              case "warning":
                return "border-left: 4px solid ".concat(colors.A.warning[500], ";");
              case "info":
                return "border-left: 4px solid ".concat(colors.A.info[500], ";");
              default:
                return "border-left: 4px solid ".concat(colors.A.primary[500], ";");
            }
          }
        ),
        MessageIcon = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n\n  ",
              "\n",
            ])),
          function (props) {
            switch (props.type) {
              case "success":
                return "color: ".concat(colors.A.success[500], ";");
              case "error":
                return "color: ".concat(colors.A.danger[500], ";");
              case "warning":
                return "color: ".concat(colors.A.warning[500], ";");
              case "info":
                return "color: ".concat(colors.A.info[500], ";");
              default:
                return "color: ".concat(colors.A.primary[500], ";");
            }
          }
        ),
        MessageContent = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n",
            ]))
        ),
        MessageTitle = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 600;\n  color: ",
              ";\n  line-height: 1.4;\n",
            ])),
          colors.A.textPrimary
        ),
        MessageDescription = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 13px;\n  color: ",
              ";\n  line-height: 1.4;\n  font-weight: 400;\n",
            ])),
          colors.A.textSecondary
        ),
        MessageClose = styled_components_browser_esm.Ay.button(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
              ";\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: ",
              ";\n    transform: scale(1.1);\n  }\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.textPrimary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        MessageComponent = function MessageComponent(_ref) {
          var type = _ref.type,
            content = _ref.content,
            description = _ref.description,
            duration = _ref.duration,
            onClose = _ref.onClose,
            closable = _ref.closable,
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            isClosing = _useState2[0],
            setIsClosing = _useState2[1];
          (0, react.useEffect)(
            function () {
              if (duration > 0) {
                var timer = setTimeout(function () {
                  handleClose();
                }, duration);
                return function () {
                  return clearTimeout(timer);
                };
              }
            },
            [duration]
          );
          var handleClose = function handleClose() {
            setIsClosing(!0),
              setTimeout(function () {
                onClose && onClose();
              }, 300);
          };
          return (0, jsx_runtime.jsxs)(MessageWrapper, {
            type,
            isClosing,
            children: [
              (0, jsx_runtime.jsx)(MessageIcon, {
                type,
                children: (function getIcon() {
                  switch (type) {
                    case "success":
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                          (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                        ],
                      });
                    case "error":
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                          (0, jsx_runtime.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
                          (0, jsx_runtime.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
                        ],
                      });
                    case "warning":
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("path", {
                            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                          }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
                        ],
                      });
                    default:
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                        ],
                      });
                  }
                })(),
              }),
              (0, jsx_runtime.jsxs)(MessageContent, {
                children: [
                  content && (0, jsx_runtime.jsx)(MessageTitle, { children: content }),
                  description && (0, jsx_runtime.jsx)(MessageDescription, { children: description }),
                ],
              }),
              closable &&
                (0, jsx_runtime.jsx)(MessageClose, {
                  onClick: handleClose,
                  children: (0, jsx_runtime.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                      (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                    ],
                  }),
                }),
            ],
          });
        },
        messageContainer = null,
        messagesRoot = null,
        messages = [],
        renderMessages = function renderMessages() {
          messagesRoot &&
            messagesRoot.render(
              (0, jsx_runtime.jsx)(MessageContainer, {
                children: messages.map(function (msg) {
                  return (0, jsx_runtime.jsx)(MessageComponent, (0, objectSpread2.A)({}, msg), msg.key);
                }),
              })
            );
        },
        _open = function open(config) {
          !(function getContainer() {
            messageContainer ||
              ((messageContainer = document.createElement("div")),
              document.body.appendChild(messageContainer),
              (messagesRoot = (0, client.H)(messageContainer)));
          })();
          var key = Date.now(),
            message = {
              key,
              type: config.type || "info",
              content: config.content,
              description: config.description,
              duration: void 0 !== config.duration ? config.duration : 3e3,
              closable: void 0 !== config.closable && config.closable,
              onClose: function onClose() {
                var index = messages.findIndex(function (m) {
                  return m.key === key;
                });
                index > -1 && (messages.splice(index, 1), renderMessages(), config.onClose && config.onClose());
              },
            };
          messages.push(message), renderMessages();
        },
        TxMessage = {
          success: function success(content) {
            _open({
              type: "success",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          error: function error(content) {
            _open({
              type: "error",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          warning: function warning(content) {
            _open({
              type: "warning",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          info: function info(content) {
            _open({
              type: "info",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          open: function open(config) {
            _open(config);
          },
          destroy: function destroy() {
            (messages.length = 0), renderMessages();
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
    "./node_modules/react-dom/client.js": (__unused_webpack_module, exports, __webpack_require__) => {
      var m = __webpack_require__("./node_modules/react-dom/index.js");
      (exports.H = m.createRoot), m.hydrateRoot;
    },
  },
]);
