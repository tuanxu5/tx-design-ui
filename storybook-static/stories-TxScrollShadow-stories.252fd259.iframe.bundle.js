"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [1892],
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
    "./src/stories/TxScrollShadow.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_scroll_shadow_tx_scroll_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-scroll-shadow/tx-scroll-shadow.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxScrollShadow",
        component: _components_tx_scroll_shadow_tx_scroll_shadow__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Default = {
        render: function render() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _components_tx_scroll_shadow_tx_scroll_shadow__WEBPACK_IMPORTED_MODULE_0__.A,
            {
              height: "300px",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                style: { padding: "20px" },
                children: Array.from({ length: 20 }).map(function (_, i) {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", { children: ["Item ", i + 1, ": Scroll this content to see shadow effects at the top and bottom. This demonstrates the scroll shadow component in action."] }, i);
                }),
              }),
            }
          );
        },
      };
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <TxScrollShadow height="300px">\n      <div style={{\n      padding: "20px"\n    }}>\n        {Array.from({\n        length: 20\n      }).map((_, i) => <p key={i}>\n            Item {i + 1}: Scroll this content to see shadow effects at the top and bottom. This demonstrates the scroll\n            shadow component in action.\n          </p>)}\n      </div>\n    </TxScrollShadow>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./src/components/tx-scroll-shadow/tx-scroll-shadow.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "height"],
        Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  position: relative;\n  height: ", ";\n  overflow: auto;\n"]
            )),
          function (props) {
            return props.height || "300px";
          }
        ),
        TopShadow = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  position: sticky;\n  top: 0;\n  height: ",
                ";\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, transparent 100%);\n  pointer-events: none;\n  transition: height 0.2s;\n  z-index: 10;\n",
              ]
            )),
          function (props) {
            return props.show ? "20px" : "0";
          }
        ),
        BottomShadow = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  position: sticky;\n  bottom: 0;\n  height: ",
                ";\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);\n  pointer-events: none;\n  transition: height 0.2s;\n  z-index: 10;\n",
              ]
            )),
          function (props) {
            return props.show ? "20px" : "0";
          }
        ),
        TxScrollShadow = function TxScrollShadow(_ref) {
          var children = _ref.children,
            height = _ref.height,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _useState,
              2
            ),
            showTopShadow = _useState2[0],
            setShowTopShadow = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _useState3,
              2
            ),
            showBottomShadow = _useState4[0],
            setShowBottomShadow = _useState4[1],
            containerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
            checkScroll = function checkScroll() {
              if (containerRef.current) {
                var _containerRef$current = containerRef.current,
                  scrollTop = _containerRef$current.scrollTop,
                  scrollHeight = _containerRef$current.scrollHeight,
                  clientHeight = _containerRef$current.clientHeight;
                setShowTopShadow(scrollTop > 0), setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 10);
              }
            };
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
              var container = containerRef.current;
              if (container)
                return (
                  container.addEventListener("scroll", checkScroll),
                  checkScroll(),
                  function () {
                    return container.removeEventListener("scroll", checkScroll);
                  }
                );
            }, []),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
              Container,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                  { ref: containerRef, height },
                  props
                ),
                {},
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TopShadow, { show: showTopShadow ? 1 : 0 }),
                    children,
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BottomShadow, {
                      show: showBottomShadow ? 1 : 0,
                    }),
                  ],
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxScrollShadow;
      TxScrollShadow.__docgenInfo = { description: "", methods: [], displayName: "TxScrollShadow" };
    },
  },
]);
