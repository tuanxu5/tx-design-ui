"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [1323],
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
    "./src/stories/TxDrawer.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          CustomSize: () => CustomSize,
          Placements: () => Placements,
          Preview: () => Preview,
          WithFooter: () => WithFooter,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-drawer/tx-drawer.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxDrawer",
        component: _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          open: { control: "boolean" },
          title: { control: "text" },
          placement: { control: "select", options: ["left", "right", "top", "bottom"] },
          width: { control: "text" },
          height: { control: "text" },
          closable: { control: "boolean" },
          maskClosable: { control: "boolean" },
          onClose: { action: "closed" },
        },
      };
      var Preview = {
          render: function PreviewComponent(args) {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                _useState,
                2
              ),
              open = _useState2[0],
              setOpen = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                    {
                      onClick: function onClick() {
                        return setOpen(!0);
                      },
                      children: "Open Drawer",
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                      (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                        {},
                        args
                      ),
                      {},
                      {
                        open,
                        onClose: function onClose() {
                          return setOpen(!1);
                        },
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          children: "Drawer content goes here...",
                        }),
                      }
                    )
                  ),
                ],
              }
            );
          },
          args: { title: "Drawer Title", placement: "right", closable: !0, maskClosable: !0 },
        },
        BasicUsage = function BasicUsage() {
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState3,
              2
            ),
            open = _useState4[0],
            setOpen = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    onClick: function onClick() {
                      return setOpen(!0);
                    },
                    children: "Open Drawer",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                  _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                  {
                    open,
                    onClose: function onClose() {
                      return setOpen(!1);
                    },
                    title: "Basic Drawer",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                        children: "This is the drawer content.",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                        children: "You can put any content here.",
                      }),
                    ],
                  }
                ),
              ],
            }
          );
        },
        Placements = function Placements() {
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState5,
              2
            ),
            leftOpen = _useState6[0],
            setLeftOpen = _useState6[1],
            _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState7,
              2
            ),
            rightOpen = _useState8[0],
            setRightOpen = _useState8[1],
            _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState10 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState9,
              2
            ),
            topOpen = _useState10[0],
            setTopOpen = _useState10[1],
            _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState12 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState11,
              2
            ),
            bottomOpen = _useState12[0],
            setBottomOpen = _useState12[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: { display: "flex", gap: "12px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  onClick: function onClick() {
                    return setLeftOpen(!0);
                  },
                  children: "Left",
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  onClick: function onClick() {
                    return setRightOpen(!0);
                  },
                  children: "Right",
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  onClick: function onClick() {
                    return setTopOpen(!0);
                  },
                  children: "Top",
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  onClick: function onClick() {
                    return setBottomOpen(!0);
                  },
                  children: "Bottom",
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  open: leftOpen,
                  onClose: function onClose() {
                    return setLeftOpen(!1);
                  },
                  title: "Left Drawer",
                  placement: "left",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    children: "Drawer from left side",
                  }),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  open: rightOpen,
                  onClose: function onClose() {
                    return setRightOpen(!1);
                  },
                  title: "Right Drawer",
                  placement: "right",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    children: "Drawer from right side",
                  }),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  open: topOpen,
                  onClose: function onClose() {
                    return setTopOpen(!1);
                  },
                  title: "Top Drawer",
                  placement: "top",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    children: "Drawer from top",
                  }),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  open: bottomOpen,
                  onClose: function onClose() {
                    return setBottomOpen(!1);
                  },
                  title: "Bottom Drawer",
                  placement: "bottom",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    children: "Drawer from bottom",
                  }),
                }
              ),
            ],
          });
        },
        WithFooter = function WithFooter() {
          var _useState13 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState14 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState13,
              2
            ),
            open = _useState14[0],
            setOpen = _useState14[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    onClick: function onClick() {
                      return setOpen(!0);
                    },
                    children: "Open Drawer",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                  {
                    open,
                    onClose: function onClose() {
                      return setOpen(!1);
                    },
                    title: "Drawer with Footer",
                    footer: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                      {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                            {
                              onClick: function onClick() {
                                return setOpen(!1);
                              },
                              children: "Cancel",
                            }
                          ),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                            {
                              type: "primary",
                              onClick: function onClick() {
                                return setOpen(!1);
                              },
                              children: "Submit",
                            }
                          ),
                        ],
                      }
                    ),
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      children: "This drawer has a footer with action buttons.",
                    }),
                  }
                ),
              ],
            }
          );
        },
        CustomSize = function CustomSize() {
          var _useState15 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState16 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _useState15,
              2
            ),
            open = _useState16[0],
            setOpen = _useState16[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    onClick: function onClick() {
                      return setOpen(!0);
                    },
                    children: "Open Large Drawer",
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_drawer_tx_drawer__WEBPACK_IMPORTED_MODULE_2__.A,
                  {
                    open,
                    onClose: function onClose() {
                      return setOpen(!1);
                    },
                    title: "Large Drawer",
                    width: "600px",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      children: "This drawer has a custom width of 600px.",
                    }),
                  }
                ),
              ],
            }
          );
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "Placements", "WithFooter", "CustomSize"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: PreviewComponent,\n  args: {\n    title: "Drawer Title",\n    placement: "right",\n    closable: true,\n    maskClosable: true\n  }\n}',
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
                '() => {\n  const [open, setOpen] = useState(false);\n  return <>\n      <TxButton onClick={() => setOpen(true)}>Open Drawer</TxButton>\n      <TxDrawer open={open} onClose={() => setOpen(false)} title="Basic Drawer">\n        <p>This is the drawer content.</p>\n        <p>You can put any content here.</p>\n      </TxDrawer>\n    </>;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (Placements.parameters = {
          ...Placements.parameters,
          docs: {
            ...Placements.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [leftOpen, setLeftOpen] = useState(false);\n  const [rightOpen, setRightOpen] = useState(false);\n  const [topOpen, setTopOpen] = useState(false);\n  const [bottomOpen, setBottomOpen] = useState(false);\n  return <div style={{\n    display: "flex",\n    gap: "12px"\n  }}>\n      <TxButton onClick={() => setLeftOpen(true)}>Left</TxButton>\n      <TxButton onClick={() => setRightOpen(true)}>Right</TxButton>\n      <TxButton onClick={() => setTopOpen(true)}>Top</TxButton>\n      <TxButton onClick={() => setBottomOpen(true)}>Bottom</TxButton>\n\n      <TxDrawer open={leftOpen} onClose={() => setLeftOpen(false)} title="Left Drawer" placement="left">\n        <p>Drawer from left side</p>\n      </TxDrawer>\n\n      <TxDrawer open={rightOpen} onClose={() => setRightOpen(false)} title="Right Drawer" placement="right">\n        <p>Drawer from right side</p>\n      </TxDrawer>\n\n      <TxDrawer open={topOpen} onClose={() => setTopOpen(false)} title="Top Drawer" placement="top">\n        <p>Drawer from top</p>\n      </TxDrawer>\n\n      <TxDrawer open={bottomOpen} onClose={() => setBottomOpen(false)} title="Bottom Drawer" placement="bottom">\n        <p>Drawer from bottom</p>\n      </TxDrawer>\n    </div>;\n}',
              ...Placements.parameters?.docs?.source,
            },
          },
        }),
        (WithFooter.parameters = {
          ...WithFooter.parameters,
          docs: {
            ...WithFooter.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [open, setOpen] = useState(false);\n  return <>\n      <TxButton onClick={() => setOpen(true)}>Open Drawer</TxButton>\n      <TxDrawer open={open} onClose={() => setOpen(false)} title="Drawer with Footer" footer={<>\n            <TxButton onClick={() => setOpen(false)}>Cancel</TxButton>\n            <TxButton type="primary" onClick={() => setOpen(false)}>\n              Submit\n            </TxButton>\n          </>}>\n        <p>This drawer has a footer with action buttons.</p>\n      </TxDrawer>\n    </>;\n}',
              ...WithFooter.parameters?.docs?.source,
            },
          },
        }),
        (CustomSize.parameters = {
          ...CustomSize.parameters,
          docs: {
            ...CustomSize.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const [open, setOpen] = useState(false);\n  return <>\n      <TxButton onClick={() => setOpen(true)}>Open Large Drawer</TxButton>\n      <TxDrawer open={open} onClose={() => setOpen(false)} title="Large Drawer" width="600px">\n        <p>This drawer has a custom width of 600px.</p>\n      </TxDrawer>\n    </>;\n}',
              ...CustomSize.parameters?.docs?.source,
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
    "./src/components/tx-drawer/tx-drawer.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_drawer });
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
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        fadeIn = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
            ]))
        ),
        slideInLeft = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n",
            ]))
        ),
        slideInRight = (0, styled_components_browser_esm.i7)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n",
            ]))
        ),
        slideInTop = (0, styled_components_browser_esm.i7)(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n",
            ]))
        ),
        slideInBottom = (0, styled_components_browser_esm.i7)(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n",
            ]))
        ),
        StyledDrawerOverlay = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  animation: ",
              " 0.2s ease;\n",
            ])),
          fadeIn
        ),
        StyledDrawerContent = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  background: ",
              ";\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  z-index: 1001;\n\n  ",
              "\n",
            ])),
          colors.A.bgWhite,
          function (props) {
            switch (props.placement) {
              case "left":
                return "\n          top: 0;\n          left: 0;\n          bottom: 0;\n          width: "
                  .concat(props.width || "378px", ";\n          animation: ")
                  .concat(slideInLeft, " 0.3s ease;\n        ");
              case "right":
              default:
                return "\n          top: 0;\n          right: 0;\n          bottom: 0;\n          width: "
                  .concat(props.width || "378px", ";\n          animation: ")
                  .concat(slideInRight, " 0.3s ease;\n        ");
              case "top":
                return "\n          top: 0;\n          left: 0;\n          right: 0;\n          height: "
                  .concat(props.height || "378px", ";\n          animation: ")
                  .concat(slideInTop, " 0.3s ease;\n        ");
              case "bottom":
                return "\n          bottom: 0;\n          left: 0;\n          right: 0;\n          height: "
                  .concat(props.height || "378px", ";\n          animation: ")
                  .concat(slideInBottom, " 0.3s ease;\n        ");
            }
          }
        ),
        StyledDrawerHeader = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 20px 24px;\n  border-bottom: 1px solid ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
            ])),
          colors.A.borderLight
        ),
        StyledDrawerTitle = styled_components_browser_esm.Ay.h3(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",
              ";\n",
            ])),
          colors.A.textPrimary
        ),
        StyledDrawerClose = styled_components_browser_esm.Ay.button(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.bgFill,
          colors.A.textPrimary
        ),
        StyledDrawerBody = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n",
            ]))
        ),
        StyledDrawerFooter = styled_components_browser_esm.Ay.div(
          _templateObject12 ||
            (_templateObject12 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 16px 24px;\n  border-top: 1px solid ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n",
            ])),
          colors.A.borderLight
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "open",
          "onClose",
          "title",
          "children",
          "footer",
          "placement",
          "width",
          "height",
          "closable",
          "maskClosable",
        ],
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxDrawer = function TxDrawer(_ref) {
          var _ref$open = _ref.open,
            open = void 0 !== _ref$open && _ref$open,
            onClose = _ref.onClose,
            title = _ref.title,
            children = _ref.children,
            footer = _ref.footer,
            _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? "right" : _ref$placement,
            width = _ref.width,
            height = _ref.height,
            _ref$closable = _ref.closable,
            closable = void 0 === _ref$closable || _ref$closable,
            _ref$maskClosable = _ref.maskClosable,
            maskClosable = void 0 === _ref$maskClosable || _ref$maskClosable,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          (0, react.useEffect)(
            function () {
              return (
                (document.body.style.overflow = open ? "hidden" : "unset"),
                function () {
                  document.body.style.overflow = "unset";
                }
              );
            },
            [open]
          );
          return open
            ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)(StyledDrawerOverlay, {
                    onClick: function handleOverlayClick() {
                      maskClosable && onClose && onClose();
                    },
                  }),
                  (0, jsx_runtime.jsxs)(
                    StyledDrawerContent,
                    (0, objectSpread2.A)(
                      (0, objectSpread2.A)({ placement, width, height }, rest),
                      {},
                      {
                        children: [
                          (title || closable) &&
                            (0, jsx_runtime.jsxs)(StyledDrawerHeader, {
                              children: [
                                title && (0, jsx_runtime.jsx)(StyledDrawerTitle, { children: title }),
                                closable &&
                                  (0, jsx_runtime.jsx)(StyledDrawerClose, {
                                    onClick: function handleClose() {
                                      onClose && onClose();
                                    },
                                    type: "button",
                                    children: (0, jsx_runtime.jsx)(CloseIcon, {}),
                                  }),
                              ],
                            }),
                          (0, jsx_runtime.jsx)(StyledDrawerBody, { children }),
                          footer && (0, jsx_runtime.jsx)(StyledDrawerFooter, { children: footer }),
                        ],
                      }
                    )
                  ),
                ],
              })
            : null;
        };
      TxDrawer.defaultProps = { open: !1, placement: "right", closable: !0, maskClosable: !0 };
      const tx_drawer = TxDrawer;
      TxDrawer.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDrawer",
        props: {
          open: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          placement: {
            defaultValue: { value: '"right"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"left"', computed: !1 },
                { value: '"right"', computed: !1 },
                { value: '"top"', computed: !1 },
                { value: '"bottom"', computed: !1 },
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
          maskClosable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          onClose: { description: "", type: { name: "func" }, required: !1 },
          title: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !1 },
          footer: { description: "", type: { name: "node" }, required: !1 },
          width: { description: "", type: { name: "string" }, required: !1 },
          height: { description: "", type: { name: "string" }, required: !1 },
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
