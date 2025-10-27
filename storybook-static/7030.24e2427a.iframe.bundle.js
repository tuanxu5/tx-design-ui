"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [7030],
  {
    "./src/components/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        aG: () => tx_avatar.A,
        jX: () => tx_button.A,
        Ql: () => tx_checkbox.A,
        gU: () => tx_color_picker,
        dl: () => tx_date_picker,
        EE: () => tx_input_number,
        Up: () => tx_radio,
        zB: () => tx_select,
      });
      __webpack_require__("./src/components/tx-affix/tx-affix.jsx"),
        __webpack_require__("./src/components/tx-alert/tx-alert.jsx"),
        __webpack_require__("./src/components/tx-anchor/tx-anchor.jsx");
      var _templateObject,
        _templateObject2,
        _templateObject3,
        styled_templateObject,
        styled_templateObject2,
        styled_templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        tx_avatar = __webpack_require__("./src/components/tx-avatar/tx-avatar.jsx"),
        tx_button =
          (__webpack_require__("./src/components/tx-back-top/tx-back-top.jsx"),
          __webpack_require__("./src/components/tx-badge/tx-badge.jsx"),
          __webpack_require__("./src/components/tx-breadcrumb/tx-breadcrumb.jsx"),
          __webpack_require__("./src/components/tx-button/tx-button.jsx")),
        tx_checkbox =
          (__webpack_require__("./src/components/tx-calendar/tx-calendar.jsx"),
          __webpack_require__("./src/components/tx-card/tx-card.jsx"),
          __webpack_require__("./src/components/tx-carousel/tx-carousel.jsx"),
          __webpack_require__("./src/components/tx-chart/tx-chart.jsx"),
          __webpack_require__("./src/components/tx-checkbox/tx-checkbox.jsx")),
        objectSpread2 =
          (__webpack_require__("./src/components/tx-code/tx-code.jsx"),
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js")),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        StyledColorPickerWrapper =
          (styled_components_browser_esm.Ay.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.A)([
                "\n  border: 1px solid ",
                ";\n  border-radius: 8px;\n  overflow: hidden;\n",
              ])),
            colors.A.borderLight
          ),
          styled_components_browser_esm.Ay.div(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.A)([
                "\n  padding: 16px;\n  background: ",
                ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n",
              ])),
            colors.A.bgFillLight,
            colors.A.bgFillMedium
          ),
          styled_components_browser_esm.Ay.div(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.A)([
                "\n  max-height: ",
                ";\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  padding: ",
                ";\n",
              ])),
            function (props) {
              return props.expanded ? "2000px" : "0";
            },
            function (props) {
              return props.expanded ? "16px" : "0";
            }
          ),
          __webpack_require__("./src/styles/shorten.scss"),
          styled_components_browser_esm.Ay.div(
            styled_templateObject ||
              (styled_templateObject = (0, taggedTemplateLiteral.A)([
                "\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n",
              ]))
          )),
        StyledColorPickerInput = styled_components_browser_esm.Ay.input(
          styled_templateObject2 ||
            (styled_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  border: 2px solid ",
              ";\n  border-radius: 8px;\n  cursor: ",
              ";\n  transition: all 0.2s ease;\n  opacity: ",
              ";\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n    box-shadow: 0 0 0 2px ",
              ";\n  }\n\n  &::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n\n  &::-webkit-color-swatch {\n    border: none;\n    border-radius: 6px;\n  }\n\n  &::-moz-color-swatch {\n    border: none;\n    border-radius: 6px;\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "32px";
              case "large":
                return "48px";
              default:
                return "40px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "32px";
              case "large":
                return "48px";
              default:
                return "40px";
            }
          },
          function (props) {
            return props.disabled ? colors.A.borderDisabled : colors.A.borderDefault;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          function (props) {
            return props.disabled ? 0.5 : 1;
          },
          colors.A.primary,
          colors.A.primaryLight
        ),
        StyledColorPickerLabel = styled_components_browser_esm.Ay.span(
          styled_templateObject3 ||
            (styled_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  font-weight: 400;\n",
            ])),
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textPrimary;
          }
        ),
        StyledColorValue = styled_components_browser_esm.Ay.input(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 8px 12px;\n  border: 1.5px solid ",
              ";\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
              ";\n  background-color: ",
              ";\n  outline: none;\n  width: 100px;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n  }\n\n  &:focus {\n    border-color: ",
              ";\n    box-shadow: 0 0 0 2px ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",
              ";\n  }\n",
            ])),
          colors.A.borderLight,
          colors.A.textPrimary,
          function (props) {
            return props.disabled ? colors.A.bgFillLight : colors.A.bgWhite;
          },
          colors.A.primary,
          colors.A.primary,
          colors.A.primaryLight,
          colors.A.textDisabled
        ),
        StyledColorPresets = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n",
            ]))
        ),
        StyledPresetColor = styled_components_browser_esm.Ay.button(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  width: 28px;\n  height: 28px;\n  border: 2px solid ",
              ";\n  border-radius: 6px;\n  background-color: ",
              ";\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: ",
              ";\n\n  &:hover {\n    border-color: ",
              ";\n    transform: scale(1.1);\n  }\n\n  &:active {\n    transform: scale(0.95);\n  }\n",
            ])),
          function (props) {
            return props.selected ? colors.A.primary : colors.A.borderDefault;
          },
          function (props) {
            return props.color;
          },
          function (props) {
            return props.selected ? "0 0 0 2px ".concat(colors.A.primaryLight) : "none";
          },
          colors.A.primary
        ),
        tx_color_picker_excluded = ["value", "onChange", "label", "disabled", "size", "showInput", "presets"],
        TxColorPicker = function TxColorPicker(_ref) {
          var _ref$value = _ref.value,
            value = void 0 === _ref$value ? "#000000" : _ref$value,
            onChange = _ref.onChange,
            label = _ref.label,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$showInput = _ref.showInput,
            showInput = void 0 === _ref$showInput || _ref$showInput,
            _ref$presets = _ref.presets,
            presets = void 0 === _ref$presets ? [] : _ref$presets,
            rest = (0, objectWithoutProperties.A)(_ref, tx_color_picker_excluded),
            _useState = (0, react.useState)(value),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            localValue = _useState2[0],
            setLocalValue = _useState2[1];
          return (0, jsx_runtime.jsxs)("div", {
            children: [
              (0, jsx_runtime.jsxs)(StyledColorPickerWrapper, {
                children: [
                  (0, jsx_runtime.jsx)(
                    StyledColorPickerInput,
                    (0, objectSpread2.A)(
                      {
                        type: "color",
                        value: localValue,
                        onChange: function handleColorChange(e) {
                          var newColor = e.target.value;
                          setLocalValue(newColor), onChange && onChange(newColor, e);
                        },
                        disabled,
                        size,
                      },
                      rest
                    )
                  ),
                  label && (0, jsx_runtime.jsx)(StyledColorPickerLabel, { disabled, children: label }),
                  showInput &&
                    (0, jsx_runtime.jsx)(StyledColorValue, {
                      type: "text",
                      value: localValue,
                      onChange: function handleInputChange(e) {
                        var newColor = e.target.value;
                        newColor.startsWith("#") || (newColor = "#" + newColor);
                        /^#[0-9A-F]{6}$/i.test(newColor) &&
                          (setLocalValue(newColor), onChange && onChange(newColor, e));
                      },
                      disabled,
                      maxLength: 7,
                    }),
                ],
              }),
              presets.length > 0 &&
                (0, jsx_runtime.jsx)(StyledColorPresets, {
                  children: presets.map(function (preset) {
                    return (0, jsx_runtime.jsx)(
                      StyledPresetColor,
                      {
                        type: "button",
                        color: preset,
                        selected: localValue === preset,
                        onClick: function onClick() {
                          return (function handlePresetClick(color) {
                            setLocalValue(color), onChange && onChange(color);
                          })(preset);
                        },
                        disabled,
                        title: preset,
                      },
                      preset
                    );
                  }),
                }),
            ],
          });
        };
      TxColorPicker.defaultProps = { value: "#000000", disabled: !1, size: "medium", showInput: !0, presets: [] };
      const tx_color_picker = TxColorPicker;
      TxColorPicker.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxColorPicker",
        props: {
          value: {
            defaultValue: { value: '"#000000"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          disabled: {
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
          showInput: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          presets: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: { name: "arrayOf", value: { name: "string" } },
            required: !1,
          },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          label: { description: "", type: { name: "string" }, required: !1 },
        },
      };
      __webpack_require__("./src/components/tx-copy/tx-copy.jsx"),
        __webpack_require__("./src/components/tx-countdown/tx-countdown.jsx");
      var tx_date_picker_styled_templateObject,
        tx_date_picker_styled_templateObject2,
        tx_date_picker_styled_templateObject3,
        StyledDatePickerWrapper = styled_components_browser_esm.Ay.div(
          tx_date_picker_styled_templateObject ||
            (tx_date_picker_styled_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  width: ",
              ";\n  min-width: 200px;\n",
            ])),
          function (props) {
            return props.fullWidth ? "100%" : "auto";
          }
        ),
        StyledDatePickerInput = styled_components_browser_esm.Ay.input(
          tx_date_picker_styled_templateObject2 ||
            (tx_date_picker_styled_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  padding: ",
              ";\n  border: 1.5px solid\n    ",
              ";\n  border-radius: 10px;\n  background-color: ",
              ";\n  color: ",
              ";\n  font-size: ",
              ";\n  outline: none;\n  cursor: ",
              ";\n  transition: all 0.2s ease;\n\n  &::placeholder {\n    color: ",
              ";\n  }\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n  }\n\n  &:focus {\n    border-color: ",
              ";\n    box-shadow: 0 0 0 2px ",
              ";\n  }\n\n  /* Date picker icon styles */\n  &::-webkit-calendar-picker-indicator {\n    cursor: pointer;\n    opacity: 0.6;\n    transition: opacity 0.2s ease;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 36px 8px 12px";
              case "large":
                return "14px 45px 14px 20px";
              default:
                return "10px 40px 10px 16px";
            }
          },
          function (props) {
            return props.disabled
              ? colors.A.borderDisabled
              : "error" === props.status
              ? colors.A.danger
              : "success" === props.status
              ? colors.A.success
              : "warning" === props.status
              ? colors.A.warning
              : colors.A.borderLight;
          },
          function (props) {
            return props.disabled ? colors.A.bgFillLight : colors.A.bgWhite;
          },
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textPrimary;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "13px";
              case "large":
                return "15px";
              default:
                return "14px";
            }
          },
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          colors.A.placeholder,
          function (props) {
            return "error" === props.status ? colors.A.danger : colors.A.primary;
          },
          colors.A.primary,
          colors.A.primaryLight
        ),
        StyledDatePickerIcon = styled_components_browser_esm.Ay.span(
          tx_date_picker_styled_templateObject3 ||
            (tx_date_picker_styled_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: ",
              ";\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textSecondary;
          }
        ),
        tx_date_picker_excluded = [
          "value",
          "onChange",
          "placeholder",
          "disabled",
          "size",
          "status",
          "fullWidth",
          "type",
          "min",
          "max",
        ],
        CalendarIcon = function CalendarIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
              (0, jsx_runtime.jsx)("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
              (0, jsx_runtime.jsx)("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
              (0, jsx_runtime.jsx)("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
            ],
          });
        },
        TxDatePicker = function TxDatePicker(_ref) {
          var value = _ref.value,
            onChange = _ref.onChange,
            _ref$placeholder = _ref.placeholder,
            placeholder = void 0 === _ref$placeholder ? "Select date" : _ref$placeholder,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            status = _ref.status,
            _ref$fullWidth = _ref.fullWidth,
            fullWidth = void 0 !== _ref$fullWidth && _ref$fullWidth,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? "date" : _ref$type,
            min = _ref.min,
            max = _ref.max,
            rest = (0, objectWithoutProperties.A)(_ref, tx_date_picker_excluded);
          return (0, jsx_runtime.jsxs)(StyledDatePickerWrapper, {
            fullWidth,
            children: [
              (0, jsx_runtime.jsx)(
                StyledDatePickerInput,
                (0, objectSpread2.A)(
                  {
                    type,
                    value,
                    onChange: function handleChange(e) {
                      !disabled && onChange && onChange(e.target.value, e);
                    },
                    placeholder,
                    disabled,
                    size,
                    status,
                    min,
                    max,
                  },
                  rest
                )
              ),
              (0, jsx_runtime.jsx)(StyledDatePickerIcon, {
                disabled,
                children: (0, jsx_runtime.jsx)(CalendarIcon, {}),
              }),
            ],
          });
        };
      TxDatePicker.defaultProps = {
        placeholder: "Select date",
        disabled: !1,
        size: "medium",
        fullWidth: !1,
        type: "date",
      };
      const tx_date_picker = TxDatePicker;
      TxDatePicker.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDatePicker",
        props: {
          placeholder: {
            defaultValue: { value: '"Select date"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          disabled: {
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
          fullWidth: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          type: {
            defaultValue: { value: '"date"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"date"', computed: !1 },
                { value: '"datetime-local"', computed: !1 },
                { value: '"month"', computed: !1 },
                { value: '"week"', computed: !1 },
                { value: '"time"', computed: !1 },
              ],
            },
            required: !1,
          },
          value: { description: "", type: { name: "string" }, required: !1 },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          status: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
          min: { description: "", type: { name: "string" }, required: !1 },
          max: { description: "", type: { name: "string" }, required: !1 },
        },
      };
      __webpack_require__("./src/components/tx-date-range-picker/tx-date-range-picker.jsx"),
        __webpack_require__("./src/components/tx-divider/tx-divider.jsx"),
        __webpack_require__("./src/components/tx-dnd/tx-dnd.jsx"),
        __webpack_require__("./src/components/tx-drawer/tx-drawer.jsx"),
        __webpack_require__("./src/components/tx-dropdown/tx-dropdown.jsx"),
        __webpack_require__("./src/components/tx-editor/tx-editor.jsx"),
        __webpack_require__("./src/components/tx-empty/tx-empty.jsx"),
        __webpack_require__("./src/components/tx-flex/tx-flex.jsx"),
        __webpack_require__("./src/components/tx-form/tx-form.jsx"),
        __webpack_require__("./src/components/tx-grid/tx-grid.jsx"),
        __webpack_require__("./src/components/tx-image/tx-image.jsx");
      var tx_input_number_styled_templateObject,
        tx_input_number_styled_templateObject2,
        tx_input_number_styled_templateObject3,
        styled_templateObject4,
        StyledInputNumberWrapper = styled_components_browser_esm.Ay.div(
          tx_input_number_styled_templateObject ||
            (tx_input_number_styled_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: ",
              ";\n",
            ])),
          function (props) {
            return props.fullWidth ? "100%" : "auto";
          }
        ),
        StyledInputNumber = styled_components_browser_esm.Ay.input(
          tx_input_number_styled_templateObject2 ||
            (tx_input_number_styled_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  border-radius: 10px;\n  border: 1.5px solid\n    ",
              ";\n  font-size: ",
              ";\n  color: ",
              ";\n  background-color: ",
              ";\n  outline: none;\n  width: 100%;\n  transition: all 0.2s ease;\n\n  &::placeholder {\n    color: ",
              ";\n  }\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n  }\n\n  &:focus {\n    border-color: ",
              ";\n    box-shadow: 0 0 0 2px ",
              ';\n  }\n\n  /* Remove default number arrows */\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &[type="number"] {\n    -moz-appearance: textfield;\n  }\n',
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 40px 8px 12px";
              case "large":
                return "14px 50px 14px 20px";
              default:
                return "10px 45px 10px 16px";
            }
          },
          function (props) {
            return props.disabled
              ? colors.A.borderDisabled
              : "error" === props.status
              ? colors.A.danger
              : "success" === props.status
              ? colors.A.success
              : "warning" === props.status
              ? colors.A.warning
              : colors.A.borderLight;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "13px";
              case "large":
                return "15px";
              default:
                return "14px";
            }
          },
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textPrimary;
          },
          function (props) {
            return props.disabled ? colors.A.bgFillLight : colors.A.bgWhite;
          },
          colors.A.placeholder,
          function (props) {
            return "error" === props.status ? colors.A.danger : colors.A.primary;
          },
          colors.A.primary,
          colors.A.primaryLight
        ),
        StyledControls = styled_components_browser_esm.Ay.div(
          tx_input_number_styled_templateObject3 ||
            (tx_input_number_styled_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  right: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n",
            ]))
        ),
        StyledControlButton = styled_components_browser_esm.Ay.button(
          styled_templateObject4 ||
            (styled_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n  color: ",
              ";\n  cursor: ",
              ";\n  transition: all 0.2s ease;\n  border-radius: 4px;\n  padding: 0;\n\n  &:hover:not(:disabled) {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  &:active:not(:disabled) {\n    background-color: ",
              ";\n  }\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "32px";
              default:
                return "28px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "14px";
              case "large":
                return "18px";
              default:
                return "16px";
            }
          },
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textSecondary;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          colors.A.bgFill,
          colors.A.primary,
          colors.A.bgPrimaryLight
        ),
        tx_input_number_excluded = [
          "value",
          "onChange",
          "min",
          "max",
          "step",
          "placeholder",
          "disabled",
          "size",
          "status",
          "fullWidth",
        ],
        ChevronUp = function ChevronUp() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "18 15 12 9 6 15" }),
          });
        },
        ChevronDown = function ChevronDown() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "6 9 12 15 18 9" }),
          });
        },
        TxInputNumber = function TxInputNumber(_ref) {
          var value = _ref.value,
            onChange = _ref.onChange,
            min = _ref.min,
            max = _ref.max,
            _ref$step = _ref.step,
            step = void 0 === _ref$step ? 1 : _ref$step,
            _ref$placeholder = _ref.placeholder,
            placeholder = void 0 === _ref$placeholder ? "Enter number" : _ref$placeholder,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            status = _ref.status,
            _ref$fullWidth = _ref.fullWidth,
            fullWidth = void 0 !== _ref$fullWidth && _ref$fullWidth,
            rest = (0, objectWithoutProperties.A)(_ref, tx_input_number_excluded),
            isMaxReached = void 0 !== max && Number(value) >= max,
            isMinReached = void 0 !== min && Number(value) <= min;
          return (0, jsx_runtime.jsxs)(StyledInputNumberWrapper, {
            fullWidth,
            children: [
              (0, jsx_runtime.jsx)(
                StyledInputNumber,
                (0, objectSpread2.A)(
                  {
                    type: "number",
                    value,
                    onChange: function handleChange(e) {
                      var newValue = e.target.value;
                      if ("" !== newValue) {
                        var numValue = Number(newValue);
                        isNaN(numValue) ||
                          (void 0 !== min && numValue < min
                            ? onChange && onChange(min)
                            : void 0 !== max && numValue > max
                            ? onChange && onChange(max)
                            : onChange && onChange(numValue));
                      } else onChange && onChange("");
                    },
                    placeholder,
                    disabled,
                    size,
                    status,
                    min,
                    max,
                    step,
                  },
                  rest
                )
              ),
              (0, jsx_runtime.jsxs)(StyledControls, {
                children: [
                  (0, jsx_runtime.jsx)(StyledControlButton, {
                    type: "button",
                    onClick: function handleIncrement() {
                      if (!disabled) {
                        var newValue = ("" === value || void 0 === value ? 0 : Number(value)) + step;
                        void 0 !== max && newValue > max ? onChange && onChange(max) : onChange && onChange(newValue);
                      }
                    },
                    disabled: disabled || isMaxReached,
                    size,
                    children: (0, jsx_runtime.jsx)(ChevronUp, {}),
                  }),
                  (0, jsx_runtime.jsx)(StyledControlButton, {
                    type: "button",
                    onClick: function handleDecrement() {
                      if (!disabled) {
                        var newValue = ("" === value || void 0 === value ? 0 : Number(value)) - step;
                        void 0 !== min && newValue < min ? onChange && onChange(min) : onChange && onChange(newValue);
                      }
                    },
                    disabled: disabled || isMinReached,
                    size,
                    children: (0, jsx_runtime.jsx)(ChevronDown, {}),
                  }),
                ],
              }),
            ],
          });
        };
      TxInputNumber.defaultProps = {
        step: 1,
        placeholder: "Enter number",
        disabled: !1,
        size: "medium",
        fullWidth: !1,
      };
      const tx_input_number = TxInputNumber;
      TxInputNumber.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxInputNumber",
        props: {
          step: { defaultValue: { value: "1", computed: !1 }, description: "", type: { name: "number" }, required: !1 },
          placeholder: {
            defaultValue: { value: '"Enter number"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          disabled: {
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
          fullWidth: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          value: {
            description: "",
            type: { name: "union", value: [{ name: "number" }, { name: "string" }] },
            required: !1,
          },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          min: { description: "", type: { name: "number" }, required: !1 },
          max: { description: "", type: { name: "number" }, required: !1 },
          status: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
        },
      };
      __webpack_require__("./src/components/tx-input-otp/tx-input-otp.jsx"),
        __webpack_require__("./src/components/tx-input/tx-input.jsx"),
        __webpack_require__("./src/components/tx-kbd/tx-kbd.jsx"),
        __webpack_require__("./src/components/tx-layout/tx-layout.jsx"),
        __webpack_require__("./src/components/tx-lightbox/tx-lightbox.jsx"),
        __webpack_require__("./src/components/tx-link/tx-link.jsx"),
        __webpack_require__("./src/components/tx-loading/tx-loading.jsx"),
        __webpack_require__("./src/components/tx-map/tx-map.jsx"),
        __webpack_require__("./src/components/tx-menu/tx-menu.jsx"),
        __webpack_require__("./src/components/tx-message/tx-message.jsx"),
        __webpack_require__("./src/components/tx-modal/tx-modal.jsx"),
        __webpack_require__("./src/components/tx-notification/tx-notification.jsx"),
        __webpack_require__("./src/components/tx-pagination/tx-pagination.jsx"),
        __webpack_require__("./src/components/tx-popconfirm/tx-popconfirm.jsx"),
        __webpack_require__("./src/components/tx-progress/tx-progress.jsx"),
        __webpack_require__("./src/components/tx-qrcode/tx-qrcode.jsx"),
        __webpack_require__("./src/components/tx-result/tx-result.jsx");
      var tx_radio_styled_templateObject,
        tx_radio_styled_templateObject2,
        tx_radio_styled_templateObject3,
        tx_radio_styled_templateObject4,
        styled_templateObject5,
        StyledRadioWrapper = styled_components_browser_esm.Ay.label(
          tx_radio_styled_templateObject ||
            (tx_radio_styled_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n\n  &.tx-ui-tx-radio--disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n",
            ]))
        ),
        StyledRadioInput = styled_components_browser_esm.Ay.input(
          tx_radio_styled_templateObject2 ||
            (tx_radio_styled_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n",
            ]))
        ),
        StyledRadioCircle = styled_components_browser_esm.Ay.span(
          tx_radio_styled_templateObject3 ||
            (tx_radio_styled_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: ",
              ";\n  height: ",
              ";\n  border: 2px solid ",
              ";\n  border-radius: 50%;\n  background-color: ",
              ';\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  position: relative;\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: ',
              ";\n    height: ",
              ";\n    border-radius: 50%;\n    background-color: ",
              ";\n    opacity: ",
              ";\n    transform: scale(",
              ");\n    transition: all 0.2s ease;\n  }\n\n  ",
              ":focus + & {\n    outline: 2px solid ",
              ";\n    outline-offset: 2px;\n  }\n\n  ",
              ":hover & {\n    border-color: ",
              ";\n  }\n\n  ",
              ".tx-ui-tx-radio--disabled & {\n    background-color: ",
              ";\n    border-color: ",
              ";\n    cursor: not-allowed;\n\n    &::after {\n      background-color: ",
              ";\n    }\n  }\n\n  ",
              ".tx-ui-tx-radio--disabled:hover & {\n    border-color: ",
              ";\n  }\n",
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
          colors.A.bgWhite,
          function (props) {
            switch (props.size) {
              case "small":
                return "6px";
              case "large":
                return "10px";
              default:
                return "8px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "6px";
              case "large":
                return "10px";
              default:
                return "8px";
            }
          },
          function (props) {
            return props.danger ? colors.A.danger : colors.A.primary;
          },
          function (props) {
            return props.checked ? 1 : 0;
          },
          function (props) {
            return props.checked ? 1 : 0;
          },
          StyledRadioInput,
          function (props) {
            return props.danger ? colors.A.dangerHover : colors.A.primaryLight;
          },
          StyledRadioWrapper,
          function (props) {
            return props.checked ? (props.danger ? colors.A.danger : colors.A.primary) : colors.A.borderHover;
          },
          StyledRadioWrapper,
          colors.A.bgFillLight,
          colors.A.borderDefault,
          colors.A.textDisabled,
          StyledRadioWrapper,
          colors.A.borderDefault
        ),
        StyledRadioLabel = styled_components_browser_esm.Ay.span(
          tx_radio_styled_templateObject4 ||
            (tx_radio_styled_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  color: ",
              ";\n  font-size: ",
              ";\n  font-weight: 400;\n  line-height: 1.5;\n\n  ",
              ".tx-ui-tx-radio--disabled & {\n    color: ",
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
          StyledRadioWrapper,
          colors.A.textTertiary
        ),
        StyledRadioGroup = styled_components_browser_esm.Ay.div(
          styled_templateObject5 ||
            (styled_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  flex-direction: ",
              ";\n  gap: ",
              ";\n  flex-wrap: ",
              ";\n",
            ])),
          function (props) {
            return "horizontal" === props.direction ? "row" : "column";
          },
          function (props) {
            return "horizontal" === props.direction ? "16px" : "8px";
          },
          function (props) {
            return "horizontal" === props.direction ? "wrap" : "nowrap";
          }
        ),
        tx_radio_excluded = [
          "label",
          "checked",
          "onChange",
          "disabled",
          "size",
          "danger",
          "color",
          "value",
          "name",
          "id",
        ],
        _excluded2 = ["children", "value", "onChange", "name", "direction", "disabled"],
        TxRadio = function TxRadio(_ref) {
          var label = _ref.label,
            _ref$checked = _ref.checked,
            checked = void 0 !== _ref$checked && _ref$checked,
            onChange = _ref.onChange,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$danger = _ref.danger,
            danger = void 0 !== _ref$danger && _ref$danger,
            color = _ref.color,
            value = _ref.value,
            name = _ref.name,
            id = _ref.id,
            rest = (0, objectWithoutProperties.A)(_ref, tx_radio_excluded),
            radioId = id || "tx-radio-".concat(Math.random().toString(36).substr(2, 9));
          return (0, jsx_runtime.jsxs)(StyledRadioWrapper, {
            htmlFor: radioId,
            className: [
              "tx-ui-tx-radio",
              disabled && "tx-ui-tx-radio--disabled",
              danger && "tx-ui-tx-radio--danger",
              "tx-ui-tx-radio--".concat(size),
            ]
              .filter(Boolean)
              .join(" "),
            children: [
              (0, jsx_runtime.jsx)(
                StyledRadioInput,
                (0, objectSpread2.A)(
                  {
                    type: "radio",
                    id: radioId,
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
              (0, jsx_runtime.jsx)(StyledRadioCircle, { checked, size, danger }),
              label && (0, jsx_runtime.jsx)(StyledRadioLabel, { size, color, children: label }),
            ],
          });
        };
      TxRadio.defaultProps = { checked: !1, disabled: !1, size: "medium", danger: !1 };
      var TxRadioGroup = function TxRadioGroup(_ref2) {
        var children = _ref2.children,
          value = _ref2.value,
          onChange = _ref2.onChange,
          name = _ref2.name,
          _ref2$direction = _ref2.direction,
          direction = void 0 === _ref2$direction ? "vertical" : _ref2$direction,
          _ref2$disabled = _ref2.disabled,
          disabled = void 0 !== _ref2$disabled && _ref2$disabled,
          rest = (0, objectWithoutProperties.A)(_ref2, _excluded2),
          handleChange = function handleChange(childValue) {
            return function (e) {
              !disabled && onChange && onChange(childValue, e);
            };
          };
        return (0, jsx_runtime.jsx)(
          StyledRadioGroup,
          (0, objectSpread2.A)(
            (0, objectSpread2.A)({ direction }, rest),
            {},
            {
              children: react.Children.map(children, function (child) {
                return react.isValidElement(child)
                  ? react.cloneElement(child, {
                      checked: child.props.value === value,
                      onChange: handleChange(child.props.value),
                      name: name || "radio-group",
                      disabled: disabled || child.props.disabled,
                    })
                  : child;
              }),
            }
          )
        );
      };
      (TxRadioGroup.defaultProps = { direction: "vertical", disabled: !1 }), (TxRadio.Group = TxRadioGroup);
      const tx_radio = TxRadio;
      TxRadio.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "Group",
            docblock: null,
            modifiers: ["static"],
            params: [
              {
                name: '{ children, value, onChange, name, direction = "vertical", disabled = false, ...rest }',
                optional: !1,
                type: null,
              },
            ],
            returns: null,
          },
        ],
        displayName: "TxRadio",
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
      __webpack_require__("./src/components/tx-rate/tx-rate.jsx"),
        __webpack_require__("./src/components/tx-scroll-progress/tx-scroll-progress.jsx"),
        __webpack_require__("./src/components/tx-scroll-shadow/tx-scroll-shadow.jsx"),
        __webpack_require__("./src/components/tx-segmented/tx-segmented.jsx");
      var tx_select_styled_templateObject,
        tx_select_styled_templateObject2,
        tx_select_styled_templateObject3,
        tx_select_styled_templateObject4,
        tx_select_styled_templateObject5,
        styled_templateObject6,
        _templateObject7,
        StyledSelectWrapper = styled_components_browser_esm.Ay.div(
          tx_select_styled_templateObject ||
            (tx_select_styled_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  width: ",
              ";\n  min-width: 200px;\n",
            ])),
          function (props) {
            return props.fullWidth ? "100%" : "auto";
          }
        ),
        StyledSelectButton = styled_components_browser_esm.Ay.button(
          tx_select_styled_templateObject2 ||
            (tx_select_styled_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  padding: ",
              ";\n  border: 1.5px solid\n    ",
              ";\n  border-radius: 10px;\n  background-color: ",
              ";\n  color: ",
              ";\n  font-size: ",
              ";\n  text-align: left;\n  cursor: ",
              ";\n  outline: none;\n  transition: all 0.2s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n  }\n\n  &:focus {\n    border-color: ",
              ";\n    box-shadow: 0 0 0 2px ",
              ";\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 32px 8px 12px";
              case "large":
                return "14px 40px 14px 20px";
              default:
                return "10px 36px 10px 16px";
            }
          },
          function (props) {
            return props.disabled
              ? colors.A.borderDisabled
              : "error" === props.status
              ? colors.A.danger
              : "success" === props.status
              ? colors.A.success
              : "warning" === props.status
              ? colors.A.warning
              : props.isOpen
              ? colors.A.primary
              : colors.A.borderLight;
          },
          function (props) {
            return props.disabled ? colors.A.bgFillLight : colors.A.bgWhite;
          },
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textPrimary;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "13px";
              case "large":
                return "15px";
              default:
                return "14px";
            }
          },
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          function (props) {
            return "error" === props.status ? colors.A.danger : colors.A.primary;
          },
          colors.A.primary,
          colors.A.primaryLight
        ),
        StyledSelectValue = styled_components_browser_esm.Ay.span(
          tx_select_styled_templateObject3 ||
            (tx_select_styled_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ",
              ";\n",
            ])),
          function (props) {
            return props.placeholder ? colors.A.placeholder : "inherit";
          }
        ),
        StyledSelectArrow = styled_components_browser_esm.Ay.span(
          tx_select_styled_templateObject4 ||
            (tx_select_styled_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%) rotate(",
              ");\n  transition: transform 0.2s ease;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n  color: ",
              ";\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.isOpen ? "180deg" : "0deg";
          },
          function (props) {
            return props.disabled ? colors.A.textDisabled : colors.A.textSecondary;
          }
        ),
        StyledSelectDropdown = styled_components_browser_esm.Ay.div(
          tx_select_styled_templateObject5 ||
            (tx_select_styled_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  max-height: 300px;\n  overflow-y: auto;\n  z-index: 1000;\n  opacity: ",
              ";\n  visibility: ",
              ";\n  transform: ",
              ";\n  transition: all 0.2s ease;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: ",
              ";\n    border-radius: 3px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ",
              ";\n    border-radius: 3px;\n\n    &:hover {\n      background: ",
              ";\n    }\n  }\n",
            ])),
          colors.A.bgWhite,
          colors.A.borderLight,
          function (props) {
            return props.isOpen ? 1 : 0;
          },
          function (props) {
            return props.isOpen ? "visible" : "hidden";
          },
          function (props) {
            return props.isOpen ? "translateY(0)" : "translateY(-10px)";
          },
          colors.A.bgFill,
          colors.A.borderDefault,
          colors.A.borderHover
        ),
        StyledSelectOption = styled_components_browser_esm.Ay.div(
          styled_templateObject6 ||
            (styled_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background-color: ",
              ";\n  color: ",
              ";\n  font-weight: ",
              ";\n\n  &:hover {\n    background-color: ",
              ";\n  }\n\n  &:active {\n    background-color: ",
              ";\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 12px";
              case "large":
                return "12px 20px";
              default:
                return "10px 16px";
            }
          },
          function (props) {
            return props.selected ? colors.A.bgPrimaryLighter : "transparent";
          },
          function (props) {
            return props.selected ? colors.A.primary : colors.A.textPrimary;
          },
          function (props) {
            return props.selected ? "500" : "400";
          },
          function (props) {
            return props.selected ? colors.A.bgPrimaryLighter : colors.A.bgFill;
          },
          colors.A.bgPrimaryLight
        ),
        StyledSelectEmpty = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 20px 16px;\n  text-align: center;\n  color: ",
              ";\n  font-size: 14px;\n",
            ])),
          colors.A.textSecondary
        ),
        tx_select_excluded = ["options", "value", "onChange", "placeholder", "disabled", "size", "status", "fullWidth"],
        tx_select_ChevronDown = function ChevronDown() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "6 9 12 15 18 9" }),
          });
        },
        TxSelect = function TxSelect(_ref) {
          var _ref$options = _ref.options,
            options = void 0 === _ref$options ? [] : _ref$options,
            value = _ref.value,
            onChange = _ref.onChange,
            _ref$placeholder = _ref.placeholder,
            placeholder = void 0 === _ref$placeholder ? "Select an option" : _ref$placeholder,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            status = _ref.status,
            _ref$fullWidth = _ref.fullWidth,
            fullWidth = void 0 !== _ref$fullWidth && _ref$fullWidth,
            rest = (0, objectWithoutProperties.A)(_ref, tx_select_excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            isOpen = _useState2[0],
            setIsOpen = _useState2[1],
            wrapperRef = (0, react.useRef)(null),
            selectedOption = options.find(function (opt) {
              return opt.value === value;
            }),
            displayValue = selectedOption ? selectedOption.label : placeholder;
          (0, react.useEffect)(function () {
            var handleClickOutside = function handleClickOutside(event) {
              wrapperRef.current && !wrapperRef.current.contains(event.target) && setIsOpen(!1);
            };
            return (
              document.addEventListener("mousedown", handleClickOutside),
              function () {
                return document.removeEventListener("mousedown", handleClickOutside);
              }
            );
          }, []);
          return (0, jsx_runtime.jsxs)(
            StyledSelectWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ ref: wrapperRef, fullWidth }, rest),
              {},
              {
                children: [
                  (0, jsx_runtime.jsxs)(StyledSelectButton, {
                    type: "button",
                    onClick: function handleToggle() {
                      disabled || setIsOpen(!isOpen);
                    },
                    disabled,
                    isOpen,
                    size,
                    status,
                    children: [
                      (0, jsx_runtime.jsx)(StyledSelectValue, { placeholder: !selectedOption, children: displayValue }),
                      (0, jsx_runtime.jsx)(StyledSelectArrow, {
                        isOpen,
                        disabled,
                        children: (0, jsx_runtime.jsx)(tx_select_ChevronDown, {}),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(StyledSelectDropdown, {
                    isOpen,
                    children:
                      0 === options.length
                        ? (0, jsx_runtime.jsx)(StyledSelectEmpty, { children: "No options available" })
                        : options.map(function (option) {
                            return (0, jsx_runtime.jsx)(
                              StyledSelectOption,
                              {
                                selected: option.value === value,
                                size,
                                onClick: function onClick() {
                                  return (function handleSelect(option) {
                                    !disabled && onChange && (onChange(option.value, option), setIsOpen(!1));
                                  })(option);
                                },
                                children: option.label,
                              },
                              option.value
                            );
                          }),
                  }),
                ],
              }
            )
          );
        };
      TxSelect.defaultProps = {
        options: [],
        placeholder: "Select an option",
        disabled: !1,
        size: "medium",
        fullWidth: !1,
      };
      const tx_select = TxSelect;
      TxSelect.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSelect",
        props: {
          options: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: { label: { name: "string", required: !0 }, value: { name: "any", required: !0 } },
              },
            },
            required: !1,
          },
          placeholder: {
            defaultValue: { value: '"Select an option"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          disabled: {
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
          fullWidth: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          value: { description: "", type: { name: "any" }, required: !1 },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          status: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
        },
      };
      __webpack_require__("./src/components/tx-skeleton/tx-skeleton.jsx"),
        __webpack_require__("./src/components/tx-slider/tx-slider.jsx"),
        __webpack_require__("./src/components/tx-snippet/tx-snippet.jsx"),
        __webpack_require__("./src/components/tx-space/tx-space.jsx"),
        __webpack_require__("./src/components/tx-splitter/tx-splitter.jsx"),
        __webpack_require__("./src/components/tx-steps/tx-steps.jsx"),
        __webpack_require__("./src/components/tx-switch/tx-switch.jsx"),
        __webpack_require__("./src/components/tx-table/tx-table.jsx"),
        __webpack_require__("./src/components/tx-tabs/tx-tabs.jsx"),
        __webpack_require__("./src/components/tx-tag/tx-tag.jsx"),
        __webpack_require__("./src/components/tx-text-gradient/tx-text-gradient.jsx"),
        __webpack_require__("./src/components/tx-textarea/tx-textarea.jsx"),
        __webpack_require__("./src/components/tx-time-input/tx-time-input.jsx"),
        __webpack_require__("./src/components/tx-timeline/tx-timeline.jsx"),
        __webpack_require__("./src/components/tx-toggle/tx-toggle.jsx"),
        __webpack_require__("./src/components/tx-tooltip/tx-tooltip.jsx"),
        __webpack_require__("./src/components/tx-tour/tx-tour.jsx"),
        __webpack_require__("./src/components/tx-transfer/tx-transfer.jsx");
      var tx_treeselect_templateObject,
        tx_treeselect_templateObject2,
        tx_treeselect_templateObject3,
        tx_treeselect_excluded = ["data"],
        TreeSelectContainer = styled_components_browser_esm.Ay.div(
          tx_treeselect_templateObject ||
            (tx_treeselect_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  width: 100%;\n",
            ]))
        ),
        TreeSelectDropdown = styled_components_browser_esm.Ay.div(
          tx_treeselect_templateObject2 ||
            (tx_treeselect_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: ",
              ";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid ",
              ";\n  border-radius: 8px;\n  margin-top: 4px;\n  max-height: 300px;\n  overflow-y: auto;\n  z-index: 1000;\n",
            ])),
          function (props) {
            return props.open ? "block" : "none";
          },
          colors.A.borderLight
        ),
        TreeItem = styled_components_browser_esm.Ay.div(
          tx_treeselect_templateObject3 ||
            (tx_treeselect_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
              ";\n  }\n",
            ])),
          colors.A.bgFillLight
        ),
        TxTreeSelect = function TxTreeSelect(_ref) {
          var data = _ref.data,
            props = (0, objectWithoutProperties.A)(_ref, tx_treeselect_excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = (0, react.useState)(""),
            selectedValue = (0, slicedToArray.A)(_useState3, 1)[0];
          return (0, jsx_runtime.jsxs)(
            TreeSelectContainer,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)("input", {
                    readOnly: !0,
                    value: selectedValue,
                    onClick: function onClick() {
                      return setOpen(!open);
                    },
                    placeholder: "Select...",
                    style: { width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ddd" },
                  }),
                  (0, jsx_runtime.jsx)(TreeSelectDropdown, {
                    open,
                    children:
                      data &&
                      (function renderTree(items) {
                        return items.map(function (item) {
                          return (0, jsx_runtime.jsx)(TreeItem, { children: item.label }, item.value);
                        });
                      })(data),
                  }),
                ],
              }
            )
          );
        };
      TxTreeSelect.__docgenInfo = { description: "", methods: [], displayName: "TxTreeSelect" };
      __webpack_require__("./src/components/tx-typography/tx-typography.jsx"),
        __webpack_require__("./src/components/tx-upload/tx-upload.jsx"),
        __webpack_require__("./src/components/tx-video-player/tx-video-player.jsx"),
        __webpack_require__("./src/components/tx-watermark/tx-watermark.jsx");
    },
    "./src/components/tx-affix/tx-affix.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_affix });
      var _templateObject,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        AffixContainer = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ).Ay.div(_templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(["\n  ", "\n"])), function (props) {
          return (
            props.fixed &&
            "\n    position: fixed;\n    top: "
              .concat(props.offsetTop || 0, "px;\n    left: ")
              .concat(props.offsetLeft, "px;\n    right: ")
              .concat(props.offsetRight, "px;\n    bottom: ")
              .concat(props.offsetBottom, "px;\n    z-index: ")
              .concat(props.zIndex || 1e3, ";\n    width: ")
              .concat(props.width || "auto", ";\n  ")
          );
        }),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["offsetTop", "offsetBottom", "onChange", "children"],
        TxAffix = function TxAffix(_ref) {
          var _ref$offsetTop = _ref.offsetTop,
            offsetTop = void 0 === _ref$offsetTop ? 0 : _ref$offsetTop,
            onChange = (_ref.offsetBottom, _ref.onChange),
            children = _ref.children,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            fixed = _useState2[0],
            setFixed = _useState2[1],
            affixRef = (0, react.useRef)(null),
            containerRef = (0, react.useRef)(null);
          return (
            (0, react.useEffect)(
              function () {
                var handleScroll = function handleScroll() {
                  if (containerRef.current && affixRef.current) {
                    var containerRect = containerRef.current.getBoundingClientRect(),
                      targetOffset = offsetTop || 0;
                    if (fixed) {
                      if (containerRect.top < targetOffset && containerRect.bottom > targetOffset) return;
                      containerRect.bottom <= targetOffset && (setFixed(!1), onChange && onChange(!1));
                    } else containerRect.top <= targetOffset && (setFixed(!0), onChange && onChange(!0));
                  }
                };
                return (
                  window.addEventListener("scroll", handleScroll),
                  window.addEventListener("resize", handleScroll),
                  handleScroll(),
                  function () {
                    window.removeEventListener("scroll", handleScroll),
                      window.removeEventListener("resize", handleScroll);
                  }
                );
              },
              [offsetTop, fixed, onChange]
            ),
            (0, jsx_runtime.jsx)(
              "div",
              (0, objectSpread2.A)(
                (0, objectSpread2.A)({ ref: containerRef }, props),
                {},
                {
                  children: (0, jsx_runtime.jsx)(AffixContainer, {
                    ref: affixRef,
                    fixed,
                    offsetTop,
                    width: affixRef.current ? affixRef.current.offsetWidth : "auto",
                    children,
                  }),
                }
              )
            )
          );
        };
      const tx_affix = TxAffix;
      TxAffix.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxAffix",
        props: {
          offsetTop: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          offsetBottom: { description: "", type: { name: "number" }, required: !1 },
          onChange: { description: "", type: { name: "func" }, required: !1 },
          children: { description: "", type: { name: "node" }, required: !0 },
        },
      };
    },
    "./src/components/tx-alert/tx-alert.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_alert });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        AlertContainer = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n  border: 1px solid;\n  background-color: ",
              ";\n  border-color: ",
              ";\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n\n  ",
              "\n",
            ])),
          function (props) {
            var type = props.type;
            return (
              {
                success: colors.A.success + "08",
                info: colors.A.info + "08",
                warning: colors.A.warning + "08",
                error: colors.A.error + "08",
              }[type] || colors.A.bgFillLight
            );
          },
          function (props) {
            var type = props.type;
            return (
              { success: colors.A.success, info: colors.A.info, warning: colors.A.warning, error: colors.A.error }[
                type
              ] || colors.A.borderDefault
            );
          },
          function (props) {
            return props.closable && "\n    padding-right: 32px;\n  ";
          }
        ),
        AlertIcon = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
            ])),
          function (props) {
            var type = props.type;
            return (
              { success: colors.A.success, info: colors.A.info, warning: colors.A.warning, error: colors.A.error }[
                type
              ] || colors.A.textSecondary
            );
          }
        ),
        AlertContent = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n",
            ]))
        ),
        AlertTitle = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  line-height: 1.5;\n",
            ])),
          colors.A.textPrimary
        ),
        AlertDescription = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  line-height: 1.5;\n",
            ])),
          colors.A.textSecondary
        ),
        AlertClose = styled_components_browser_esm.Ay.button(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.textPrimary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["type", "title", "description", "closable", "onClose", "children"],
        getIcon = function getIcon(type) {
          var iconProps = {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          };
          switch (type) {
            case "success":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                      (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                    ],
                  }
                )
              );
            case "error":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                      (0, jsx_runtime.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
                      (0, jsx_runtime.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
                    ],
                  }
                )
              );
            case "warning":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("path", {
                        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                      }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
                    ],
                  }
                )
              );
            default:
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                    ],
                  }
                )
              );
          }
        },
        TxAlert = function TxAlert(_ref) {
          var type = _ref.type,
            title = _ref.title,
            description = _ref.description,
            closable = _ref.closable,
            onClose = _ref.onClose,
            children = _ref.children,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!0),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          return visible
            ? (0, jsx_runtime.jsxs)(
                AlertContainer,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ type, closable }, props),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)(AlertIcon, { type, children: getIcon(type) }),
                      (0, jsx_runtime.jsxs)(AlertContent, {
                        children: [
                          title && (0, jsx_runtime.jsx)(AlertTitle, { children: title }),
                          description && (0, jsx_runtime.jsx)(AlertDescription, { children: description }),
                          children && (0, jsx_runtime.jsx)(AlertDescription, { children }),
                        ],
                      }),
                      closable &&
                        (0, jsx_runtime.jsx)(AlertClose, {
                          onClick: function handleClose() {
                            setVisible(!1), onClose && onClose();
                          },
                          "aria-label": "Close",
                          children: (0, jsx_runtime.jsxs)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                            ],
                          }),
                        }),
                    ],
                  }
                )
              )
            : null;
        };
      TxAlert.defaultProps = { type: "info", closable: !1 };
      const tx_alert = TxAlert;
      TxAlert.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxAlert",
        props: {
          type: {
            defaultValue: { value: '"info"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"info"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          title: { description: "", type: { name: "string" }, required: !1 },
          description: { description: "", type: { name: "string" }, required: !1 },
          onClose: { description: "", type: { name: "func" }, required: !1 },
          children: { description: "", type: { name: "node" }, required: !1 },
        },
      };
    },
    "./src/components/tx-anchor/tx-anchor.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_anchor });
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
        StyledAnchorWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  position: relative;\n  padding-left: 16px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
              ";\n  }\n",
            ])),
          colors.A.borderLight
        ),
        StyledAnchorLink = styled_components_browser_esm.Ay.a(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: block;\n  padding: 4px 0;\n  color: ",
              ";\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  position: relative;\n\n  &:hover {\n    color: ",
              ";\n  }\n\n  ",
              "\n",
            ])),
          function (props) {
            return props.active ? colors.A.primary : colors.A.textSecondary;
          },
          colors.A.primary,
          function (props) {
            return (
              props.active &&
              '\n    &::before {\n      content: "";\n      position: absolute;\n      left: -16px;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 2px;\n      height: 16px;\n      background-color: '.concat(
                colors.A.primary,
                ";\n    }\n  "
              )
            );
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "offsetTop"],
        TxAnchor = function TxAnchor(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$offsetTop = _ref.offsetTop,
            offsetTop = void 0 === _ref$offsetTop ? 0 : _ref$offsetTop,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(""),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            activeKey = _useState2[0],
            setActiveKey = _useState2[1];
          (0, react.useEffect)(
            function () {
              var handleScroll = function handleScroll() {
                for (var scrollPosition = window.scrollY + offsetTop + 10, i = items.length - 1; i >= 0; i--) {
                  var item = items[i],
                    element = document.getElementById(item.key);
                  if (element)
                    if (scrollPosition >= element.offsetTop) {
                      setActiveKey(item.key);
                      break;
                    }
                }
              };
              return (
                window.addEventListener("scroll", handleScroll),
                handleScroll(),
                function () {
                  window.removeEventListener("scroll", handleScroll);
                }
              );
            },
            [items, offsetTop]
          );
          return (0, jsx_runtime.jsx)(
            StyledAnchorWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, rest),
              {},
              {
                children: items.map(function (item) {
                  return (0, jsx_runtime.jsx)(
                    StyledAnchorLink,
                    {
                      href: "#".concat(item.key),
                      active: activeKey === item.key,
                      onClick: function onClick(e) {
                        return (function handleClick(e, key) {
                          e.preventDefault();
                          var element = document.getElementById(key);
                          if (element) {
                            var elementPosition = element.offsetTop - offsetTop;
                            window.scrollTo({ top: elementPosition, behavior: "smooth" }), setActiveKey(key);
                          }
                        })(e, item.key);
                      },
                      children: item.title,
                    },
                    item.key
                  );
                }),
              }
            )
          );
        };
      TxAnchor.defaultProps = { items: [], offsetTop: 0 };
      const tx_anchor = TxAnchor;
      TxAnchor.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxAnchor",
        props: {
          items: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: { key: { name: "string", required: !0 }, title: { name: "node", required: !0 } },
              },
            },
            required: !1,
          },
          offsetTop: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-avatar/tx-avatar.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/antd/es/badge/index.js"),
        antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/antd/es/avatar/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        _excluded = ["shape", "badge", "size", "icon", "color", "url", "alt"],
        _excluded2 = ["children", "max", "size", "shape"],
        TxAvatar = function TxAvatar(_ref) {
          var shape = _ref.shape,
            badge = _ref.badge,
            size = _ref.size,
            icon = _ref.icon,
            color = _ref.color,
            url = _ref.url,
            rest =
              (_ref.alt,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(
                _ref,
                _excluded
              ));
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.A, {
            count: isNaN(badge) ? void 0 : badge,
            dot: "dot" === badge && !0,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              antd__WEBPACK_IMPORTED_MODULE_4__.A,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {
                  size,
                  src:
                    url && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", { src: url, alt: "avatar" }),
                  style: { backgroundColor: color },
                  icon: icon && icon,
                  shape: shape && shape,
                },
                rest
              )
            ),
          });
        };
      TxAvatar.defaultProps = { size: 36, shape: "circle", color: "#0e0e13" };
      var TxAvatarGroup = function TxAvatarGroup(_ref2) {
        var children = _ref2.children,
          max = _ref2.max,
          size = _ref2.size;
        _ref2.shape,
          (0,
          _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(
            _ref2,
            _excluded2
          );
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.A.Group, {
          size,
          max: {
            count: max,
            style: { color: "#0e0e13", backgroundColor: "#f4f4f5", cursor: "pointer" },
            popover: { trigger: "hover" },
          },
          children:
            null == children
              ? void 0
              : children.map(function (item, index) {
                  return item;
                }),
        });
      };
      (TxAvatarGroup.defaultProps = { size: 36 }), (TxAvatar.Group = TxAvatarGroup);
      const __WEBPACK_DEFAULT_EXPORT__ = TxAvatar;
      TxAvatar.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "Group",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, max, size, shape, ...rest }", optional: !1, type: null }],
            returns: null,
          },
        ],
        displayName: "TxAvatar",
        props: {
          size: {
            defaultValue: { value: "36", computed: !1 },
            description: "",
            type: {
              name: "union",
              value: [
                {
                  name: "enum",
                  value: [
                    { value: '"large"', computed: !1 },
                    { value: '"medium"', computed: !1 },
                    { value: '"small"', computed: !1 },
                  ],
                },
                { name: "number" },
              ],
            },
            required: !1,
          },
          shape: {
            defaultValue: { value: '"circle"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"square"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          color: {
            defaultValue: { value: '"#0e0e13"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          url: { description: "", type: { name: "string" }, required: !1 },
          badge: {
            description: "",
            type: {
              name: "union",
              value: [{ name: "enum", value: [{ value: '"dot"', computed: !1 }] }, { name: "number" }],
            },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-back-top/tx-back-top.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_back_top });
      var _templateObject,
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react = __webpack_require__("./node_modules/react/index.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        BackTopButton = styled_components_browser_esm.Ay.button(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  right: ",
              ";\n  bottom: ",
              ";\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
              ";\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 188, 255, 0.4);\n  transition: all 0.3s;\n  z-index: 1000;\n  opacity: ",
              ";\n  pointer-events: ",
              ";\n\n  &:hover {\n    background-color: ",
              ";\n    box-shadow: 0 6px 16px rgba(0, 188, 255, 0.5);\n    transform: translateY(-4px);\n  }\n\n  &:active {\n    transform: translateY(-2px);\n  }\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n",
            ])),
          function (props) {
            return props.right || "48px";
          },
          function (props) {
            return props.bottom || "48px";
          },
          colors.A.primary,
          function (props) {
            return props.visible ? 1 : 0;
          },
          function (props) {
            return props.visible ? "auto" : "none";
          },
          colors.A.primaryDark
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        TxBackTop = function TxBackTop(_ref) {
          var _ref$visibilityHeight = _ref.visibilityHeight,
            visibilityHeight = void 0 === _ref$visibilityHeight ? 400 : _ref$visibilityHeight,
            right = _ref.right,
            bottom = _ref.bottom,
            onClick = _ref.onClick,
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          (0, react.useEffect)(
            function () {
              var toggleVisible = function toggleVisible() {
                var scrolled = document.documentElement.scrollTop;
                setVisible(scrolled > visibilityHeight);
              };
              return (
                window.addEventListener("scroll", toggleVisible),
                function () {
                  window.removeEventListener("scroll", toggleVisible);
                }
              );
            },
            [visibilityHeight]
          );
          return (0, jsx_runtime.jsx)(BackTopButton, {
            visible,
            right,
            bottom,
            onClick: function scrollToTop() {
              window.scrollTo({ top: 0, behavior: "smooth" }), onClick && onClick();
            },
            "aria-label": "Back to top",
            children: (0, jsx_runtime.jsxs)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [
                (0, jsx_runtime.jsx)("polyline", { points: "5 10 12 3 19 10" }),
                (0, jsx_runtime.jsx)("path", { d: "M12 3v22" }),
              ],
            }),
          });
        };
      const tx_back_top = TxBackTop;
      TxBackTop.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxBackTop",
        props: {
          visibilityHeight: {
            defaultValue: { value: "400", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          right: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          bottom: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          onClick: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-badge/tx-badge.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { U: () => TxBadge });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
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
        BadgeWrapper = styled_components_browser_esm.Ay.span(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n",
            ]))
        ),
        BadgeContent = styled_components_browser_esm.Ay.sup(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: ",
              ";\n  right: ",
              ";\n  transform: ",
              ";\n  transform-origin: 100% 0%;\n  z-index: 1;\n  min-width: ",
              ";\n  height: ",
              ";\n  padding: ",
              ";\n  font-size: ",
              ";\n  font-weight: 600;\n  line-height: ",
              ";\n  text-align: center;\n  background-color: ",
              ";\n  color: white;\n  border-radius: ",
              ";\n  box-shadow: 0 0 0 1px #fff;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (props) {
            return props.dot ? "-4px" : "0";
          },
          function (props) {
            return props.dot ? "-4px" : "0";
          },
          function (props) {
            return props.dot ? "none" : "translate(50%, -50%)";
          },
          function (props) {
            return props.dot ? "6px" : "20px";
          },
          function (props) {
            return props.dot ? "6px" : "20px";
          },
          function (props) {
            return props.dot ? "0" : "0 6px";
          },
          function (props) {
            return props.dot ? "0" : "12px";
          },
          function (props) {
            return props.dot ? "6px" : "20px";
          },
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[500];
              case "error":
              default:
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
            }
          },
          function (props) {
            return props.dot ? "50%" : "10px";
          },
          function (props) {
            return !1 === props.showZero && 0 === props.count && "\n    display: none;\n  ";
          },
          function (props) {
            return props.overflowCount && props.count > props.overflowCount && "\n    padding: 0 8px;\n  ";
          }
        ),
        BadgeStandalone = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 20px;\n  padding: 0 8px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 20px;\n  color: white;\n  background-color: ",
              ";\n  border-radius: 10px;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n",
            ])),
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          }
        ),
        BadgeRibbon = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 8px;\n  right: ",
              ";\n  left: ",
              ";\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  background-color: ",
              ';\n  border-radius: 2px;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n\n  &::after {\n    content: "";\n    position: absolute;\n    bottom: -8px;\n    ',
              ": 0;\n    width: 8px;\n    height: 8px;\n    background-color: ",
              ";\n    clip-path: polygon(",
              ");\n  }\n",
            ])),
          function (props) {
            return "start" === props.placement ? "auto" : "-8px";
          },
          function (props) {
            return "start" === props.placement ? "-8px" : "auto";
          },
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          },
          function (props) {
            return "start" === props.placement ? "left" : "right";
          },
          function (props) {
            switch (props.status) {
              case "success":
                return colors.A.success[700];
              case "error":
                return colors.A.danger[700];
              case "warning":
                return colors.A.warning[700];
              case "processing":
                return colors.A.info[700];
              default:
                return colors.A.primary[700];
            }
          },
          function (props) {
            return "start" === props.placement ? "0 0, 100% 0, 0 100%" : "0 0, 100% 0, 100% 100%";
          }
        ),
        RibbonWrapper = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)(["\n  position: relative;\n  overflow: hidden;\n"]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["count", "dot", "showZero", "overflowCount", "status", "children", "className"],
        _excluded2 = ["text", "status", "placement", "children", "className"],
        TxBadge = function TxBadge(_ref) {
          var _ref$count = _ref.count,
            count = void 0 === _ref$count ? 0 : _ref$count,
            _ref$dot = _ref.dot,
            dot = void 0 !== _ref$dot && _ref$dot,
            _ref$showZero = _ref.showZero,
            showZero = void 0 !== _ref$showZero && _ref$showZero,
            _ref$overflowCount = _ref.overflowCount,
            overflowCount = void 0 === _ref$overflowCount ? 99 : _ref$overflowCount,
            _ref$status = _ref.status,
            status = void 0 === _ref$status ? "default" : _ref$status,
            children = _ref.children,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
          return children
            ? (0, jsx_runtime.jsxs)(
                BadgeWrapper,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ className }, props),
                  {},
                  {
                    children: [
                      children,
                      (0, jsx_runtime.jsx)(BadgeContent, {
                        dot,
                        count,
                        showZero,
                        overflowCount,
                        status,
                        children: !dot && displayCount,
                      }),
                    ],
                  }
                )
              )
            : (0, jsx_runtime.jsx)(
                BadgeStandalone,
                (0, objectSpread2.A)((0, objectSpread2.A)({ status, className }, props), {}, { children: displayCount })
              );
        };
      TxBadge.defaultProps = {
        count: 0,
        dot: !1,
        showZero: !1,
        overflowCount: 99,
        status: "default",
        children: null,
        className: "",
      };
      var TxBadgeRibbon = function TxBadgeRibbon(_ref2) {
        var text = _ref2.text,
          _ref2$status = _ref2.status,
          status = void 0 === _ref2$status ? "default" : _ref2$status,
          _ref2$placement = _ref2.placement,
          placement = void 0 === _ref2$placement ? "end" : _ref2$placement,
          children = _ref2.children,
          className = _ref2.className,
          props = (0, objectWithoutProperties.A)(_ref2, _excluded2);
        return (0, jsx_runtime.jsxs)(
          RibbonWrapper,
          (0, objectSpread2.A)(
            (0, objectSpread2.A)({ className }, props),
            {},
            { children: [children, (0, jsx_runtime.jsx)(BadgeRibbon, { status, placement, children: text })] }
          )
        );
      };
      (TxBadgeRibbon.defaultProps = { text: "", status: "default", placement: "end", children: null, className: "" }),
        (TxBadge.Ribbon = TxBadgeRibbon),
        (TxBadge.__docgenInfo = {
          description: "",
          methods: [
            {
              name: "Ribbon",
              docblock: null,
              modifiers: ["static"],
              params: [
                {
                  name: '{ text, status = "default", placement = "end", children, className, ...props }',
                  optional: !1,
                  type: null,
                },
              ],
              returns: null,
            },
          ],
          displayName: "TxBadge",
          props: {
            count: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            dot: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            showZero: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            overflowCount: {
              defaultValue: { value: "99", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            status: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"success"', computed: !1 },
                  { value: '"error"', computed: !1 },
                  { value: '"warning"', computed: !1 },
                  { value: '"processing"', computed: !1 },
                  { value: '"default"', computed: !1 },
                ],
              },
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
        (TxBadgeRibbon.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxBadgeRibbon",
          props: {
            status: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"success"', computed: !1 },
                  { value: '"error"', computed: !1 },
                  { value: '"warning"', computed: !1 },
                  { value: '"processing"', computed: !1 },
                  { value: '"default"', computed: !1 },
                ],
              },
              required: !1,
            },
            placement: {
              defaultValue: { value: '"end"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"start"', computed: !1 },
                  { value: '"end"', computed: !1 },
                ],
              },
              required: !1,
            },
            text: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "node" },
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
    "./src/components/tx-calendar/tx-calendar.jsx": (
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
        _excluded = ["value", "onChange"],
        CalendarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: 100%;\n  max-width: 350px;\n  background: white;\n  border: 1px solid ",
                ";\n  border-radius: 8px;\n  padding: 16px;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        CalendarHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n",
              ]
            ))
        ),
        MonthYear = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: 16px;\n  font-weight: 600;\n"]
            ))
        ),
        NavButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        CalendarGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n"]
            ))
        ),
        CalendarDay = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  text-align: center;\n  font-size: 12px;\n  color: ", ";\n  padding: 4px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        CalendarDate = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject7 ||
            (_templateObject7 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: 100%;\n  padding: 8px;\n  border: none;\n  background: ",
                ";\n  color: ",
                ";\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n\n  ",
                "\n",
              ]
            )),
          function (props) {
            return props.selected ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary : "transparent";
          },
          function (props) {
            return props.selected ? "white" : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary;
          },
          function (props) {
            return props.selected
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
              : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight;
          },
          function (props) {
            return (
              props.today &&
              "\n    border: 1px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary, ";\n  ")
            );
          }
        ),
        TxCalendar = function TxCalendar(_ref) {
          var value = _ref.value,
            onChange = _ref.onChange,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || new Date()),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            selectedDate = _useState2[0],
            setSelectedDate = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedDate),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState3,
              2
            ),
            currentMonth = _useState4[0],
            setCurrentMonth = _useState4[1],
            monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1),
            monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0),
            today = new Date(),
            isToday = function isToday(date) {
              return (
                date === today.getDate() &&
                currentMonth.getMonth() === today.getMonth() &&
                currentMonth.getFullYear() === today.getFullYear()
              );
            },
            isSelected = function isSelected(date) {
              return (
                date === selectedDate.getDate() &&
                currentMonth.getMonth() === selectedDate.getMonth() &&
                currentMonth.getFullYear() === selectedDate.getFullYear()
              );
            },
            days = (function getDaysInMonth() {
              for (var days = [], startDate = monthStart, endDate = monthEnd, i = 0; i < startDate.getDay(); i++)
                days.push(null);
              for (var _i = 1; _i <= endDate.getDate(); _i++) days.push(_i);
              return days;
            })();
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            CalendarContainer,
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
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CalendarHeader, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavButton, {
                        onClick: function prevMonth() {
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
                        },
                        children: "←",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(MonthYear, {
                        children: [
                          [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ][currentMonth.getMonth()],
                          " ",
                          currentMonth.getFullYear(),
                        ],
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavButton, {
                        onClick: function nextMonth() {
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
                        },
                        children: "→",
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CalendarGrid, {
                    children: [
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (day) {
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CalendarDay, { children: day }, day);
                      }),
                      days.map(function (date, index) {
                        return date
                          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              CalendarDate,
                              {
                                onClick: function onClick() {
                                  return (function handleDateClick(date) {
                                    var newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
                                    setSelectedDate(newDate), onChange && onChange(newDate);
                                  })(date);
                                },
                                selected: isSelected(date) ? 1 : 0,
                                today: isToday(date) ? 1 : 0,
                                children: date,
                              },
                              index
                            )
                          : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}, index);
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCalendar;
      TxCalendar.__docgenInfo = { description: "", methods: [], displayName: "TxCalendar" };
    },
    "./src/components/tx-card/tx-card.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { H: () => TxCard });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["title", "children", "extra", "footer", "hoverable"],
        CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  background: ",
                ";\n  border: 1px solid ",
                ";\n  border-radius: ",
                ";\n  padding: ",
                ";\n  transition: all 0.2s;\n  ",
                "\n",
              ]
            )),
          function (props) {
            return "outlined" === props.variant
              ? "transparent"
              : _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight;
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          function (props) {
            return props.radius || "8px";
          },
          function (props) {
            return props.padding || "24px";
          },
          function (props) {
            return (
              props.hoverable &&
              "\n    &:hover {\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n      transform: translateY(-2px);\n    }\n  "
            );
          }
        ),
        CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  margin-bottom: 16px;\n  font-size: 16px;\n  font-weight: 600;\n"]
            ))
        ),
        CardBody = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [""]
            ))
        ),
        CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight
        ),
        TxCard = function TxCard(_ref) {
          var title = _ref.title,
            children = _ref.children,
            extra = _ref.extra,
            footer = _ref.footer,
            hoverable = _ref.hoverable,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            CardContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { hoverable },
                props
              ),
              {},
              {
                children: [
                  title &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CardHeader, {
                      children: [
                        title,
                        " ",
                        extra &&
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                            style: { float: "right" },
                            children: extra,
                          }),
                      ],
                    }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CardBody, { children }),
                  footer && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CardFooter, { children: footer }),
                ],
              }
            )
          );
        };
      TxCard.__docgenInfo = { description: "", methods: [], displayName: "TxCard" };
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
    "./src/components/tx-chart/tx-chart.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        _excluded = ["type", "data", "options", "width", "height"],
        ChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  width: 100%;\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",
                ";\n  border-radius: 8px;\n  padding: 24px;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        TxChart = function TxChart(_ref) {
          var _ref$type = _ref.type,
            type = void 0 === _ref$type ? "bar" : _ref$type,
            data = _ref.data,
            options = _ref.options,
            _ref$width = _ref.width,
            width = void 0 === _ref$width ? "100%" : _ref$width,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "300px" : _ref$height,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            chartRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              function () {
                chartRef.current && (console.log("Chart data:", data), console.log("Chart options:", options));
              },
              [data, options]
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              ChartContainer,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                  { ref: chartRef, style: { width, height } },
                  props
                ),
                {},
                {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    style: { textAlign: "center", color: _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                        style: { fontSize: "16px", fontWeight: "500" },
                        children: "Chart Component",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                        style: { fontSize: "14px", marginTop: "8px" },
                        children: [
                          "Chart type: ",
                          type,
                          " - Data visualization component (integrate with Chart.js or similar)",
                        ],
                      }),
                    ],
                  }),
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxChart;
      TxChart.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxChart",
        props: {
          type: { defaultValue: { value: '"bar"', computed: !1 }, required: !1 },
          width: { defaultValue: { value: '"100%"', computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"300px"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-code/tx-code.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "block", "variant", "size"],
        CodeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.code(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  padding: ",
                ";\n  background: ",
                ";\n  border: ",
                ";\n  border-radius: 4px;\n  font-size: ",
                ";\n  color: ",
                ";\n  display: ",
                ";\n  ",
                "\n",
              ]
            )),
          function (props) {
            return props.block ? "12px 16px" : "2px 6px";
          },
          function (props) {
            return "outlined" === props.variant
              ? "transparent"
              : _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight;
          },
          function (props) {
            return "outlined" === props.variant
              ? "1px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight)
              : "none";
          },
          function (props) {
            return props.size || "14px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary,
          function (props) {
            return props.block ? "block" : "inline";
          },
          function (props) {
            return props.block && "\n    white-space: pre-wrap;\n    word-break: break-all;\n  ";
          }
        ),
        TxCode = function TxCode(_ref) {
          var children = _ref.children,
            _ref$block = _ref.block,
            block = void 0 !== _ref$block && _ref$block,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? "default" : _ref$variant,
            size = _ref.size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            CodeContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { block: block ? 1 : 0, variant, size },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCode;
      TxCode.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxCode",
        props: {
          block: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          variant: { defaultValue: { value: '"default"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-copy/tx-copy.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
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
        _excluded = ["text", "compact", "children", "onCopy"],
        CopyButton = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.button(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              [
                "\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: ",
                ";\n  background: ",
                ";\n  border: 1px solid ",
                ";\n  border-radius: 6px;\n  color: ",
                ";\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
                ";\n    border-color: ",
                ";\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n",
              ]
            )),
          function (props) {
            return props.compact ? "4px 8px" : "8px 16px";
          },
          function (props) {
            return props.copied
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.successLight
              : _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.bgFillLight;
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.borderLight,
          function (props) {
            return props.copied
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.success
              : _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.textPrimary;
          },
          function (props) {
            return props.copied
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.successLight
              : _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.bgFillMedium;
          },
          function (props) {
            return props.copied
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.success
              : _theme_colors__WEBPACK_IMPORTED_MODULE_2__.A.borderMedium;
          }
        ),
        TxCopy = function TxCopy(_ref) {
          var text = _ref.text,
            _ref$compact = _ref.compact,
            compact = void 0 !== _ref$compact && _ref$compact,
            children = _ref.children,
            onCopy = _ref.onCopy,
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
            copied = _useState2[0],
            setCopied = _useState2[1],
            handleCopy = (function () {
              var _ref2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__.A)().mark(
                  function _callee() {
                    return (0,
                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__.A)().wrap(
                      function _callee$(_context) {
                        for (;;)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              return (_context.prev = 0), (_context.next = 3), navigator.clipboard.writeText(text);
                            case 3:
                              setCopied(!0),
                                onCopy && onCopy(text),
                                setTimeout(function () {
                                  return setCopied(!1);
                                }, 2e3),
                                (_context.next = 11);
                              break;
                            case 8:
                              (_context.prev = 8),
                                (_context.t0 = _context.catch(0)),
                                console.error("Failed to copy text:", _context.t0);
                            case 11:
                            case "end":
                              return _context.stop();
                          }
                      },
                      _callee,
                      null,
                      [[0, 8]]
                    );
                  }
                )
              );
              return function handleCopy() {
                return _ref2.apply(this, arguments);
              };
            })();
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            CopyButton,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.A)(
                { compact, copied: copied ? 1 : 0, onClick: handleCopy },
                props
              ),
              {},
              {
                children: copied
                  ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                      {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                            _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconCheck,
                            { style: { width: "16px", height: "16px" } }
                          ),
                          "Copied!",
                        ],
                      }
                    )
                  : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                      {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                            _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconCrossSmall,
                            { style: { width: "16px", height: "16px" } }
                          ),
                          children || "Copy",
                        ],
                      }
                    ),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCopy;
      TxCopy.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxCopy",
        props: { compact: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
      };
    },
    "./src/components/tx-countdown/tx-countdown.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
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
        _excluded = ["targetDate", "size"],
        CountdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  gap: 8px;\n"]
            ))
        ),
        CountdownUnit = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n"]
            ))
        ),
        CountdownValue = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: ", ";\n  font-weight: 700;\n  color: ", ";\n  line-height: 1;\n"]
            )),
          function (props) {
            return props.size || "32px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary
        ),
        CountdownLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: 12px;\n  color: ", ";\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        TxCountdown = function TxCountdown(_ref) {
          var targetDate = _ref.targetDate,
            size = _ref.size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({ days: 0, hours: 0, minutes: 0, seconds: 0 }),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            timeLeft = _useState2[0],
            setTimeLeft = _useState2[1];
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              function () {
                var calculateTimeLeft = function calculateTimeLeft() {
                  var difference = new Date(targetDate) - new Date();
                  setTimeLeft(
                    difference > 0
                      ? {
                          days: Math.floor(difference / 864e5),
                          hours: Math.floor((difference / 36e5) % 24),
                          minutes: Math.floor((difference / 1e3 / 60) % 60),
                          seconds: Math.floor((difference / 1e3) % 60),
                        }
                      : { days: 0, hours: 0, minutes: 0, seconds: 0 }
                  );
                };
                calculateTimeLeft();
                var timer = setInterval(calculateTimeLeft, 1e3);
                return function () {
                  return clearInterval(timer);
                };
              },
              [targetDate]
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              CountdownContainer,
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
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.days).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, { children: "Days" }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.hours).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, { children: "Hours" }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.minutes).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, {
                          children: "Minutes",
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CountdownUnit, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownValue, {
                          size,
                          children: String(timeLeft.seconds).padStart(2, "0"),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CountdownLabel, {
                          children: "Seconds",
                        }),
                      ],
                    }),
                  ],
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxCountdown;
      TxCountdown.__docgenInfo = { description: "", methods: [], displayName: "TxCountdown" };
    },
    "./src/components/tx-date-range-picker/tx-date-range-picker.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["onChange"],
        DateRangeContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n"]
            ))
        ),
        DateInput = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.input(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  padding: 8px 12px;\n  border: 1px solid ",
                ";\n  border-radius: 6px;\n  font-size: 14px;\n  width: 150px;\n\n  &:focus {\n    outline: none;\n    border-color: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
        ),
        TxDateRangePicker = function TxDateRangePicker(_ref) {
          var onChange = _ref.onChange,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            startDate = _useState2[0],
            setStartDate = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState3,
              2
            ),
            endDate = _useState4[0],
            setEndDate = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            DateRangeContainer,
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
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DateInput, {
                    type: "date",
                    value: startDate,
                    onChange: function handleStartChange(e) {
                      setStartDate(e.target.value), onChange && onChange({ start: e.target.value, end: endDate });
                    },
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", { children: "to" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DateInput, {
                    type: "date",
                    value: endDate,
                    onChange: function handleEndChange(e) {
                      setEndDate(e.target.value), onChange && onChange({ start: startDate, end: e.target.value });
                    },
                  }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxDateRangePicker;
      TxDateRangePicker.__docgenInfo = { description: "", methods: [], displayName: "TxDateRangePicker" };
    },
    "./src/components/tx-divider/tx-divider.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["vertical", "thickness", "margin"],
        DividerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.hr(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  border: none;\n  border-top: ", " solid ", ";\n  margin: ", " 0;\n  ", "\n"]
            )),
          function (props) {
            return props.thickness || "1px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          function (props) {
            return props.margin || "16px";
          },
          function (props) {
            return (
              props.vertical &&
              "\n    border-top: none;\n    border-left: "
                .concat(props.thickness || "1px", " solid ")
                .concat(
                  _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
                  ";\n    display: inline-block;\n    margin: 0 "
                )
                .concat(props.margin || "8px", ";\n    vertical-align: middle;\n  ")
            );
          }
        ),
        TxDivider = function TxDivider(_ref) {
          var _ref$vertical = _ref.vertical,
            vertical = void 0 !== _ref$vertical && _ref$vertical,
            thickness = _ref.thickness,
            margin = _ref.margin,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            DividerStyled,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              { vertical: vertical ? 1 : 0, thickness, margin },
              props
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxDivider;
      TxDivider.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDivider",
        props: { vertical: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
      };
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
    "./src/components/tx-drawer/tx-drawer.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_drawer });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        _templateObject12,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        fadeIn = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
            ]))
        ),
        slideInLeft = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n",
            ]))
        ),
        slideInRight = (0, styled_components_browser_esm.i7)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n",
            ]))
        ),
        slideInTop = (0, styled_components_browser_esm.i7)(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n",
            ]))
        ),
        slideInBottom = (0, styled_components_browser_esm.i7)(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n",
            ]))
        ),
        StyledDrawerOverlay = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  animation: ",
              " 0.2s ease;\n",
            ])),
          fadeIn
        ),
        StyledDrawerContent = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  background: ",
              ";\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  z-index: 1001;\n\n  ",
              "\n",
            ])),
          colors.A.bgWhite,
          function (props) {
            switch (props.placement) {
              case "left":
                return "\n          top: 0;\n          left: 0;\n          bottom: 0;\n          width: "
                  .concat(props.width || "378px", ";\n          animation: ")
                  .concat(slideInLeft, " 0.3s ease;\n        ");
              case "right":
              default:
                return "\n          top: 0;\n          right: 0;\n          bottom: 0;\n          width: "
                  .concat(props.width || "378px", ";\n          animation: ")
                  .concat(slideInRight, " 0.3s ease;\n        ");
              case "top":
                return "\n          top: 0;\n          left: 0;\n          right: 0;\n          height: "
                  .concat(props.height || "378px", ";\n          animation: ")
                  .concat(slideInTop, " 0.3s ease;\n        ");
              case "bottom":
                return "\n          bottom: 0;\n          left: 0;\n          right: 0;\n          height: "
                  .concat(props.height || "378px", ";\n          animation: ")
                  .concat(slideInBottom, " 0.3s ease;\n        ");
            }
          }
        ),
        StyledDrawerHeader = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 20px 24px;\n  border-bottom: 1px solid ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
            ])),
          colors.A.borderLight
        ),
        StyledDrawerTitle = styled_components_browser_esm.Ay.h3(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",
              ";\n",
            ])),
          colors.A.textPrimary
        ),
        StyledDrawerClose = styled_components_browser_esm.Ay.button(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.bgFill,
          colors.A.textPrimary
        ),
        StyledDrawerBody = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n",
            ]))
        ),
        StyledDrawerFooter = styled_components_browser_esm.Ay.div(
          _templateObject12 ||
            (_templateObject12 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 16px 24px;\n  border-top: 1px solid ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n",
            ])),
          colors.A.borderLight
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "open",
          "onClose",
          "title",
          "children",
          "footer",
          "placement",
          "width",
          "height",
          "closable",
          "maskClosable",
        ],
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxDrawer = function TxDrawer(_ref) {
          var _ref$open = _ref.open,
            open = void 0 !== _ref$open && _ref$open,
            onClose = _ref.onClose,
            title = _ref.title,
            children = _ref.children,
            footer = _ref.footer,
            _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? "right" : _ref$placement,
            width = _ref.width,
            height = _ref.height,
            _ref$closable = _ref.closable,
            closable = void 0 === _ref$closable || _ref$closable,
            _ref$maskClosable = _ref.maskClosable,
            maskClosable = void 0 === _ref$maskClosable || _ref$maskClosable,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          (0, react.useEffect)(
            function () {
              return (
                (document.body.style.overflow = open ? "hidden" : "unset"),
                function () {
                  document.body.style.overflow = "unset";
                }
              );
            },
            [open]
          );
          return open
            ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)(StyledDrawerOverlay, {
                    onClick: function handleOverlayClick() {
                      maskClosable && onClose && onClose();
                    },
                  }),
                  (0, jsx_runtime.jsxs)(
                    StyledDrawerContent,
                    (0, objectSpread2.A)(
                      (0, objectSpread2.A)({ placement, width, height }, rest),
                      {},
                      {
                        children: [
                          (title || closable) &&
                            (0, jsx_runtime.jsxs)(StyledDrawerHeader, {
                              children: [
                                title && (0, jsx_runtime.jsx)(StyledDrawerTitle, { children: title }),
                                closable &&
                                  (0, jsx_runtime.jsx)(StyledDrawerClose, {
                                    onClick: function handleClose() {
                                      onClose && onClose();
                                    },
                                    type: "button",
                                    children: (0, jsx_runtime.jsx)(CloseIcon, {}),
                                  }),
                              ],
                            }),
                          (0, jsx_runtime.jsx)(StyledDrawerBody, { children }),
                          footer && (0, jsx_runtime.jsx)(StyledDrawerFooter, { children: footer }),
                        ],
                      }
                    )
                  ),
                ],
              })
            : null;
        };
      TxDrawer.defaultProps = { open: !1, placement: "right", closable: !0, maskClosable: !0 };
      const tx_drawer = TxDrawer;
      TxDrawer.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDrawer",
        props: {
          open: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          placement: {
            defaultValue: { value: '"right"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"left"', computed: !1 },
                { value: '"right"', computed: !1 },
                { value: '"top"', computed: !1 },
                { value: '"bottom"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          maskClosable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          onClose: { description: "", type: { name: "func" }, required: !1 },
          title: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !1 },
          footer: { description: "", type: { name: "node" }, required: !1 },
          width: { description: "", type: { name: "string" }, required: !1 },
          height: { description: "", type: { name: "string" }, required: !1 },
        },
      };
    },
    "./src/components/tx-dropdown/tx-dropdown.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_dropdown });
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
        StyledDropdownWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(["\n  display: inline-block;\n  position: relative;\n"]))
        ),
        StyledDropdownMenu = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: calc(100% + 8px);\n  left: ",
              ";\n  right: ",
              ";\n  bottom: ",
              ";\n  min-width: 160px;\n  background-color: ",
              ";\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  padding: 8px;\n  z-index: 1000;\n  opacity: ",
              ";\n  visibility: ",
              ";\n  transform: ",
              ";\n  transition: all 0.2s ease;\n",
            ])),
          function (props) {
            switch (props.placement) {
              case "topLeft":
              case "bottomLeft":
              default:
                return "0";
              case "topRight":
              case "bottomRight":
                return "auto";
            }
          },
          function (props) {
            switch (props.placement) {
              case "topRight":
              case "bottomRight":
                return "0";
              default:
                return "auto";
            }
          },
          function (props) {
            return "topLeft" === props.placement || "topRight" === props.placement ? "calc(100% + 8px)" : "auto";
          },
          colors.A.bgWhite,
          function (props) {
            return props.visible ? 1 : 0;
          },
          function (props) {
            return props.visible ? "visible" : "hidden";
          },
          function (props) {
            return props.visible ? "translateY(0)" : "translateY(-10px)";
          }
        ),
        StyledDropdownItem = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 8px 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
              ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.danger ? colors.A.danger : colors.A.textPrimary;
          },
          function (props) {
            return props.danger ? colors.A.dangerLight : colors.A.bgFill;
          },
          colors.A.textTertiary
        ),
        StyledDropdownDivider = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  height: 1px;\n  background-color: ",
              ";\n  margin: 4px 0;\n",
            ])),
          colors.A.borderLight
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "menu", "placement", "trigger", "onMenuClick"],
        TxDropdown = function TxDropdown(_ref) {
          var children = _ref.children,
            _ref$menu = _ref.menu,
            menu = void 0 === _ref$menu ? [] : _ref$menu,
            _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? "bottomLeft" : _ref$placement,
            _ref$trigger = _ref.trigger,
            trigger = void 0 === _ref$trigger ? "hover" : _ref$trigger,
            onMenuClick = _ref.onMenuClick,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1],
            wrapperRef = (0, react.useRef)(null);
          (0, react.useEffect)(
            function () {
              var handleClickOutside = function handleClickOutside(event) {
                wrapperRef.current && !wrapperRef.current.contains(event.target) && setVisible(!1);
              };
              return (
                visible && document.addEventListener("mousedown", handleClickOutside),
                function () {
                  document.removeEventListener("mousedown", handleClickOutside);
                }
              );
            },
            [visible]
          );
          var renderMenuItem = function renderMenuItem(item) {
            return "divider" === item.type
              ? (0, jsx_runtime.jsx)(StyledDropdownDivider, {}, item.key || Math.random())
              : (0, jsx_runtime.jsxs)(
                  StyledDropdownItem,
                  {
                    onClick: function onClick() {
                      return (function handleMenuItemClick(key, item) {
                        item.disabled || (onMenuClick && onMenuClick(key), setVisible(!1));
                      })(item.key, item);
                    },
                    disabled: item.disabled,
                    danger: item.danger,
                    children: [item.icon, item.label],
                  },
                  item.key
                );
          };
          return (0, jsx_runtime.jsxs)(
            StyledDropdownWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  ref: wrapperRef,
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
                  (0, jsx_runtime.jsx)(StyledDropdownMenu, {
                    visible,
                    placement,
                    children: menu.map(function (item) {
                      return renderMenuItem(item);
                    }),
                  }),
                ],
              }
            )
          );
        };
      TxDropdown.defaultProps = { menu: [], placement: "bottomLeft", trigger: "hover" };
      const tx_dropdown = TxDropdown;
      TxDropdown.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxDropdown",
        props: {
          menu: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  key: { name: "string", required: !1 },
                  label: { name: "node", required: !1 },
                  icon: { name: "node", required: !1 },
                  disabled: { name: "bool", required: !1 },
                  danger: { name: "bool", required: !1 },
                  type: { name: "enum", value: [{ value: '"divider"', computed: !1 }], required: !1 },
                },
              },
            },
            required: !1,
          },
          placement: {
            defaultValue: { value: '"bottomLeft"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"topLeft"', computed: !1 },
                { value: '"topRight"', computed: !1 },
                { value: '"bottomLeft"', computed: !1 },
                { value: '"bottomRight"', computed: !1 },
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
          onMenuClick: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-editor/tx-editor.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["value", "onChange", "placeholder"],
        EditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  overflow: hidden;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight
        ),
        EditorToolbar = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  background: ",
                ";\n  padding: 8px 16px;\n  border-bottom: 1px solid ",
                ";\n  display: flex;\n  gap: 8px;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight
        ),
        EditorButton = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  padding: 4px 8px;\n  background: transparent;\n  border: 1px solid ",
                ";\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n\n  &:hover {\n    background: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillMedium
        ),
        EditorContent = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.textarea(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  width: 100%;\n  border: none;\n  padding: 16px;\n  font-size: 14px;\n  resize: vertical;\n  min-height: 300px;\n\n  &:focus {\n    outline: none;\n  }\n",
              ]
            ))
        ),
        TxEditor = function TxEditor(_ref) {
          var _ref$value = _ref.value,
            value = void 0 === _ref$value ? "" : _ref$value,
            _onChange = _ref.onChange,
            _ref$placeholder = _ref.placeholder,
            placeholder = void 0 === _ref$placeholder ? "Start typing..." : _ref$placeholder,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            EditorContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(EditorToolbar, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorButton, { children: "B" }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorButton, { children: "I" }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorButton, { children: "U" }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EditorContent, {
                    value,
                    onChange: function onChange(e) {
                      return null == _onChange ? void 0 : _onChange(e.target.value);
                    },
                    placeholder,
                  }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxEditor;
      TxEditor.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxEditor",
        props: {
          value: { defaultValue: { value: '""', computed: !1 }, required: !1 },
          placeholder: { defaultValue: { value: '"Start typing..."', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-empty/tx-empty.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["image", "title", "description"],
        EmptyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  color: ",
                ";\n  text-align: center;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary
        ),
        EmptyImage = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.3;\n"]
            ))
        ),
        EmptyTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary
        ),
        EmptyDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 14px;\n  color: ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary
        ),
        TxEmpty = function TxEmpty(_ref) {
          var _ref$image = _ref.image,
            image = void 0 === _ref$image ? "📭" : _ref$image,
            _ref$title = _ref.title,
            title = void 0 === _ref$title ? "No Data" : _ref$title,
            description = _ref.description,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            EmptyContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyImage, { children: image }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyTitle, { children: title }),
                  description &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyDescription, {
                      children: description,
                    }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxEmpty;
      TxEmpty.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxEmpty",
        props: {
          image: { defaultValue: { value: '"📭"', computed: !1 }, required: !1 },
          title: { defaultValue: { value: '"No Data"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-flex/tx-flex.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["direction", "align", "justify", "gap", "width", "children"],
        FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  display: flex;\n  flex-direction: ",
                ";\n  align-items: ",
                ";\n  justify-content: ",
                ";\n  gap: ",
                ";\n  width: ",
                ";\n",
              ]
            )),
          function (props) {
            return props.direction || "row";
          },
          function (props) {
            return props.align || "stretch";
          },
          function (props) {
            return props.justify || "flex-start";
          },
          function (props) {
            return props.gap || "0";
          },
          function (props) {
            return props.width || "100%";
          }
        ),
        TxFlex = function TxFlex(_ref) {
          var direction = _ref.direction,
            align = _ref.align,
            justify = _ref.justify,
            gap = _ref.gap,
            width = _ref.width,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            FlexContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                { direction, align, justify, gap, width },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxFlex;
      TxFlex.__docgenInfo = { description: "", methods: [], displayName: "TxFlex" };
    },
    "./src/components/tx-grid/tx-grid.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { O: () => TxGridItem, b: () => TxGrid });
      var _templateObject,
        _templateObject2,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["columns", "gap", "children"],
        _excluded2 = ["children"],
        GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  display: grid;\n  grid-template-columns: ", ";\n  gap: ", ";\n  width: 100%;\n"]
            )),
          function (props) {
            return props.columns || "repeat(auto-fit, minmax(200px, 1fr))";
          },
          function (props) {
            return props.gap || "16px";
          }
        ),
        GridItem = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  background: ", ";\n  padding: 16px;\n  border-radius: 8px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight
        ),
        TxGrid = function TxGrid(_ref) {
          var columns = _ref.columns,
            gap = _ref.gap,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            GridContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { columns, gap },
                props
              ),
              {},
              { children }
            )
          );
        },
        TxGridItem = function TxGridItem(_ref2) {
          var children = _ref2.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref2,
              _excluded2
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            GridItem,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              { children }
            )
          );
        };
      (TxGrid.__docgenInfo = { description: "", methods: [], displayName: "TxGrid" }),
        (TxGridItem.__docgenInfo = { description: "", methods: [], displayName: "TxGridItem" });
    },
    "./src/components/tx-image/tx-image.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
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
        _excluded = ["src", "alt", "width", "height", "radius", "zoom", "objectFit", "placeholder"],
        ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  position: relative;\n  overflow: hidden;\n  border-radius: ", ";\n"]
            )),
          function (props) {
            return props.radius || "8px";
          }
        ),
        StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.img(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: ",
                ";\n  height: ",
                ";\n  object-fit: ",
                ";\n  display: block;\n  transition: all 0.3s ease;\n\n  &:hover {\n    ",
                "\n  }\n",
              ]
            )),
          function (props) {
            return props.width || "100%";
          },
          function (props) {
            return props.height || "auto";
          },
          function (props) {
            return props.objectFit || "cover";
          },
          function (props) {
            return props.zoom ? "\n      transform: scale(1.05);\n    " : "";
          }
        ),
        Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: ",
                ";\n  height: ",
                ";\n  background: ",
                ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
                ";\n  font-size: 14px;\n",
              ]
            )),
          function (props) {
            return props.width || "100%";
          },
          function (props) {
            return props.height || "200px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        TxImage = function TxImage(_ref) {
          var src = _ref.src,
            _ref$alt = _ref.alt,
            alt = void 0 === _ref$alt ? "Image" : _ref$alt,
            width = _ref.width,
            height = _ref.height,
            _ref$radius = _ref.radius,
            radius = void 0 === _ref$radius ? "8px" : _ref$radius,
            _ref$zoom = _ref.zoom,
            zoom = void 0 !== _ref$zoom && _ref$zoom,
            _ref$objectFit = _ref.objectFit,
            objectFit = void 0 === _ref$objectFit ? "cover" : _ref$objectFit,
            placeholder = _ref.placeholder,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            loading = _useState2[0],
            setLoading = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState3,
              2
            ),
            error = _useState4[0],
            setError = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ImageWrapper, {
            radius,
            children: [
              (loading || error) &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Placeholder, {
                  width,
                  height,
                  children: error ? placeholder || "Failed to load image" : "Loading...",
                }),
              src &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  StyledImage,
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                    {
                      src,
                      alt,
                      width,
                      height,
                      objectFit,
                      zoom: zoom ? 1 : 0,
                      onLoad: function handleLoad() {
                        setLoading(!1);
                      },
                      onError: function handleError() {
                        setLoading(!1), setError(!0);
                      },
                      style: { display: loading || error ? "none" : "block" },
                    },
                    props
                  )
                ),
            ],
          });
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxImage;
      TxImage.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxImage",
        props: {
          alt: { defaultValue: { value: '"Image"', computed: !1 }, required: !1 },
          radius: { defaultValue: { value: '"8px"', computed: !1 }, required: !1 },
          zoom: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          objectFit: { defaultValue: { value: '"cover"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-input-otp/tx-input-otp.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["length", "onChange", "disabled"],
        OtpContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n"]
            ))
        ),
        OtpInput = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.input(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  font-size: 20px;\n  border: 1px solid ",
                ";\n  border-radius: 6px;\n  transition: all 0.2s;\n\n  &:focus {\n    outline: none;\n    border-color: ",
                ";\n    box-shadow: 0 0 0 3px ",
                ";\n  }\n\n  &:disabled {\n    background: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primaryLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        TxInputOtp = function TxInputOtp(_ref) {
          var _ref$length = _ref.length,
            length = void 0 === _ref$length ? 6 : _ref$length,
            onChange = _ref.onChange,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array(length).fill("")),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            otp = _useState2[0],
            setOtp = _useState2[1],
            inputRefs = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),
            handleChange = function handleChange(index, value) {
              if (value.match(/^[0-9]$/) || "" === value) {
                var _inputRefs$current,
                  newOtp = (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                    otp
                  );
                if (((newOtp[index] = value), setOtp(newOtp), value && index < length - 1))
                  null === (_inputRefs$current = inputRefs.current[index + 1]) ||
                    void 0 === _inputRefs$current ||
                    _inputRefs$current.focus();
                onChange && onChange(newOtp.join(""));
              }
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            OtpContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.A)(
                {},
                props
              ),
              {},
              {
                children: Array.from({ length }).map(function (_, index) {
                  return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    OtpInput,
                    {
                      ref: function ref(el) {
                        return (inputRefs.current[index] = el);
                      },
                      type: "text",
                      maxLength: "1",
                      value: otp[index],
                      onChange: function onChange(e) {
                        return handleChange(index, e.target.value);
                      },
                      onKeyDown: function onKeyDown(e) {
                        return (function handleKeyDown(index, e) {
                          var _inputRefs$current2;
                          "Backspace" === e.key &&
                            !otp[index] &&
                            index > 0 &&
                            (null === (_inputRefs$current2 = inputRefs.current[index - 1]) ||
                              void 0 === _inputRefs$current2 ||
                              _inputRefs$current2.focus());
                        })(index, e);
                      },
                      disabled,
                    },
                    index
                  );
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxInputOtp;
      TxInputOtp.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxInputOtp",
        props: {
          length: { defaultValue: { value: "6", computed: !1 }, required: !1 },
          disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-kbd/tx-kbd.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children"],
        KbdStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.kbd(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  display: inline-block;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: ",
                ";\n  background: ",
                ";\n  border: 1px solid ",
                ";\n  border-radius: 4px;\n  box-shadow: 0 1px 0 ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderMedium
        ),
        TxKbd = function TxKbd(_ref) {
          var children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            KbdStyled,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxKbd;
      TxKbd.__docgenInfo = { description: "", methods: [], displayName: "TxKbd" };
    },
    "./src/components/tx-layout/styled.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Content: () => Content,
          Footer: () => Footer,
          Header: () => Header,
          LayoutContainer: () => LayoutContainer,
          Sider: () => Sider,
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  display: flex;\n  flex-direction: ", ";\n  height: ", ";\n  min-height: ", ";\n"]
            )),
          function (props) {
            return props.flex ? "row" : "column";
          },
          function (props) {
            return props.height || "100vh";
          },
          function (props) {
            return props.minHeight || "100vh";
          }
        ),
        Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.header(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  height: 64px;\n  background: ",
                ";\n  padding: 0 48px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight
        ),
        Sider = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.aside(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  background: ",
                ";\n  width: ",
                ";\n  transition: all 0.3s;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          function (props) {
            return props.width || "200px";
          }
        ),
        Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.main(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  background: white;\n"]
            ))
        ),
        Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.footer(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  padding: 24px 48px;\n  text-align: center;\n  background: ", ";\n  border-top: 1px solid ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderDefault
        );
    },
    "./src/components/tx-layout/tx-layout.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/tx-layout/styled.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        TxLayout = function TxLayout(_ref) {
          var children = _ref.children,
            height = _ref.height,
            minHeight = _ref.minHeight,
            flex = _ref.flex,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _styled__WEBPACK_IMPORTED_MODULE_0__.LayoutContainer,
            { height, minHeight, flex, className, children }
          );
        };
      ((TxLayout.Header = function (_ref2) {
        var children = _ref2.children,
          className = _ref2.className,
          Header = __webpack_require__("./src/components/tx-layout/styled.js").Header;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Header, { className, children });
      }).displayName = "TxLayout.Header"),
        ((TxLayout.Sider = function (_ref3) {
          var children = _ref3.children,
            width = _ref3.width,
            className = _ref3.className,
            Sider = __webpack_require__("./src/components/tx-layout/styled.js").Sider;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sider, { width, className, children });
        }).displayName = "TxLayout.Sider"),
        ((TxLayout.Content = function (_ref4) {
          var children = _ref4.children,
            className = _ref4.className,
            Content = __webpack_require__("./src/components/tx-layout/styled.js").Content;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Content, { className, children });
        }).displayName = "TxLayout.Content"),
        ((TxLayout.Footer = function (_ref5) {
          var children = _ref5.children,
            className = _ref5.className,
            Footer = __webpack_require__("./src/components/tx-layout/styled.js").Footer;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Footer, { className, children });
        }).displayName = "TxLayout.Footer");
      const __WEBPACK_DEFAULT_EXPORT__ = TxLayout;
      TxLayout.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "Header",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, className }", optional: !1, type: null }],
            returns: null,
          },
          {
            name: "Sider",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, width, className }", optional: !1, type: null }],
            returns: null,
          },
          {
            name: "Content",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, className }", optional: !1, type: null }],
            returns: null,
          },
          {
            name: "Footer",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, className }", optional: !1, type: null }],
            returns: null,
          },
        ],
        displayName: "TxLayout",
        props: {
          children: { description: "", type: { name: "node" }, required: !0 },
          height: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          minHeight: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "number" }] },
            required: !1,
          },
          flex: { description: "", type: { name: "bool" }, required: !1 },
          className: { description: "", type: { name: "string" }, required: !1 },
        },
      };
    },
    "./src/components/tx-lightbox/tx-lightbox.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["open", "src", "onClose"],
        LightboxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: ",
                ";\n  visibility: ",
                ";\n  transition: all 0.3s ease;\n",
              ]
            )),
          function (props) {
            return props.open ? 1 : 0;
          },
          function (props) {
            return props.open ? "visible" : "hidden";
          }
        ),
        LightboxImage = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.img(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              ["\n  max-width: 90%;\n  max-height: 90%;\n  border-radius: 8px;\n  object-fit: contain;\n"]
            ))
        ),
        CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n",
              ]
            ))
        ),
        TxLightbox = function TxLightbox(_ref) {
          var _ref$open = _ref.open,
            open = void 0 !== _ref$open && _ref$open,
            src = _ref.src,
            onClose = _ref.onClose,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          return open
            ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                LightboxContainer,
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    { open, onClick: onClose },
                    props
                  ),
                  {},
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseButton, {
                        onClick: onClose,
                        children: "×",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LightboxImage, {
                        src,
                        onClick: function onClick(e) {
                          return e.stopPropagation();
                        },
                      }),
                    ],
                  }
                )
              )
            : null;
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxLightbox;
      TxLightbox.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxLightbox",
        props: { open: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
      };
    },
    "./src/components/tx-link/tx-link.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["href", "children", "underline", "visited"],
        LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.a(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  color: ",
                ";\n  text-decoration: ",
                ";\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",
                ";\n  }\n\n  &:visited {\n    color: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.primary,
          function (props) {
            return props.underline ? "underline" : "none";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.primaryHover,
          function (props) {
            return props.visited ? _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.primaryVisited : "inherit";
          }
        ),
        TxLink = function TxLink(_ref) {
          var href = _ref.href,
            children = _ref.children,
            _ref$underline = _ref.underline,
            underline = void 0 !== _ref$underline && _ref$underline,
            _ref$visited = _ref.visited,
            visited = void 0 !== _ref$visited && _ref$visited,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            LinkStyled,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { href, underline: underline ? 1 : 0, visited: visited ? 1 : 0 },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxLink;
      TxLink.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxLink",
        props: {
          underline: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          visited: { defaultValue: { value: "false", computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-loading/tx-loading.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_loading });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
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
        spin = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        StyledLoadingWrapper = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: ",
              ";\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n  ",
              "\n",
            ])),
          function (props) {
            return props.fullscreen ? "flex" : "inline-flex";
          },
          function (props) {
            return (
              props.fullscreen &&
              "\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.9);\n    z-index: 9999;\n  "
            );
          }
        ),
        StyledSpinner = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  border: 3px solid ",
              ";\n  border-top-color: ",
              ";\n  border-radius: 50%;\n  animation: ",
              " 0.8s linear infinite;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "48px";
              default:
                return "32px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "48px";
              default:
                return "32px";
            }
          },
          function (props) {
            return props.color || colors.A.borderLight;
          },
          function (props) {
            return props.spinnerColor || colors.A.primary;
          },
          spin
        ),
        StyledLoadingText = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  color: ",
              ";\n  font-size: 14px;\n  font-weight: 400;\n",
            ])),
          function (props) {
            return props.color || colors.A.textSecondary;
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["size", "text", "fullscreen", "spinnerColor", "textColor"],
        TxLoading = function TxLoading(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            text = _ref.text,
            _ref$fullscreen = _ref.fullscreen,
            fullscreen = void 0 !== _ref$fullscreen && _ref$fullscreen,
            spinnerColor = _ref.spinnerColor,
            textColor = _ref.textColor,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            StyledLoadingWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ fullscreen }, rest),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(StyledSpinner, { size, spinnerColor }),
                  text && (0, jsx_runtime.jsx)(StyledLoadingText, { color: textColor, children: text }),
                ],
              }
            )
          );
        };
      TxLoading.defaultProps = { size: "medium", fullscreen: !1 };
      const tx_loading = TxLoading;
      TxLoading.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxLoading",
        props: {
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
          fullscreen: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          text: { description: "", type: { name: "string" }, required: !1 },
          spinnerColor: { description: "", type: { name: "string" }, required: !1 },
          textColor: { description: "", type: { name: "string" }, required: !1 },
        },
      };
    },
    "./src/components/tx-map/tx-map.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        _excluded = ["src", "center", "zoom", "height", "title"],
        MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        TxMap = function TxMap(_ref) {
          var src = _ref.src,
            center = _ref.center,
            _ref$zoom = _ref.zoom,
            zoom = void 0 === _ref$zoom ? 10 : _ref$zoom,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "400px" : _ref$height,
            title = _ref.title,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            id = (0, react__WEBPACK_IMPORTED_MODULE_0__.useId)(),
            iframeTitle = title || "tx-map-".concat(id);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            MapContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                { style: { height } },
                props
              ),
              {},
              {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
                  title: iframeTitle,
                  src: src || "https://www.google.com/maps?q=".concat(center, "&z=").concat(zoom, "&output=embed"),
                  width: "100%",
                  height: "100%",
                  style: { border: 0 },
                  allowFullScreen: !0,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxMap;
      TxMap.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxMap",
        props: {
          zoom: { defaultValue: { value: "10", computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"400px"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-menu/tx-menu.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_menu });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        toConsumableArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
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
        StyledMenuWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 8px;\n  overflow: hidden;\n",
            ])),
          function (props) {
            return "horizontal" === props.mode ? "100%" : "256px";
          },
          colors.A.bgWhite,
          colors.A.borderLight
        ),
        StyledMenuList = styled_components_browser_esm.Ay.ul(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  display: flex;\n  flex-direction: ",
              ";\n  gap: 4px;\n",
            ])),
          function (props) {
            return "horizontal" === props.mode ? "row" : "column";
          }
        ),
        StyledMenuItem = styled_components_browser_esm.Ay.li(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 12px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
              ";\n  background-color: ",
              ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return props.active ? colors.A.primary : colors.A.textPrimary;
          },
          function (props) {
            return props.active ? colors.A.primaryLight : "transparent";
          },
          function (props) {
            return props.active ? colors.A.primaryLight : colors.A.bgFill;
          },
          colors.A.primary,
          colors.A.textTertiary
        ),
        StyledSubMenu = styled_components_browser_esm.Ay.div(
          _templateObject4 || (_templateObject4 = (0, taggedTemplateLiteral.A)([""]))
        ),
        StyledSubMenuTitle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 12px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
              ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n    transition: transform 0.2s ease;\n    transform: ",
              ";\n  }\n",
            ])),
          colors.A.textPrimary,
          colors.A.bgFill,
          colors.A.primary,
          function (props) {
            return props.open ? "rotate(180deg)" : "rotate(0deg)";
          }
        ),
        StyledSubMenuList = styled_components_browser_esm.Ay.ul(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 24px;\n  display: ",
              ";\n",
            ])),
          function (props) {
            return props.open ? "block" : "none";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "mode", "selectedKey", "onSelect"],
        ChevronDown = function ChevronDown() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "6 9 12 15 18 9" }),
          });
        },
        TxMenu = function TxMenu(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$mode = _ref.mode,
            mode = void 0 === _ref$mode ? "vertical" : _ref$mode,
            selectedKey = _ref.selectedKey,
            onSelect = _ref.onSelect,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)([]),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            openKeys = _useState2[0],
            setOpenKeys = _useState2[1],
            handleItemClick = function handleItemClick(key) {
              onSelect && onSelect(key);
            },
            renderMenuItem = function renderMenuItem(item) {
              return item.children
                ? (0, jsx_runtime.jsxs)(
                    StyledSubMenu,
                    {
                      children: [
                        (0, jsx_runtime.jsxs)(StyledSubMenuTitle, {
                          onClick: function onClick() {
                            return (function handleSubMenuClick(key) {
                              openKeys.includes(key)
                                ? setOpenKeys(
                                    openKeys.filter(function (k) {
                                      return k !== key;
                                    })
                                  )
                                : setOpenKeys([].concat((0, toConsumableArray.A)(openKeys), [key]));
                            })(item.key);
                          },
                          open: openKeys.includes(item.key),
                          children: [
                            (0, jsx_runtime.jsxs)("span", { children: [item.icon, item.label] }),
                            (0, jsx_runtime.jsx)(ChevronDown, {}),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(StyledSubMenuList, {
                          open: openKeys.includes(item.key),
                          children: item.children.map(function (child) {
                            return (0, jsx_runtime.jsxs)(
                              StyledMenuItem,
                              {
                                active: selectedKey === child.key,
                                onClick: function onClick() {
                                  return handleItemClick(child.key);
                                },
                                disabled: child.disabled,
                                children: [child.icon, child.label],
                              },
                              child.key
                            );
                          }),
                        }),
                      ],
                    },
                    item.key
                  )
                : (0, jsx_runtime.jsxs)(
                    StyledMenuItem,
                    {
                      active: selectedKey === item.key,
                      onClick: function onClick() {
                        return handleItemClick(item.key);
                      },
                      disabled: item.disabled,
                      children: [item.icon, item.label],
                    },
                    item.key
                  );
            };
          return (0, jsx_runtime.jsx)(
            StyledMenuWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ mode }, rest),
              {},
              {
                children: (0, jsx_runtime.jsx)(StyledMenuList, {
                  mode,
                  children: items.map(function (item) {
                    return renderMenuItem(item);
                  }),
                }),
              }
            )
          );
        };
      TxMenu.defaultProps = { items: [], mode: "vertical" };
      const tx_menu = TxMenu;
      TxMenu.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxMenu",
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
                  icon: { name: "node", required: !1 },
                  disabled: { name: "bool", required: !1 },
                  children: { name: "array", required: !1 },
                },
              },
            },
            required: !1,
          },
          mode: {
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
          selectedKey: { description: "", type: { name: "string" }, required: !1 },
          onSelect: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-message/tx-message.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { k: () => TxMessage });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react = __webpack_require__("./node_modules/react/index.js"),
        client = __webpack_require__("./node_modules/react-dom/client.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        slideDown = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n",
            ]))
        ),
        slideUp = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n",
            ]))
        ),
        MessageContainer = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  pointer-events: none;\n",
            ]))
        ),
        MessageWrapper = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 300px;\n  max-width: 500px;\n  pointer-events: auto;\n  animation: ",
              " 0.3s ease;\n\n  ",
              "\n",
            ])),
          function (props) {
            return props.isClosing ? slideUp : slideDown;
          },
          function (props) {
            switch (props.type) {
              case "success":
                return "border-left: 4px solid ".concat(colors.A.success[500], ";");
              case "error":
                return "border-left: 4px solid ".concat(colors.A.danger[500], ";");
              case "warning":
                return "border-left: 4px solid ".concat(colors.A.warning[500], ";");
              case "info":
                return "border-left: 4px solid ".concat(colors.A.info[500], ";");
              default:
                return "border-left: 4px solid ".concat(colors.A.primary[500], ";");
            }
          }
        ),
        MessageIcon = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n\n  ",
              "\n",
            ])),
          function (props) {
            switch (props.type) {
              case "success":
                return "color: ".concat(colors.A.success[500], ";");
              case "error":
                return "color: ".concat(colors.A.danger[500], ";");
              case "warning":
                return "color: ".concat(colors.A.warning[500], ";");
              case "info":
                return "color: ".concat(colors.A.info[500], ";");
              default:
                return "color: ".concat(colors.A.primary[500], ";");
            }
          }
        ),
        MessageContent = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n",
            ]))
        ),
        MessageTitle = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 600;\n  color: ",
              ";\n  line-height: 1.4;\n",
            ])),
          colors.A.textPrimary
        ),
        MessageDescription = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 13px;\n  color: ",
              ";\n  line-height: 1.4;\n  font-weight: 400;\n",
            ])),
          colors.A.textSecondary
        ),
        MessageClose = styled_components_browser_esm.Ay.button(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
              ";\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: ",
              ";\n    transform: scale(1.1);\n  }\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.textPrimary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        MessageComponent = function MessageComponent(_ref) {
          var type = _ref.type,
            content = _ref.content,
            description = _ref.description,
            duration = _ref.duration,
            onClose = _ref.onClose,
            closable = _ref.closable,
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            isClosing = _useState2[0],
            setIsClosing = _useState2[1];
          (0, react.useEffect)(
            function () {
              if (duration > 0) {
                var timer = setTimeout(function () {
                  handleClose();
                }, duration);
                return function () {
                  return clearTimeout(timer);
                };
              }
            },
            [duration]
          );
          var handleClose = function handleClose() {
            setIsClosing(!0),
              setTimeout(function () {
                onClose && onClose();
              }, 300);
          };
          return (0, jsx_runtime.jsxs)(MessageWrapper, {
            type,
            isClosing,
            children: [
              (0, jsx_runtime.jsx)(MessageIcon, {
                type,
                children: (function getIcon() {
                  switch (type) {
                    case "success":
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                          (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                        ],
                      });
                    case "error":
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                          (0, jsx_runtime.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
                          (0, jsx_runtime.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
                        ],
                      });
                    case "warning":
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("path", {
                            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                          }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
                        ],
                      });
                    default:
                      return (0, jsx_runtime.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                          (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                        ],
                      });
                  }
                })(),
              }),
              (0, jsx_runtime.jsxs)(MessageContent, {
                children: [
                  content && (0, jsx_runtime.jsx)(MessageTitle, { children: content }),
                  description && (0, jsx_runtime.jsx)(MessageDescription, { children: description }),
                ],
              }),
              closable &&
                (0, jsx_runtime.jsx)(MessageClose, {
                  onClick: handleClose,
                  children: (0, jsx_runtime.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                      (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                    ],
                  }),
                }),
            ],
          });
        },
        messageContainer = null,
        messagesRoot = null,
        messages = [],
        renderMessages = function renderMessages() {
          messagesRoot &&
            messagesRoot.render(
              (0, jsx_runtime.jsx)(MessageContainer, {
                children: messages.map(function (msg) {
                  return (0, jsx_runtime.jsx)(MessageComponent, (0, objectSpread2.A)({}, msg), msg.key);
                }),
              })
            );
        },
        _open = function open(config) {
          !(function getContainer() {
            messageContainer ||
              ((messageContainer = document.createElement("div")),
              document.body.appendChild(messageContainer),
              (messagesRoot = (0, client.H)(messageContainer)));
          })();
          var key = Date.now(),
            message = {
              key,
              type: config.type || "info",
              content: config.content,
              description: config.description,
              duration: void 0 !== config.duration ? config.duration : 3e3,
              closable: void 0 !== config.closable && config.closable,
              onClose: function onClose() {
                var index = messages.findIndex(function (m) {
                  return m.key === key;
                });
                index > -1 && (messages.splice(index, 1), renderMessages(), config.onClose && config.onClose());
              },
            };
          messages.push(message), renderMessages();
        },
        TxMessage = {
          success: function success(content) {
            _open({
              type: "success",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          error: function error(content) {
            _open({
              type: "error",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          warning: function warning(content) {
            _open({
              type: "warning",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          info: function info(content) {
            _open({
              type: "info",
              content,
              duration: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
            });
          },
          open: function open(config) {
            _open(config);
          },
          destroy: function destroy() {
            (messages.length = 0), renderMessages();
          },
        };
    },
    "./src/components/tx-modal/tx-modal.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_modal });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        fadeIn = (0, styled_components_browser_esm.i7)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
            ]))
        ),
        slideDown = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n",
            ]))
        ),
        StyledModalOverlay = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: ",
              " 0.2s ease;\n",
            ])),
          fadeIn
        ),
        StyledModalContent = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  background: ",
              ";\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  max-width: ",
              ";\n  width: 90%;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: ",
              " 0.3s ease;\n",
            ])),
          colors.A.bgWhite,
          function (props) {
            return props.width ? props.width : "520px";
          },
          slideDown
        ),
        StyledModalHeader = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 20px 24px;\n  border-bottom: 1px solid ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
            ])),
          colors.A.borderLight
        ),
        StyledModalTitle = styled_components_browser_esm.Ay.h3(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",
              ";\n",
            ])),
          colors.A.textPrimary
        ),
        StyledModalClose = styled_components_browser_esm.Ay.button(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
            ])),
          colors.A.textSecondary,
          colors.A.bgFill,
          colors.A.textPrimary
        ),
        StyledModalBody = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)(["\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n"]))
        ),
        StyledModalFooter = styled_components_browser_esm.Ay.div(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 16px 24px;\n  border-top: 1px solid ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n",
            ])),
          colors.A.borderLight
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["open", "onClose", "title", "children", "footer", "width", "closable", "maskClosable"],
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxModal = function TxModal(_ref) {
          var _ref$open = _ref.open,
            open = void 0 !== _ref$open && _ref$open,
            onClose = _ref.onClose,
            title = _ref.title,
            children = _ref.children,
            footer = _ref.footer,
            width = _ref.width,
            _ref$closable = _ref.closable,
            closable = void 0 === _ref$closable || _ref$closable,
            _ref$maskClosable = _ref.maskClosable,
            maskClosable = void 0 === _ref$maskClosable || _ref$maskClosable,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          (0, react.useEffect)(
            function () {
              return (
                (document.body.style.overflow = open ? "hidden" : "unset"),
                function () {
                  document.body.style.overflow = "unset";
                }
              );
            },
            [open]
          );
          return open
            ? (0, jsx_runtime.jsx)(
                StyledModalOverlay,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)(
                    {
                      onClick: function handleOverlayClick(e) {
                        maskClosable && e.target === e.currentTarget && onClose && onClose();
                      },
                    },
                    rest
                  ),
                  {},
                  {
                    children: (0, jsx_runtime.jsxs)(StyledModalContent, {
                      width,
                      children: [
                        (title || closable) &&
                          (0, jsx_runtime.jsxs)(StyledModalHeader, {
                            children: [
                              title && (0, jsx_runtime.jsx)(StyledModalTitle, { children: title }),
                              closable &&
                                (0, jsx_runtime.jsx)(StyledModalClose, {
                                  onClick: function handleClose() {
                                    onClose && onClose();
                                  },
                                  type: "button",
                                  children: (0, jsx_runtime.jsx)(CloseIcon, {}),
                                }),
                            ],
                          }),
                        (0, jsx_runtime.jsx)(StyledModalBody, { children }),
                        footer && (0, jsx_runtime.jsx)(StyledModalFooter, { children: footer }),
                      ],
                    }),
                  }
                )
              )
            : null;
        };
      TxModal.defaultProps = { open: !1, closable: !0, maskClosable: !0 };
      const tx_modal = TxModal;
      TxModal.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxModal",
        props: {
          open: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          closable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          maskClosable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          onClose: { description: "", type: { name: "func" }, required: !1 },
          title: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !1 },
          footer: { description: "", type: { name: "node" }, required: !1 },
          width: { description: "", type: { name: "string" }, required: !1 },
        },
      };
    },
    "./src/components/tx-notification/styled.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Nc: () => StyledNotificationTitle,
        Pv: () => StyledNotification,
        XZ: () => StyledNotificationDescription,
        fQ: () => StyledNotificationClose,
        qG: () => StyledNotificationContainer,
        s5: () => StyledNotificationIcon,
        sY: () => StyledNotificationContent,
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        slideInRight = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.i7)(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n",
              ]
            ))
        ),
        StyledNotificationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  pointer-events: none;\n",
              ]
            ))
        ),
        StyledNotification = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  background: ",
                ";\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  padding: 16px 24px;\n  min-width: 384px;\n  display: flex;\n  gap: 12px;\n  animation: ",
                " 0.3s ease;\n  pointer-events: all;\n  border-left: 4px solid\n    ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgWhite,
          slideInRight,
          function (props) {
            switch (props.type) {
              case "success":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.success;
              case "error":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.danger;
              case "warning":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.warning;
              case "info":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.info;
              default:
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary;
            }
          }
        ),
        StyledNotificationIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  color: ",
                ";\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
              ]
            )),
          function (props) {
            switch (props.type) {
              case "success":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.success;
              case "error":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.danger;
              case "warning":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.warning;
              case "info":
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.info;
              default:
                return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary;
            }
          }
        ),
        StyledNotificationContent = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  flex: 1;\n"]
            ))
        ),
        StyledNotificationTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  margin-bottom: 4px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary
        ),
        StyledNotificationDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  font-size: 14px;\n  color: ", ";\n  line-height: 1.5;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        StyledNotificationClose = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(
          _templateObject8 ||
            (_templateObject8 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: ",
                ";\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
                ";\n    color: ",
                ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textTertiary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFill,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary
        );
    },
    "./src/components/tx-notification/tx-notification.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/tx-notification/styled.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["type", "title", "description", "closable", "onClose", "duration"],
        CloseIcon = function CloseIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        CheckCircleIcon = function CheckCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
            ],
          });
        },
        InfoCircleIcon = function InfoCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "16",
                x2: "12",
                y2: "12",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12.01",
                y2: "8",
              }),
            ],
          });
        },
        AlertCircleIcon = function AlertCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12",
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "16",
                x2: "12.01",
                y2: "16",
              }),
            ],
          });
        },
        XCircleIcon = function XCircleIcon() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
            ],
          });
        },
        getIcon = function getIcon(type) {
          switch (type) {
            case "success":
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckCircleIcon, {});
            case "error":
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(XCircleIcon, {});
            case "warning":
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AlertCircleIcon, {});
            default:
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InfoCircleIcon, {});
          }
        },
        TxNotification = function TxNotification(_ref) {
          var _ref$type = _ref.type,
            type = void 0 === _ref$type ? "info" : _ref$type,
            title = _ref.title,
            description = _ref.description,
            _ref$closable = _ref.closable,
            closable = void 0 === _ref$closable || _ref$closable,
            onClose = _ref.onClose,
            _ref$duration = _ref.duration,
            duration = void 0 === _ref$duration ? 4500 : _ref$duration,
            rest = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
            function () {
              if (duration && duration > 0) {
                var timer = setTimeout(function () {
                  onClose && onClose();
                }, duration);
                return function () {
                  return clearTimeout(timer);
                };
              }
            },
            [duration, onClose]
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            _styled__WEBPACK_IMPORTED_MODULE_1__.Pv,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                { type },
                rest
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.s5, {
                    type,
                    children: getIcon(type),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_1__.sY, {
                    children: [
                      title &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _styled__WEBPACK_IMPORTED_MODULE_1__.Nc,
                          { children: title }
                        ),
                      description &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _styled__WEBPACK_IMPORTED_MODULE_1__.XZ,
                          { children: description }
                        ),
                    ],
                  }),
                  closable &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_1__.fQ, {
                      onClick: function handleClose() {
                        onClose && onClose();
                      },
                      type: "button",
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CloseIcon, {}),
                    }),
                ],
              }
            )
          );
        };
      TxNotification.defaultProps = { type: "info", closable: !0, duration: 4500 };
      const __WEBPACK_DEFAULT_EXPORT__ = TxNotification;
      TxNotification.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxNotification",
        props: {
          type: {
            defaultValue: { value: '"info"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"info"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          duration: {
            defaultValue: { value: "4500", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          title: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          description: {
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          onClose: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-pagination/tx-pagination.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_pagination });
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
        StyledPaginationWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n",
            ]))
        ),
        StyledPaginationItem = styled_components_browser_esm.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  min-width: ",
              ";\n  height: ",
              ";\n  padding: 0 ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 6px;\n  background-color: ",
              ";\n  color: ",
              ";\n  font-size: ",
              ";\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover:not(:disabled) {\n    border-color: ",
              ";\n    color: ",
              ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    background-color: ",
              ";\n    border-color: ",
              ";\n    color: ",
              ";\n  }\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          function (props) {
            return "small" === props.size ? "6px" : "large" === props.size ? "12px" : "8px";
          },
          function (props) {
            return props.active ? colors.A.primary : colors.A.borderLight;
          },
          function (props) {
            return props.active ? colors.A.primary : colors.A.bgWhite;
          },
          function (props) {
            return props.active ? colors.A.textWhite : colors.A.textPrimary;
          },
          function (props) {
            return "small" === props.size ? "12px" : "14px";
          },
          colors.A.primary,
          function (props) {
            return props.active ? colors.A.textWhite : colors.A.primary;
          },
          colors.A.bgFill,
          colors.A.borderLight,
          colors.A.textTertiary
        ),
        StyledPaginationEllipsis = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  min-width: ",
              ";\n  height: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  font-size: ",
              ";\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "24px";
              case "large":
                return "40px";
              default:
                return "32px";
            }
          },
          colors.A.textTertiary,
          function (props) {
            return "small" === props.size ? "12px" : "14px";
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["current", "total", "pageSize", "onChange", "showSizeChanger", "size"],
        ChevronLeft = function ChevronLeft() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "15 18 9 12 15 6" }),
          });
        },
        ChevronRight = function ChevronRight() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "9 18 15 12 9 6" }),
          });
        },
        TxPagination = function TxPagination(_ref) {
          var _ref$current = _ref.current,
            current = void 0 === _ref$current ? 1 : _ref$current,
            _ref$total = _ref.total,
            total = void 0 === _ref$total ? 0 : _ref$total,
            _ref$pageSize = _ref.pageSize,
            pageSize = void 0 === _ref$pageSize ? 10 : _ref$pageSize,
            onChange = _ref.onChange,
            _ref$size = (_ref.showSizeChanger, _ref.size),
            size = void 0 === _ref$size ? "medium" : _ref$size,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            totalPages = Math.ceil(total / pageSize),
            handlePageChange = function handlePageChange(page) {
              page < 1 || page > totalPages || page === current || (onChange && onChange(page, pageSize));
            };
          return (0, jsx_runtime.jsxs)(
            StyledPaginationWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({}, rest),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(StyledPaginationItem, {
                    onClick: function onClick() {
                      return handlePageChange(current - 1);
                    },
                    disabled: 1 === current,
                    size,
                    children: (0, jsx_runtime.jsx)(ChevronLeft, {}),
                  }),
                  (function renderPageNumbers() {
                    var pages = [];
                    if (totalPages <= 7)
                      for (
                        var _loop = function _loop(i) {
                            pages.push(
                              (0, jsx_runtime.jsx)(
                                StyledPaginationItem,
                                {
                                  active: i === current,
                                  onClick: function onClick() {
                                    return handlePageChange(i);
                                  },
                                  size,
                                  children: i,
                                },
                                i
                              )
                            );
                          },
                          i = 1;
                        i <= totalPages;
                        i++
                      )
                        _loop(i);
                    else {
                      pages.push(
                        (0, jsx_runtime.jsx)(
                          StyledPaginationItem,
                          {
                            active: 1 === current,
                            onClick: function onClick() {
                              return handlePageChange(1);
                            },
                            size,
                            children: "1",
                          },
                          1
                        )
                      ),
                        current > 3 &&
                          pages.push(
                            (0, jsx_runtime.jsx)(StyledPaginationEllipsis, { size, children: "•••" }, "ellipsis-start")
                          );
                      for (
                        var start = Math.max(2, current - 1),
                          end = Math.min(totalPages - 1, current + 1),
                          _loop2 = function _loop2(_i) {
                            pages.push(
                              (0, jsx_runtime.jsx)(
                                StyledPaginationItem,
                                {
                                  active: _i === current,
                                  onClick: function onClick() {
                                    return handlePageChange(_i);
                                  },
                                  size,
                                  children: _i,
                                },
                                _i
                              )
                            );
                          },
                          _i = start;
                        _i <= end;
                        _i++
                      )
                        _loop2(_i);
                      current < totalPages - 2 &&
                        pages.push(
                          (0, jsx_runtime.jsx)(StyledPaginationEllipsis, { size, children: "•••" }, "ellipsis-end")
                        ),
                        pages.push(
                          (0, jsx_runtime.jsx)(
                            StyledPaginationItem,
                            {
                              active: totalPages === current,
                              onClick: function onClick() {
                                return handlePageChange(totalPages);
                              },
                              size,
                              children: totalPages,
                            },
                            totalPages
                          )
                        );
                    }
                    return pages;
                  })(),
                  (0, jsx_runtime.jsx)(StyledPaginationItem, {
                    onClick: function onClick() {
                      return handlePageChange(current + 1);
                    },
                    disabled: current === totalPages,
                    size,
                    children: (0, jsx_runtime.jsx)(ChevronRight, {}),
                  }),
                ],
              }
            )
          );
        };
      TxPagination.defaultProps = { current: 1, total: 0, pageSize: 10, showSizeChanger: !1, size: "medium" };
      const tx_pagination = TxPagination;
      TxPagination.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxPagination",
        props: {
          current: {
            defaultValue: { value: "1", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          total: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          pageSize: {
            defaultValue: { value: "10", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          showSizeChanger: {
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
          onChange: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-popconfirm/tx-popconfirm.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_popconfirm });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        tx_button = __webpack_require__("./src/components/tx-button/tx-button.jsx"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledPopconfirmWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(["\n  display: inline-block;\n  position: relative;\n"]))
        ),
        StyledPopconfirmContent = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  z-index: 9999;\n  background: ",
              ";\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  padding: 12px 16px;\n  min-width: 200px;\n  max-width: 300px;\n  opacity: ",
              ";\n  visibility: ",
              ";\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n\n  ",
              '\n\n  &::after {\n    content: "";\n    position: absolute;\n    border: 6px solid transparent;\n\n    ',
              "\n  }\n",
            ])),
          colors.A.bgWhite,
          function (props) {
            return props.visible ? 1 : 0;
          },
          function (props) {
            return props.visible ? "visible" : "hidden";
          },
          function (props) {
            switch (props.placement) {
              case "top":
                return "\n          bottom: calc(100% + ".concat(
                  8,
                  "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
                );
              case "bottom":
              default:
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
            switch (props.placement) {
              case "top":
                return "\n            top: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-top-color: ".concat(
                  colors.A.bgWhite,
                  ";\n          "
                );
              case "bottom":
              default:
                return "\n            bottom: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-bottom-color: ".concat(
                  colors.A.bgWhite,
                  ";\n          "
                );
              case "left":
                return "\n            left: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-left-color: ".concat(
                  colors.A.bgWhite,
                  ";\n          "
                );
              case "right":
                return "\n            right: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-right-color: ".concat(
                  colors.A.bgWhite,
                  ";\n          "
                );
            }
          }
        ),
        StyledPopconfirmTitle = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: ",
              ";\n  line-height: 1.5;\n",
            ])),
          colors.A.textPrimary
        ),
        StyledPopconfirmIcon = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  color: ",
              ";\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
            ])),
          colors.A.warning
        ),
        StyledPopconfirmButtons = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "title", "placement", "onConfirm", "onCancel", "okText", "cancelText", "okType"],
        AlertCircleIcon = function AlertCircleIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
              (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
            ],
          });
        },
        TxPopconfirm = function TxPopconfirm(_ref) {
          var children = _ref.children,
            _ref$title = _ref.title,
            title = void 0 === _ref$title ? "Are you sure?" : _ref$title,
            _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? "bottom" : _ref$placement,
            onConfirm = _ref.onConfirm,
            onCancel = _ref.onCancel,
            _ref$okText = _ref.okText,
            okText = void 0 === _ref$okText ? "Yes" : _ref$okText,
            _ref$cancelText = _ref.cancelText,
            cancelText = void 0 === _ref$cancelText ? "No" : _ref$cancelText,
            _ref$okType = _ref.okType,
            okType = void 0 === _ref$okType ? "primary" : _ref$okType,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          return (0, jsx_runtime.jsxs)(
            StyledPopconfirmWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onClick: function handleClick(e) {
                    e.stopPropagation(), setVisible(!visible);
                  },
                },
                rest
              ),
              {},
              {
                children: [
                  children,
                  (0, jsx_runtime.jsxs)(StyledPopconfirmContent, {
                    visible,
                    placement,
                    children: [
                      (0, jsx_runtime.jsxs)(StyledPopconfirmTitle, {
                        children: [
                          (0, jsx_runtime.jsx)(StyledPopconfirmIcon, {
                            children: (0, jsx_runtime.jsx)(AlertCircleIcon, {}),
                          }),
                          (0, jsx_runtime.jsx)("div", { children: title }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)(StyledPopconfirmButtons, {
                        children: [
                          (0, jsx_runtime.jsx)(tx_button.A, {
                            size: "small",
                            onClick: function handleCancel(e) {
                              e.stopPropagation(), onCancel && onCancel(e), setVisible(!1);
                            },
                            children: cancelText,
                          }),
                          (0, jsx_runtime.jsx)(tx_button.A, {
                            size: "small",
                            type: okType,
                            onClick: function handleConfirm(e) {
                              e.stopPropagation(), onConfirm && onConfirm(e), setVisible(!1);
                            },
                            children: okText,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        };
      TxPopconfirm.defaultProps = {
        title: "Are you sure?",
        placement: "bottom",
        okText: "Yes",
        cancelText: "No",
        okType: "primary",
      };
      const tx_popconfirm = TxPopconfirm;
      TxPopconfirm.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxPopconfirm",
        props: {
          title: {
            defaultValue: { value: '"Are you sure?"', computed: !1 },
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
          placement: {
            defaultValue: { value: '"bottom"', computed: !1 },
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
          okText: {
            defaultValue: { value: '"Yes"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          cancelText: {
            defaultValue: { value: '"No"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          okType: {
            defaultValue: { value: '"primary"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !0 },
          onConfirm: { description: "", type: { name: "func" }, required: !1 },
          onCancel: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-progress/tx-progress.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => TxProgress });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        _templateObject12,
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
        ProgressWrapper = styled_components_browser_esm.Ay.div(
          _templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(["\n  width: 100%;\n"]))
        ),
        ProgressLine = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 12px;\n",
            ]))
        ),
        ProgressTrack = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  height: ",
              ";\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  overflow: hidden;\n  position: relative;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "6px";
              case "large":
                return "12px";
              default:
                return "8px";
            }
          },
          colors.A.bgFillLight,
          function (props) {
            switch (props.size) {
              case "small":
                return "3px";
              case "large":
                return "6px";
              default:
                return "4px";
            }
          }
        ),
        ProgressBar = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  height: 100%;\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  width: ",
              "%;\n  transition: width 0.3s ease;\n  position: relative;\n\n  ",
              "\n",
            ])),
          function (props) {
            return "exception" === props.status
              ? colors.A.danger[500]
              : "success" === props.status
              ? colors.A.success[500]
              : colors.A.primary[500];
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "3px";
              case "large":
                return "6px";
              default:
                return "4px";
            }
          },
          function (props) {
            return props.percent;
          },
          function (props) {
            return (
              props.showInfo &&
              props.format &&
              '\n    &::after {\n      content: "'.concat(
                props.format,
                '";\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      transform: translateY(-50%);\n      color: white;\n      font-size: 12px;\n      font-weight: 600;\n    }\n  '
              )
            );
          }
        ),
        ProgressText = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  min-width: 40px;\n  text-align: right;\n  font-weight: 500;\n\n  ",
              "\n\n  ",
              "\n\n  svg {\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n  }\n",
            ])),
          colors.A.textPrimary,
          function (props) {
            return "exception" === props.status && "\n    color: ".concat(colors.A.danger[500], ";\n  ");
          },
          function (props) {
            return "success" === props.status && "\n    color: ".concat(colors.A.success[500], ";\n  ");
          }
        ),
        ProgressCircle = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  width: ",
              "px;\n  height: ",
              "px;\n",
            ])),
          function (props) {
            return props.width;
          },
          function (props) {
            return props.width;
          }
        ),
        ProgressCircleSvg = styled_components_browser_esm.Ay.svg(
          _templateObject7 || (_templateObject7 = (0, taggedTemplateLiteral.A)(["\n  transform: rotate(-90deg);\n"]))
        ),
        ProgressCircleTrack = styled_components_browser_esm.Ay.circle(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  fill: none;\n  stroke: ",
              ";\n  stroke-width: ",
              ";\n",
            ])),
          colors.A.bgFillLight,
          function (props) {
            return props.strokeWidth;
          }
        ),
        ProgressCirclePath = styled_components_browser_esm.Ay.circle(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  fill: none;\n  stroke: ",
              ";\n  stroke-width: ",
              ";\n  stroke-linecap: round;\n  stroke-dasharray: ",
              ";\n  stroke-dashoffset: ",
              ";\n  transition: stroke-dashoffset 0.3s ease;\n",
            ])),
          function (props) {
            return "exception" === props.status
              ? colors.A.danger[500]
              : "success" === props.status
              ? colors.A.success[500]
              : colors.A.primary[500];
          },
          function (props) {
            return props.strokeWidth;
          },
          function (props) {
            return props.circumference;
          },
          function (props) {
            return props.offset;
          }
        ),
        ProgressCircleText = styled_components_browser_esm.Ay.div(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: ",
              ";\n  font-weight: 600;\n  color: ",
              ";\n  text-align: center;\n  line-height: 1;\n\n  ",
              "\n\n  ",
              "\n\n  svg {\n    width: ",
              ";\n    height: ",
              ";\n  }\n",
            ])),
          function (props) {
            return props.width < 80 ? "12px" : "16px";
          },
          colors.A.textPrimary,
          function (props) {
            return "exception" === props.status && "\n    color: ".concat(colors.A.danger[500], ";\n  ");
          },
          function (props) {
            return "success" === props.status && "\n    color: ".concat(colors.A.success[500], ";\n  ");
          },
          function (props) {
            return props.width < 80 ? "16px" : "24px";
          },
          function (props) {
            return props.width < 80 ? "16px" : "24px";
          }
        ),
        ProgressSteps = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 8px;\n  align-items: center;\n",
            ]))
        ),
        ProgressStep = styled_components_browser_esm.Ay.div(
          _templateObject12 ||
            (_templateObject12 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  height: ",
              ";\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  transition: background-color 0.3s ease;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "6px";
              case "large":
                return "12px";
              default:
                return "8px";
            }
          },
          function (props) {
            return props.active
              ? "exception" === props.status
                ? colors.A.danger[500]
                : "success" === props.status
                ? colors.A.success[500]
                : colors.A.primary[500]
              : colors.A.bgFillLight;
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "3px";
              case "large":
                return "6px";
              default:
                return "4px";
            }
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "percent",
          "type",
          "size",
          "status",
          "showInfo",
          "strokeWidth",
          "width",
          "steps",
          "format",
          "className",
        ],
        TxProgress = function TxProgress(_ref) {
          var _ref$percent = _ref.percent,
            percent = void 0 === _ref$percent ? 0 : _ref$percent,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? "line" : _ref$type,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "default" : _ref$size,
            _ref$status = _ref.status,
            status = void 0 === _ref$status ? "normal" : _ref$status,
            _ref$showInfo = _ref.showInfo,
            showInfo = void 0 === _ref$showInfo || _ref$showInfo,
            strokeWidth = _ref.strokeWidth,
            _ref$width = _ref.width,
            width = void 0 === _ref$width ? 120 : _ref$width,
            _ref$steps = _ref.steps,
            steps = void 0 === _ref$steps ? 0 : _ref$steps,
            format = _ref.format,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            normalizedPercent = Math.min(Math.max(percent, 0), 100),
            actualStatus = percent >= 100 && "normal" === status ? "success" : status,
            displayFormat =
              format ||
              function defaultFormat(pct) {
                return "exception" === actualStatus
                  ? (0, jsx_runtime.jsxs)("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                        (0, jsx_runtime.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
                        (0, jsx_runtime.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
                      ],
                    })
                  : "success" === actualStatus
                  ? (0, jsx_runtime.jsxs)("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                        (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                      ],
                    })
                  : "".concat(Math.round(pct), "%");
              };
          if ("circle" === type) {
            var actualStrokeWidth = (function getDefaultStrokeWidth() {
                if (strokeWidth) return strokeWidth;
                if ("circle" === type) return 6;
                switch (size) {
                  case "small":
                    return 4;
                  case "large":
                    return 8;
                  default:
                    return 6;
                }
              })(),
              radius = (width - actualStrokeWidth) / 2,
              circumference = 2 * Math.PI * radius,
              offset = circumference - (normalizedPercent / 100) * circumference;
            return (0, jsx_runtime.jsxs)(
              ProgressCircle,
              (0, objectSpread2.A)(
                (0, objectSpread2.A)({ width, className }, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsxs)(ProgressCircleSvg, {
                      width,
                      height: width,
                      children: [
                        (0, jsx_runtime.jsx)(ProgressCircleTrack, {
                          cx: width / 2,
                          cy: width / 2,
                          r: radius,
                          strokeWidth: actualStrokeWidth,
                        }),
                        (0, jsx_runtime.jsx)(ProgressCirclePath, {
                          cx: width / 2,
                          cy: width / 2,
                          r: radius,
                          strokeWidth: actualStrokeWidth,
                          circumference,
                          offset,
                          status: actualStatus,
                        }),
                      ],
                    }),
                    showInfo &&
                      (0, jsx_runtime.jsx)(ProgressCircleText, {
                        width,
                        status: actualStatus,
                        children: displayFormat(normalizedPercent),
                      }),
                  ],
                }
              )
            );
          }
          if (steps > 0) {
            var activeSteps = Math.round((normalizedPercent / 100) * steps);
            return (0, jsx_runtime.jsxs)(
              ProgressWrapper,
              (0, objectSpread2.A)(
                (0, objectSpread2.A)({ className }, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsx)(ProgressSteps, {
                      children: Array.from({ length: steps }).map(function (_, index) {
                        return (0,
                        jsx_runtime.jsx)(ProgressStep, { active: index < activeSteps, size, status: actualStatus }, index);
                      }),
                    }),
                    showInfo &&
                      (0, jsx_runtime.jsx)(ProgressText, {
                        status: actualStatus,
                        style: { marginTop: "8px" },
                        children: displayFormat(normalizedPercent),
                      }),
                  ],
                }
              )
            );
          }
          return (0, jsx_runtime.jsx)(
            ProgressWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ className }, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(ProgressLine, {
                  children: [
                    (0, jsx_runtime.jsx)(ProgressTrack, {
                      size,
                      children: (0, jsx_runtime.jsx)(ProgressBar, {
                        percent: normalizedPercent,
                        size,
                        status: actualStatus,
                        showInfo: showInfo && "string" == typeof displayFormat(normalizedPercent),
                        format:
                          showInfo && "string" == typeof displayFormat(normalizedPercent)
                            ? displayFormat(normalizedPercent)
                            : null,
                      }),
                    }),
                    showInfo &&
                      (0, jsx_runtime.jsx)(ProgressText, {
                        status: actualStatus,
                        children: displayFormat(normalizedPercent),
                      }),
                  ],
                }),
              }
            )
          );
        };
      (TxProgress.defaultProps = {
        percent: 0,
        type: "line",
        size: "default",
        status: "normal",
        showInfo: !0,
        strokeWidth: void 0,
        width: 120,
        steps: 0,
        format: void 0,
        className: "",
      }),
        (TxProgress.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxProgress",
          props: {
            percent: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            type: {
              defaultValue: { value: '"line"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"line"', computed: !1 },
                  { value: '"circle"', computed: !1 },
                ],
              },
              required: !1,
            },
            size: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"small"', computed: !1 },
                  { value: '"default"', computed: !1 },
                  { value: '"large"', computed: !1 },
                ],
              },
              required: !1,
            },
            status: {
              defaultValue: { value: '"normal"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"normal"', computed: !1 },
                  { value: '"success"', computed: !1 },
                  { value: '"exception"', computed: !1 },
                ],
              },
              required: !1,
            },
            showInfo: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            width: {
              defaultValue: { value: "120", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            steps: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            strokeWidth: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            format: {
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
          },
        });
    },
    "./src/components/tx-qrcode/tx-qrcode.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
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
        _excluded = ["value", "size"],
        QRCodeContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: inline-flex;\n  padding: 16px;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        QRCodeCanvas = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.canvas(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: block;\n"]
            ))
        ),
        TxQrcode = function TxQrcode(_ref) {
          var value = _ref.value,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 200 : _ref$size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            canvasRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
              function () {
                var canvas = canvasRef.current;
                if (canvas && value) {
                  var ctx = canvas.getContext("2d");
                  ctx.clearRect(0, 0, size, size),
                    (ctx.fillStyle = "white"),
                    ctx.fillRect(0, 0, size, size),
                    (ctx.fillStyle = "black"),
                    (ctx.font = "14px Arial"),
                    (ctx.textAlign = "center"),
                    ctx.fillText("QR Code", size / 2, size / 2 - 10),
                    ctx.fillText(value.substring(0, 20), size / 2, size / 2 + 10);
                }
              },
              [value, size]
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              QRCodeContainer,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                  {},
                  props
                ),
                {},
                {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(QRCodeCanvas, {
                    ref: canvasRef,
                    width: size,
                    height: size,
                  }),
                }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxQrcode;
      TxQrcode.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxQrcode",
        props: { size: { defaultValue: { value: "200", computed: !1 }, required: !1 } },
      };
    },
    "./src/components/tx-rate/tx-rate.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["value", "onChange", "count", "allowHalf", "disabled", "size"],
        StarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: inline-flex;\n  gap: 4px;\n  font-size: ", ";\n"]
            )),
          function (props) {
            return props.size || "20px";
          }
        ),
        StarButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  background: none;\n  border: none;\n  color: ",
                ";\n  cursor: pointer;\n  font-size: inherit;\n  transition: all 0.2s;\n\n  &:hover {\n    color: ",
                ";\n    transform: scale(1.1);\n  }\n",
              ]
            )),
          function (props) {
            return props.filled
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.warning
              : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderMedium;
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.warning
        ),
        TxRate = function TxRate(_ref) {
          for (
            var _ref$value = _ref.value,
              value = void 0 === _ref$value ? 0 : _ref$value,
              onChange = _ref.onChange,
              _ref$count = _ref.count,
              count = void 0 === _ref$count ? 5 : _ref$count,
              _ref$disabled = (_ref.allowHalf, _ref.disabled),
              disabled = void 0 !== _ref$disabled && _ref$disabled,
              size = _ref.size,
              props = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                _ref,
                _excluded
              ),
              _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState,
                2
              ),
              hoverValue = _useState2[0],
              setHoverValue = _useState2[1],
              _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),
              _useState4 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState3,
                2
              ),
              rating = _useState4[0],
              setRating = _useState4[1],
              stars = [],
              displayValue = hoverValue || rating,
              _loop = function _loop(i) {
                var isFilled = i <= displayValue;
                stars.push(
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    StarButton,
                    {
                      filled: isFilled,
                      onClick: function onClick() {
                        return (function handleClick(newValue) {
                          disabled || (setRating(newValue), onChange && onChange(newValue));
                        })(i);
                      },
                      onMouseEnter: function onMouseEnter() {
                        return !disabled && setHoverValue(i);
                      },
                      onMouseLeave: function onMouseLeave() {
                        return setHoverValue(0);
                      },
                      disabled,
                      size,
                      children: "★",
                    },
                    i
                  )
                );
              },
              i = 1;
            i <= count;
            i++
          )
            _loop(i);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            StarContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                { size },
                props
              ),
              {},
              { children: stars }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxRate;
      TxRate.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxRate",
        props: {
          value: { defaultValue: { value: "0", computed: !1 }, required: !1 },
          count: { defaultValue: { value: "5", computed: !1 }, required: !1 },
          allowHalf: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-result/tx-result.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_result });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        ResultContainer = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  padding: 48px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n",
            ]))
        ),
        ResultIcon = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  margin-bottom: 24px;\n  font-size: 72px;\n  line-height: 1;\n  color: ",
              ";\n",
            ])),
          function (props) {
            var status = props.status;
            return (
              { success: colors.A.success, error: colors.A.error, warning: colors.A.warning, info: colors.A.info }[
                status
              ] || colors.A.textPrimary
            );
          }
        ),
        ResultTitle = styled_components_browser_esm.Ay.h3(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 24px;\n  font-weight: 600;\n  color: ",
              ";\n  margin: 0 0 16px;\n",
            ])),
          colors.A.textPrimary
        ),
        ResultSubtitle = styled_components_browser_esm.Ay.p(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  color: ",
              ";\n  margin: 0 0 24px;\n  max-width: 500px;\n",
            ])),
          colors.A.textSecondary
        ),
        ResultExtra = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        getStatusIcon = function getStatusIcon(status) {
          var iconProps = {
            width: "72",
            height: "72",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          };
          switch (status) {
            case "success":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                      (0, jsx_runtime.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" }),
                    ],
                  }
                )
              );
            case "error":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
                    ],
                  }
                )
              );
            case "warning":
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("path", {
                        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                      }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
                    ],
                  }
                )
              );
            default:
              return (0, jsx_runtime.jsxs)(
                "svg",
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({}, iconProps),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                      (0, jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                    ],
                  }
                )
              );
          }
        },
        TxResult = function TxResult(_ref) {
          var status = _ref.status,
            icon = _ref.icon,
            title = _ref.title,
            subTitle = _ref.subTitle,
            extra = _ref.extra,
            children = _ref.children;
          return (0, jsx_runtime.jsxs)(ResultContainer, {
            children: [
              (0, jsx_runtime.jsx)(ResultIcon, { status, children: icon || getStatusIcon(status) }),
              title && (0, jsx_runtime.jsx)(ResultTitle, { children: title }),
              subTitle && (0, jsx_runtime.jsx)(ResultSubtitle, { children: subTitle }),
              extra && (0, jsx_runtime.jsx)(ResultExtra, { children: extra }),
              children && (0, jsx_runtime.jsx)(ResultExtra, { children }),
            ],
          });
        };
      TxResult.defaultProps = { status: "info" };
      const tx_result = TxResult;
      TxResult.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxResult",
        props: {
          status: {
            defaultValue: { value: '"info"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"success"', computed: !1 },
                { value: '"error"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"info"', computed: !1 },
              ],
            },
            required: !1,
          },
          icon: { description: "", type: { name: "node" }, required: !1 },
          title: { description: "", type: { name: "node" }, required: !1 },
          subTitle: { description: "", type: { name: "node" }, required: !1 },
          extra: { description: "", type: { name: "node" }, required: !1 },
          children: { description: "", type: { name: "node" }, required: !1 },
        },
      };
    },
    "./src/components/tx-scroll-progress/tx-scroll-progress.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["fixed", "top", "height"],
        ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: ",
                ";\n  top: ",
                ";\n  left: 0;\n  right: 0;\n  height: ",
                ";\n  background: ",
                ";\n  z-index: 1000;\n",
              ]
            )),
          function (props) {
            return props.fixed ? "fixed" : "sticky";
          },
          function (props) {
            return props.top || "0";
          },
          function (props) {
            return props.height || "4px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        ProgressFill = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  height: 100%;\n  width: ", "%;\n  background: ", ";\n  transition: width 0.1s linear;\n"]
            )),
          function (props) {
            return props.progress;
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
        ),
        TxScrollProgress = function TxScrollProgress(_ref) {
          var _ref$fixed = _ref.fixed,
            fixed = void 0 === _ref$fixed || _ref$fixed,
            _ref$top = _ref.top,
            top = void 0 === _ref$top ? "0" : _ref$top,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "4px" : _ref$height,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            progress = _useState2[0],
            setProgress = _useState2[1];
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
              var handleScroll = function handleScroll() {
                var windowHeight = window.innerHeight,
                  documentHeight = document.documentElement.scrollHeight,
                  scrollPercent = (window.scrollY / (documentHeight - windowHeight)) * 100;
                setProgress(Math.min(100, Math.max(0, scrollPercent)));
              };
              return (
                window.addEventListener("scroll", handleScroll),
                function () {
                  return window.removeEventListener("scroll", handleScroll);
                }
              );
            }, []),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              ProgressBar,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                  { fixed: fixed ? 1 : 0, top, height },
                  props
                ),
                {},
                { children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProgressFill, { progress }) }
              )
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxScrollProgress;
      TxScrollProgress.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxScrollProgress",
        props: {
          fixed: { defaultValue: { value: "true", computed: !1 }, required: !1 },
          top: { defaultValue: { value: '"0"', computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"4px"', computed: !1 }, required: !1 },
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
    "./src/components/tx-segmented/tx-segmented.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["options", "value", "onChange", "block"],
        SegmentedContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: inline-flex;\n  background: ",
                ";\n  border-radius: 8px;\n  padding: 4px;\n  position: relative;\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        SegmentedButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  padding: 8px 16px;\n  background: ",
                ";\n  color: ",
                ";\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n",
              ]
            )),
          function (props) {
            return props.active ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary : "transparent";
          },
          function (props) {
            return props.active ? "white" : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textPrimary;
          },
          function (props) {
            return props.active
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
              : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillMedium;
          }
        ),
        TxSegmented = function TxSegmented(_ref) {
          var _options$,
            options = _ref.options,
            value = _ref.value,
            onChange = _ref.onChange,
            props =
              (_ref.block,
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                _ref,
                _excluded
              )),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              value || (null === (_options$ = options[0]) || void 0 === _options$ ? void 0 : _options$.value)
            ),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            selectedValue = _useState2[0],
            setSelectedValue = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            SegmentedContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                {},
                props
              ),
              {},
              {
                children: options.map(function (option) {
                  return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    SegmentedButton,
                    {
                      active: selectedValue === option.value,
                      onClick: function onClick() {
                        return (function handleClick(optionValue) {
                          setSelectedValue(optionValue), onChange && onChange(optionValue);
                        })(option.value);
                      },
                      children: option.label,
                    },
                    option.value
                  );
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSegmented;
      TxSegmented.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSegmented",
        props: { block: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
      };
    },
    "./src/components/tx-skeleton/tx-skeleton.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["width", "height", "variant", "radius"],
        shimmer = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.i7)(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n",
              ]
            ))
        ),
        SkeletonBase = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  background: linear-gradient(90deg, ",
                " 25%, ",
                " 50%, ",
                " 75%);\n  background-size: 2000px 100%;\n  animation: ",
                " 1.5s infinite;\n  border-radius: ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillMedium,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          shimmer,
          function (props) {
            return props.radius || "4px";
          }
        ),
        TxSkeleton = function TxSkeleton(_ref) {
          var _ref$width = _ref.width,
            width = void 0 === _ref$width ? "100%" : _ref$width,
            _ref$height = _ref.height,
            height = void 0 === _ref$height ? "20px" : _ref$height,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? "rect" : _ref$variant,
            radius = _ref.radius,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            ),
            isCircle = "circle" === variant;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            SkeletonBase,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              { style: { width, height: isCircle ? width : height, borderRadius: isCircle ? "50%" : radius || "4px" } },
              props
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSkeleton;
      TxSkeleton.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSkeleton",
        props: {
          width: { defaultValue: { value: '"100%"', computed: !1 }, required: !1 },
          height: { defaultValue: { value: '"20px"', computed: !1 }, required: !1 },
          variant: { defaultValue: { value: '"rect"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-slider/tx-slider.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { m: () => TxSlider });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
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
        SliderWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  opacity: ",
              ";\n  cursor: ",
              ";\n",
            ])),
          function (props) {
            return props.disabled ? 0.5 : 1;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "default";
          }
        ),
        SliderContainer = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  flex: 1;\n  height: 12px;\n  display: flex;\n  align-items: center;\n",
            ]))
        ),
        SliderTrack = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: ",
              ";\n  border-radius: 2px;\n",
            ])),
          colors.A.bgFillLight
        ),
        SliderFill = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  height: 4px;\n  background-color: ",
              ";\n  border-radius: 2px;\n  width: ",
              "%;\n  transition: width 0.2s ease;\n",
            ])),
          function (props) {
            return props.disabled ? colors.A.primary[300] : colors.A.primary[500];
          },
          function (props) {
            return props.percent;
          }
        ),
        SliderHandle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  background-color: white;\n  border: 2px solid ",
              ";\n  border-radius: 50%;\n  left: ",
              "%;\n  transform: translateX(-50%);\n  cursor: ",
              ";\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\n  &:hover {\n    transform: translateX(-50%) scale(1.1);\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  }\n\n  &:active {\n    cursor: ",
              ";\n    transform: translateX(-50%) scale(1.05);\n  }\n",
            ])),
          function (props) {
            return props.disabled ? colors.A.primary[300] : colors.A.primary[500];
          },
          function (props) {
            return props.percent;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "grab";
          },
          function (props) {
            return props.disabled ? "not-allowed" : "grabbing";
          }
        ),
        SliderInput = styled_components_browser_esm.Ay.input(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: ",
              ";\n  z-index: 1;\n\n  &::-webkit-slider-thumb {\n    width: 14px;\n    height: 14px;\n    -webkit-appearance: none;\n  }\n",
            ])),
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          }
        ),
        SliderValue = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  min-width: 40px;\n  font-size: 14px;\n  color: ",
              ";\n  text-align: center;\n  font-weight: 400;\n",
            ])),
          colors.A.textPrimary
        ),
        SliderMarks = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  width: 100%;\n  top: 16px;\n",
            ]))
        ),
        SliderMark = styled_components_browser_esm.Ay.div(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: ",
              "%;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: ",
              ';\n  white-space: nowrap;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: -12px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 2px;\n    height: 4px;\n    background-color: ',
              ";\n  }\n",
            ])),
          function (props) {
            return props.percent;
          },
          colors.A.textSecondary,
          colors.A.borderDefault
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "min",
          "max",
          "step",
          "value",
          "defaultValue",
          "disabled",
          "showValue",
          "marks",
          "onChange",
          "onAfterChange",
          "className",
        ],
        TxSlider = function TxSlider(_ref) {
          var _ref$min = _ref.min,
            min = void 0 === _ref$min ? 0 : _ref$min,
            _ref$max = _ref.max,
            max = void 0 === _ref$max ? 100 : _ref$max,
            _ref$step = _ref.step,
            step = void 0 === _ref$step ? 1 : _ref$step,
            value = _ref.value,
            _ref$defaultValue = _ref.defaultValue,
            defaultValue = void 0 === _ref$defaultValue ? 0 : _ref$defaultValue,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$showValue = _ref.showValue,
            showValue = void 0 !== _ref$showValue && _ref$showValue,
            _ref$marks = _ref.marks,
            marks = void 0 === _ref$marks ? null : _ref$marks,
            onChange = _ref.onChange,
            onAfterChange = _ref.onAfterChange,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(defaultValue),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            internalValue = _useState2[0],
            setInternalValue = _useState2[1],
            currentValue = void 0 !== value ? value : internalValue,
            getPercent = function getPercent() {
              return ((currentValue - min) / (max - min)) * 100;
            },
            handleAfterChange = function handleAfterChange(e) {
              disabled || (onAfterChange && onAfterChange(parseFloat(e.target.value)));
            };
          return (0, jsx_runtime.jsxs)(SliderWrapper, {
            disabled,
            className,
            children: [
              (0, jsx_runtime.jsxs)(SliderContainer, {
                children: [
                  (0, jsx_runtime.jsx)(SliderTrack, {}),
                  (0, jsx_runtime.jsx)(SliderFill, { percent: getPercent(), disabled }),
                  (0, jsx_runtime.jsx)(SliderHandle, { percent: getPercent(), disabled }),
                  (0, jsx_runtime.jsx)(
                    SliderInput,
                    (0, objectSpread2.A)(
                      {
                        type: "range",
                        min,
                        max,
                        step,
                        value: currentValue,
                        onChange: function handleChange(e) {
                          if (!disabled) {
                            var newValue = parseFloat(e.target.value);
                            void 0 === value && setInternalValue(newValue), onChange && onChange(newValue);
                          }
                        },
                        onMouseUp: handleAfterChange,
                        onTouchEnd: handleAfterChange,
                        disabled,
                      },
                      props
                    )
                  ),
                  marks &&
                    (0, jsx_runtime.jsx)(SliderMarks, {
                      children: Object.entries(marks).map(function (_ref2) {
                        var _ref3 = (0, slicedToArray.A)(_ref2, 2),
                          markValue = _ref3[0],
                          label = _ref3[1],
                          markPercent = ((parseFloat(markValue) - min) / (max - min)) * 100;
                        return (0, jsx_runtime.jsx)(SliderMark, { percent: markPercent, children: label }, markValue);
                      }),
                    }),
                ],
              }),
              showValue && (0, jsx_runtime.jsx)(SliderValue, { children: currentValue }),
            ],
          });
        };
      (TxSlider.defaultProps = {
        min: 0,
        max: 100,
        step: 1,
        value: void 0,
        defaultValue: 0,
        disabled: !1,
        showValue: !1,
        marks: null,
        onChange: void 0,
        onAfterChange: void 0,
        className: "",
      }),
        (TxSlider.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxSlider",
          props: {
            min: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            max: {
              defaultValue: { value: "100", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            step: {
              defaultValue: { value: "1", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            defaultValue: {
              defaultValue: { value: "0", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            disabled: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            showValue: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            marks: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "object" },
              required: !1,
            },
            value: {
              defaultValue: { value: "undefined", computed: !0 },
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
            onAfterChange: {
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
          },
        });
    },
    "./src/components/tx-snippet/tx-snippet.jsx": (
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
        _excluded = ["code", "language", "label"],
        SnippetContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  overflow: hidden;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        Header = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background: ",
                ";\n  border-bottom: 1px solid ",
                ";\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillMedium,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        Label = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: 12px;\n  color: ", ";\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        CopyButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  background: transparent;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: ",
                ";\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
        ),
        CodeBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.pre(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  margin: 0;\n  padding: 12px 16px;\n  font-size: 14px;\n  overflow-x: auto;\n"]
            ))
        ),
        TxSnippet = function TxSnippet(_ref) {
          var code = _ref.code,
            language = _ref.language,
            label = _ref.label,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            copied = _useState2[0],
            setCopied = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            SnippetContainer,
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
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Header, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Label, { children: label || language }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CopyButton, {
                        onClick: function handleCopy() {
                          navigator.clipboard.writeText(code),
                            setCopied(!0),
                            setTimeout(function () {
                              return setCopied(!1);
                            }, 2e3);
                        },
                        children: copied ? "Copied!" : "Copy",
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CodeBlock, { children: code }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSnippet;
      TxSnippet.__docgenInfo = { description: "", methods: [], displayName: "TxSnippet" };
    },
    "./src/components/tx-space/tx-space.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["direction", "size", "children"],
        SpaceContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  display: inline-flex;\n  flex-direction: ",
                ";\n  align-items: center;\n  gap: ",
                ";\n  width: ",
                ";\n",
              ]
            )),
          function (props) {
            return props.direction || "horizontal";
          },
          function (props) {
            return props.size || "8px";
          },
          function (props) {
            return "vertical" === props.direction ? "100%" : "auto";
          }
        ),
        TxSpace = function TxSpace(_ref) {
          var _ref$direction = _ref.direction,
            direction = void 0 === _ref$direction ? "horizontal" : _ref$direction,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "8px" : _ref$size,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            SpaceContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { direction, size },
                props
              ),
              {},
              {
                children: react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: child }, child.key || Math.random());
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSpace;
      TxSpace.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSpace",
        props: {
          direction: { defaultValue: { value: '"horizontal"', computed: !1 }, required: !1 },
          size: { defaultValue: { value: '"8px"', computed: !1 }, required: !1 },
        },
      };
    },
    "./src/components/tx-splitter/tx-splitter.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
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
        _excluded = ["direction", "children"],
        SplitterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  display: flex;\n  width: ",
                ";\n  height: ",
                ";\n  border: 1px solid ",
                ";\n  border-radius: 8px;\n  overflow: hidden;\n",
              ]
            )),
          function (props) {
            return props.width || "100%";
          },
          function (props) {
            return props.height || "400px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight
        ),
        Panel = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  flex: ", ";\n  overflow: ", ";\n  background: ", ";\n"]
            )),
          function (props) {
            return props.flex || 1;
          },
          function (props) {
            return props.overflow || "auto";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        Resizer = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: ",
                ";\n  height: ",
                ";\n  background: ",
                ";\n  cursor: ",
                ";\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
                ";\n  }\n",
              ]
            )),
          function (props) {
            return "horizontal" === props.direction ? "8px" : "100%";
          },
          function (props) {
            return "vertical" === props.direction ? "8px" : "100%";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight,
          function (props) {
            return "horizontal" === props.direction ? "col-resize" : "row-resize";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
        ),
        TxSplitter = function TxSplitter(_ref) {
          var _ref$direction = _ref.direction,
            direction = void 0 === _ref$direction ? "horizontal" : _ref$direction,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([50, 50]),
            sizes = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              1
            )[0],
            panels = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            SplitterContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                {},
                props
              ),
              {},
              {
                children: panels.map(function (panel, index) {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Panel, { flex: sizes[index], children: panel }), index < panels.length - 1 && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Resizer, { direction })] }, index);
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxSplitter;
      TxSplitter.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSplitter",
        props: { direction: { defaultValue: { value: '"horizontal"', computed: !1 }, required: !1 } },
      };
    },
    "./src/components/tx-steps/tx-steps.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_steps });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
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
        StyledStepsWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  flex-direction: ",
              ";\n  gap: ",
              ";\n",
            ])),
          function (props) {
            return "vertical" === props.direction ? "column" : "row";
          },
          function (props) {
            return props.direction, "0";
          }
        ),
        StyledStep = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  flex-direction: ",
              ";\n  align-items: ",
              ";\n  flex: ",
              ";\n  position: relative;\n\n  ",
              "\n",
            ])),
          function (props) {
            return "vertical" === props.direction ? "row" : "column";
          },
          function (props) {
            return "vertical" === props.direction ? "flex-start" : "center";
          },
          function (props) {
            return "vertical" === props.direction ? "none" : "1";
          },
          function (props) {
            return (
              "horizontal" === props.direction &&
              !props.isLast &&
              '\n    &::after {\n      content: "";\n      position: absolute;\n      top: 16px;\n      left: calc(50% + 24px);\n      right: calc(-50% + 24px);\n      height: 2px;\n      background-color: '.concat(
                "finish" === props.status ? colors.A.primary : colors.A.borderLight,
                ";\n    }\n  "
              )
            );
          }
        ),
        StyledStepIcon = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  z-index: 1;\n  transition: all 0.2s ease;\n\n  ",
              "\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            switch (props.status) {
              case "finish":
                return "\n          background-color: "
                  .concat(colors.A.primary, ";\n          color: ")
                  .concat(colors.A.textWhite, ";\n          border: 2px solid ")
                  .concat(colors.A.primary, ";\n        ");
              case "process":
                return "\n          background-color: "
                  .concat(colors.A.bgWhite, ";\n          color: ")
                  .concat(colors.A.primary, ";\n          border: 2px solid ")
                  .concat(colors.A.primary, ";\n        ");
              case "error":
                return "\n          background-color: "
                  .concat(colors.A.bgWhite, ";\n          color: ")
                  .concat(colors.A.danger, ";\n          border: 2px solid ")
                  .concat(colors.A.danger, ";\n        ");
              default:
                return "\n          background-color: "
                  .concat(colors.A.bgWhite, ";\n          color: ")
                  .concat(colors.A.textTertiary, ";\n          border: 2px solid ")
                  .concat(colors.A.borderLight, ";\n        ");
            }
          }
        ),
        StyledStepContent = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  flex-direction: column;\n  margin-top: ",
              ";\n  margin-left: ",
              ";\n  padding-bottom: ",
              ";\n  position: relative;\n\n  ",
              "\n",
            ])),
          function (props) {
            return "vertical" === props.direction ? "0" : "8px";
          },
          function (props) {
            return "vertical" === props.direction ? "12px" : "0";
          },
          function (props) {
            return "vertical" !== props.direction || props.isLast ? "0" : "24px";
          },
          function (props) {
            return (
              "vertical" === props.direction &&
              !props.isLast &&
              '\n    &::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: -28px;\n      bottom: 0;\n      width: 2px;\n      background-color: '.concat(
                "finish" === props.status ? colors.A.primary : colors.A.borderLight,
                ";\n    }\n  "
              )
            );
          }
        ),
        StyledStepTitle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  margin-bottom: 4px;\n",
            ])),
          function (props) {
            switch (props.status) {
              case "finish":
              case "process":
                return colors.A.textPrimary;
              case "error":
                return colors.A.danger;
              default:
                return colors.A.textTertiary;
            }
          }
        ),
        StyledStepDescription = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)(["\n  font-size: 12px;\n  color: ", ";\n"])),
          colors.A.textSecondary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["current", "items", "direction", "status"],
        CheckIcon = function CheckIcon() {
          return (0, jsx_runtime.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, jsx_runtime.jsx)("polyline", { points: "20 6 9 17 4 12" }),
          });
        },
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxSteps = function TxSteps(_ref) {
          var _ref$current = _ref.current,
            current = void 0 === _ref$current ? 0 : _ref$current,
            _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$direction = _ref.direction,
            direction = void 0 === _ref$direction ? "horizontal" : _ref$direction,
            _ref$status = _ref.status,
            status = void 0 === _ref$status ? "process" : _ref$status,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded),
            renderIcon = function renderIcon(stepStatus, index) {
              return "finish" === stepStatus
                ? (0, jsx_runtime.jsx)(CheckIcon, {})
                : "error" === stepStatus
                ? (0, jsx_runtime.jsx)(CloseIcon, {})
                : index + 1;
            };
          return (0, jsx_runtime.jsx)(
            StyledStepsWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ direction }, rest),
              {},
              {
                children: items.map(function (item, index) {
                  var stepStatus = (function getStepStatus(index) {
                      return "error" === status && index === current
                        ? "error"
                        : index < current
                        ? "finish"
                        : index === current
                        ? "process"
                        : "wait";
                    })(index),
                    isLast = index === items.length - 1;
                  return (0,
                  jsx_runtime.jsxs)(StyledStep, { direction, status: stepStatus, isLast, children: [(0, jsx_runtime.jsx)(StyledStepIcon, { status: stepStatus, children: item.icon || renderIcon(stepStatus, index) }), (0, jsx_runtime.jsxs)(StyledStepContent, { direction, status: stepStatus, isLast, children: [(0, jsx_runtime.jsx)(StyledStepTitle, { status: stepStatus, children: item.title }), item.description && (0, jsx_runtime.jsx)(StyledStepDescription, { children: item.description })] })] }, item.title || index);
                }),
              }
            )
          );
        };
      TxSteps.defaultProps = { current: 0, items: [], direction: "horizontal", status: "process" };
      const tx_steps = TxSteps;
      TxSteps.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxSteps",
        props: {
          current: {
            defaultValue: { value: "0", computed: !1 },
            description: "",
            type: { name: "number" },
            required: !1,
          },
          items: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "node", required: !0 },
                  description: { name: "node", required: !1 },
                  icon: { name: "node", required: !1 },
                },
              },
            },
            required: !1,
          },
          direction: {
            defaultValue: { value: '"horizontal"', computed: !1 },
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
          status: {
            defaultValue: { value: '"process"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"wait"', computed: !1 },
                { value: '"process"', computed: !1 },
                { value: '"finish"', computed: !1 },
                { value: '"error"', computed: !1 },
              ],
            },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-switch/tx-switch.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => TxSwitch });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
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
        SwitchWrapper = styled_components_browser_esm.Ay.label(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  cursor: ",
              ";\n  opacity: ",
              ";\n  gap: 8px;\n",
            ])),
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          function (props) {
            return props.disabled ? 0.5 : 1;
          }
        ),
        SwitchInput = styled_components_browser_esm.Ay.input(
          _templateObject2 || (_templateObject2 = (0, taggedTemplateLiteral.A)(["\n  display: none;\n"]))
        ),
        SwitchSlider = styled_components_browser_esm.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  display: inline-block;\n  width: ",
              ";\n  height: ",
              ";\n  background-color: ",
              ";\n  border-radius: ",
              ';\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &::before {\n    content: "";\n    position: absolute;\n    height: ',
              ";\n    width: ",
              ";\n    left: ",
              ";\n    bottom: 2px;\n    background-color: white;\n    border-radius: 50%;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  }\n",
            ])),
          function (props) {
            return "small" === props.size ? "28px" : "large" === props.size ? "48px" : "38px";
          },
          function (props) {
            return "small" === props.size ? "16px" : "large" === props.size ? "26px" : "22px";
          },
          function (props) {
            return props.checked
              ? props.disabled
                ? colors.A.primary[300]
                : colors.A.primary[500]
              : "rgba(0, 0, 0, 0.25)";
          },
          function (props) {
            return "small" === props.size ? "8px" : "large" === props.size ? "13px" : "11px";
          },
          function (props) {
            return "small" === props.size ? "12px" : "large" === props.size ? "22px" : "18px";
          },
          function (props) {
            return "small" === props.size ? "12px" : "large" === props.size ? "22px" : "18px";
          },
          function (_ref) {
            var checked = _ref.checked,
              size = _ref.size;
            return checked
              ? "calc(100% - ".concat("small" === size ? "14px" : "large" === size ? "24px" : "20px", ")")
              : "2px";
          }
        ),
        LoadingIcon =
          (styled_components_browser_esm.Ay.span(
            _templateObject4 ||
              (_templateObject4 = (0, taggedTemplateLiteral.A)([
                "\n  font-size: 14px;\n  color: ",
                ";\n  user-select: none;\n  font-weight: 400;\n",
              ])),
            colors.A.textPrimary
          ),
          styled_components_browser_esm.Ay.div(
            _templateObject5 ||
              (_templateObject5 = (0, taggedTemplateLiteral.A)([
                "\n  display: inline-block;\n  width: ",
                ";\n  height: ",
                ";\n  border: 2px solid white;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 0.6s linear infinite;\n  position: absolute;\n  top: 50%;\n  left: ",
                ";\n  right: ",
                ";\n  transform: translate(",
                ", -50%);\n\n  @keyframes spin {\n    to {\n      transform: translate(",
                ", -50%) rotate(360deg);\n    }\n  }\n",
              ])),
            function (props) {
              return "small" === props.size ? "10px" : "large" === props.size ? "16px" : "14px";
            },
            function (props) {
              return "small" === props.size ? "10px" : "large" === props.size ? "16px" : "14px";
            },
            function (props) {
              return props.checked ? "auto" : "50%";
            },
            function (props) {
              return props.checked ? "50%" : "auto";
            },
            function (props) {
              return props.checked ? "50%" : "-50%";
            },
            function (props) {
              return props.checked ? "50%" : "-50%";
            }
          )),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "checked",
          "defaultChecked",
          "disabled",
          "loading",
          "size",
          "checkedChildren",
          "unCheckedChildren",
          "onChange",
          "className",
        ],
        TxSwitch = function TxSwitch(_ref) {
          var _ref$checked = _ref.checked,
            checked = void 0 !== _ref$checked && _ref$checked,
            _ref$defaultChecked = _ref.defaultChecked,
            defaultChecked = void 0 !== _ref$defaultChecked && _ref$defaultChecked,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$loading = _ref.loading,
            loading = void 0 !== _ref$loading && _ref$loading,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "default" : _ref$size,
            _ref$checkedChildren = _ref.checkedChildren,
            checkedChildren = void 0 === _ref$checkedChildren ? null : _ref$checkedChildren,
            _ref$unCheckedChildre = _ref.unCheckedChildren,
            unCheckedChildren = void 0 === _ref$unCheckedChildre ? null : _ref$unCheckedChildre,
            onChange = _ref.onChange,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            isChecked = void 0 !== checked ? checked : defaultChecked;
          return (0, jsx_runtime.jsxs)(SwitchWrapper, {
            disabled: disabled || loading,
            className,
            children: [
              (0, jsx_runtime.jsx)(
                SwitchInput,
                (0, objectSpread2.A)(
                  {
                    type: "checkbox",
                    checked: isChecked,
                    onChange: function handleChange(e) {
                      disabled || loading || (onChange && onChange(e.target.checked, e));
                    },
                    disabled: disabled || loading,
                  },
                  props
                )
              ),
              (0, jsx_runtime.jsxs)(SwitchSlider, {
                checked: isChecked,
                disabled,
                size,
                children: [
                  loading && (0, jsx_runtime.jsx)(LoadingIcon, { checked: isChecked, size }),
                  !loading &&
                    isChecked &&
                    checkedChildren &&
                    (0, jsx_runtime.jsx)("span", {
                      style: {
                        position: "absolute",
                        left: "6px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "small" === size ? "10px" : "12px",
                        color: "white",
                      },
                      children: checkedChildren,
                    }),
                  !loading &&
                    !isChecked &&
                    unCheckedChildren &&
                    (0, jsx_runtime.jsx)("span", {
                      style: {
                        position: "absolute",
                        right: "6px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "small" === size ? "10px" : "12px",
                        color: "white",
                      },
                      children: unCheckedChildren,
                    }),
                ],
              }),
            ],
          });
        };
      (TxSwitch.defaultProps = {
        checked: void 0,
        defaultChecked: !1,
        disabled: !1,
        loading: !1,
        size: "default",
        checkedChildren: null,
        unCheckedChildren: null,
        onChange: void 0,
        className: "",
      }),
        (TxSwitch.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxSwitch",
          props: {
            checked: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            defaultChecked: {
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
            loading: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            size: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"small"', computed: !1 },
                  { value: '"default"', computed: !1 },
                  { value: '"large"', computed: !1 },
                ],
              },
              required: !1,
            },
            checkedChildren: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            unCheckedChildren: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
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
          },
        });
    },
    "./src/components/tx-table/tx-table.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_table });
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
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledTableWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  overflow-x: auto;\n  border: 1px solid ",
              ";\n  border-radius: 12px;\n",
            ])),
          colors.A.borderLight
        ),
        StyledTable = styled_components_browser_esm.Ay.table(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n  background: ",
              ";\n",
            ])),
          colors.A.bgWhite
        ),
        StyledTableHead = styled_components_browser_esm.Ay.thead(
          _templateObject3 || (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  background-color: ", ";\n"])),
          colors.A.bgFill
        ),
        StyledTableRow = styled_components_browser_esm.Ay.tr(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  border-bottom: 1px solid ",
              ";\n  transition: background-color 0.2s ease;\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  ",
              "\n",
            ])),
          colors.A.borderLight,
          function (props) {
            return (
              props.hoverable &&
              "\n    &:hover {\n      background-color: ".concat(colors.A.bgFillLight, ";\n    }\n  ")
            );
          }
        ),
        StyledTableHeader = styled_components_browser_esm.Ay.th(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  text-align: ",
              ";\n  font-weight: 600;\n  color: ",
              ";\n  white-space: nowrap;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 12px";
              case "large":
                return "20px 16px";
              default:
                return "12px 16px";
            }
          },
          function (props) {
            return props.align || "left";
          },
          colors.A.textPrimary
        ),
        StyledTableCell = styled_components_browser_esm.Ay.td(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  text-align: ",
              ";\n  color: ",
              ";\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 12px";
              case "large":
                return "20px 16px";
              default:
                return "12px 16px";
            }
          },
          function (props) {
            return props.align || "left";
          },
          colors.A.textSecondary
        ),
        StyledEmptyText = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 48px 24px;\n  text-align: center;\n  color: ",
              ";\n  font-size: 14px;\n",
            ])),
          colors.A.textTertiary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["columns", "dataSource", "size", "bordered", "hoverable", "emptyText"],
        TxTable = function TxTable(_ref) {
          var _ref$columns = _ref.columns,
            columns = void 0 === _ref$columns ? [] : _ref$columns,
            _ref$dataSource = _ref.dataSource,
            dataSource = void 0 === _ref$dataSource ? [] : _ref$dataSource,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$bordered = _ref.bordered,
            bordered = void 0 === _ref$bordered || _ref$bordered,
            _ref$hoverable = _ref.hoverable,
            hoverable = void 0 === _ref$hoverable || _ref$hoverable,
            _ref$emptyText = _ref.emptyText,
            emptyText = void 0 === _ref$emptyText ? "No data" : _ref$emptyText,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            StyledTableWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ bordered }, rest),
              {},
              {
                children: (0, jsx_runtime.jsxs)(StyledTable, {
                  children: [
                    (0, jsx_runtime.jsx)(StyledTableHead, {
                      children: (0, jsx_runtime.jsx)(StyledTableRow, {
                        children: columns.map(function (column, index) {
                          return (0,
                          jsx_runtime.jsx)(StyledTableHeader, { align: column.align, size, children: column.title }, column.key || index);
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsx)("tbody", {
                      children:
                        dataSource.length > 0
                          ? dataSource.map(function (record, rowIndex) {
                              return (0, jsx_runtime.jsx)(
                                StyledTableRow,
                                {
                                  hoverable,
                                  children: columns.map(function (column, colIndex) {
                                    return (0,
                                    jsx_runtime.jsx)(StyledTableCell, { align: column.align, size, children: column.render ? column.render(record[column.dataIndex], record, rowIndex) : record[column.dataIndex] }, column.key || colIndex);
                                  }),
                                },
                                record.key || rowIndex
                              );
                            })
                          : (0, jsx_runtime.jsx)("tr", {
                              children: (0, jsx_runtime.jsx)("td", {
                                colSpan: columns.length,
                                children: (0, jsx_runtime.jsx)(StyledEmptyText, { children: emptyText }),
                              }),
                            }),
                    }),
                  ],
                }),
              }
            )
          );
        };
      TxTable.defaultProps = {
        columns: [],
        dataSource: [],
        size: "medium",
        bordered: !0,
        hoverable: !0,
        emptyText: "No data",
      };
      const tx_table = TxTable;
      TxTable.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTable",
        props: {
          columns: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "union", value: [{ name: "string" }, { name: "node" }], required: !1 },
                  dataIndex: { name: "string", required: !1 },
                  key: { name: "string", required: !1 },
                  align: {
                    name: "enum",
                    value: [
                      { value: '"left"', computed: !1 },
                      { value: '"center"', computed: !1 },
                      { value: '"right"', computed: !1 },
                    ],
                    required: !1,
                  },
                  render: { name: "func", required: !1 },
                },
              },
            },
            required: !1,
          },
          dataSource: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: { name: "array" },
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
          bordered: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          hoverable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          emptyText: {
            defaultValue: { value: '"No data"', computed: !1 },
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
        },
      };
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
    "./src/components/tx-tag/tx-tag.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_tag });
      var _templateObject,
        _templateObject2,
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
        StyledTag = styled_components_browser_esm.Ay.span(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: ",
              ";\n  border-radius: 4px;\n  font-size: ",
              ";\n  font-weight: 400;\n  line-height: 1.5;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n  cursor: ",
              ";\n\n  /* Color variants */\n  ",
              "\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "2px 8px";
              case "large":
                return "6px 16px";
              default:
                return "4px 12px";
            }
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
          function (props) {
            return props.closable ? "default" : "inherit";
          },
          function (props) {
            var colorMap = {
                default: { bg: colors.A.bgFill, color: colors.A.textPrimary, border: colors.A.borderDefault },
                primary: { bg: colors.A.primaryLight, color: colors.A.primary, border: colors.A.primary },
                success: { bg: "".concat(colors.A.success, "15"), color: colors.A.success, border: colors.A.success },
                warning: { bg: "".concat(colors.A.warning, "15"), color: colors.A.warning, border: colors.A.warning },
                danger: { bg: colors.A.dangerLight, color: colors.A.danger, border: colors.A.danger },
                info: { bg: "".concat(colors.A.info, "15"), color: colors.A.info, border: colors.A.info },
              },
              style = colorMap[props.color] || colorMap.default;
            return "\n      background-color: "
              .concat(style.bg, ";\n      color: ")
              .concat(style.color, ";\n      border-color: ")
              .concat(props.bordered ? style.border : "transparent", ";\n    ");
          }
        ),
        StyledTagClose = styled_components_browser_esm.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  width: 14px;\n  height: 14px;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "color", "closable", "onClose", "size", "bordered"],
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxTag = function TxTag(_ref) {
          var children = _ref.children,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? "default" : _ref$color,
            _ref$closable = _ref.closable,
            closable = void 0 !== _ref$closable && _ref$closable,
            onClose = _ref.onClose,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$bordered = _ref.bordered,
            bordered = void 0 !== _ref$bordered && _ref$bordered,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            StyledTag,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ color, size, bordered, closable }, rest),
              {},
              {
                children: [
                  children,
                  closable &&
                    (0, jsx_runtime.jsx)(StyledTagClose, {
                      onClick: function handleClose(e) {
                        e.stopPropagation(), onClose && onClose(e);
                      },
                      type: "button",
                      children: (0, jsx_runtime.jsx)(CloseIcon, {}),
                    }),
                ],
              }
            )
          );
        };
      TxTag.defaultProps = { color: "default", closable: !1, size: "medium", bordered: !1 };
      const tx_tag = TxTag;
      TxTag.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTag",
        props: {
          color: {
            defaultValue: { value: '"default"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"primary"', computed: !1 },
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"danger"', computed: !1 },
                { value: '"info"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
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
          bordered: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !1 },
          onClose: { description: "", type: { name: "func" }, required: !1 },
        },
      };
    },
    "./src/components/tx-text-gradient/tx-text-gradient.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "gradient", "weight", "size"],
        GradientText = styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              [
                "\n  background: ",
                ";\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: ",
                ";\n  font-size: ",
                ";\n",
              ]
            )),
          function (props) {
            return props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
          },
          function (props) {
            return props.weight || "600";
          },
          function (props) {
            return props.size || "inherit";
          }
        ),
        TxTextGradient = function TxTextGradient(_ref) {
          var children = _ref.children,
            gradient = _ref.gradient,
            weight = _ref.weight,
            size = _ref.size,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            GradientText,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                { gradient, weight, size },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTextGradient;
      TxTextGradient.__docgenInfo = { description: "", methods: [], displayName: "TxTextGradient" };
    },
    "./src/components/tx-textarea/tx-textarea.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["placeholder", "value", "onChange", "disabled", "resize", "minHeight"],
        TextareaStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.textarea(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid ",
                ";\n  border-radius: 6px;\n  font-size: 14px;\n  resize: ",
                ";\n  min-height: ",
                ";\n\n  &:focus {\n    outline: none;\n    border-color: ",
                ";\n    box-shadow: 0 0 0 3px ",
                ";\n  }\n\n  &:disabled {\n    background: ",
                ";\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    color: ",
                ";\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.borderLight,
          function (props) {
            return props.resize || "vertical";
          },
          function (props) {
            return props.minHeight || "80px";
          },
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.primary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.primaryLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.bgFillLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary
        ),
        TxTextarea = function TxTextarea(_ref) {
          var placeholder = _ref.placeholder,
            value = _ref.value,
            onChange = _ref.onChange,
            disabled = _ref.disabled,
            resize = _ref.resize,
            minHeight = _ref.minHeight,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            TextareaStyled,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              { placeholder, value, onChange, disabled, resize, minHeight },
              props
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTextarea;
      TxTextarea.__docgenInfo = { description: "", methods: [], displayName: "TxTextarea" };
    },
    "./src/components/tx-time-input/tx-time-input.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
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
        _excluded = ["value", "onChange", "disabled"],
        Input = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.input(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid ",
                ";\n  border-radius: 6px;\n  font-size: 14px;\n\n  &:focus {\n    outline: none;\n    border-color: ",
                ";\n    box-shadow: 0 0 0 3px ",
                ";\n  }\n\n  &:disabled {\n    background: ",
                ";\n    cursor: not-allowed;\n  }\n",
              ]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primaryLight,
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.bgFillLight
        ),
        TxTimeInput = function TxTimeInput(_ref) {
          var value = _ref.value,
            onChange = _ref.onChange,
            disabled = _ref.disabled,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ""),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            time = _useState2[0],
            setTime = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Input,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              {
                type: "time",
                value: time,
                onChange: function handleChange(e) {
                  setTime(e.target.value), onChange && onChange(e.target.value);
                },
                disabled,
              },
              props
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTimeInput;
      TxTimeInput.__docgenInfo = { description: "", methods: [], displayName: "TxTimeInput" };
    },
    "./src/components/tx-timeline/tx-timeline.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { o: () => TxTimeline });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
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
        TimelineWrapper = styled_components_browser_esm.Ay.ul(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))
        ),
        TimelineItem = styled_components_browser_esm.Ay.li(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  padding-bottom: ",
              ';\n  padding-left: 28px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 6px;\n    top: 20px;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
              ";\n    display: ",
              ";\n  }\n",
            ])),
          function (props) {
            return props.isLast ? "0" : "24px";
          },
          colors.A.borderDefault,
          function (props) {
            return props.isLast ? "none" : "block";
          }
        ),
        TimelineDot = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid\n    ",
              ";\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n\n  ",
              "\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
            ])),
          function (props) {
            switch (props.color) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          },
          function (props) {
            return (
              props.icon &&
              "\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: ".concat(
                "success" === props.color
                  ? colors.A.success[500]
                  : "error" === props.color
                  ? colors.A.danger[500]
                  : "warning" === props.color
                  ? colors.A.warning[500]
                  : "processing" === props.color
                  ? colors.A.info[500]
                  : colors.A.primary[500],
                ";\n    color: white;\n    font-size: 12px;\n  "
              )
            );
          }
        ),
        TimelineContent = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)(["\n  position: relative;\n  top: -4px;\n"]))
        ),
        TimelineTitle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 600;\n  color: ",
              ";\n  margin-bottom: 4px;\n  line-height: 1.5;\n",
            ])),
          colors.A.textPrimary
        ),
        TimelineDescription = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 13px;\n  color: ",
              ";\n  line-height: 1.5;\n  font-weight: 400;\n",
            ])),
          colors.A.textSecondary
        ),
        TimelineTime = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 12px;\n  color: ",
              ";\n  margin-top: 4px;\n",
            ])),
          colors.A.textTertiary
        ),
        TimelineLabel = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: ",
              ";\n  right: ",
              ";\n  top: 0;\n  width: 100px;\n  text-align: ",
              ";\n  font-size: 12px;\n  color: ",
              ";\n",
            ])),
          function (props) {
            return "left" === props.mode ? "auto" : "-120px";
          },
          function (props) {
            return "left" === props.mode ? "-120px" : "auto";
          },
          function (props) {
            return "left" === props.mode ? "left" : "right";
          },
          colors.A.textTertiary
        ),
        TimelineAlternate = styled_components_browser_esm.Ay.ul(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              '\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
              ";\n    transform: translateX(-50%);\n  }\n",
            ])),
          colors.A.borderDefault
        ),
        TimelineAlternateItem = styled_components_browser_esm.Ay.li(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  padding: ",
              ";\n  text-align: ",
              ";\n\n  &:last-child {\n    padding-bottom: 0;\n  }\n",
            ])),
          function (props) {
            return "left" === props.position ? "0 calc(50% + 28px) 24px 0" : "0 0 24px calc(50% + 28px)";
          },
          function (props) {
            return "left" === props.position ? "right" : "left";
          }
        ),
        TimelineAlternateDot = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: 50%;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  border: 2px solid\n    ",
              ";\n  background-color: white;\n  z-index: 1;\n\n  ",
              "\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
            ])),
          function (props) {
            switch (props.color) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          },
          function (props) {
            return (
              props.icon &&
              "\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: ".concat(
                "success" === props.color
                  ? colors.A.success[500]
                  : "error" === props.color
                  ? colors.A.danger[500]
                  : "warning" === props.color
                  ? colors.A.warning[500]
                  : "processing" === props.color
                  ? colors.A.info[500]
                  : colors.A.primary[500],
                ";\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "
              )
            );
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "mode", "className"],
        _excluded2 = ["title", "description", "children", "color", "icon", "label", "time", "isLast", "className"],
        TxTimeline = function TxTimeline(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$mode = _ref.mode,
            mode = void 0 === _ref$mode ? "left" : _ref$mode,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded);
          return "alternate" === mode
            ? (0, jsx_runtime.jsx)(
                TimelineAlternate,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ className }, props),
                  {},
                  {
                    children: items.map(function (item, index) {
                      var position = index % 2 == 0 ? "left" : "right";
                      return (0,
                      jsx_runtime.jsxs)(TimelineAlternateItem, { position, children: [(0, jsx_runtime.jsx)(TimelineAlternateDot, { color: item.color, icon: item.icon, children: item.icon }), (0, jsx_runtime.jsxs)(TimelineContent, { children: [item.label && (0, jsx_runtime.jsx)(TimelineLabel, { mode: position, children: item.label }), item.title && (0, jsx_runtime.jsx)(TimelineTitle, { children: item.title }), item.description && (0, jsx_runtime.jsx)(TimelineDescription, { children: item.description }), item.children, item.time && (0, jsx_runtime.jsx)(TimelineTime, { children: item.time })] })] }, index);
                    }),
                  }
                )
              )
            : (0, jsx_runtime.jsx)(
                TimelineWrapper,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ className }, props),
                  {},
                  {
                    children: items.map(function (item, index) {
                      return (0,
                      jsx_runtime.jsxs)(TimelineItem, { isLast: index === items.length - 1, children: [(0, jsx_runtime.jsx)(TimelineDot, { color: item.color, icon: item.icon, children: item.icon }), (0, jsx_runtime.jsxs)(TimelineContent, { children: [item.label && (0, jsx_runtime.jsx)(TimelineLabel, { mode, children: item.label }), item.title && (0, jsx_runtime.jsx)(TimelineTitle, { children: item.title }), item.description && (0, jsx_runtime.jsx)(TimelineDescription, { children: item.description }), item.children, item.time && (0, jsx_runtime.jsx)(TimelineTime, { children: item.time })] })] }, index);
                    }),
                  }
                )
              );
        };
      TxTimeline.defaultProps = { items: [], mode: "left", className: "" };
      var TxTimelineItem = function TxTimelineItem(_ref2) {
        var title = _ref2.title,
          description = _ref2.description,
          children = _ref2.children,
          _ref2$color = _ref2.color,
          color = void 0 === _ref2$color ? "default" : _ref2$color,
          icon = _ref2.icon,
          label = _ref2.label,
          time = _ref2.time,
          _ref2$isLast = _ref2.isLast,
          isLast = void 0 !== _ref2$isLast && _ref2$isLast,
          className = _ref2.className,
          props = (0, objectWithoutProperties.A)(_ref2, _excluded2);
        return (0, jsx_runtime.jsxs)(
          TimelineItem,
          (0, objectSpread2.A)(
            (0, objectSpread2.A)({ isLast, className }, props),
            {},
            {
              children: [
                (0, jsx_runtime.jsx)(TimelineDot, { color, icon, children: icon }),
                (0, jsx_runtime.jsxs)(TimelineContent, {
                  children: [
                    label && (0, jsx_runtime.jsx)(TimelineLabel, { children: label }),
                    title && (0, jsx_runtime.jsx)(TimelineTitle, { children: title }),
                    description && (0, jsx_runtime.jsx)(TimelineDescription, { children: description }),
                    children,
                    time && (0, jsx_runtime.jsx)(TimelineTime, { children: time }),
                  ],
                }),
              ],
            }
          )
        );
      };
      (TxTimelineItem.defaultProps = {
        title: null,
        description: null,
        children: null,
        color: "default",
        icon: null,
        label: null,
        time: null,
        isLast: !1,
        className: "",
      }),
        (TxTimeline.Item = TxTimelineItem),
        (TxTimeline.__docgenInfo = {
          description: "",
          methods: [
            {
              name: "Item",
              docblock: null,
              modifiers: ["static"],
              params: [
                {
                  name: '{\n  title,\n  description,\n  children,\n  color = "default",\n  icon,\n  label,\n  time,\n  isLast = false,\n  className,\n  ...props\n}',
                  optional: !1,
                  type: null,
                },
              ],
              returns: null,
            },
          ],
          displayName: "TxTimeline",
          props: {
            items: {
              defaultValue: { value: "[]", computed: !1 },
              description: "",
              type: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    title: { name: "node", required: !1 },
                    description: { name: "node", required: !1 },
                    children: { name: "node", required: !1 },
                    color: {
                      name: "enum",
                      value: [
                        { value: '"default"', computed: !1 },
                        { value: '"success"', computed: !1 },
                        { value: '"error"', computed: !1 },
                        { value: '"warning"', computed: !1 },
                        { value: '"processing"', computed: !1 },
                      ],
                      required: !1,
                    },
                    icon: { name: "node", required: !1 },
                    label: { name: "node", required: !1 },
                    time: { name: "node", required: !1 },
                  },
                },
              },
              required: !1,
            },
            mode: {
              defaultValue: { value: '"left"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"left"', computed: !1 },
                  { value: '"right"', computed: !1 },
                  { value: '"alternate"', computed: !1 },
                ],
              },
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
        (TxTimelineItem.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxTimelineItem",
          props: {
            color: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"default"', computed: !1 },
                  { value: '"success"', computed: !1 },
                  { value: '"error"', computed: !1 },
                  { value: '"warning"', computed: !1 },
                  { value: '"processing"', computed: !1 },
                ],
              },
              required: !1,
            },
            isLast: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            title: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            description: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            icon: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            label: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            time: {
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
    "./src/components/tx-toggle/tx-toggle.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
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
        _excluded = ["checked", "onChange", "size", "disabled"],
        ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: relative;\n  display: inline-block;\n  width: ",
                ";\n  height: ",
                ";\n  background: ",
                ";\n  border-radius: ",
                ";\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n",
              ]
            )),
          function (props) {
            return "large" === props.size ? "48px" : "small" === props.size ? "32px" : "40px";
          },
          function (props) {
            return "large" === props.size ? "24px" : "small" === props.size ? "16px" : "20px";
          },
          function (props) {
            return props.checked
              ? _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.primary
              : _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.borderMedium;
          },
          function (props) {
            return "large" === props.size ? "12px" : "small" === props.size ? "8px" : "10px";
          }
        ),
        ToggleThumb = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: absolute;\n  top: ",
                ";\n  left: ",
                ";\n  width: ",
                ";\n  height: ",
                ";\n  background: white;\n  border-radius: 50%;\n  transition: left 0.2s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n",
              ]
            )),
          function (props) {
            return "large" === props.size ? "2px" : "small" === props.size ? "1px" : "2px";
          },
          function (props) {
            return props.checked ? ("large" === props.size ? "26px" : "small" === props.size ? "17px" : "22px") : "2px";
          },
          function (props) {
            return "large" === props.size ? "20px" : "small" === props.size ? "14px" : "16px";
          },
          function (props) {
            return "large" === props.size ? "20px" : "small" === props.size ? "14px" : "16px";
          }
        ),
        TxToggle = function TxToggle(_ref) {
          var _ref$checked = _ref.checked,
            checked = void 0 !== _ref$checked && _ref$checked,
            onChange = _ref.onChange,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(checked),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            isChecked = _useState2[0],
            setIsChecked = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            ToggleButton,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                {
                  checked: isChecked ? 1 : 0,
                  size,
                  disabled,
                  onClick: function handleClick() {
                    if (!disabled) {
                      var newValue = !isChecked;
                      setIsChecked(newValue), onChange && onChange(newValue);
                    }
                  },
                },
                props
              ),
              {},
              {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleThumb, {
                  checked: isChecked ? 1 : 0,
                  size,
                }),
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxToggle;
      TxToggle.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxToggle",
        props: {
          checked: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          size: { defaultValue: { value: '"medium"', computed: !1 }, required: !1 },
          disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
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
    "./src/components/tx-tour/tx-tour.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
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
        _excluded = ["steps", "current", "open", "onClose"],
        TourOverlay = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  opacity: ",
                ";\n  visibility: ",
                ";\n  transition: all 0.3s;\n",
              ]
            )),
          function (props) {
            return props.open ? 1 : 0;
          },
          function (props) {
            return props.open ? "visible" : "hidden";
          }
        ),
        TourTooltip = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                "\n  position: absolute;\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 300px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n",
              ]
            ))
        ),
        TourTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-weight: 600;\n  margin-bottom: 8px;\n"]
            ))
        ),
        TourContent = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  font-size: 14px;\n  color: ", ";\n  margin-bottom: 12px;\n"]
            )),
          _theme_colors__WEBPACK_IMPORTED_MODULE_1__.A.textSecondary
        ),
        TourActions = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              ["\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n"]
            ))
        ),
        TxTour = function TxTour(_ref) {
          var _ref$steps = _ref.steps,
            steps = void 0 === _ref$steps ? [] : _ref$steps,
            _ref$current = _ref.current,
            current = void 0 === _ref$current ? 0 : _ref$current,
            _ref$open = _ref.open,
            open = void 0 !== _ref$open && _ref$open,
            onClose = _ref.onClose,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(current),
            _useState2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
              _useState,
              2
            ),
            currentStep = _useState2[0],
            setCurrentStep = _useState2[1];
          if (!open || 0 === steps.length) return null;
          var currentStepData = steps[currentStep];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TourOverlay, {
            open,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              TourTooltip,
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
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TourTitle, {
                      children: currentStepData.title,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TourContent, {
                      children: currentStepData.content,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TourActions, {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                          onClick: function prevStep() {
                            currentStep > 0 && setCurrentStep(currentStep - 1);
                          },
                          disabled: 0 === currentStep,
                          children: "Back",
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                          onClick: function nextStep() {
                            currentStep < steps.length - 1
                              ? setCurrentStep(currentStep + 1)
                              : null == onClose || onClose();
                          },
                          children: currentStep === steps.length - 1 ? "Finish" : "Next",
                        }),
                      ],
                    }),
                  ],
                }
              )
            ),
          });
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTour;
      TxTour.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTour",
        props: {
          steps: { defaultValue: { value: "[]", computed: !1 }, required: !1 },
          current: { defaultValue: { value: "0", computed: !1 }, required: !1 },
          open: { defaultValue: { value: "false", computed: !1 }, required: !1 },
        },
      };
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
    "./src/components/tx-typography/tx-typography.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "variant", "as"],
        TypographyBase = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  color: ",
                ";\n  font-size: ",
                ";\n  font-weight: ",
                ";\n  line-height: ",
                ";\n  text-align: ",
                ";\n  margin: ",
                ";\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n\n  ",
                "\n",
              ]
            )),
          function (props) {
            return props.color || _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textPrimary;
          },
          function (props) {
            return props.size || "16px";
          },
          function (props) {
            return props.weight || "400";
          },
          function (props) {
            return props.lineHeight || "1.5";
          },
          function (props) {
            return props.align || "left";
          },
          function (props) {
            return props.margin || "0";
          },
          function (props) {
            return "h1" === props.variant && "\n    font-size: 48px;\n    font-weight: 700;\n    line-height: 1.2;\n  ";
          },
          function (props) {
            return "h2" === props.variant && "\n    font-size: 36px;\n    font-weight: 700;\n    line-height: 1.2;\n  ";
          },
          function (props) {
            return "h3" === props.variant && "\n    font-size: 28px;\n    font-weight: 600;\n    line-height: 1.3;\n  ";
          },
          function (props) {
            return "h4" === props.variant && "\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.3;\n  ";
          },
          function (props) {
            return (
              "body" === props.variant && "\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n  "
            );
          },
          function (props) {
            return (
              "caption" === props.variant &&
              "\n    font-size: 14px;\n    color: ".concat(
                _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary,
                ";\n  "
              )
            );
          },
          function (props) {
            return (
              props.ellipsis && "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "
            );
          }
        ),
        TxTypography = function TxTypography(_ref) {
          var children = _ref.children,
            variant = _ref.variant,
            as = _ref.as,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            ),
            tag = as || (variant && variant.startsWith("h") ? variant : "div");
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            TypographyBase,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                { variant, as: tag },
                props
              ),
              {},
              { children }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxTypography;
      TxTypography.__docgenInfo = { description: "", methods: [], displayName: "TxTypography" };
    },
    "./src/components/tx-upload/tx-upload.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { K: () => TxUpload });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        _templateObject12,
        _templateObject13,
        _templateObject14,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        toConsumableArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
        regeneratorRuntime = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
        asyncToGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
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
        UploadWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(["\n  display: inline-block;\n  width: ", ";\n"])),
          function (props) {
            return "picture-card" === props.listType ? "auto" : "100%";
          }
        ),
        UploadArea = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: ",
              ";\n  width: ",
              ";\n  height: ",
              ";\n  padding: ",
              ";\n  border: 2px dashed ",
              ";\n  border-radius: 8px;\n  background-color: ",
              ";\n  cursor: ",
              ";\n  transition: all 0.3s ease;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: ",
              ";\n\n  &:hover {\n    border-color: ",
              ";\n    background-color: ",
              ";\n  }\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? "inline-flex" : "block";
          },
          function (props) {
            return "picture-card" === props.listType ? "104px" : "100%";
          },
          function (props) {
            return "picture-card" === props.listType ? "104px" : "auto";
          },
          function (props) {
            return "picture-card" === props.listType ? "8px" : "16px";
          },
          function (props) {
            return props.isDragging ? colors.A.primary[500] : colors.A.borderDefault;
          },
          function (props) {
            return props.isDragging ? colors.A.primary[50] : colors.A.bgWhite;
          },
          function (props) {
            return props.disabled ? "not-allowed" : "pointer";
          },
          function (props) {
            return props.disabled ? 0.5 : 1;
          },
          function (props) {
            return props.disabled ? colors.A.borderDefault : colors.A.primary[500];
          },
          function (props) {
            return props.disabled ? colors.A.bgWhite : colors.A.primary[50];
          }
        ),
        UploadInput = styled_components_browser_esm.Ay.input(
          _templateObject3 || (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  display: none;\n"]))
        ),
        UploadIcon = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: ",
              ";\n  color: ",
              ";\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: ",
              ";\n    height: ",
              ";\n  }\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? "24px" : "32px";
          },
          colors.A.primary[500],
          function (props) {
            return "picture-card" === props.listType ? "24px" : "32px";
          },
          function (props) {
            return "picture-card" === props.listType ? "24px" : "32px";
          }
        ),
        UploadText = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: ",
              ";\n  color: ",
              ";\n  text-align: center;\n  font-weight: 400;\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? "12px" : "14px";
          },
          colors.A.textPrimary
        ),
        UploadHint = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 12px;\n  color: ",
              ";\n  margin-top: 4px;\n  text-align: center;\n",
            ])),
          colors.A.textSecondary
        ),
        FileList = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  margin-top: ",
              ";\n  display: ",
              ";\n  flex-wrap: wrap;\n  gap: 8px;\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? "0" : "16px";
          },
          function (props) {
            return "picture-card" === props.listType ? "inline-flex" : "block";
          }
        ),
        FileItem = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  display: ",
              ";\n  align-items: center;\n  padding: ",
              ";\n  background-color: ",
              ";\n  border-radius: 6px;\n  margin-bottom: ",
              ";\n  width: ",
              ";\n  height: ",
              ";\n  border: ",
              ";\n  position: relative;\n  overflow: hidden;\n\n  &:hover .file-actions {\n    opacity: 1;\n  }\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? "inline-flex" : "flex";
          },
          function (props) {
            return "picture-card" === props.listType ? "0" : "8px 12px";
          },
          function (props) {
            return "picture-card" === props.listType ? "transparent" : colors.A.bgFillLight;
          },
          function (props) {
            return "picture-card" === props.listType ? "0" : "8px";
          },
          function (props) {
            return "picture-card" === props.listType ? "104px" : "100%";
          },
          function (props) {
            return "picture-card" === props.listType ? "104px" : "auto";
          },
          function (props) {
            return "picture-card" === props.listType ? "1px solid ".concat(colors.A.borderDefault) : "none";
          }
        ),
        FileIcon = styled_components_browser_esm.Ay.div(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  margin-right: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? "100%" : "20px";
          },
          function (props) {
            return "picture-card" === props.listType ? "100%" : "20px";
          },
          function (props) {
            return "picture-card" === props.listType ? "0" : "8px";
          },
          colors.A.primary[500]
        ),
        FileName = styled_components_browser_esm.Ay.span(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  flex: 1;\n  font-size: 14px;\n  color: ",
              ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n",
            ])),
          colors.A.textPrimary
        ),
        FileActions = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  display: flex;\n  gap: 8px;\n  opacity: ",
              ";\n  transition: opacity 0.3s ease;\n  position: ",
              ";\n  top: ",
              ";\n  left: ",
              ";\n  transform: ",
              ";\n  background-color: ",
              ";\n  padding: ",
              ";\n  border-radius: ",
              ";\n",
            ])),
          function (props) {
            return "picture-card" === props.listType ? 0 : 1;
          },
          function (props) {
            return "picture-card" === props.listType ? "absolute" : "relative";
          },
          function (props) {
            return "picture-card" === props.listType ? "50%" : "auto";
          },
          function (props) {
            return "picture-card" === props.listType ? "50%" : "auto";
          },
          function (props) {
            return "picture-card" === props.listType ? "translate(-50%, -50%)" : "none";
          },
          function (props) {
            return "picture-card" === props.listType ? "rgba(0, 0, 0, 0.5)" : "transparent";
          },
          function (props) {
            return "picture-card" === props.listType ? "8px 12px" : "0";
          },
          function (props) {
            return "picture-card" === props.listType ? "4px" : "0";
          }
        ),
        FileAction = styled_components_browser_esm.Ay.button(
          _templateObject12 ||
            (_templateObject12 = (0, taggedTemplateLiteral.A)([
              "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
              ";\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: ",
              ";\n    transform: scale(1.1);\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
            ])),
          function (props) {
            return "picture-card" === props.listType
              ? "white"
              : props.danger
              ? colors.A.danger[500]
              : colors.A.textSecondary;
          },
          function (props) {
            return "picture-card" === props.listType
              ? "white"
              : props.danger
              ? colors.A.danger[600]
              : colors.A.primary[500];
          }
        ),
        UploadProgress = styled_components_browser_esm.Ay.div(
          _templateObject13 ||
            (_templateObject13 = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  height: 4px;\n  background-color: ",
              ";\n  border-radius: 2px;\n  margin-top: 8px;\n  overflow: hidden;\n",
            ])),
          colors.A.bgFillLight
        ),
        UploadProgressBar = styled_components_browser_esm.Ay.div(
          _templateObject14 ||
            (_templateObject14 = (0, taggedTemplateLiteral.A)([
              "\n  height: 100%;\n  background-color: ",
              ";\n  transition: width 0.3s ease;\n  width: ",
              "%;\n",
            ])),
          colors.A.primary[500],
          function (props) {
            return props.percent;
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "accept",
          "multiple",
          "disabled",
          "maxSize",
          "fileList",
          "defaultFileList",
          "listType",
          "showUploadList",
          "children",
          "onChange",
          "onRemove",
          "beforeUpload",
          "customRequest",
          "className",
        ],
        TxUpload = function TxUpload(_ref) {
          var _ref$accept = _ref.accept,
            accept = void 0 === _ref$accept ? "*" : _ref$accept,
            _ref$multiple = _ref.multiple,
            multiple = void 0 !== _ref$multiple && _ref$multiple,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$maxSize = _ref.maxSize,
            maxSize = void 0 === _ref$maxSize ? null : _ref$maxSize,
            _ref$fileList = _ref.fileList,
            fileList = void 0 === _ref$fileList ? [] : _ref$fileList,
            _ref$defaultFileList = _ref.defaultFileList,
            defaultFileList = void 0 === _ref$defaultFileList ? [] : _ref$defaultFileList,
            _ref$listType = _ref.listType,
            listType = void 0 === _ref$listType ? "text" : _ref$listType,
            _ref$showUploadList = _ref.showUploadList,
            showUploadList = void 0 === _ref$showUploadList || _ref$showUploadList,
            children = _ref.children,
            onChange = _ref.onChange,
            onRemove = _ref.onRemove,
            beforeUpload = _ref.beforeUpload,
            customRequest = _ref.customRequest,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            _useState = (0, react.useState)(defaultFileList),
            _useState2 = (0, slicedToArray.A)(_useState, 2),
            files = _useState2[0],
            setFiles = _useState2[1],
            _useState3 = (0, react.useState)(!1),
            _useState4 = (0, slicedToArray.A)(_useState3, 2),
            isDragging = _useState4[0],
            setIsDragging = _useState4[1],
            inputRef = (0, react.useRef)(null),
            currentFiles = fileList.length > 0 ? fileList : files,
            handleFileChange = (function () {
              var _ref2 = (0, asyncToGenerator.A)(
                (0, regeneratorRuntime.A)().mark(function _callee(e) {
                  var selectedFiles;
                  return (0, regeneratorRuntime.A)().wrap(function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!disabled) {
                            _context.next = 2;
                            break;
                          }
                          return _context.abrupt("return");
                        case 2:
                          return (
                            (selectedFiles = Array.from(e.target.files || [])),
                            (_context.next = 5),
                            processFiles(selectedFiles)
                          );
                        case 5:
                          e.target.value = "";
                        case 6:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee);
                })
              );
              return function handleFileChange(_x) {
                return _ref2.apply(this, arguments);
              };
            })(),
            processFiles = (function () {
              var _ref3 = (0, asyncToGenerator.A)(
                (0, regeneratorRuntime.A)().mark(function _callee3(selectedFiles) {
                  var validFiles, newFiles, updatedFiles;
                  return (0, regeneratorRuntime.A)().wrap(function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          if (((validFiles = selectedFiles), !beforeUpload)) {
                            _context3.next = 6;
                            break;
                          }
                          return (
                            (_context3.next = 4),
                            Promise.all(
                              selectedFiles.map(
                                (function () {
                                  var _ref4 = (0, asyncToGenerator.A)(
                                    (0, regeneratorRuntime.A)().mark(function _callee2(file) {
                                      var result;
                                      return (0, regeneratorRuntime.A)().wrap(function _callee2$(_context2) {
                                        for (;;)
                                          switch ((_context2.prev = _context2.next)) {
                                            case 0:
                                              return (_context2.next = 2), beforeUpload(file);
                                            case 2:
                                              return (
                                                (result = _context2.sent),
                                                _context2.abrupt("return", !1 === result ? null : file)
                                              );
                                            case 4:
                                            case "end":
                                              return _context2.stop();
                                          }
                                      }, _callee2);
                                    })
                                  );
                                  return function (_x3) {
                                    return _ref4.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 4:
                          validFiles = (validFiles = _context3.sent).filter(Boolean);
                        case 6:
                          maxSize &&
                            (validFiles = validFiles.filter(function (file) {
                              return file.size <= 1024 * maxSize * 1024;
                            })),
                            (newFiles = validFiles.map(function (file) {
                              return {
                                uid: Date.now() + Math.random(),
                                name: file.name,
                                status: "uploading",
                                percent: 0,
                                originFileObj: file,
                                url: URL.createObjectURL(file),
                              };
                            })),
                            (updatedFiles = multiple
                              ? [].concat((0, toConsumableArray.A)(currentFiles), (0, toConsumableArray.A)(newFiles))
                              : newFiles),
                            0 === fileList.length && setFiles(updatedFiles),
                            onChange && onChange(updatedFiles),
                            customRequest
                              ? newFiles.forEach(function (fileObj) {
                                  customRequest({
                                    file: fileObj.originFileObj,
                                    onProgress: function onProgress(percent) {
                                      updateFileProgress(fileObj.uid, percent);
                                    },
                                    onSuccess: function onSuccess() {
                                      updateFileStatus(fileObj.uid, "done");
                                    },
                                    onError: function onError() {
                                      updateFileStatus(fileObj.uid, "error");
                                    },
                                  });
                                })
                              : newFiles.forEach(function (fileObj) {
                                  simulateUpload(fileObj.uid);
                                });
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  }, _callee3);
                })
              );
              return function processFiles(_x2) {
                return _ref3.apply(this, arguments);
              };
            })(),
            simulateUpload = function simulateUpload(uid) {
              var percent = 0,
                interval = setInterval(function () {
                  updateFileProgress(uid, (percent += 10)),
                    percent >= 100 && (clearInterval(interval), updateFileStatus(uid, "done"));
                }, 200);
            },
            updateFileProgress = function updateFileProgress(uid, percent) {
              var updatedFiles = currentFiles.map(function (file) {
                return file.uid === uid ? (0, objectSpread2.A)((0, objectSpread2.A)({}, file), {}, { percent }) : file;
              });
              0 === fileList.length && setFiles(updatedFiles), onChange && onChange(updatedFiles);
            },
            updateFileStatus = function updateFileStatus(uid, status) {
              var updatedFiles = currentFiles.map(function (file) {
                return file.uid === uid
                  ? (0, objectSpread2.A)(
                      (0, objectSpread2.A)({}, file),
                      {},
                      { status, percent: "done" === status ? 100 : file.percent }
                    )
                  : file;
              });
              0 === fileList.length && setFiles(updatedFiles), onChange && onChange(updatedFiles);
            },
            handleDrop = (function () {
              var _ref5 = (0, asyncToGenerator.A)(
                (0, regeneratorRuntime.A)().mark(function _callee4(e) {
                  var droppedFiles;
                  return (0, regeneratorRuntime.A)().wrap(function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          if ((e.preventDefault(), setIsDragging(!1), disabled)) {
                            _context4.next = 6;
                            break;
                          }
                          return (
                            (droppedFiles = Array.from(e.dataTransfer.files)),
                            (_context4.next = 6),
                            processFiles(droppedFiles)
                          );
                        case 6:
                        case "end":
                          return _context4.stop();
                      }
                  }, _callee4);
                })
              );
              return function handleDrop(_x4) {
                return _ref5.apply(this, arguments);
              };
            })(),
            renderFileIcon = function renderFileIcon(file) {
              return "picture-card" === listType && file.url
                ? (0, jsx_runtime.jsx)("img", { src: file.url, alt: file.name })
                : (0, jsx_runtime.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                      (0, jsx_runtime.jsx)("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }),
                      (0, jsx_runtime.jsx)("polyline", { points: "13 2 13 9 20 9" }),
                    ],
                  });
            };
          return (0, jsx_runtime.jsxs)(UploadWrapper, {
            className,
            listType,
            children: [
              (0, jsx_runtime.jsxs)(UploadArea, {
                onClick: function handleClick() {
                  !disabled && inputRef.current && inputRef.current.click();
                },
                onDragOver: function handleDragOver(e) {
                  e.preventDefault(), disabled || setIsDragging(!0);
                },
                onDragLeave: function handleDragLeave(e) {
                  e.preventDefault(), setIsDragging(!1);
                },
                onDrop: handleDrop,
                disabled,
                isDragging,
                listType,
                children: [
                  (0, jsx_runtime.jsx)(
                    UploadInput,
                    (0, objectSpread2.A)(
                      { ref: inputRef, type: "file", accept, multiple, onChange: handleFileChange, disabled },
                      props
                    )
                  ),
                  children ||
                    (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                      children: [
                        (0, jsx_runtime.jsx)(UploadIcon, {
                          listType,
                          children: (0, jsx_runtime.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              (0, jsx_runtime.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                              (0, jsx_runtime.jsx)("polyline", { points: "17 8 12 3 7 8" }),
                              (0, jsx_runtime.jsx)("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
                            ],
                          }),
                        }),
                        (0, jsx_runtime.jsx)(UploadText, {
                          listType,
                          children: "picture-card" === listType ? "Upload" : "Click or drag file to upload",
                        }),
                        "picture-card" !== listType &&
                          (0, jsx_runtime.jsx)(UploadHint, { children: "Support for a single or bulk upload" }),
                      ],
                    }),
                ],
              }),
              showUploadList &&
                currentFiles.length > 0 &&
                (0, jsx_runtime.jsx)(FileList, {
                  listType,
                  children: currentFiles.map(function (file) {
                    return (0, jsx_runtime.jsxs)(
                      FileItem,
                      {
                        listType,
                        children: [
                          (0, jsx_runtime.jsx)(FileIcon, { listType, children: renderFileIcon(file) }),
                          "picture-card" !== listType && (0, jsx_runtime.jsx)(FileName, { children: file.name }),
                          (0, jsx_runtime.jsxs)(FileActions, {
                            className: "file-actions",
                            listType,
                            children: [
                              "done" === file.status &&
                                "picture-card" === listType &&
                                (0, jsx_runtime.jsx)(FileAction, {
                                  listType,
                                  children: (0, jsx_runtime.jsxs)("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                      (0, jsx_runtime.jsx)("path", {
                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
                                      }),
                                      (0, jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
                                    ],
                                  }),
                                }),
                              (0, jsx_runtime.jsx)(FileAction, {
                                onClick: function onClick() {
                                  return (function handleRemove(file) {
                                    var updatedFiles = currentFiles.filter(function (f) {
                                      return f.uid !== file.uid;
                                    });
                                    0 === fileList.length && setFiles(updatedFiles),
                                      onRemove && onRemove(file),
                                      onChange && onChange(updatedFiles);
                                  })(file);
                                },
                                danger: !0,
                                listType,
                                children: (0, jsx_runtime.jsxs)("svg", {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: [
                                    (0, jsx_runtime.jsx)("polyline", { points: "3 6 5 6 21 6" }),
                                    (0, jsx_runtime.jsx)("path", {
                                      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          "uploading" === file.status &&
                            "picture-card" !== listType &&
                            (0, jsx_runtime.jsx)(UploadProgress, {
                              children: (0, jsx_runtime.jsx)(UploadProgressBar, { percent: file.percent }),
                            }),
                        ],
                      },
                      file.uid
                    );
                  }),
                }),
            ],
          });
        };
      (TxUpload.defaultProps = {
        accept: "*",
        multiple: !1,
        disabled: !1,
        maxSize: null,
        fileList: [],
        defaultFileList: [],
        listType: "text",
        showUploadList: !0,
        children: null,
        onChange: void 0,
        onRemove: void 0,
        beforeUpload: void 0,
        customRequest: void 0,
        className: "",
      }),
        (TxUpload.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxUpload",
          props: {
            accept: {
              defaultValue: { value: '"*"', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
            multiple: {
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
            maxSize: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "number" },
              required: !1,
            },
            fileList: {
              defaultValue: { value: "[]", computed: !1 },
              description: "",
              type: { name: "array" },
              required: !1,
            },
            defaultFileList: {
              defaultValue: { value: "[]", computed: !1 },
              description: "",
              type: { name: "array" },
              required: !1,
            },
            listType: {
              defaultValue: { value: '"text"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"text"', computed: !1 },
                  { value: '"picture"', computed: !1 },
                  { value: '"picture-card"', computed: !1 },
                ],
              },
              required: !1,
            },
            showUploadList: {
              defaultValue: { value: "true", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            onChange: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            onRemove: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            beforeUpload: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "",
              type: { name: "func" },
              required: !1,
            },
            customRequest: {
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
    "./src/components/tx-watermark/tx-watermark.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        _theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/theme/colors.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["text", "fullPage", "zIndex", "angle", "opacity", "color", "fontSize", "children"],
        WatermarkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ["\n  position: relative;\n  display: inline-block;\n"]
            ))
        ),
        WatermarkOverlay = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  position: ",
                ";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: ",
                ";\n  background-image: repeating-linear-gradient(\n    ",
                ",\n    transparent,\n    transparent ",
                ",\n    rgba(0, 0, 0, 0.03) ",
                ",\n    rgba(0, 0, 0, 0.03) ",
                "\n  );\n",
              ]
            )),
          function (props) {
            return props.fullPage ? "fixed" : "absolute";
          },
          function (props) {
            return props.zIndex || 1;
          },
          function (props) {
            return props.angle || "45deg";
          },
          function (props) {
            return props.spacing || "100px";
          },
          function (props) {
            return props.spacing || "100px";
          },
          function (props) {
            return 2 * (props.spacing || 100) + "px";
          }
        ),
        WatermarkText = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(",
                "deg);\n  color: ",
                ";\n  font-size: ",
                ";\n  opacity: ",
                ";\n  font-weight: 600;\n  white-space: nowrap;\n  pointer-events: none;\n",
              ]
            )),
          function (props) {
            return props.angle || "-45";
          },
          function (props) {
            return props.color || _theme_colors__WEBPACK_IMPORTED_MODULE_0__.A.textSecondary;
          },
          function (props) {
            return props.fontSize || "48px";
          },
          function (props) {
            return props.opacity || 0.1;
          }
        ),
        TxWatermark = function TxWatermark(_ref) {
          var _ref$text = _ref.text,
            text = void 0 === _ref$text ? "WATERMARK" : _ref$text,
            _ref$fullPage = _ref.fullPage,
            fullPage = void 0 !== _ref$fullPage && _ref$fullPage,
            _ref$zIndex = _ref.zIndex,
            zIndex = void 0 === _ref$zIndex ? 1 : _ref$zIndex,
            _ref$angle = _ref.angle,
            angle = void 0 === _ref$angle ? -45 : _ref$angle,
            _ref$opacity = _ref.opacity,
            opacity = void 0 === _ref$opacity ? 0.1 : _ref$opacity,
            color = _ref.color,
            fontSize = _ref.fontSize,
            children = _ref.children,
            props = (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            WatermarkContainer,
            (0,
            _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                {},
                props
              ),
              {},
              {
                children: [
                  children,
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WatermarkOverlay, {
                    fullPage,
                    zIndex,
                    angle,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WatermarkText, {
                      angle,
                      color,
                      fontSize,
                      opacity,
                      children: text,
                    }),
                  }),
                ],
              }
            )
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = TxWatermark;
      TxWatermark.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxWatermark",
        props: {
          text: { defaultValue: { value: '"WATERMARK"', computed: !1 }, required: !1 },
          fullPage: { defaultValue: { value: "false", computed: !1 }, required: !1 },
          zIndex: { defaultValue: { value: "1", computed: !1 }, required: !1 },
          angle: { defaultValue: { value: "-45", computed: !1 }, required: !1 },
          opacity: { defaultValue: { value: "0.1", computed: !1 }, required: !1 },
        },
      };
    },
    "./node_modules/react-dom/client.js": (__unused_webpack_module, exports, __webpack_require__) => {
      var m = __webpack_require__("./node_modules/react-dom/index.js");
      (exports.H = m.createRoot), m.hydrateRoot;
    },
  },
]);
