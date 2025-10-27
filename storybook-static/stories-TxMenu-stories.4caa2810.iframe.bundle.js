"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [2514, 8661],
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
    "./src/stories/TxMenu.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          Horizontal: () => Horizontal,
          Interactive: () => Interactive,
          Preview: () => Preview,
          WithSubmenu: () => WithSubmenu,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_menu_tx_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-menu/tx-menu.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxMenu",
        component: _components_tx_menu_tx_menu__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          mode: { control: "select", options: ["horizontal", "vertical"] },
          onSelect: { action: "selected" },
        },
      };
      var items = [
          { key: "1", label: "Navigation One" },
          { key: "2", label: "Navigation Two" },
          { key: "3", label: "Navigation Three" },
        ],
        itemsWithSub = [
          { key: "1", label: "Navigation One" },
          {
            key: "sub1",
            label: "Navigation Two",
            children: [
              { key: "2-1", label: "Option 1" },
              { key: "2-2", label: "Option 2" },
            ],
          },
          { key: "3", label: "Navigation Three" },
        ],
        Preview = { args: { items, mode: "vertical" } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _components_tx_menu_tx_menu__WEBPACK_IMPORTED_MODULE_1__.A,
            { items, selectedKey: "1" }
          );
        },
        WithSubmenu = function WithSubmenu() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _components_tx_menu_tx_menu__WEBPACK_IMPORTED_MODULE_1__.A,
            { items: itemsWithSub, selectedKey: "2-1" }
          );
        },
        Horizontal = function Horizontal() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _components_tx_menu_tx_menu__WEBPACK_IMPORTED_MODULE_1__.A,
            { items, mode: "horizontal", selectedKey: "1" }
          );
        },
        Interactive = function Interactive() {
          var InteractiveComponent = function InteractiveComponent() {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("1"),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState,
                2
              ),
              selectedKey = _useState2[0],
              setSelectedKey = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_menu_tx_menu__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    items: itemsWithSub,
                    selectedKey,
                    onSelect: function onSelect(key) {
                      return setSelectedKey(key);
                    },
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { marginTop: "16px" },
                  children: ["Selected: ", selectedKey],
                }),
              ],
            });
          };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InteractiveComponent, {});
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "WithSubmenu", "Horizontal", "Interactive"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    items,\n    mode: "vertical"\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource: '() => {\n  return <TxMenu items={items} selectedKey="1" />;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (WithSubmenu.parameters = {
          ...WithSubmenu.parameters,
          docs: {
            ...WithSubmenu.parameters?.docs,
            source: {
              originalSource: '() => {\n  return <TxMenu items={itemsWithSub} selectedKey="2-1" />;\n}',
              ...WithSubmenu.parameters?.docs?.source,
            },
          },
        }),
        (Horizontal.parameters = {
          ...Horizontal.parameters,
          docs: {
            ...Horizontal.parameters?.docs,
            source: {
              originalSource: '() => {\n  return <TxMenu items={items} mode="horizontal" selectedKey="1" />;\n}',
              ...Horizontal.parameters?.docs?.source,
            },
          },
        }),
        (Interactive.parameters = {
          ...Interactive.parameters,
          docs: {
            ...Interactive.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const InteractiveComponent = () => {\n    const [selectedKey, setSelectedKey] = useState("1");\n    return <div>\n        <TxMenu items={itemsWithSub} selectedKey={selectedKey} onSelect={key => setSelectedKey(key)} />\n        <div style={{\n        marginTop: "16px"\n      }}>Selected: {selectedKey}</div>\n      </div>;\n  };\n  return <InteractiveComponent />;\n}',
              ...Interactive.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-menu/tx-menu.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_menu });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        toConsumableArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
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
        StyledMenuWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 8px;\n  overflow: hidden;\n",
            ])),
          function (props) {
            return "horizontal" === props.mode ? "100%" : "256px";
          },
          colors.A.bgWhite,
          colors.A.borderLight
        ),
        StyledMenuList = styled_components_browser_esm.Ay.ul(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  display: flex;\n  flex-direction: ",
              ";\n  gap: 4px;\n",
            ])),
          function (props) {
            return "horizontal" === props.mode ? "row" : "column";
          }
        ),
        StyledMenuItem = styled_components_browser_esm.Ay.li(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 12px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
              ";\n  background-color: ",
              ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.active ? colors.A.primary : colors.A.textPrimary;
          },
          function (props) {
            return props.active ? colors.A.primaryLight : "transparent";
          },
          function (props) {
            return props.active ? colors.A.primaryLight : colors.A.bgFill;
          },
          colors.A.primary,
          colors.A.textTertiary
        ),
        StyledSubMenu = styled_components_browser_esm.Ay.div(
          _templateObject4 || (_templateObject4 = (0, taggedTemplateLiteral.A)([""]))
        ),
        StyledSubMenuTitle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 12px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
              ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n    transition: transform 0.2s ease;\n    transform: ",
              ";\n  }\n",
            ])),
          colors.A.textPrimary,
          colors.A.bgFill,
          colors.A.primary,
          function (props) {
            return props.open ? "rotate(180deg)" : "rotate(0deg)";
          }
        ),
        StyledSubMenuList = styled_components_browser_esm.Ay.ul(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 24px;\n  display: ",
              ";\n",
            ])),
          function (props) {
            return props.open ? "block" : "none";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "mode", "selectedKey", "onSelect"],
        ChevronDown = function ChevronDown() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "6 9 12 15 18 9" }),
          });
        },
        TxMenu = function TxMenu(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$mode = _ref.mode,
            mode = void 0 === _ref$mode ? "vertical" : _ref$mode,
            selectedKey = _ref.selectedKey,
            onSelect = _ref.onSelect,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)([]),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            openKeys = _useState2[0],
            setOpenKeys = _useState2[1],
            handleItemClick = function handleItemClick(key) {
              onSelect && onSelect(key);
            },
            renderMenuItem = function renderMenuItem(item) {
              return item.children
                ? (0, jsx_runtime.jsxs)(
                    StyledSubMenu,
                    {
                      children: [
                        (0, jsx_runtime.jsxs)(StyledSubMenuTitle, {
                          onClick: function onClick() {
                            return (function handleSubMenuClick(key) {
                              openKeys.includes(key)
                                ? setOpenKeys(
                                    openKeys.filter(function (k) {
                                      return k !== key;
                                    })
                                  )
                                : setOpenKeys([].concat((0, toConsumableArray.A)(openKeys), [key]));
                            })(item.key);
                          },
                          open: openKeys.includes(item.key),
                          children: [
                            (0, jsx_runtime.jsxs)("span", { children: [item.icon, item.label] }),
                            (0, jsx_runtime.jsx)(ChevronDown, {}),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(StyledSubMenuList, {
                          open: openKeys.includes(item.key),
                          children: item.children.map(function (child) {
                            return (0, jsx_runtime.jsxs)(
                              StyledMenuItem,
                              {
                                active: selectedKey === child.key,
                                onClick: function onClick() {
                                  return handleItemClick(child.key);
                                },
                                disabled: child.disabled,
                                children: [child.icon, child.label],
                              },
                              child.key
                            );
                          }),
                        }),
                      ],
                    },
                    item.key
                  )
                : (0, jsx_runtime.jsxs)(
                    StyledMenuItem,
                    {
                      active: selectedKey === item.key,
                      onClick: function onClick() {
                        return handleItemClick(item.key);
                      },
                      disabled: item.disabled,
                      children: [item.icon, item.label],
                    },
                    item.key
                  );
            };
          return (0, jsx_runtime.jsx)(
            StyledMenuWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ mode }, rest),
              {},
              {
                children: (0, jsx_runtime.jsx)(StyledMenuList, {
                  mode,
                  children: items.map(function (item) {
                    return renderMenuItem(item);
                  }),
                }),
              }
            )
          );
        };
      TxMenu.defaultProps = { items: [], mode: "vertical" };
      const tx_menu = TxMenu;
      TxMenu.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxMenu",
        props: {
          items: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  key: { name: "string", required: !0 },
                  label: { name: "node", required: !0 },
                  icon: { name: "node", required: !1 },
                  disabled: { name: "bool", required: !1 },
                  children: { name: "array", required: !1 },
                },
              },
            },
            required: !1,
          },
          mode: {
            defaultValue: { value: '"vertical"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"horizontal"', computed: !1 },
                { value: '"vertical"', computed: !1 },
              ],
            },
            required: !1,
          },
          selectedKey: { description: "", type: { name: "string" }, required: !1 },
          onSelect: { description: "", type: { name: "func" }, required: !1 },
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
