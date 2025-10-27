"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [3233],
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
    "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _iterableToArray(r) {
        if (("undefined" != typeof Symbol && null != r[Symbol.iterator]) || null != r["@@iterator"])
          return Array.from(r);
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _iterableToArray });
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
    "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _toConsumableArray });
      var arrayLikeToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");
      var iterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"),
        unsupportedIterableToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
        );
      function _toConsumableArray(r) {
        return (
          (function _arrayWithoutHoles(r) {
            if (Array.isArray(r)) return (0, arrayLikeToArray.A)(r);
          })(r) ||
          (0, iterableToArray.A)(r) ||
          (0, unsupportedIterableToArray.A)(r) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
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
    "./src/stories/TxNotification.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          Preview: () => Preview,
          Types: () => Types,
          WithoutDescription: () => WithoutDescription,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_notification_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-notification/styled.js"
        ),
        _components_tx_notification_tx_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/components/tx-notification/tx-notification.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxNotification",
        component: _components_tx_notification_tx_notification__WEBPACK_IMPORTED_MODULE_3__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          type: { control: "select", options: ["success", "info", "warning", "error"] },
          title: { control: "text" },
          description: { control: "text" },
          closable: { control: "boolean" },
          duration: { control: "number" },
          onClose: { action: "closed" },
        },
      };
      var Preview = {
          args: {
            type: "info",
            title: "Notification Title",
            description: "This is the notification description.",
            closable: !0,
            duration: 0,
          },
        },
        BasicUsage = function BasicUsage() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _useState,
              2
            ),
            show = _useState2[0],
            setShow = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    onClick: function onClick() {
                      return setShow(!0);
                    },
                    children: "Show Notification",
                  }
                ),
                show &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _components_tx_notification_styled__WEBPACK_IMPORTED_MODULE_2__.qG,
                    {
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        _components_tx_notification_tx_notification__WEBPACK_IMPORTED_MODULE_3__.A,
                        {
                          type: "info",
                          title: "Notification",
                          description: "This is a notification message.",
                          onClose: function onClose() {
                            return setShow(!1);
                          },
                          duration: 0,
                        }
                      ),
                    }
                  ),
              ],
            }
          );
        },
        Types = function Types() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _useState3,
              2
            ),
            notifications = _useState4[0],
            setNotifications = _useState4[1],
            showNotification = function showNotification(type) {
              var id = Date.now(),
                newNotification = (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                  { id, type },
                  {
                    success: { title: "Success", description: "Operation completed successfully!" },
                    info: { title: "Info", description: "This is an information message." },
                    warning: { title: "Warning", description: "Please be careful with this action." },
                    error: { title: "Error", description: "Something went wrong!" },
                  }[type]
                );
              setNotifications(function (prev) {
                return [].concat(
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                    prev
                  ),
                  [newNotification]
                );
              }),
                setTimeout(function () {
                  setNotifications(function (prev) {
                    return prev.filter(function (n) {
                      return n.id !== id;
                    });
                  });
                }, 4500);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  style: { display: "flex", gap: "12px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                      {
                        type: "success",
                        onClick: function onClick() {
                          return showNotification("success");
                        },
                        children: "Success",
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                      {
                        onClick: function onClick() {
                          return showNotification("info");
                        },
                        children: "Info",
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                      {
                        type: "warning",
                        onClick: function onClick() {
                          return showNotification("warning");
                        },
                        children: "Warning",
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                      {
                        type: "danger",
                        onClick: function onClick() {
                          return showNotification("error");
                        },
                        children: "Error",
                      }
                    ),
                  ],
                }),
                notifications.length > 0 &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _components_tx_notification_styled__WEBPACK_IMPORTED_MODULE_2__.qG,
                    {
                      children: notifications.map(function (notification) {
                        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _components_tx_notification_tx_notification__WEBPACK_IMPORTED_MODULE_3__.A,
                          {
                            type: notification.type,
                            title: notification.title,
                            description: notification.description,
                            onClose: function onClose() {
                              return setNotifications(function (prev) {
                                return prev.filter(function (n) {
                                  return n.id !== notification.id;
                                });
                              });
                            },
                          },
                          notification.id
                        );
                      }),
                    }
                  ),
              ],
            }
          );
        },
        WithoutDescription = function WithoutDescription() {
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _useState5,
              2
            ),
            show = _useState6[0],
            setShow = _useState6[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    onClick: function onClick() {
                      return setShow(!0);
                    },
                    children: "Show Notification",
                  }
                ),
                show &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _components_tx_notification_styled__WEBPACK_IMPORTED_MODULE_2__.qG,
                    {
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        _components_tx_notification_tx_notification__WEBPACK_IMPORTED_MODULE_3__.A,
                        {
                          type: "success",
                          title: "Success!",
                          onClose: function onClose() {
                            return setShow(!1);
                          },
                          duration: 0,
                        }
                      ),
                    }
                  ),
              ],
            }
          );
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "Types", "WithoutDescription"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    type: "info",\n    title: "Notification Title",\n    description: "This is the notification description.",\n    closable: true,\n    duration: 0\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [show, setShow] = useState(false);\n  return <>\n      <TxButton onClick={() => setShow(true)}>Show Notification</TxButton>\n      {show && <StyledNotificationContainer>\n          <TxNotification type="info" title="Notification" description="This is a notification message." onClose={() => setShow(false)} duration={0} />\n        </StyledNotificationContainer>}\n    </>;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (Types.parameters = {
          ...Types.parameters,
          docs: {
            ...Types.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [notifications, setNotifications] = useState([]);\n  const showNotification = type => {\n    const id = Date.now();\n    const typeConfig = {\n      success: {\n        title: "Success",\n        description: "Operation completed successfully!"\n      },\n      info: {\n        title: "Info",\n        description: "This is an information message."\n      },\n      warning: {\n        title: "Warning",\n        description: "Please be careful with this action."\n      },\n      error: {\n        title: "Error",\n        description: "Something went wrong!"\n      }\n    };\n    const newNotification = {\n      id,\n      type,\n      ...typeConfig[type]\n    };\n    setNotifications(prev => [...prev, newNotification]);\n    setTimeout(() => {\n      setNotifications(prev => prev.filter(n => n.id !== id));\n    }, 4500);\n  };\n  return <>\n      <div style={{\n      display: "flex",\n      gap: "12px"\n    }}>\n        <TxButton type="success" onClick={() => showNotification("success")}>\n          Success\n        </TxButton>\n        <TxButton onClick={() => showNotification("info")}>Info</TxButton>\n        <TxButton type="warning" onClick={() => showNotification("warning")}>\n          Warning\n        </TxButton>\n        <TxButton type="danger" onClick={() => showNotification("error")}>\n          Error\n        </TxButton>\n      </div>\n\n      {notifications.length > 0 && <StyledNotificationContainer>\n          {notifications.map(notification => <TxNotification key={notification.id} type={notification.type} title={notification.title} description={notification.description} onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))} />)}\n        </StyledNotificationContainer>}\n    </>;\n}',
              ...Types.parameters?.docs?.source,
            },
          },
        }),
        (WithoutDescription.parameters = {
          ...WithoutDescription.parameters,
          docs: {
            ...WithoutDescription.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [show, setShow] = useState(false);\n  return <>\n      <TxButton onClick={() => setShow(true)}>Show Notification</TxButton>\n      {show && <StyledNotificationContainer>\n          <TxNotification type="success" title="Success!" onClose={() => setShow(false)} duration={0} />\n        </StyledNotificationContainer>}\n    </>;\n}',
              ...WithoutDescription.parameters?.docs?.source,
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
    "./src/components/tx-notification/styled.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Nc: () => StyledNotificationTitle,
        Pv: () => StyledNotification,
        XZ: () => StyledNotificationDescription,
        fQ: () => StyledNotificationClose,
        qG: () => StyledNotificationContainer,
        s5: () => StyledNotificationIcon,
        sY: () => StyledNotificationContent,
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        slideInRight = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.i7)(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n",
              ]
            ))
        ),
        StyledNotificationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  pointer-events: none;\n",
              ]
            ))
        ),
        StyledNotification = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  background: ",
                ";\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  padding: 16px 24px;\n  min-width: 384px;\n  display: flex;\n  gap: 12px;\n  animation: ",
                " 0.3s ease;\n  pointer-events: all;\n  border-left: 4px solid\n    ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgWhite,
          slideInRight,
          function (props) {
            switch (props.type) {
              case "success":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.success;
              case "error":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.danger;
              case "warning":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.warning;
              case "info":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.info;
              default:
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary;
            }
          }
        ),
        StyledNotificationIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  color: ",
                ";\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
              ]
            )),
          function (props) {
            switch (props.type) {
              case "success":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.success;
              case "error":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.danger;
              case "warning":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.warning;
              case "info":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.info;
              default:
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary;
            }
          }
        ),
        StyledNotificationContent = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  flex: 1;\n"]
            ))
        ),
        StyledNotificationTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  margin-bottom: 4px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary
        ),
        StyledNotificationDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 14px;\n  color: ", ";\n  line-height: 1.5;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        StyledNotificationClose = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(
          _templateObject8 ||
            (_templateObject8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: ",
                ";\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
                ";\n    color: ",
                ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textTertiary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFill,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary
        );
    },
    "./src/components/tx-notification/tx-notification.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/tx-notification/styled.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["type", "title", "description", "closable", "onClose", "duration"],
        CloseIcon = function CloseIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        CheckCircleIcon = function CheckCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
            ],
          });
        },
        InfoCircleIcon = function InfoCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "16",
                x2: "12",
                y2: "12",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12.01",
                y2: "8",
              }),
            ],
          });
        },
        AlertCircleIcon = function AlertCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "16",
                x2: "12.01",
                y2: "16",
              }),
            ],
          });
        },
        XCircleIcon = function XCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
            ],
          });
        },
        getIcon = function getIcon(type) {
          switch (type) {
            case "success":
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckCircleIcon, {});
            case "error":
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(XCircleIcon, {});
            case "warning":
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AlertCircleIcon, {});
            default:
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InfoCircleIcon, {});
          }
        },
        TxNotification = function TxNotification(_ref) {
          var _ref$type = _ref.type,
            type = void 0 === _ref$type ? "info" : _ref$type,
            title = _ref.title,
            description = _ref.description,
            _ref$closable = _ref.closable,
            closable = void 0 === _ref$closable || _ref$closable,
            onClose = _ref.onClose,
            _ref$duration = _ref.duration,
            duration = void 0 === _ref$duration ? 4500 : _ref$duration,
            rest = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
            function () {
              if (duration && duration > 0) {
                var timer = setTimeout(function () {
                  onClose && onClose();
                }, duration);
                return function () {
                  return clearTimeout(timer);
                };
              }
            },
            [duration, onClose]
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            _styled__WEBPACK_IMPORTED_MODULE_1__.Pv,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                { type },
                rest
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.s5, {
                    type,
                    children: getIcon(type),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_1__.sY, {
                    children: [
                      title &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _styled__WEBPACK_IMPORTED_MODULE_1__.Nc,
                          { children: title }
                        ),
                      description &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _styled__WEBPACK_IMPORTED_MODULE_1__.XZ,
                          { children: description }
                        ),
                    ],
                  }),
                  closable &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.fQ, {
                      onClick: function handleClose() {
                        onClose && onClose();
                      },
                      type: "button",
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CloseIcon, {}),
                    }),
                ],
              }
            )
          );
        };
      TxNotification.defaultProps = { type: "info", closable: !0, duration: 4500 };
      const __WEBPACK_DEFAULT_EXPORT__ = TxNotification;
      TxNotification.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxNotification",
        props: {
          type: {
            defaultValue: { value: '"info"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"info"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          duration: {
            defaultValue: { value: "4500", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          title: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          description: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          onClose: { description: "", type: { name: "func" }, required: !1 },
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
