"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8165],
  {
    "./src/stories/TxLayout.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          FullLayout: () => FullLayout,
          WithSider: () => WithSider,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-layout/tx-layout.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxLayout",
        component: _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "fullscreen" },
        tags: ["autodocs"],
      };
      var Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Header,
                    {
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                        style: { margin: 0 },
                        children: "Header",
                      }),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Content,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", { children: "Content" }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                          children: "This is the main content area.",
                        }),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Footer,
                    { children: "Footer" }
                  ),
                ],
              }
            );
          },
        },
        WithSider = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                flex: !0,
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Sider,
                    {
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        style: { padding: "16px" },
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                            style: { marginTop: 0 },
                            children: "Sidebar",
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
                            style: { display: "flex", flexDirection: "column", gap: "8px" },
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                type: "button",
                                onClick: function onClick() {},
                                style: {
                                  padding: "8px",
                                  textDecoration: "none",
                                  color: "#1890ff",
                                  background: "none",
                                  border: "none",
                                  textAlign: "left",
                                  cursor: "pointer",
                                },
                                children: "Menu Item 1",
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                type: "button",
                                onClick: function onClick() {},
                                style: {
                                  padding: "8px",
                                  textDecoration: "none",
                                  color: "#666",
                                  background: "none",
                                  border: "none",
                                  textAlign: "left",
                                  cursor: "pointer",
                                },
                                children: "Menu Item 2",
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                                type: "button",
                                onClick: function onClick() {},
                                style: {
                                  padding: "8px",
                                  textDecoration: "none",
                                  color: "#666",
                                  background: "none",
                                  border: "none",
                                  textAlign: "left",
                                  cursor: "pointer",
                                },
                                children: "Menu Item 3",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    style: { display: "flex", flexDirection: "column", flex: 1 },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Header,
                        {
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                            style: { margin: 0 },
                            children: "Header",
                          }),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                        _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Content,
                        {
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", { children: "Content" }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                              children: "Content area with sidebar.",
                            }),
                          ],
                        }
                      ),
                    ],
                  }),
                ],
              }
            );
          },
        },
        FullLayout = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A,
              {
                flex: !0,
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Sider,
                    {
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        style: { padding: "16px" },
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                          style: { marginTop: 0 },
                          children: "Sidebar",
                        }),
                      }),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    style: { display: "flex", flexDirection: "column", flex: 1, minHeight: "100vh" },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Header,
                        {
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                            style: { margin: 0 },
                            children: "Header",
                          }),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                        _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Content,
                        {
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", { children: "Main Content" }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                              children: "This is a complete layout with sider, header, content, and footer.",
                            }),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _components_tx_layout_tx_layout__WEBPACK_IMPORTED_MODULE_0__.A.Footer,
                        { children: "Footer © 2024" }
                      ),
                    ],
                  }),
                ],
              }
            );
          },
        };
      const __namedExportsOrder = ["Basic", "WithSider", "FullLayout"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <TxLayout>\n      <TxLayout.Header>\n        <h2 style={{\n        margin: 0\n      }}>Header</h2>\n      </TxLayout.Header>\n      <TxLayout.Content>\n        <h2>Content</h2>\n        <p>This is the main content area.</p>\n      </TxLayout.Content>\n      <TxLayout.Footer>Footer</TxLayout.Footer>\n    </TxLayout>\n}",
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (WithSider.parameters = {
          ...WithSider.parameters,
          docs: {
            ...WithSider.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <TxLayout flex>\n      <TxLayout.Sider>\n        <div style={{\n        padding: "16px"\n      }}>\n          <h3 style={{\n          marginTop: 0\n        }}>Sidebar</h3>\n          <nav style={{\n          display: "flex",\n          flexDirection: "column",\n          gap: "8px"\n        }}>\n            <button type="button" onClick={() => {}} style={{\n            padding: "8px",\n            textDecoration: "none",\n            color: "#1890ff",\n            background: "none",\n            border: "none",\n            textAlign: "left",\n            cursor: "pointer"\n          }}>\n              Menu Item 1\n            </button>\n            <button type="button" onClick={() => {}} style={{\n            padding: "8px",\n            textDecoration: "none",\n            color: "#666",\n            background: "none",\n            border: "none",\n            textAlign: "left",\n            cursor: "pointer"\n          }}>\n              Menu Item 2\n            </button>\n            <button type="button" onClick={() => {}} style={{\n            padding: "8px",\n            textDecoration: "none",\n            color: "#666",\n            background: "none",\n            border: "none",\n            textAlign: "left",\n            cursor: "pointer"\n          }}>\n              Menu Item 3\n            </button>\n          </nav>\n        </div>\n      </TxLayout.Sider>\n      <div style={{\n      display: "flex",\n      flexDirection: "column",\n      flex: 1\n    }}>\n        <TxLayout.Header>\n          <h2 style={{\n          margin: 0\n        }}>Header</h2>\n        </TxLayout.Header>\n        <TxLayout.Content>\n          <h2>Content</h2>\n          <p>Content area with sidebar.</p>\n        </TxLayout.Content>\n      </div>\n    </TxLayout>\n}',
              ...WithSider.parameters?.docs?.source,
            },
          },
        }),
        (FullLayout.parameters = {
          ...FullLayout.parameters,
          docs: {
            ...FullLayout.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <TxLayout flex>\n      <TxLayout.Sider>\n        <div style={{\n        padding: "16px"\n      }}>\n          <h3 style={{\n          marginTop: 0\n        }}>Sidebar</h3>\n        </div>\n      </TxLayout.Sider>\n      <div style={{\n      display: "flex",\n      flexDirection: "column",\n      flex: 1,\n      minHeight: "100vh"\n    }}>\n        <TxLayout.Header>\n          <h2 style={{\n          margin: 0\n        }}>Header</h2>\n        </TxLayout.Header>\n        <TxLayout.Content>\n          <h2>Main Content</h2>\n          <p>This is a complete layout with sider, header, content, and footer.</p>\n        </TxLayout.Content>\n        <TxLayout.Footer>Footer © 2024</TxLayout.Footer>\n      </div>\n    </TxLayout>\n}',
              ...FullLayout.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-layout/styled.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Content: () => Content,
          Footer: () => Footer,
          Header: () => Header,
          LayoutContainer: () => LayoutContainer,
          Sider: () => Sider,
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  display: flex;\n  flex-direction: ", ";\n  height: ", ";\n  min-height: ", ";\n"]
            )),
          function (props) {
            return props.flex ? "row" : "column";
          },
          function (props) {
            return props.height || "100vh";
          },
          function (props) {
            return props.minHeight || "100vh";
          }
        ),
        Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.header(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  height: 64px;\n  background: ",
                ";\n  padding: 0 48px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight
        ),
        Sider = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.aside(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  background: ",
                ";\n  width: ",
                ";\n  transition: all 0.3s;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          function (props) {
            return props.width || "200px";
          }
        ),
        Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.main(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  background: white;\n"]
            ))
        ),
        Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.footer(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  padding: 24px 48px;\n  text-align: center;\n  background: ", ";\n  border-top: 1px solid ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderDefault
        );
    },
    "./src/components/tx-layout/tx-layout.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/tx-layout/styled.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        TxLayout = function TxLayout(_ref) {
          var children = _ref.children,
            height = _ref.height,
            minHeight = _ref.minHeight,
            flex = _ref.flex,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _styled__WEBPACK_IMPORTED_MODULE_0__.LayoutContainer,
            { height, minHeight, flex, className, children }
          );
        };
      ((TxLayout.Header = function (_ref2) {
        var children = _ref2.children,
          className = _ref2.className,
          Header = __webpack_require__("./src/components/tx-layout/styled.js").Header;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Header, { className, children });
      }).displayName = "TxLayout.Header"),
        ((TxLayout.Sider = function (_ref3) {
          var children = _ref3.children,
            width = _ref3.width,
            className = _ref3.className,
            Sider = __webpack_require__("./src/components/tx-layout/styled.js").Sider;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sider, { width, className, children });
        }).displayName = "TxLayout.Sider"),
        ((TxLayout.Content = function (_ref4) {
          var children = _ref4.children,
            className = _ref4.className,
            Content = __webpack_require__("./src/components/tx-layout/styled.js").Content;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Content, { className, children });
        }).displayName = "TxLayout.Content"),
        ((TxLayout.Footer = function (_ref5) {
          var children = _ref5.children,
            className = _ref5.className,
            Footer = __webpack_require__("./src/components/tx-layout/styled.js").Footer;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Footer, { className, children });
        }).displayName = "TxLayout.Footer");
      const __WEBPACK_DEFAULT_EXPORT__ = TxLayout;
      TxLayout.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "Header",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, className }", optional: !1, type: null }],
            returns: null,
          },
          {
            name: "Sider",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, width, className }", optional: !1, type: null }],
            returns: null,
          },
          {
            name: "Content",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, className }", optional: !1, type: null }],
            returns: null,
          },
          {
            name: "Footer",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, className }", optional: !1, type: null }],
            returns: null,
          },
        ],
        displayName: "TxLayout",
        props: {
          children: { description: "", type: { name: "node" }, required: !0 },
          height: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          minHeight: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          flex: { description: "", type: { name: "bool" }, required: !1 },
          className: { description: "", type: { name: "string" }, required: !1 },
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
