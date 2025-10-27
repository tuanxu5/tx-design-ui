/*! For license information please see stories-TxUpload-stories.d6babf8c.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9712],
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
    "./src/stories/TxUpload.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          CustomAccept: () => CustomAccept,
          CustomChildren: () => CustomChildren,
          DefaultFileList: () => DefaultFileList,
          Disabled: () => Disabled,
          Multiple: () => Multiple,
          PictureCard: () => PictureCard,
          WithMaxSize: () => WithMaxSize,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js"),
        _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-upload/tx-upload.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxUpload",
        component: _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          accept: { control: "text" },
          multiple: { control: "boolean" },
          disabled: { control: "boolean" },
          listType: { control: { type: "select" }, options: ["text", "picture", "picture-card"] },
          onChange: { action: "changed" },
          onRemove: { action: "removed" },
        },
      };
      var Basic = {
          render: function BasicComponent(args) {
            var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
              _useState2 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState,
                2
              ),
              fileList = _useState2[0],
              setFileList = _useState2[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                (0,
                _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                  (0,
                  _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                    {},
                    args
                  ),
                  {},
                  { fileList, onChange: setFileList }
                )
              ),
            });
          },
        },
        DefaultFileList = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                {
                  defaultFileList: [
                    { uid: "1", name: "document.pdf", status: "done", url: "https://example.com/document.pdf" },
                    { uid: "2", name: "image.png", status: "done", url: "https://example.com/image.png" },
                  ],
                }
              ),
            });
          },
        },
        Multiple = {
          render: function MultipleComponent() {
            var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
              _useState4 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState3,
                2
              ),
              fileList = _useState4[0],
              setFileList = _useState4[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                { multiple: !0, fileList, onChange: setFileList }
              ),
            });
          },
        },
        PictureCard = {
          render: function PictureCardComponent() {
            var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
              _useState6 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState5,
                2
              ),
              fileList = _useState6[0],
              setFileList = _useState6[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                { listType: "picture-card", accept: "image/*", multiple: !0, fileList, onChange: setFileList }
              ),
            });
          },
        },
        Disabled = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                { disabled: !0 }
              ),
            });
          },
        },
        CustomAccept = {
          render: function CustomAcceptComponent() {
            var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
              _useState8 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState7,
                2
              ),
              fileList = _useState8[0],
              setFileList = _useState8[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                { accept: "image/*", multiple: !0, fileList, onChange: setFileList }
              ),
            });
          },
        },
        WithMaxSize = {
          render: function WithMaxSizeComponent() {
            var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
              _useState10 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState9,
                2
              ),
              fileList = _useState10[0],
              setFileList = _useState10[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: { width: "400px" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                  { maxSize: 2, fileList, onChange: setFileList }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  style: { marginTop: "8px", fontSize: "12px", color: "#999" },
                  children: "Max file size: 2MB",
                }),
              ],
            });
          },
        },
        CustomChildren = {
          render: function CustomChildrenComponent() {
            var _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
              _useState12 = (0,
              _Users_tuanxu5_tx_design_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                _useState11,
                2
              ),
              fileList = _useState12[0],
              setFileList = _useState12[1];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: { width: "400px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _components_tx_upload_tx_upload__WEBPACK_IMPORTED_MODULE_1__.K,
                {
                  fileList,
                  onChange: setFileList,
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    style: {
                      padding: "20px",
                      border: "2px dashed #00a4db",
                      borderRadius: "8px",
                      textAlign: "center",
                      cursor: "pointer",
                    },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        style: { fontSize: "24px", marginBottom: "8px" },
                        children: "📁",
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        style: { fontSize: "14px", fontWeight: "bold" },
                        children: "Drop files here or click to browse",
                      }),
                    ],
                  }),
                }
              ),
            });
          },
        };
      const __namedExportsOrder = [
        "Basic",
        "DefaultFileList",
        "Multiple",
        "PictureCard",
        "Disabled",
        "CustomAccept",
        "WithMaxSize",
        "CustomChildren",
      ];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: function BasicComponent(args) {\n    const [fileList, setFileList] = useState([]);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxUpload {...args} fileList={fileList} onChange={setFileList} />\n      </div>;\n  }\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (DefaultFileList.parameters = {
          ...DefaultFileList.parameters,
          docs: {
            ...DefaultFileList.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    const defaultFiles = [{\n      uid: "1",\n      name: "document.pdf",\n      status: "done",\n      url: "https://example.com/document.pdf"\n    }, {\n      uid: "2",\n      name: "image.png",\n      status: "done",\n      url: "https://example.com/image.png"\n    }];\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxUpload defaultFileList={defaultFiles} />\n      </div>;\n  }\n}',
              ...DefaultFileList.parameters?.docs?.source,
            },
          },
        }),
        (Multiple.parameters = {
          ...Multiple.parameters,
          docs: {
            ...Multiple.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function MultipleComponent() {\n    const [fileList, setFileList] = useState([]);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxUpload multiple fileList={fileList} onChange={setFileList} />\n      </div>;\n  }\n}',
              ...Multiple.parameters?.docs?.source,
            },
          },
        }),
        (PictureCard.parameters = {
          ...PictureCard.parameters,
          docs: {
            ...PictureCard.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function PictureCardComponent() {\n    const [fileList, setFileList] = useState([]);\n    return <div>\n        <TxUpload listType="picture-card" accept="image/*" multiple fileList={fileList} onChange={setFileList} />\n      </div>;\n  }\n}',
              ...PictureCard.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    width: "400px"\n  }}>\n      <TxUpload disabled />\n    </div>\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (CustomAccept.parameters = {
          ...CustomAccept.parameters,
          docs: {
            ...CustomAccept.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function CustomAcceptComponent() {\n    const [fileList, setFileList] = useState([]);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxUpload accept="image/*" multiple fileList={fileList} onChange={setFileList} />\n      </div>;\n  }\n}',
              ...CustomAccept.parameters?.docs?.source,
            },
          },
        }),
        (WithMaxSize.parameters = {
          ...WithMaxSize.parameters,
          docs: {
            ...WithMaxSize.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function WithMaxSizeComponent() {\n    const [fileList, setFileList] = useState([]);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxUpload maxSize={2} fileList={fileList} onChange={setFileList} />\n        <p style={{\n        marginTop: "8px",\n        fontSize: "12px",\n        color: "#999"\n      }}>Max file size: 2MB</p>\n      </div>;\n  }\n}',
              ...WithMaxSize.parameters?.docs?.source,
            },
          },
        }),
        (CustomChildren.parameters = {
          ...CustomChildren.parameters,
          docs: {
            ...CustomChildren.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: function CustomChildrenComponent() {\n    const [fileList, setFileList] = useState([]);\n    return <div style={{\n      width: "400px"\n    }}>\n        <TxUpload fileList={fileList} onChange={setFileList}>\n          <div style={{\n          padding: "20px",\n          border: "2px dashed #00a4db",\n          borderRadius: "8px",\n          textAlign: "center",\n          cursor: "pointer"\n        }}>\n            <div style={{\n            fontSize: "24px",\n            marginBottom: "8px"\n          }}>📁</div>\n            <div style={{\n            fontSize: "14px",\n            fontWeight: "bold"\n          }}>Drop files here or click to browse</div>\n          </div>\n        </TxUpload>\n      </div>;\n  }\n}',
              ...CustomChildren.parameters?.docs?.source,
            },
          },
        });
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
