"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [969],
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
    "./src/stories/TxTooltip.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicUsage: () => BasicUsage,
          ClickTrigger: () => ClickTrigger,
          CustomColor: () => CustomColor,
          Placements: () => Placements,
          Preview: () => Preview,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-tooltip/tx-tooltip.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Feedback/TxTooltip",
        component: _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          title: { control: "text" },
          placement: { control: "select", options: ["top", "bottom", "left", "right"] },
          color: { control: "color" },
          trigger: { control: "select", options: ["hover", "click"] },
        },
      };
      var Preview = {
          args: {
            title: "Tooltip text",
            placement: "top",
            trigger: "hover",
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
              { children: "Hover me" }
            ),
          },
        },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: { padding: "100px", textAlign: "center" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
              {
                title: "This is a tooltip",
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                  { children: "Hover me" }
                ),
              }
            ),
          });
        },
        Placements = function Placements() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: { padding: "100px", display: "flex", flexDirection: "column", gap: "60px", alignItems: "center" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    title: "Top tooltip",
                    placement: "top",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "Top" }
                    ),
                  }
                ),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                style: { display: "flex", gap: "60px" },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                    {
                      title: "Left tooltip",
                      placement: "left",
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                        { children: "Left" }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                    {
                      title: "Right tooltip",
                      placement: "right",
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                        { children: "Right" }
                      ),
                    }
                  ),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                  {
                    title: "Bottom tooltip",
                    placement: "bottom",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                      { children: "Bottom" }
                    ),
                  }
                ),
              }),
            ],
          });
        },
        CustomColor = function CustomColor() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: { padding: "100px", display: "flex", gap: "20px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  title: "Custom purple",
                  color: "#6253e1",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                    { children: "Purple" }
                  ),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  title: "Custom red",
                  color: "#ff6b6b",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                    { children: "Red" }
                  ),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
                {
                  title: "Custom teal",
                  color: "#4ecdc4",
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                    { children: "Teal" }
                  ),
                }
              ),
            ],
          });
        },
        ClickTrigger = function ClickTrigger() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: { padding: "100px", textAlign: "center" },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components_tx_tooltip_tx_tooltip__WEBPACK_IMPORTED_MODULE_1__.A,
              {
                title: "Click tooltip",
                trigger: "click",
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                  { children: "Click me" }
                ),
              }
            ),
          });
        };
      const __namedExportsOrder = ["Preview", "BasicUsage", "Placements", "CustomColor", "ClickTrigger"];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    title: "Tooltip text",\n    placement: "top",\n    trigger: "hover",\n    children: <TxButton>Hover me</TxButton>\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    padding: "100px",\n    textAlign: "center"\n  }}>\n      <TxTooltip title="This is a tooltip">\n        <TxButton>Hover me</TxButton>\n      </TxTooltip>\n    </div>;\n}',
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (Placements.parameters = {
          ...Placements.parameters,
          docs: {
            ...Placements.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    padding: "100px",\n    display: "flex",\n    flexDirection: "column",\n    gap: "60px",\n    alignItems: "center"\n  }}>\n      <div>\n        <TxTooltip title="Top tooltip" placement="top">\n          <TxButton>Top</TxButton>\n        </TxTooltip>\n      </div>\n      <div style={{\n      display: "flex",\n      gap: "60px"\n    }}>\n        <TxTooltip title="Left tooltip" placement="left">\n          <TxButton>Left</TxButton>\n        </TxTooltip>\n        <TxTooltip title="Right tooltip" placement="right">\n          <TxButton>Right</TxButton>\n        </TxTooltip>\n      </div>\n      <div>\n        <TxTooltip title="Bottom tooltip" placement="bottom">\n          <TxButton>Bottom</TxButton>\n        </TxTooltip>\n      </div>\n    </div>;\n}',
              ...Placements.parameters?.docs?.source,
            },
          },
        }),
        (CustomColor.parameters = {
          ...CustomColor.parameters,
          docs: {
            ...CustomColor.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    padding: "100px",\n    display: "flex",\n    gap: "20px"\n  }}>\n      <TxTooltip title="Custom purple" color="#6253e1">\n        <TxButton>Purple</TxButton>\n      </TxTooltip>\n      <TxTooltip title="Custom red" color="#ff6b6b">\n        <TxButton>Red</TxButton>\n      </TxTooltip>\n      <TxTooltip title="Custom teal" color="#4ecdc4">\n        <TxButton>Teal</TxButton>\n      </TxTooltip>\n    </div>;\n}',
              ...CustomColor.parameters?.docs?.source,
            },
          },
        }),
        (ClickTrigger.parameters = {
          ...ClickTrigger.parameters,
          docs: {
            ...ClickTrigger.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    padding: "100px",\n    textAlign: "center"\n  }}>\n      <TxTooltip title="Click tooltip" trigger="click">\n        <TxButton>Click me</TxButton>\n      </TxTooltip>\n    </div>;\n}',
              ...ClickTrigger.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-button/tx-button.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_button });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        icons = __webpack_require__("./src/assets/icons/index.js");
      __webpack_require__("./src/styles/shorten.scss");
      const styled = styled_components_browser_esm.Ay.button(
        _templateObject ||
          (_templateObject = (0, taggedTemplateLiteral.A)([
            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: ",
            ";\n  border: ",
            ";\n  border-radius: ",
            ";\n  font-size: 14px;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  font-weight: 500;\n  padding: ",
            ";\n  transition: background-color 0.25s ease, transform 0.25s ease;\n  background: ",
            ";\n\n  &.tx-ui-tx-button {\n    &:hover {\n      opacity: 0.8;\n      box-shadow: 0px 0px 8px 2px #03030f30;\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }\n\n    &.tx-ui-tx-button--large {\n      font-size: 16px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--small {\n      font-size: 12px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--danger {\n      background-color: #e45649 !important;\n      border: 1px solid #e45649 !important;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      background-color: #f3f3f4 !important;\n      border: 1px solid #a0a1a7 !important;\n      color: #a0a1a7;\n      outline: none;\n      cursor: not-allowed;\n      &:hover {\n        opacity: 1;\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n      cursor: not-allowed;\n      &:hover {\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--secondary {\n    background: #ffffff;\n    border: 1px solid #03030f;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      background: #03030f;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e45649 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #ffffff;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--dashed {\n    background: #ffffff;\n    border: 1px dashed #03030f;\n    color: #03030f;\n\n    &:hover {\n      border: 1px dashed #1fa9ff;\n      color: #1fa9ff;\n      box-shadow: 0px 0px 8px 2px #1fa9ff30;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #e45649;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--filled {\n    background: #03030f20;\n    border: 1px solid #03030f00;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #e4564920 !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #03030f00 !important;\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--text {\n    background: white;\n    border: 1px solid #ffffff;\n    background: #ffffff;\n    color: #03030f;\n    &:hover {\n      background: #03030f10;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: none;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n\n  &.tx-ui-tx-button--link {\n    background: white;\n    border: none;\n    background: #ffffff;\n    border: 1px solid #ffffff;\n    color: #1fa9ff;\n    &:hover {\n      box-shadow: none;\n      border: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        border: 1px solid transparent !important;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n",
          ])),
        function (props) {
          return props.color || "#ffffff";
        },
        function (props) {
          return props.gradientBackground ? "1px solid #ffffff" : "1px solid #0e0e13ff";
        },
        function (props) {
          return "circle" === props.shape ? "100px" : "10px";
        },
        function (props) {
          return "circle" === props.shape ? "12px 12px !important" : "12px 22px !important";
        },
        function (props) {
          return props.gradientBackground
            ? "linear-gradient("
                .concat(props.gradientBackground.degree || 135, "deg, ")
                .concat(
                  props.gradientBackground.colors && props.gradientBackground.colors.length > 0
                    ? props.gradientBackground.colors.join(", ")
                    : ["#6253e1", "#04befe"].join(", "),
                  ")"
                )
            : props.backgroundColor || "#03030f";
        },
        function (props) {
          return "circle" === props.shape ? "14px 14px !important" : "14px 24px !important";
        },
        function (props) {
          return "circle" === props.shape ? "10px 10px !important" : "10px 20px !important";
        }
      );
      var rotate = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        LoadingRotatingIcon = (0, styled_components_browser_esm.Ay)(icons.A.IconLoader01)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  animation: ", " 1s linear infinite;\n"])),
          rotate
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "label",
          "onClick",
          "background",
          "color",
          "primary",
          "size",
          "type",
          "disabled",
          "prefix",
          "suffix",
          "shape",
          "loading",
          "danger",
          "gradientBackground",
        ],
        TxButton = function TxButton(_ref) {
          var _ref$label = _ref.label,
            label = void 0 === _ref$label ? "Click Me" : _ref$label,
            onClick = _ref.onClick,
            background = _ref.background,
            color = _ref.color,
            size = (_ref.primary, _ref.size),
            type = _ref.type,
            disabled = _ref.disabled,
            prefix = _ref.prefix,
            suffix = _ref.suffix,
            shape = _ref.shape,
            loading = _ref.loading,
            danger = _ref.danger,
            gradientBackground = _ref.gradientBackground,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            styled,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onClick,
                  className: [
                    "tx-ui-tx-button",
                    disabled && "tx-ui-tx-button--disabled",
                    loading && "tx-ui-tx-button--loading",
                    danger && "tx-ui-tx-button--danger",
                    "tx-ui-tx-button--".concat(size),
                    "tx-ui-tx-button--".concat(type),
                  ].join(" "),
                  style: {
                    padding: "10px 20px",
                    background: background || "defaultBackground",
                    color: color || "defaultColor",
                  },
                  disabled: loading,
                  shape,
                  danger,
                  gradientBackground: gradientBackground && gradientBackground,
                },
                rest
              ),
              {},
              {
                children: [
                  loading && (0, jsx_runtime.jsx)(LoadingRotatingIcon, {}),
                  prefix && !loading && prefix,
                  label,
                  suffix && suffix,
                ],
              }
            )
          );
        };
      TxButton.defaultProps = { backgroundColor: null, type: "primary", size: "medium", onClick: void 0 };
      const tx_button = TxButton;
      TxButton.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxButton",
        props: {
          label: {
            defaultValue: { value: '"Click Me"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          backgroundColor: {
            defaultValue: { value: "null", computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          type: {
            defaultValue: { value: '"primary"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"primary"', computed: !1 },
                { value: '"secondary"', computed: !1 },
                { value: '"filled"', computed: !1 },
                { value: '"text"', computed: !1 },
                { value: '"link"', computed: !1 },
                { value: '"dashed"', computed: !1 },
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
          onClick: {
            defaultValue: { value: "undefined", computed: !0 },
            description: "",
            type: { name: "func" },
            required: !1,
          },
          loading: { description: "", type: { name: "bool" }, required: !1 },
          danger: { description: "", type: { name: "bool" }, required: !1 },
          shape: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          prefix: { description: "", type: { name: "node" }, required: !1 },
          suffix: { description: "", type: { name: "node" }, required: !1 },
          gradientBackground: {
            description: "",
            type: {
              name: "shape",
              value: {
                degree: { name: "number", required: !1 },
                colors: { name: "arrayOf", value: { name: "string" }, required: !1 },
              },
            },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-tooltip/tx-tooltip.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_tooltip });
      var _templateObject,
        _templateObject2,
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
        StyledTooltipWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(["\n  display: inline-block;\n  position: relative;\n"]))
        ),
        StyledTooltipContent = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  z-index: 9999;\n  padding: 6px 12px;\n  background-color: ",
              ";\n  color: ",
              ";\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: ",
              ";\n  visibility: ",
              ";\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n  pointer-events: none;\n  max-width: 300px;\n  word-wrap: break-word;\n  white-space: normal;\n\n  ",
              '\n\n  &::after {\n    content: "";\n    position: absolute;\n    border: 6px solid transparent;\n\n    ',
              "\n  }\n",
            ])),
          function (props) {
            return props.color || colors.A.primary;
          },
          colors.A.textWhite,
          function (props) {
            return props.visible ? 1 : 0;
          },
          function (props) {
            return props.visible ? "visible" : "hidden";
          },
          function (props) {
            switch (props.placement) {
              case "top":
              default:
                return "\n          bottom: calc(100% + ".concat(
                  8,
                  "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
                );
              case "bottom":
                return "\n          top: calc(100% + ".concat(
                  8,
                  "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
                );
              case "left":
                return "\n          right: calc(100% + ".concat(
                  8,
                  "px);\n          top: 50%;\n          transform: translateY(-50%);\n        "
                );
              case "right":
                return "\n          left: calc(100% + ".concat(
                  8,
                  "px);\n          top: 50%;\n          transform: translateY(-50%);\n        "
                );
            }
          },
          function (props) {
            var color = props.color || colors.A.primary;
            switch (props.placement) {
              case "top":
              default:
                return "\n            top: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-top-color: ".concat(
                  color,
                  ";\n          "
                );
              case "bottom":
                return "\n            bottom: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-bottom-color: ".concat(
                  color,
                  ";\n          "
                );
              case "left":
                return "\n            left: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-left-color: ".concat(
                  color,
                  ";\n          "
                );
              case "right":
                return "\n            right: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-right-color: ".concat(
                  color,
                  ";\n          "
                );
            }
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "title", "placement", "color", "trigger"],
        TxTooltip = function TxTooltip(_ref) {
          var children = _ref.children,
            title = _ref.title,
            _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? "top" : _ref$placement,
            color = _ref.color,
            _ref$trigger = _ref.trigger,
            trigger = void 0 === _ref$trigger ? "hover" : _ref$trigger,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          return (0, jsx_runtime.jsxs)(
            StyledTooltipWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onMouseEnter: function handleMouseEnter() {
                    "hover" === trigger && setVisible(!0);
                  },
                  onMouseLeave: function handleMouseLeave() {
                    "hover" === trigger && setVisible(!1);
                  },
                  onClick: function handleClick() {
                    "click" === trigger && setVisible(!visible);
                  },
                },
                rest
              ),
              {},
              {
                children: [
                  children,
                  title && (0, jsx_runtime.jsx)(StyledTooltipContent, { visible, placement, color, children: title }),
                ],
              }
            )
          );
        };
      TxTooltip.defaultProps = { placement: "top", trigger: "hover" };
      const tx_tooltip = TxTooltip;
      TxTooltip.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTooltip",
        props: {
          placement: {
            defaultValue: { value: '"top"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"top"', computed: !1 },
                { value: '"bottom"', computed: !1 },
                { value: '"left"', computed: !1 },
                { value: '"right"', computed: !1 },
              ],
            },
            required: !1,
          },
          trigger: {
            defaultValue: { value: '"hover"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"hover"', computed: !1 },
                { value: '"click"', computed: !1 },
              ],
            },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !0 },
          title: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          color: { description: "", type: { name: "string" }, required: !1 },
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
