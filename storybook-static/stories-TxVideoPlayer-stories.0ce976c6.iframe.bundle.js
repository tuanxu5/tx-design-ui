"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [7275],
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
    "./src/stories/TxVideoPlayer.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithPoster: () => WithPoster,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_video_player_tx_video_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-video-player/tx-video-player.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxVideoPlayer",
        component: _components_tx_video_player_tx_video_player__WEBPACK_IMPORTED_MODULE_0__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Default = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "800px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_video_player_tx_video_player__WEBPACK_IMPORTED_MODULE_0__.A,
                {
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  controls: !0,
                }
              ),
            });
          },
        },
        WithPoster = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { width: "800px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_video_player_tx_video_player__WEBPACK_IMPORTED_MODULE_0__.A,
                {
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                  poster: "https://via.placeholder.com/800x450",
                  controls: !0,
                }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Default", "WithPoster"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => {\n    return <div style={{\n      width: "800px"\n    }}>\n        <TxVideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls />\n      </div>;\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithPoster.parameters = {
          ...WithPoster.parameters,
          docs: {
            ...WithPoster.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    return <div style={{\n      width: "800px"\n    }}>\n        <TxVideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" poster="https://via.placeholder.com/800x450" controls />\n      </div>;\n  }\n}',
              ...WithPoster.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-video-player/tx-video-player.jsx": (
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
        _templateObject7,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        _excluded = ["src", "poster", "autoplay", "controls"],
        VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  background: ",
                ";\n  border-radius: 8px;\n  overflow: hidden;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        VideoStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.video(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  width: 100%;\n  display: block;\n"]
            ))
        ),
        Controls = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n",
              ]
            ))
        ),
        PlayButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 24px;\n  padding: 4px;\n",
              ]
            ))
        ),
        TimeDisplay = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.span(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  color: white;\n  font-size: 12px;\n"]
            ))
        ),
        ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  flex: 1;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n  overflow: hidden;\n  cursor: pointer;\n",
              ]
            ))
        ),
        ProgressFill = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  height: 100%;\n  width: ", "%;\n  background: ", ";\n"]
            )),
          function (props) {
            return props.progress;
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
        ),
        TxVideoPlayer = function TxVideoPlayer(_ref) {
          var src = _ref.src,
            poster = _ref.poster,
            _ref$controls = (_ref.autoplay, _ref.controls),
            controls = void 0 === _ref$controls || _ref$controls,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            videoRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            playing = _useState2[0],
            setPlaying = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState3,
              2
            ),
            currentTime = _useState4[0],
            setCurrentTime = _useState4[1],
            _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            _useState6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState5,
              2
            ),
            duration = _useState6[0],
            setDuration = _useState6[1],
            togglePlay = function togglePlay() {
              videoRef.current && (playing ? videoRef.current.pause() : videoRef.current.play(), setPlaying(!playing));
            },
            formatTime = function formatTime(seconds) {
              var mins = Math.floor(seconds / 60),
                secs = Math.floor(seconds % 60);
              return "".concat(mins, ":").concat(secs.toString().padStart(2, "0"));
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            VideoContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(VideoStyled, {
                    ref: videoRef,
                    src,
                    poster,
                    onTimeUpdate: function handleTimeUpdate() {
                      videoRef.current && setCurrentTime(videoRef.current.currentTime);
                    },
                    onLoadedMetadata: function handleLoadedMetadata() {
                      videoRef.current && setDuration(videoRef.current.duration);
                    },
                    onClick: togglePlay,
                  }),
                  controls &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Controls, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PlayButton, {
                          onClick: togglePlay,
                          children: playing ? "⏸️" : "▶️",
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TimeDisplay, {
                          children: [formatTime(currentTime), " / ", formatTime(duration)],
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProgressBar, {
                          onClick: function handleProgressClick(e) {
                            if (videoRef.current) {
                              var rect = e.currentTarget.getBoundingClientRect(),
                                percent = (e.clientX - rect.left) / rect.width;
                              videoRef.current.currentTime = percent * duration;
                            }
                          },
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProgressFill, {
                            progress: (currentTime / duration) * 100 || 0,
                          }),
                        }),
                      ],
                    }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxVideoPlayer;
      TxVideoPlayer.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxVideoPlayer",
        props: {
          autoplay: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          controls: { defaultValue: { value: "true", computed: !1 }, required: !1 },
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
