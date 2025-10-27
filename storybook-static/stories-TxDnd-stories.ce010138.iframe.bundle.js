"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [1979],
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
    "./src/stories/TxDnd.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Compact: () => Compact,
          Interactive: () => Interactive,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_dnd_tx_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-dnd/tx-dnd.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Foundation/TxDnd",
        component: _components_tx_dnd_tx_dnd__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Interactive = function DndDemo() {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _useState,
              2
            ),
            files = _useState2[0],
            setFiles = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: { width: "100%", maxWidth: "600px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_dnd_tx_dnd__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  onDrop: function handleDrop(droppedFiles) {
                    setFiles(droppedFiles), console.log("Dropped files:", droppedFiles);
                  },
                  children: "Drop files here or click to browse",
                }
              ),
              files.length > 0 &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  style: { marginTop: "16px", fontSize: "14px", color: "#666" },
                  children: [files.length, " file(s) selected"],
                }),
            ],
          });
        },
        Compact = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "100%", maxWidth: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_dnd_tx_dnd__WEBPACK_IMPORTED_MODULE_1__.A,
                { compact: !0, children: "Upload files" }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Interactive", "Compact"];
      (Interactive.parameters = {
        ...Interactive.parameters,
        docs: {
          ...Interactive.parameters?.docs,
          source: { originalSource: "DndDemo", ...Interactive.parameters?.docs?.source },
        },
      }),
        (Compact.parameters = {
          ...Compact.parameters,
          docs: {
            ...Compact.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "100%",\n    maxWidth: "400px"\n  }}>\n      <TxDnd compact>Upload files</TxDnd>\n    </div>\n}',
              ...Compact.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-dnd/tx-dnd.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/icons/outline/index.js"),
        _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["onDrop", "compact", "children"],
        DropZone = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              [
                "\n  border: 2px dashed ",
                ";\n  background: ",
                ";\n  border-radius: 8px;\n  padding: ",
                ";\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    border-color: ",
                ";\n    background: ",
                ";\n  }\n",
              ]
            )),
          function (props) {
            return props.isDragging
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.primary
              : _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.borderLight;
          },
          function (props) {
            return props.isDragging
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.primaryLight
              : _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.bgFillLight;
          },
          function (props) {
            return props.compact ? "20px" : "40px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.primary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.primaryLight
        ),
        DropZoneIcon = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              [
                "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  color: ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.textSecondary
        ),
        DropZoneText = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              ["\n  color: ", ";\n  font-size: 14px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.textSecondary
        ),
        TxDnd = function TxDnd(_ref) {
          var onDrop = _ref.onDrop,
            _ref$compact = _ref.compact,
            compact = void 0 !== _ref$compact && _ref$compact,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              _useState,
              2
            ),
            isDragging = _useState2[0],
            setIsDragging = _useState2[1],
            fileInputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                  ref: fileInputRef,
                  type: "file",
                  multiple: !0,
                  style: { display: "none" },
                  onChange: function handleFileChange(e) {
                    var files = Array.from(e.target.files);
                    onDrop && onDrop(files);
                  },
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                  DropZone,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.A)(
                    (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.A)(
                      {
                        isDragging,
                        compact,
                        onDragOver: function handleDragOver(e) {
                          e.preventDefault(), setIsDragging(!0);
                        },
                        onDragLeave: function handleDragLeave(e) {
                          e.preventDefault(), setIsDragging(!1);
                        },
                        onDrop: function handleDrop(e) {
                          e.preventDefault(), setIsDragging(!1);
                          var files = Array.from(e.dataTransfer.files);
                          onDrop && onDrop(files);
                        },
                        onClick: function handleClick() {
                          fileInputRef.current && fileInputRef.current.click();
                        },
                      },
                      props
                    ),
                    {},
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropZoneIcon, {
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                            _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconCrossSmall,
                            { style: { width: "48px", height: "48px" } }
                          ),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropZoneText, {
                          children: children || "Drag and drop files here, or click to select",
                        }),
                      ],
                    }
                  )
                ),
              ],
            }
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxDnd;
      TxDnd.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDnd",
        props: { compact: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
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
