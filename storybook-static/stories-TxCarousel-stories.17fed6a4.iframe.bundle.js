"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9313],
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
    "./src/stories/TxCarousel.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Autoplay: () => Autoplay,
          Basic: () => Basic,
          CustomHeight: () => CustomHeight,
          NoArrows: () => NoArrows,
          NoDots: () => NoDots,
          NotInfinite: () => NotInfinite,
          WithContent: () => WithContent,
          WithCounter: () => WithCounter,
          WithImages: () => WithImages,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-carousel/tx-carousel.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxCarousel",
        component: _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          autoPlay: { control: "boolean" },
          autoPlaySpeed: { control: "number" },
          speed: { control: "number" },
          dots: { control: "boolean" },
          arrows: { control: "boolean" },
          infinite: { control: "boolean" },
          showCounter: { control: "boolean" },
          onChange: { action: "slide changed" },
        },
      };
      var slideStyle = {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
        },
        Basic = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                    {},
                    args
                  ),
                  {},
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        style: (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          (0,
                          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                            {},
                            slideStyle
                          ),
                          {},
                          { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                        ),
                        children: "1",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        style: (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          (0,
                          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                            {},
                            slideStyle
                          ),
                          {},
                          { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                        ),
                        children: "2",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        style: (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          (0,
                          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                            {},
                            slideStyle
                          ),
                          {},
                          { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
                        ),
                        children: "3",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        style: (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          (0,
                          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                            {},
                            slideStyle
                          ),
                          {},
                          { background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }
                        ),
                        children: "4",
                      }),
                    ],
                  }
                )
              ),
            });
          },
        },
        Autoplay = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  autoPlay: !0,
                  autoPlaySpeed: 2e3,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                      ),
                      children: "Slide 1",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                      ),
                      children: "Slide 2",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
                      ),
                      children: "Slide 3",
                    }),
                  ],
                }
              ),
            });
          },
        },
        WithCounter = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  showCounter: !0,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                      ),
                      children: "1",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                      ),
                      children: "2",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
                      ),
                      children: "3",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }
                      ),
                      children: "4",
                    }),
                  ],
                }
              ),
            });
          },
        },
        NoDots = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  dots: !1,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                      ),
                      children: "1",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                      ),
                      children: "2",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
                      ),
                      children: "3",
                    }),
                  ],
                }
              ),
            });
          },
        },
        NoArrows = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  arrows: !1,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                      ),
                      children: "1",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                      ),
                      children: "2",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
                      ),
                      children: "3",
                    }),
                  ],
                }
              ),
            });
          },
        },
        NotInfinite = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  infinite: !1,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                      ),
                      children: "First Slide",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                      ),
                      children: "Middle Slide",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
                      ),
                      children: "Last Slide",
                    }),
                  ],
                }
              ),
            });
          },
        },
        CustomHeight = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "600px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  height: "200px",
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
                      ),
                      children: "Small",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        { background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                      ),
                      children: "Height",
                    }),
                  ],
                }
              ),
            });
          },
        },
        WithImages = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "700px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  autoPlay: !0,
                  autoPlaySpeed: 3e3,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { width: "100%", height: "400px" },
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                        src: "https://picsum.photos/700/400?random=1",
                        alt: "Slide 1",
                        style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" },
                      }),
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { width: "100%", height: "400px" },
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                        src: "https://picsum.photos/700/400?random=2",
                        alt: "Slide 2",
                        style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" },
                      }),
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { width: "100%", height: "400px" },
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                        src: "https://picsum.photos/700/400?random=3",
                        alt: "Slide 3",
                        style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" },
                      }),
                    }),
                  ],
                }
              ),
            });
          },
        },
        WithContent = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "700px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components_tx_carousel_tx_carousel__WEBPACK_IMPORTED_MODULE_0__.T,
                {
                  autoPlay: !0,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        {
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          flexDirection: "column",
                          gap: "16px",
                        }
                      ),
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                          style: { margin: 0, fontSize: "32px" },
                          children: "Welcome",
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                          style: { margin: 0, fontSize: "16px", opacity: 0.9 },
                          children: "Discover amazing features",
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        {
                          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                          flexDirection: "column",
                          gap: "16px",
                        }
                      ),
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                          style: { margin: 0, fontSize: "32px" },
                          children: "Explore",
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                          style: { margin: 0, fontSize: "16px", opacity: 0.9 },
                          children: "Everything you need",
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      style: (0,
                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                        (0,
                        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                          {},
                          slideStyle
                        ),
                        {},
                        {
                          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                          flexDirection: "column",
                          gap: "16px",
                        }
                      ),
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                          style: { margin: 0, fontSize: "32px" },
                          children: "Get Started",
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                          style: { margin: 0, fontSize: "16px", opacity: 0.9 },
                          children: "Join us today",
                        }),
                      ],
                    }),
                  ],
                }
              ),
            });
          },
        };
      const __namedExportsOrder = [
        "Basic",
        "Autoplay",
        "WithCounter",
        "NoDots",
        "NoArrows",
        "NotInfinite",
        "CustomHeight",
        "WithImages",
        "WithContent",
      ];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel {...args}>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>1</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>2</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"\n      }}>3</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"\n      }}>4</div>\n      </TxCarousel>\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Autoplay.parameters = {
          ...Autoplay.parameters,
          docs: {
            ...Autoplay.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel autoPlay autoPlaySpeed={2000}>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>Slide 1</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>Slide 2</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"\n      }}>Slide 3</div>\n      </TxCarousel>\n    </div>\n}',
              ...Autoplay.parameters?.docs?.source,
            },
          },
        }),
        (WithCounter.parameters = {
          ...WithCounter.parameters,
          docs: {
            ...WithCounter.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel showCounter>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>1</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>2</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"\n      }}>3</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"\n      }}>4</div>\n      </TxCarousel>\n    </div>\n}',
              ...WithCounter.parameters?.docs?.source,
            },
          },
        }),
        (NoDots.parameters = {
          ...NoDots.parameters,
          docs: {
            ...NoDots.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel dots={false}>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>1</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>2</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"\n      }}>3</div>\n      </TxCarousel>\n    </div>\n}',
              ...NoDots.parameters?.docs?.source,
            },
          },
        }),
        (NoArrows.parameters = {
          ...NoArrows.parameters,
          docs: {
            ...NoArrows.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel arrows={false}>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>1</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>2</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"\n      }}>3</div>\n      </TxCarousel>\n    </div>\n}',
              ...NoArrows.parameters?.docs?.source,
            },
          },
        }),
        (NotInfinite.parameters = {
          ...NotInfinite.parameters,
          docs: {
            ...NotInfinite.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel infinite={false}>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>\n          First Slide\n        </div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>\n          Middle Slide\n        </div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"\n      }}>Last Slide</div>\n      </TxCarousel>\n    </div>\n}',
              ...NotInfinite.parameters?.docs?.source,
            },
          },
        }),
        (CustomHeight.parameters = {
          ...CustomHeight.parameters,
          docs: {
            ...CustomHeight.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "600px"\n  }}>\n      <TxCarousel height="200px">\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"\n      }}>Small</div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"\n      }}>Height</div>\n      </TxCarousel>\n    </div>\n}',
              ...CustomHeight.parameters?.docs?.source,
            },
          },
        }),
        (WithImages.parameters = {
          ...WithImages.parameters,
          docs: {
            ...WithImages.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "700px"\n  }}>\n      <TxCarousel autoPlay autoPlaySpeed={3000}>\n        <div style={{\n        width: "100%",\n        height: "400px"\n      }}>\n          <img src="https://picsum.photos/700/400?random=1" alt="Slide 1" style={{\n          width: "100%",\n          height: "100%",\n          objectFit: "cover",\n          borderRadius: "8px"\n        }} />\n        </div>\n        <div style={{\n        width: "100%",\n        height: "400px"\n      }}>\n          <img src="https://picsum.photos/700/400?random=2" alt="Slide 2" style={{\n          width: "100%",\n          height: "100%",\n          objectFit: "cover",\n          borderRadius: "8px"\n        }} />\n        </div>\n        <div style={{\n        width: "100%",\n        height: "400px"\n      }}>\n          <img src="https://picsum.photos/700/400?random=3" alt="Slide 3" style={{\n          width: "100%",\n          height: "100%",\n          objectFit: "cover",\n          borderRadius: "8px"\n        }} />\n        </div>\n      </TxCarousel>\n    </div>\n}',
              ...WithImages.parameters?.docs?.source,
            },
          },
        }),
        (WithContent.parameters = {
          ...WithContent.parameters,
          docs: {
            ...WithContent.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "700px"\n  }}>\n      <TxCarousel autoPlay>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\n        flexDirection: "column",\n        gap: "16px"\n      }}>\n          <h2 style={{\n          margin: 0,\n          fontSize: "32px"\n        }}>Welcome</h2>\n          <p style={{\n          margin: 0,\n          fontSize: "16px",\n          opacity: 0.9\n        }}>Discover amazing features</p>\n        </div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",\n        flexDirection: "column",\n        gap: "16px"\n      }}>\n          <h2 style={{\n          margin: 0,\n          fontSize: "32px"\n        }}>Explore</h2>\n          <p style={{\n          margin: 0,\n          fontSize: "16px",\n          opacity: 0.9\n        }}>Everything you need</p>\n        </div>\n        <div style={{\n        ...slideStyle,\n        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",\n        flexDirection: "column",\n        gap: "16px"\n      }}>\n          <h2 style={{\n          margin: 0,\n          fontSize: "32px"\n        }}>Get Started</h2>\n          <p style={{\n          margin: 0,\n          fontSize: "16px",\n          opacity: 0.9\n        }}>Join us today</p>\n        </div>\n      </TxCarousel>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-carousel/tx-carousel.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => TxCarousel });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
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
        colors = __webpack_require__("./src/theme/colors.js"),
        CarouselWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        CarouselContainer = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  transition: transform ",
              "ms ease-in-out;\n  transform: translateX(-",
              "%);\n",
            ])),
          function (props) {
            return props.speed;
          },
          function (props) {
            return 100 * props.currentSlide;
          }
        ),
        CarouselSlide = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 0 0 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
              ";\n  border-radius: 8px;\n  min-height: ",
              ";\n",
            ])),
          colors.A.bgFillLight,
          function (props) {
            return props.height || "300px";
          }
        ),
        CarouselArrow = styled_components_browser_esm.Ay.button(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  ",
              "\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.9);\n  color: ",
              ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n\n  &:hover {\n    background-color: white;\n    transform: translateY(-50%) scale(1.1);\n  }\n\n  &:active {\n    transform: translateY(-50%) scale(0.95);\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return "prev" === props.direction ? "left: 16px;" : "right: 16px;";
          },
          colors.A.textPrimary
        ),
        CarouselDots = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 8px;\n  z-index: 2;\n",
            ]))
        ),
        CarouselDot = styled_components_browser_esm.Ay.button(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  height: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: ",
              ";\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0;\n\n  &:hover {\n    background-color: white;\n  }\n",
            ])),
          function (props) {
            return props.active ? "24px" : "8px";
          },
          function (props) {
            return props.active ? "white" : "rgba(255, 255, 255, 0.5)";
          }
        ),
        CarouselCounter = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  padding: 4px 12px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  z-index: 2;\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "children",
          "autoPlay",
          "autoPlaySpeed",
          "speed",
          "dots",
          "arrows",
          "infinite",
          "height",
          "showCounter",
          "initialSlide",
          "onChange",
          "className",
        ],
        TxCarousel = function TxCarousel(_ref) {
          var children = _ref.children,
            _ref$autoPlay = _ref.autoPlay,
            autoPlay = void 0 !== _ref$autoPlay && _ref$autoPlay,
            _ref$autoPlaySpeed = _ref.autoPlaySpeed,
            autoPlaySpeed = void 0 === _ref$autoPlaySpeed ? 3e3 : _ref$autoPlaySpeed,
            _ref$speed = _ref.speed,
            speed = void 0 === _ref$speed ? 500 : _ref$speed,
            _ref$dots = _ref.dots,
            dots = void 0 === _ref$dots || _ref$dots,
            _ref$arrows = _ref.arrows,
            arrows = void 0 === _ref$arrows || _ref$arrows,
            _ref$infinite = _ref.infinite,
            infinite = void 0 === _ref$infinite || _ref$infinite,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "300px" : _ref$height,
            _ref$showCounter = _ref.showCounter,
            showCounter = void 0 !== _ref$showCounter && _ref$showCounter,
            _ref$initialSlide = _ref.initialSlide,
            initialSlide = void 0 === _ref$initialSlide ? 0 : _ref$initialSlide,
            onChange = _ref.onChange,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(initialSlide),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            currentSlide = _useState2[0],
            setCurrentSlide = _useState2[1],
            _useState3 = (0, react.useState)(!1),
            _useState4 = (0, slicedToArray.A)(_useState3, 2),
            isHovered = _useState4[0],
            setIsHovered = _useState4[1],
            autoplayRef = (0, react.useRef)(null),
            slides = Array.isArray(children) ? children : [children],
            totalSlides = slides.length;
          (0, react.useEffect)(
            function () {
              return (
                autoPlay &&
                  !isHovered &&
                  totalSlides > 1 &&
                  (autoplayRef.current = setInterval(function () {
                    goToNext();
                  }, autoPlaySpeed)),
                function () {
                  autoplayRef.current && clearInterval(autoplayRef.current);
                }
              );
            },
            [autoPlay, autoPlaySpeed, isHovered, currentSlide]
          );
          var goToNext = function goToNext() {
            setCurrentSlide(function (prev) {
              var next = prev + 1;
              return next >= totalSlides ? (infinite ? 0 : prev) : next;
            });
          };
          (0, react.useEffect)(
            function () {
              onChange && onChange(currentSlide);
            },
            [currentSlide]
          );
          return (0, jsx_runtime.jsxs)(
            CarouselWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  className,
                  onMouseEnter: function handleMouseEnter() {
                    setIsHovered(!0);
                  },
                  onMouseLeave: function handleMouseLeave() {
                    setIsHovered(!1);
                  },
                },
                props
              ),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(CarouselContainer, {
                    currentSlide,
                    speed,
                    children: slides.map(function (slide, index) {
                      return (0, jsx_runtime.jsx)(CarouselSlide, { height, children: slide }, index);
                    }),
                  }),
                  arrows &&
                    totalSlides > 1 &&
                    (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                      children: [
                        (0, jsx_runtime.jsx)(CarouselArrow, {
                          direction: "prev",
                          onClick: function goToPrev() {
                            setCurrentSlide(function (prev) {
                              var next = prev - 1;
                              return next < 0 ? (infinite ? totalSlides - 1 : prev) : next;
                            });
                          },
                          disabled: !infinite && 0 === currentSlide,
                          children: (0, jsx_runtime.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: (0, jsx_runtime.jsx)("polyline", { points: "15 18 9 12 15 6" }),
                          }),
                        }),
                        (0, jsx_runtime.jsx)(CarouselArrow, {
                          direction: "next",
                          onClick: goToNext,
                          disabled: !infinite && currentSlide === totalSlides - 1,
                          children: (0, jsx_runtime.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: (0, jsx_runtime.jsx)("polyline", { points: "9 18 15 12 9 6" }),
                          }),
                        }),
                      ],
                    }),
                  dots &&
                    totalSlides > 1 &&
                    (0, jsx_runtime.jsx)(CarouselDots, {
                      children: slides.map(function (_, index) {
                        return (0, jsx_runtime.jsx)(
                          CarouselDot,
                          {
                            active: index === currentSlide,
                            onClick: function onClick() {
                              return (function goToSlide(index) {
                                setCurrentSlide(index), onChange && onChange(index);
                              })(index);
                            },
                          },
                          index
                        );
                      }),
                    }),
                  showCounter &&
                    totalSlides > 1 &&
                    (0, jsx_runtime.jsxs)(CarouselCounter, { children: [currentSlide + 1, " / ", totalSlides] }),
                ],
              }
            )
          );
        };
      (TxCarousel.defaultProps = {
        autoPlay: !1,
        autoPlaySpeed: 3e3,
        speed: 500,
        dots: !0,
        arrows: !0,
        infinite: !0,
        height: "300px",
        showCounter: !1,
        initialSlide: 0,
        onChange: void 0,
        className: "",
      }),
        (TxCarousel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxCarousel",
          props: {
            autoPlay: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            autoPlaySpeed: {
              defaultValue: { value: "3000", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            speed: {
              defaultValue: { value: "500", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            dots: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            arrows: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            infinite: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            height: {
              defaultValue: { value: '"300px"', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            showCounter: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            initialSlide: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            onChange: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            children: { description: "", type: { name: "node" }, required: !0 },
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
