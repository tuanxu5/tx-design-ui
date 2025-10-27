"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [6438],
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
    "./src/stories/TxTransfer.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CustomTitles: () => CustomTitles,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_transfer_tx_transfer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-transfer/tx-transfer.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxTransfer",
        component: _components_tx_transfer_tx_transfer__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var data = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
        Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "700px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_transfer_tx_transfer__WEBPACK_IMPORTED_MODULE_0__.A,
                { data }
              ),
            });
          },
        },
        CustomTitles = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "100%", maxWidth: "700px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_transfer_tx_transfer__WEBPACK_IMPORTED_MODULE_0__.A,
                { data, titles: ["Available", "Selected"] }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Basic", "CustomTitles"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "700px"\n  }}>\n      <TxTransfer data={data} />\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (CustomTitles.parameters = {
          ...CustomTitles.parameters,
          docs: {
            ...CustomTitles.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "700px"\n  }}>\n      <TxTransfer data={data} titles={["Available", "Selected"]} />\n    </div>\n}',
              ...CustomTitles.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-transfer/tx-transfer.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["data", "titles"],
        TransferContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  gap: 16px;\n  width: 100%;\n"]
            ))
        ),
        TransferBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  flex: 1;\n  border: 1px solid ", ";\n  border-radius: 8px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        TransferHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  padding: 12px 16px;\n  border-bottom: 1px solid ", ";\n  font-weight: 500;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        TransferList = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  padding: 8px;\n  max-height: 300px;\n  overflow-y: auto;\n"]
            ))
        ),
        TransferItem = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  padding: 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n\n  ",
                "\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight,
          function (props) {
            return (
              props.selected &&
              "\n    background: "
                .concat(_theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primaryLight, ";\n    color: ")
                .concat(_theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary, ";\n  ")
            );
          }
        ),
        TransferControls = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n"]
            ))
        ),
        TxTransfer = function TxTransfer(_ref) {
          var data = _ref.data,
            _ref$titles = _ref.titles,
            titles = void 0 === _ref$titles ? ["Source", "Target"] : _ref$titles,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(data || []),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            leftData = _useState2[0],
            setLeftData = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState3,
              2
            ),
            rightData = _useState4[0],
            setRightData = _useState4[1],
            _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState5,
              2
            ),
            selectedLeft = _useState6[0],
            setSelectedLeft = _useState6[1],
            _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState7,
              2
            ),
            selectedRight = _useState8[0],
            setSelectedRight = _useState8[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            TransferContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.A)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TransferBox, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TransferHeader, { children: titles[0] }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TransferList, {
                        children: leftData.map(function (item, index) {
                          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                            TransferItem,
                            {
                              selected: selectedLeft.includes(item),
                              onClick: function onClick() {
                                return setSelectedLeft(
                                  [].concat(
                                    (0,
                                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                      selectedLeft
                                    ),
                                    [item]
                                  )
                                );
                              },
                              children: item,
                            },
                            index
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TransferControls, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                        onClick: function moveRight() {
                          setRightData(
                            [].concat(
                              (0,
                              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                rightData
                              ),
                              (0,
                              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                selectedLeft
                              )
                            )
                          ),
                            setLeftData(
                              leftData.filter(function (item) {
                                return !selectedLeft.includes(item);
                              })
                            ),
                            setSelectedLeft([]);
                        },
                        children: "→",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                        onClick: function moveLeft() {
                          setLeftData(
                            [].concat(
                              (0,
                              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                leftData
                              ),
                              (0,
                              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                selectedRight
                              )
                            )
                          ),
                            setRightData(
                              rightData.filter(function (item) {
                                return !selectedRight.includes(item);
                              })
                            ),
                            setSelectedRight([]);
                        },
                        children: "←",
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TransferBox, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TransferHeader, { children: titles[1] }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TransferList, {
                        children: rightData.map(function (item, index) {
                          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                            TransferItem,
                            {
                              selected: selectedRight.includes(item),
                              onClick: function onClick() {
                                return setSelectedRight(
                                  [].concat(
                                    (0,
                                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                      selectedRight
                                    ),
                                    [item]
                                  )
                                );
                              },
                              children: item,
                            },
                            index
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTransfer;
      TxTransfer.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTransfer",
        props: { titles: { defaultValue: { value: '["Source", "Target"]', computed: !1 }, required: !1 } },
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
