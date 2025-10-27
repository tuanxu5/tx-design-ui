"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [3636],
  {
    "./src/stories/TxBadge.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Dot: () => Dot,
          OverflowCount: () => OverflowCount,
          Ribbon: () => Ribbon,
          RibbonStatus: () => RibbonStatus,
          Standalone: () => Standalone,
          Status: () => Status,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-avatar/tx-avatar.jsx"
        ),
        _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-badge/tx-badge.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxBadge",
        component: _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          count: { control: "number" },
          dot: { control: "boolean" },
          showZero: { control: "boolean" },
          overflowCount: { control: "number" },
          status: { control: { type: "select" }, options: ["success", "error", "warning", "processing", "default"] },
        },
      };
      var Basic = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "24px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      count: 5,
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                        { shape: "square", size: "large" }
                      ),
                    }
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                      {},
                      args
                    ),
                    {},
                    {
                      count: 0,
                      showZero: !0,
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                        { shape: "square", size: "large" }
                      ),
                    }
                  )
                ),
              ],
            });
          },
        },
        OverflowCount = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "24px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 99,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 100,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 999,
                    overflowCount: 999,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 1e3,
                    overflowCount: 999,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
              ],
            });
          },
        },
        Dot = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "24px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    dot: !0,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    dot: !0,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      style: { fontSize: "20px" },
                      children: "🔔",
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    dot: !0,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                      href: "#",
                      style: { fontSize: "14px" },
                      children: "Link something",
                    }),
                  }
                ),
              ],
            });
          },
        },
        Status = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "24px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 5,
                    status: "success",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 5,
                    status: "error",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 5,
                    status: "warning",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    count: 5,
                    status: "processing",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_avatar_tx_avatar__WEBPACK_IMPORTED_MODULE_0__.TxAvatar,
                      { shape: "square", size: "large" }
                    ),
                  }
                ),
              ],
            });
          },
        },
        Standalone = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "12px", alignItems: "center" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  { count: 25 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  { count: 4, status: "success" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  { count: 109, status: "error" }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U,
                  { count: 200, status: "warning", overflowCount: 150 }
                ),
              ],
            });
          },
        },
        Ribbon = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "24px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Hippies",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: {
                        width: "200px",
                        height: "100px",
                        background: "#f0f0f0",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: "Push to start",
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Hippies",
                    status: "success",
                    placement: "start",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: {
                        width: "200px",
                        height: "100px",
                        background: "#f0f0f0",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: "Push to start",
                    }),
                  }
                ),
              ],
            });
          },
        },
        RibbonStatus = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { display: "flex", gap: "24px", flexWrap: "wrap" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Default",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: { width: "150px", height: "80px", background: "#f0f0f0", borderRadius: "8px" },
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Success",
                    status: "success",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: { width: "150px", height: "80px", background: "#f0f0f0", borderRadius: "8px" },
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Error",
                    status: "error",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: { width: "150px", height: "80px", background: "#f0f0f0", borderRadius: "8px" },
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Warning",
                    status: "warning",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: { width: "150px", height: "80px", background: "#f0f0f0", borderRadius: "8px" },
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_badge_tx_badge__WEBPACK_IMPORTED_MODULE_1__.U.Ribbon,
                  {
                    text: "Processing",
                    status: "processing",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      style: { width: "150px", height: "80px", background: "#f0f0f0", borderRadius: "8px" },
                    }),
                  }
                ),
              ],
            });
          },
        };
      const __namedExportsOrder = ["Basic", "OverflowCount", "Dot", "Status", "Standalone", "Ribbon", "RibbonStatus"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <div style={{\n    display: "flex",\n    gap: "24px",\n    alignItems: "center"\n  }}>\n      <TxBadge {...args} count={5}>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge {...args} count={0} showZero>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (OverflowCount.parameters = {
          ...OverflowCount.parameters,
          docs: {
            ...OverflowCount.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px",\n    alignItems: "center"\n  }}>\n      <TxBadge count={99}>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge count={100}>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge count={999} overflowCount={999}>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge count={1000} overflowCount={999}>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n    </div>\n}',
              ...OverflowCount.parameters?.docs?.source,
            },
          },
        }),
        (Dot.parameters = {
          ...Dot.parameters,
          docs: {
            ...Dot.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px",\n    alignItems: "center"\n  }}>\n      <TxBadge dot>\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge dot>\n        <span style={{\n        fontSize: "20px"\n      }}>🔔</span>\n      </TxBadge>\n      <TxBadge dot>\n        <a href="#" style={{\n        fontSize: "14px"\n      }}>\n          Link something\n        </a>\n      </TxBadge>\n    </div>\n}',
              ...Dot.parameters?.docs?.source,
            },
          },
        }),
        (Status.parameters = {
          ...Status.parameters,
          docs: {
            ...Status.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px",\n    alignItems: "center"\n  }}>\n      <TxBadge count={5} status="success">\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge count={5} status="error">\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge count={5} status="warning">\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n      <TxBadge count={5} status="processing">\n        <TxAvatar shape="square" size="large" />\n      </TxBadge>\n    </div>\n}',
              ...Status.parameters?.docs?.source,
            },
          },
        }),
        (Standalone.parameters = {
          ...Standalone.parameters,
          docs: {
            ...Standalone.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "12px",\n    alignItems: "center"\n  }}>\n      <TxBadge count={25} />\n      <TxBadge count={4} status="success" />\n      <TxBadge count={109} status="error" />\n      <TxBadge count={200} status="warning" overflowCount={150} />\n    </div>\n}',
              ...Standalone.parameters?.docs?.source,
            },
          },
        }),
        (Ribbon.parameters = {
          ...Ribbon.parameters,
          docs: {
            ...Ribbon.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px"\n  }}>\n      <TxBadge.Ribbon text="Hippies">\n        <div style={{\n        width: "200px",\n        height: "100px",\n        background: "#f0f0f0",\n        borderRadius: "8px",\n        display: "flex",\n        alignItems: "center",\n        justifyContent: "center"\n      }}>\n          Push to start\n        </div>\n      </TxBadge.Ribbon>\n      <TxBadge.Ribbon text="Hippies" status="success" placement="start">\n        <div style={{\n        width: "200px",\n        height: "100px",\n        background: "#f0f0f0",\n        borderRadius: "8px",\n        display: "flex",\n        alignItems: "center",\n        justifyContent: "center"\n      }}>\n          Push to start\n        </div>\n      </TxBadge.Ribbon>\n    </div>\n}',
              ...Ribbon.parameters?.docs?.source,
            },
          },
        }),
        (RibbonStatus.parameters = {
          ...RibbonStatus.parameters,
          docs: {
            ...RibbonStatus.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: "flex",\n    gap: "24px",\n    flexWrap: "wrap"\n  }}>\n      <TxBadge.Ribbon text="Default">\n        <div style={{\n        width: "150px",\n        height: "80px",\n        background: "#f0f0f0",\n        borderRadius: "8px"\n      }} />\n      </TxBadge.Ribbon>\n      <TxBadge.Ribbon text="Success" status="success">\n        <div style={{\n        width: "150px",\n        height: "80px",\n        background: "#f0f0f0",\n        borderRadius: "8px"\n      }} />\n      </TxBadge.Ribbon>\n      <TxBadge.Ribbon text="Error" status="error">\n        <div style={{\n        width: "150px",\n        height: "80px",\n        background: "#f0f0f0",\n        borderRadius: "8px"\n      }} />\n      </TxBadge.Ribbon>\n      <TxBadge.Ribbon text="Warning" status="warning">\n        <div style={{\n        width: "150px",\n        height: "80px",\n        background: "#f0f0f0",\n        borderRadius: "8px"\n      }} />\n      </TxBadge.Ribbon>\n      <TxBadge.Ribbon text="Processing" status="processing">\n        <div style={{\n        width: "150px",\n        height: "80px",\n        background: "#f0f0f0",\n        borderRadius: "8px"\n      }} />\n      </TxBadge.Ribbon>\n    </div>\n}',
              ...RibbonStatus.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-avatar/tx-avatar.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/antd/es/badge/index.js"),
        antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/antd/es/avatar/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        _excluded = ["shape", "badge", "size", "icon", "color", "url", "alt"],
        _excluded2 = ["children", "max", "size", "shape"],
        TxAvatar = function TxAvatar(_ref) {
          var shape = _ref.shape,
            badge = _ref.badge,
            size = _ref.size,
            icon = _ref.icon,
            color = _ref.color,
            url = _ref.url,
            rest =
              (_ref.alt,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                _ref,
                _excluded
              ));
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.A, {
            count: isNaN(badge) ? void 0 : badge,
            dot: "dot" === badge && !0,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              antd__WEBPACK_IMPORTED_MODULE_4__.A,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {
                  size,
                  src:
                    url && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", { src: url, alt: "avatar" }),
                  style: { backgroundColor: color },
                  icon: icon && icon,
                  shape: shape && shape,
                },
                rest
              )
            ),
          });
        };
      TxAvatar.defaultProps = { size: 36, shape: "circle", color: "#0e0e13" };
      var TxAvatarGroup = function TxAvatarGroup(_ref2) {
        var children = _ref2.children,
          max = _ref2.max,
          size = _ref2.size;
        _ref2.shape,
          (0,
          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(
            _ref2,
            _excluded2
          );
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.A.Group, {
          size,
          max: {
            count: max,
            style: { color: "#0e0e13", backgroundColor: "#f4f4f5", cursor: "pointer" },
            popover: { trigger: "hover" },
          },
          children:
            null == children
              ? void 0
              : children.map(function (item, index) {
                  return item;
                }),
        });
      };
      (TxAvatarGroup.defaultProps = { size: 36 }), (TxAvatar.Group = TxAvatarGroup);
      const __WEBPACK_DEFAULT_EXPORT__ = TxAvatar;
      TxAvatar.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "Group",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, max, size, shape, ...rest }", optional: !1, type: null }],
            returns: null,
          },
        ],
        displayName: "TxAvatar",
        props: {
          size: {
            defaultValue: { value: "36", computed: !1 },
            description: "",
            type: {
              name: "union",
              value: [
                {
                  name: "enum",
                  value: [
                    { value: '"large"', computed: !1 },
                    { value: '"medium"', computed: !1 },
                    { value: '"small"', computed: !1 },
                  ],
                },
                { name: "number" },
              ],
            },
            required: !1,
          },
          shape: {
            defaultValue: { value: '"circle"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"square"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          color: {
            defaultValue: { value: '"#0e0e13"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          url: { description: "", type: { name: "string" }, required: !1 },
          badge: {
            description: "",
            type: {
              name: "union",
              value: [{ name: "enum", value: [{ value: '"dot"', computed: !1 }] }, { name: "number" }],
            },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-badge/tx-badge.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { U: () => TxBadge });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
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
        BadgeWrapper = styled_components_browser_esm.Ay.span(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n",
            ]))
        ),
        BadgeContent = styled_components_browser_esm.Ay.sup(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: ",
              ";\n  right: ",
              ";\n  transform: ",
              ";\n  transform-origin: 100% 0%;\n  z-index: 1;\n  min-width: ",
              ";\n  height: ",
              ";\n  padding: ",
              ";\n  font-size: ",
              ";\n  font-weight: 600;\n  line-height: ",
              ";\n  text-align: center;\n  background-color: ",
              ";\n  color: white;\n  border-radius: ",
              ";\n  box-shadow: 0 0 0 1px #fff;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (props) {
            return props.dot ? "-4px" : "0";
          },
          function (props) {
            return props.dot ? "-4px" : "0";
          },
          function (props) {
            return props.dot ? "none" : "translate(50%, -50%)";
          },
          function (props) {
            return props.dot ? "6px" : "20px";
          },
          function (props) {
            return props.dot ? "6px" : "20px";
          },
          function (props) {
            return props.dot ? "0" : "0 6px";
          },
          function (props) {
            return props.dot ? "0" : "12px";
          },
          function (props) {
            return props.dot ? "6px" : "20px";
          },
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[500];
              case "error":
              default:
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
            }
          },
          function (props) {
            return props.dot ? "50%" : "10px";
          },
          function (props) {
            return !1 === props.showZero && 0 === props.count && "\n    display: none;\n  ";
          },
          function (props) {
            return props.overflowCount && props.count > props.overflowCount && "\n    padding: 0 8px;\n  ";
          }
        ),
        BadgeStandalone = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 20px;\n  padding: 0 8px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 20px;\n  color: white;\n  background-color: ",
              ";\n  border-radius: 10px;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n",
            ])),
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          }
        ),
        BadgeRibbon = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 8px;\n  right: ",
              ";\n  left: ",
              ";\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  background-color: ",
              ';\n  border-radius: 2px;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n\n  &::after {\n    content: "";\n    position: absolute;\n    bottom: -8px;\n    ',
              ": 0;\n    width: 8px;\n    height: 8px;\n    background-color: ",
              ";\n    clip-path: polygon(",
              ");\n  }\n",
            ])),
          function (props) {
            return "start" === props.placement ? "auto" : "-8px";
          },
          function (props) {
            return "start" === props.placement ? "-8px" : "auto";
          },
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          },
          function (props) {
            return "start" === props.placement ? "left" : "right";
          },
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[700];
              case "error":
                return colors.A.danger[700];
              case "warning":
                return colors.A.warning[700];
              case "processing":
                return colors.A.info[700];
              default:
                return colors.A.primary[700];
            }
          },
          function (props) {
            return "start" === props.placement ? "0 0, 100% 0, 0 100%" : "0 0, 100% 0, 100% 100%";
          }
        ),
        RibbonWrapper = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)(["\n  position: relative;\n  overflow: hidden;\n"]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["count", "dot", "showZero", "overflowCount", "status", "children", "className"],
        _excluded2 = ["text", "status", "placement", "children", "className"],
        TxBadge = function TxBadge(_ref) {
          var _ref$count = _ref.count,
            count = void 0 === _ref$count ? 0 : _ref$count,
            _ref$dot = _ref.dot,
            dot = void 0 !== _ref$dot && _ref$dot,
            _ref$showZero = _ref.showZero,
            showZero = void 0 !== _ref$showZero && _ref$showZero,
            _ref$overflowCount = _ref.overflowCount,
            overflowCount = void 0 === _ref$overflowCount ? 99 : _ref$overflowCount,
            _ref$status = _ref.status,
            status = void 0 === _ref$status ? "default" : _ref$status,
            children = _ref.children,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
          return children
            ? (0, jsx_runtime.jsxs)(
                BadgeWrapper,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ className }, props),
                  {},
                  {
                    children: [
                      children,
                      (0, jsx_runtime.jsx)(BadgeContent, {
                        dot,
                        count,
                        showZero,
                        overflowCount,
                        status,
                        children: !dot && displayCount,
                      }),
                    ],
                  }
                )
              )
            : (0, jsx_runtime.jsx)(
                BadgeStandalone,
                (0, objectSpread2.A)((0, objectSpread2.A)({ status, className }, props), {}, { children: displayCount })
              );
        };
      TxBadge.defaultProps = {
        count: 0,
        dot: !1,
        showZero: !1,
        overflowCount: 99,
        status: "default",
        children: null,
        className: "",
      };
      var TxBadgeRibbon = function TxBadgeRibbon(_ref2) {
        var text = _ref2.text,
          _ref2$status = _ref2.status,
          status = void 0 === _ref2$status ? "default" : _ref2$status,
          _ref2$placement = _ref2.placement,
          placement = void 0 === _ref2$placement ? "end" : _ref2$placement,
          children = _ref2.children,
          className = _ref2.className,
          props = (0, objectWithoutProperties.A)(_ref2, _excluded2);
        return (0, jsx_runtime.jsxs)(
          RibbonWrapper,
          (0, objectSpread2.A)(
            (0, objectSpread2.A)({ className }, props),
            {},
            { children: [children, (0, jsx_runtime.jsx)(BadgeRibbon, { status, placement, children: text })] }
          )
        );
      };
      (TxBadgeRibbon.defaultProps = { text: "", status: "default", placement: "end", children: null, className: "" }),
        (TxBadge.Ribbon = TxBadgeRibbon),
        (TxBadge.__docgenInfo = {
          description: "",
          methods: [
            {
              name: "Ribbon",
              docblock: null,
              modifiers: ["static"],
              params: [
                {
                  name: '{ text, status = "default", placement = "end", children, className, ...props }',
                  optional: !1,
                  type: null,
                },
              ],
              returns: null,
            },
          ],
          displayName: "TxBadge",
          props: {
            count: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            dot: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            showZero: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            overflowCount: {
              defaultValue: { value: "99", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            status: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"success"', computed: !1 },
                  { value: '"error"', computed: !1 },
                  { value: '"warning"', computed: !1 },
                  { value: '"processing"', computed: !1 },
                  { value: '"default"', computed: !1 },
                ],
              },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
          },
        }),
        (TxBadgeRibbon.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxBadgeRibbon",
          props: {
            status: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"success"', computed: !1 },
                  { value: '"error"', computed: !1 },
                  { value: '"warning"', computed: !1 },
                  { value: '"processing"', computed: !1 },
                  { value: '"default"', computed: !1 },
                ],
              },
              required: !1,
            },
            placement: {
              defaultValue: { value: '"end"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"start"', computed: !1 },
                  { value: '"end"', computed: !1 },
                ],
              },
              required: !1,
            },
            text: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
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
