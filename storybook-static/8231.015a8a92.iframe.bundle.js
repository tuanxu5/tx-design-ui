"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8231],
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
    "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _defineProperty });
      var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
      );
      function _defineProperty(e, r, t) {
        return (
          (r = (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r)) in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
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
    "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _objectSpread2 });
      var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
      );
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var o,
          r,
          i = (function _objectWithoutPropertiesLoose(r, e) {
            if (null == r) return {};
            var t = {};
            for (var n in r)
              if ({}.hasOwnProperty.call(r, n)) {
                if (e.includes(n)) continue;
                t[n] = r[n];
              }
            return t;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (o = s[r]), t.includes(o) || ({}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
        }
        return i;
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _objectWithoutProperties });
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
    "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => toPropertyKey });
      var esm_typeof = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");
      function toPropertyKey(t) {
        var i = (function toPrimitive(t, r) {
          if ("object" != (0, esm_typeof.A)(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != (0, esm_typeof.A)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" == (0, esm_typeof.A)(i) ? i : i + "";
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/typeof.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _typeof(o) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _typeof });
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
    "./src/stories/TxForm.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CompleteForm: () => CompleteForm,
          HorizontalLayout: () => HorizontalLayout,
          WithValidation: () => WithValidation,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_checkbox_tx_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-checkbox/tx-checkbox.jsx"
        ),
        _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/components/tx-form/tx-form.jsx"
        ),
        _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/components/tx-input/tx-input.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxForm",
        component: _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          layout: { control: { type: "select" }, options: ["vertical", "horizontal"] },
          onSubmit: { action: "submitted" },
        },
      };
      var Basic = {
          render: function BasicComponent() {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({ username: "", password: "" }),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState,
                2
              ),
              formData = _useState2[0],
              setFormData = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju,
                {
                  onSubmit: function handleSubmit(e) {
                    console.log("Form submitted:", formData);
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Username",
                        required: !0,
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            placeholder: "Enter username",
                            value: formData.username,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { username: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Password",
                        required: !0,
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            type: "password",
                            placeholder: "Enter password",
                            value: formData.password,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { password: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju.Footer,
                      {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                            { type: "submit", variant: "primary", children: "Submit" }
                          ),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                            { type: "button", children: "Cancel" }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            });
          },
        },
        HorizontalLayout = {
          render: function HorizontalComponent() {
            var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({ username: "", email: "" }),
              _useState4 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState3,
                2
              ),
              formData = _useState4[0],
              setFormData = _useState4[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: { width: "500px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju,
                {
                  layout: "horizontal",
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Username",
                        required: !0,
                        layout: "horizontal",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            placeholder: "Enter username",
                            value: formData.username,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { username: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Email",
                        required: !0,
                        layout: "horizontal",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            type: "email",
                            placeholder: "Enter email",
                            value: formData.email,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { email: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju.Footer,
                      {
                        layout: "horizontal",
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                            { type: "submit", variant: "primary", children: "Submit" }
                          ),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                            { type: "button", children: "Cancel" }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            });
          },
        },
        WithValidation = {
          render: function ValidationComponent() {
            var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({ email: "", password: "" }),
              _useState6 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState5,
                2
              ),
              formData = _useState6[0],
              setFormData = _useState6[1],
              _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
              _useState8 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState7,
                2
              ),
              errors = _useState8[0],
              setErrors = _useState8[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju,
                {
                  onSubmit: function handleSubmit(e) {
                    (function validate() {
                      var newErrors = {};
                      return (
                        formData.email
                          ? /\S+@\S+\.\S+/.test(formData.email) || (newErrors.email = "Email is invalid")
                          : (newErrors.email = "Email is required"),
                        formData.password
                          ? formData.password.length < 6 &&
                            (newErrors.password = "Password must be at least 6 characters")
                          : (newErrors.password = "Password is required"),
                        setErrors(newErrors),
                        0 === Object.keys(newErrors).length
                      );
                    })() && console.log("Form is valid:", formData);
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Email",
                        required: !0,
                        error: errors.email,
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            type: "email",
                            placeholder: "Enter email",
                            value: formData.email,
                            onChange: function onChange(e) {
                              setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { email: e.target.value }
                                )
                              ),
                                errors.email &&
                                  setErrors(
                                    (0,
                                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                      (0,
                                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                        {},
                                        errors
                                      ),
                                      {},
                                      { email: "" }
                                    )
                                  );
                            },
                            status: errors.email ? "error" : "",
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Password",
                        required: !0,
                        error: errors.password,
                        help: !errors.password && "Password must be at least 6 characters",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            type: "password",
                            placeholder: "Enter password",
                            value: formData.password,
                            onChange: function onChange(e) {
                              setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { password: e.target.value }
                                )
                              ),
                                errors.password &&
                                  setErrors(
                                    (0,
                                    _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                      (0,
                                      _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                        {},
                                        errors
                                      ),
                                      {},
                                      { password: "" }
                                    )
                                  );
                            },
                            status: errors.password ? "error" : "",
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju.Footer,
                      {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                          { type: "submit", variant: "primary", children: "Submit" }
                        ),
                      }
                    ),
                  ],
                }
              ),
            });
          },
        },
        CompleteForm = {
          render: function CompleteFormComponent() {
            var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
                name: "",
                email: "",
                phone: "",
                message: "",
                agree: !1,
              }),
              _useState10 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.A)(
                _useState9,
                2
              ),
              formData = _useState10[0],
              setFormData = _useState10[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: { width: "500px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju,
                {
                  onSubmit: function handleSubmit(e) {
                    console.log("Form submitted:", formData);
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Name",
                        required: !0,
                        help: "Please enter your full name",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            placeholder: "John Doe",
                            value: formData.name,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { name: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Email",
                        required: !0,
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            type: "email",
                            placeholder: "john@example.com",
                            value: formData.email,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { email: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Phone",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            placeholder: "+1 234 567 8900",
                            value: formData.phone,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { phone: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        label: "Message",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_input_tx_input__WEBPACK_IMPORTED_MODULE_4__.TxInput,
                          {
                            placeholder: "Enter your message",
                            value: formData.message,
                            onChange: function onChange(e) {
                              return setFormData(
                                (0,
                                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                  (0,
                                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.A)(
                                    {},
                                    formData
                                  ),
                                  {},
                                  { message: e.target.value }
                                )
                              );
                            },
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.m8,
                      {
                        noMargin: !0,
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                          _components_tx_checkbox_tx_checkbox__WEBPACK_IMPORTED_MODULE_2__.TxCheckbox,
                          {
                            checked: formData.agree,
                            onChange: setFormData.agree,
                            children: "I agree to the terms and conditions",
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                      _components_tx_form_tx_form__WEBPACK_IMPORTED_MODULE_3__.ju.Footer,
                      {
                        align: "right",
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                            { type: "button", children: "Cancel" }
                          ),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_1__.TxButton,
                            { type: "submit", variant: "primary", children: "Submit" }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            });
          },
        };
      const __namedExportsOrder = ["Basic", "HorizontalLayout", "WithValidation", "CompleteForm"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: function BasicComponent() {\n    const [formData, setFormData] = useState({\n      username: "",\n      password: ""\n    });\n    const handleSubmit = e => {\n      console.log("Form submitted:", formData);\n    };\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxForm onSubmit={handleSubmit}>\n          <TxFormItem label="Username" required>\n            <TxInput placeholder="Enter username" value={formData.username} onChange={e => setFormData({\n            ...formData,\n            username: e.target.value\n          })} />\n          </TxFormItem>\n          <TxFormItem label="Password" required>\n            <TxInput type="password" placeholder="Enter password" value={formData.password} onChange={e => setFormData({\n            ...formData,\n            password: e.target.value\n          })} />\n          </TxFormItem>\n          <TxForm.Footer>\n            <TxButton type="submit" variant="primary">\n              Submit\n            </TxButton>\n            <TxButton type="button">Cancel</TxButton>\n          </TxForm.Footer>\n        </TxForm>\n      </div>;\n  }\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (HorizontalLayout.parameters = {
          ...HorizontalLayout.parameters,
          docs: {
            ...HorizontalLayout.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function HorizontalComponent() {\n    const [formData, setFormData] = useState({\n      username: "",\n      email: ""\n    });\n    return <div style={{\n      width: "500px"\n    }}>\n        <TxForm layout="horizontal">\n          <TxFormItem label="Username" required layout="horizontal">\n            <TxInput placeholder="Enter username" value={formData.username} onChange={e => setFormData({\n            ...formData,\n            username: e.target.value\n          })} />\n          </TxFormItem>\n          <TxFormItem label="Email" required layout="horizontal">\n            <TxInput type="email" placeholder="Enter email" value={formData.email} onChange={e => setFormData({\n            ...formData,\n            email: e.target.value\n          })} />\n          </TxFormItem>\n          <TxForm.Footer layout="horizontal">\n            <TxButton type="submit" variant="primary">\n              Submit\n            </TxButton>\n            <TxButton type="button">Cancel</TxButton>\n          </TxForm.Footer>\n        </TxForm>\n      </div>;\n  }\n}',
              ...HorizontalLayout.parameters?.docs?.source,
            },
          },
        }),
        (WithValidation.parameters = {
          ...WithValidation.parameters,
          docs: {
            ...WithValidation.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function ValidationComponent() {\n    const [formData, setFormData] = useState({\n      email: "",\n      password: ""\n    });\n    const [errors, setErrors] = useState({});\n    const validate = () => {\n      const newErrors = {};\n      if (!formData.email) {\n        newErrors.email = "Email is required";\n      } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n        newErrors.email = "Email is invalid";\n      }\n      if (!formData.password) {\n        newErrors.password = "Password is required";\n      } else if (formData.password.length < 6) {\n        newErrors.password = "Password must be at least 6 characters";\n      }\n      setErrors(newErrors);\n      return Object.keys(newErrors).length === 0;\n    };\n    const handleSubmit = e => {\n      if (validate()) {\n        console.log("Form is valid:", formData);\n      }\n    };\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxForm onSubmit={handleSubmit}>\n          <TxFormItem label="Email" required error={errors.email}>\n            <TxInput type="email" placeholder="Enter email" value={formData.email} onChange={e => {\n            setFormData({\n              ...formData,\n              email: e.target.value\n            });\n            if (errors.email) setErrors({\n              ...errors,\n              email: ""\n            });\n          }} status={errors.email ? "error" : ""} />\n          </TxFormItem>\n          <TxFormItem label="Password" required error={errors.password} help={!errors.password && "Password must be at least 6 characters"}>\n            <TxInput type="password" placeholder="Enter password" value={formData.password} onChange={e => {\n            setFormData({\n              ...formData,\n              password: e.target.value\n            });\n            if (errors.password) setErrors({\n              ...errors,\n              password: ""\n            });\n          }} status={errors.password ? "error" : ""} />\n          </TxFormItem>\n          <TxForm.Footer>\n            <TxButton type="submit" variant="primary">\n              Submit\n            </TxButton>\n          </TxForm.Footer>\n        </TxForm>\n      </div>;\n  }\n}',
              ...WithValidation.parameters?.docs?.source,
            },
          },
        }),
        (CompleteForm.parameters = {
          ...CompleteForm.parameters,
          docs: {
            ...CompleteForm.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function CompleteFormComponent() {\n    const [formData, setFormData] = useState({\n      name: "",\n      email: "",\n      phone: "",\n      message: "",\n      agree: false\n    });\n    const handleSubmit = e => {\n      console.log("Form submitted:", formData);\n    };\n    return <div style={{\n      width: "500px"\n    }}>\n        <TxForm onSubmit={handleSubmit}>\n          <TxFormItem label="Name" required help="Please enter your full name">\n            <TxInput placeholder="John Doe" value={formData.name} onChange={e => setFormData({\n            ...formData,\n            name: e.target.value\n          })} />\n          </TxFormItem>\n          <TxFormItem label="Email" required>\n            <TxInput type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({\n            ...formData,\n            email: e.target.value\n          })} />\n          </TxFormItem>\n          <TxFormItem label="Phone">\n            <TxInput placeholder="+1 234 567 8900" value={formData.phone} onChange={e => setFormData({\n            ...formData,\n            phone: e.target.value\n          })} />\n          </TxFormItem>\n          <TxFormItem label="Message">\n            <TxInput placeholder="Enter your message" value={formData.message} onChange={e => setFormData({\n            ...formData,\n            message: e.target.value\n          })} />\n          </TxFormItem>\n          <TxFormItem noMargin>\n            <TxCheckbox checked={formData.agree} onChange={setFormData.agree}>\n              I agree to the terms and conditions\n            </TxCheckbox>\n          </TxFormItem>\n          <TxForm.Footer align="right">\n            <TxButton type="button">Cancel</TxButton>\n            <TxButton type="submit" variant="primary">\n              Submit\n            </TxButton>\n          </TxForm.Footer>\n        </TxForm>\n      </div>;\n  }\n}',
              ...CompleteForm.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
