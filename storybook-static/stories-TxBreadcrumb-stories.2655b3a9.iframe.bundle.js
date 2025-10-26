"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [728, 661],
  {
    "./src/stories/TxBreadcrumb.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          CustomSeparator: () => CustomSeparator,
          Preview: () => Preview,
          WithoutLinks: () => WithoutLinks,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-breadcrumb/tx-breadcrumb.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Navigation/TxBreadcrumb",
        component: _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { separator: { control: "text" } },
      };
      var items = [
          { key: "home", label: "Home", href: "/" },
          { key: "category", label: "Category", href: "/category" },
          { key: "product", label: "Product" },
        ],
        Preview = { args: { items, separator: "/" } },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.A,
            { items }
          );
        },
        CustomSeparator = function CustomSeparator() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "16px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.A,
                { items, separator: ">" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.A,
                { items, separator: "-" }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.A,
                { items, separator: "•" }
              ),
            ],
          });
        },
        WithoutLinks = function WithoutLinks() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_tx_breadcrumb_tx_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.A,
            {
              items: [
                { key: "home", label: "Home" },
                { key: "category", label: "Category" },
                { key: "product", label: "Product" },
              ],
            }
          );
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "CustomSeparator", "WithoutLinks"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    items,\n    separator: "/"\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource: "() => {\n  return <TxBreadcrumb items={items} />;\n}",
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (CustomSeparator.parameters = {
          ...CustomSeparator.parameters,
          docs: {
            ...CustomSeparator.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "16px"\n  }}>\n      <TxBreadcrumb items={items} separator=">" />\n      <TxBreadcrumb items={items} separator="-" />\n      <TxBreadcrumb items={items} separator="•" />\n    </div>;\n}',
              ...CustomSeparator.parameters?.docs?.source,
            },
          },
        }),
        (WithoutLinks.parameters = {
          ...WithoutLinks.parameters,
          docs: {
            ...WithoutLinks.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const itemsWithoutLinks = [{\n    key: "home",\n    label: "Home"\n  }, {\n    key: "category",\n    label: "Category"\n  }, {\n    key: "product",\n    label: "Product"\n  }];\n  return <TxBreadcrumb items={itemsWithoutLinks} />;\n}',
              ...WithoutLinks.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-breadcrumb/tx-breadcrumb.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_breadcrumb });
      var _templateObject,
        _templateObject2,
        _templateObject3,
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
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledBreadcrumbWrapper = styled_components_browser_esm.Ay.nav(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n",
            ]))
        ),
        StyledBreadcrumbItem = styled_components_browser_esm.Ay.span(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: ",
              ";\n\n  a {\n    color: ",
              ";\n    text-decoration: none;\n    transition: color 0.2s ease;\n\n    &:hover {\n      color: ",
              ";\n    }\n  }\n",
            ])),
          function (props) {
            return props.isLast ? colors.A.textPrimary : colors.A.textSecondary;
          },
          colors.A.textSecondary,
          colors.A.primary
        ),
        StyledBreadcrumbSeparator = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  color: ", ";\n  user-select: none;\n"])),
          colors.A.textTertiary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "separator"],
        TxBreadcrumb = function TxBreadcrumb(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$separator = _ref.separator,
            separator = void 0 === _ref$separator ? "/" : _ref$separator,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            StyledBreadcrumbWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, rest),
              {},
              {
                children: items.map(function (item, index) {
                  var isLast = index === items.length - 1;
                  return (0,
                  jsx_runtime.jsxs)(StyledBreadcrumbItem, { isLast, children: [item.href ? (0, jsx_runtime.jsx)("a", { href: item.href, children: item.label }) : (0, jsx_runtime.jsx)("span", { children: item.label }), !isLast && (0, jsx_runtime.jsx)(StyledBreadcrumbSeparator, { children: separator })] }, item.key || index);
                }),
              }
            )
          );
        };
      TxBreadcrumb.defaultProps = { items: [], separator: "/" };
      const tx_breadcrumb = TxBreadcrumb;
      TxBreadcrumb.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxBreadcrumb",
        props: {
          items: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  key: { name: "string", required: !1 },
                  label: { name: "node", required: !0 },
                  href: { name: "string", required: !1 },
                },
              },
            },
            required: !1,
          },
          separator: {
            defaultValue: { value: '"/"', computed: !1 },
            description: "",
            type: { name: "node" },
            required: !1,
          },
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
