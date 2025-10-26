"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [982],
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
    "./src/stories/IconLibrary.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllIcons: () => AllIcons,
          Usage: () => Usage,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/icons/index.js"),
        _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-input/tx-input.jsx"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/Icons",
        parameters: { layout: "padded" },
        tags: ["autodocs"],
      };
      var IconGrid = styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              [
                "\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 16px;\n  margin-top: 24px;\n",
              ]
            ))
        ),
        IconCard = styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              [
                "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 16px;\n  border: 1px solid ",
                ";\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: ",
                ";\n    background-color: ",
                ";\n  }\n\n  svg {\n    width: 32px;\n    height: 32px;\n    color: ",
                ";\n    margin-bottom: 12px;\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.primary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.primaryLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.textPrimary
        ),
        IconName = styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              ["\n  font-size: 12px;\n  color: ", ";\n  text-align: center;\n  word-break: break-all;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.textSecondary
        ),
        SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              ["\n  max-width: 400px;\n  margin-bottom: 16px;\n"]
            ))
        ),
        StatsText = styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              ["\n  font-size: 14px;\n  color: ", ";\n  margin-bottom: 8px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.textSecondary
        ),
        CopiedToast = styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              [
                "\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  background-color: ",
                ";\n  color: ",
                ";\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 9999;\n  animation: slideIn 0.3s ease;\n\n  @keyframes slideIn {\n    from {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n    to {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.success,
          _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.textWhite
        ),
        AllIcons = function AllIcons() {
          var AllIconsComponent = function AllIconsComponent() {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                _useState,
                2
              ),
              searchTerm = _useState2[0],
              setSearchTerm = _useState2[1],
              _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
              _useState4 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                _useState3,
                2
              ),
              copied = _useState4[0],
              setCopied = _useState4[1],
              iconEntries = Object.entries(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.A),
              filteredIcons = iconEntries.filter(function (_ref) {
                return (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                  _ref,
                  1
                )[0]
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              });
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", { children: "Icon Library" }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SearchWrapper, {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_2__.A,
                    {
                      placeholder: "Search icons...",
                      value: searchTerm,
                      onChange: function onChange(e) {
                        return setSearchTerm(e.target.value);
                      },
                      allowClear: !0,
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StatsText, {
                  children: ["Showing ", filteredIcons.length, " of ", iconEntries.length, " icons"],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconGrid, {
                  children: filteredIcons.map(function (_ref3) {
                    var _ref4 = (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                        _ref3,
                        2
                      ),
                      name = _ref4[0],
                      Icon = _ref4[1];
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                      IconCard,
                      {
                        onClick: function onClick() {
                          return (function handleCopy(iconName) {
                            navigator.clipboard.writeText(
                              "import { ".concat(iconName, ' } from "tx-design-ui/assets/icons";')
                            ),
                              setCopied(!0),
                              setTimeout(function () {
                                return setCopied(!1);
                              }, 2e3);
                          })(name);
                        },
                        title: "Click to copy import statement",
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon, {}),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconName, { children: name }),
                        ],
                      },
                      name
                    );
                  }),
                }),
                copied &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CopiedToast, {
                    children: "✓ Copied to clipboard!",
                  }),
              ],
            });
          };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AllIconsComponent, {});
        },
        Usage = function Usage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", { children: "How to use icons" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
                style: {
                  backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_3__.A.bgFill,
                  padding: "16px",
                  borderRadius: "8px",
                  overflow: "auto",
                },
                children:
                  'import { SvgIcon } from "tx-design-ui/assets/icons";\n\n// Use individual icon\nconst MyComponent = () => {\n  return <SvgIcon.IconCheck />;\n};\n\n// Or import specific icons\nimport { IconCheck, IconXClose } from "tx-design-ui/assets/icons";\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <IconCheck />\n      <IconXClose />\n    </div>\n  );\n};',
              }),
            ],
          });
        };
      const __namedExportsOrder = ["AllIcons", "Usage"];
      (AllIcons.parameters = {
        ...AllIcons.parameters,
        docs: {
          ...AllIcons.parameters?.docs,
          source: {
            originalSource:
              '() => {\n  const AllIconsComponent = () => {\n    const [searchTerm, setSearchTerm] = useState("");\n    const [copied, setCopied] = useState(false);\n    const iconEntries = Object.entries(SvgIcon);\n    const filteredIcons = iconEntries.filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()));\n    const handleCopy = iconName => {\n      navigator.clipboard.writeText(`import { ${iconName} } from "tx-design-ui/assets/icons";`);\n      setCopied(true);\n      setTimeout(() => setCopied(false), 2000);\n    };\n    return <div>\n        <h2>Icon Library</h2>\n        <SearchWrapper>\n          <TxInput placeholder="Search icons..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} allowClear />\n        </SearchWrapper>\n        <StatsText>\n          Showing {filteredIcons.length} of {iconEntries.length} icons\n        </StatsText>\n        <IconGrid>\n          {filteredIcons.map(([name, Icon]) => <IconCard key={name} onClick={() => handleCopy(name)} title="Click to copy import statement">\n              <Icon />\n              <IconName>{name}</IconName>\n            </IconCard>)}\n        </IconGrid>\n        {copied && <CopiedToast>✓ Copied to clipboard!</CopiedToast>}\n      </div>;\n  };\n  return <AllIconsComponent />;\n}',
            ...AllIcons.parameters?.docs?.source,
          },
        },
      }),
        (Usage.parameters = {
          ...Usage.parameters,
          docs: {
            ...Usage.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div>\n      <h3>How to use icons</h3>\n      <pre style={{\n      backgroundColor: colors.bgFill,\n      padding: "16px",\n      borderRadius: "8px",\n      overflow: "auto"\n    }}>\n        {`import { SvgIcon } from "tx-design-ui/assets/icons";\n\n// Use individual icon\nconst MyComponent = () => {\n  return <SvgIcon.IconCheck />;\n};\n\n// Or import specific icons\nimport { IconCheck, IconXClose } from "tx-design-ui/assets/icons";\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <IconCheck />\n      <IconXClose />\n    </div>\n  );\n};`}\n      </pre>\n    </div>;\n}',
              ...Usage.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-input/tx-input.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_input });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        icons = __webpack_require__("./src/assets/icons/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        StyledInputWrapper =
          (__webpack_require__("./src/styles/shorten.scss"),
          styled_components_browser_esm.Ay.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.A)([
                "\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n",
              ]))
          )),
        StyledTxInput = styled_components_browser_esm.Ay.input(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 30px 30px;\n  border-radius: 10px;\n  border: 1.5px solid #eef0f1;\n  font-size: 14px;\n  color: #1c252e;\n  outline: none;\n  width: 100%;\n  transition: all 0.3s ease;\n  letter-spacing: inherit;\n  background-color: ",
              ";\n\n  /* Custom placeholder color */\n  &::placeholder {\n    font-size: 13px;\n    color: #8c9bab;\n    opacity: 1;\n  }\n\n  /* For Internet Explorer */\n  &:-ms-input-placeholder {\n    color: #8c9bab;\n  }\n\n  /* For Microsoft Edge */\n  &::-ms-input-placeholder {\n    color: #8c9bab;\n  }\n\n  /* Dynamic padding based on prefix/suffix */\n  ",
              "\n\n  ",
              "\n\n  /* Status styles */\n  &.tx-ui-tx-input--success {\n    border-color: #52c41a;\n    color: #52c41a;\n    ",
              "\n  }\n\n  &.tx-ui-tx-input--warning {\n    border-color: #faad14;\n    color: #faad14;\n    ",
              "\n  }\n\n  &.tx-ui-tx-input--error {\n    border-color: #ff4d4f;\n    color: #ff4d4f;\n    ",
              "\n  }\n\n  &.tx-ui-tx-input--info {\n    border-color: #1890ff;\n    color: #1890ff;\n    ",
              ";\n  }\n\n  &.tx-ui-tx-input--disabled {\n    cursor: not-allowed;\n    background-color: #f3f3f4;\n    color: #a0a1a7;\n    &::placeholder {\n      color: #a0a1a7;\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-input--small {\n    padding: 12px 14px;\n    font-size: 14px;\n  }\n\n  &.tx-ui-tx-input--medium {\n    padding: 14px 16px;\n    font-size: 14px;\n  }\n\n  &.tx-ui-tx-input--large {\n    padding: 16px 18px;\n    font-size: 14px;\n  }\n",
            ])),
          function (props) {
            return props.fill && !props.status ? "#f7f8fa" : "transparent";
          },
          function (props) {
            var prefixPadding = props.prefixWidth ? "".concat(props.prefixWidth + 16, "px") : "40px";
            return props.prefix ? "\n      padding-left: ".concat(prefixPadding, " !important;\n    ") : "";
          },
          function (props) {
            var suffixPadding = props.suffixWidth ? "".concat(props.suffixWidth + 16, "px") : "40px";
            return props.suffix ? "\n      padding-right: ".concat(suffixPadding, " !important;\n    ") : "";
          },
          function (props) {
            return props.fill && "\n      background-color: #52c41a15;\n      border-color: #52c41a15;\n    ";
          },
          function (props) {
            return props.fill && "\n      background-color: #faad1415;\n      border-color: #faad1415;\n    ";
          },
          function (props) {
            return props.fill && "\n      background-color:#ff4d4f15;\n      border-color: #ff4d4f15;\n    ";
          },
          function (props) {
            return props.fill && "\n      background-color: #1890ff15;\n      border-color: #1890ff15;\n    ";
          }
        ),
        PrefixWrapper = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  color: ",
              ";\n  font-size: 14px;\n  width: 20px;\n",
            ])),
          function (props) {
            return props.color || "#1c252e";
          }
        ),
        SuffixWrapper = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  color: ",
              ";\n  font-size: 14px;\n  gap: 8px;\n",
            ])),
          function (props) {
            return props.color || "#1c252e";
          }
        ),
        PasswordToggle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: ",
              ";\n  width: 16px;\n  font-size: 14px;\n",
            ])),
          function (props) {
            return props.color || "#1c252e";
          }
        ),
        ClearButton = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  width: 16px;\n  height: 16px;\n  font-size: 14px;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.color || "#8c9bab";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "placeholder",
          "value",
          "onChange",
          "type",
          "background",
          "color",
          "size",
          "disabled",
          "prefix",
          "suffix",
          "shape",
          "loading",
          "danger",
          "status",
          "fill",
          "passwordToggle",
          "password",
          "placeholderColor",
          "allowClear",
          "onClear",
        ],
        TxInput = function TxInput(_ref) {
          var placeholder = _ref.placeholder,
            value = _ref.value,
            onChange = _ref.onChange,
            background = (_ref.type, _ref.background),
            color = _ref.color,
            size = _ref.size,
            disabled = _ref.disabled,
            prefix = _ref.prefix,
            suffix = _ref.suffix,
            loading = (_ref.shape, _ref.loading),
            danger = _ref.danger,
            status = _ref.status,
            fill = _ref.fill,
            _ref$passwordToggle = _ref.passwordToggle,
            passwordToggle = void 0 === _ref$passwordToggle || _ref$passwordToggle,
            password = _ref.password,
            placeholderColor = _ref.placeholderColor,
            _ref$allowClear = _ref.allowClear,
            allowClear = void 0 !== _ref$allowClear && _ref$allowClear,
            onClear = _ref.onClear,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            passwordVisible = _useState2[0],
            setPasswordVisible = _useState2[1],
            _useState3 = (0, react.useState)(0),
            _useState4 = (0, slicedToArray.A)(_useState3, 2),
            prefixWidth = _useState4[0],
            setPrefixWidth = _useState4[1],
            _useState5 = (0, react.useState)(0),
            _useState6 = (0, slicedToArray.A)(_useState5, 2),
            suffixWidth = _useState6[0],
            setSuffixWidth = _useState6[1],
            _useState7 = (0, react.useState)(!1),
            _useState8 = (0, slicedToArray.A)(_useState7, 2),
            showClear = _useState8[0],
            setShowClear = _useState8[1],
            prefixRef = (0, react.useRef)(null),
            suffixRef = (0, react.useRef)(null);
          (0, react.useEffect)(
            function () {
              setShowClear(allowClear && value && value.toString().length > 0);
            },
            [allowClear, value]
          );
          var getStatusColor = function getStatusColor() {
            if (disabled) return "#a0a1a7";
            switch (status) {
              case "success":
                return "#52c41a";
              case "warning":
                return "#faad14";
              case "error":
                return "#ff4d4f";
              case "info":
                return "#1890ff";
              default:
                return "#1c252e";
            }
          };
          (0, react.useEffect)(
            function () {
              prefixRef.current && setPrefixWidth(prefixRef.current.offsetWidth),
                suffixRef.current && setSuffixWidth(suffixRef.current.offsetWidth);
            },
            [prefix, suffix, password, passwordToggle, status, showClear]
          );
          var actualType = password && !passwordVisible ? "password" : "text",
            hasSuffixContent = suffix || (password && passwordToggle) || showClear,
            iconColor = getStatusColor();
          return (0, jsx_runtime.jsxs)(StyledInputWrapper, {
            children: [
              prefix && (0, jsx_runtime.jsx)(PrefixWrapper, { ref: prefixRef, color: iconColor, children: prefix }),
              (0, jsx_runtime.jsx)(
                StyledTxInput,
                (0, objectSpread2.A)(
                  {
                    type: actualType,
                    value,
                    onChange,
                    placeholder,
                    disabled,
                    prefix,
                    suffix: hasSuffixContent,
                    prefixWidth,
                    suffixWidth,
                    fill,
                    status,
                    className: [
                      "tx-ui-tx-input",
                      disabled && "tx-ui-tx-input--disabled",
                      loading && "tx-ui-tx-input--loading",
                      danger && "tx-ui-tx-input--danger",
                      status && "tx-ui-tx-input--".concat(status),
                      "tx-ui-tx-input--".concat(size),
                    ]
                      .filter(Boolean)
                      .join(" "),
                    style: {
                      color: color || (status ? getStatusColor() : "#1c252e"),
                      background: background || "",
                      "--placeholder-color": placeholderColor || "#8c9bab",
                    },
                  },
                  rest
                )
              ),
              hasSuffixContent &&
                (0, jsx_runtime.jsxs)(SuffixWrapper, {
                  ref: suffixRef,
                  color: iconColor,
                  children: [
                    showClear &&
                      !disabled &&
                      (0, jsx_runtime.jsx)(ClearButton, {
                        onClick: function handleClearInput(e) {
                          e.stopPropagation();
                          onChange && onChange({ target: { value: "" } }), onClear && onClear();
                        },
                        color: status ? iconColor : "#8c9bab",
                        children: (0, jsx_runtime.jsx)(icons.A.IconXClose, {}),
                      }),
                    password &&
                      passwordToggle &&
                      (0, jsx_runtime.jsx)(PasswordToggle, {
                        onClick: function togglePasswordVisibility() {
                          setPasswordVisible(!passwordVisible);
                        },
                        color: iconColor,
                        children: passwordVisible
                          ? (0, jsx_runtime.jsx)(icons.A.IconEye01, {})
                          : (0, jsx_runtime.jsx)(icons.A.IconEyeSlash01, {}),
                      }),
                    suffix && suffix,
                  ],
                }),
            ],
          });
        };
      TxInput.defaultProps = {
        placeholder: "",
        type: "text",
        size: "medium",
        onChange: function onChange() {},
        disabled: !1,
        loading: !1,
        danger: !1,
        fill: !1,
        passwordToggle: !0,
        allowClear: !1,
      };
      const tx_input = TxInput;
      TxInput.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxInput",
        props: {
          type: {
            defaultValue: { value: '"text"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"text"', computed: !1 },
                { value: '"password"', computed: !1 },
                { value: '"email"', computed: !1 },
                { value: '"number"', computed: !1 },
                { value: '"tel"', computed: !1 },
                { value: '"url"', computed: !1 },
              ],
            },
            required: !1,
          },
          passwordToggle: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          allowClear: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          placeholder: {
            defaultValue: { value: '""', computed: !1 },
            description: "",
            type: { name: "string" },
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
          onChange: {
            defaultValue: { value: "() => {}", computed: !1 },
            description: "",
            type: { name: "func" },
            required: !1,
          },
          disabled: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          loading: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          danger: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          fill: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          value: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          background: { description: "", type: { name: "string" }, required: !1 },
          color: { description: "", type: { name: "string" }, required: !1 },
          prefix: { description: "", type: { name: "node" }, required: !1 },
          suffix: { description: "", type: { name: "node" }, required: !1 },
          status: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
                { value: '"info"', computed: !1 },
              ],
            },
            required: !1,
          },
          password: { description: "", type: { name: "bool" }, required: !1 },
          placeholderColor: { description: "", type: { name: "string" }, required: !1 },
          onClear: { description: "", type: { name: "func" }, required: !1 },
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
