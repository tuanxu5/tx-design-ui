"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8229],
  {
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
        outline = __webpack_require__("./src/assets/icons/outline/index.js"),
        jsx_runtime =
          (__webpack_require__("./src/styles/shorten.scss"),
          __webpack_require__("./node_modules/react/jsx-runtime.js"));
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
        LoadingRotatingIcon = (0, styled_components_browser_esm.Ay)((0, jsx_runtime.jsx)(outline.e.IconAdd, {}))(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  animation: ", " 1s linear infinite;\n"])),
          rotate
        ),
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
    "./src/components/tx-checkbox/tx-checkbox.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_checkbox });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        outline = __webpack_require__("./src/assets/icons/outline/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        StyledCheckboxWrapper =
          (__webpack_require__("./src/styles/shorten.scss"),
          styled_components_browser_esm.Ay.label(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.A)([
                "\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n\n  &.tx-ui-tx-checkbox--disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n",
              ]))
          )),
        StyledCheckboxInput = styled_components_browser_esm.Ay.input(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n",
            ]))
        ),
        StyledCheckboxBox = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: ",
              ";\n  height: ",
              ";\n  border: 2px solid ",
              ";\n  border-radius: 4px;\n  background-color: ",
              ";\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n\n  svg {\n    width: ",
              ";\n    height: ",
              ";\n    color: ",
              ";\n    opacity: ",
              ";\n    transition: opacity 0.2s ease;\n  }\n\n  ",
              ":focus + & {\n    outline: 2px solid ",
              ";\n    outline-offset: 2px;\n  }\n\n  ",
              ":hover & {\n    border-color: ",
              ";\n  }\n\n  ",
              ".tx-ui-tx-checkbox--disabled & {\n    background-color: ",
              ";\n    border-color: ",
              ";\n    cursor: not-allowed;\n  }\n\n  ",
              ".tx-ui-tx-checkbox--disabled:hover & {\n    border-color: ",
              ";\n  }\n\n  &.tx-ui-tx-checkbox-box--indeterminate {\n    background-color: ",
              ";\n    border-color: ",
              ';\n\n    &::after {\n      content: "";\n      position: absolute;\n      width: 60%;\n      height: 2px;\n      background-color: ',
              ";\n    }\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "14px";
              case "large":
                return "20px";
              default:
                return "16px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "14px";
              case "large":
                return "20px";
              default:
                return "16px";
            }
          },
          function (props) {
            return props.checked ? (props.danger ? colors.A.danger : colors.A.primary) : colors.A.borderDefault;
          },
          function (props) {
            return props.checked ? (props.danger ? colors.A.danger : colors.A.primary) : colors.A.bgWhite;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "10px";
              case "large":
                return "14px";
              default:
                return "12px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "10px";
              case "large":
                return "14px";
              default:
                return "12px";
            }
          },
          colors.A.textWhite,
          function (props) {
            return props.checked ? 1 : 0;
          },
          StyledCheckboxInput,
          function (props) {
            return props.danger ? colors.A.dangerHover : colors.A.primaryLight;
          },
          StyledCheckboxWrapper,
          function (props) {
            return props.checked ? (props.danger ? colors.A.danger : colors.A.primary) : colors.A.borderHover;
          },
          StyledCheckboxWrapper,
          function (props) {
            return props.checked ? colors.A.borderDefault : colors.A.bgFillLight;
          },
          colors.A.borderDefault,
          StyledCheckboxWrapper,
          colors.A.borderDefault,
          function (props) {
            return props.danger ? colors.A.danger : colors.A.primary;
          },
          function (props) {
            return props.danger ? colors.A.danger : colors.A.primary;
          },
          colors.A.textWhite
        ),
        StyledCheckboxLabel = styled_components_browser_esm.Ay.span(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  color: ",
              ";\n  font-size: ",
              ";\n  font-weight: 400;\n  line-height: 1.5;\n\n  ",
              ".tx-ui-tx-checkbox--disabled & {\n    color: ",
              ";\n  }\n",
            ])),
          function (props) {
            return props.color || colors.A.textPrimary;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "12px";
              case "large":
                return "16px";
              default:
                return "14px";
            }
          },
          StyledCheckboxWrapper,
          colors.A.textTertiary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "label",
          "checked",
          "onChange",
          "disabled",
          "indeterminate",
          "size",
          "danger",
          "color",
          "value",
          "name",
          "id",
        ],
        TxCheckbox = function TxCheckbox(_ref) {
          var label = _ref.label,
            _ref$checked = _ref.checked,
            checked = void 0 !== _ref$checked && _ref$checked,
            onChange = _ref.onChange,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$indeterminate = _ref.indeterminate,
            indeterminate = void 0 !== _ref$indeterminate && _ref$indeterminate,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$danger = _ref.danger,
            danger = void 0 !== _ref$danger && _ref$danger,
            color = _ref.color,
            value = _ref.value,
            name = _ref.name,
            id = _ref.id,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            checkboxId = id || "tx-checkbox-".concat(Math.random().toString(36).substr(2, 9));
          return (0, jsx_runtime.jsxs)(StyledCheckboxWrapper, {
            htmlFor: checkboxId,
            className: [
              "tx-ui-tx-checkbox",
              disabled && "tx-ui-tx-checkbox--disabled",
              danger && "tx-ui-tx-checkbox--danger",
              "tx-ui-tx-checkbox--".concat(size),
            ]
              .filter(Boolean)
              .join(" "),
            children: [
              (0, jsx_runtime.jsx)(
                StyledCheckboxInput,
                (0, objectSpread2.A)(
                  {
                    type: "checkbox",
                    id: checkboxId,
                    checked,
                    onChange: function handleChange(e) {
                      !disabled && onChange && onChange(e);
                    },
                    disabled,
                    value,
                    name,
                  },
                  rest
                )
              ),
              (0, jsx_runtime.jsx)(StyledCheckboxBox, {
                checked,
                size,
                danger,
                className: indeterminate && !checked ? "tx-ui-tx-checkbox-box--indeterminate" : "",
                children: checked && (0, jsx_runtime.jsx)(outline.e.IconCheck, {}),
              }),
              label && (0, jsx_runtime.jsx)(StyledCheckboxLabel, { size, color, children: label }),
            ],
          });
        };
      TxCheckbox.defaultProps = { checked: !1, disabled: !1, indeterminate: !1, size: "medium", danger: !1 };
      const tx_checkbox = TxCheckbox;
      TxCheckbox.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxCheckbox",
        props: {
          checked: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          disabled: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          indeterminate: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
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
          danger: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          label: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          color: { description: "", type: { name: "string" }, required: !1 },
          value: { description: "", type: { name: "string" }, required: !1 },
          name: { description: "", type: { name: "string" }, required: !1 },
          id: { description: "", type: { name: "string" }, required: !1 },
        },
      };
    },
    "./src/components/tx-form/tx-form.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { ju: () => TxForm, m8: () => TxFormItem });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
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
        colors = __webpack_require__("./src/theme/colors.js"),
        FormWrapper = styled_components_browser_esm.Ay.form(
          _templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(["\n  width: 100%;\n"]))
        ),
        FormItem = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  margin-bottom: ",
              ";\n  display: flex;\n  flex-direction: ",
              ";\n  align-items: ",
              ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n",
            ])),
          function (props) {
            return props.noMargin ? "0" : "24px";
          },
          function (props) {
            return "horizontal" === props.layout ? "row" : "column";
          },
          function (props) {
            return "horizontal" === props.layout ? "flex-start" : "stretch";
          }
        ),
        FormLabel = styled_components_browser_esm.Ay.label(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  margin-bottom: ",
              ";\n  margin-right: ",
              ";\n  min-width: ",
              ";\n  padding-top: ",
              ";\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          colors.A.textPrimary,
          function (props) {
            return "horizontal" === props.layout ? "0" : "8px";
          },
          function (props) {
            return "horizontal" === props.layout ? "16px" : "0";
          },
          function (props) {
            return "horizontal" === props.layout ? "120px" : "auto";
          },
          function (props) {
            return "horizontal" === props.layout ? "8px" : "0";
          },
          function (props) {
            return (
              props.required &&
              '\n    &::before {\n      content: "*";\n      color: '.concat(
                colors.A.danger[500],
                ";\n      margin-right: 4px;\n    }\n  "
              )
            );
          },
          function (props) {
            return (
              props.colon &&
              "horizontal" === props.layout &&
              '\n    &::after {\n      content: ":";\n      margin-left: 2px;\n    }\n  '
            );
          }
        ),
        FormControl = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)(["\n  flex: 1;\n  position: relative;\n"]))
        ),
        FormError = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 12px;\n  color: ",
              ";\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
            ])),
          colors.A.danger[500]
        ),
        FormHelp = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 12px;\n  color: ",
              ";\n  margin-top: 4px;\n",
            ])),
          colors.A.textSecondary
        ),
        FormFooter = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  justify-content: ",
              ";\n  padding-left: ",
              ";\n",
            ])),
          function (props) {
            switch (props.align) {
              case "left":
              default:
                return "flex-start";
              case "right":
                return "flex-end";
              case "center":
                return "center";
            }
          },
          function (props) {
            return "horizontal" === props.layout && props.labelWidth ? props.labelWidth : "0";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["layout", "onSubmit", "children", "className"],
        _excluded2 = ["label", "required", "error", "help", "layout", "colon", "noMargin", "children", "className"],
        _excluded3 = ["align", "layout", "labelWidth", "children", "className"],
        TxForm = function TxForm(_ref) {
          _ref.layout;
          var onSubmit = _ref.onSubmit,
            children = _ref.children,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            FormWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onSubmit: function handleSubmit(e) {
                    e.preventDefault(), onSubmit && onSubmit(e);
                  },
                  className,
                },
                props
              ),
              {},
              { children }
            )
          );
        };
      TxForm.defaultProps = { layout: "vertical", onSubmit: void 0, children: null, className: "" };
      var TxFormItem = function TxFormItem(_ref2) {
        var label = _ref2.label,
          _ref2$required = _ref2.required,
          required = void 0 !== _ref2$required && _ref2$required,
          _ref2$error = _ref2.error,
          error = void 0 === _ref2$error ? "" : _ref2$error,
          _ref2$help = _ref2.help,
          help = void 0 === _ref2$help ? "" : _ref2$help,
          _ref2$layout = _ref2.layout,
          layout = void 0 === _ref2$layout ? "vertical" : _ref2$layout,
          _ref2$colon = _ref2.colon,
          colon = void 0 === _ref2$colon || _ref2$colon,
          _ref2$noMargin = _ref2.noMargin,
          noMargin = void 0 !== _ref2$noMargin && _ref2$noMargin,
          children = _ref2.children,
          className = _ref2.className,
          props = (0, objectWithoutProperties.A)(_ref2, _excluded2);
        return (0, jsx_runtime.jsxs)(
          FormItem,
          (0, objectSpread2.A)(
            (0, objectSpread2.A)({ layout, noMargin, className }, props),
            {},
            {
              children: [
                label && (0, jsx_runtime.jsx)(FormLabel, { layout, required, colon, children: label }),
                (0, jsx_runtime.jsxs)(FormControl, {
                  children: [
                    children,
                    error &&
                      (0, jsx_runtime.jsxs)(FormError, {
                        children: [
                          (0, jsx_runtime.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                              (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                              (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
                            ],
                          }),
                          error,
                        ],
                      }),
                    !error && help && (0, jsx_runtime.jsx)(FormHelp, { children: help }),
                  ],
                }),
              ],
            }
          )
        );
      };
      TxFormItem.defaultProps = {
        label: "",
        required: !1,
        error: "",
        help: "",
        layout: "vertical",
        colon: !0,
        noMargin: !1,
        children: null,
        className: "",
      };
      var TxFormFooter = function TxFormFooter(_ref3) {
        var _ref3$align = _ref3.align,
          align = void 0 === _ref3$align ? "left" : _ref3$align,
          _ref3$layout = _ref3.layout,
          layout = void 0 === _ref3$layout ? "vertical" : _ref3$layout,
          _ref3$labelWidth = _ref3.labelWidth,
          labelWidth = void 0 === _ref3$labelWidth ? "120px" : _ref3$labelWidth,
          children = _ref3.children,
          className = _ref3.className,
          props = (0, objectWithoutProperties.A)(_ref3, _excluded3);
        return (0, jsx_runtime.jsx)(
          FormFooter,
          (0, objectSpread2.A)((0, objectSpread2.A)({ align, layout, labelWidth, className }, props), {}, { children })
        );
      };
      (TxFormFooter.defaultProps = {
        align: "left",
        layout: "vertical",
        labelWidth: "120px",
        children: null,
        className: "",
      }),
        (TxForm.Item = TxFormItem),
        (TxForm.Footer = TxFormFooter),
        (TxForm.__docgenInfo = {
          description: "",
          methods: [
            {
              name: "Item",
              docblock: null,
              modifiers: ["static"],
              params: [
                {
                  name: '{\n  label,\n  required = false,\n  error = "",\n  help = "",\n  layout = "vertical",\n  colon = true,\n  noMargin = false,\n  children,\n  className,\n  ...props\n}',
                  optional: !1,
                  type: null,
                },
              ],
              returns: null,
            },
            {
              name: "Footer",
              docblock: null,
              modifiers: ["static"],
              params: [
                {
                  name: '{\n  align = "left",\n  layout = "vertical",\n  labelWidth = "120px",\n  children,\n  className,\n  ...props\n}',
                  optional: !1,
                  type: null,
                },
              ],
              returns: null,
            },
          ],
          displayName: "TxForm",
          props: {
            layout: {
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
            onSubmit: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
          },
        }),
        (TxFormItem.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxFormItem",
          props: {
            required: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            error: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            help: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            layout: {
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
            colon: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            noMargin: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            label: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
          },
        }),
        (TxFormFooter.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxFormFooter",
          props: {
            align: {
              defaultValue: { value: '"left"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"left"', computed: !1 },
                  { value: '"center"', computed: !1 },
                  { value: '"right"', computed: !1 },
                ],
              },
              required: !1,
            },
            layout: {
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
            labelWidth: {
              defaultValue: { value: '"120px"', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
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
        outline = __webpack_require__("./src/assets/icons/outline/index.js"),
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
                        children: (0, jsx_runtime.jsx)(outline.e.IconCrossSmall, {}),
                      }),
                    password &&
                      passwordToggle &&
                      (0, jsx_runtime.jsx)(PasswordToggle, {
                        onClick: function togglePasswordVisibility() {
                          setPasswordVisible(!passwordVisible);
                        },
                        color: iconColor,
                        children: (0, jsx_runtime.jsx)(outline.e.IconEye, {}),
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
    "./src/styles/shorten.scss": () => {},
  },
]);
