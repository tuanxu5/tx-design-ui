/*! For license information please see stories-TxCopy-stories.e6923621.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [432],
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
    "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function asyncGeneratorStep(n, t, e, r, o, a, c) {
        try {
          var i = n[a](c),
            u = i.value;
        } catch (n) {
          return void e(n);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function _asyncToGenerator(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = n.apply(t, e);
            function _next(n) {
              asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
              asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
          });
        };
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _asyncToGenerator });
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
    "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _regeneratorRuntime });
      var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/typeof.js"
      );
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function define(t, e, r) {
            return (t[e] = r);
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__.A)(h) && n.call(h, "__await")
                ? e.resolve(h.__await).then(
                    function (t) {
                      invoke("next", t, i, a);
                    },
                    function (t) {
                      invoke("throw", t, i, a);
                    }
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return invoke("throw", t, i, a);
                    }
                  );
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function value(t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return (r = r
                ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = s), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (((o = n.done ? s : l), p.arg === y)) continue;
                return { value: p.arg, done: n.done };
              }
              "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"), (r.arg = t), maybeInvokeDelegate(e, r), "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
              y
            );
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                y)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              y);
        }
        function pushTryEntry(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function Context(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                  return (next.value = t), (next.done = !0), next;
                };
              return (i.next = i);
            }
          }
          throw new TypeError((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__.A)(e) + " is not iterable");
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }),
          o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }),
          (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = AsyncIterator),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          defineIteratorMethods(g),
          define(g, u, "Generator"),
          define(g, a, function () {
            return this;
          }),
          define(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function next() {
                for (; r.length; ) {
                  var t = r.pop();
                  if (t in e) return (next.value = t), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (e.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(resetTryEntry),
                !e)
              )
                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(e) {
              if (this.done) throw e;
              var r = this;
              function handle(n, o) {
                return (a.type = "throw"), (a.arg = e), (r.next = n), o && ((r.method = "next"), (r.arg = t)), !!o;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                  var c = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  } else {
                    if (!u) throw Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i ? ((this.method = "next"), (this.next = i.finallyLoc), y) : this.complete(a)
              );
            },
            complete: function complete(t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                y
              );
            },
            finish: function finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
              }
            },
            catch: function _catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    resetTryEntry(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(e, r, n) {
              return (
                (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                y
              );
            },
          }),
          e
        );
      }
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
    "./src/stories/TxCopy.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Compact: () => Compact,
          WithLongText: () => WithLongText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxCopy",
        component: __webpack_require__("./src/components/tx-copy/tx-copy.jsx").A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
      };
      var Basic = { args: { text: "https://example.com/share-link", children: "Copy link" } },
        Compact = { args: { text: "Some text to copy", compact: !0, children: "Copy" } },
        WithLongText = {
          args: {
            text: "This is a very long text that will be copied to clipboard when you click the button",
            children: "Copy text",
          },
        };
      const __namedExportsOrder = ["Basic", "Compact", "WithLongText"];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    text: "https://example.com/share-link",\n    children: "Copy link"\n  }\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (Compact.parameters = {
          ...Compact.parameters,
          docs: {
            ...Compact.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    text: "Some text to copy",\n    compact: true,\n    children: "Copy"\n  }\n}',
              ...Compact.parameters?.docs?.source,
            },
          },
        }),
        (WithLongText.parameters = {
          ...WithLongText.parameters,
          docs: {
            ...WithLongText.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    text: "This is a very long text that will be copied to clipboard when you click the button",\n    children: "Copy text"\n  }\n}',
              ...WithLongText.parameters?.docs?.source,
            },
          },
        });
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
