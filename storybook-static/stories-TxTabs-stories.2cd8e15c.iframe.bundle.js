"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [463, 8661],
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
    "./src/stories/TxTabs.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          CardType: () => CardType,
          Preview: () => Preview,
          Sizes: () => Sizes,
          WithDisabled: () => WithDisabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-tabs/tx-tabs.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxTabs",
        component: _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          type: { control: "select", options: ["line", "card"] },
          size: { control: "select", options: ["small", "medium", "large"] },
          onChange: { action: "changed" },
        },
      };
      var items = [
          {
            key: "1",
            label: "Tab 1",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: "Content of Tab 1" }),
          },
          {
            key: "2",
            label: "Tab 2",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: "Content of Tab 2" }),
          },
          {
            key: "3",
            label: "Tab 3",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: "Content of Tab 3" }),
          },
        ],
        Preview = { args: { items, type: "line", size: "medium" } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
            { items }
          );
        },
        CardType = function CardType() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
            { items, type: "card" }
          );
        },
        Sizes = function Sizes() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "24px", width: "500px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
                { items, size: "small" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
                { items, size: "medium" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
                { items, size: "large" }
              ),
            ],
          });
        },
        WithDisabled = function WithDisabled() {
          var itemsWithDisabled = [].concat(items, [
            {
              key: "4",
              label: "Disabled Tab",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                children: "Content of Tab 4",
              }),
              disabled: !0,
            },
          ]);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_tx_tabs_tx_tabs__WEBPACK_IMPORTED_MODULE_0__.A,
            { items: itemsWithDisabled }
          );
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "CardType", "Sizes", "WithDisabled"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    items,\n    type: "line",\n    size: "medium"\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource: "() => {\n  return <TxTabs items={items} />;\n}",
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (CardType.parameters = {
          ...CardType.parameters,
          docs: {
            ...CardType.parameters?.docs,
            source: {
              originalSource: '() => {\n  return <TxTabs items={items} type="card" />;\n}',
              ...CardType.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px",\n    width: "500px"\n  }}>\n      <TxTabs items={items} size="small" />\n      <TxTabs items={items} size="medium" />\n      <TxTabs items={items} size="large" />\n    </div>;\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (WithDisabled.parameters = {
          ...WithDisabled.parameters,
          docs: {
            ...WithDisabled.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const itemsWithDisabled = [...items, {\n    key: "4",\n    label: "Disabled Tab",\n    children: <div>Content of Tab 4</div>,\n    disabled: true\n  }];\n  return <TxTabs items={itemsWithDisabled} />;\n}',
              ...WithDisabled.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-tabs/tx-tabs.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_tabs });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        StyledTabsWrapper = styled_components_browser_esm.Ay.div(
          _templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(["\n  width: 100%;\n"]))
        ),
        StyledTabsList = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: ",
              ";\n  border-bottom: ",
              ";\n  background-color: ",
              ";\n  padding: ",
              ";\n  border-radius: ",
              ";\n",
            ])),
          function (props) {
            return "card" === props.type ? "4px" : "0";
          },
          function (props) {
            return "line" === props.type ? "2px solid ".concat(colors.A.borderLight) : "none";
          },
          function (props) {
            return "card" === props.type ? colors.A.bgFill : "transparent";
          },
          function (props) {
            return "card" === props.type ? "4px" : "0";
          },
          function (props) {
            return "card" === props.type ? "8px" : "0";
          }
        ),
        StyledTab = styled_components_browser_esm.Ay.button(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  transition: all 0.2s ease;\n  position: relative;\n  white-space: nowrap;\n  border-radius: ",
              ";\n\n  &:hover {\n    color: ",
              ";\n    background-color: ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: ",
              ";\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 16px";
              case "large":
                return "16px 24px";
              default:
                return "12px 20px";
            }
          },
          function (props) {
            return props.active ? colors.A.primary : colors.A.textSecondary;
          },
          function (props) {
            return "card" === props.type ? "6px" : "0";
          },
          colors.A.primary,
          function (props) {
            return "card" === props.type ? colors.A.bgWhite : "transparent";
          },
          colors.A.textTertiary,
          function (props) {
            return (
              props.active &&
              "line" === props.type &&
              '\n    &::after {\n      content: "";\n      position: absolute;\n      bottom: -2px;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background-color: '.concat(
                colors.A.primary,
                ";\n    }\n  "
              )
            );
          },
          function (props) {
            return (
              props.active &&
              "card" === props.type &&
              "\n    background-color: ".concat(
                colors.A.bgWhite,
                ";\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n  "
              )
            );
          }
        ),
        StyledTabPanel = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)(["\n  padding: 24px 0;\n  display: ", ";\n"])),
          function (props) {
            return props.active ? "block" : "none";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["defaultActiveKey", "activeKey", "onChange", "items", "type", "size"],
        TxTabs = function TxTabs(_ref) {
          var _items$,
            defaultActiveKey = _ref.defaultActiveKey,
            activeKey = _ref.activeKey,
            onChange = _ref.onChange,
            _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? "line" : _ref$type,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(
              defaultActiveKey || (null === (_items$ = items[0]) || void 0 === _items$ ? void 0 : _items$.key)
            ),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            internalActiveKey = _useState2[0],
            setInternalActiveKey = _useState2[1],
            currentActiveKey = void 0 !== activeKey ? activeKey : internalActiveKey;
          return (0, jsx_runtime.jsxs)(
            StyledTabsWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, rest),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(StyledTabsList, {
                    type,
                    children: items.map(function (item) {
                      return (0, jsx_runtime.jsx)(
                        StyledTab,
                        {
                          active: currentActiveKey === item.key,
                          onClick: function onClick() {
                            return (function handleTabClick(key) {
                              void 0 === activeKey && setInternalActiveKey(key), onChange && onChange(key);
                            })(item.key);
                          },
                          disabled: item.disabled,
                          type,
                          size,
                          children: item.label,
                        },
                        item.key
                      );
                    }),
                  }),
                  items.map(function (item) {
                    return (0,
                    jsx_runtime.jsx)(StyledTabPanel, { active: currentActiveKey === item.key, children: item.children }, item.key);
                  }),
                ],
              }
            )
          );
        };
      TxTabs.defaultProps = { items: [], type: "line", size: "medium" };
      const tx_tabs = TxTabs;
      TxTabs.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTabs",
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
                  children: { name: "node", required: !1 },
                  disabled: { name: "bool", required: !1 },
                },
              },
            },
            required: !1,
          },
          type: {
            defaultValue: { value: '"line"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"line"', computed: !1 },
                { value: '"card"', computed: !1 },
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
          defaultActiveKey: { description: "", type: { name: "string" }, required: !1 },
          activeKey: { description: "", type: { name: "string" }, required: !1 },
          onChange: { description: "", type: { name: "func" }, required: !1 },
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
