function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React$1 = require("react");
var React$1__default = _interopDefault(React$1);
var styled = require("styled-components");
var styled__default = _interopDefault(styled);
var antd = require("antd");
var client = require("react-dom/client");

var styles = { test: "_3ybTi" };

function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
  return t;
}
function _taggedTemplateLiteralLoose(e, t) {
  return t || (t = e.slice(0)), (e.raw = t), e;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (((a = a.type), a)) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment$1 = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function (a) {
  return z(a) === k;
};
var isContextProvider = function (a) {
  return z(a) === h;
};
var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
var isForwardRef = function (a) {
  return z(a) === n;
};
var isFragment = function (a) {
  return z(a) === e;
};
var isLazy = function (a) {
  return z(a) === t;
};
var isMemo = function (a) {
  return z(a) === r;
};
var isPortal = function (a) {
  return z(a) === d;
};
var isProfiler = function (a) {
  return z(a) === g;
};
var isStrictMode = function (a) {
  return z(a) === f;
};
var isSuspense = function (a) {
  return z(a) === p;
};
var isValidElementType = function (a) {
  return (
    "string" === typeof a ||
    "function" === typeof a ||
    a === e ||
    a === m ||
    a === g ||
    a === f ||
    a === p ||
    a === q ||
    ("object" === typeof a &&
      null !== a &&
      (a.$$typeof === t ||
        a.$$typeof === r ||
        a.$$typeof === h ||
        a.$$typeof === k ||
        a.$$typeof === n ||
        a.$$typeof === w ||
        a.$$typeof === x ||
        a.$$typeof === y ||
        a.$$typeof === v))
  );
};
var typeOf = z;

var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment$1,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf,
};

var reactIs_development = createCommonjsModule(function (module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API."
            );
          }
        }

        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});

var reactIs = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative()
  ? Object.assign
  : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};

if (process.env.NODE_ENV !== "production") {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has;

  printWarning = function (text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {
      /**/
    }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== "production") {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error(
              (componentName || "React class") +
                ": " +
                location +
                " type `" +
                typeSpecName +
                "` is invalid; " +
                "it must be a function, usually from the `prop-types` package, but received `" +
                typeof typeSpecs[typeSpecName] +
                "`." +
                "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
            );
            err.name = "Invariant Violation";
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || "React class") +
              ": type specification of " +
              location +
              " `" +
              typeSpecName +
              "` is invalid; the type checker " +
              "function must return `null` or an `Error` but returned a " +
              typeof error +
              ". " +
              "You may have forgotten to pass an argument to the type checker " +
              "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
              "shape all require an argument)."
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : "";

          printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== "production") {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function () {};

if (process.env.NODE_ENV !== "production") {
  printWarning$1 = function (text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn =
      maybeIterable && ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = "<<anonymous>>";

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bigint: createPrimitiveTypeChecker("bigint"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === "object" ? data : {};
    this.stack = "";
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== "production") {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
              "Use `PropTypes.checkPropTypes()` to call them. " +
              "Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ":" + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              "You are manually calling a React.PropTypes validation " +
                "function for the `" +
                propFullName +
                "` prop on `" +
                componentName +
                "`. This is deprecated " +
                "and will throw in the standalone `prop-types` package. " +
                "You may be seeing this warning due to a third-party PropTypes " +
                "library. See https://fb.me/react-warning-dont-call-proptypes " +
                "for details."
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required " +
                ("in `" + componentName + "`, but its value is `null`.")
            );
          }
          return new PropTypeError(
            "The " +
              location +
              " `" +
              propFullName +
              "` is marked as required in " +
              ("`" + componentName + "`, but its value is `undefined`.")
          );
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") +
            ("`" + expectedType + "`."),
          { expectedType: expectedType }
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError(
          "Property `" +
            propFullName +
            "` of component `" +
            componentName +
            "` has invalid PropType notation inside arrayOf."
        );
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
        );
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(
          propValue,
          i,
          componentName,
          location,
          propFullName + "[" + i + "]",
          ReactPropTypesSecret_1
        );
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") +
            ("instance of `" + expectedClassName + "`.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== "production") {
        if (arguments.length > 1) {
          printWarning$1(
            "Invalid arguments supplied to oneOf, expected an array, got " +
              arguments.length +
              " arguments. " +
              "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          );
        } else {
          printWarning$1("Invalid argument supplied to oneOf, expected an array.");
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError(
        "Invalid " +
          location +
          " `" +
          propFullName +
          "` of value `" +
          String(propValue) +
          "` " +
          ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
      );
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError(
          "Property `" +
            propFullName +
            "` of component `" +
            componentName +
            "` has invalid PropType notation inside objectOf."
        );
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
        );
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== "production"
        ? printWarning$1("Invalid argument supplied to oneOfType, expected an instance of array.")
        : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning$1(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
            "received " +
            getPostfixForTypeWarning(checker) +
            " at index " +
            i +
            "."
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, "expectedType")) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage =
        expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
      return new PropTypeError(
        "Invalid " +
          location +
          " `" +
          propFullName +
          "` supplied to " +
          ("`" + componentName + "`" + expectedTypesMessage + ".")
      );
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`, expected a ReactNode.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || "React class") +
        ": " +
        location +
        " type `" +
        propFullName +
        "." +
        key +
        "` is invalid; " +
        "it must be a function, usually from the `prop-types` package, but received `" +
        type +
        "`."
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type `" +
            propType +
            "` " +
            ("supplied to `" + componentName + "`, expected `object`.")
        );
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type `" +
            propType +
            "` " +
            ("supplied to `" + componentName + "`, expected `object`.")
        );
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` key `" +
              key +
              "` supplied to `" +
              componentName +
              "`." +
              "\nBad object: " +
              JSON.stringify(props[propName], null, "  ") +
              "\nValid keys: " +
              JSON.stringify(Object.keys(shapeTypes), null, "  ")
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case "array":
      case "object":
        return "an " + type;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
        "Use PropTypes.checkPropTypes() to call them. " +
        "Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== "production") {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

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
var theme = {
  colors: colors,
  button: {
    primary: {
      bg: colors.primary,
      color: colors.textWhite,
      border: colors.primaryBorder,
      hover: {
        opacity: 0.8,
        shadow: "0px 0px 8px 2px " + colors.primaryLight,
      },
    },
    secondary: {
      bg: colors.bgWhite,
      color: colors.primary,
      border: colors.primary,
      hover: {
        bg: colors.primary,
        color: colors.textWhite,
      },
    },
    danger: {
      bg: colors.danger,
      color: colors.textWhite,
      border: colors.danger,
      hover: {
        shadow: "0px 0px 8px 2px " + colors.dangerShadow,
      },
    },
    disabled: {
      bg: colors.bgDisabled,
      color: colors.textDisabled,
      border: colors.borderDisabled,
    },
  },
  input: {
    default: {
      bg: "transparent",
      color: colors.textPrimary,
      border: colors.borderLight,
      placeholder: colors.placeholder,
    },
    fill: {
      bg: colors.bgFill,
    },
    disabled: {
      bg: colors.bgFillLight,
      color: colors.textDisabled,
    },
    status: {
      success: colors.success,
      warning: colors.warning,
      error: colors.danger,
      info: colors.info,
    },
  },
  checkbox: {
    default: {
      bg: colors.bgWhite,
      border: colors.borderDefault,
      checked: {
        bg: colors.primary,
        border: colors.primary,
      },
      hover: {
        border: colors.borderHover,
      },
    },
    danger: {
      checked: {
        bg: colors.danger,
        border: colors.danger,
      },
    },
    disabled: {
      bg: colors.bgFillLight,
      bgChecked: colors.borderDefault,
      border: colors.borderDefault,
    },
  },
};

var _templateObject, _templateObject2;
var StyledAnchorWrapper = styled__default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteralLoose([
      '\n  position: relative;\n  padding-left: 16px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
      ";\n  }\n",
    ])),
  colors.borderLight
);
var StyledAnchorLink = styled__default.a(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteralLoose([
      "\n  display: block;\n  padding: 4px 0;\n  color: ",
      ";\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  position: relative;\n\n  &:hover {\n    color: ",
      ";\n  }\n\n  ",
      "\n",
    ])),
  function (props) {
    return props.active ? colors.primary : colors.textSecondary;
  },
  colors.primary,
  function (props) {
    return (
      props.active &&
      '\n    &::before {\n      content: "";\n      position: absolute;\n      left: -16px;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 2px;\n      height: 16px;\n      background-color: ' +
        colors.primary +
        ";\n    }\n  "
    );
  }
);

var _excluded = ["items", "offsetTop"];
var TxAnchor = function TxAnchor(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$offsetTop = _ref.offsetTop,
    offsetTop = _ref$offsetTop === void 0 ? 0 : _ref$offsetTop,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = React$1.useState(""),
    activeKey = _useState[0],
    setActiveKey = _useState[1];
  React$1.useEffect(
    function () {
      var handleScroll = function handleScroll() {
        var scrollPosition = window.scrollY + offsetTop + 10;
        for (var i = items.length - 1; i >= 0; i--) {
          var item = items[i];
          var element = document.getElementById(item.key);
          if (element) {
            var elementTop = element.offsetTop;
            if (scrollPosition >= elementTop) {
              setActiveKey(item.key);
              break;
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [items, offsetTop]
  );
  var handleClick = function handleClick(e, key) {
    e.preventDefault();
    var element = document.getElementById(key);
    if (element) {
      var elementPosition = element.offsetTop - offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveKey(key);
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledAnchorWrapper,
    rest,
    items.map(function (item) {
      return /*#__PURE__*/ React.createElement(
        StyledAnchorLink,
        {
          key: item.key,
          href: "#" + item.key,
          active: activeKey === item.key,
          onClick: function onClick(e) {
            return handleClick(e, item.key);
          },
        },
        item.title
      );
    })
  );
};
TxAnchor.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      title: propTypes.node.isRequired,
    })
  ),
  offsetTop: propTypes.number,
};
TxAnchor.defaultProps = {
  items: [],
  offsetTop: 0,
};

var _excluded$1 = ["shape", "badge", "size", "icon", "color", "url", "alt"],
  _excluded2 = ["children", "max", "size", "shape"];
var TxAvatar = function TxAvatar(_ref) {
  var shape = _ref.shape,
    badge = _ref.badge,
    size = _ref.size,
    icon = _ref.icon,
    color = _ref.color,
    url = _ref.url,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return /*#__PURE__*/ React$1__default.createElement(
    antd.Badge,
    {
      count: !isNaN(badge) ? badge : undefined,
      dot: badge === "dot" && true,
    },
    /*#__PURE__*/ React$1__default.createElement(
      antd.Avatar,
      _extends(
        {
          size: size,
          src:
            url &&
            /*#__PURE__*/ React$1__default.createElement("img", {
              src: url,
              alt: "avatar",
            }),
          style: {
            backgroundColor: color,
          },
          icon: icon && icon,
          shape: shape && shape,
        },
        rest
      )
    )
  );
};
TxAvatar.propTypes = {
  color: propTypes.string,
  url: propTypes.string,
  size: propTypes.oneOfType([propTypes.oneOf(["large", "medium", "small"]), propTypes.number]),
  badge: propTypes.oneOfType([propTypes.oneOf(["dot"]), propTypes.number]),
  shape: propTypes.oneOf(["square", "circle"]),
};
TxAvatar.defaultProps = {
  size: 36,
  shape: "circle",
  color: "#0e0e13",
};
var TxAvatarGroup = function TxAvatarGroup(_ref2) {
  var children = _ref2.children,
    max = _ref2.max,
    size = _ref2.size,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/ React$1__default.createElement(
    antd.Avatar.Group,
    {
      size: size,
      max: {
        count: max,
        style: {
          color: "#0e0e13",
          backgroundColor: "#f4f4f5",
          cursor: "pointer",
        },
        popover: {
          trigger: "hover",
        },
      },
    },
    children === null || children === void 0
      ? void 0
      : children.map(function (item, index) {
          return item;
        })
  );
};
TxAvatarGroup.propTypes = {
  color: propTypes.string,
  url: propTypes.string,
  size: propTypes.oneOfType([propTypes.oneOf(["large", "medium", "small"]), propTypes.number]),
  badge: propTypes.oneOfType([propTypes.oneOf(["dot"]), propTypes.number]),
  shape: propTypes.oneOf(["square", "circle"]),
};
TxAvatarGroup.defaultProps = {
  size: 36,
};
TxAvatar.Group = TxAvatarGroup;

var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5;
var BadgeWrapper = styled__default.span(
  _templateObject$1 ||
    (_templateObject$1 = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n",
    ]))
);
var BadgeContent = styled__default.sup(
  _templateObject2$1 ||
    (_templateObject2$1 = _taggedTemplateLiteralLoose([
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
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.danger[500];
    }
  },
  function (props) {
    return props.dot ? "50%" : "10px";
  },
  function (props) {
    return props.showZero === false && props.count === 0 && "\n    display: none;\n  ";
  },
  function (props) {
    return props.overflowCount && props.count > props.overflowCount && "\n    padding: 0 8px;\n  ";
  }
);
var BadgeStandalone = styled__default.span(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 20px;\n  padding: 0 8px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 20px;\n  color: white;\n  background-color: ",
      ";\n  border-radius: 10px;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n",
    ])),
  function (props) {
    switch (props.status) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.primary[500];
    }
  }
);
var BadgeRibbon = styled__default.div(
  _templateObject4 ||
    (_templateObject4 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  top: 8px;\n  right: ",
      ";\n  left: ",
      ";\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  background-color: ",
      ';\n  border-radius: 2px;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n\n  &::after {\n    content: "";\n    position: absolute;\n    bottom: -8px;\n    ',
      ": 0;\n    width: 8px;\n    height: 8px;\n    background-color: ",
      ";\n    clip-path: polygon(",
      ");\n  }\n",
    ])),
  function (props) {
    return props.placement === "start" ? "auto" : "-8px";
  },
  function (props) {
    return props.placement === "start" ? "-8px" : "auto";
  },
  function (props) {
    switch (props.status) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.primary[500];
    }
  },
  function (props) {
    return props.placement === "start" ? "left" : "right";
  },
  function (props) {
    switch (props.status) {
      case "success":
        return colors.success[700];
      case "error":
        return colors.danger[700];
      case "warning":
        return colors.warning[700];
      case "processing":
        return colors.info[700];
      default:
        return colors.primary[700];
    }
  },
  function (props) {
    return props.placement === "start" ? "0 0, 100% 0, 0 100%" : "0 0, 100% 0, 100% 100%";
  }
);
var RibbonWrapper = styled__default.div(
  _templateObject5 ||
    (_templateObject5 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  overflow: hidden;\n"]))
);

var _excluded$2 = ["count", "dot", "showZero", "overflowCount", "status", "children", "className"],
  _excluded2$1 = ["text", "status", "placement", "children", "className"];
var TxBadge = function TxBadge(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 0 : _ref$count,
    _ref$dot = _ref.dot,
    dot = _ref$dot === void 0 ? false : _ref$dot,
    _ref$showZero = _ref.showZero,
    showZero = _ref$showZero === void 0 ? false : _ref$showZero,
    _ref$overflowCount = _ref.overflowCount,
    overflowCount = _ref$overflowCount === void 0 ? 99 : _ref$overflowCount,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "default" : _ref$status,
    children = _ref.children,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  var displayCount = count > overflowCount ? overflowCount + "+" : count;
  if (!children) {
    return /*#__PURE__*/ React.createElement(
      BadgeStandalone,
      _extends(
        {
          status: status,
          className: className,
        },
        props
      ),
      displayCount
    );
  }
  return /*#__PURE__*/ React.createElement(
    BadgeWrapper,
    _extends(
      {
        className: className,
      },
      props
    ),
    children,
    /*#__PURE__*/ React.createElement(
      BadgeContent,
      {
        dot: dot,
        count: count,
        showZero: showZero,
        overflowCount: overflowCount,
        status: status,
      },
      !dot && displayCount
    )
  );
};
TxBadge.propTypes = {
  count: propTypes.number,
  dot: propTypes.bool,
  showZero: propTypes.bool,
  overflowCount: propTypes.number,
  status: propTypes.oneOf(["success", "error", "warning", "processing", "default"]),
  children: propTypes.node,
  className: propTypes.string,
};
TxBadge.defaultProps = {
  count: 0,
  dot: false,
  showZero: false,
  overflowCount: 99,
  status: "default",
  children: null,
  className: "",
};
var TxBadgeRibbon = function TxBadgeRibbon(_ref2) {
  var text = _ref2.text,
    _ref2$status = _ref2.status,
    status = _ref2$status === void 0 ? "default" : _ref2$status,
    _ref2$placement = _ref2.placement,
    placement = _ref2$placement === void 0 ? "end" : _ref2$placement,
    children = _ref2.children,
    className = _ref2.className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);
  return /*#__PURE__*/ React.createElement(
    RibbonWrapper,
    _extends(
      {
        className: className,
      },
      props
    ),
    children,
    /*#__PURE__*/ React.createElement(
      BadgeRibbon,
      {
        status: status,
        placement: placement,
      },
      text
    )
  );
};
TxBadgeRibbon.propTypes = {
  text: propTypes.node,
  status: propTypes.oneOf(["success", "error", "warning", "processing", "default"]),
  placement: propTypes.oneOf(["start", "end"]),
  children: propTypes.node,
  className: propTypes.string,
};
TxBadgeRibbon.defaultProps = {
  text: "",
  status: "default",
  placement: "end",
  children: null,
  className: "",
};
TxBadge.Ribbon = TxBadgeRibbon;

var _templateObject$2, _templateObject2$2, _templateObject3$1;
var StyledBreadcrumbWrapper = styled__default.nav(
  _templateObject$2 ||
    (_templateObject$2 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n",
    ]))
);
var StyledBreadcrumbItem = styled__default.span(
  _templateObject2$2 ||
    (_templateObject2$2 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: ",
      ";\n\n  a {\n    color: ",
      ";\n    text-decoration: none;\n    transition: color 0.2s ease;\n\n    &:hover {\n      color: ",
      ";\n    }\n  }\n",
    ])),
  function (props) {
    return props.isLast ? colors.textPrimary : colors.textSecondary;
  },
  colors.textSecondary,
  colors.primary
);
var StyledBreadcrumbSeparator = styled__default.span(
  _templateObject3$1 ||
    (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  user-select: none;\n"])),
  colors.textTertiary
);

var _excluded$3 = ["items", "separator"];
var TxBreadcrumb = function TxBreadcrumb(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? "/" : _ref$separator,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return /*#__PURE__*/ React.createElement(
    StyledBreadcrumbWrapper,
    rest,
    items.map(function (item, index) {
      var isLast = index === items.length - 1;
      return /*#__PURE__*/ React.createElement(
        StyledBreadcrumbItem,
        {
          key: item.key || index,
          isLast: isLast,
        },
        item.href
          ? /*#__PURE__*/ React.createElement(
              "a",
              {
                href: item.href,
              },
              item.label
            )
          : /*#__PURE__*/ React.createElement("span", null, item.label),
        !isLast && /*#__PURE__*/ React.createElement(StyledBreadcrumbSeparator, null, separator)
      );
    })
  );
};
TxBreadcrumb.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      label: propTypes.node.isRequired,
      href: propTypes.string,
    })
  ),
  separator: propTypes.node,
};
TxBreadcrumb.defaultProps = {
  items: [],
  separator: "/",
};

var IconAdd = "icon-add~StYSJhaw.svg";

var IconAddressBook = "icon-address-book~EASjzMAe.svg";

var IconAlarmClock = "icon-alarm-clock~cpRRKCte.svg";

var IconAlignCenter = "icon-align-center~bbdrXViM.svg";

var IconAlignJustify = "icon-align-justify~kRqsMVVW.svg";

var IconAlignLeft = "icon-align-left~kGNLyrYN.svg";

var IconAlignRight = "icon-align-right~MMONFtcg.svg";

var IconAmbulance = "icon-ambulance~LOLpEkBv.svg";

var IconAngleDoubleLeft = "icon-angle-double-left~SMfWzkRh.svg";

var IconAngleDoubleRight = "icon-angle-double-right~DkVwpldy.svg";

var IconAngleDoubleSmallLeft = "icon-angle-double-small-left~bfdlvCUO.svg";

var IconAngleDoubleSmallRight = "icon-angle-double-small-right~xuRAdxwC.svg";

var IconAngleDown = "icon-angle-down~HGDalbQO.svg";

var IconAngleLeft = "icon-angle-left~iTgoHtXY.svg";

var IconAngleRight = "icon-angle-right~biMajrFn.svg";

var IconAngleSmallDown = "icon-angle-small-down~bolNLxCn.svg";

var IconAngleSmallLeft = "icon-angle-small-left~cYUUQkAP.svg";

var IconAngleSmallRight = "icon-angle-small-right~JcocMEzS.svg";

var IconAngleSmallUp = "icon-angle-small-up~EGOODgfj.svg";

var IconAngleUp = "icon-angle-up~QWeudtKr.svg";

var IconApple = "icon-apple~NMjvwrIz.svg";

var IconAppsAdd = "icon-apps-add~NrcHqpdz.svg";

var IconAppsDelete = "icon-apps-delete~DGUlqnvZ.svg";

var IconAppsSort = "icon-apps-sort~YBpjlOIR.svg";

var IconApps = "icon-apps~bgnsOWGJ.svg";

var IconArchive = "icon-archive~KFVZsGkQ.svg";

var IconArrowDown = "icon-arrow-down~jXhsEqsC.svg";

var IconArrowFromBottom = "icon-arrow-from-bottom~drmHHrdd.svg";

var IconArrowLeft = "icon-arrow-left~bjCKJXkE.svg";

var IconArrowRight = "icon-arrow-right~ronFaFbf.svg";

var IconArrowSmallDown = "icon-arrow-small-down~bbAquUVN.svg";

var IconArrowSmallLeft = "icon-arrow-small-left~LLGHAVhl.svg";

var IconArrowSmallRight = "icon-arrow-small-right~bglnaekm.svg";

var IconArrowSmallUp = "icon-arrow-small-up~dOvWOgua.svg";

var IconArrowUp = "icon-arrow-up~iMFTLNFF.svg";

var IconAsterik = "icon-asterik~bhlDnWze.svg";

var IconAt = "icon-at~bcnfvWEt.svg";

var IconBackpack = "icon-backpack~WOzfoiwI.svg";

var IconBadge = "icon-badge~FpMNDecj.svg";

var IconBalloons = "icon-balloons~bdEzoONn.svg";

var IconBan = "icon-ban~bpAAzZlr.svg";

var IconBandAid = "icon-band-aid~mRDEtMnS.svg";

var IconBank = "icon-bank~OEKYThpP.svg";

var IconBarberShop = "icon-barber-shop~xrDJnMyK.svg";

var IconBaseball = "icon-baseball~BnBtXlOb.svg";

var IconBasketball = "icon-basketball~bfoOkZqu.svg";

var IconBed = "icon-bed~qEmkkMZr.svg";

var IconBeer = "icon-beer~bflHgBcO.svg";

var IconBellRing = "icon-bell-ring~bhTqPPpi.svg";

var IconBellSchool = "icon-bell-school~cLbEcihD.svg";

var IconBell = "icon-bell~HIrKUYCV.svg";

var IconBike = "icon-bike~jParPDQE.svg";

var IconBilliard = "icon-billiard~YgyESfGV.svg";

var IconBold = "icon-bold~bggJhbth.svg";

var IconBookAlt = "icon-book-alt~CquhUTWw.svg";

var IconBook = "icon-book~zhvfWiEX.svg";

var IconBookmark = "icon-bookmark~bjpsGgTp.svg";

var IconBowling = "icon-bowling~bdNuhabI.svg";

var IconBoxAlt = "icon-box-alt~bakVXZYP.svg";

var IconBox = "icon-box~bjOrUngY.svg";

var IconBreadSlice = "icon-bread-slice~bfxmGPkg.svg";

var IconBriefcase = "icon-briefcase~KtVcaobx.svg";

var IconBroom = "icon-broom~wRQTxVaV.svg";

var IconBrowser = "icon-browser~bflGXXOq.svg";

var IconBrush = "icon-brush~RyJmKqRj.svg";

var IconBug = "icon-bug~DBEyghlj.svg";

var IconBuilding = "icon-building~GmdqUwZD.svg";

var IconBulb = "icon-bulb~RrAiCROk.svg";

var IconButterfly = "icon-butterfly~bDOyIxVW.svg";

var IconCakeBirthday = "icon-cake-birthday~bozdlzIK.svg";

var IconCakeWedding = "icon-cake-wedding~zpnqhDrr.svg";

var IconCalculator = "icon-calculator~NeyFdlTs.svg";

var IconCalendar = "icon-calendar~BlLKIsHS.svg";

var IconCallHistory = "icon-call-history~pVBkoxMK.svg";

var IconCallIncoming = "icon-call-incoming~WyqBwLUP.svg";

var IconCallMissed = "icon-call-missed~WDQhUjYU.svg";

var IconCallOutgoing = "icon-call-outgoing~riIJPqKC.svg";

var IconCamera = "icon-camera~kHdjljbi.svg";

var IconCamping = "icon-camping~jFnTqSvU.svg";

var IconCar = "icon-car~TtrKmpWT.svg";

var IconCaretDown = "icon-caret-down~LxZDmtFu.svg";

var IconCaretLeft = "icon-caret-left~XUqHWTgo.svg";

var IconCaretRight = "icon-caret-right~bgUGPYCb.svg";

var IconCaretUp = "icon-caret-up~ZLWMtpQb.svg";

var IconCarrot = "icon-carrot~rwCfiUoL.svg";

var IconChartConnected = "icon-chart-connected~ikuRnbgD.svg";

var IconChartHistogram = "icon-chart-histogram~vIVxyuus.svg";

var IconChartNetwork = "icon-chart-network~bdMvaDfc.svg";

var IconChartPieAlt = "icon-chart-pie-alt~dhOrlgxm.svg";

var IconChartPie = "icon-chart-pie~bntdAGWt.svg";

var IconChartPyramid = "icon-chart-pyramid~bkUyTsWm.svg";

var IconChartSetTheory = "icon-chart-set-theory~IOtfVKKy.svg";

var IconChartTree = "icon-chart-tree~vzXJHrZS.svg";

var IconChatArrowDown = "icon-chat-arrow-down~JsPxkxcb.svg";

var IconChatArrowGrow = "icon-chat-arrow-grow~bkuDZJbl.svg";

var IconCheck = "icon-check~DSrSJWKa.svg";

var IconCheckbox = "icon-checkbox~OuyHuOQe.svg";

var IconCheese = "icon-cheese~bmRHSGpI.svg";

var IconChessPiece = "icon-chess-piece~bnGYQTsX.svg";

var IconChildHead = "icon-child-head~jugTIovB.svg";

var IconCircleSmall = "icon-circle-small~bkOckcEX.svg";

var IconCircle = "icon-circle~TKeTfonS.svg";

var IconClip = "icon-clip~xvjdUJkL.svg";

var IconClock = "icon-clock~JDwAmkux.svg";

var IconCloudCheck = "icon-cloud-check~eBNpDGZY.svg";

var IconCloudDisabled = "icon-cloud-disabled~gfYDwSJI.svg";

var IconCloudDownload = "icon-cloud-download~CjihMFYF.svg";

var IconCloudShare = "icon-cloud-share~berGCEgp.svg";

var IconCloudUpload = "icon-cloud-upload~LhZwrzqc.svg";

var IconCloud = "icon-cloud~bkkxCWJK.svg";

var IconClouds = "icon-clouds~mulsRYKC.svg";

var IconCocktail = "icon-cocktail~GKxKxHKS.svg";

var IconCoffee = "icon-coffee~bmXQxNIw.svg";

var IconCommentAlt = "icon-comment-alt~pxCYHgvv.svg";

var IconCommentCheck = "icon-comment-check~bncxGxOi.svg";

var IconCommentHeart = "icon-comment-heart~EJAVKVHT.svg";

var IconCommentInfo = "icon-comment-info~beKVCCLm.svg";

var IconCommentUser = "icon-comment-user~bgluVzUp.svg";

var IconComment = "icon-comment~xkJctnhH.svg";

var IconComments = "icon-comments~joMyoAbO.svg";

var IconCompressAlt = "icon-compress-alt~LcfAbOjN.svg";

var IconCompress = "icon-compress~bnRDRTEG.svg";

var IconComputer = "icon-computer~qbKSmoEc.svg";

var IconConfetti = "icon-confetti~kGzRhOEl.svg";

var IconCookie = "icon-cookie~bnBXRArf.svg";

var IconCopyAlt = "icon-copy-alt~biOxHRdj.svg";

var IconCopy = "icon-copy~bjwAcFzC.svg";

var IconCopyright = "icon-copyright~CQHkHRPM.svg";

var IconCow = "icon-cow~bjFBHFDV.svg";

var IconCream = "icon-cream~biWdgXCb.svg";

var IconCreditCard = "icon-credit-card~SHeXlZRu.svg";

var IconCroissant = "icon-croissant~uwruMKvq.svg";

var IconCrossCircle = "icon-cross-circle~UIkxFlyi.svg";

var IconCrossSmall = "icon-cross-small~HzvnrUGp.svg";

var IconCross = "icon-cross~bhoYyljk.svg";

var IconCrown = "icon-crown~ktKwwAKA.svg";

var IconCube = "icon-cube~WKekzQzM.svg";

var IconCupcake = "icon-cupcake~dLQwjHab.svg";

var IconCursorFinger = "icon-cursor-finger~lQRZlwQl.svg";

var IconCursorPlus = "icon-cursor-plus~RMGNwxQL.svg";

var IconCursorTextAlt = "icon-cursor-text-alt~bbOoWFNH.svg";

var IconCursorText = "icon-cursor-text~KjbYbKYq.svg";

var IconCursor = "icon-cursor~kkHBUzQK.svg";

var IconDart = "icon-dart~KmIUYsFj.svg";

var IconDashboard = "icon-dashboard~khyqlqjW.svg";

var IconDataTransfer = "icon-data-transfer~BOdgSFwy.svg";

var IconDatabase = "icon-database~bgAAMyMT.svg";

var IconDelete = "icon-delete~KYhJRAyq.svg";

var IconDiamond = "icon-diamond~SKzVLRoN.svg";

var IconDice = "icon-dice~YphjLqSN.svg";

var IconDiploma = "icon-diploma~ZCWTLFTw.svg";

var IconDiscoBall = "icon-disco-ball~zxbflzKz.svg";

var IconDisk = "icon-disk~NDPwLqWG.svg";

var IconDoctor = "icon-doctor~YZdcziPG.svg";

var IconDocumentSigned = "icon-document-signed~bjIaAcDO.svg";

var IconDocument = "icon-document~PglTfQeN.svg";

var IconDollar = "icon-dollar~QesgNXsv.svg";

var IconDownload = "icon-download~xtcnEqZc.svg";

var IconDrinkAlt = "icon-drink-alt~bQSyFFGO.svg";

var IconDrumstick = "icon-drumstick~qjNINMAu.svg";

var IconDuplicate = "icon-duplicate~bogfiPbu.svg";

var IconELearning = "icon-e-learning~LEFLWgWk.svg";

var IconEarnings = "icon-earnings~pRHoxQGZ.svg";

var IconEditAlt = "icon-edit-alt~puzVRYis.svg";

var IconEdit = "icon-edit~DTYDLBrv.svg";

var IconEnvelopeBan = "icon-envelope-ban~cywkSNvH.svg";

var IconEnvelopeDownload = "icon-envelope-download~WpimsMLX.svg";

var IconEnvelopeMarker = "icon-envelope-marker~MGqHJDft.svg";

var IconEnvelopeOpen = "icon-envelope-open~bcJycLOQ.svg";

var IconEnvelopePlus = "icon-envelope-plus~bnvfrvXg.svg";

var IconEnvelope = "icon-envelope~QFNUGOHZ.svg";

var IconEuro = "icon-euro~lFXYUkaX.svg";

var IconExclamation = "icon-exclamation~blidcAtU.svg";

var IconExpand = "icon-expand~bqatWpYq.svg";

var IconEyeCrossed = "icon-eye-crossed~DAsnuthB.svg";

var IconEyeDropper = "icon-eye-dropper~EeMdXUZa.svg";

var IconEye = "icon-eye~WVeHknCW.svg";

var IconFeather = "icon-feather~guCupDeO.svg";

var IconFerrisWheel = "icon-ferris-wheel~ujqtwRcx.svg";

var IconFileAdd = "icon-file-add~ESFLGdAa.svg";

var IconFileAi = "icon-file-ai~HekXZlEV.svg";

var IconFileCheck = "icon-file-check~FPYrnGTr.svg";

var IconFileDelete = "icon-file-delete~DYBeQvhJ.svg";

var IconFileEps = "icon-file-eps~fXJgJQkn.svg";

var IconFileGif = "icon-file-gif~bmImnojj.svg";

var IconFileMusic = "icon-file-music~XsjMCbaX.svg";

var IconFilePsd = "icon-file-psd~KMZMreow.svg";

var IconFile = "icon-file~cPymcTSY.svg";

var IconFill = "icon-fill~bjsZRIyO.svg";

var IconFilm = "icon-film~bnGpmlag.svg";

var IconFilter = "icon-filter~omughVPt.svg";

var IconFingerprint = "icon-fingerprint~begeNVBQ.svg";

var IconFish = "icon-fish~kAjBSgSE.svg";

var IconFlag = "icon-flag~EouYgHud.svg";

var IconFlame = "icon-flame~baKWSIKk.svg";

var IconFlipHorizontal = "icon-flip-horizontal~YEgDWadA.svg";

var IconFlowerBouquet = "icon-flower-bouquet~CCRCTKfQ.svg";

var IconFlowerTulip = "icon-flower-tulip~JepgRZjY.svg";

var IconFlower = "icon-flower~bnlDYpZi.svg";

var IconFolderAdd = "icon-folder-add~bkzvcoEl.svg";

var IconFolder = "icon-folder~blAPrGCq.svg";

var IconFollowing = "icon-following~bgKWNhDj.svg";

var IconFootball = "icon-football~VxyJmtzD.svg";

var IconForm = "icon-form~TkkBqrWu.svg";

var IconForward = "icon-forward~TplYFcBh.svg";

var IconFox = "icon-fox~WlmdBEZP.svg";

var IconFrown = "icon-frown~VJzPbrJJ.svg";

var IconFtp = "icon-ftp~nTCrJIlm.svg";

var IconGallery = "icon-gallery~bjAcUAUp.svg";

var IconGamepad = "icon-gamepad~bixbYzjH.svg";

var IconGasPump = "icon-gas-pump~pCqlLrMX.svg";

var IconGem = "icon-gem~hecDchwB.svg";

var IconGift = "icon-gift~bgldMMDq.svg";

var IconGlassCheers = "icon-glass-cheers~MDsGMJog.svg";

var IconGlasses = "icon-glasses~bjLwgibT.svg";

var IconGlobeAlt = "icon-globe-alt~EkKwDCxC.svg";

var IconGlobe = "icon-globe~NDcWGxyF.svg";

var IconGolf = "icon-golf~VtwHDBHT.svg";

var IconGraduationCap = "icon-graduation-cap~SnLoAgrh.svg";

var IconGraphicTablet = "icon-graphic-tablet~DkNLEtFn.svg";

var IconGridAlt = "icon-grid-alt~GBRWFAro.svg";

var IconGrid = "icon-grid~zxZIPGIU.svg";

var IconGuitar = "icon-guitar~biBfISOT.svg";

var IconGym = "icon-gym~idjmYUQu.svg";

var IconHamburger = "icon-hamburger~xyJWvCBH.svg";

var IconHandHoldingHeart = "icon-hand-holding-heart~gnrNfbcr.svg";

var IconHastag = "icon-hastag~zYsMjIWf.svg";

var IconHatBirthday = "icon-hat-birthday~lbHORNpr.svg";

var IconHeadSideThinking = "icon-head-side-thinking~bhfkVWxb.svg";

var IconHeadphones = "icon-headphones~dmxKrGSh.svg";

var IconHeadset = "icon-headset~iOigJvFE.svg";

var IconHeartArrow = "icon-heart-arrow~FTSJbbHW.svg";

var IconHeart = "icon-heart~bXSvCfts.svg";

var IconHomeLocationAlt = "icon-home-location-alt~YgvwNlmD.svg";

var IconHomeLocation = "icon-home-location~WdprzoPw.svg";

var IconHome = "icon-home~WupgsuaO.svg";

var IconHourglassEnd = "icon-hourglass-end~GoIOwLty.svg";

var IconHourglass = "icon-hourglass~bneMeKBu.svg";

var IconIceCream = "icon-ice-cream~bdYqTIcj.svg";

var IconIceSkate = "icon-ice-skate~wuAHoQPV.svg";

var IconIdBadge = "icon-id-badge~boSUnLXa.svg";

var IconInbox = "icon-inbox~bbcoqgLn.svg";

var IconIncognito = "icon-incognito~lCoVORyv.svg";

var IconIndent = "icon-indent~bmzrImlO.svg";

var IconInfinity = "icon-infinity~NTemeARs.svg";

var IconInfo = "icon-info~bgOEfFNS.svg";

var IconInteractive = "icon-interactive~JULyyNsR.svg";

var IconInterlining = "icon-interlining~bkwtbztG.svg";

var IconInterrogation = "icon-interrogation~xakmXYEl.svg";

var IconItalic = "icon-italic~JzyuVweo.svg";

var IconJpg = "icon-jpg~oeZBlDTK.svg";

var IconKey = "icon-key~bmAhIglS.svg";

var IconKeyboard = "icon-keyboard~boFCENpo.svg";

var IconKite = "icon-kite~uotLUpXT.svg";

var IconLabel = "icon-label~EpwlFYee.svg";

var IconLaptop = "icon-laptop~uuQAIJJy.svg";

var IconLasso = "icon-lasso~QyjMZaNo.svg";

var IconLaugh = "icon-laugh~XyfYdMlz.svg";

var IconLayers = "icon-layers~bgUydRtn.svg";

var IconLayoutFluid = "icon-layout-fluid~XNsEIkBG.svg";

var IconLeaf = "icon-leaf~nQdclghH.svg";

var IconLetterCase = "icon-letter-case~jfnqvVdU.svg";

var IconLifeRing = "icon-life-ring~bwadCPQY.svg";

var IconLineWidth = "icon-line-width~RRLpGRJj.svg";

var IconLink = "icon-link~vyfXajMe.svg";

var IconLipstick = "icon-lipstick~bozSBhVY.svg";

var IconListCheck = "icon-list-check~TaPJPbTT.svg";

var IconList = "icon-list~bayMrfuM.svg";

var IconLocationAlt = "icon-location-alt~XSdhtqJA.svg";

var IconLockAlt = "icon-lock-alt~DMcvdjYk.svg";

var IconLock = "icon-lock~mNUdqRnF.svg";

var IconLuggageRolling = "icon-luggage-rolling~qGOUUVIa.svg";

var IconMagicWand = "icon-magic-wand~SMKeKINL.svg";

var IconMakeupBrush = "icon-makeup-brush~dRGVHBCF.svg";

var IconManHead = "icon-man-head~XEAbdFVU.svg";

var IconMapMarkerCross = "icon-map-marker-cross~biLMZkyG.svg";

var IconMapMarkerHome = "icon-map-marker-home~KhtWhTec.svg";

var IconMapMarkerMinus = "icon-map-marker-minus~bpXzepFe.svg";

var IconMapMarkerPlus = "icon-map-marker-plus~LZSjVvtT.svg";

var IconMapMarker = "icon-map-marker~bnVvrCmR.svg";

var IconMap = "icon-map~wfXHzJuD.svg";

var IconMarkerTime = "icon-marker-time~NSprkfAI.svg";

var IconMarker = "icon-marker~bpFGFIPa.svg";

var IconMarsDouble = "icon-mars-double~biWKNLxF.svg";

var IconMars = "icon-mars~bnRXVoxm.svg";

var IconMaskCarnival = "icon-mask-carnival~rGiRgvZD.svg";

var IconMedicine = "icon-medicine~BCAXhWsP.svg";

var IconMegaphone = "icon-megaphone~xyalcRkA.svg";

var IconMeh = "icon-meh~zbPynXBX.svg";

var IconMenuBurger = "icon-menu-burger~gBQTdJPF.svg";

var IconMenuDotsVertical = "icon-menu-dots-vertical~orZxquml.svg";

var IconMenuDots = "icon-menu-dots~qpFMPGBA.svg";

var IconMicrophoneAlt = "icon-microphone-alt~xetZcTxl.svg";

var IconMicrophone = "icon-microphone~uefIzTAP.svg";

var IconMinusSmall = "icon-minus-small~FLwTymgJ.svg";

var IconMinus = "icon-minus~gawlLxry.svg";

var IconMobile = "icon-mobile~bncHISXd.svg";

var IconModeLandscape = "icon-mode-landscape~sJlxhdag.svg";

var IconModePortrait = "icon-mode-portrait~bmjQjzMB.svg";

var IconMoney = "icon-money~bpxIgPYq.svg";

var IconMoon = "icon-moon~fXDMdebc.svg";

var IconMountains = "icon-mountains~RjQfOEKj.svg";

var IconMouse = "icon-mouse~sJMpqSvJ.svg";

var IconMugAlt = "icon-mug-alt~FBOWhErp.svg";

var IconMusicAlt = "icon-music-alt~YMwhVSHB.svg";

var IconMusic = "icon-music~CbXkVsYV.svg";

var IconNavigation = "icon-navigation~EdXAGNte.svg";

var IconNetworkCloud = "icon-network-cloud~bfnJQxCZ.svg";

var IconNetwork = "icon-network~dLZQsvvf.svg";

var IconNotebook = "icon-notebook~bppMpCID.svg";

var IconOpacity = "icon-opacity~CFIdUUTy.svg";

var IconPackage = "icon-package~JEKpHdVR.svg";

var IconPaintBrush = "icon-paint-brush~QrYlbDIo.svg";

var IconPalette = "icon-palette~bduhSyCY.svg";

var IconPaperPlane = "icon-paper-plane~LUqqIhfl.svg";

var IconPassword = "icon-password~zQACWtjV.svg";

var IconPause = "icon-pause~bctKUwKN.svg";

var IconPaw = "icon-paw~bjNLqrfY.svg";

var IconPencil = "icon-pencil~UFtpbbFO.svg";

var IconPharmacy = "icon-pharmacy~bhRlnVwi.svg";

var IconPhoneCall = "icon-phone-call~eieGpOJu.svg";

var IconPhoneCross = "icon-phone-cross~BsjRgBuP.svg";

var IconPhonePause = "icon-phone-pause~oUzSWtmU.svg";

var IconPhoneSlash = "icon-phone-slash~fPsICQPA.svg";

var IconPhysics = "icon-physics~NPARkymt.svg";

var IconPicture = "icon-picture~bhznHYqv.svg";

var IconPingPong = "icon-ping-pong~bgIsCjTi.svg";

var IconPizzaSlice = "icon-pizza-slice~dSQKeFHC.svg";

var IconPlane = "icon-plane~bedEoBkG.svg";

var IconPlayAlt = "icon-play-alt~lFzzNrVK.svg";

var IconPlay = "icon-play~AAoJkdIm.svg";

var IconPlayingCards = "icon-playing-cards~omqJnmHv.svg";

var IconPlusSmall = "icon-plus-small~tasjefed.svg";

var IconPlus = "icon-plus~bcuZtKoY.svg";

var IconPokerChip = "icon-poker-chip~bjpaURwq.svg";

var IconPortrait = "icon-portrait~jFlfbuVg.svg";

var IconPound = "icon-pound~sEkvNoRE.svg";

var IconPower = "icon-power~FMAcgWBU.svg";

var IconPresentation = "icon-presentation~bnTXJFNl.svg";

var IconPrint = "icon-print~VMlpXSzA.svg";

var IconProtractor = "icon-protractor~baugCNzn.svg";

var IconPulse = "icon-pulse~rRTUAHuc.svg";

var IconPyramid = "icon-pyramid~blKdUxJN.svg";

var IconQuoteRight = "icon-quote-right~bxsFCqUX.svg";

var IconRainbow = "icon-rainbow~sSRaFVsX.svg";

var IconRaindrops = "icon-raindrops~QlOvzoOL.svg";

var IconRec = "icon-rec~zENfSuBj.svg";

var IconReceipt = "icon-receipt~zNhZirRJ.svg";

var IconRecordVinyl = "icon-record-vinyl~gXvARCIr.svg";

var IconRectabgleVertical = "icon-rectabgle-vertical~EEdLFTNb.svg";

var IconRectangleHorizontal = "icon-rectangle-horizontal~DwayoAkP.svg";

var IconRectanglePanoramic = "icon-rectangle-panoramic~RptgknqL.svg";

var IconRecycle = "icon-recycle~bcGziHUS.svg";

var IconRedoAlt = "icon-redo-alt~DaJnLMke.svg";

var IconRedo = "icon-redo~bkpXYhYA.svg";

var IconReflect = "icon-reflect~bdjkJRpH.svg";

var IconRefresh = "icon-refresh~fFfTSWuN.svg";

var IconResize = "icon-resize~AyXQRWFC.svg";

var IconResources = "icon-resources~cdxcyMkt.svg";

var IconRewind = "icon-rewind~bbtTzecj.svg";

var IconRhombus = "icon-rhombus~lAvZSahx.svg";

var IconRingsWedding = "icon-rings-wedding~XkkgVjET.svg";

var IconRoad = "icon-road~RKCnvTQo.svg";

var IconRocket = "icon-rocket~bpWDdmqz.svg";

var IconRoomService = "icon-room-service~bhZgiOWG.svg";

var IconRotateRight = "icon-rotate-right~HZCvLMna.svg";

var IconRugby = "icon-rugby~PqZFwUax.svg";

var IconSad = "icon-sad~fjvQHYem.svg";

var IconSalad = "icon-salad~gJYuEIGE.svg";

var IconScale = "icon-scale~IINDYVCD.svg";

var IconSchoolBus = "icon-school-bus~NkEKTqul.svg";

var IconSchool = "icon-school~bfLEuUhW.svg";

var IconScissors = "icon-scissors~bcfnzLhU.svg";

var IconScreen = "icon-screen~WuabVHbh.svg";

var IconSearchAlt = "icon-search-alt~blRCymil.svg";

var IconSearchHeart = "icon-search-heart~ZQxGxYbI.svg";

var IconSearch = "icon-search~beIMEUEo.svg";

var IconSettingsSliders = "icon-settings-sliders~VmjTnOxg.svg";

var IconSettings = "icon-settings~uYfBMFye.svg";

var IconShare = "icon-share~jFPviVsd.svg";

var IconShieldCheck = "icon-shield-check~bbjhaqhz.svg";

var IconShieldExclamation = "icon-shield-exclamation~xarSjfmx.svg";

var IconShieldInterrogation = "icon-shield-interrogation~slkaMYYL.svg";

var IconShieldPlus = "icon-shield-plus~IBTysGNi.svg";

var IconShield = "icon-shield~OhyTamSk.svg";

var IconShipSide = "icon-ship-side~SyIjyfzN.svg";

var IconShip = "icon-ship~bamIcUqo.svg";

var IconShop = "icon-shop~isotvXOw.svg";

var IconShoppingBagAdd = "icon-shopping-bag-add~bozyeltQ.svg";

var IconShoppingBag = "icon-shopping-bag~PabrBeMp.svg";

var IconShoppingCartAdd = "icon-shopping-cart-add~bIsLFBOJ.svg";

var IconShoppingCartCheck = "icon-shopping-cart-check~jUxZfODX.svg";

var IconShoppingCart = "icon-shopping-cart~bjSjbfYe.svg";

var IconShuffle = "icon-shuffle~BArDllhO.svg";

var IconSignInAlt = "icon-sign-in-alt~beprbMry.svg";

var IconSignIn = "icon-sign-in~bdBkBtSj.svg";

var IconSignOutAlt = "icon-sign-out-alt~QtacjRFx.svg";

var IconSignOut = "icon-sign-out~ELgfHxRs.svg";

var IconSignalAlt1 = "icon-signal-alt-1~wEpiUtZW.svg";

var IconSignalAlt2 = "icon-signal-alt-2~jhOIANXj.svg";

var IconSignalAlt = "icon-signal-alt~lPnhUidH.svg";

var IconSkateboard = "icon-skateboard~GmtJhIVf.svg";

var IconSmartphone = "icon-smartphone~fWTiraHZ.svg";

var IconSmileWink = "icon-smile-wink~bkWkAGpm.svg";

var IconSmile = "icon-smile~qcntEAwk.svg";

var IconSnowflake = "icon-snowflake~lmcgljJM.svg";

var IconSoap = "icon-soap~zIckHCeN.svg";

var IconSoup = "icon-soup~biDSrPVf.svg";

var IconSpa = "icon-spa~CHuamxIW.svg";

var IconSpeaker = "icon-speaker~xHwOtUwd.svg";

var IconSphere = "icon-sphere~pkkFQSKI.svg";

var IconSpinnerAlt = "icon-spinner-alt~xzPQZnFa.svg";

var IconSpinner = "icon-spinner~YWkcjZUp.svg";

var IconSquareRoot = "icon-square-root~bbNyYQvv.svg";

var IconSquare = "icon-square~uAyaNZzJ.svg";

var IconStarOctogram = "icon-star-octogram~iUoyFjJm.svg";

var IconStar = "icon-star~OueQKGVS.svg";

var IconStats = "icon-stats~dawVzuwi.svg";

var IconStethoscope = "icon-stethoscope~qgjshRSh.svg";

var IconSticker = "icon-sticker~OeeTMSmy.svg";

var IconStop = "icon-stop~bjQyFeMN.svg";

var IconStopwatch = "icon-stopwatch~Msjrovmr.svg";

var IconSubtitles = "icon-subtitles~bdSRuVqd.svg";

var IconSun = "icon-sun~BjEFbOPa.svg";

var IconSunrise = "icon-sunrise~NPXJXvQW.svg";

var IconSurfing = "icon-surfing~bhsWGSIa.svg";

var IconSword = "icon-sword~bipWdxBZ.svg";

var IconSyringe = "icon-syringe~baGNbKPr.svg";

var IconTablet = "icon-tablet~ICyGsRba.svg";

var IconTarget = "icon-target~ilEoYkGv.svg";

var IconTaxi = "icon-taxi~EuCYhupz.svg";

var IconTennis = "icon-tennis~biFhJGqM.svg";

var IconTerrace = "icon-terrace~kEIdBwkN.svg";

var IconTestTube = "icon-test-tube~botriDnF.svg";

var IconTest = "icon-test~eHPBUxtR.svg";

var IconTextCheck = "icon-text-check~tRqklsCe.svg";

var IconText = "icon-text~CElpJQAk.svg";

var IconThermometerHalf = "icon-thermometer-half~AmIrXugh.svg";

var IconThumbsDown = "icon-thumbs-down~bjkFZSVB.svg";

var IconThumbsUp = "icon-thumbs-up~QzrWOQCh.svg";

var IconThumbtack = "icon-thumbtack~bjPlXGAK.svg";

var IconTicket = "icon-ticket~blCqAvOW.svg";

var IconTimeAdd = "icon-time-add~beLsGhfx.svg";

var IconTimeCheck = "icon-time-check~QaQKWQhA.svg";

var IconTimeDelete = "icon-time-delete~nQFoTKKl.svg";

var IconTimeFast = "icon-time-fast~QPlOiwvh.svg";

var IconTimeForwardSixty = "icon-time-forward-sixty~cppYymKx.svg";

var IconTimeForwardTen = "icon-time-forward-ten~oHZWWozB.svg";

var IconTimeForward = "icon-time-forward~WWNUjyMZ.svg";

var IconTimeHalfPast = "icon-time-half-past~RoHamtfb.svg";

var IconTimeOclock = "icon-time-oclock~BvxhwQyr.svg";

var IconTimePast = "icon-time-past~UnxsyxyL.svg";

var IconTimeQuarterPast = "icon-time-quarter-past~boHHwKCK.svg";

var IconTimeQuarterTo = "icon-time-quarter-to~lGijPGes.svg";

var IconTimeTwentyFour = "icon-time-twenty-four~oGfrHETR.svg";

var IconToolCrop = "icon-tool-crop~tDOIjAgl.svg";

var IconToolMarquee = "icon-tool-marquee~PvDbLrLI.svg";

var IconTooth = "icon-tooth~baEhuMKl.svg";

var IconTornado = "icon-tornado~zAgJbidf.svg";

var IconTrainSide = "icon-train-side~RtPNNeuZ.svg";

var IconTrain = "icon-train~bjEOEtYh.svg";

var IconTransform = "icon-transform~boBiLacE.svg";

var IconTrash = "icon-trash~tnPuENSi.svg";

var IconTreatment = "icon-treatment~bmHlkGlP.svg";

var IconTreeChristmas = "icon-tree-christmas~VwJrFsDE.svg";

var IconTree = "icon-tree~ZmWvLiIX.svg";

var IconTriangle = "icon-triangle~EfeoqGwJ.svg";

var IconTrophy = "icon-trophy~GHfpTWmE.svg";

var IconTruckSide = "icon-truck-side~vfRFqbMY.svg";

var IconUmbrella = "icon-umbrella~lshOwaWx.svg";

var IconUnderline = "icon-underline~blJzXdjO.svg";

var IconUndoAlt = "icon-undo-alt~WfnJneMw.svg";

var IconUndo = "icon-undo~LUCvTjlf.svg";

var IconUnlock = "icon-unlock~NdNEUShv.svg";

var IconUpload = "icon-upload~NJDNFwQA.svg";

var IconUsbPendrive = "icon-usb-pendrive~beomsjPP.svg";

var IconUserAdd = "icon-user-add~LFpwEdiZ.svg";

var IconUserDelete = "icon-user-delete~biKHXgVL.svg";

var IconUserRemove = "icon-user-remove~biNVxQwk.svg";

var IconUserTime = "icon-user-time~qDMJsFWJ.svg";

var IconUser = "icon-user~FeMJpLJr.svg";

var IconUtensils = "icon-utensils~bbqaLTOg.svg";

var IconVectorAlt = "icon-vector-alt~ZKjXQNsq.svg";

var IconVector = "icon-vector~oBAPMlLb.svg";

var IconVenusDouble = "icon-venus-double~QJJzowWb.svg";

var IconVenusMars = "icon-venus-mars~MDQzxexD.svg";

var IconVenus = "icon-venus~bghgkuLD.svg";

var IconVideoCamera = "icon-video-camera~bhLoRnnh.svg";

var IconVolleyball = "icon-volleyball~NpkOAhne.svg";

var IconVolume = "icon-volume~blhlucLL.svg";

var IconWheelchair = "icon-wheelchair~HwnGWJrW.svg";

var IconWifiAlt = "icon-wifi-alt~nevKkypI.svg";

var IconWind = "icon-wind~LnxMKtoi.svg";

var IconWomanHead = "icon-woman-head~pXEIJdBn.svg";

var IconWorld = "icon-world~BiSXnkvy.svg";

var IconYen = "icon-yen~NrOtwhLG.svg";

var IconZoomIn = "icon-zoom-in~wKNvVRxI.svg";

var IconZoomOut = "icon-zoom-out~NeRuQENA.svg";

var TxIconOutline = {
  IconAdd: IconAdd,
  IconAddressBook: IconAddressBook,
  IconAlarmClock: IconAlarmClock,
  IconAlignCenter: IconAlignCenter,
  IconAlignJustify: IconAlignJustify,
  IconAlignLeft: IconAlignLeft,
  IconAlignRight: IconAlignRight,
  IconAmbulance: IconAmbulance,
  IconAngleDoubleLeft: IconAngleDoubleLeft,
  IconAngleDoubleRight: IconAngleDoubleRight,
  IconAngleDoubleSmallLeft: IconAngleDoubleSmallLeft,
  IconAngleDoubleSmallRight: IconAngleDoubleSmallRight,
  IconAngleDown: IconAngleDown,
  IconAngleLeft: IconAngleLeft,
  IconAngleRight: IconAngleRight,
  IconAngleSmallDown: IconAngleSmallDown,
  IconAngleSmallLeft: IconAngleSmallLeft,
  IconAngleSmallRight: IconAngleSmallRight,
  IconAngleSmallUp: IconAngleSmallUp,
  IconAngleUp: IconAngleUp,
  IconApple: IconApple,
  IconAppsAdd: IconAppsAdd,
  IconAppsDelete: IconAppsDelete,
  IconAppsSort: IconAppsSort,
  IconApps: IconApps,
  IconArchive: IconArchive,
  IconArrowDown: IconArrowDown,
  IconArrowFromBottom: IconArrowFromBottom,
  IconArrowLeft: IconArrowLeft,
  IconArrowRight: IconArrowRight,
  IconArrowSmallDown: IconArrowSmallDown,
  IconArrowSmallLeft: IconArrowSmallLeft,
  IconArrowSmallRight: IconArrowSmallRight,
  IconArrowSmallUp: IconArrowSmallUp,
  IconArrowUp: IconArrowUp,
  IconAsterik: IconAsterik,
  IconAt: IconAt,
  IconBackpack: IconBackpack,
  IconBadge: IconBadge,
  IconBalloons: IconBalloons,
  IconBan: IconBan,
  IconBandAid: IconBandAid,
  IconBank: IconBank,
  IconBarberShop: IconBarberShop,
  IconBaseball: IconBaseball,
  IconBasketball: IconBasketball,
  IconBed: IconBed,
  IconBeer: IconBeer,
  IconBellRing: IconBellRing,
  IconBellSchool: IconBellSchool,
  IconBell: IconBell,
  IconBike: IconBike,
  IconBilliard: IconBilliard,
  IconBold: IconBold,
  IconBookAlt: IconBookAlt,
  IconBook: IconBook,
  IconBookmark: IconBookmark,
  IconBowling: IconBowling,
  IconBoxAlt: IconBoxAlt,
  IconBox: IconBox,
  IconBreadSlice: IconBreadSlice,
  IconBriefcase: IconBriefcase,
  IconBroom: IconBroom,
  IconBrowser: IconBrowser,
  IconBrush: IconBrush,
  IconBug: IconBug,
  IconBuilding: IconBuilding,
  IconBulb: IconBulb,
  IconButterfly: IconButterfly,
  IconCakeBirthday: IconCakeBirthday,
  IconCakeWedding: IconCakeWedding,
  IconCalculator: IconCalculator,
  IconCalendar: IconCalendar,
  IconCallHistory: IconCallHistory,
  IconCallIncoming: IconCallIncoming,
  IconCallMissed: IconCallMissed,
  IconCallOutgoing: IconCallOutgoing,
  IconCamera: IconCamera,
  IconCamping: IconCamping,
  IconCar: IconCar,
  IconCaretDown: IconCaretDown,
  IconCaretLeft: IconCaretLeft,
  IconCaretRight: IconCaretRight,
  IconCaretUp: IconCaretUp,
  IconCarrot: IconCarrot,
  IconChartConnected: IconChartConnected,
  IconChartHistogram: IconChartHistogram,
  IconChartNetwork: IconChartNetwork,
  IconChartPieAlt: IconChartPieAlt,
  IconChartPie: IconChartPie,
  IconChartPyramid: IconChartPyramid,
  IconChartSetTheory: IconChartSetTheory,
  IconChartTree: IconChartTree,
  IconChatArrowDown: IconChatArrowDown,
  IconChatArrowGrow: IconChatArrowGrow,
  IconCheck: IconCheck,
  IconCheckbox: IconCheckbox,
  IconCheese: IconCheese,
  IconChessPiece: IconChessPiece,
  IconChildHead: IconChildHead,
  IconCircleSmall: IconCircleSmall,
  IconCircle: IconCircle,
  IconClip: IconClip,
  IconClock: IconClock,
  IconCloudCheck: IconCloudCheck,
  IconCloudDisabled: IconCloudDisabled,
  IconCloudDownload: IconCloudDownload,
  IconCloudShare: IconCloudShare,
  IconCloudUpload: IconCloudUpload,
  IconCloud: IconCloud,
  IconClouds: IconClouds,
  IconCocktail: IconCocktail,
  IconCoffee: IconCoffee,
  IconCommentAlt: IconCommentAlt,
  IconCommentCheck: IconCommentCheck,
  IconCommentHeart: IconCommentHeart,
  IconCommentInfo: IconCommentInfo,
  IconCommentUser: IconCommentUser,
  IconComment: IconComment,
  IconComments: IconComments,
  IconCompressAlt: IconCompressAlt,
  IconCompress: IconCompress,
  IconComputer: IconComputer,
  IconConfetti: IconConfetti,
  IconCookie: IconCookie,
  IconCopyAlt: IconCopyAlt,
  IconCopy: IconCopy,
  IconCopyright: IconCopyright,
  IconCow: IconCow,
  IconCream: IconCream,
  IconCreditCard: IconCreditCard,
  IconCroissant: IconCroissant,
  IconCrossCircle: IconCrossCircle,
  IconCrossSmall: IconCrossSmall,
  IconCross: IconCross,
  IconCrown: IconCrown,
  IconCube: IconCube,
  IconCupcake: IconCupcake,
  IconCursorFinger: IconCursorFinger,
  IconCursorPlus: IconCursorPlus,
  IconCursorTextAlt: IconCursorTextAlt,
  IconCursorText: IconCursorText,
  IconCursor: IconCursor,
  IconDart: IconDart,
  IconDashboard: IconDashboard,
  IconDataTransfer: IconDataTransfer,
  IconDatabase: IconDatabase,
  IconDelete: IconDelete,
  IconDiamond: IconDiamond,
  IconDice: IconDice,
  IconDiploma: IconDiploma,
  IconDiscoBall: IconDiscoBall,
  IconDisk: IconDisk,
  IconDoctor: IconDoctor,
  IconDocumentSigned: IconDocumentSigned,
  IconDocument: IconDocument,
  IconDollar: IconDollar,
  IconDownload: IconDownload,
  IconDrinkAlt: IconDrinkAlt,
  IconDrumstick: IconDrumstick,
  IconDuplicate: IconDuplicate,
  IconELearning: IconELearning,
  IconEarnings: IconEarnings,
  IconEditAlt: IconEditAlt,
  IconEdit: IconEdit,
  IconEnvelopeBan: IconEnvelopeBan,
  IconEnvelopeDownload: IconEnvelopeDownload,
  IconEnvelopeMarker: IconEnvelopeMarker,
  IconEnvelopeOpen: IconEnvelopeOpen,
  IconEnvelopePlus: IconEnvelopePlus,
  IconEnvelope: IconEnvelope,
  IconEuro: IconEuro,
  IconExclamation: IconExclamation,
  IconExpand: IconExpand,
  IconEyeCrossed: IconEyeCrossed,
  IconEyeDropper: IconEyeDropper,
  IconEye: IconEye,
  IconFeather: IconFeather,
  IconFerrisWheel: IconFerrisWheel,
  IconFileAdd: IconFileAdd,
  IconFileAi: IconFileAi,
  IconFileCheck: IconFileCheck,
  IconFileDelete: IconFileDelete,
  IconFileEps: IconFileEps,
  IconFileGif: IconFileGif,
  IconFileMusic: IconFileMusic,
  IconFilePsd: IconFilePsd,
  IconFile: IconFile,
  IconFill: IconFill,
  IconFilm: IconFilm,
  IconFilter: IconFilter,
  IconFingerprint: IconFingerprint,
  IconFish: IconFish,
  IconFlag: IconFlag,
  IconFlame: IconFlame,
  IconFlipHorizontal: IconFlipHorizontal,
  IconFlowerBouquet: IconFlowerBouquet,
  IconFlowerTulip: IconFlowerTulip,
  IconFlower: IconFlower,
  IconFolderAdd: IconFolderAdd,
  IconFolder: IconFolder,
  IconFollowing: IconFollowing,
  IconFootball: IconFootball,
  IconForm: IconForm,
  IconForward: IconForward,
  IconFox: IconFox,
  IconFrown: IconFrown,
  IconFtp: IconFtp,
  IconGallery: IconGallery,
  IconGamepad: IconGamepad,
  IconGasPump: IconGasPump,
  IconGem: IconGem,
  IconGift: IconGift,
  IconGlassCheers: IconGlassCheers,
  IconGlasses: IconGlasses,
  IconGlobeAlt: IconGlobeAlt,
  IconGlobe: IconGlobe,
  IconGolf: IconGolf,
  IconGraduationCap: IconGraduationCap,
  IconGraphicTablet: IconGraphicTablet,
  IconGridAlt: IconGridAlt,
  IconGrid: IconGrid,
  IconGuitar: IconGuitar,
  IconGym: IconGym,
  IconHamburger: IconHamburger,
  IconHandHoldingHeart: IconHandHoldingHeart,
  IconHastag: IconHastag,
  IconHatBirthday: IconHatBirthday,
  IconHeadSideThinking: IconHeadSideThinking,
  IconHeadphones: IconHeadphones,
  IconHeadset: IconHeadset,
  IconHeartArrow: IconHeartArrow,
  IconHeart: IconHeart,
  IconHomeLocationAlt: IconHomeLocationAlt,
  IconHomeLocation: IconHomeLocation,
  IconHome: IconHome,
  IconHourglassEnd: IconHourglassEnd,
  IconHourglass: IconHourglass,
  IconIceCream: IconIceCream,
  IconIceSkate: IconIceSkate,
  IconIdBadge: IconIdBadge,
  IconInbox: IconInbox,
  IconIncognito: IconIncognito,
  IconIndent: IconIndent,
  IconInfinity: IconInfinity,
  IconInfo: IconInfo,
  IconInteractive: IconInteractive,
  IconInterlining: IconInterlining,
  IconInterrogation: IconInterrogation,
  IconItalic: IconItalic,
  IconJpg: IconJpg,
  IconKey: IconKey,
  IconKeyboard: IconKeyboard,
  IconKite: IconKite,
  IconLabel: IconLabel,
  IconLaptop: IconLaptop,
  IconLasso: IconLasso,
  IconLaugh: IconLaugh,
  IconLayers: IconLayers,
  IconLayoutFluid: IconLayoutFluid,
  IconLeaf: IconLeaf,
  IconLetterCase: IconLetterCase,
  IconLifeRing: IconLifeRing,
  IconLineWidth: IconLineWidth,
  IconLink: IconLink,
  IconLipstick: IconLipstick,
  IconListCheck: IconListCheck,
  IconList: IconList,
  IconLocationAlt: IconLocationAlt,
  IconLockAlt: IconLockAlt,
  IconLock: IconLock,
  IconLuggageRolling: IconLuggageRolling,
  IconMagicWand: IconMagicWand,
  IconMakeupBrush: IconMakeupBrush,
  IconManHead: IconManHead,
  IconMapMarkerCross: IconMapMarkerCross,
  IconMapMarkerHome: IconMapMarkerHome,
  IconMapMarkerMinus: IconMapMarkerMinus,
  IconMapMarkerPlus: IconMapMarkerPlus,
  IconMapMarker: IconMapMarker,
  IconMap: IconMap,
  IconMarkerTime: IconMarkerTime,
  IconMarker: IconMarker,
  IconMarsDouble: IconMarsDouble,
  IconMars: IconMars,
  IconMaskCarnival: IconMaskCarnival,
  IconMedicine: IconMedicine,
  IconMegaphone: IconMegaphone,
  IconMeh: IconMeh,
  IconMenuBurger: IconMenuBurger,
  IconMenuDotsVertical: IconMenuDotsVertical,
  IconMenuDots: IconMenuDots,
  IconMicrophoneAlt: IconMicrophoneAlt,
  IconMicrophone: IconMicrophone,
  IconMinusSmall: IconMinusSmall,
  IconMinus: IconMinus,
  IconMobile: IconMobile,
  IconModeLandscape: IconModeLandscape,
  IconModePortrait: IconModePortrait,
  IconMoney: IconMoney,
  IconMoon: IconMoon,
  IconMountains: IconMountains,
  IconMouse: IconMouse,
  IconMugAlt: IconMugAlt,
  IconMusicAlt: IconMusicAlt,
  IconMusic: IconMusic,
  IconNavigation: IconNavigation,
  IconNetworkCloud: IconNetworkCloud,
  IconNetwork: IconNetwork,
  IconNotebook: IconNotebook,
  IconOpacity: IconOpacity,
  IconPackage: IconPackage,
  IconPaintBrush: IconPaintBrush,
  IconPalette: IconPalette,
  IconPaperPlane: IconPaperPlane,
  IconPassword: IconPassword,
  IconPause: IconPause,
  IconPaw: IconPaw,
  IconPencil: IconPencil,
  IconPharmacy: IconPharmacy,
  IconPhoneCall: IconPhoneCall,
  IconPhoneCross: IconPhoneCross,
  IconPhonePause: IconPhonePause,
  IconPhoneSlash: IconPhoneSlash,
  IconPhysics: IconPhysics,
  IconPicture: IconPicture,
  IconPingPong: IconPingPong,
  IconPizzaSlice: IconPizzaSlice,
  IconPlane: IconPlane,
  IconPlayAlt: IconPlayAlt,
  IconPlay: IconPlay,
  IconPlayingCards: IconPlayingCards,
  IconPlusSmall: IconPlusSmall,
  IconPlus: IconPlus,
  IconPokerChip: IconPokerChip,
  IconPortrait: IconPortrait,
  IconPound: IconPound,
  IconPower: IconPower,
  IconPresentation: IconPresentation,
  IconPrint: IconPrint,
  IconProtractor: IconProtractor,
  IconPulse: IconPulse,
  IconPyramid: IconPyramid,
  IconQuoteRight: IconQuoteRight,
  IconRainbow: IconRainbow,
  IconRaindrops: IconRaindrops,
  IconRec: IconRec,
  IconReceipt: IconReceipt,
  IconRecordVinyl: IconRecordVinyl,
  IconRectabgleVertical: IconRectabgleVertical,
  IconRectangleHorizontal: IconRectangleHorizontal,
  IconRectanglePanoramic: IconRectanglePanoramic,
  IconRecycle: IconRecycle,
  IconRedoAlt: IconRedoAlt,
  IconRedo: IconRedo,
  IconReflect: IconReflect,
  IconRefresh: IconRefresh,
  IconResize: IconResize,
  IconResources: IconResources,
  IconRewind: IconRewind,
  IconRhombus: IconRhombus,
  IconRingsWedding: IconRingsWedding,
  IconRoad: IconRoad,
  IconRocket: IconRocket,
  IconRoomService: IconRoomService,
  IconRotateRight: IconRotateRight,
  IconRugby: IconRugby,
  IconSad: IconSad,
  IconSalad: IconSalad,
  IconScale: IconScale,
  IconSchoolBus: IconSchoolBus,
  IconSchool: IconSchool,
  IconScissors: IconScissors,
  IconScreen: IconScreen,
  IconSearchAlt: IconSearchAlt,
  IconSearchHeart: IconSearchHeart,
  IconSearch: IconSearch,
  IconSettingsSliders: IconSettingsSliders,
  IconSettings: IconSettings,
  IconShare: IconShare,
  IconShieldCheck: IconShieldCheck,
  IconShieldExclamation: IconShieldExclamation,
  IconShieldInterrogation: IconShieldInterrogation,
  IconShieldPlus: IconShieldPlus,
  IconShield: IconShield,
  IconShipSide: IconShipSide,
  IconShip: IconShip,
  IconShop: IconShop,
  IconShoppingBagAdd: IconShoppingBagAdd,
  IconShoppingBag: IconShoppingBag,
  IconShoppingCartAdd: IconShoppingCartAdd,
  IconShoppingCartCheck: IconShoppingCartCheck,
  IconShoppingCart: IconShoppingCart,
  IconShuffle: IconShuffle,
  IconSignInAlt: IconSignInAlt,
  IconSignIn: IconSignIn,
  IconSignOutAlt: IconSignOutAlt,
  IconSignOut: IconSignOut,
  IconSignalAlt1: IconSignalAlt1,
  IconSignalAlt2: IconSignalAlt2,
  IconSignalAlt: IconSignalAlt,
  IconSkateboard: IconSkateboard,
  IconSmartphone: IconSmartphone,
  IconSmileWink: IconSmileWink,
  IconSmile: IconSmile,
  IconSnowflake: IconSnowflake,
  IconSoap: IconSoap,
  IconSoup: IconSoup,
  IconSpa: IconSpa,
  IconSpeaker: IconSpeaker,
  IconSphere: IconSphere,
  IconSpinnerAlt: IconSpinnerAlt,
  IconSpinner: IconSpinner,
  IconSquareRoot: IconSquareRoot,
  IconSquare: IconSquare,
  IconStarOctogram: IconStarOctogram,
  IconStar: IconStar,
  IconStats: IconStats,
  IconStethoscope: IconStethoscope,
  IconSticker: IconSticker,
  IconStop: IconStop,
  IconStopwatch: IconStopwatch,
  IconSubtitles: IconSubtitles,
  IconSun: IconSun,
  IconSunrise: IconSunrise,
  IconSurfing: IconSurfing,
  IconSword: IconSword,
  IconSyringe: IconSyringe,
  IconTablet: IconTablet,
  IconTarget: IconTarget,
  IconTaxi: IconTaxi,
  IconTennis: IconTennis,
  IconTerrace: IconTerrace,
  IconTestTube: IconTestTube,
  IconTest: IconTest,
  IconTextCheck: IconTextCheck,
  IconText: IconText,
  IconThermometerHalf: IconThermometerHalf,
  IconThumbsDown: IconThumbsDown,
  IconThumbsUp: IconThumbsUp,
  IconThumbtack: IconThumbtack,
  IconTicket: IconTicket,
  IconTimeAdd: IconTimeAdd,
  IconTimeCheck: IconTimeCheck,
  IconTimeDelete: IconTimeDelete,
  IconTimeFast: IconTimeFast,
  IconTimeForwardSixty: IconTimeForwardSixty,
  IconTimeForwardTen: IconTimeForwardTen,
  IconTimeForward: IconTimeForward,
  IconTimeHalfPast: IconTimeHalfPast,
  IconTimeOclock: IconTimeOclock,
  IconTimePast: IconTimePast,
  IconTimeQuarterPast: IconTimeQuarterPast,
  IconTimeQuarterTo: IconTimeQuarterTo,
  IconTimeTwentyFour: IconTimeTwentyFour,
  IconToolCrop: IconToolCrop,
  IconToolMarquee: IconToolMarquee,
  IconTooth: IconTooth,
  IconTornado: IconTornado,
  IconTrainSide: IconTrainSide,
  IconTrain: IconTrain,
  IconTransform: IconTransform,
  IconTrash: IconTrash,
  IconTreatment: IconTreatment,
  IconTreeChristmas: IconTreeChristmas,
  IconTree: IconTree,
  IconTriangle: IconTriangle,
  IconTrophy: IconTrophy,
  IconTruckSide: IconTruckSide,
  IconUmbrella: IconUmbrella,
  IconUnderline: IconUnderline,
  IconUndoAlt: IconUndoAlt,
  IconUndo: IconUndo,
  IconUnlock: IconUnlock,
  IconUpload: IconUpload,
  IconUsbPendrive: IconUsbPendrive,
  IconUserAdd: IconUserAdd,
  IconUserDelete: IconUserDelete,
  IconUserRemove: IconUserRemove,
  IconUserTime: IconUserTime,
  IconUser: IconUser,
  IconUtensils: IconUtensils,
  IconVectorAlt: IconVectorAlt,
  IconVector: IconVector,
  IconVenusDouble: IconVenusDouble,
  IconVenusMars: IconVenusMars,
  IconVenus: IconVenus,
  IconVideoCamera: IconVideoCamera,
  IconVolleyball: IconVolleyball,
  IconVolume: IconVolume,
  IconWheelchair: IconWheelchair,
  IconWifiAlt: IconWifiAlt,
  IconWind: IconWind,
  IconWomanHead: IconWomanHead,
  IconWorld: IconWorld,
  IconYen: IconYen,
  IconZoomIn: IconZoomIn,
  IconZoomOut: IconZoomOut,
};

var _templateObject$3, _templateObject2$3, _templateObject3$2;
var StyledTxButton = styled__default.button(
  _templateObject$3 ||
    (_templateObject$3 = _taggedTemplateLiteralLoose([
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
    return props.shape === "circle" ? "100px" : "10px";
  },
  function (props) {
    return props.shape === "circle" ? "12px 12px !important" : "12px 22px !important";
  },
  function (props) {
    return props.gradientBackground
      ? "linear-gradient(" +
          (props.gradientBackground.degree || 135) +
          "deg, " +
          (props.gradientBackground.colors && props.gradientBackground.colors.length > 0
            ? props.gradientBackground.colors.join(", ")
            : ["#6253e1", "#04befe"].join(", ")) +
          ")"
      : props.backgroundColor || "#03030f";
  },
  function (props) {
    return props.shape === "circle" ? "14px 14px !important" : "14px 24px !important";
  },
  function (props) {
    return props.shape === "circle" ? "10px 10px !important" : "10px 20px !important";
  }
);
var rotate = styled.keyframes(
  _templateObject2$3 ||
    (_templateObject2$3 = _taggedTemplateLiteralLoose([
      "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
    ]))
);
var LoadingRotatingIcon = styled__default(/*#__PURE__*/ React.createElement(TxIconOutline.IconAdd, null))(
  _templateObject3$2 ||
    (_templateObject3$2 = _taggedTemplateLiteralLoose(["\n  animation: ", " 1s linear infinite;\n"])),
  rotate
);

var _excluded$4 = [
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
];
var TxButton = function TxButton(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Click Me" : _ref$label,
    onClick = _ref.onClick,
    background = _ref.background,
    color = _ref.color,
    size = _ref.size,
    type = _ref.type,
    disabled = _ref.disabled,
    prefix = _ref.prefix,
    suffix = _ref.suffix,
    shape = _ref.shape,
    loading = _ref.loading,
    danger = _ref.danger,
    gradientBackground = _ref.gradientBackground,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return /*#__PURE__*/ React$1__default.createElement(
    StyledTxButton,
    _extends(
      {
        onClick: onClick,
        className: [
          "tx-ui-tx-button",
          disabled && "tx-ui-tx-button--disabled",
          loading && "tx-ui-tx-button--loading",
          danger && "tx-ui-tx-button--danger",
          "tx-ui-tx-button--" + size,
          "tx-ui-tx-button--" + type,
        ].join(" "),
        style: {
          padding: "10px 20px",
          background: background || "defaultBackground",
          color: color || "defaultColor",
        },
        disabled: loading,
        shape: shape,
        danger: danger,
        gradientBackground: gradientBackground && gradientBackground,
      },
      rest
    ),
    loading && /*#__PURE__*/ React$1__default.createElement(LoadingRotatingIcon, null),
    prefix && !loading && prefix,
    label,
    suffix && suffix
  );
};
TxButton.propTypes = {
  label: propTypes.string.isRequired,
  loading: propTypes.bool,
  danger: propTypes.bool,
  backgroundColor: propTypes.string,
  size: propTypes.oneOf(["small", "medium", "large"]),
  type: propTypes.oneOf(["primary", "secondary", "filled", "text", "link", "dashed"]),
  shape: propTypes.oneOf(["default", "circle"]),
  prefix: propTypes.node,
  suffix: propTypes.node,
  gradientBackground: propTypes.shape({
    degree: propTypes.number,
    colors: propTypes.arrayOf(propTypes.string),
  }),
  onClick: propTypes.func,
};
TxButton.defaultProps = {
  backgroundColor: null,
  type: "primary",
  size: "medium",
  onClick: undefined,
};

var _excluded$5 = ["value", "onChange"];
var _templateObject$4,
  _templateObject2$4,
  _templateObject3$3,
  _templateObject4$1,
  _templateObject5$1,
  _templateObject6,
  _templateObject7;
var CalendarContainer = styled__default.div(
  _templateObject$4 ||
    (_templateObject$4 = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  max-width: 350px;\n  background: white;\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  padding: 16px;\n",
    ])),
  colors.borderLight
);
var CalendarHeader = styled__default.div(
  _templateObject2$4 ||
    (_templateObject2$4 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n",
    ]))
);
var MonthYear = styled__default.div(
  _templateObject3$3 ||
    (_templateObject3$3 = _taggedTemplateLiteralLoose(["\n  font-size: 16px;\n  font-weight: 600;\n"]))
);
var NavButton = styled__default.button(
  _templateObject4$1 ||
    (_templateObject4$1 = _taggedTemplateLiteralLoose([
      "\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n",
    ])),
  colors.bgFillLight
);
var CalendarGrid = styled__default.div(
  _templateObject5$1 ||
    (_templateObject5$1 = _taggedTemplateLiteralLoose([
      "\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n",
    ]))
);
var CalendarDay = styled__default.div(
  _templateObject6 ||
    (_templateObject6 = _taggedTemplateLiteralLoose([
      "\n  text-align: center;\n  font-size: 12px;\n  color: ",
      ";\n  padding: 4px;\n",
    ])),
  colors.textSecondary
);
var CalendarDate = styled__default.button(
  _templateObject7 ||
    (_templateObject7 = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  padding: 8px;\n  border: none;\n  background: ",
      ";\n  color: ",
      ";\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n\n  ",
      "\n",
    ])),
  function (props) {
    return props.selected ? colors.primary : "transparent";
  },
  function (props) {
    return props.selected ? "white" : colors.textPrimary;
  },
  function (props) {
    return props.selected ? colors.primary : colors.bgFillLight;
  },
  function (props) {
    return props.today && "\n    border: 1px solid " + colors.primary + ";\n  ";
  }
);
var TxCalendar = function TxCalendar(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  var _useState = React$1.useState(value || new Date()),
    selectedDate = _useState[0],
    setSelectedDate = _useState[1];
  var _useState2 = React$1.useState(selectedDate),
    currentMonth = _useState2[0],
    setCurrentMonth = _useState2[1];
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
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
  ];
  var monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  var monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  var getDaysInMonth = function getDaysInMonth() {
    var days = [];
    var startDate = monthStart;
    var endDate = monthEnd;
    for (var i = 0; i < startDate.getDay(); i++) {
      days.push(null);
    }
    for (var _i = 1; _i <= endDate.getDate(); _i++) {
      days.push(_i);
    }
    return days;
  };
  var handleDateClick = function handleDateClick(date) {
    var newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };
  var prevMonth = function prevMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  var nextMonth = function nextMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  var today = new Date();
  var isToday = function isToday(date) {
    return (
      date === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };
  var isSelected = function isSelected(date) {
    return (
      date === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };
  var days = getDaysInMonth();
  return /*#__PURE__*/ React.createElement(
    CalendarContainer,
    props,
    /*#__PURE__*/ React.createElement(
      CalendarHeader,
      null,
      /*#__PURE__*/ React.createElement(
        NavButton,
        {
          onClick: prevMonth,
        },
        "\u2190"
      ),
      /*#__PURE__*/ React.createElement(
        MonthYear,
        null,
        months[currentMonth.getMonth()],
        " ",
        currentMonth.getFullYear()
      ),
      /*#__PURE__*/ React.createElement(
        NavButton,
        {
          onClick: nextMonth,
        },
        "\u2192"
      )
    ),
    /*#__PURE__*/ React.createElement(
      CalendarGrid,
      null,
      daysOfWeek.map(function (day) {
        return /*#__PURE__*/ React.createElement(
          CalendarDay,
          {
            key: day,
          },
          day
        );
      }),
      days.map(function (date, index) {
        return date
          ? /*#__PURE__*/ React.createElement(
              CalendarDate,
              {
                key: index,
                onClick: function onClick() {
                  return handleDateClick(date);
                },
                selected: isSelected(date) ? 1 : 0,
                today: isToday(date) ? 1 : 0,
              },
              date
            )
          : /*#__PURE__*/ React.createElement("div", {
              key: index,
            });
      })
    )
  );
};

var _excluded$6 = ["title", "children", "extra", "footer", "hoverable"];
var _templateObject$5, _templateObject2$5, _templateObject3$4, _templateObject4$2;
var CardContainer = styled__default.div(
  _templateObject$5 ||
    (_templateObject$5 = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  border: 1px solid ",
      ";\n  border-radius: ",
      ";\n  padding: ",
      ";\n  transition: all 0.2s;\n  ",
      "\n",
    ])),
  function (props) {
    return props.variant === "outlined" ? "transparent" : colors.bgFillLight;
  },
  colors.borderLight,
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
);
var CardHeader = styled__default.div(
  _templateObject2$5 ||
    (_templateObject2$5 = _taggedTemplateLiteralLoose([
      "\n  margin-bottom: 16px;\n  font-size: 16px;\n  font-weight: 600;\n",
    ]))
);
var CardBody = styled__default.div(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteralLoose([""])));
var CardFooter = styled__default.div(
  _templateObject4$2 ||
    (_templateObject4$2 = _taggedTemplateLiteralLoose([
      "\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid ",
      ";\n",
    ])),
  colors.borderLight
);
var TxCard = function TxCard(_ref) {
  var title = _ref.title,
    children = _ref.children,
    extra = _ref.extra,
    footer = _ref.footer,
    hoverable = _ref.hoverable,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return /*#__PURE__*/ React.createElement(
    CardContainer,
    _extends(
      {
        hoverable: hoverable,
      },
      props
    ),
    title &&
      /*#__PURE__*/ React.createElement(
        CardHeader,
        null,
        title,
        " ",
        extra &&
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                float: "right",
              },
            },
            extra
          )
      ),
    /*#__PURE__*/ React.createElement(CardBody, null, children),
    footer && /*#__PURE__*/ React.createElement(CardFooter, null, footer)
  );
};

var _templateObject$6,
  _templateObject2$6,
  _templateObject3$5,
  _templateObject4$3,
  _templateObject5$2,
  _templateObject6$1,
  _templateObject7$1;
var CarouselWrapper = styled__default.div(
  _templateObject$6 ||
    (_templateObject$6 = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n",
    ]))
);
var CarouselContainer = styled__default.div(
  _templateObject2$6 ||
    (_templateObject2$6 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  transition: transform ",
      "ms ease-in-out;\n  transform: translateX(-",
      "%);\n",
    ])),
  function (props) {
    return props.speed;
  },
  function (props) {
    return props.currentSlide * 100;
  }
);
var CarouselSlide = styled__default.div(
  _templateObject3$5 ||
    (_templateObject3$5 = _taggedTemplateLiteralLoose([
      "\n  flex: 0 0 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
      ";\n  border-radius: 8px;\n  min-height: ",
      ";\n",
    ])),
  colors.bgFillLight,
  function (props) {
    return props.height || "300px";
  }
);
var CarouselArrow = styled__default.button(
  _templateObject4$3 ||
    (_templateObject4$3 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  ",
      "\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.9);\n  color: ",
      ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n\n  &:hover {\n    background-color: white;\n    transform: translateY(-50%) scale(1.1);\n  }\n\n  &:active {\n    transform: translateY(-50%) scale(0.95);\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.direction === "prev" ? "left: 16px;" : "right: 16px;";
  },
  colors.textPrimary
);
var CarouselDots = styled__default.div(
  _templateObject5$2 ||
    (_templateObject5$2 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 8px;\n  z-index: 2;\n",
    ]))
);
var CarouselDot = styled__default.button(
  _templateObject6$1 ||
    (_templateObject6$1 = _taggedTemplateLiteralLoose([
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
);
var CarouselCounter = styled__default.div(
  _templateObject7$1 ||
    (_templateObject7$1 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  padding: 4px 12px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  z-index: 2;\n",
    ]))
);

var _excluded$7 = [
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
];
var TxCarousel = function TxCarousel(_ref) {
  var children = _ref.children,
    _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
    _ref$autoPlaySpeed = _ref.autoPlaySpeed,
    autoPlaySpeed = _ref$autoPlaySpeed === void 0 ? 3000 : _ref$autoPlaySpeed,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 500 : _ref$speed,
    _ref$dots = _ref.dots,
    dots = _ref$dots === void 0 ? true : _ref$dots,
    _ref$arrows = _ref.arrows,
    arrows = _ref$arrows === void 0 ? true : _ref$arrows,
    _ref$infinite = _ref.infinite,
    infinite = _ref$infinite === void 0 ? true : _ref$infinite,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "300px" : _ref$height,
    _ref$showCounter = _ref.showCounter,
    showCounter = _ref$showCounter === void 0 ? false : _ref$showCounter,
    _ref$initialSlide = _ref.initialSlide,
    initialSlide = _ref$initialSlide === void 0 ? 0 : _ref$initialSlide,
    onChange = _ref.onChange,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var _useState = React$1.useState(initialSlide),
    currentSlide = _useState[0],
    setCurrentSlide = _useState[1];
  var _useState2 = React$1.useState(false),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var autoplayRef = React$1.useRef(null);
  var slides = Array.isArray(children) ? children : [children];
  var totalSlides = slides.length;
  React$1.useEffect(
    function () {
      if (autoPlay && !isHovered && totalSlides > 1) {
        autoplayRef.current = setInterval(function () {
          goToNext();
        }, autoPlaySpeed);
      }
      return function () {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
      };
    },
    [autoPlay, autoPlaySpeed, isHovered, currentSlide]
  );
  var goToNext = function goToNext() {
    setCurrentSlide(function (prev) {
      var next = prev + 1;
      if (next >= totalSlides) {
        return infinite ? 0 : prev;
      }
      return next;
    });
  };
  var goToPrev = function goToPrev() {
    setCurrentSlide(function (prev) {
      var next = prev - 1;
      if (next < 0) {
        return infinite ? totalSlides - 1 : prev;
      }
      return next;
    });
  };
  var goToSlide = function goToSlide(index) {
    setCurrentSlide(index);
    if (onChange) {
      onChange(index);
    }
  };
  React$1.useEffect(
    function () {
      if (onChange) {
        onChange(currentSlide);
      }
    },
    [currentSlide]
  );
  var handleMouseEnter = function handleMouseEnter() {
    setIsHovered(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setIsHovered(false);
  };
  return /*#__PURE__*/ React.createElement(
    CarouselWrapper,
    _extends(
      {
        className: className,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      CarouselContainer,
      {
        currentSlide: currentSlide,
        speed: speed,
      },
      slides.map(function (slide, index) {
        return /*#__PURE__*/ React.createElement(
          CarouselSlide,
          {
            key: index,
            height: height,
          },
          slide
        );
      })
    ),
    arrows &&
      totalSlides > 1 &&
      /*#__PURE__*/ React.createElement(
        Fragment,
        null,
        /*#__PURE__*/ React.createElement(
          CarouselArrow,
          {
            direction: "prev",
            onClick: goToPrev,
            disabled: !infinite && currentSlide === 0,
          },
          /*#__PURE__*/ React.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
            },
            /*#__PURE__*/ React.createElement("polyline", {
              points: "15 18 9 12 15 6",
            })
          )
        ),
        /*#__PURE__*/ React.createElement(
          CarouselArrow,
          {
            direction: "next",
            onClick: goToNext,
            disabled: !infinite && currentSlide === totalSlides - 1,
          },
          /*#__PURE__*/ React.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
            },
            /*#__PURE__*/ React.createElement("polyline", {
              points: "9 18 15 12 9 6",
            })
          )
        )
      ),
    dots &&
      totalSlides > 1 &&
      /*#__PURE__*/ React.createElement(
        CarouselDots,
        null,
        slides.map(function (_, index) {
          return /*#__PURE__*/ React.createElement(CarouselDot, {
            key: index,
            active: index === currentSlide,
            onClick: function onClick() {
              return goToSlide(index);
            },
          });
        })
      ),
    showCounter &&
      totalSlides > 1 &&
      /*#__PURE__*/ React.createElement(CarouselCounter, null, currentSlide + 1, " / ", totalSlides)
  );
};
TxCarousel.propTypes = {
  children: propTypes.node.isRequired,
  autoPlay: propTypes.bool,
  autoPlaySpeed: propTypes.number,
  speed: propTypes.number,
  dots: propTypes.bool,
  arrows: propTypes.bool,
  infinite: propTypes.bool,
  height: propTypes.string,
  showCounter: propTypes.bool,
  initialSlide: propTypes.number,
  onChange: propTypes.func,
  className: propTypes.string,
};
TxCarousel.defaultProps = {
  autoPlay: false,
  autoPlaySpeed: 3000,
  speed: 500,
  dots: true,
  arrows: true,
  infinite: true,
  height: "300px",
  showCounter: false,
  initialSlide: 0,
  onChange: undefined,
  className: "",
};

var _excluded$8 = ["type", "data", "options", "width", "height"];
var _templateObject$7;
var ChartContainer = styled__default.div(
  _templateObject$7 ||
    (_templateObject$7 = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  width: 100%;\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",
      ";\n  border-radius: 8px;\n  padding: 24px;\n",
    ])),
  colors.bgFillLight
);
var TxChart = function TxChart(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "bar" : _ref$type,
    data = _ref.data,
    options = _ref.options,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "100%" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "300px" : _ref$height,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var chartRef = React$1.useRef(null);
  React$1.useEffect(
    function () {
      if (chartRef.current) {
        console.log("Chart data:", data);
        console.log("Chart options:", options);
      }
    },
    [data, options]
  );
  return /*#__PURE__*/ React.createElement(
    ChartContainer,
    _extends(
      {
        ref: chartRef,
        style: {
          width: width,
          height: height,
        },
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          textAlign: "center",
          color: colors.textSecondary,
        },
      },
      /*#__PURE__*/ React.createElement(
        "p",
        {
          style: {
            fontSize: "16px",
            fontWeight: "500",
          },
        },
        "Chart Component"
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        {
          style: {
            fontSize: "14px",
            marginTop: "8px",
          },
        },
        "Chart type: ",
        type,
        " - Data visualization component (integrate with Chart.js or similar)"
      )
    )
  );
};

var _templateObject$8, _templateObject2$7, _templateObject3$6, _templateObject4$4;
var StyledCheckboxWrapper = styled__default.label(
  _templateObject$8 ||
    (_templateObject$8 = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n\n  &.tx-ui-tx-checkbox--disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n",
    ]))
);
var StyledCheckboxInput = styled__default.input(
  _templateObject2$7 ||
    (_templateObject2$7 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n",
    ]))
);
var StyledCheckboxBox = styled__default.span(
  _templateObject3$6 ||
    (_templateObject3$6 = _taggedTemplateLiteralLoose([
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
    return props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderDefault;
  },
  function (props) {
    return props.checked ? (props.danger ? colors.danger : colors.primary) : colors.bgWhite;
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
  colors.textWhite,
  function (props) {
    return props.checked ? 1 : 0;
  },
  StyledCheckboxInput,
  function (props) {
    return props.danger ? colors.dangerHover : colors.primaryLight;
  },
  StyledCheckboxWrapper,
  function (props) {
    return props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderHover;
  },
  StyledCheckboxWrapper,
  function (props) {
    return props.checked ? colors.borderDefault : colors.bgFillLight;
  },
  colors.borderDefault,
  StyledCheckboxWrapper,
  colors.borderDefault,
  function (props) {
    return props.danger ? colors.danger : colors.primary;
  },
  function (props) {
    return props.danger ? colors.danger : colors.primary;
  },
  colors.textWhite
);
var StyledCheckboxLabel = styled__default.span(
  _templateObject4$4 ||
    (_templateObject4$4 = _taggedTemplateLiteralLoose([
      "\n  color: ",
      ";\n  font-size: ",
      ";\n  font-weight: 400;\n  line-height: 1.5;\n\n  ",
      ".tx-ui-tx-checkbox--disabled & {\n    color: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.color || colors.textPrimary;
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
  colors.textTertiary
);

var _excluded$9 = [
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
];
var TxCheckbox = function TxCheckbox(_ref) {
  var label = _ref.label,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    onChange = _ref.onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$indeterminate = _ref.indeterminate,
    indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$danger = _ref.danger,
    danger = _ref$danger === void 0 ? false : _ref$danger,
    color = _ref.color,
    value = _ref.value,
    name = _ref.name,
    id = _ref.id,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var handleChange = function handleChange(e) {
    if (!disabled && onChange) {
      onChange(e);
    }
  };
  var checkboxId = id || "tx-checkbox-" + Math.random().toString(36).substr(2, 9);
  return /*#__PURE__*/ React.createElement(
    StyledCheckboxWrapper,
    {
      htmlFor: checkboxId,
      className: [
        "tx-ui-tx-checkbox",
        disabled && "tx-ui-tx-checkbox--disabled",
        danger && "tx-ui-tx-checkbox--danger",
        "tx-ui-tx-checkbox--" + size,
      ]
        .filter(Boolean)
        .join(" "),
    },
    /*#__PURE__*/ React.createElement(
      StyledCheckboxInput,
      _extends(
        {
          type: "checkbox",
          id: checkboxId,
          checked: checked,
          onChange: handleChange,
          disabled: disabled,
          value: value,
          name: name,
        },
        rest
      )
    ),
    /*#__PURE__*/ React.createElement(
      StyledCheckboxBox,
      {
        checked: checked,
        size: size,
        danger: danger,
        className: indeterminate && !checked ? "tx-ui-tx-checkbox-box--indeterminate" : "",
      },
      checked && /*#__PURE__*/ React.createElement(TxIconOutline.IconCheck, null)
    ),
    label &&
      /*#__PURE__*/ React.createElement(
        StyledCheckboxLabel,
        {
          size: size,
          color: color,
        },
        label
      )
  );
};
TxCheckbox.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.node]),
  checked: propTypes.bool,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  indeterminate: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  danger: propTypes.bool,
  color: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
};
TxCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: "medium",
  danger: false,
};

var _excluded$a = ["children", "block", "variant", "size"];
var _templateObject$9;
var CodeContainer = styled__default.code(
  _templateObject$9 ||
    (_templateObject$9 = _taggedTemplateLiteralLoose([
      "\n  padding: ",
      ";\n  background: ",
      ";\n  border: ",
      ";\n  border-radius: 4px;\n  font-size: ",
      ";\n  color: ",
      ";\n  display: ",
      ";\n  ",
      "\n",
    ])),
  function (props) {
    return props.block ? "12px 16px" : "2px 6px";
  },
  function (props) {
    return props.variant === "outlined" ? "transparent" : colors.bgFillLight;
  },
  function (props) {
    return props.variant === "outlined" ? "1px solid " + colors.borderLight : "none";
  },
  function (props) {
    return props.size || "14px";
  },
  colors.textPrimary,
  function (props) {
    return props.block ? "block" : "inline";
  },
  function (props) {
    return props.block && "\n    white-space: pre-wrap;\n    word-break: break-all;\n  ";
  }
);
var TxCode = function TxCode(_ref) {
  var children = _ref.children,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? false : _ref$block,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return /*#__PURE__*/ React.createElement(
    CodeContainer,
    _extends(
      {
        block: block ? 1 : 0,
        variant: variant,
        size: size,
      },
      props
    ),
    children
  );
};

var _excluded$b = ["title", "children", "defaultExpanded"];
var _templateObject$a, _templateObject2$8, _templateObject3$7;
var CollapseContainer = styled__default.div(
  _templateObject$a ||
    (_templateObject$a = _taggedTemplateLiteralLoose([
      "\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  overflow: hidden;\n",
    ])),
  colors.borderLight
);
var CollapseHeader = styled__default.div(
  _templateObject2$8 ||
    (_templateObject2$8 = _taggedTemplateLiteralLoose([
      "\n  padding: 16px;\n  background: ",
      ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n",
    ])),
  colors.bgFillLight,
  colors.bgFillMedium
);
var CollapseContent = styled__default.div(
  _templateObject3$7 ||
    (_templateObject3$7 = _taggedTemplateLiteralLoose([
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
);
var TxCollapse = function TxCollapse(_ref) {
  var title = _ref.title,
    children = _ref.children,
    _ref$defaultExpanded = _ref.defaultExpanded,
    defaultExpanded = _ref$defaultExpanded === void 0 ? false : _ref$defaultExpanded,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  var _useState = React$1.useState(defaultExpanded),
    expanded = _useState[0],
    setExpanded = _useState[1];
  return /*#__PURE__*/ React.createElement(
    CollapseContainer,
    props,
    /*#__PURE__*/ React.createElement(
      CollapseHeader,
      {
        onClick: function onClick() {
          return setExpanded(!expanded);
        },
      },
      title,
      /*#__PURE__*/ React.createElement("span", null, expanded ? "−" : "+")
    ),
    /*#__PURE__*/ React.createElement(
      CollapseContent,
      {
        expanded: expanded,
      },
      children
    )
  );
};

var _templateObject$b,
  _templateObject2$9,
  _templateObject3$8,
  _templateObject4$5,
  _templateObject5$3,
  _templateObject6$2;
var StyledColorPickerWrapper = styled__default.div(
  _templateObject$b ||
    (_templateObject$b = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n",
    ]))
);
var StyledColorPickerInput = styled__default.input(
  _templateObject2$9 ||
    (_templateObject2$9 = _taggedTemplateLiteralLoose([
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
    return props.disabled ? colors.borderDisabled : colors.borderDefault;
  },
  function (props) {
    return props.disabled ? "not-allowed" : "pointer";
  },
  function (props) {
    return props.disabled ? 0.5 : 1;
  },
  colors.primary,
  colors.primaryLight
);
var StyledColorPickerLabel = styled__default.span(
  _templateObject3$8 ||
    (_templateObject3$8 = _taggedTemplateLiteralLoose(["\n  font-size: 14px;\n  color: ", ";\n  font-weight: 400;\n"])),
  function (props) {
    return props.disabled ? colors.textDisabled : colors.textPrimary;
  }
);
var StyledColorValue = styled__default.input(
  _templateObject4$5 ||
    (_templateObject4$5 = _taggedTemplateLiteralLoose([
      "\n  padding: 8px 12px;\n  border: 1.5px solid ",
      ";\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
      ";\n  background-color: ",
      ";\n  outline: none;\n  width: 100px;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n\n  &:hover:not(:disabled) {\n    border-color: ",
      ";\n  }\n\n  &:focus {\n    border-color: ",
      ";\n    box-shadow: 0 0 0 2px ",
      ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",
      ";\n  }\n",
    ])),
  colors.borderLight,
  colors.textPrimary,
  function (props) {
    return props.disabled ? colors.bgFillLight : colors.bgWhite;
  },
  colors.primary,
  colors.primary,
  colors.primaryLight,
  colors.textDisabled
);
var StyledColorPresets = styled__default.div(
  _templateObject5$3 ||
    (_templateObject5$3 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n",
    ]))
);
var StyledPresetColor = styled__default.button(
  _templateObject6$2 ||
    (_templateObject6$2 = _taggedTemplateLiteralLoose([
      "\n  width: 28px;\n  height: 28px;\n  border: 2px solid ",
      ";\n  border-radius: 6px;\n  background-color: ",
      ";\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: ",
      ";\n\n  &:hover {\n    border-color: ",
      ";\n    transform: scale(1.1);\n  }\n\n  &:active {\n    transform: scale(0.95);\n  }\n",
    ])),
  function (props) {
    return props.selected ? colors.primary : colors.borderDefault;
  },
  function (props) {
    return props.color;
  },
  function (props) {
    return props.selected ? "0 0 0 2px " + colors.primaryLight : "none";
  },
  colors.primary
);

var _excluded$c = ["value", "onChange", "label", "disabled", "size", "showInput", "presets"];
var TxColorPicker = function TxColorPicker(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? "#000000" : _ref$value,
    onChange = _ref.onChange,
    label = _ref.label,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$showInput = _ref.showInput,
    showInput = _ref$showInput === void 0 ? true : _ref$showInput,
    _ref$presets = _ref.presets,
    presets = _ref$presets === void 0 ? [] : _ref$presets,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  var _useState = React$1.useState(value),
    localValue = _useState[0],
    setLocalValue = _useState[1];
  var handleColorChange = function handleColorChange(e) {
    var newColor = e.target.value;
    setLocalValue(newColor);
    if (onChange) {
      onChange(newColor, e);
    }
  };
  var handleInputChange = function handleInputChange(e) {
    var newColor = e.target.value;
    if (!newColor.startsWith("#")) {
      newColor = "#" + newColor;
    }
    var hexRegex = /^#[0-9A-F]{6}$/i;
    if (hexRegex.test(newColor)) {
      setLocalValue(newColor);
      if (onChange) {
        onChange(newColor, e);
      }
    }
  };
  var handlePresetClick = function handlePresetClick(color) {
    setLocalValue(color);
    if (onChange) {
      onChange(color);
    }
  };
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      StyledColorPickerWrapper,
      null,
      /*#__PURE__*/ React.createElement(
        StyledColorPickerInput,
        _extends(
          {
            type: "color",
            value: localValue,
            onChange: handleColorChange,
            disabled: disabled,
            size: size,
          },
          rest
        )
      ),
      label &&
        /*#__PURE__*/ React.createElement(
          StyledColorPickerLabel,
          {
            disabled: disabled,
          },
          label
        ),
      showInput &&
        /*#__PURE__*/ React.createElement(StyledColorValue, {
          type: "text",
          value: localValue,
          onChange: handleInputChange,
          disabled: disabled,
          maxLength: 7,
        })
    ),
    presets.length > 0 &&
      /*#__PURE__*/ React.createElement(
        StyledColorPresets,
        null,
        presets.map(function (preset) {
          return /*#__PURE__*/ React.createElement(StyledPresetColor, {
            key: preset,
            type: "button",
            color: preset,
            selected: localValue === preset,
            onClick: function onClick() {
              return handlePresetClick(preset);
            },
            disabled: disabled,
            title: preset,
          });
        })
      )
  );
};
TxColorPicker.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  label: propTypes.string,
  disabled: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  showInput: propTypes.bool,
  presets: propTypes.arrayOf(propTypes.string),
};
TxColorPicker.defaultProps = {
  value: "#000000",
  disabled: false,
  size: "medium",
  showInput: true,
  presets: [],
};

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol =
  /*#__PURE__*/ typeof Symbol !== "undefined"
    ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))
    : "@@iterator";

const _asyncIteratorSymbol =
  /*#__PURE__*/ typeof Symbol !== "undefined"
    ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))
    : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}

var _excluded$d = ["text", "compact", "children", "onCopy"];
var _templateObject$c;
var CopyButton = styled__default.button(
  _templateObject$c ||
    (_templateObject$c = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: ",
      ";\n  background: ",
      ";\n  border: 1px solid ",
      ";\n  border-radius: 6px;\n  color: ",
      ";\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
      ";\n    border-color: ",
      ";\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n",
    ])),
  function (props) {
    return props.compact ? "4px 8px" : "8px 16px";
  },
  function (props) {
    return props.copied ? colors.successLight : colors.bgFillLight;
  },
  colors.borderLight,
  function (props) {
    return props.copied ? colors.success : colors.textPrimary;
  },
  function (props) {
    return props.copied ? colors.successLight : colors.bgFillMedium;
  },
  function (props) {
    return props.copied ? colors.success : colors.borderMedium;
  }
);
var TxCopy = function TxCopy(_ref) {
  var text = _ref.text,
    _ref$compact = _ref.compact,
    compact = _ref$compact === void 0 ? false : _ref$compact,
    children = _ref.children,
    onCopy = _ref.onCopy,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  var _useState = React$1.useState(false),
    copied = _useState[0],
    setCopied = _useState[1];
  var handleCopy = function handleCopy() {
    try {
      var _temp = _catch(
        function () {
          return Promise.resolve(navigator.clipboard.writeText(text)).then(function () {
            setCopied(true);
            if (onCopy) onCopy(text);
            setTimeout(function () {
              return setCopied(false);
            }, 2000);
          });
        },
        function (err) {
          console.error("Failed to copy text:", err);
        }
      );
      return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return /*#__PURE__*/ React.createElement(
    CopyButton,
    _extends(
      {
        compact: compact,
        copied: copied ? 1 : 0,
        onClick: handleCopy,
      },
      props
    ),
    copied
      ? /*#__PURE__*/ React.createElement(
          Fragment,
          null,
          /*#__PURE__*/ React.createElement(TxIconOutline.IconCheck, {
            style: {
              width: "16px",
              height: "16px",
            },
          }),
          "Copied!"
        )
      : /*#__PURE__*/ React.createElement(
          Fragment,
          null,
          /*#__PURE__*/ React.createElement(TxIconOutline.IconCrossSmall, {
            style: {
              width: "16px",
              height: "16px",
            },
          }),
          children || "Copy"
        )
  );
};

var _excluded$e = ["targetDate", "size"];
var _templateObject$d, _templateObject2$a, _templateObject3$9, _templateObject4$6;
var CountdownContainer = styled__default.div(
  _templateObject$d || (_templateObject$d = _taggedTemplateLiteralLoose(["\n  display: flex;\n  gap: 8px;\n"]))
);
var CountdownUnit = styled__default.div(
  _templateObject2$a ||
    (_templateObject2$a = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n",
    ]))
);
var CountdownValue = styled__default.div(
  _templateObject3$9 ||
    (_templateObject3$9 = _taggedTemplateLiteralLoose([
      "\n  font-size: ",
      ";\n  font-weight: 700;\n  color: ",
      ";\n  line-height: 1;\n",
    ])),
  function (props) {
    return props.size || "32px";
  },
  colors.textPrimary
);
var CountdownLabel = styled__default.div(
  _templateObject4$6 ||
    (_templateObject4$6 = _taggedTemplateLiteralLoose([
      "\n  font-size: 12px;\n  color: ",
      ";\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n",
    ])),
  colors.textSecondary
);
var TxCountdown = function TxCountdown(_ref) {
  var targetDate = _ref.targetDate,
    size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  var _useState = React$1.useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }),
    timeLeft = _useState[0],
    setTimeLeft = _useState[1];
  React$1.useEffect(
    function () {
      var calculateTimeLeft = function calculateTimeLeft() {
        var difference = new Date(targetDate) - new Date();
        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        }
      };
      calculateTimeLeft();
      var timer = setInterval(calculateTimeLeft, 1000);
      return function () {
        return clearInterval(timer);
      };
    },
    [targetDate]
  );
  return /*#__PURE__*/ React.createElement(
    CountdownContainer,
    props,
    /*#__PURE__*/ React.createElement(
      CountdownUnit,
      null,
      /*#__PURE__*/ React.createElement(
        CountdownValue,
        {
          size: size,
        },
        String(timeLeft.days).padStart(2, "0")
      ),
      /*#__PURE__*/ React.createElement(CountdownLabel, null, "Days")
    ),
    /*#__PURE__*/ React.createElement(
      CountdownUnit,
      null,
      /*#__PURE__*/ React.createElement(
        CountdownValue,
        {
          size: size,
        },
        String(timeLeft.hours).padStart(2, "0")
      ),
      /*#__PURE__*/ React.createElement(CountdownLabel, null, "Hours")
    ),
    /*#__PURE__*/ React.createElement(
      CountdownUnit,
      null,
      /*#__PURE__*/ React.createElement(
        CountdownValue,
        {
          size: size,
        },
        String(timeLeft.minutes).padStart(2, "0")
      ),
      /*#__PURE__*/ React.createElement(CountdownLabel, null, "Minutes")
    ),
    /*#__PURE__*/ React.createElement(
      CountdownUnit,
      null,
      /*#__PURE__*/ React.createElement(
        CountdownValue,
        {
          size: size,
        },
        String(timeLeft.seconds).padStart(2, "0")
      ),
      /*#__PURE__*/ React.createElement(CountdownLabel, null, "Seconds")
    )
  );
};

var _templateObject$e, _templateObject2$b, _templateObject3$a;
var StyledDatePickerWrapper = styled__default.div(
  _templateObject$e ||
    (_templateObject$e = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  width: ",
      ";\n  min-width: 200px;\n",
    ])),
  function (props) {
    return props.fullWidth ? "100%" : "auto";
  }
);
var StyledDatePickerInput = styled__default.input(
  _templateObject2$b ||
    (_templateObject2$b = _taggedTemplateLiteralLoose([
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
    if (props.disabled) return colors.borderDisabled;
    if (props.status === "error") return colors.danger;
    if (props.status === "success") return colors.success;
    if (props.status === "warning") return colors.warning;
    return colors.borderLight;
  },
  function (props) {
    return props.disabled ? colors.bgFillLight : colors.bgWhite;
  },
  function (props) {
    return props.disabled ? colors.textDisabled : colors.textPrimary;
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
  colors.placeholder,
  function (props) {
    return props.status === "error" ? colors.danger : colors.primary;
  },
  colors.primary,
  colors.primaryLight
);
var StyledDatePickerIcon = styled__default.span(
  _templateObject3$a ||
    (_templateObject3$a = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: ",
      ";\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.disabled ? colors.textDisabled : colors.textSecondary;
  }
);

var _excluded$f = ["value", "onChange", "placeholder", "disabled", "size", "status", "fullWidth", "type", "min", "max"];
var CalendarIcon = function CalendarIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10",
    })
  );
};
var TxDatePicker = function TxDatePicker(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select date" : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    status = _ref.status,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "date" : _ref$type,
    min = _ref.min,
    max = _ref.max,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  var handleChange = function handleChange(e) {
    if (!disabled && onChange) {
      onChange(e.target.value, e);
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledDatePickerWrapper,
    {
      fullWidth: fullWidth,
    },
    /*#__PURE__*/ React.createElement(
      StyledDatePickerInput,
      _extends(
        {
          type: type,
          value: value,
          onChange: handleChange,
          placeholder: placeholder,
          disabled: disabled,
          size: size,
          status: status,
          min: min,
          max: max,
        },
        rest
      )
    ),
    /*#__PURE__*/ React.createElement(
      StyledDatePickerIcon,
      {
        disabled: disabled,
      },
      /*#__PURE__*/ React.createElement(CalendarIcon, null)
    )
  );
};
TxDatePicker.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  status: propTypes.oneOf(["success", "warning", "error"]),
  fullWidth: propTypes.bool,
  type: propTypes.oneOf(["date", "datetime-local", "month", "week", "time"]),
  min: propTypes.string,
  max: propTypes.string,
};
TxDatePicker.defaultProps = {
  placeholder: "Select date",
  disabled: false,
  size: "medium",
  fullWidth: false,
  type: "date",
};

var _excluded$g = ["onChange"];
var _templateObject$f, _templateObject2$c;
var DateRangeContainer = styled__default.div(
  _templateObject$f ||
    (_templateObject$f = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n",
    ]))
);
var DateInput = styled__default.input(
  _templateObject2$c ||
    (_templateObject2$c = _taggedTemplateLiteralLoose([
      "\n  padding: 8px 12px;\n  border: 1px solid ",
      ";\n  border-radius: 6px;\n  font-size: 14px;\n  width: 150px;\n\n  &:focus {\n    outline: none;\n    border-color: ",
      ";\n  }\n",
    ])),
  colors.borderLight,
  colors.primary
);
var TxDateRangePicker = function TxDateRangePicker(_ref) {
  var onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  var _useState = React$1.useState(""),
    startDate = _useState[0],
    setStartDate = _useState[1];
  var _useState2 = React$1.useState(""),
    endDate = _useState2[0],
    setEndDate = _useState2[1];
  var handleStartChange = function handleStartChange(e) {
    setStartDate(e.target.value);
    if (onChange)
      onChange({
        start: e.target.value,
        end: endDate,
      });
  };
  var handleEndChange = function handleEndChange(e) {
    setEndDate(e.target.value);
    if (onChange)
      onChange({
        start: startDate,
        end: e.target.value,
      });
  };
  return /*#__PURE__*/ React.createElement(
    DateRangeContainer,
    props,
    /*#__PURE__*/ React.createElement(DateInput, {
      type: "date",
      value: startDate,
      onChange: handleStartChange,
    }),
    /*#__PURE__*/ React.createElement("span", null, "to"),
    /*#__PURE__*/ React.createElement(DateInput, {
      type: "date",
      value: endDate,
      onChange: handleEndChange,
    })
  );
};

var _excluded$h = ["vertical", "thickness", "margin"];
var _templateObject$g;
var DividerStyled = styled__default.hr(
  _templateObject$g ||
    (_templateObject$g = _taggedTemplateLiteralLoose([
      "\n  border: none;\n  border-top: ",
      " solid ",
      ";\n  margin: ",
      " 0;\n  ",
      "\n",
    ])),
  function (props) {
    return props.thickness || "1px";
  },
  colors.borderLight,
  function (props) {
    return props.margin || "16px";
  },
  function (props) {
    return (
      props.vertical &&
      "\n    border-top: none;\n    border-left: " +
        (props.thickness || "1px") +
        " solid " +
        colors.borderLight +
        ";\n    display: inline-block;\n    margin: 0 " +
        (props.margin || "8px") +
        ";\n    vertical-align: middle;\n  "
    );
  }
);
var TxDivider = function TxDivider(_ref) {
  var _ref$vertical = _ref.vertical,
    vertical = _ref$vertical === void 0 ? false : _ref$vertical,
    thickness = _ref.thickness,
    margin = _ref.margin,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  return /*#__PURE__*/ React.createElement(
    DividerStyled,
    _extends(
      {
        vertical: vertical ? 1 : 0,
        thickness: thickness,
        margin: margin,
      },
      props
    )
  );
};

var _excluded$i = ["onDrop", "compact", "children"];
var _templateObject$h, _templateObject2$d, _templateObject3$b;
var DropZone = styled__default.div(
  _templateObject$h ||
    (_templateObject$h = _taggedTemplateLiteralLoose([
      "\n  border: 2px dashed ",
      ";\n  background: ",
      ";\n  border-radius: 8px;\n  padding: ",
      ";\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    border-color: ",
      ";\n    background: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.isDragging ? colors.primary : colors.borderLight;
  },
  function (props) {
    return props.isDragging ? colors.primaryLight : colors.bgFillLight;
  },
  function (props) {
    return props.compact ? "20px" : "40px";
  },
  colors.primary,
  colors.primaryLight
);
var DropZoneIcon = styled__default.div(
  _templateObject2$d ||
    (_templateObject2$d = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  color: ",
      ";\n",
    ])),
  colors.textSecondary
);
var DropZoneText = styled__default.div(
  _templateObject3$b || (_templateObject3$b = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 14px;\n"])),
  colors.textSecondary
);
var TxDnd = function TxDnd(_ref) {
  var onDrop = _ref.onDrop,
    _ref$compact = _ref.compact,
    compact = _ref$compact === void 0 ? false : _ref$compact,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  var _useState = React$1.useState(false),
    isDragging = _useState[0],
    setIsDragging = _useState[1];
  var fileInputRef = React$1.useRef(null);
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  };
  var handleDragLeave = function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  };
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    var files = Array.from(e.dataTransfer.files);
    if (onDrop) {
      onDrop(files);
    }
  };
  var handleClick = function handleClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  var handleFileChange = function handleFileChange(e) {
    var files = Array.from(e.target.files);
    if (onDrop) {
      onDrop(files);
    }
  };
  return /*#__PURE__*/ React.createElement(
    Fragment,
    null,
    /*#__PURE__*/ React.createElement("input", {
      ref: fileInputRef,
      type: "file",
      multiple: true,
      style: {
        display: "none",
      },
      onChange: handleFileChange,
    }),
    /*#__PURE__*/ React.createElement(
      DropZone,
      _extends(
        {
          isDragging: isDragging,
          compact: compact,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onDrop: handleDrop,
          onClick: handleClick,
        },
        props
      ),
      /*#__PURE__*/ React.createElement(
        DropZoneIcon,
        null,
        /*#__PURE__*/ React.createElement(TxIconOutline.IconCrossSmall, {
          style: {
            width: "48px",
            height: "48px",
          },
        })
      ),
      /*#__PURE__*/ React.createElement(DropZoneText, null, children || "Drag and drop files here, or click to select")
    )
  );
};

var _templateObject$i,
  _templateObject2$e,
  _templateObject3$c,
  _templateObject4$7,
  _templateObject5$4,
  _templateObject6$3,
  _templateObject7$2,
  _templateObject8,
  _templateObject9,
  _templateObject10,
  _templateObject11,
  _templateObject12;
var fadeIn = styled.keyframes(
  _templateObject$i ||
    (_templateObject$i = _taggedTemplateLiteralLoose([
      "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
    ]))
);
var slideInLeft = styled.keyframes(
  _templateObject2$e ||
    (_templateObject2$e = _taggedTemplateLiteralLoose([
      "\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n",
    ]))
);
var slideInRight = styled.keyframes(
  _templateObject3$c ||
    (_templateObject3$c = _taggedTemplateLiteralLoose([
      "\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n",
    ]))
);
var slideInTop = styled.keyframes(
  _templateObject4$7 ||
    (_templateObject4$7 = _taggedTemplateLiteralLoose([
      "\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n",
    ]))
);
var slideInBottom = styled.keyframes(
  _templateObject5$4 ||
    (_templateObject5$4 = _taggedTemplateLiteralLoose([
      "\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n",
    ]))
);
var StyledDrawerOverlay = styled__default.div(
  _templateObject6$3 ||
    (_templateObject6$3 = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  animation: ",
      " 0.2s ease;\n",
    ])),
  fadeIn
);
var StyledDrawerContent = styled__default.div(
  _templateObject7$2 ||
    (_templateObject7$2 = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  background: ",
      ";\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  z-index: 1001;\n\n  ",
      "\n",
    ])),
  colors.bgWhite,
  function (props) {
    switch (props.placement) {
      case "left":
        return (
          "\n          top: 0;\n          left: 0;\n          bottom: 0;\n          width: " +
          (props.width || "378px") +
          ";\n          animation: " +
          slideInLeft +
          " 0.3s ease;\n        "
        );
      case "right":
        return (
          "\n          top: 0;\n          right: 0;\n          bottom: 0;\n          width: " +
          (props.width || "378px") +
          ";\n          animation: " +
          slideInRight +
          " 0.3s ease;\n        "
        );
      case "top":
        return (
          "\n          top: 0;\n          left: 0;\n          right: 0;\n          height: " +
          (props.height || "378px") +
          ";\n          animation: " +
          slideInTop +
          " 0.3s ease;\n        "
        );
      case "bottom":
        return (
          "\n          bottom: 0;\n          left: 0;\n          right: 0;\n          height: " +
          (props.height || "378px") +
          ";\n          animation: " +
          slideInBottom +
          " 0.3s ease;\n        "
        );
      default:
        return (
          "\n          top: 0;\n          right: 0;\n          bottom: 0;\n          width: " +
          (props.width || "378px") +
          ";\n          animation: " +
          slideInRight +
          " 0.3s ease;\n        "
        );
    }
  }
);
var StyledDrawerHeader = styled__default.div(
  _templateObject8 ||
    (_templateObject8 = _taggedTemplateLiteralLoose([
      "\n  padding: 20px 24px;\n  border-bottom: 1px solid ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
    ])),
  colors.borderLight
);
var StyledDrawerTitle = styled__default.h3(
  _templateObject9 ||
    (_templateObject9 = _taggedTemplateLiteralLoose([
      "\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",
      ";\n",
    ])),
  colors.textPrimary
);
var StyledDrawerClose = styled__default.button(
  _templateObject10 ||
    (_templateObject10 = _taggedTemplateLiteralLoose([
      "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
      ";\n    color: ",
      ";\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
    ])),
  colors.textSecondary,
  colors.bgFill,
  colors.textPrimary
);
var StyledDrawerBody = styled__default.div(
  _templateObject11 ||
    (_templateObject11 = _taggedTemplateLiteralLoose(["\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n"]))
);
var StyledDrawerFooter = styled__default.div(
  _templateObject12 ||
    (_templateObject12 = _taggedTemplateLiteralLoose([
      "\n  padding: 16px 24px;\n  border-top: 1px solid ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n",
    ])),
  colors.borderLight
);

var _excluded$j = [
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
];
var CloseIcon = function CloseIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    })
  );
};
var TxDrawer = function TxDrawer(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children,
    footer = _ref.footer,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "right" : _ref$placement,
    width = _ref.width,
    height = _ref.height,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$j);
  React$1.useEffect(
    function () {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return function () {
        document.body.style.overflow = "unset";
      };
    },
    [open]
  );
  var handleOverlayClick = function handleOverlayClick() {
    if (maskClosable && onClose) {
      onClose();
    }
  };
  var handleClose = function handleClose() {
    if (onClose) {
      onClose();
    }
  };
  if (!open) return null;
  return /*#__PURE__*/ React.createElement(
    Fragment,
    null,
    /*#__PURE__*/ React.createElement(StyledDrawerOverlay, {
      onClick: handleOverlayClick,
    }),
    /*#__PURE__*/ React.createElement(
      StyledDrawerContent,
      _extends(
        {
          placement: placement,
          width: width,
          height: height,
        },
        rest
      ),
      (title || closable) &&
        /*#__PURE__*/ React.createElement(
          StyledDrawerHeader,
          null,
          title && /*#__PURE__*/ React.createElement(StyledDrawerTitle, null, title),
          closable &&
            /*#__PURE__*/ React.createElement(
              StyledDrawerClose,
              {
                onClick: handleClose,
                type: "button",
              },
              /*#__PURE__*/ React.createElement(CloseIcon, null)
            )
        ),
      /*#__PURE__*/ React.createElement(StyledDrawerBody, null, children),
      footer && /*#__PURE__*/ React.createElement(StyledDrawerFooter, null, footer)
    )
  );
};
TxDrawer.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  children: propTypes.node,
  footer: propTypes.node,
  placement: propTypes.oneOf(["left", "right", "top", "bottom"]),
  width: propTypes.string,
  height: propTypes.string,
  closable: propTypes.bool,
  maskClosable: propTypes.bool,
};
TxDrawer.defaultProps = {
  open: false,
  placement: "right",
  closable: true,
  maskClosable: true,
};

var _templateObject$j, _templateObject2$f, _templateObject3$d, _templateObject4$8;
var StyledDropdownWrapper = styled__default.div(
  _templateObject$j ||
    (_templateObject$j = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n"]))
);
var StyledDropdownMenu = styled__default.div(
  _templateObject2$f ||
    (_templateObject2$f = _taggedTemplateLiteralLoose([
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
        return "0";
      case "topRight":
      case "bottomRight":
        return "auto";
      default:
        return "0";
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
    if (props.placement === "topLeft" || props.placement === "topRight") {
      return "calc(100% + 8px)";
    }
    return "auto";
  },
  colors.bgWhite,
  function (props) {
    return props.visible ? 1 : 0;
  },
  function (props) {
    return props.visible ? "visible" : "hidden";
  },
  function (props) {
    return props.visible ? "translateY(0)" : "translateY(-10px)";
  }
);
var StyledDropdownItem = styled__default.div(
  _templateObject3$d ||
    (_templateObject3$d = _taggedTemplateLiteralLoose([
      "\n  padding: 8px 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
      ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ",
      ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: ",
      ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.danger ? colors.danger : colors.textPrimary;
  },
  function (props) {
    return props.danger ? colors.dangerLight : colors.bgFill;
  },
  colors.textTertiary
);
var StyledDropdownDivider = styled__default.div(
  _templateObject4$8 ||
    (_templateObject4$8 = _taggedTemplateLiteralLoose([
      "\n  height: 1px;\n  background-color: ",
      ";\n  margin: 4px 0;\n",
    ])),
  colors.borderLight
);

var _excluded$k = ["children", "menu", "placement", "trigger", "onMenuClick"];
var TxDropdown = function TxDropdown(_ref) {
  var children = _ref.children,
    _ref$menu = _ref.menu,
    menu = _ref$menu === void 0 ? [] : _ref$menu,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "bottomLeft" : _ref$placement,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? "hover" : _ref$trigger,
    onMenuClick = _ref.onMenuClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$k);
  var _useState = React$1.useState(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var wrapperRef = React$1.useRef(null);
  React$1.useEffect(
    function () {
      var handleClickOutside = function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setVisible(false);
        }
      };
      if (visible) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [visible]
  );
  var handleMouseEnter = function handleMouseEnter() {
    if (trigger === "hover") {
      setVisible(true);
    }
  };
  var handleMouseLeave = function handleMouseLeave() {
    if (trigger === "hover") {
      setVisible(false);
    }
  };
  var handleClick = function handleClick() {
    if (trigger === "click") {
      setVisible(!visible);
    }
  };
  var handleMenuItemClick = function handleMenuItemClick(key, item) {
    if (!item.disabled) {
      if (onMenuClick) {
        onMenuClick(key);
      }
      setVisible(false);
    }
  };
  var renderMenuItem = function renderMenuItem(item) {
    if (item.type === "divider") {
      return /*#__PURE__*/ React.createElement(StyledDropdownDivider, {
        key: item.key || Math.random(),
      });
    }
    return /*#__PURE__*/ React.createElement(
      StyledDropdownItem,
      {
        key: item.key,
        onClick: function onClick() {
          return handleMenuItemClick(item.key, item);
        },
        disabled: item.disabled,
        danger: item.danger,
      },
      item.icon,
      item.label
    );
  };
  return /*#__PURE__*/ React.createElement(
    StyledDropdownWrapper,
    _extends(
      {
        ref: wrapperRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
      },
      rest
    ),
    children,
    /*#__PURE__*/ React.createElement(
      StyledDropdownMenu,
      {
        visible: visible,
        placement: placement,
      },
      menu.map(function (item) {
        return renderMenuItem(item);
      })
    )
  );
};
TxDropdown.propTypes = {
  children: propTypes.node.isRequired,
  menu: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      label: propTypes.node,
      icon: propTypes.node,
      disabled: propTypes.bool,
      danger: propTypes.bool,
      type: propTypes.oneOf(["divider"]),
    })
  ),
  placement: propTypes.oneOf(["topLeft", "topRight", "bottomLeft", "bottomRight"]),
  trigger: propTypes.oneOf(["hover", "click"]),
  onMenuClick: propTypes.func,
};
TxDropdown.defaultProps = {
  menu: [],
  placement: "bottomLeft",
  trigger: "hover",
};

var _excluded$l = ["value", "onChange", "placeholder"];
var _templateObject$k, _templateObject2$g, _templateObject3$e, _templateObject4$9;
var EditorContainer = styled__default.div(
  _templateObject$k ||
    (_templateObject$k = _taggedTemplateLiteralLoose([
      "\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  overflow: hidden;\n",
    ])),
  colors.borderLight
);
var EditorToolbar = styled__default.div(
  _templateObject2$g ||
    (_templateObject2$g = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  padding: 8px 16px;\n  border-bottom: 1px solid ",
      ";\n  display: flex;\n  gap: 8px;\n",
    ])),
  colors.bgFillLight,
  colors.borderLight
);
var EditorButton = styled__default.button(
  _templateObject3$e ||
    (_templateObject3$e = _taggedTemplateLiteralLoose([
      "\n  padding: 4px 8px;\n  background: transparent;\n  border: 1px solid ",
      ";\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n\n  &:hover {\n    background: ",
      ";\n  }\n",
    ])),
  colors.borderLight,
  colors.bgFillMedium
);
var EditorContent = styled__default.textarea(
  _templateObject4$9 ||
    (_templateObject4$9 = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  border: none;\n  padding: 16px;\n  font-size: 14px;\n  resize: vertical;\n  min-height: 300px;\n\n  &:focus {\n    outline: none;\n  }\n",
    ]))
);
var TxEditor = function TxEditor(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    _onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Start typing..." : _ref$placeholder,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$l);
  return /*#__PURE__*/ React.createElement(
    EditorContainer,
    props,
    /*#__PURE__*/ React.createElement(
      EditorToolbar,
      null,
      /*#__PURE__*/ React.createElement(EditorButton, null, "B"),
      /*#__PURE__*/ React.createElement(EditorButton, null, "I"),
      /*#__PURE__*/ React.createElement(EditorButton, null, "U")
    ),
    /*#__PURE__*/ React.createElement(EditorContent, {
      value: value,
      onChange: function onChange(e) {
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(e.target.value);
      },
      placeholder: placeholder,
    })
  );
};

var _excluded$m = ["image", "title", "description"];
var _templateObject$l, _templateObject2$h, _templateObject3$f, _templateObject4$a;
var EmptyContainer = styled__default.div(
  _templateObject$l ||
    (_templateObject$l = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  color: ",
      ";\n  text-align: center;\n",
    ])),
  colors.textSecondary
);
var EmptyImage = styled__default.div(
  _templateObject2$h ||
    (_templateObject2$h = _taggedTemplateLiteralLoose([
      "\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.3;\n",
    ]))
);
var EmptyTitle = styled__default.div(
  _templateObject3$f ||
    (_templateObject3$f = _taggedTemplateLiteralLoose([
      "\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: ",
      ";\n",
    ])),
  colors.textPrimary
);
var EmptyDescription = styled__default.div(
  _templateObject4$a || (_templateObject4$a = _taggedTemplateLiteralLoose(["\n  font-size: 14px;\n  color: ", ";\n"])),
  colors.textSecondary
);
var TxEmpty = function TxEmpty(_ref) {
  var _ref$image = _ref.image,
    image = _ref$image === void 0 ? "📭" : _ref$image,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "No Data" : _ref$title,
    description = _ref.description,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$m);
  return /*#__PURE__*/ React.createElement(
    EmptyContainer,
    props,
    /*#__PURE__*/ React.createElement(EmptyImage, null, image),
    /*#__PURE__*/ React.createElement(EmptyTitle, null, title),
    description && /*#__PURE__*/ React.createElement(EmptyDescription, null, description)
  );
};

var _excluded$n = ["direction", "align", "justify", "gap", "width", "children"];
var _templateObject$m;
var FlexContainer = styled__default.div(
  _templateObject$m ||
    (_templateObject$m = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: ",
      ";\n  align-items: ",
      ";\n  justify-content: ",
      ";\n  gap: ",
      ";\n  width: ",
      ";\n",
    ])),
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
);
var TxFlex = function TxFlex(_ref) {
  var direction = _ref.direction,
    align = _ref.align,
    justify = _ref.justify,
    gap = _ref.gap,
    width = _ref.width,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$n);
  return /*#__PURE__*/ React.createElement(
    FlexContainer,
    _extends(
      {
        direction: direction,
        align: align,
        justify: justify,
        gap: gap,
        width: width,
      },
      props
    ),
    children
  );
};

var _templateObject$n,
  _templateObject2$i,
  _templateObject3$g,
  _templateObject4$b,
  _templateObject5$5,
  _templateObject6$4,
  _templateObject7$3;
var FormWrapper = styled__default.form(
  _templateObject$n || (_templateObject$n = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"]))
);
var FormItem = styled__default.div(
  _templateObject2$i ||
    (_templateObject2$i = _taggedTemplateLiteralLoose([
      "\n  margin-bottom: ",
      ";\n  display: flex;\n  flex-direction: ",
      ";\n  align-items: ",
      ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n",
    ])),
  function (props) {
    return props.noMargin ? "0" : "24px";
  },
  function (props) {
    return props.layout === "horizontal" ? "row" : "column";
  },
  function (props) {
    return props.layout === "horizontal" ? "flex-start" : "stretch";
  }
);
var FormLabel = styled__default.label(
  _templateObject3$g ||
    (_templateObject3$g = _taggedTemplateLiteralLoose([
      "\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
      ";\n  margin-bottom: ",
      ";\n  margin-right: ",
      ";\n  min-width: ",
      ";\n  padding-top: ",
      ";\n\n  ",
      "\n\n  ",
      "\n",
    ])),
  colors.textPrimary,
  function (props) {
    return props.layout === "horizontal" ? "0" : "8px";
  },
  function (props) {
    return props.layout === "horizontal" ? "16px" : "0";
  },
  function (props) {
    return props.layout === "horizontal" ? "120px" : "auto";
  },
  function (props) {
    return props.layout === "horizontal" ? "8px" : "0";
  },
  function (props) {
    return (
      props.required &&
      '\n    &::before {\n      content: "*";\n      color: ' +
        colors.danger[500] +
        ";\n      margin-right: 4px;\n    }\n  "
    );
  },
  function (props) {
    return (
      props.colon &&
      props.layout === "horizontal" &&
      '\n    &::after {\n      content: ":";\n      margin-left: 2px;\n    }\n  '
    );
  }
);
var FormControl = styled__default.div(
  _templateObject4$b || (_templateObject4$b = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  position: relative;\n"]))
);
var FormError = styled__default.div(
  _templateObject5$5 ||
    (_templateObject5$5 = _taggedTemplateLiteralLoose([
      "\n  font-size: 12px;\n  color: ",
      ";\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
    ])),
  colors.danger[500]
);
var FormHelp = styled__default.div(
  _templateObject6$4 ||
    (_templateObject6$4 = _taggedTemplateLiteralLoose(["\n  font-size: 12px;\n  color: ", ";\n  margin-top: 4px;\n"])),
  colors.textSecondary
);
var FormFooter = styled__default.div(
  _templateObject7$3 ||
    (_templateObject7$3 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  justify-content: ",
      ";\n  padding-left: ",
      ";\n",
    ])),
  function (props) {
    switch (props.align) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
        return "center";
      default:
        return "flex-start";
    }
  },
  function (props) {
    return props.layout === "horizontal" && props.labelWidth ? props.labelWidth : "0";
  }
);

var _excluded$o = ["layout", "onSubmit", "children", "className"],
  _excluded2$2 = ["label", "required", "error", "help", "layout", "colon", "noMargin", "children", "className"],
  _excluded3 = ["align", "layout", "labelWidth", "children", "className"];
var TxForm = function TxForm(_ref) {
  var onSubmit = _ref.onSubmit,
    children = _ref.children,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };
  return /*#__PURE__*/ React.createElement(
    FormWrapper,
    _extends(
      {
        onSubmit: handleSubmit,
        className: className,
      },
      props
    ),
    children
  );
};
TxForm.propTypes = {
  layout: propTypes.oneOf(["horizontal", "vertical"]),
  onSubmit: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
};
TxForm.defaultProps = {
  layout: "vertical",
  onSubmit: undefined,
  children: null,
  className: "",
};
var TxFormItem = function TxFormItem(_ref2) {
  var label = _ref2.label,
    _ref2$required = _ref2.required,
    required = _ref2$required === void 0 ? false : _ref2$required,
    _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? "" : _ref2$error,
    _ref2$help = _ref2.help,
    help = _ref2$help === void 0 ? "" : _ref2$help,
    _ref2$layout = _ref2.layout,
    layout = _ref2$layout === void 0 ? "vertical" : _ref2$layout,
    _ref2$colon = _ref2.colon,
    colon = _ref2$colon === void 0 ? true : _ref2$colon,
    _ref2$noMargin = _ref2.noMargin,
    noMargin = _ref2$noMargin === void 0 ? false : _ref2$noMargin,
    children = _ref2.children,
    className = _ref2.className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);
  return /*#__PURE__*/ React.createElement(
    FormItem,
    _extends(
      {
        layout: layout,
        noMargin: noMargin,
        className: className,
      },
      props
    ),
    label &&
      /*#__PURE__*/ React.createElement(
        FormLabel,
        {
          layout: layout,
          required: required,
          colon: colon,
        },
        label
      ),
    /*#__PURE__*/ React.createElement(
      FormControl,
      null,
      children,
      error &&
        /*#__PURE__*/ React.createElement(
          FormError,
          null,
          /*#__PURE__*/ React.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
            },
            /*#__PURE__*/ React.createElement("circle", {
              cx: "12",
              cy: "12",
              r: "10",
            }),
            /*#__PURE__*/ React.createElement("line", {
              x1: "12",
              y1: "8",
              x2: "12",
              y2: "12",
            }),
            /*#__PURE__*/ React.createElement("line", {
              x1: "12",
              y1: "16",
              x2: "12.01",
              y2: "16",
            })
          ),
          error
        ),
      !error && help && /*#__PURE__*/ React.createElement(FormHelp, null, help)
    )
  );
};
TxFormItem.propTypes = {
  label: propTypes.string,
  required: propTypes.bool,
  error: propTypes.string,
  help: propTypes.string,
  layout: propTypes.oneOf(["horizontal", "vertical"]),
  colon: propTypes.bool,
  noMargin: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
};
TxFormItem.defaultProps = {
  label: "",
  required: false,
  error: "",
  help: "",
  layout: "vertical",
  colon: true,
  noMargin: false,
  children: null,
  className: "",
};
var TxFormFooter = function TxFormFooter(_ref3) {
  var _ref3$align = _ref3.align,
    align = _ref3$align === void 0 ? "left" : _ref3$align,
    _ref3$layout = _ref3.layout,
    layout = _ref3$layout === void 0 ? "vertical" : _ref3$layout,
    _ref3$labelWidth = _ref3.labelWidth,
    labelWidth = _ref3$labelWidth === void 0 ? "120px" : _ref3$labelWidth,
    children = _ref3.children,
    className = _ref3.className,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded3);
  return /*#__PURE__*/ React.createElement(
    FormFooter,
    _extends(
      {
        align: align,
        layout: layout,
        labelWidth: labelWidth,
        className: className,
      },
      props
    ),
    children
  );
};
TxFormFooter.propTypes = {
  align: propTypes.oneOf(["left", "center", "right"]),
  layout: propTypes.oneOf(["horizontal", "vertical"]),
  labelWidth: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
};
TxFormFooter.defaultProps = {
  align: "left",
  layout: "vertical",
  labelWidth: "120px",
  children: null,
  className: "",
};
TxForm.Item = TxFormItem;
TxForm.Footer = TxFormFooter;

var _excluded$p = ["columns", "gap", "children"],
  _excluded2$3 = ["children"];
var _templateObject$o, _templateObject2$j;
var GridContainer = styled__default.div(
  _templateObject$o ||
    (_templateObject$o = _taggedTemplateLiteralLoose([
      "\n  display: grid;\n  grid-template-columns: ",
      ";\n  gap: ",
      ";\n  width: 100%;\n",
    ])),
  function (props) {
    return props.columns || "repeat(auto-fit, minmax(200px, 1fr))";
  },
  function (props) {
    return props.gap || "16px";
  }
);
var GridItem = styled__default.div(
  _templateObject2$j ||
    (_templateObject2$j = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  padding: 16px;\n  border-radius: 8px;\n",
    ])),
  colors.bgFillLight
);
var TxGrid = function TxGrid(_ref) {
  var columns = _ref.columns,
    gap = _ref.gap,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$p);
  return /*#__PURE__*/ React.createElement(
    GridContainer,
    _extends(
      {
        columns: columns,
        gap: gap,
      },
      props
    ),
    children
  );
};
var TxGridItem = function TxGridItem(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$3);
  return /*#__PURE__*/ React.createElement(GridItem, props, children);
};

var _excluded$q = ["src", "alt", "width", "height", "radius", "zoom", "objectFit", "placeholder"];
var _templateObject$p, _templateObject2$k, _templateObject3$h;
var ImageWrapper = styled__default.div(
  _templateObject$p ||
    (_templateObject$p = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  overflow: hidden;\n  border-radius: ",
      ";\n",
    ])),
  function (props) {
    return props.radius || "8px";
  }
);
var StyledImage = styled__default.img(
  _templateObject2$k ||
    (_templateObject2$k = _taggedTemplateLiteralLoose([
      "\n  width: ",
      ";\n  height: ",
      ";\n  object-fit: ",
      ";\n  display: block;\n  transition: all 0.3s ease;\n\n  &:hover {\n    ",
      "\n  }\n",
    ])),
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
);
var Placeholder = styled__default.div(
  _templateObject3$h ||
    (_templateObject3$h = _taggedTemplateLiteralLoose([
      "\n  width: ",
      ";\n  height: ",
      ";\n  background: ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
      ";\n  font-size: 14px;\n",
    ])),
  function (props) {
    return props.width || "100%";
  },
  function (props) {
    return props.height || "200px";
  },
  colors.bgFillLight,
  colors.textSecondary
);
var TxImage = function TxImage(_ref) {
  var src = _ref.src,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "Image" : _ref$alt,
    width = _ref.width,
    height = _ref.height,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? "8px" : _ref$radius,
    _ref$zoom = _ref.zoom,
    zoom = _ref$zoom === void 0 ? false : _ref$zoom,
    _ref$objectFit = _ref.objectFit,
    objectFit = _ref$objectFit === void 0 ? "cover" : _ref$objectFit,
    placeholder = _ref.placeholder,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$q);
  var _useState = React$1.useState(true),
    loading = _useState[0],
    setLoading = _useState[1];
  var _useState2 = React$1.useState(false),
    error = _useState2[0],
    setError = _useState2[1];
  var handleLoad = function handleLoad() {
    setLoading(false);
  };
  var handleError = function handleError() {
    setLoading(false);
    setError(true);
  };
  return /*#__PURE__*/ React.createElement(
    ImageWrapper,
    {
      radius: radius,
    },
    (loading || error) &&
      /*#__PURE__*/ React.createElement(
        Placeholder,
        {
          width: width,
          height: height,
        },
        error ? placeholder || "Failed to load image" : "Loading..."
      ),
    src &&
      /*#__PURE__*/ React.createElement(
        StyledImage,
        _extends(
          {
            src: src,
            alt: alt,
            width: width,
            height: height,
            objectFit: objectFit,
            zoom: zoom ? 1 : 0,
            onLoad: handleLoad,
            onError: handleError,
            style: {
              display: loading || error ? "none" : "block",
            },
          },
          props
        )
      )
  );
};

var _templateObject$q, _templateObject2$l, _templateObject3$i, _templateObject4$c;
var StyledInputNumberWrapper = styled__default.div(
  _templateObject$q ||
    (_templateObject$q = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: ",
      ";\n",
    ])),
  function (props) {
    return props.fullWidth ? "100%" : "auto";
  }
);
var StyledInputNumber = styled__default.input(
  _templateObject2$l ||
    (_templateObject2$l = _taggedTemplateLiteralLoose([
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
    if (props.disabled) return colors.borderDisabled;
    if (props.status === "error") return colors.danger;
    if (props.status === "success") return colors.success;
    if (props.status === "warning") return colors.warning;
    return colors.borderLight;
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
    return props.disabled ? colors.textDisabled : colors.textPrimary;
  },
  function (props) {
    return props.disabled ? colors.bgFillLight : colors.bgWhite;
  },
  colors.placeholder,
  function (props) {
    return props.status === "error" ? colors.danger : colors.primary;
  },
  colors.primary,
  colors.primaryLight
);
var StyledControls = styled__default.div(
  _templateObject3$i ||
    (_templateObject3$i = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  right: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n",
    ]))
);
var StyledControlButton = styled__default.button(
  _templateObject4$c ||
    (_templateObject4$c = _taggedTemplateLiteralLoose([
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
    return props.disabled ? colors.textDisabled : colors.textSecondary;
  },
  function (props) {
    return props.disabled ? "not-allowed" : "pointer";
  },
  colors.bgFill,
  colors.primary,
  colors.bgPrimaryLight
);

var _excluded$r = ["value", "onChange", "min", "max", "step", "placeholder", "disabled", "size", "status", "fullWidth"];
var ChevronUp = function ChevronUp() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "18 15 12 9 6 15",
    })
  );
};
var ChevronDown = function ChevronDown() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6 9 12 15 18 9",
    })
  );
};
var TxInputNumber = function TxInputNumber(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    min = _ref.min,
    max = _ref.max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Enter number" : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    status = _ref.status,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$r);
  var handleChange = function handleChange(e) {
    var newValue = e.target.value;
    if (newValue === "") {
      onChange && onChange("");
      return;
    }
    var numValue = Number(newValue);
    if (isNaN(numValue)) return;
    if (min !== undefined && numValue < min) {
      onChange && onChange(min);
      return;
    }
    if (max !== undefined && numValue > max) {
      onChange && onChange(max);
      return;
    }
    onChange && onChange(numValue);
  };
  var handleIncrement = function handleIncrement() {
    if (disabled) return;
    var currentValue = value === "" || value === undefined ? 0 : Number(value);
    var newValue = currentValue + step;
    if (max !== undefined && newValue > max) {
      onChange && onChange(max);
    } else {
      onChange && onChange(newValue);
    }
  };
  var handleDecrement = function handleDecrement() {
    if (disabled) return;
    var currentValue = value === "" || value === undefined ? 0 : Number(value);
    var newValue = currentValue - step;
    if (min !== undefined && newValue < min) {
      onChange && onChange(min);
    } else {
      onChange && onChange(newValue);
    }
  };
  var isMaxReached = max !== undefined && Number(value) >= max;
  var isMinReached = min !== undefined && Number(value) <= min;
  return /*#__PURE__*/ React.createElement(
    StyledInputNumberWrapper,
    {
      fullWidth: fullWidth,
    },
    /*#__PURE__*/ React.createElement(
      StyledInputNumber,
      _extends(
        {
          type: "number",
          value: value,
          onChange: handleChange,
          placeholder: placeholder,
          disabled: disabled,
          size: size,
          status: status,
          min: min,
          max: max,
          step: step,
        },
        rest
      )
    ),
    /*#__PURE__*/ React.createElement(
      StyledControls,
      null,
      /*#__PURE__*/ React.createElement(
        StyledControlButton,
        {
          type: "button",
          onClick: handleIncrement,
          disabled: disabled || isMaxReached,
          size: size,
        },
        /*#__PURE__*/ React.createElement(ChevronUp, null)
      ),
      /*#__PURE__*/ React.createElement(
        StyledControlButton,
        {
          type: "button",
          onClick: handleDecrement,
          disabled: disabled || isMinReached,
          size: size,
        },
        /*#__PURE__*/ React.createElement(ChevronDown, null)
      )
    )
  );
};
TxInputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onChange: propTypes.func,
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  status: propTypes.oneOf(["success", "warning", "error"]),
  fullWidth: propTypes.bool,
};
TxInputNumber.defaultProps = {
  step: 1,
  placeholder: "Enter number",
  disabled: false,
  size: "medium",
  fullWidth: false,
};

var _excluded$s = ["length", "onChange", "disabled"];
var _templateObject$r, _templateObject2$m;
var OtpContainer = styled__default.div(
  _templateObject$r ||
    (_templateObject$r = _taggedTemplateLiteralLoose(["\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n"]))
);
var OtpInput = styled__default.input(
  _templateObject2$m ||
    (_templateObject2$m = _taggedTemplateLiteralLoose([
      "\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  font-size: 20px;\n  border: 1px solid ",
      ";\n  border-radius: 6px;\n  transition: all 0.2s;\n\n  &:focus {\n    outline: none;\n    border-color: ",
      ";\n    box-shadow: 0 0 0 3px ",
      ";\n  }\n\n  &:disabled {\n    background: ",
      ";\n  }\n",
    ])),
  colors.borderLight,
  colors.primary,
  colors.primaryLight,
  colors.bgFillLight
);
var TxInputOtp = function TxInputOtp(_ref) {
  var _ref$length = _ref.length,
    length = _ref$length === void 0 ? 6 : _ref$length,
    onChange = _ref.onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  var _useState = React$1.useState(Array(length).fill("")),
    otp = _useState[0],
    setOtp = _useState[1];
  var inputRefs = React$1.useRef([]);
  var handleChange = function handleChange(index, value) {
    if (!value.match(/^[0-9]$/) && value !== "") return;
    var newOtp = [].concat(otp);
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < length - 1) {
      var _inputRefs$current;
      (_inputRefs$current = inputRefs.current[index + 1]) === null || _inputRefs$current === void 0
        ? void 0
        : _inputRefs$current.focus();
    }
    if (onChange) {
      onChange(newOtp.join(""));
    }
  };
  var handleKeyDown = function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      var _inputRefs$current2;
      (_inputRefs$current2 = inputRefs.current[index - 1]) === null || _inputRefs$current2 === void 0
        ? void 0
        : _inputRefs$current2.focus();
    }
  };
  return /*#__PURE__*/ React.createElement(
    OtpContainer,
    props,
    Array.from({
      length: length,
    }).map(function (_, index) {
      return /*#__PURE__*/ React.createElement(OtpInput, {
        key: index,
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
          return handleKeyDown(index, e);
        },
        disabled: disabled,
      });
    })
  );
};

var _templateObject$s,
  _templateObject2$n,
  _templateObject3$j,
  _templateObject4$d,
  _templateObject5$6,
  _templateObject6$5;
var StyledInputWrapper = styled__default.div(
  _templateObject$s ||
    (_templateObject$s = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n",
    ]))
);
var StyledTxInput = styled__default.input(
  _templateObject2$n ||
    (_templateObject2$n = _taggedTemplateLiteralLoose([
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
    var prefixPadding = props.prefixWidth ? props.prefixWidth + 16 + "px" : "40px";
    return props.prefix ? "\n      padding-left: " + prefixPadding + " !important;\n    " : "";
  },
  function (props) {
    var suffixPadding = props.suffixWidth ? props.suffixWidth + 16 + "px" : "40px";
    return props.suffix ? "\n      padding-right: " + suffixPadding + " !important;\n    " : "";
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
);
var PrefixWrapper = styled__default.div(
  _templateObject3$j ||
    (_templateObject3$j = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  color: ",
      ";\n  font-size: 14px;\n  width: 20px;\n",
    ])),
  function (props) {
    return props.color || "#1c252e";
  }
);
var SuffixWrapper = styled__default.div(
  _templateObject4$d ||
    (_templateObject4$d = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  color: ",
      ";\n  font-size: 14px;\n  gap: 8px;\n",
    ])),
  function (props) {
    return props.color || "#1c252e";
  }
);
var PasswordToggle = styled__default.div(
  _templateObject5$6 ||
    (_templateObject5$6 = _taggedTemplateLiteralLoose([
      "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: ",
      ";\n  width: 16px;\n  font-size: 14px;\n",
    ])),
  function (props) {
    return props.color || "#1c252e";
  }
);
var ClearButton = styled__default.div(
  _templateObject6$5 ||
    (_templateObject6$5 = _taggedTemplateLiteralLoose([
      "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
      ";\n  width: 16px;\n  height: 16px;\n  font-size: 14px;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.color || "#8c9bab";
  }
);

var _excluded$t = [
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
];
var TxInput = function TxInput(_ref) {
  var placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    background = _ref.background,
    color = _ref.color,
    size = _ref.size,
    disabled = _ref.disabled,
    prefix = _ref.prefix,
    suffix = _ref.suffix,
    loading = _ref.loading,
    danger = _ref.danger,
    status = _ref.status,
    fill = _ref.fill,
    _ref$passwordToggle = _ref.passwordToggle,
    passwordToggle = _ref$passwordToggle === void 0 ? true : _ref$passwordToggle,
    password = _ref.password,
    placeholderColor = _ref.placeholderColor,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    onClear = _ref.onClear,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$t);
  var _useState = React$1.useState(false),
    passwordVisible = _useState[0],
    setPasswordVisible = _useState[1];
  var _useState2 = React$1.useState(0),
    prefixWidth = _useState2[0],
    setPrefixWidth = _useState2[1];
  var _useState3 = React$1.useState(0),
    suffixWidth = _useState3[0],
    setSuffixWidth = _useState3[1];
  var _useState4 = React$1.useState(false),
    showClear = _useState4[0],
    setShowClear = _useState4[1];
  var prefixRef = React$1.useRef(null);
  var suffixRef = React$1.useRef(null);
  React$1.useEffect(
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
  React$1.useEffect(
    function () {
      if (prefixRef.current) {
        setPrefixWidth(prefixRef.current.offsetWidth);
      }
      if (suffixRef.current) {
        setSuffixWidth(suffixRef.current.offsetWidth);
      }
    },
    [prefix, suffix, password, passwordToggle, status, showClear]
  );
  var togglePasswordVisibility = function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  };
  var handleClearInput = function handleClearInput(e) {
    e.stopPropagation();
    var syntheticEvent = {
      target: {
        value: "",
      },
    };
    onChange && onChange(syntheticEvent);
    onClear && onClear();
  };
  var actualType = password && !passwordVisible ? "password" : "text";
  var hasSuffixContent = suffix || (password && passwordToggle) || showClear;
  var iconColor = getStatusColor();
  return /*#__PURE__*/ React.createElement(
    StyledInputWrapper,
    null,
    prefix &&
      /*#__PURE__*/ React.createElement(
        PrefixWrapper,
        {
          ref: prefixRef,
          color: iconColor,
        },
        prefix
      ),
    /*#__PURE__*/ React.createElement(
      StyledTxInput,
      _extends(
        {
          type: actualType,
          value: value,
          onChange: onChange,
          placeholder: placeholder,
          disabled: disabled,
          prefix: prefix,
          suffix: hasSuffixContent,
          prefixWidth: prefixWidth,
          suffixWidth: suffixWidth,
          fill: fill,
          status: status,
          className: [
            "tx-ui-tx-input",
            disabled && "tx-ui-tx-input--disabled",
            loading && "tx-ui-tx-input--loading",
            danger && "tx-ui-tx-input--danger",
            status && "tx-ui-tx-input--" + status,
            "tx-ui-tx-input--" + size,
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
      /*#__PURE__*/ React.createElement(
        SuffixWrapper,
        {
          ref: suffixRef,
          color: iconColor,
        },
        showClear &&
          !disabled &&
          /*#__PURE__*/ React.createElement(
            ClearButton,
            {
              onClick: handleClearInput,
              color: status ? iconColor : "#8c9bab",
            },
            /*#__PURE__*/ React.createElement(TxIconOutline.IconCrossSmall, null)
          ),
        password &&
          passwordToggle &&
          /*#__PURE__*/ React.createElement(
            PasswordToggle,
            {
              onClick: togglePasswordVisibility,
              color: iconColor,
            },
            passwordVisible
              ? /*#__PURE__*/ React.createElement(TxIconOutline.IconEye, null)
              : /*#__PURE__*/ React.createElement(TxIconOutline.IconEye, null)
          ),
        suffix && suffix
      )
  );
};
TxInput.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  loading: propTypes.bool,
  danger: propTypes.bool,
  background: propTypes.string,
  color: propTypes.string,
  size: propTypes.oneOf(["small", "medium", "large"]),
  type: propTypes.oneOf(["text", "password", "email", "number", "tel", "url"]),
  prefix: propTypes.node,
  suffix: propTypes.node,
  disabled: propTypes.bool,
  status: propTypes.oneOf(["success", "warning", "error", "info"]),
  fill: propTypes.bool,
  passwordToggle: propTypes.bool,
  password: propTypes.bool,
  placeholderColor: propTypes.string,
  allowClear: propTypes.bool,
  onClear: propTypes.func,
};
TxInput.defaultProps = {
  placeholder: "",
  type: "text",
  size: "medium",
  onChange: function onChange() {},
  disabled: false,
  loading: false,
  danger: false,
  fill: false,
  passwordToggle: true,
  allowClear: false,
};

var _excluded$u = ["children"];
var _templateObject$t;
var KbdStyled = styled__default.kbd(
  _templateObject$t ||
    (_templateObject$t = _taggedTemplateLiteralLoose([
      "\n  display: inline-block;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: ",
      ";\n  background: ",
      ";\n  border: 1px solid ",
      ";\n  border-radius: 4px;\n  box-shadow: 0 1px 0 ",
      ";\n",
    ])),
  colors.textPrimary,
  colors.bgFillLight,
  colors.borderLight,
  colors.borderMedium
);
var TxKbd = function TxKbd(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  return /*#__PURE__*/ React.createElement(KbdStyled, props, children);
};

var _excluded$v = ["open", "src", "onClose"];
var _templateObject$u, _templateObject2$o, _templateObject3$k;
var LightboxContainer = styled__default.div(
  _templateObject$u ||
    (_templateObject$u = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: ",
      ";\n  visibility: ",
      ";\n  transition: all 0.3s ease;\n",
    ])),
  function (props) {
    return props.open ? 1 : 0;
  },
  function (props) {
    return props.open ? "visible" : "hidden";
  }
);
var LightboxImage = styled__default.img(
  _templateObject2$o ||
    (_templateObject2$o = _taggedTemplateLiteralLoose([
      "\n  max-width: 90%;\n  max-height: 90%;\n  border-radius: 8px;\n  object-fit: contain;\n",
    ]))
);
var CloseButton = styled__default.button(
  _templateObject3$k ||
    (_templateObject3$k = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n",
    ]))
);
var TxLightbox = function TxLightbox(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    src = _ref.src,
    onClose = _ref.onClose,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$v);
  if (!open) return null;
  return /*#__PURE__*/ React.createElement(
    LightboxContainer,
    _extends(
      {
        open: open,
        onClick: onClose,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      CloseButton,
      {
        onClick: onClose,
      },
      "\xD7"
    ),
    /*#__PURE__*/ React.createElement(LightboxImage, {
      src: src,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
    })
  );
};

var _excluded$w = ["href", "children", "underline", "visited"];
var _templateObject$v;
var LinkStyled = styled__default.a(
  _templateObject$v ||
    (_templateObject$v = _taggedTemplateLiteralLoose([
      "\n  color: ",
      ";\n  text-decoration: ",
      ";\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",
      ";\n  }\n\n  &:visited {\n    color: ",
      ";\n  }\n",
    ])),
  colors.primary,
  function (props) {
    return props.underline ? "underline" : "none";
  },
  colors.primaryHover,
  function (props) {
    return props.visited ? colors.primaryVisited : "inherit";
  }
);
var TxLink = function TxLink(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$underline = _ref.underline,
    underline = _ref$underline === void 0 ? false : _ref$underline,
    _ref$visited = _ref.visited,
    visited = _ref$visited === void 0 ? false : _ref$visited,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  return /*#__PURE__*/ React.createElement(
    LinkStyled,
    _extends(
      {
        href: href,
        underline: underline ? 1 : 0,
        visited: visited ? 1 : 0,
      },
      props
    ),
    children
  );
};

var _templateObject$w, _templateObject2$p, _templateObject3$l, _templateObject4$e;
var spin = styled.keyframes(
  _templateObject$w ||
    (_templateObject$w = _taggedTemplateLiteralLoose([
      "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
    ]))
);
var StyledLoadingWrapper = styled__default.div(
  _templateObject2$p ||
    (_templateObject2$p = _taggedTemplateLiteralLoose([
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
);
var StyledSpinner = styled__default.div(
  _templateObject3$l ||
    (_templateObject3$l = _taggedTemplateLiteralLoose([
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
    return props.color || colors.borderLight;
  },
  function (props) {
    return props.spinnerColor || colors.primary;
  },
  spin
);
var StyledLoadingText = styled__default.div(
  _templateObject4$e ||
    (_templateObject4$e = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 400;\n"])),
  function (props) {
    return props.color || colors.textSecondary;
  }
);

var _excluded$x = ["size", "text", "fullscreen", "spinnerColor", "textColor"];
var TxLoading = function TxLoading(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    text = _ref.text,
    _ref$fullscreen = _ref.fullscreen,
    fullscreen = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
    spinnerColor = _ref.spinnerColor,
    textColor = _ref.textColor,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$x);
  return /*#__PURE__*/ React.createElement(
    StyledLoadingWrapper,
    _extends(
      {
        fullscreen: fullscreen,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(StyledSpinner, {
      size: size,
      spinnerColor: spinnerColor,
    }),
    text &&
      /*#__PURE__*/ React.createElement(
        StyledLoadingText,
        {
          color: textColor,
        },
        text
      )
  );
};
TxLoading.propTypes = {
  size: propTypes.oneOf(["small", "medium", "large"]),
  text: propTypes.string,
  fullscreen: propTypes.bool,
  spinnerColor: propTypes.string,
  textColor: propTypes.string,
};
TxLoading.defaultProps = {
  size: "medium",
  fullscreen: false,
};

var _excluded$y = ["src", "center", "zoom", "height", "title"];
var _templateObject$x;
var MapContainer = styled__default.div(
  _templateObject$x ||
    (_templateObject$x = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ",
      ";\n",
    ])),
  colors.bgFillLight
);
var TxMap = function TxMap(_ref) {
  var src = _ref.src,
    center = _ref.center,
    _ref$zoom = _ref.zoom,
    zoom = _ref$zoom === void 0 ? 10 : _ref$zoom,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "400px" : _ref$height,
    title = _ref.title,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  var id = React$1.useId();
  var iframeTitle = title || "tx-map-" + id;
  return /*#__PURE__*/ React.createElement(
    MapContainer,
    _extends(
      {
        style: {
          height: height,
        },
      },
      props
    ),
    /*#__PURE__*/ React.createElement("iframe", {
      title: iframeTitle,
      src: src || "https://www.google.com/maps?q=" + center + "&z=" + zoom + "&output=embed",
      width: "100%",
      height: "100%",
      style: {
        border: 0,
      },
      allowFullScreen: true,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade",
    })
  );
};

var _templateObject$y,
  _templateObject2$q,
  _templateObject3$m,
  _templateObject4$f,
  _templateObject5$7,
  _templateObject6$6;
var StyledMenuWrapper = styled__default.div(
  _templateObject$y ||
    (_templateObject$y = _taggedTemplateLiteralLoose([
      "\n  width: ",
      ";\n  background-color: ",
      ";\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  overflow: hidden;\n",
    ])),
  function (props) {
    return props.mode === "horizontal" ? "100%" : "256px";
  },
  colors.bgWhite,
  colors.borderLight
);
var StyledMenuList = styled__default.ul(
  _templateObject2$q ||
    (_templateObject2$q = _taggedTemplateLiteralLoose([
      "\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  display: flex;\n  flex-direction: ",
      ";\n  gap: 4px;\n",
    ])),
  function (props) {
    return props.mode === "horizontal" ? "row" : "column";
  }
);
var StyledMenuItem = styled__default.li(
  _templateObject3$m ||
    (_templateObject3$m = _taggedTemplateLiteralLoose([
      "\n  padding: 12px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
      ";\n  background-color: ",
      ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ",
      ";\n    color: ",
      ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: ",
      ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.active ? colors.primary : colors.textPrimary;
  },
  function (props) {
    return props.active ? colors.primaryLight : "transparent";
  },
  function (props) {
    return props.active ? colors.primaryLight : colors.bgFill;
  },
  colors.primary,
  colors.textTertiary
);
var StyledSubMenu = styled__default.div(_templateObject4$f || (_templateObject4$f = _taggedTemplateLiteralLoose([""])));
var StyledSubMenuTitle = styled__default.div(
  _templateObject5$7 ||
    (_templateObject5$7 = _taggedTemplateLiteralLoose([
      "\n  padding: 12px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  color: ",
      ";\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  &:hover {\n    background-color: ",
      ";\n    color: ",
      ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n    transition: transform 0.2s ease;\n    transform: ",
      ";\n  }\n",
    ])),
  colors.textPrimary,
  colors.bgFill,
  colors.primary,
  function (props) {
    return props.open ? "rotate(180deg)" : "rotate(0deg)";
  }
);
var StyledSubMenuList = styled__default.ul(
  _templateObject6$6 ||
    (_templateObject6$6 = _taggedTemplateLiteralLoose([
      "\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 24px;\n  display: ",
      ";\n",
    ])),
  function (props) {
    return props.open ? "block" : "none";
  }
);

var _excluded$z = ["items", "mode", "selectedKey", "onSelect"];
var ChevronDown$1 = function ChevronDown() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6 9 12 15 18 9",
    })
  );
};
var TxMenu = function TxMenu(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? "vertical" : _ref$mode,
    selectedKey = _ref.selectedKey,
    onSelect = _ref.onSelect,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$z);
  var _useState = React$1.useState([]),
    openKeys = _useState[0],
    setOpenKeys = _useState[1];
  var handleItemClick = function handleItemClick(key) {
    if (onSelect) {
      onSelect(key);
    }
  };
  var handleSubMenuClick = function handleSubMenuClick(key) {
    if (openKeys.includes(key)) {
      setOpenKeys(
        openKeys.filter(function (k) {
          return k !== key;
        })
      );
    } else {
      setOpenKeys([].concat(openKeys, [key]));
    }
  };
  var renderMenuItem = function renderMenuItem(item) {
    if (item.children) {
      return /*#__PURE__*/ React.createElement(
        StyledSubMenu,
        {
          key: item.key,
        },
        /*#__PURE__*/ React.createElement(
          StyledSubMenuTitle,
          {
            onClick: function onClick() {
              return handleSubMenuClick(item.key);
            },
            open: openKeys.includes(item.key),
          },
          /*#__PURE__*/ React.createElement("span", null, item.icon, item.label),
          /*#__PURE__*/ React.createElement(ChevronDown$1, null)
        ),
        /*#__PURE__*/ React.createElement(
          StyledSubMenuList,
          {
            open: openKeys.includes(item.key),
          },
          item.children.map(function (child) {
            return /*#__PURE__*/ React.createElement(
              StyledMenuItem,
              {
                key: child.key,
                active: selectedKey === child.key,
                onClick: function onClick() {
                  return handleItemClick(child.key);
                },
                disabled: child.disabled,
              },
              child.icon,
              child.label
            );
          })
        )
      );
    }
    return /*#__PURE__*/ React.createElement(
      StyledMenuItem,
      {
        key: item.key,
        active: selectedKey === item.key,
        onClick: function onClick() {
          return handleItemClick(item.key);
        },
        disabled: item.disabled,
      },
      item.icon,
      item.label
    );
  };
  return /*#__PURE__*/ React.createElement(
    StyledMenuWrapper,
    _extends(
      {
        mode: mode,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(
      StyledMenuList,
      {
        mode: mode,
      },
      items.map(function (item) {
        return renderMenuItem(item);
      })
    )
  );
};
TxMenu.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      label: propTypes.node.isRequired,
      icon: propTypes.node,
      disabled: propTypes.bool,
      children: propTypes.array,
    })
  ),
  mode: propTypes.oneOf(["horizontal", "vertical"]),
  selectedKey: propTypes.string,
  onSelect: propTypes.func,
};
TxMenu.defaultProps = {
  items: [],
  mode: "vertical",
};

var _templateObject$z,
  _templateObject2$r,
  _templateObject3$n,
  _templateObject4$g,
  _templateObject5$8,
  _templateObject6$7,
  _templateObject7$4,
  _templateObject8$1,
  _templateObject9$1;
var slideDown = styled.keyframes(
  _templateObject$z ||
    (_templateObject$z = _taggedTemplateLiteralLoose([
      "\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n",
    ]))
);
var slideUp = styled.keyframes(
  _templateObject2$r ||
    (_templateObject2$r = _taggedTemplateLiteralLoose([
      "\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n",
    ]))
);
var MessageContainer = styled__default.div(
  _templateObject3$n ||
    (_templateObject3$n = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  pointer-events: none;\n",
    ]))
);
var MessageWrapper = styled__default.div(
  _templateObject4$g ||
    (_templateObject4$g = _taggedTemplateLiteralLoose([
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
        return "border-left: 4px solid " + colors.success[500] + ";";
      case "error":
        return "border-left: 4px solid " + colors.danger[500] + ";";
      case "warning":
        return "border-left: 4px solid " + colors.warning[500] + ";";
      case "info":
        return "border-left: 4px solid " + colors.info[500] + ";";
      default:
        return "border-left: 4px solid " + colors.primary[500] + ";";
    }
  }
);
var MessageIcon = styled__default.div(
  _templateObject5$8 ||
    (_templateObject5$8 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n\n  ",
      "\n",
    ])),
  function (props) {
    switch (props.type) {
      case "success":
        return "color: " + colors.success[500] + ";";
      case "error":
        return "color: " + colors.danger[500] + ";";
      case "warning":
        return "color: " + colors.warning[500] + ";";
      case "info":
        return "color: " + colors.info[500] + ";";
      default:
        return "color: " + colors.primary[500] + ";";
    }
  }
);
var MessageContent = styled__default.div(
  _templateObject6$7 ||
    (_templateObject6$7 = _taggedTemplateLiteralLoose([
      "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n",
    ]))
);
var MessageTitle = styled__default.div(
  _templateObject7$4 ||
    (_templateObject7$4 = _taggedTemplateLiteralLoose([
      "\n  font-size: 14px;\n  font-weight: 600;\n  color: ",
      ";\n  line-height: 1.4;\n",
    ])),
  colors.textPrimary
);
var MessageDescription = styled__default.div(
  _templateObject8$1 ||
    (_templateObject8$1 = _taggedTemplateLiteralLoose([
      "\n  font-size: 13px;\n  color: ",
      ";\n  line-height: 1.4;\n  font-weight: 400;\n",
    ])),
  colors.textSecondary
);
var MessageClose = styled__default.button(
  _templateObject9$1 ||
    (_templateObject9$1 = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
      ";\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: ",
      ";\n    transform: scale(1.1);\n  }\n\n  svg {\n    width: 14px;\n    height: 14px;\n  }\n",
    ])),
  colors.textSecondary,
  colors.textPrimary
);

var MessageComponent = function MessageComponent(_ref) {
  var type = _ref.type,
    content = _ref.content,
    description = _ref.description,
    duration = _ref.duration,
    onClose = _ref.onClose,
    closable = _ref.closable;
  var _useState = React$1.useState(false),
    isClosing = _useState[0],
    setIsClosing = _useState[1];
  React$1.useEffect(
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
    setIsClosing(true);
    setTimeout(function () {
      if (onClose) onClose();
    }, 300);
  };
  var getIcon = function getIcon() {
    switch (type) {
      case "success":
        return /*#__PURE__*/ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          },
          /*#__PURE__*/ React.createElement("path", {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
          }),
          /*#__PURE__*/ React.createElement("polyline", {
            points: "22 4 12 14.01 9 11.01",
          })
        );
      case "error":
        return /*#__PURE__*/ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          },
          /*#__PURE__*/ React.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
          })
        );
      case "warning":
        return /*#__PURE__*/ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          },
          /*#__PURE__*/ React.createElement("path", {
            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "13",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
          })
        );
      case "info":
        return /*#__PURE__*/ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          },
          /*#__PURE__*/ React.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8",
          })
        );
      default:
        return /*#__PURE__*/ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          },
          /*#__PURE__*/ React.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8",
          })
        );
    }
  };
  return /*#__PURE__*/ React.createElement(
    MessageWrapper,
    {
      type: type,
      isClosing: isClosing,
    },
    /*#__PURE__*/ React.createElement(
      MessageIcon,
      {
        type: type,
      },
      getIcon()
    ),
    /*#__PURE__*/ React.createElement(
      MessageContent,
      null,
      content && /*#__PURE__*/ React.createElement(MessageTitle, null, content),
      description && /*#__PURE__*/ React.createElement(MessageDescription, null, description)
    ),
    closable &&
      /*#__PURE__*/ React.createElement(
        MessageClose,
        {
          onClick: handleClose,
        },
        /*#__PURE__*/ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
          },
          /*#__PURE__*/ React.createElement("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18",
          }),
          /*#__PURE__*/ React.createElement("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18",
          })
        )
      )
  );
};
MessageComponent.propTypes = {
  type: propTypes.oneOf(["success", "error", "warning", "info"]),
  content: propTypes.node,
  description: propTypes.node,
  duration: propTypes.number,
  onClose: propTypes.func,
  closable: propTypes.bool,
};
var messageContainer = null;
var messagesRoot = null;
var messages = [];
var getContainer = function getContainer() {
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    document.body.appendChild(messageContainer);
    messagesRoot = client.createRoot(messageContainer);
  }
  return messageContainer;
};
var renderMessages = function renderMessages() {
  if (messagesRoot) {
    messagesRoot.render(
      /*#__PURE__*/ React.createElement(
        MessageContainer,
        null,
        messages.map(function (msg) {
          return /*#__PURE__*/ React.createElement(
            MessageComponent,
            _extends(
              {
                key: msg.key,
              },
              msg
            )
          );
        })
      )
    );
  }
};
var _open = function open(config) {
  getContainer();
  var key = Date.now();
  var message = {
    key: key,
    type: config.type || "info",
    content: config.content,
    description: config.description,
    duration: config.duration !== undefined ? config.duration : 3000,
    closable: config.closable !== undefined ? config.closable : false,
    onClose: function onClose() {
      var index = messages.findIndex(function (m) {
        return m.key === key;
      });
      if (index > -1) {
        messages.splice(index, 1);
        renderMessages();
        if (config.onClose) config.onClose();
      }
    },
  };
  messages.push(message);
  renderMessages();
};
var TxMessage = {
  success: function success(content, duration) {
    if (duration === void 0) {
      duration = 3000;
    }
    _open({
      type: "success",
      content: content,
      duration: duration,
    });
  },
  error: function error(content, duration) {
    if (duration === void 0) {
      duration = 3000;
    }
    _open({
      type: "error",
      content: content,
      duration: duration,
    });
  },
  warning: function warning(content, duration) {
    if (duration === void 0) {
      duration = 3000;
    }
    _open({
      type: "warning",
      content: content,
      duration: duration,
    });
  },
  info: function info(content, duration) {
    if (duration === void 0) {
      duration = 3000;
    }
    _open({
      type: "info",
      content: content,
      duration: duration,
    });
  },
  open: function open(config) {
    _open(config);
  },
  destroy: function destroy() {
    messages.length = 0;
    renderMessages();
  },
};

var _templateObject$A,
  _templateObject2$s,
  _templateObject3$o,
  _templateObject4$h,
  _templateObject5$9,
  _templateObject6$8,
  _templateObject7$5,
  _templateObject8$2,
  _templateObject9$2;
var fadeIn$1 = styled.keyframes(
  _templateObject$A ||
    (_templateObject$A = _taggedTemplateLiteralLoose([
      "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
    ]))
);
var slideDown$1 = styled.keyframes(
  _templateObject2$s ||
    (_templateObject2$s = _taggedTemplateLiteralLoose([
      "\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n",
    ]))
);
var StyledModalOverlay = styled__default.div(
  _templateObject3$o ||
    (_templateObject3$o = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: ",
      " 0.2s ease;\n",
    ])),
  fadeIn$1
);
var StyledModalContent = styled__default.div(
  _templateObject4$h ||
    (_templateObject4$h = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  max-width: ",
      ";\n  width: 90%;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: ",
      " 0.3s ease;\n",
    ])),
  colors.bgWhite,
  function (props) {
    return props.width ? props.width : "520px";
  },
  slideDown$1
);
var StyledModalHeader = styled__default.div(
  _templateObject5$9 ||
    (_templateObject5$9 = _taggedTemplateLiteralLoose([
      "\n  padding: 20px 24px;\n  border-bottom: 1px solid ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
    ])),
  colors.borderLight
);
var StyledModalTitle = styled__default.h3(
  _templateObject6$8 ||
    (_templateObject6$8 = _taggedTemplateLiteralLoose([
      "\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",
      ";\n",
    ])),
  colors.textPrimary
);
var StyledModalClose = styled__default.button(
  _templateObject7$5 ||
    (_templateObject7$5 = _taggedTemplateLiteralLoose([
      "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
      ";\n    color: ",
      ";\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
    ])),
  colors.textSecondary,
  colors.bgFill,
  colors.textPrimary
);
var StyledModalBody = styled__default.div(
  _templateObject8$2 ||
    (_templateObject8$2 = _taggedTemplateLiteralLoose(["\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n"]))
);
var StyledModalFooter = styled__default.div(
  _templateObject9$2 ||
    (_templateObject9$2 = _taggedTemplateLiteralLoose([
      "\n  padding: 16px 24px;\n  border-top: 1px solid ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n",
    ])),
  colors.borderLight
);

var _excluded$A = ["open", "onClose", "title", "children", "footer", "width", "closable", "maskClosable"];
var CloseIcon$1 = function CloseIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    })
  );
};
var TxModal = function TxModal(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children,
    footer = _ref.footer,
    width = _ref.width,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$A);
  React$1.useEffect(
    function () {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return function () {
        document.body.style.overflow = "unset";
      };
    },
    [open]
  );
  var handleOverlayClick = function handleOverlayClick(e) {
    if (maskClosable && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };
  var handleClose = function handleClose() {
    if (onClose) {
      onClose();
    }
  };
  if (!open) return null;
  return /*#__PURE__*/ React.createElement(
    StyledModalOverlay,
    _extends(
      {
        onClick: handleOverlayClick,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(
      StyledModalContent,
      {
        width: width,
      },
      (title || closable) &&
        /*#__PURE__*/ React.createElement(
          StyledModalHeader,
          null,
          title && /*#__PURE__*/ React.createElement(StyledModalTitle, null, title),
          closable &&
            /*#__PURE__*/ React.createElement(
              StyledModalClose,
              {
                onClick: handleClose,
                type: "button",
              },
              /*#__PURE__*/ React.createElement(CloseIcon$1, null)
            )
        ),
      /*#__PURE__*/ React.createElement(StyledModalBody, null, children),
      footer && /*#__PURE__*/ React.createElement(StyledModalFooter, null, footer)
    )
  );
};
TxModal.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  children: propTypes.node,
  footer: propTypes.node,
  width: propTypes.string,
  closable: propTypes.bool,
  maskClosable: propTypes.bool,
};
TxModal.defaultProps = {
  open: false,
  closable: true,
  maskClosable: true,
};

var _templateObject$B,
  _templateObject2$t,
  _templateObject3$p,
  _templateObject4$i,
  _templateObject5$a,
  _templateObject6$9,
  _templateObject7$6,
  _templateObject8$3;
var slideInRight$1 = styled.keyframes(
  _templateObject$B ||
    (_templateObject$B = _taggedTemplateLiteralLoose([
      "\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n",
    ]))
);
var StyledNotificationContainer = styled__default.div(
  _templateObject2$t ||
    (_templateObject2$t = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  pointer-events: none;\n",
    ]))
);
var StyledNotification = styled__default.div(
  _templateObject3$p ||
    (_templateObject3$p = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  border-radius: 12px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  padding: 16px 24px;\n  min-width: 384px;\n  display: flex;\n  gap: 12px;\n  animation: ",
      " 0.3s ease;\n  pointer-events: all;\n  border-left: 4px solid\n    ",
      ";\n",
    ])),
  colors.bgWhite,
  slideInRight$1,
  function (props) {
    switch (props.type) {
      case "success":
        return colors.success;
      case "error":
        return colors.danger;
      case "warning":
        return colors.warning;
      case "info":
        return colors.info;
      default:
        return colors.primary;
    }
  }
);
var StyledNotificationIcon = styled__default.div(
  _templateObject4$i ||
    (_templateObject4$i = _taggedTemplateLiteralLoose([
      "\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  color: ",
      ";\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
    ])),
  function (props) {
    switch (props.type) {
      case "success":
        return colors.success;
      case "error":
        return colors.danger;
      case "warning":
        return colors.warning;
      case "info":
        return colors.info;
      default:
        return colors.primary;
    }
  }
);
var StyledNotificationContent = styled__default.div(
  _templateObject5$a || (_templateObject5$a = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]))
);
var StyledNotificationTitle = styled__default.div(
  _templateObject6$9 ||
    (_templateObject6$9 = _taggedTemplateLiteralLoose([
      "\n  font-size: 16px;\n  font-weight: 600;\n  color: ",
      ";\n  margin-bottom: 4px;\n",
    ])),
  colors.textPrimary
);
var StyledNotificationDescription = styled__default.div(
  _templateObject7$6 ||
    (_templateObject7$6 = _taggedTemplateLiteralLoose(["\n  font-size: 14px;\n  color: ", ";\n  line-height: 1.5;\n"])),
  colors.textSecondary
);
var StyledNotificationClose = styled__default.button(
  _templateObject8$3 ||
    (_templateObject8$3 = _taggedTemplateLiteralLoose([
      "\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: ",
      ";\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: ",
      ";\n    color: ",
      ";\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  colors.textTertiary,
  colors.bgFill,
  colors.textPrimary
);

var _excluded$B = ["type", "title", "description", "closable", "onClose", "duration"];
var CloseIcon$2 = function CloseIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    })
  );
};
var CheckCircleIcon = function CheckCircleIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "22 4 12 14.01 9 11.01",
    })
  );
};
var InfoCircleIcon = function InfoCircleIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8",
    })
  );
};
var AlertCircleIcon = function AlertCircleIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16",
    })
  );
};
var XCircleIcon = function XCircleIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15",
    })
  );
};
var getIcon = function getIcon(type) {
  switch (type) {
    case "success":
      return /*#__PURE__*/ React.createElement(CheckCircleIcon, null);
    case "error":
      return /*#__PURE__*/ React.createElement(XCircleIcon, null);
    case "warning":
      return /*#__PURE__*/ React.createElement(AlertCircleIcon, null);
    case "info":
      return /*#__PURE__*/ React.createElement(InfoCircleIcon, null);
    default:
      return /*#__PURE__*/ React.createElement(InfoCircleIcon, null);
  }
};
var TxNotification = function TxNotification(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "info" : _ref$type,
    title = _ref.title,
    description = _ref.description,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    onClose = _ref.onClose,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 4500 : _ref$duration,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$B);
  React$1.useEffect(
    function () {
      if (duration && duration > 0) {
        var timer = setTimeout(function () {
          if (onClose) {
            onClose();
          }
        }, duration);
        return function () {
          return clearTimeout(timer);
        };
      }
    },
    [duration, onClose]
  );
  var handleClose = function handleClose() {
    if (onClose) {
      onClose();
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledNotification,
    _extends(
      {
        type: type,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(
      StyledNotificationIcon,
      {
        type: type,
      },
      getIcon(type)
    ),
    /*#__PURE__*/ React.createElement(
      StyledNotificationContent,
      null,
      title && /*#__PURE__*/ React.createElement(StyledNotificationTitle, null, title),
      description && /*#__PURE__*/ React.createElement(StyledNotificationDescription, null, description)
    ),
    closable &&
      /*#__PURE__*/ React.createElement(
        StyledNotificationClose,
        {
          onClick: handleClose,
          type: "button",
        },
        /*#__PURE__*/ React.createElement(CloseIcon$2, null)
      )
  );
};
TxNotification.propTypes = {
  type: propTypes.oneOf(["success", "info", "warning", "error"]),
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  description: propTypes.oneOfType([propTypes.string, propTypes.node]),
  closable: propTypes.bool,
  onClose: propTypes.func,
  duration: propTypes.number,
};
TxNotification.defaultProps = {
  type: "info",
  closable: true,
  duration: 4500,
};

var _templateObject$C, _templateObject2$u, _templateObject3$q;
var StyledPaginationWrapper = styled__default.div(
  _templateObject$C ||
    (_templateObject$C = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))
);
var StyledPaginationItem = styled__default.button(
  _templateObject2$u ||
    (_templateObject2$u = _taggedTemplateLiteralLoose([
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
    return props.size === "small" ? "6px" : props.size === "large" ? "12px" : "8px";
  },
  function (props) {
    return props.active ? colors.primary : colors.borderLight;
  },
  function (props) {
    return props.active ? colors.primary : colors.bgWhite;
  },
  function (props) {
    return props.active ? colors.textWhite : colors.textPrimary;
  },
  function (props) {
    return props.size === "small" ? "12px" : "14px";
  },
  colors.primary,
  function (props) {
    return props.active ? colors.textWhite : colors.primary;
  },
  colors.bgFill,
  colors.borderLight,
  colors.textTertiary
);
var StyledPaginationEllipsis = styled__default.span(
  _templateObject3$q ||
    (_templateObject3$q = _taggedTemplateLiteralLoose([
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
  colors.textTertiary,
  function (props) {
    return props.size === "small" ? "12px" : "14px";
  }
);

var _excluded$C = ["current", "total", "pageSize", "onChange", "showSizeChanger", "size"];
var ChevronLeft = function ChevronLeft() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 18 9 12 15 6",
    })
  );
};
var ChevronRight = function ChevronRight() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 18 15 12 9 6",
    })
  );
};
var TxPagination = function TxPagination(_ref) {
  var _ref$current = _ref.current,
    current = _ref$current === void 0 ? 1 : _ref$current,
    _ref$total = _ref.total,
    total = _ref$total === void 0 ? 0 : _ref$total,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 10 : _ref$pageSize,
    onChange = _ref.onChange,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$C);
  var totalPages = Math.ceil(total / pageSize);
  var handlePageChange = function handlePageChange(page) {
    if (page < 1 || page > totalPages || page === current) return;
    if (onChange) {
      onChange(page, pageSize);
    }
  };
  var renderPageNumbers = function renderPageNumbers() {
    var pages = [];
    var showPages = 7;
    if (totalPages <= showPages) {
      var _loop = function _loop(i) {
        pages.push(
          /*#__PURE__*/ React.createElement(
            StyledPaginationItem,
            {
              key: i,
              active: i === current,
              onClick: function onClick() {
                return handlePageChange(i);
              },
              size: size,
            },
            i
          )
        );
      };
      for (var i = 1; i <= totalPages; i++) {
        _loop(i);
      }
    } else {
      pages.push(
        /*#__PURE__*/ React.createElement(
          StyledPaginationItem,
          {
            key: 1,
            active: current === 1,
            onClick: function onClick() {
              return handlePageChange(1);
            },
            size: size,
          },
          "1"
        )
      );
      if (current > 3) {
        pages.push(
          /*#__PURE__*/ React.createElement(
            StyledPaginationEllipsis,
            {
              key: "ellipsis-start",
              size: size,
            },
            "\u2022\u2022\u2022"
          )
        );
      }
      var start = Math.max(2, current - 1);
      var end = Math.min(totalPages - 1, current + 1);
      var _loop2 = function _loop2(_i) {
        pages.push(
          /*#__PURE__*/ React.createElement(
            StyledPaginationItem,
            {
              key: _i,
              active: _i === current,
              onClick: function onClick() {
                return handlePageChange(_i);
              },
              size: size,
            },
            _i
          )
        );
      };
      for (var _i = start; _i <= end; _i++) {
        _loop2(_i);
      }
      if (current < totalPages - 2) {
        pages.push(
          /*#__PURE__*/ React.createElement(
            StyledPaginationEllipsis,
            {
              key: "ellipsis-end",
              size: size,
            },
            "\u2022\u2022\u2022"
          )
        );
      }
      pages.push(
        /*#__PURE__*/ React.createElement(
          StyledPaginationItem,
          {
            key: totalPages,
            active: totalPages === current,
            onClick: function onClick() {
              return handlePageChange(totalPages);
            },
            size: size,
          },
          totalPages
        )
      );
    }
    return pages;
  };
  return /*#__PURE__*/ React.createElement(
    StyledPaginationWrapper,
    rest,
    /*#__PURE__*/ React.createElement(
      StyledPaginationItem,
      {
        onClick: function onClick() {
          return handlePageChange(current - 1);
        },
        disabled: current === 1,
        size: size,
      },
      /*#__PURE__*/ React.createElement(ChevronLeft, null)
    ),
    renderPageNumbers(),
    /*#__PURE__*/ React.createElement(
      StyledPaginationItem,
      {
        onClick: function onClick() {
          return handlePageChange(current + 1);
        },
        disabled: current === totalPages,
        size: size,
      },
      /*#__PURE__*/ React.createElement(ChevronRight, null)
    )
  );
};
TxPagination.propTypes = {
  current: propTypes.number,
  total: propTypes.number,
  pageSize: propTypes.number,
  onChange: propTypes.func,
  showSizeChanger: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
};
TxPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 10,
  showSizeChanger: false,
  size: "medium",
};

var _templateObject$D, _templateObject2$v, _templateObject3$r, _templateObject4$j, _templateObject5$b;
var StyledPopconfirmWrapper = styled__default.div(
  _templateObject$D ||
    (_templateObject$D = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n"]))
);
var StyledPopconfirmContent = styled__default.div(
  _templateObject2$v ||
    (_templateObject2$v = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  z-index: 9999;\n  background: ",
      ";\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  padding: 12px 16px;\n  min-width: 200px;\n  max-width: 300px;\n  opacity: ",
      ";\n  visibility: ",
      ";\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n\n  ",
      '\n\n  &::after {\n    content: "";\n    position: absolute;\n    border: 6px solid transparent;\n\n    ',
      "\n  }\n",
    ])),
  colors.bgWhite,
  function (props) {
    return props.visible ? 1 : 0;
  },
  function (props) {
    return props.visible ? "visible" : "hidden";
  },
  function (props) {
    var offset = 8;
    switch (props.placement) {
      case "top":
        return (
          "\n          bottom: calc(100% + " +
          offset +
          "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
        );
      case "bottom":
        return (
          "\n          top: calc(100% + " +
          offset +
          "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
        );
      case "left":
        return (
          "\n          right: calc(100% + " +
          offset +
          "px);\n          top: 50%;\n          transform: translateY(-50%);\n        "
        );
      case "right":
        return (
          "\n          left: calc(100% + " +
          offset +
          "px);\n          top: 50%;\n          transform: translateY(-50%);\n        "
        );
      default:
        return (
          "\n          top: calc(100% + " +
          offset +
          "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
        );
    }
  },
  function (props) {
    switch (props.placement) {
      case "top":
        return (
          "\n            top: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-top-color: " +
          colors.bgWhite +
          ";\n          "
        );
      case "bottom":
        return (
          "\n            bottom: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-bottom-color: " +
          colors.bgWhite +
          ";\n          "
        );
      case "left":
        return (
          "\n            left: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-left-color: " +
          colors.bgWhite +
          ";\n          "
        );
      case "right":
        return (
          "\n            right: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-right-color: " +
          colors.bgWhite +
          ";\n          "
        );
      default:
        return (
          "\n            bottom: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-bottom-color: " +
          colors.bgWhite +
          ";\n          "
        );
    }
  }
);
var StyledPopconfirmTitle = styled__default.div(
  _templateObject3$r ||
    (_templateObject3$r = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: ",
      ";\n  line-height: 1.5;\n",
    ])),
  colors.textPrimary
);
var StyledPopconfirmIcon = styled__default.div(
  _templateObject4$j ||
    (_templateObject4$j = _taggedTemplateLiteralLoose([
      "\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  color: ",
      ";\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
    ])),
  colors.warning
);
var StyledPopconfirmButtons = styled__default.div(
  _templateObject5$b ||
    (_templateObject5$b = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n",
    ]))
);

var _excluded$D = ["children", "title", "placement", "onConfirm", "onCancel", "okText", "cancelText", "okType"];
var AlertCircleIcon$1 = function AlertCircleIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16",
    })
  );
};
var TxPopconfirm = function TxPopconfirm(_ref) {
  var children = _ref.children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Are you sure?" : _ref$title,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "bottom" : _ref$placement,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    _ref$okText = _ref.okText,
    okText = _ref$okText === void 0 ? "Yes" : _ref$okText,
    _ref$cancelText = _ref.cancelText,
    cancelText = _ref$cancelText === void 0 ? "No" : _ref$cancelText,
    _ref$okType = _ref.okType,
    okType = _ref$okType === void 0 ? "primary" : _ref$okType,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$D);
  var _useState = React$1.useState(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    setVisible(!visible);
  };
  var handleConfirm = function handleConfirm(e) {
    e.stopPropagation();
    if (onConfirm) {
      onConfirm(e);
    }
    setVisible(false);
  };
  var handleCancel = function handleCancel(e) {
    e.stopPropagation();
    if (onCancel) {
      onCancel(e);
    }
    setVisible(false);
  };
  return /*#__PURE__*/ React.createElement(
    StyledPopconfirmWrapper,
    _extends(
      {
        onClick: handleClick,
      },
      rest
    ),
    children,
    /*#__PURE__*/ React.createElement(
      StyledPopconfirmContent,
      {
        visible: visible,
        placement: placement,
      },
      /*#__PURE__*/ React.createElement(
        StyledPopconfirmTitle,
        null,
        /*#__PURE__*/ React.createElement(
          StyledPopconfirmIcon,
          null,
          /*#__PURE__*/ React.createElement(AlertCircleIcon$1, null)
        ),
        /*#__PURE__*/ React.createElement("div", null, title)
      ),
      /*#__PURE__*/ React.createElement(
        StyledPopconfirmButtons,
        null,
        /*#__PURE__*/ React.createElement(
          TxButton,
          {
            size: "small",
            onClick: handleCancel,
          },
          cancelText
        ),
        /*#__PURE__*/ React.createElement(
          TxButton,
          {
            size: "small",
            type: okType,
            onClick: handleConfirm,
          },
          okText
        )
      )
    )
  );
};
TxPopconfirm.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  placement: propTypes.oneOf(["top", "bottom", "left", "right"]),
  onConfirm: propTypes.func,
  onCancel: propTypes.func,
  okText: propTypes.string,
  cancelText: propTypes.string,
  okType: propTypes.string,
};
TxPopconfirm.defaultProps = {
  title: "Are you sure?",
  placement: "bottom",
  okText: "Yes",
  cancelText: "No",
  okType: "primary",
};

var _templateObject$E,
  _templateObject2$w,
  _templateObject3$s,
  _templateObject4$k,
  _templateObject5$c,
  _templateObject6$a,
  _templateObject7$7,
  _templateObject8$4,
  _templateObject9$3,
  _templateObject10$1,
  _templateObject11$1,
  _templateObject12$1;
var ProgressWrapper = styled__default.div(
  _templateObject$E || (_templateObject$E = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"]))
);
var ProgressLine = styled__default.div(
  _templateObject2$w ||
    (_templateObject2$w = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))
);
var ProgressTrack = styled__default.div(
  _templateObject3$s ||
    (_templateObject3$s = _taggedTemplateLiteralLoose([
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
  colors.bgFillLight,
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
);
var ProgressBar = styled__default.div(
  _templateObject4$k ||
    (_templateObject4$k = _taggedTemplateLiteralLoose([
      "\n  height: 100%;\n  background-color: ",
      ";\n  border-radius: ",
      ";\n  width: ",
      "%;\n  transition: width 0.3s ease;\n  position: relative;\n\n  ",
      "\n",
    ])),
  function (props) {
    if (props.status === "exception") return colors.danger[500];
    if (props.status === "success") return colors.success[500];
    return colors.primary[500];
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
      '\n    &::after {\n      content: "' +
        props.format +
        '";\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      transform: translateY(-50%);\n      color: white;\n      font-size: 12px;\n      font-weight: 600;\n    }\n  '
    );
  }
);
var ProgressText = styled__default.div(
  _templateObject5$c ||
    (_templateObject5$c = _taggedTemplateLiteralLoose([
      "\n  font-size: 14px;\n  color: ",
      ";\n  min-width: 40px;\n  text-align: right;\n  font-weight: 500;\n\n  ",
      "\n\n  ",
      "\n\n  svg {\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n  }\n",
    ])),
  colors.textPrimary,
  function (props) {
    return props.status === "exception" && "\n    color: " + colors.danger[500] + ";\n  ";
  },
  function (props) {
    return props.status === "success" && "\n    color: " + colors.success[500] + ";\n  ";
  }
);
var ProgressCircle = styled__default.div(
  _templateObject6$a ||
    (_templateObject6$a = _taggedTemplateLiteralLoose([
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
);
var ProgressCircleSvg = styled__default.svg(
  _templateObject7$7 || (_templateObject7$7 = _taggedTemplateLiteralLoose(["\n  transform: rotate(-90deg);\n"]))
);
var ProgressCircleTrack = styled__default.circle(
  _templateObject8$4 ||
    (_templateObject8$4 = _taggedTemplateLiteralLoose(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: ", ";\n"])),
  colors.bgFillLight,
  function (props) {
    return props.strokeWidth;
  }
);
var ProgressCirclePath = styled__default.circle(
  _templateObject9$3 ||
    (_templateObject9$3 = _taggedTemplateLiteralLoose([
      "\n  fill: none;\n  stroke: ",
      ";\n  stroke-width: ",
      ";\n  stroke-linecap: round;\n  stroke-dasharray: ",
      ";\n  stroke-dashoffset: ",
      ";\n  transition: stroke-dashoffset 0.3s ease;\n",
    ])),
  function (props) {
    if (props.status === "exception") return colors.danger[500];
    if (props.status === "success") return colors.success[500];
    return colors.primary[500];
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
);
var ProgressCircleText = styled__default.div(
  _templateObject10$1 ||
    (_templateObject10$1 = _taggedTemplateLiteralLoose([
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
  colors.textPrimary,
  function (props) {
    return props.status === "exception" && "\n    color: " + colors.danger[500] + ";\n  ";
  },
  function (props) {
    return props.status === "success" && "\n    color: " + colors.success[500] + ";\n  ";
  },
  function (props) {
    return props.width < 80 ? "16px" : "24px";
  },
  function (props) {
    return props.width < 80 ? "16px" : "24px";
  }
);
var ProgressSteps = styled__default.div(
  _templateObject11$1 ||
    (_templateObject11$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))
);
var ProgressStep = styled__default.div(
  _templateObject12$1 ||
    (_templateObject12$1 = _taggedTemplateLiteralLoose([
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
      ? props.status === "exception"
        ? colors.danger[500]
        : props.status === "success"
        ? colors.success[500]
        : colors.primary[500]
      : colors.bgFillLight;
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
);

var _excluded$E = [
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
];
var TxProgress = function TxProgress(_ref) {
  var _ref$percent = _ref.percent,
    percent = _ref$percent === void 0 ? 0 : _ref$percent,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "line" : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "default" : _ref$size,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "normal" : _ref$status,
    _ref$showInfo = _ref.showInfo,
    showInfo = _ref$showInfo === void 0 ? true : _ref$showInfo,
    strokeWidth = _ref.strokeWidth,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 120 : _ref$width,
    _ref$steps = _ref.steps,
    steps = _ref$steps === void 0 ? 0 : _ref$steps,
    format = _ref.format,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$E);
  var normalizedPercent = Math.min(Math.max(percent, 0), 100);
  var actualStatus = percent >= 100 && status === "normal" ? "success" : status;
  var getDefaultStrokeWidth = function getDefaultStrokeWidth() {
    if (strokeWidth) return strokeWidth;
    if (type === "circle") return 6;
    switch (size) {
      case "small":
        return 4;
      case "large":
        return 8;
      default:
        return 6;
    }
  };
  var defaultFormat = function defaultFormat(pct) {
    if (actualStatus === "exception") {
      return /*#__PURE__*/ React.createElement(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        },
        /*#__PURE__*/ React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "10",
        }),
        /*#__PURE__*/ React.createElement("line", {
          x1: "15",
          y1: "9",
          x2: "9",
          y2: "15",
        }),
        /*#__PURE__*/ React.createElement("line", {
          x1: "9",
          y1: "9",
          x2: "15",
          y2: "15",
        })
      );
    }
    if (actualStatus === "success") {
      return /*#__PURE__*/ React.createElement(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        },
        /*#__PURE__*/ React.createElement("path", {
          d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        }),
        /*#__PURE__*/ React.createElement("polyline", {
          points: "22 4 12 14.01 9 11.01",
        })
      );
    }
    return Math.round(pct) + "%";
  };
  var displayFormat = format || defaultFormat;
  if (type === "circle") {
    var actualStrokeWidth = getDefaultStrokeWidth();
    var radius = (width - actualStrokeWidth) / 2;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference - (normalizedPercent / 100) * circumference;
    return /*#__PURE__*/ React.createElement(
      ProgressCircle,
      _extends(
        {
          width: width,
          className: className,
        },
        props
      ),
      /*#__PURE__*/ React.createElement(
        ProgressCircleSvg,
        {
          width: width,
          height: width,
        },
        /*#__PURE__*/ React.createElement(ProgressCircleTrack, {
          cx: width / 2,
          cy: width / 2,
          r: radius,
          strokeWidth: actualStrokeWidth,
        }),
        /*#__PURE__*/ React.createElement(ProgressCirclePath, {
          cx: width / 2,
          cy: width / 2,
          r: radius,
          strokeWidth: actualStrokeWidth,
          circumference: circumference,
          offset: offset,
          status: actualStatus,
        })
      ),
      showInfo &&
        /*#__PURE__*/ React.createElement(
          ProgressCircleText,
          {
            width: width,
            status: actualStatus,
          },
          displayFormat(normalizedPercent)
        )
    );
  }
  if (steps > 0) {
    var activeSteps = Math.round((normalizedPercent / 100) * steps);
    return /*#__PURE__*/ React.createElement(
      ProgressWrapper,
      _extends(
        {
          className: className,
        },
        props
      ),
      /*#__PURE__*/ React.createElement(
        ProgressSteps,
        null,
        Array.from({
          length: steps,
        }).map(function (_, index) {
          return /*#__PURE__*/ React.createElement(ProgressStep, {
            key: index,
            active: index < activeSteps,
            size: size,
            status: actualStatus,
          });
        })
      ),
      showInfo &&
        /*#__PURE__*/ React.createElement(
          ProgressText,
          {
            status: actualStatus,
            style: {
              marginTop: "8px",
            },
          },
          displayFormat(normalizedPercent)
        )
    );
  }
  return /*#__PURE__*/ React.createElement(
    ProgressWrapper,
    _extends(
      {
        className: className,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      ProgressLine,
      null,
      /*#__PURE__*/ React.createElement(
        ProgressTrack,
        {
          size: size,
        },
        /*#__PURE__*/ React.createElement(ProgressBar, {
          percent: normalizedPercent,
          size: size,
          status: actualStatus,
          showInfo: showInfo && typeof displayFormat(normalizedPercent) === "string",
          format:
            showInfo && typeof displayFormat(normalizedPercent) === "string" ? displayFormat(normalizedPercent) : null,
        })
      ),
      showInfo &&
        /*#__PURE__*/ React.createElement(
          ProgressText,
          {
            status: actualStatus,
          },
          displayFormat(normalizedPercent)
        )
    )
  );
};
TxProgress.propTypes = {
  percent: propTypes.number,
  type: propTypes.oneOf(["line", "circle"]),
  size: propTypes.oneOf(["small", "default", "large"]),
  status: propTypes.oneOf(["normal", "success", "exception"]),
  showInfo: propTypes.bool,
  strokeWidth: propTypes.number,
  width: propTypes.number,
  steps: propTypes.number,
  format: propTypes.func,
  className: propTypes.string,
};
TxProgress.defaultProps = {
  percent: 0,
  type: "line",
  size: "default",
  status: "normal",
  showInfo: true,
  strokeWidth: undefined,
  width: 120,
  steps: 0,
  format: undefined,
  className: "",
};

var _excluded$F = ["value", "size"];
var _templateObject$F, _templateObject2$x;
var QRCodeContainer = styled__default.div(
  _templateObject$F ||
    (_templateObject$F = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  padding: 16px;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid ",
      ";\n",
    ])),
  colors.borderLight
);
var QRCodeCanvas = styled__default.canvas(
  _templateObject2$x || (_templateObject2$x = _taggedTemplateLiteralLoose(["\n  display: block;\n"]))
);
var TxQrcode = function TxQrcode(_ref) {
  var value = _ref.value,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 200 : _ref$size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$F);
  var canvasRef = React$1__default.useRef(null);
  React$1__default.useEffect(
    function () {
      var canvas = canvasRef.current;
      if (!canvas || !value) return;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = "black";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText("QR Code", size / 2, size / 2 - 10);
      ctx.fillText(value.substring(0, 20), size / 2, size / 2 + 10);
    },
    [value, size]
  );
  return /*#__PURE__*/ React$1__default.createElement(
    QRCodeContainer,
    props,
    /*#__PURE__*/ React$1__default.createElement(QRCodeCanvas, {
      ref: canvasRef,
      width: size,
      height: size,
    })
  );
};

var _templateObject$G, _templateObject2$y, _templateObject3$t, _templateObject4$l, _templateObject5$d;
var StyledRadioWrapper = styled__default.label(
  _templateObject$G ||
    (_templateObject$G = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n\n  &.tx-ui-tx-radio--disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n",
    ]))
);
var StyledRadioInput = styled__default.input(
  _templateObject2$y ||
    (_templateObject2$y = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n",
    ]))
);
var StyledRadioCircle = styled__default.span(
  _templateObject3$t ||
    (_templateObject3$t = _taggedTemplateLiteralLoose([
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
    return props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderDefault;
  },
  colors.bgWhite,
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
    return props.danger ? colors.danger : colors.primary;
  },
  function (props) {
    return props.checked ? 1 : 0;
  },
  function (props) {
    return props.checked ? 1 : 0;
  },
  StyledRadioInput,
  function (props) {
    return props.danger ? colors.dangerHover : colors.primaryLight;
  },
  StyledRadioWrapper,
  function (props) {
    return props.checked ? (props.danger ? colors.danger : colors.primary) : colors.borderHover;
  },
  StyledRadioWrapper,
  colors.bgFillLight,
  colors.borderDefault,
  colors.textDisabled,
  StyledRadioWrapper,
  colors.borderDefault
);
var StyledRadioLabel = styled__default.span(
  _templateObject4$l ||
    (_templateObject4$l = _taggedTemplateLiteralLoose([
      "\n  color: ",
      ";\n  font-size: ",
      ";\n  font-weight: 400;\n  line-height: 1.5;\n\n  ",
      ".tx-ui-tx-radio--disabled & {\n    color: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.color || colors.textPrimary;
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
  colors.textTertiary
);
var StyledRadioGroup = styled__default.div(
  _templateObject5$d ||
    (_templateObject5$d = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: ",
      ";\n  gap: ",
      ";\n  flex-wrap: ",
      ";\n",
    ])),
  function (props) {
    return props.direction === "horizontal" ? "row" : "column";
  },
  function (props) {
    return props.direction === "horizontal" ? "16px" : "8px";
  },
  function (props) {
    return props.direction === "horizontal" ? "wrap" : "nowrap";
  }
);

var _excluded$G = ["label", "checked", "onChange", "disabled", "size", "danger", "color", "value", "name", "id"],
  _excluded2$4 = ["children", "value", "onChange", "name", "direction", "disabled"];
var TxRadio = function TxRadio(_ref) {
  var label = _ref.label,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    onChange = _ref.onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$danger = _ref.danger,
    danger = _ref$danger === void 0 ? false : _ref$danger,
    color = _ref.color,
    value = _ref.value,
    name = _ref.name,
    id = _ref.id,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$G);
  var handleChange = function handleChange(e) {
    if (!disabled && onChange) {
      onChange(e);
    }
  };
  var radioId = id || "tx-radio-" + Math.random().toString(36).substr(2, 9);
  return /*#__PURE__*/ React$1__default.createElement(
    StyledRadioWrapper,
    {
      htmlFor: radioId,
      className: [
        "tx-ui-tx-radio",
        disabled && "tx-ui-tx-radio--disabled",
        danger && "tx-ui-tx-radio--danger",
        "tx-ui-tx-radio--" + size,
      ]
        .filter(Boolean)
        .join(" "),
    },
    /*#__PURE__*/ React$1__default.createElement(
      StyledRadioInput,
      _extends(
        {
          type: "radio",
          id: radioId,
          checked: checked,
          onChange: handleChange,
          disabled: disabled,
          value: value,
          name: name,
        },
        rest
      )
    ),
    /*#__PURE__*/ React$1__default.createElement(StyledRadioCircle, {
      checked: checked,
      size: size,
      danger: danger,
    }),
    label &&
      /*#__PURE__*/ React$1__default.createElement(
        StyledRadioLabel,
        {
          size: size,
          color: color,
        },
        label
      )
  );
};
TxRadio.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.node]),
  checked: propTypes.bool,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  danger: propTypes.bool,
  color: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
};
TxRadio.defaultProps = {
  checked: false,
  disabled: false,
  size: "medium",
  danger: false,
};
var TxRadioGroup = function TxRadioGroup(_ref2) {
  var children = _ref2.children,
    value = _ref2.value,
    onChange = _ref2.onChange,
    name = _ref2.name,
    _ref2$direction = _ref2.direction,
    direction = _ref2$direction === void 0 ? "vertical" : _ref2$direction,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2$4);
  var handleChange = function handleChange(childValue) {
    return function (e) {
      if (!disabled && onChange) {
        onChange(childValue, e);
      }
    };
  };
  return /*#__PURE__*/ React$1__default.createElement(
    StyledRadioGroup,
    _extends(
      {
        direction: direction,
      },
      rest
    ),
    React$1__default.Children.map(children, function (child) {
      if (/*#__PURE__*/ React$1__default.isValidElement(child)) {
        return /*#__PURE__*/ React$1__default.cloneElement(child, {
          checked: child.props.value === value,
          onChange: handleChange(child.props.value),
          name: name || "radio-group",
          disabled: disabled || child.props.disabled,
        });
      }
      return child;
    })
  );
};
TxRadioGroup.propTypes = {
  children: propTypes.node,
  value: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
  direction: propTypes.oneOf(["horizontal", "vertical"]),
  disabled: propTypes.bool,
};
TxRadioGroup.defaultProps = {
  direction: "vertical",
  disabled: false,
};
TxRadio.Group = TxRadioGroup;

var _excluded$H = ["value", "onChange", "count", "allowHalf", "disabled", "size"];
var _templateObject$H, _templateObject2$z;
var StarContainer = styled__default.div(
  _templateObject$H ||
    (_templateObject$H = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  gap: 4px;\n  font-size: ", ";\n"])),
  function (props) {
    return props.size || "20px";
  }
);
var StarButton = styled__default.button(
  _templateObject2$z ||
    (_templateObject2$z = _taggedTemplateLiteralLoose([
      "\n  background: none;\n  border: none;\n  color: ",
      ";\n  cursor: pointer;\n  font-size: inherit;\n  transition: all 0.2s;\n\n  &:hover {\n    color: ",
      ";\n    transform: scale(1.1);\n  }\n",
    ])),
  function (props) {
    return props.filled ? colors.warning : colors.borderMedium;
  },
  colors.warning
);
var TxRate = function TxRate(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 0 : _ref$value,
    onChange = _ref.onChange,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 5 : _ref$count,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$H);
  var _useState = React$1.useState(0),
    hoverValue = _useState[0],
    setHoverValue = _useState[1];
  var _useState2 = React$1.useState(value),
    rating = _useState2[0],
    setRating = _useState2[1];
  var handleClick = function handleClick(newValue) {
    if (!disabled) {
      setRating(newValue);
      if (onChange) onChange(newValue);
    }
  };
  var stars = [];
  var displayValue = hoverValue || rating;
  var _loop = function _loop(i) {
    var isFilled = i <= displayValue;
    stars.push(
      /*#__PURE__*/ React.createElement(
        StarButton,
        {
          key: i,
          filled: isFilled,
          onClick: function onClick() {
            return handleClick(i);
          },
          onMouseEnter: function onMouseEnter() {
            return !disabled && setHoverValue(i);
          },
          onMouseLeave: function onMouseLeave() {
            return setHoverValue(0);
          },
          disabled: disabled,
          size: size,
        },
        "\u2605"
      )
    );
  };
  for (var i = 1; i <= count; i++) {
    _loop(i);
  }
  return /*#__PURE__*/ React.createElement(
    StarContainer,
    _extends(
      {
        size: size,
      },
      props
    ),
    stars
  );
};

var _excluded$I = ["fixed", "top", "height"];
var _templateObject$I, _templateObject2$A;
var ProgressBar$1 = styled__default.div(
  _templateObject$I ||
    (_templateObject$I = _taggedTemplateLiteralLoose([
      "\n  position: ",
      ";\n  top: ",
      ";\n  left: 0;\n  right: 0;\n  height: ",
      ";\n  background: ",
      ";\n  z-index: 1000;\n",
    ])),
  function (props) {
    return props.fixed ? "fixed" : "sticky";
  },
  function (props) {
    return props.top || "0";
  },
  function (props) {
    return props.height || "4px";
  },
  colors.bgFillLight
);
var ProgressFill = styled__default.div(
  _templateObject2$A ||
    (_templateObject2$A = _taggedTemplateLiteralLoose([
      "\n  height: 100%;\n  width: ",
      "%;\n  background: ",
      ";\n  transition: width 0.1s linear;\n",
    ])),
  function (props) {
    return props.progress;
  },
  colors.primary
);
var TxScrollProgress = function TxScrollProgress(_ref) {
  var _ref$fixed = _ref.fixed,
    fixed = _ref$fixed === void 0 ? true : _ref$fixed,
    _ref$top = _ref.top,
    top = _ref$top === void 0 ? "0" : _ref$top,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "4px" : _ref$height,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$I);
  var _useState = React$1.useState(0),
    progress = _useState[0],
    setProgress = _useState[1];
  React$1.useEffect(function () {
    var handleScroll = function handleScroll() {
      var windowHeight = window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var scrollTop = window.scrollY;
      var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/ React.createElement(
    ProgressBar$1,
    _extends(
      {
        fixed: fixed ? 1 : 0,
        top: top,
        height: height,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(ProgressFill, {
      progress: progress,
    })
  );
};

var _excluded$J = ["children", "height"];
var _templateObject$J, _templateObject2$B, _templateObject3$u;
var Container = styled__default.div(
  _templateObject$J ||
    (_templateObject$J = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  height: ",
      ";\n  overflow: auto;\n",
    ])),
  function (props) {
    return props.height || "300px";
  }
);
var TopShadow = styled__default.div(
  _templateObject2$B ||
    (_templateObject2$B = _taggedTemplateLiteralLoose([
      "\n  position: sticky;\n  top: 0;\n  height: ",
      ";\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, transparent 100%);\n  pointer-events: none;\n  transition: height 0.2s;\n  z-index: 10;\n",
    ])),
  function (props) {
    return props.show ? "20px" : "0";
  }
);
var BottomShadow = styled__default.div(
  _templateObject3$u ||
    (_templateObject3$u = _taggedTemplateLiteralLoose([
      "\n  position: sticky;\n  bottom: 0;\n  height: ",
      ";\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);\n  pointer-events: none;\n  transition: height 0.2s;\n  z-index: 10;\n",
    ])),
  function (props) {
    return props.show ? "20px" : "0";
  }
);
var TxScrollShadow = function TxScrollShadow(_ref) {
  var children = _ref.children,
    height = _ref.height,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$J);
  var _useState = React$1.useState(false),
    showTopShadow = _useState[0],
    setShowTopShadow = _useState[1];
  var _useState2 = React$1.useState(true),
    showBottomShadow = _useState2[0],
    setShowBottomShadow = _useState2[1];
  var containerRef = React$1.useRef(null);
  var checkScroll = function checkScroll() {
    if (!containerRef.current) return;
    var _containerRef$current = containerRef.current,
      scrollTop = _containerRef$current.scrollTop,
      scrollHeight = _containerRef$current.scrollHeight,
      clientHeight = _containerRef$current.clientHeight;
    setShowTopShadow(scrollTop > 0);
    setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 10);
  };
  React$1.useEffect(function () {
    var container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return function () {
        return container.removeEventListener("scroll", checkScroll);
      };
    }
  }, []);
  return /*#__PURE__*/ React.createElement(
    Container,
    _extends(
      {
        ref: containerRef,
        height: height,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(TopShadow, {
      show: showTopShadow ? 1 : 0,
    }),
    children,
    /*#__PURE__*/ React.createElement(BottomShadow, {
      show: showBottomShadow ? 1 : 0,
    })
  );
};

var _excluded$K = ["options", "value", "onChange", "block"];
var _templateObject$K, _templateObject2$C;
var SegmentedContainer = styled__default.div(
  _templateObject$K ||
    (_templateObject$K = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  background: ",
      ";\n  border-radius: 8px;\n  padding: 4px;\n  position: relative;\n",
    ])),
  colors.bgFillLight
);
var SegmentedButton = styled__default.button(
  _templateObject2$C ||
    (_templateObject2$C = _taggedTemplateLiteralLoose([
      "\n  padding: 8px 16px;\n  background: ",
      ";\n  color: ",
      ";\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.active ? colors.primary : "transparent";
  },
  function (props) {
    return props.active ? "white" : colors.textPrimary;
  },
  function (props) {
    return props.active ? colors.primary : colors.bgFillMedium;
  }
);
var TxSegmented = function TxSegmented(_ref) {
  var _options$;
  var options = _ref.options,
    value = _ref.value,
    onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$K);
  var _useState = React$1.useState(
      value || ((_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.value)
    ),
    selectedValue = _useState[0],
    setSelectedValue = _useState[1];
  var handleClick = function handleClick(optionValue) {
    setSelectedValue(optionValue);
    if (onChange) onChange(optionValue);
  };
  return /*#__PURE__*/ React.createElement(
    SegmentedContainer,
    props,
    options.map(function (option) {
      return /*#__PURE__*/ React.createElement(
        SegmentedButton,
        {
          key: option.value,
          active: selectedValue === option.value,
          onClick: function onClick() {
            return handleClick(option.value);
          },
        },
        option.label
      );
    })
  );
};

var _templateObject$L,
  _templateObject2$D,
  _templateObject3$v,
  _templateObject4$m,
  _templateObject5$e,
  _templateObject6$b,
  _templateObject7$8;
var StyledSelectWrapper = styled__default.div(
  _templateObject$L ||
    (_templateObject$L = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  width: ",
      ";\n  min-width: 200px;\n",
    ])),
  function (props) {
    return props.fullWidth ? "100%" : "auto";
  }
);
var StyledSelectButton = styled__default.button(
  _templateObject2$D ||
    (_templateObject2$D = _taggedTemplateLiteralLoose([
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
    if (props.disabled) return colors.borderDisabled;
    if (props.status === "error") return colors.danger;
    if (props.status === "success") return colors.success;
    if (props.status === "warning") return colors.warning;
    return props.isOpen ? colors.primary : colors.borderLight;
  },
  function (props) {
    return props.disabled ? colors.bgFillLight : colors.bgWhite;
  },
  function (props) {
    return props.disabled ? colors.textDisabled : colors.textPrimary;
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
    return props.status === "error" ? colors.danger : colors.primary;
  },
  colors.primary,
  colors.primaryLight
);
var StyledSelectValue = styled__default.span(
  _templateObject3$v ||
    (_templateObject3$v = _taggedTemplateLiteralLoose([
      "\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ",
      ";\n",
    ])),
  function (props) {
    return props.placeholder ? colors.placeholder : "inherit";
  }
);
var StyledSelectArrow = styled__default.span(
  _templateObject4$m ||
    (_templateObject4$m = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%) rotate(",
      ");\n  transition: transform 0.2s ease;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n  color: ",
      ";\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.isOpen ? "180deg" : "0deg";
  },
  function (props) {
    return props.disabled ? colors.textDisabled : colors.textSecondary;
  }
);
var StyledSelectDropdown = styled__default.div(
  _templateObject5$e ||
    (_templateObject5$e = _taggedTemplateLiteralLoose([
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
  colors.bgWhite,
  colors.borderLight,
  function (props) {
    return props.isOpen ? 1 : 0;
  },
  function (props) {
    return props.isOpen ? "visible" : "hidden";
  },
  function (props) {
    return props.isOpen ? "translateY(0)" : "translateY(-10px)";
  },
  colors.bgFill,
  colors.borderDefault,
  colors.borderHover
);
var StyledSelectOption = styled__default.div(
  _templateObject6$b ||
    (_templateObject6$b = _taggedTemplateLiteralLoose([
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
    return props.selected ? colors.bgPrimaryLighter : "transparent";
  },
  function (props) {
    return props.selected ? colors.primary : colors.textPrimary;
  },
  function (props) {
    return props.selected ? "500" : "400";
  },
  function (props) {
    return props.selected ? colors.bgPrimaryLighter : colors.bgFill;
  },
  colors.bgPrimaryLight
);
var StyledSelectEmpty = styled__default.div(
  _templateObject7$8 ||
    (_templateObject7$8 = _taggedTemplateLiteralLoose([
      "\n  padding: 20px 16px;\n  text-align: center;\n  color: ",
      ";\n  font-size: 14px;\n",
    ])),
  colors.textSecondary
);

var _excluded$L = ["options", "value", "onChange", "placeholder", "disabled", "size", "status", "fullWidth"];
var ChevronDown$2 = function ChevronDown() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6 9 12 15 18 9",
    })
  );
};
var TxSelect = function TxSelect(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select an option" : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    status = _ref.status,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$L);
  var _useState = React$1.useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var wrapperRef = React$1.useRef(null);
  var selectedOption = options.find(function (opt) {
    return opt.value === value;
  });
  var displayValue = selectedOption ? selectedOption.label : placeholder;
  React$1.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var handleToggle = function handleToggle() {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  var handleSelect = function handleSelect(option) {
    if (!disabled && onChange) {
      onChange(option.value, option);
      setIsOpen(false);
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledSelectWrapper,
    _extends(
      {
        ref: wrapperRef,
        fullWidth: fullWidth,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(
      StyledSelectButton,
      {
        type: "button",
        onClick: handleToggle,
        disabled: disabled,
        isOpen: isOpen,
        size: size,
        status: status,
      },
      /*#__PURE__*/ React.createElement(
        StyledSelectValue,
        {
          placeholder: !selectedOption,
        },
        displayValue
      ),
      /*#__PURE__*/ React.createElement(
        StyledSelectArrow,
        {
          isOpen: isOpen,
          disabled: disabled,
        },
        /*#__PURE__*/ React.createElement(ChevronDown$2, null)
      )
    ),
    /*#__PURE__*/ React.createElement(
      StyledSelectDropdown,
      {
        isOpen: isOpen,
      },
      options.length === 0
        ? /*#__PURE__*/ React.createElement(StyledSelectEmpty, null, "No options available")
        : options.map(function (option) {
            return /*#__PURE__*/ React.createElement(
              StyledSelectOption,
              {
                key: option.value,
                selected: option.value === value,
                size: size,
                onClick: function onClick() {
                  return handleSelect(option);
                },
              },
              option.label
            );
          })
    )
  );
};
TxSelect.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.any.isRequired,
    })
  ),
  value: propTypes.any,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  status: propTypes.oneOf(["success", "warning", "error"]),
  fullWidth: propTypes.bool,
};
TxSelect.defaultProps = {
  options: [],
  placeholder: "Select an option",
  disabled: false,
  size: "medium",
  fullWidth: false,
};

var _excluded$M = ["width", "height", "variant", "radius"];
var _templateObject$M, _templateObject2$E;
var shimmer = styled.keyframes(
  _templateObject$M ||
    (_templateObject$M = _taggedTemplateLiteralLoose([
      "\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n",
    ]))
);
var SkeletonBase = styled__default.div(
  _templateObject2$E ||
    (_templateObject2$E = _taggedTemplateLiteralLoose([
      "\n  background: linear-gradient(90deg, ",
      " 25%, ",
      " 50%, ",
      " 75%);\n  background-size: 2000px 100%;\n  animation: ",
      " 1.5s infinite;\n  border-radius: ",
      ";\n",
    ])),
  colors.bgFillLight,
  colors.bgFillMedium,
  colors.bgFillLight,
  shimmer,
  function (props) {
    return props.radius || "4px";
  }
);
var TxSkeleton = function TxSkeleton(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? "100%" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "20px" : _ref$height,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "rect" : _ref$variant,
    radius = _ref.radius,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$M);
  var isCircle = variant === "circle";
  return /*#__PURE__*/ React.createElement(
    SkeletonBase,
    _extends(
      {
        style: {
          width: width,
          height: isCircle ? width : height,
          borderRadius: isCircle ? "50%" : radius || "4px",
        },
      },
      props
    )
  );
};

var _templateObject$N,
  _templateObject2$F,
  _templateObject3$w,
  _templateObject4$n,
  _templateObject5$f,
  _templateObject6$c,
  _templateObject7$9,
  _templateObject8$5,
  _templateObject9$4;
var SliderWrapper = styled__default.div(
  _templateObject$N ||
    (_templateObject$N = _taggedTemplateLiteralLoose([
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
);
var SliderContainer = styled__default.div(
  _templateObject2$F ||
    (_templateObject2$F = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  flex: 1;\n  height: 12px;\n  display: flex;\n  align-items: center;\n",
    ]))
);
var SliderTrack = styled__default.div(
  _templateObject3$w ||
    (_templateObject3$w = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: ",
      ";\n  border-radius: 2px;\n",
    ])),
  colors.bgFillLight
);
var SliderFill = styled__default.div(
  _templateObject4$n ||
    (_templateObject4$n = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  height: 4px;\n  background-color: ",
      ";\n  border-radius: 2px;\n  width: ",
      "%;\n  transition: width 0.2s ease;\n",
    ])),
  function (props) {
    return props.disabled ? colors.primary[300] : colors.primary[500];
  },
  function (props) {
    return props.percent;
  }
);
var SliderHandle = styled__default.div(
  _templateObject5$f ||
    (_templateObject5$f = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  background-color: white;\n  border: 2px solid ",
      ";\n  border-radius: 50%;\n  left: ",
      "%;\n  transform: translateX(-50%);\n  cursor: ",
      ";\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\n  &:hover {\n    transform: translateX(-50%) scale(1.1);\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  }\n\n  &:active {\n    cursor: ",
      ";\n    transform: translateX(-50%) scale(1.05);\n  }\n",
    ])),
  function (props) {
    return props.disabled ? colors.primary[300] : colors.primary[500];
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
);
var SliderInput = styled__default.input(
  _templateObject6$c ||
    (_templateObject6$c = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: ",
      ";\n  z-index: 1;\n\n  &::-webkit-slider-thumb {\n    width: 14px;\n    height: 14px;\n    -webkit-appearance: none;\n  }\n",
    ])),
  function (props) {
    return props.disabled ? "not-allowed" : "pointer";
  }
);
var SliderValue = styled__default.div(
  _templateObject7$9 ||
    (_templateObject7$9 = _taggedTemplateLiteralLoose([
      "\n  min-width: 40px;\n  font-size: 14px;\n  color: ",
      ";\n  text-align: center;\n  font-weight: 400;\n",
    ])),
  colors.textPrimary
);
var SliderMarks = styled__default.div(
  _templateObject8$5 ||
    (_templateObject8$5 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: 100%;\n  top: 16px;\n"]))
);
var SliderMark = styled__default.div(
  _templateObject9$4 ||
    (_templateObject9$4 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  left: ",
      "%;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: ",
      ';\n  white-space: nowrap;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: -12px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 2px;\n    height: 4px;\n    background-color: ',
      ";\n  }\n",
    ])),
  function (props) {
    return props.percent;
  },
  colors.textSecondary,
  colors.borderDefault
);

var _excluded$N = [
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
];
var TxSlider = function TxSlider(_ref) {
  var _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    value = _ref.value,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$showValue = _ref.showValue,
    showValue = _ref$showValue === void 0 ? false : _ref$showValue,
    _ref$marks = _ref.marks,
    marks = _ref$marks === void 0 ? null : _ref$marks,
    onChange = _ref.onChange,
    onAfterChange = _ref.onAfterChange,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$N);
  var _useState = React$1.useState(defaultValue),
    internalValue = _useState[0],
    setInternalValue = _useState[1];
  var currentValue = value !== undefined ? value : internalValue;
  var getPercent = function getPercent() {
    return ((currentValue - min) / (max - min)) * 100;
  };
  var handleChange = function handleChange(e) {
    if (disabled) return;
    var newValue = parseFloat(e.target.value);
    if (value === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };
  var handleAfterChange = function handleAfterChange(e) {
    if (disabled) return;
    if (onAfterChange) {
      onAfterChange(parseFloat(e.target.value));
    }
  };
  return /*#__PURE__*/ React.createElement(
    SliderWrapper,
    {
      disabled: disabled,
      className: className,
    },
    /*#__PURE__*/ React.createElement(
      SliderContainer,
      null,
      /*#__PURE__*/ React.createElement(SliderTrack, null),
      /*#__PURE__*/ React.createElement(SliderFill, {
        percent: getPercent(),
        disabled: disabled,
      }),
      /*#__PURE__*/ React.createElement(SliderHandle, {
        percent: getPercent(),
        disabled: disabled,
      }),
      /*#__PURE__*/ React.createElement(
        SliderInput,
        _extends(
          {
            type: "range",
            min: min,
            max: max,
            step: step,
            value: currentValue,
            onChange: handleChange,
            onMouseUp: handleAfterChange,
            onTouchEnd: handleAfterChange,
            disabled: disabled,
          },
          props
        )
      ),
      marks &&
        /*#__PURE__*/ React.createElement(
          SliderMarks,
          null,
          Object.entries(marks).map(function (_ref2) {
            var markValue = _ref2[0],
              label = _ref2[1];
            var markPercent = ((parseFloat(markValue) - min) / (max - min)) * 100;
            return /*#__PURE__*/ React.createElement(
              SliderMark,
              {
                key: markValue,
                percent: markPercent,
              },
              label
            );
          })
        )
    ),
    showValue && /*#__PURE__*/ React.createElement(SliderValue, null, currentValue)
  );
};
TxSlider.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  value: propTypes.number,
  defaultValue: propTypes.number,
  disabled: propTypes.bool,
  showValue: propTypes.bool,
  marks: propTypes.object,
  onChange: propTypes.func,
  onAfterChange: propTypes.func,
  className: propTypes.string,
};
TxSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: undefined,
  defaultValue: 0,
  disabled: false,
  showValue: false,
  marks: null,
  onChange: undefined,
  onAfterChange: undefined,
  className: "",
};

var _excluded$O = ["code", "language", "label"];
var _templateObject$O, _templateObject2$G, _templateObject3$x, _templateObject4$o, _templateObject5$g;
var SnippetContainer = styled__default.div(
  _templateObject$O ||
    (_templateObject$O = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  overflow: hidden;\n",
    ])),
  colors.bgFillLight,
  colors.borderLight
);
var Header = styled__default.div(
  _templateObject2$G ||
    (_templateObject2$G = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background: ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ])),
  colors.bgFillMedium,
  colors.borderLight
);
var Label = styled__default.span(
  _templateObject3$x || (_templateObject3$x = _taggedTemplateLiteralLoose(["\n  font-size: 12px;\n  color: ", ";\n"])),
  colors.textSecondary
);
var CopyButton$1 = styled__default.button(
  _templateObject4$o ||
    (_templateObject4$o = _taggedTemplateLiteralLoose([
      "\n  background: transparent;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: ",
      ";\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n",
    ])),
  colors.primary
);
var CodeBlock = styled__default.pre(
  _templateObject5$g ||
    (_templateObject5$g = _taggedTemplateLiteralLoose([
      "\n  margin: 0;\n  padding: 12px 16px;\n  font-size: 14px;\n  overflow-x: auto;\n",
    ]))
);
var TxSnippet = function TxSnippet(_ref) {
  var code = _ref.code,
    language = _ref.language,
    label = _ref.label,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$O);
  var _useState = React$1.useState(false),
    copied = _useState[0],
    setCopied = _useState[1];
  var handleCopy = function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 2000);
  };
  return /*#__PURE__*/ React.createElement(
    SnippetContainer,
    props,
    /*#__PURE__*/ React.createElement(
      Header,
      null,
      /*#__PURE__*/ React.createElement(Label, null, label || language),
      /*#__PURE__*/ React.createElement(
        CopyButton$1,
        {
          onClick: handleCopy,
        },
        copied ? "Copied!" : "Copy"
      )
    ),
    /*#__PURE__*/ React.createElement(CodeBlock, null, code)
  );
};

var _excluded$P = ["direction", "size", "children"];
var _templateObject$P;
var SpaceContainer = styled__default.div(
  _templateObject$P ||
    (_templateObject$P = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  flex-direction: ",
      ";\n  align-items: center;\n  gap: ",
      ";\n  width: ",
      ";\n",
    ])),
  function (props) {
    return props.direction || "horizontal";
  },
  function (props) {
    return props.size || "8px";
  },
  function (props) {
    return props.direction === "vertical" ? "100%" : "auto";
  }
);
var TxSpace = function TxSpace(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "8px" : _ref$size,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$P);
  return /*#__PURE__*/ React$1__default.createElement(
    SpaceContainer,
    _extends(
      {
        direction: direction,
        size: size,
      },
      props
    ),
    React$1__default.Children.map(children, function (child) {
      return /*#__PURE__*/ React$1__default.createElement(
        "div",
        {
          key: child.key || Math.random(),
        },
        child
      );
    })
  );
};

var _excluded$Q = ["direction", "children"];
var _templateObject$Q, _templateObject2$H, _templateObject3$y;
var SplitterContainer = styled__default.div(
  _templateObject$Q ||
    (_templateObject$Q = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  width: ",
      ";\n  height: ",
      ";\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  overflow: hidden;\n",
    ])),
  function (props) {
    return props.width || "100%";
  },
  function (props) {
    return props.height || "400px";
  },
  colors.borderLight
);
var Panel = styled__default.div(
  _templateObject2$H ||
    (_templateObject2$H = _taggedTemplateLiteralLoose(["\n  flex: ", ";\n  overflow: ", ";\n  background: ", ";\n"])),
  function (props) {
    return props.flex || 1;
  },
  function (props) {
    return props.overflow || "auto";
  },
  colors.bgFillLight
);
var Resizer = styled__default.div(
  _templateObject3$y ||
    (_templateObject3$y = _taggedTemplateLiteralLoose([
      "\n  width: ",
      ";\n  height: ",
      ";\n  background: ",
      ";\n  cursor: ",
      ";\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.direction === "horizontal" ? "8px" : "100%";
  },
  function (props) {
    return props.direction === "vertical" ? "8px" : "100%";
  },
  colors.borderLight,
  function (props) {
    return props.direction === "horizontal" ? "col-resize" : "row-resize";
  },
  colors.primary
);
var TxSplitter = function TxSplitter(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Q);
  var _useState = React$1.useState([50, 50]),
    sizes = _useState[0];
  var panels = React$1__default.Children.toArray(children);
  return /*#__PURE__*/ React$1__default.createElement(
    SplitterContainer,
    props,
    panels.map(function (panel, index) {
      return /*#__PURE__*/ React$1__default.createElement(
        React$1__default.Fragment,
        {
          key: index,
        },
        /*#__PURE__*/ React$1__default.createElement(
          Panel,
          {
            flex: sizes[index],
          },
          panel
        ),
        index < panels.length - 1 &&
          /*#__PURE__*/ React$1__default.createElement(Resizer, {
            direction: direction,
          })
      );
    })
  );
};

var _templateObject$R,
  _templateObject2$I,
  _templateObject3$z,
  _templateObject4$p,
  _templateObject5$h,
  _templateObject6$d;
var StyledStepsWrapper = styled__default.div(
  _templateObject$R ||
    (_templateObject$R = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: ", ";\n  gap: ", ";\n"])),
  function (props) {
    return props.direction === "vertical" ? "column" : "row";
  },
  function (props) {
    return props.direction === "vertical" ? "0" : "0";
  }
);
var StyledStep = styled__default.div(
  _templateObject2$I ||
    (_templateObject2$I = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: ",
      ";\n  align-items: ",
      ";\n  flex: ",
      ";\n  position: relative;\n\n  ",
      "\n",
    ])),
  function (props) {
    return props.direction === "vertical" ? "row" : "column";
  },
  function (props) {
    return props.direction === "vertical" ? "flex-start" : "center";
  },
  function (props) {
    return props.direction === "vertical" ? "none" : "1";
  },
  function (props) {
    return (
      props.direction === "horizontal" &&
      !props.isLast &&
      '\n    &::after {\n      content: "";\n      position: absolute;\n      top: 16px;\n      left: calc(50% + 24px);\n      right: calc(-50% + 24px);\n      height: 2px;\n      background-color: ' +
        (props.status === "finish" ? colors.primary : colors.borderLight) +
        ";\n    }\n  "
    );
  }
);
var StyledStepIcon = styled__default.div(
  _templateObject3$z ||
    (_templateObject3$z = _taggedTemplateLiteralLoose([
      "\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  z-index: 1;\n  transition: all 0.2s ease;\n\n  ",
      "\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    switch (props.status) {
      case "finish":
        return (
          "\n          background-color: " +
          colors.primary +
          ";\n          color: " +
          colors.textWhite +
          ";\n          border: 2px solid " +
          colors.primary +
          ";\n        "
        );
      case "process":
        return (
          "\n          background-color: " +
          colors.bgWhite +
          ";\n          color: " +
          colors.primary +
          ";\n          border: 2px solid " +
          colors.primary +
          ";\n        "
        );
      case "error":
        return (
          "\n          background-color: " +
          colors.bgWhite +
          ";\n          color: " +
          colors.danger +
          ";\n          border: 2px solid " +
          colors.danger +
          ";\n        "
        );
      default:
        return (
          "\n          background-color: " +
          colors.bgWhite +
          ";\n          color: " +
          colors.textTertiary +
          ";\n          border: 2px solid " +
          colors.borderLight +
          ";\n        "
        );
    }
  }
);
var StyledStepContent = styled__default.div(
  _templateObject4$p ||
    (_templateObject4$p = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: column;\n  margin-top: ",
      ";\n  margin-left: ",
      ";\n  padding-bottom: ",
      ";\n  position: relative;\n\n  ",
      "\n",
    ])),
  function (props) {
    return props.direction === "vertical" ? "0" : "8px";
  },
  function (props) {
    return props.direction === "vertical" ? "12px" : "0";
  },
  function (props) {
    return props.direction === "vertical" && !props.isLast ? "24px" : "0";
  },
  function (props) {
    return (
      props.direction === "vertical" &&
      !props.isLast &&
      '\n    &::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: -28px;\n      bottom: 0;\n      width: 2px;\n      background-color: ' +
        (props.status === "finish" ? colors.primary : colors.borderLight) +
        ";\n    }\n  "
    );
  }
);
var StyledStepTitle = styled__default.div(
  _templateObject5$h ||
    (_templateObject5$h = _taggedTemplateLiteralLoose([
      "\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
      ";\n  margin-bottom: 4px;\n",
    ])),
  function (props) {
    switch (props.status) {
      case "finish":
      case "process":
        return colors.textPrimary;
      case "error":
        return colors.danger;
      default:
        return colors.textTertiary;
    }
  }
);
var StyledStepDescription = styled__default.div(
  _templateObject6$d || (_templateObject6$d = _taggedTemplateLiteralLoose(["\n  font-size: 12px;\n  color: ", ";\n"])),
  colors.textSecondary
);

var _excluded$R = ["current", "items", "direction", "status"];
var CheckIcon = function CheckIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("polyline", {
      points: "20 6 9 17 4 12",
    })
  );
};
var CloseIcon$3 = function CloseIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    })
  );
};
var TxSteps = function TxSteps(_ref) {
  var _ref$current = _ref.current,
    current = _ref$current === void 0 ? 0 : _ref$current,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "process" : _ref$status,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$R);
  var getStepStatus = function getStepStatus(index) {
    if (status === "error" && index === current) {
      return "error";
    }
    if (index < current) {
      return "finish";
    }
    if (index === current) {
      return "process";
    }
    return "wait";
  };
  var renderIcon = function renderIcon(stepStatus, index) {
    if (stepStatus === "finish") {
      return /*#__PURE__*/ React.createElement(CheckIcon, null);
    }
    if (stepStatus === "error") {
      return /*#__PURE__*/ React.createElement(CloseIcon$3, null);
    }
    return index + 1;
  };
  return /*#__PURE__*/ React.createElement(
    StyledStepsWrapper,
    _extends(
      {
        direction: direction,
      },
      rest
    ),
    items.map(function (item, index) {
      var stepStatus = getStepStatus(index);
      var isLast = index === items.length - 1;
      return /*#__PURE__*/ React.createElement(
        StyledStep,
        {
          key: item.title || index,
          direction: direction,
          status: stepStatus,
          isLast: isLast,
        },
        /*#__PURE__*/ React.createElement(
          StyledStepIcon,
          {
            status: stepStatus,
          },
          item.icon || renderIcon(stepStatus, index)
        ),
        /*#__PURE__*/ React.createElement(
          StyledStepContent,
          {
            direction: direction,
            status: stepStatus,
            isLast: isLast,
          },
          /*#__PURE__*/ React.createElement(
            StyledStepTitle,
            {
              status: stepStatus,
            },
            item.title
          ),
          item.description && /*#__PURE__*/ React.createElement(StyledStepDescription, null, item.description)
        )
      );
    })
  );
};
TxSteps.propTypes = {
  current: propTypes.number,
  items: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.node.isRequired,
      description: propTypes.node,
      icon: propTypes.node,
    })
  ),
  direction: propTypes.oneOf(["horizontal", "vertical"]),
  status: propTypes.oneOf(["wait", "process", "finish", "error"]),
};
TxSteps.defaultProps = {
  current: 0,
  items: [],
  direction: "horizontal",
  status: "process",
};

var _templateObject$S, _templateObject2$J, _templateObject3$A, _templateObject4$q, _templateObject5$i;
var SwitchWrapper = styled__default.label(
  _templateObject$S ||
    (_templateObject$S = _taggedTemplateLiteralLoose([
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
);
var SwitchInput = styled__default.input(
  _templateObject2$J || (_templateObject2$J = _taggedTemplateLiteralLoose(["\n  display: none;\n"]))
);
var SwitchSlider = styled__default.span(
  _templateObject3$A ||
    (_templateObject3$A = _taggedTemplateLiteralLoose([
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
    return props.size === "small" ? "28px" : props.size === "large" ? "48px" : "38px";
  },
  function (props) {
    return props.size === "small" ? "16px" : props.size === "large" ? "26px" : "22px";
  },
  function (props) {
    return props.checked ? (props.disabled ? colors.primary[300] : colors.primary[500]) : "rgba(0, 0, 0, 0.25)";
  },
  function (props) {
    return props.size === "small" ? "8px" : props.size === "large" ? "13px" : "11px";
  },
  function (props) {
    return props.size === "small" ? "12px" : props.size === "large" ? "22px" : "18px";
  },
  function (props) {
    return props.size === "small" ? "12px" : props.size === "large" ? "22px" : "18px";
  },
  function (_ref) {
    var checked = _ref.checked,
      size = _ref.size;
    return checked ? "calc(100% - " + (size === "small" ? "14px" : size === "large" ? "24px" : "20px") + ")" : "2px";
  }
);
var SwitchLabel = styled__default.span(
  _templateObject4$q ||
    (_templateObject4$q = _taggedTemplateLiteralLoose([
      "\n  font-size: 14px;\n  color: ",
      ";\n  user-select: none;\n  font-weight: 400;\n",
    ])),
  colors.textPrimary
);
var LoadingIcon = styled__default.div(
  _templateObject5$i ||
    (_templateObject5$i = _taggedTemplateLiteralLoose([
      "\n  display: inline-block;\n  width: ",
      ";\n  height: ",
      ";\n  border: 2px solid white;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 0.6s linear infinite;\n  position: absolute;\n  top: 50%;\n  left: ",
      ";\n  right: ",
      ";\n  transform: translate(",
      ", -50%);\n\n  @keyframes spin {\n    to {\n      transform: translate(",
      ", -50%) rotate(360deg);\n    }\n  }\n",
    ])),
  function (props) {
    return props.size === "small" ? "10px" : props.size === "large" ? "16px" : "14px";
  },
  function (props) {
    return props.size === "small" ? "10px" : props.size === "large" ? "16px" : "14px";
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
);

var _excluded$S = [
  "checked",
  "defaultChecked",
  "disabled",
  "loading",
  "size",
  "checkedChildren",
  "unCheckedChildren",
  "onChange",
  "className",
];
var TxSwitch = function TxSwitch(_ref) {
  var _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    _ref$defaultChecked = _ref.defaultChecked,
    defaultChecked = _ref$defaultChecked === void 0 ? false : _ref$defaultChecked,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "default" : _ref$size,
    _ref$checkedChildren = _ref.checkedChildren,
    checkedChildren = _ref$checkedChildren === void 0 ? null : _ref$checkedChildren,
    _ref$unCheckedChildre = _ref.unCheckedChildren,
    unCheckedChildren = _ref$unCheckedChildre === void 0 ? null : _ref$unCheckedChildre,
    onChange = _ref.onChange,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$S);
  var isChecked = checked !== undefined ? checked : defaultChecked;
  var handleChange = function handleChange(e) {
    if (disabled || loading) return;
    if (onChange) {
      onChange(e.target.checked, e);
    }
  };
  return /*#__PURE__*/ React.createElement(
    SwitchWrapper,
    {
      disabled: disabled || loading,
      className: className,
    },
    /*#__PURE__*/ React.createElement(
      SwitchInput,
      _extends(
        {
          type: "checkbox",
          checked: isChecked,
          onChange: handleChange,
          disabled: disabled || loading,
        },
        props
      )
    ),
    /*#__PURE__*/ React.createElement(
      SwitchSlider,
      {
        checked: isChecked,
        disabled: disabled,
        size: size,
      },
      loading &&
        /*#__PURE__*/ React.createElement(LoadingIcon, {
          checked: isChecked,
          size: size,
        }),
      !loading &&
        isChecked &&
        checkedChildren &&
        /*#__PURE__*/ React.createElement(
          "span",
          {
            style: {
              position: "absolute",
              left: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: size === "small" ? "10px" : "12px",
              color: "white",
            },
          },
          checkedChildren
        ),
      !loading &&
        !isChecked &&
        unCheckedChildren &&
        /*#__PURE__*/ React.createElement(
          "span",
          {
            style: {
              position: "absolute",
              right: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: size === "small" ? "10px" : "12px",
              color: "white",
            },
          },
          unCheckedChildren
        )
    )
  );
};
TxSwitch.propTypes = {
  checked: propTypes.bool,
  defaultChecked: propTypes.bool,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  size: propTypes.oneOf(["small", "default", "large"]),
  checkedChildren: propTypes.node,
  unCheckedChildren: propTypes.node,
  onChange: propTypes.func,
  className: propTypes.string,
};
TxSwitch.defaultProps = {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  loading: false,
  size: "default",
  checkedChildren: null,
  unCheckedChildren: null,
  onChange: undefined,
  className: "",
};

var _templateObject$T,
  _templateObject2$K,
  _templateObject3$B,
  _templateObject4$r,
  _templateObject5$j,
  _templateObject6$e,
  _templateObject7$a;
var StyledTableWrapper = styled__default.div(
  _templateObject$T ||
    (_templateObject$T = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  overflow-x: auto;\n  border: 1px solid ",
      ";\n  border-radius: 12px;\n",
    ])),
  colors.borderLight
);
var StyledTable = styled__default.table(
  _templateObject2$K ||
    (_templateObject2$K = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n  background: ",
      ";\n",
    ])),
  colors.bgWhite
);
var StyledTableHead = styled__default.thead(
  _templateObject3$B || (_templateObject3$B = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n"])),
  colors.bgFill
);
var StyledTableRow = styled__default.tr(
  _templateObject4$r ||
    (_templateObject4$r = _taggedTemplateLiteralLoose([
      "\n  border-bottom: 1px solid ",
      ";\n  transition: background-color 0.2s ease;\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  ",
      "\n",
    ])),
  colors.borderLight,
  function (props) {
    return props.hoverable && "\n    &:hover {\n      background-color: " + colors.bgFillLight + ";\n    }\n  ";
  }
);
var StyledTableHeader = styled__default.th(
  _templateObject5$j ||
    (_templateObject5$j = _taggedTemplateLiteralLoose([
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
  colors.textPrimary
);
var StyledTableCell = styled__default.td(
  _templateObject6$e ||
    (_templateObject6$e = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  text-align: ", ";\n  color: ", ";\n"])),
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
  colors.textSecondary
);
var StyledEmptyText = styled__default.div(
  _templateObject7$a ||
    (_templateObject7$a = _taggedTemplateLiteralLoose([
      "\n  padding: 48px 24px;\n  text-align: center;\n  color: ",
      ";\n  font-size: 14px;\n",
    ])),
  colors.textTertiary
);

var _excluded$T = ["columns", "dataSource", "size", "bordered", "hoverable", "emptyText"];
var TxTable = function TxTable(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns,
    _ref$dataSource = _ref.dataSource,
    dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    _ref$hoverable = _ref.hoverable,
    hoverable = _ref$hoverable === void 0 ? true : _ref$hoverable,
    _ref$emptyText = _ref.emptyText,
    emptyText = _ref$emptyText === void 0 ? "No data" : _ref$emptyText,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  return /*#__PURE__*/ React.createElement(
    StyledTableWrapper,
    _extends(
      {
        bordered: bordered,
      },
      rest
    ),
    /*#__PURE__*/ React.createElement(
      StyledTable,
      null,
      /*#__PURE__*/ React.createElement(
        StyledTableHead,
        null,
        /*#__PURE__*/ React.createElement(
          StyledTableRow,
          null,
          columns.map(function (column, index) {
            return /*#__PURE__*/ React.createElement(
              StyledTableHeader,
              {
                key: column.key || index,
                align: column.align,
                size: size,
              },
              column.title
            );
          })
        )
      ),
      /*#__PURE__*/ React.createElement(
        "tbody",
        null,
        dataSource.length > 0
          ? dataSource.map(function (record, rowIndex) {
              return /*#__PURE__*/ React.createElement(
                StyledTableRow,
                {
                  key: record.key || rowIndex,
                  hoverable: hoverable,
                },
                columns.map(function (column, colIndex) {
                  return /*#__PURE__*/ React.createElement(
                    StyledTableCell,
                    {
                      key: column.key || colIndex,
                      align: column.align,
                      size: size,
                    },
                    column.render ? column.render(record[column.dataIndex], record, rowIndex) : record[column.dataIndex]
                  );
                })
              );
            })
          : /*#__PURE__*/ React.createElement(
              "tr",
              null,
              /*#__PURE__*/ React.createElement(
                "td",
                {
                  colSpan: columns.length,
                },
                /*#__PURE__*/ React.createElement(StyledEmptyText, null, emptyText)
              )
            )
      )
    )
  );
};
TxTable.propTypes = {
  columns: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.oneOfType([propTypes.string, propTypes.node]),
      dataIndex: propTypes.string,
      key: propTypes.string,
      align: propTypes.oneOf(["left", "center", "right"]),
      render: propTypes.func,
    })
  ),
  dataSource: propTypes.array,
  size: propTypes.oneOf(["small", "medium", "large"]),
  bordered: propTypes.bool,
  hoverable: propTypes.bool,
  emptyText: propTypes.oneOfType([propTypes.string, propTypes.node]),
};
TxTable.defaultProps = {
  columns: [],
  dataSource: [],
  size: "medium",
  bordered: true,
  hoverable: true,
  emptyText: "No data",
};

var _templateObject$U, _templateObject2$L, _templateObject3$C, _templateObject4$s;
var StyledTabsWrapper = styled__default.div(
  _templateObject$U || (_templateObject$U = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"]))
);
var StyledTabsList = styled__default.div(
  _templateObject2$L ||
    (_templateObject2$L = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  gap: ",
      ";\n  border-bottom: ",
      ";\n  background-color: ",
      ";\n  padding: ",
      ";\n  border-radius: ",
      ";\n",
    ])),
  function (props) {
    return props.type === "card" ? "4px" : "0";
  },
  function (props) {
    return props.type === "line" ? "2px solid " + colors.borderLight : "none";
  },
  function (props) {
    return props.type === "card" ? colors.bgFill : "transparent";
  },
  function (props) {
    return props.type === "card" ? "4px" : "0";
  },
  function (props) {
    return props.type === "card" ? "8px" : "0";
  }
);
var StyledTab = styled__default.button(
  _templateObject3$C ||
    (_templateObject3$C = _taggedTemplateLiteralLoose([
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
    return props.active ? colors.primary : colors.textSecondary;
  },
  function (props) {
    return props.type === "card" ? "6px" : "0";
  },
  colors.primary,
  function (props) {
    return props.type === "card" ? colors.bgWhite : "transparent";
  },
  colors.textTertiary,
  function (props) {
    return (
      props.active &&
      props.type === "line" &&
      '\n    &::after {\n      content: "";\n      position: absolute;\n      bottom: -2px;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background-color: ' +
        colors.primary +
        ";\n    }\n  "
    );
  },
  function (props) {
    return (
      props.active &&
      props.type === "card" &&
      "\n    background-color: " + colors.bgWhite + ";\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n  "
    );
  }
);
var StyledTabPanel = styled__default.div(
  _templateObject4$s ||
    (_templateObject4$s = _taggedTemplateLiteralLoose(["\n  padding: 24px 0;\n  display: ", ";\n"])),
  function (props) {
    return props.active ? "block" : "none";
  }
);

var _excluded$U = ["defaultActiveKey", "activeKey", "onChange", "items", "type", "size"];
var TxTabs = function TxTabs(_ref) {
  var _items$;
  var defaultActiveKey = _ref.defaultActiveKey,
    activeKey = _ref.activeKey,
    onChange = _ref.onChange,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "line" : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$U);
  var _useState = React$1.useState(
      defaultActiveKey || ((_items$ = items[0]) === null || _items$ === void 0 ? void 0 : _items$.key)
    ),
    internalActiveKey = _useState[0],
    setInternalActiveKey = _useState[1];
  var currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;
  var handleTabClick = function handleTabClick(key) {
    if (activeKey === undefined) {
      setInternalActiveKey(key);
    }
    if (onChange) {
      onChange(key);
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledTabsWrapper,
    rest,
    /*#__PURE__*/ React.createElement(
      StyledTabsList,
      {
        type: type,
      },
      items.map(function (item) {
        return /*#__PURE__*/ React.createElement(
          StyledTab,
          {
            key: item.key,
            active: currentActiveKey === item.key,
            onClick: function onClick() {
              return handleTabClick(item.key);
            },
            disabled: item.disabled,
            type: type,
            size: size,
          },
          item.label
        );
      })
    ),
    items.map(function (item) {
      return /*#__PURE__*/ React.createElement(
        StyledTabPanel,
        {
          key: item.key,
          active: currentActiveKey === item.key,
        },
        item.children
      );
    })
  );
};
TxTabs.propTypes = {
  defaultActiveKey: propTypes.string,
  activeKey: propTypes.string,
  onChange: propTypes.func,
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      label: propTypes.node.isRequired,
      children: propTypes.node,
      disabled: propTypes.bool,
    })
  ),
  type: propTypes.oneOf(["line", "card"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
};
TxTabs.defaultProps = {
  items: [],
  type: "line",
  size: "medium",
};

var _templateObject$V, _templateObject2$M;
var StyledTag = styled__default.span(
  _templateObject$V ||
    (_templateObject$V = _taggedTemplateLiteralLoose([
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
      default: {
        bg: colors.bgFill,
        color: colors.textPrimary,
        border: colors.borderDefault,
      },
      primary: {
        bg: colors.primaryLight,
        color: colors.primary,
        border: colors.primary,
      },
      success: {
        bg: colors.success + "15",
        color: colors.success,
        border: colors.success,
      },
      warning: {
        bg: colors.warning + "15",
        color: colors.warning,
        border: colors.warning,
      },
      danger: {
        bg: colors.dangerLight,
        color: colors.danger,
        border: colors.danger,
      },
      info: {
        bg: colors.info + "15",
        color: colors.info,
        border: colors.info,
      },
    };
    var style = colorMap[props.color] || colorMap["default"];
    return (
      "\n      background-color: " +
      style.bg +
      ";\n      color: " +
      style.color +
      ";\n      border-color: " +
      (props.bordered ? style.border : "transparent") +
      ";\n    "
    );
  }
);
var StyledTagClose = styled__default.button(
  _templateObject2$M ||
    (_templateObject2$M = _taggedTemplateLiteralLoose([
      "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  width: 14px;\n  height: 14px;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
    ]))
);

var _excluded$V = ["children", "color", "closable", "onClose", "size", "bordered"];
var CloseIcon$4 = function CloseIcon() {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    })
  );
};
var TxTag = function TxTag(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "default" : _ref$color,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? false : _ref$closable,
    onClose = _ref.onClose,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? false : _ref$bordered,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$V);
  var handleClose = function handleClose(e) {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledTag,
    _extends(
      {
        color: color,
        size: size,
        bordered: bordered,
        closable: closable,
      },
      rest
    ),
    children,
    closable &&
      /*#__PURE__*/ React.createElement(
        StyledTagClose,
        {
          onClick: handleClose,
          type: "button",
        },
        /*#__PURE__*/ React.createElement(CloseIcon$4, null)
      )
  );
};
TxTag.propTypes = {
  children: propTypes.node,
  color: propTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
  closable: propTypes.bool,
  onClose: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"]),
  bordered: propTypes.bool,
};
TxTag.defaultProps = {
  color: "default",
  closable: false,
  size: "medium",
  bordered: false,
};

var _excluded$W = ["children", "gradient", "weight", "size"];
var _templateObject$W;
var GradientText = styled__default.span(
  _templateObject$W ||
    (_templateObject$W = _taggedTemplateLiteralLoose([
      "\n  background: ",
      ";\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: ",
      ";\n  font-size: ",
      ";\n",
    ])),
  function (props) {
    return props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  },
  function (props) {
    return props.weight || "600";
  },
  function (props) {
    return props.size || "inherit";
  }
);
var TxTextGradient = function TxTextGradient(_ref) {
  var children = _ref.children,
    gradient = _ref.gradient,
    weight = _ref.weight,
    size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$W);
  return /*#__PURE__*/ React.createElement(
    GradientText,
    _extends(
      {
        gradient: gradient,
        weight: weight,
        size: size,
      },
      props
    ),
    children
  );
};

var _excluded$X = ["placeholder", "value", "onChange", "disabled", "resize", "minHeight"];
var _templateObject$X;
var TextareaStyled = styled__default.textarea(
  _templateObject$X ||
    (_templateObject$X = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid ",
      ";\n  border-radius: 6px;\n  font-size: 14px;\n  resize: ",
      ";\n  min-height: ",
      ";\n\n  &:focus {\n    outline: none;\n    border-color: ",
      ";\n    box-shadow: 0 0 0 3px ",
      ";\n  }\n\n  &:disabled {\n    background: ",
      ";\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    color: ",
      ";\n  }\n",
    ])),
  colors.borderLight,
  function (props) {
    return props.resize || "vertical";
  },
  function (props) {
    return props.minHeight || "80px";
  },
  colors.primary,
  colors.primaryLight,
  colors.bgFillLight,
  colors.textSecondary
);
var TxTextarea = function TxTextarea(_ref) {
  var placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    resize = _ref.resize,
    minHeight = _ref.minHeight,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$X);
  return /*#__PURE__*/ React.createElement(
    TextareaStyled,
    _extends(
      {
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        disabled: disabled,
        resize: resize,
        minHeight: minHeight,
      },
      props
    )
  );
};

var _excluded$Y = ["value", "onChange", "disabled"];
var _templateObject$Y;
var Input = styled__default.input(
  _templateObject$Y ||
    (_templateObject$Y = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid ",
      ";\n  border-radius: 6px;\n  font-size: 14px;\n\n  &:focus {\n    outline: none;\n    border-color: ",
      ";\n    box-shadow: 0 0 0 3px ",
      ";\n  }\n\n  &:disabled {\n    background: ",
      ";\n    cursor: not-allowed;\n  }\n",
    ])),
  colors.borderLight,
  colors.primary,
  colors.primaryLight,
  colors.bgFillLight
);
var TxTimeInput = function TxTimeInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  var _useState = React$1.useState(value || ""),
    time = _useState[0],
    setTime = _useState[1];
  var handleChange = function handleChange(e) {
    setTime(e.target.value);
    if (onChange) onChange(e.target.value);
  };
  return /*#__PURE__*/ React.createElement(
    Input,
    _extends(
      {
        type: "time",
        value: time,
        onChange: handleChange,
        disabled: disabled,
      },
      props
    )
  );
};

var _templateObject$Z,
  _templateObject2$N,
  _templateObject3$D,
  _templateObject4$t,
  _templateObject5$k,
  _templateObject6$f,
  _templateObject7$b,
  _templateObject8$6,
  _templateObject9$5,
  _templateObject10$2,
  _templateObject11$2;
var TimelineWrapper = styled__default.ul(
  _templateObject$Z ||
    (_templateObject$Z = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))
);
var TimelineItem = styled__default.li(
  _templateObject2$N ||
    (_templateObject2$N = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  padding-bottom: ",
      ';\n  padding-left: 28px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 6px;\n    top: 20px;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
      ";\n    display: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.isLast ? "0" : "24px";
  },
  colors.borderDefault,
  function (props) {
    return props.isLast ? "none" : "block";
  }
);
var TimelineDot = styled__default.div(
  _templateObject3$D ||
    (_templateObject3$D = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid\n    ",
      ";\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n\n  ",
      "\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
    ])),
  function (props) {
    switch (props.color) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.primary[500];
    }
  },
  function (props) {
    return (
      props.icon &&
      "\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: " +
        (props.color === "success"
          ? colors.success[500]
          : props.color === "error"
          ? colors.danger[500]
          : props.color === "warning"
          ? colors.warning[500]
          : props.color === "processing"
          ? colors.info[500]
          : colors.primary[500]) +
        ";\n    color: white;\n    font-size: 12px;\n  "
    );
  }
);
var TimelineContent = styled__default.div(
  _templateObject4$t || (_templateObject4$t = _taggedTemplateLiteralLoose(["\n  position: relative;\n  top: -4px;\n"]))
);
var TimelineTitle = styled__default.div(
  _templateObject5$k ||
    (_templateObject5$k = _taggedTemplateLiteralLoose([
      "\n  font-size: 14px;\n  font-weight: 600;\n  color: ",
      ";\n  margin-bottom: 4px;\n  line-height: 1.5;\n",
    ])),
  colors.textPrimary
);
var TimelineDescription = styled__default.div(
  _templateObject6$f ||
    (_templateObject6$f = _taggedTemplateLiteralLoose([
      "\n  font-size: 13px;\n  color: ",
      ";\n  line-height: 1.5;\n  font-weight: 400;\n",
    ])),
  colors.textSecondary
);
var TimelineTime = styled__default.div(
  _templateObject7$b ||
    (_templateObject7$b = _taggedTemplateLiteralLoose(["\n  font-size: 12px;\n  color: ", ";\n  margin-top: 4px;\n"])),
  colors.textTertiary
);
var TimelineLabel = styled__default.div(
  _templateObject8$6 ||
    (_templateObject8$6 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  left: ",
      ";\n  right: ",
      ";\n  top: 0;\n  width: 100px;\n  text-align: ",
      ";\n  font-size: 12px;\n  color: ",
      ";\n",
    ])),
  function (props) {
    return props.mode === "left" ? "auto" : "-120px";
  },
  function (props) {
    return props.mode === "left" ? "-120px" : "auto";
  },
  function (props) {
    return props.mode === "left" ? "left" : "right";
  },
  colors.textTertiary
);
var TimelineAlternate = styled__default.ul(
  _templateObject9$5 ||
    (_templateObject9$5 = _taggedTemplateLiteralLoose([
      '\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
      ";\n    transform: translateX(-50%);\n  }\n",
    ])),
  colors.borderDefault
);
var TimelineAlternateItem = styled__default.li(
  _templateObject10$2 ||
    (_templateObject10$2 = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  padding: ",
      ";\n  text-align: ",
      ";\n\n  &:last-child {\n    padding-bottom: 0;\n  }\n",
    ])),
  function (props) {
    return props.position === "left" ? "0 calc(50% + 28px) 24px 0" : "0 0 24px calc(50% + 28px)";
  },
  function (props) {
    return props.position === "left" ? "right" : "left";
  }
);
var TimelineAlternateDot = styled__default.div(
  _templateObject11$2 ||
    (_templateObject11$2 = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  left: 50%;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  border: 2px solid\n    ",
      ";\n  background-color: white;\n  z-index: 1;\n\n  ",
      "\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
    ])),
  function (props) {
    switch (props.color) {
      case "success":
        return colors.success[500];
      case "error":
        return colors.danger[500];
      case "warning":
        return colors.warning[500];
      case "processing":
        return colors.info[500];
      default:
        return colors.primary[500];
    }
  },
  function (props) {
    return (
      props.icon &&
      "\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: " +
        (props.color === "success"
          ? colors.success[500]
          : props.color === "error"
          ? colors.danger[500]
          : props.color === "warning"
          ? colors.warning[500]
          : props.color === "processing"
          ? colors.info[500]
          : colors.primary[500]) +
        ";\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "
    );
  }
);

var _excluded$Z = ["items", "mode", "className"],
  _excluded2$5 = ["title", "description", "children", "color", "icon", "label", "time", "isLast", "className"];
var TxTimeline = function TxTimeline(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? "left" : _ref$mode,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Z);
  if (mode === "alternate") {
    return /*#__PURE__*/ React.createElement(
      TimelineAlternate,
      _extends(
        {
          className: className,
        },
        props
      ),
      items.map(function (item, index) {
        var position = index % 2 === 0 ? "left" : "right";
        return /*#__PURE__*/ React.createElement(
          TimelineAlternateItem,
          {
            key: index,
            position: position,
          },
          /*#__PURE__*/ React.createElement(
            TimelineAlternateDot,
            {
              color: item.color,
              icon: item.icon,
            },
            item.icon
          ),
          /*#__PURE__*/ React.createElement(
            TimelineContent,
            null,
            item.label &&
              /*#__PURE__*/ React.createElement(
                TimelineLabel,
                {
                  mode: position,
                },
                item.label
              ),
            item.title && /*#__PURE__*/ React.createElement(TimelineTitle, null, item.title),
            item.description && /*#__PURE__*/ React.createElement(TimelineDescription, null, item.description),
            item.children,
            item.time && /*#__PURE__*/ React.createElement(TimelineTime, null, item.time)
          )
        );
      })
    );
  }
  return /*#__PURE__*/ React.createElement(
    TimelineWrapper,
    _extends(
      {
        className: className,
      },
      props
    ),
    items.map(function (item, index) {
      return /*#__PURE__*/ React.createElement(
        TimelineItem,
        {
          key: index,
          isLast: index === items.length - 1,
        },
        /*#__PURE__*/ React.createElement(
          TimelineDot,
          {
            color: item.color,
            icon: item.icon,
          },
          item.icon
        ),
        /*#__PURE__*/ React.createElement(
          TimelineContent,
          null,
          item.label &&
            /*#__PURE__*/ React.createElement(
              TimelineLabel,
              {
                mode: mode,
              },
              item.label
            ),
          item.title && /*#__PURE__*/ React.createElement(TimelineTitle, null, item.title),
          item.description && /*#__PURE__*/ React.createElement(TimelineDescription, null, item.description),
          item.children,
          item.time && /*#__PURE__*/ React.createElement(TimelineTime, null, item.time)
        )
      );
    })
  );
};
TxTimeline.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.node,
      description: propTypes.node,
      children: propTypes.node,
      color: propTypes.oneOf(["default", "success", "error", "warning", "processing"]),
      icon: propTypes.node,
      label: propTypes.node,
      time: propTypes.node,
    })
  ),
  mode: propTypes.oneOf(["left", "right", "alternate"]),
  className: propTypes.string,
};
TxTimeline.defaultProps = {
  items: [],
  mode: "left",
  className: "",
};
var TxTimelineItem = function TxTimelineItem(_ref2) {
  var title = _ref2.title,
    description = _ref2.description,
    children = _ref2.children,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "default" : _ref2$color,
    icon = _ref2.icon,
    label = _ref2.label,
    time = _ref2.time,
    _ref2$isLast = _ref2.isLast,
    isLast = _ref2$isLast === void 0 ? false : _ref2$isLast,
    className = _ref2.className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$5);
  return /*#__PURE__*/ React.createElement(
    TimelineItem,
    _extends(
      {
        isLast: isLast,
        className: className,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      TimelineDot,
      {
        color: color,
        icon: icon,
      },
      icon
    ),
    /*#__PURE__*/ React.createElement(
      TimelineContent,
      null,
      label && /*#__PURE__*/ React.createElement(TimelineLabel, null, label),
      title && /*#__PURE__*/ React.createElement(TimelineTitle, null, title),
      description && /*#__PURE__*/ React.createElement(TimelineDescription, null, description),
      children,
      time && /*#__PURE__*/ React.createElement(TimelineTime, null, time)
    )
  );
};
TxTimelineItem.propTypes = {
  title: propTypes.node,
  description: propTypes.node,
  children: propTypes.node,
  color: propTypes.oneOf(["default", "success", "error", "warning", "processing"]),
  icon: propTypes.node,
  label: propTypes.node,
  time: propTypes.node,
  isLast: propTypes.bool,
  className: propTypes.string,
};
TxTimelineItem.defaultProps = {
  title: null,
  description: null,
  children: null,
  color: "default",
  icon: null,
  label: null,
  time: null,
  isLast: false,
  className: "",
};
TxTimeline.Item = TxTimelineItem;

var _excluded$_ = ["checked", "onChange", "size", "disabled"];
var _templateObject$_, _templateObject2$O;
var ToggleButton = styled__default.button(
  _templateObject$_ ||
    (_templateObject$_ = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  display: inline-block;\n  width: ",
      ";\n  height: ",
      ";\n  background: ",
      ";\n  border-radius: ",
      ";\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n",
    ])),
  function (props) {
    return props.size === "large" ? "48px" : props.size === "small" ? "32px" : "40px";
  },
  function (props) {
    return props.size === "large" ? "24px" : props.size === "small" ? "16px" : "20px";
  },
  function (props) {
    return props.checked ? colors.primary : colors.borderMedium;
  },
  function (props) {
    return props.size === "large" ? "12px" : props.size === "small" ? "8px" : "10px";
  }
);
var ToggleThumb = styled__default.div(
  _templateObject2$O ||
    (_templateObject2$O = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  top: ",
      ";\n  left: ",
      ";\n  width: ",
      ";\n  height: ",
      ";\n  background: white;\n  border-radius: 50%;\n  transition: left 0.2s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n",
    ])),
  function (props) {
    return props.size === "large" ? "2px" : props.size === "small" ? "1px" : "2px";
  },
  function (props) {
    return props.checked ? (props.size === "large" ? "26px" : props.size === "small" ? "17px" : "22px") : "2px";
  },
  function (props) {
    return props.size === "large" ? "20px" : props.size === "small" ? "14px" : "16px";
  },
  function (props) {
    return props.size === "large" ? "20px" : props.size === "small" ? "14px" : "16px";
  }
);
var TxToggle = function TxToggle(_ref) {
  var _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    onChange = _ref.onChange,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$_);
  var _useState = React$1.useState(checked),
    isChecked = _useState[0],
    setIsChecked = _useState[1];
  var handleClick = function handleClick() {
    if (!disabled) {
      var newValue = !isChecked;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
  };
  return /*#__PURE__*/ React.createElement(
    ToggleButton,
    _extends(
      {
        checked: isChecked ? 1 : 0,
        size: size,
        disabled: disabled,
        onClick: handleClick,
      },
      props
    ),
    /*#__PURE__*/ React.createElement(ToggleThumb, {
      checked: isChecked ? 1 : 0,
      size: size,
    })
  );
};

var _templateObject$$, _templateObject2$P;
var StyledTooltipWrapper = styled__default.div(
  _templateObject$$ ||
    (_templateObject$$ = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n"]))
);
var StyledTooltipContent = styled__default.div(
  _templateObject2$P ||
    (_templateObject2$P = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  z-index: 9999;\n  padding: 6px 12px;\n  background-color: ",
      ";\n  color: ",
      ";\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: ",
      ";\n  visibility: ",
      ";\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n  pointer-events: none;\n  max-width: 300px;\n  word-wrap: break-word;\n  white-space: normal;\n\n  ",
      '\n\n  &::after {\n    content: "";\n    position: absolute;\n    border: 6px solid transparent;\n\n    ',
      "\n  }\n",
    ])),
  function (props) {
    return props.color || colors.primary;
  },
  colors.textWhite,
  function (props) {
    return props.visible ? 1 : 0;
  },
  function (props) {
    return props.visible ? "visible" : "hidden";
  },
  function (props) {
    var offset = 8;
    switch (props.placement) {
      case "top":
        return (
          "\n          bottom: calc(100% + " +
          offset +
          "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
        );
      case "bottom":
        return (
          "\n          top: calc(100% + " +
          offset +
          "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
        );
      case "left":
        return (
          "\n          right: calc(100% + " +
          offset +
          "px);\n          top: 50%;\n          transform: translateY(-50%);\n        "
        );
      case "right":
        return (
          "\n          left: calc(100% + " +
          offset +
          "px);\n          top: 50%;\n          transform: translateY(-50%);\n        "
        );
      default:
        return (
          "\n          bottom: calc(100% + " +
          offset +
          "px);\n          left: 50%;\n          transform: translateX(-50%);\n        "
        );
    }
  },
  function (props) {
    var color = props.color || colors.primary;
    switch (props.placement) {
      case "top":
        return (
          "\n            top: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-top-color: " +
          color +
          ";\n          "
        );
      case "bottom":
        return (
          "\n            bottom: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-bottom-color: " +
          color +
          ";\n          "
        );
      case "left":
        return (
          "\n            left: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-left-color: " +
          color +
          ";\n          "
        );
      case "right":
        return (
          "\n            right: 100%;\n            top: 50%;\n            transform: translateY(-50%);\n            border-right-color: " +
          color +
          ";\n          "
        );
      default:
        return (
          "\n            top: 100%;\n            left: 50%;\n            transform: translateX(-50%);\n            border-top-color: " +
          color +
          ";\n          "
        );
    }
  }
);

var _excluded$$ = ["children", "title", "placement", "color", "trigger"];
var TxTooltip = function TxTooltip(_ref) {
  var children = _ref.children,
    title = _ref.title,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "top" : _ref$placement,
    color = _ref.color,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? "hover" : _ref$trigger,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$$);
  var _useState = React$1.useState(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var handleMouseEnter = function handleMouseEnter() {
    if (trigger === "hover") {
      setVisible(true);
    }
  };
  var handleMouseLeave = function handleMouseLeave() {
    if (trigger === "hover") {
      setVisible(false);
    }
  };
  var handleClick = function handleClick() {
    if (trigger === "click") {
      setVisible(!visible);
    }
  };
  return /*#__PURE__*/ React.createElement(
    StyledTooltipWrapper,
    _extends(
      {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
      },
      rest
    ),
    children,
    title &&
      /*#__PURE__*/ React.createElement(
        StyledTooltipContent,
        {
          visible: visible,
          placement: placement,
          color: color,
        },
        title
      )
  );
};
TxTooltip.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  placement: propTypes.oneOf(["top", "bottom", "left", "right"]),
  color: propTypes.string,
  trigger: propTypes.oneOf(["hover", "click"]),
};
TxTooltip.defaultProps = {
  placement: "top",
  trigger: "hover",
};

var _excluded$10 = ["steps", "current", "open", "onClose"];
var _templateObject$10, _templateObject2$Q, _templateObject3$E, _templateObject4$u, _templateObject5$l;
var TourOverlay = styled__default.div(
  _templateObject$10 ||
    (_templateObject$10 = _taggedTemplateLiteralLoose([
      "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  opacity: ",
      ";\n  visibility: ",
      ";\n  transition: all 0.3s;\n",
    ])),
  function (props) {
    return props.open ? 1 : 0;
  },
  function (props) {
    return props.open ? "visible" : "hidden";
  }
);
var TourTooltip = styled__default.div(
  _templateObject2$Q ||
    (_templateObject2$Q = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 300px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n",
    ]))
);
var TourTitle = styled__default.div(
  _templateObject3$E ||
    (_templateObject3$E = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  margin-bottom: 8px;\n"]))
);
var TourContent = styled__default.div(
  _templateObject4$u ||
    (_templateObject4$u = _taggedTemplateLiteralLoose([
      "\n  font-size: 14px;\n  color: ",
      ";\n  margin-bottom: 12px;\n",
    ])),
  colors.textSecondary
);
var TourActions = styled__default.div(
  _templateObject5$l ||
    (_templateObject5$l = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n",
    ]))
);
var TxTour = function TxTour(_ref) {
  var _ref$steps = _ref.steps,
    steps = _ref$steps === void 0 ? [] : _ref$steps,
    _ref$current = _ref.current,
    current = _ref$current === void 0 ? 0 : _ref$current,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    onClose = _ref.onClose,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$10);
  var _useState = React$1.useState(current),
    currentStep = _useState[0],
    setCurrentStep = _useState[1];
  var nextStep = function nextStep() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  };
  var prevStep = function prevStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  if (!open || steps.length === 0) return null;
  var currentStepData = steps[currentStep];
  return /*#__PURE__*/ React.createElement(
    TourOverlay,
    {
      open: open,
    },
    /*#__PURE__*/ React.createElement(
      TourTooltip,
      props,
      /*#__PURE__*/ React.createElement(TourTitle, null, currentStepData.title),
      /*#__PURE__*/ React.createElement(TourContent, null, currentStepData.content),
      /*#__PURE__*/ React.createElement(
        TourActions,
        null,
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: prevStep,
            disabled: currentStep === 0,
          },
          "Back"
        ),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: nextStep,
          },
          currentStep === steps.length - 1 ? "Finish" : "Next"
        )
      )
    )
  );
};

var _excluded$11 = ["data", "titles"];
var _templateObject$11,
  _templateObject2$R,
  _templateObject3$F,
  _templateObject4$v,
  _templateObject5$m,
  _templateObject6$g;
var TransferContainer = styled__default.div(
  _templateObject$11 ||
    (_templateObject$11 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  gap: 16px;\n  width: 100%;\n"]))
);
var TransferBox = styled__default.div(
  _templateObject2$R ||
    (_templateObject2$R = _taggedTemplateLiteralLoose([
      "\n  flex: 1;\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n",
    ])),
  colors.borderLight
);
var TransferHeader = styled__default.div(
  _templateObject3$F ||
    (_templateObject3$F = _taggedTemplateLiteralLoose([
      "\n  padding: 12px 16px;\n  border-bottom: 1px solid ",
      ";\n  font-weight: 500;\n",
    ])),
  colors.borderLight
);
var TransferList = styled__default.div(
  _templateObject4$v ||
    (_templateObject4$v = _taggedTemplateLiteralLoose([
      "\n  padding: 8px;\n  max-height: 300px;\n  overflow-y: auto;\n",
    ]))
);
var TransferItem = styled__default.div(
  _templateObject5$m ||
    (_templateObject5$m = _taggedTemplateLiteralLoose([
      "\n  padding: 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n\n  ",
      "\n",
    ])),
  colors.bgFillLight,
  function (props) {
    return props.selected && "\n    background: " + colors.primaryLight + ";\n    color: " + colors.primary + ";\n  ";
  }
);
var TransferControls = styled__default.div(
  _templateObject6$g ||
    (_templateObject6$g = _taggedTemplateLiteralLoose([
      "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n",
    ]))
);
var TxTransfer = function TxTransfer(_ref) {
  var data = _ref.data,
    _ref$titles = _ref.titles,
    titles = _ref$titles === void 0 ? ["Source", "Target"] : _ref$titles,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$11);
  var _useState = React$1.useState(data || []),
    leftData = _useState[0],
    setLeftData = _useState[1];
  var _useState2 = React$1.useState([]),
    rightData = _useState2[0],
    setRightData = _useState2[1];
  var _useState3 = React$1.useState([]),
    selectedLeft = _useState3[0],
    setSelectedLeft = _useState3[1];
  var _useState4 = React$1.useState([]),
    selectedRight = _useState4[0],
    setSelectedRight = _useState4[1];
  var moveRight = function moveRight() {
    setRightData([].concat(rightData, selectedLeft));
    setLeftData(
      leftData.filter(function (item) {
        return !selectedLeft.includes(item);
      })
    );
    setSelectedLeft([]);
  };
  var moveLeft = function moveLeft() {
    setLeftData([].concat(leftData, selectedRight));
    setRightData(
      rightData.filter(function (item) {
        return !selectedRight.includes(item);
      })
    );
    setSelectedRight([]);
  };
  return /*#__PURE__*/ React.createElement(
    TransferContainer,
    props,
    /*#__PURE__*/ React.createElement(
      TransferBox,
      null,
      /*#__PURE__*/ React.createElement(TransferHeader, null, titles[0]),
      /*#__PURE__*/ React.createElement(
        TransferList,
        null,
        leftData.map(function (item, index) {
          return /*#__PURE__*/ React.createElement(
            TransferItem,
            {
              key: index,
              selected: selectedLeft.includes(item),
              onClick: function onClick() {
                return setSelectedLeft([].concat(selectedLeft, [item]));
              },
            },
            item
          );
        })
      )
    ),
    /*#__PURE__*/ React.createElement(
      TransferControls,
      null,
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: moveRight,
        },
        "\u2192"
      ),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: moveLeft,
        },
        "\u2190"
      )
    ),
    /*#__PURE__*/ React.createElement(
      TransferBox,
      null,
      /*#__PURE__*/ React.createElement(TransferHeader, null, titles[1]),
      /*#__PURE__*/ React.createElement(
        TransferList,
        null,
        rightData.map(function (item, index) {
          return /*#__PURE__*/ React.createElement(
            TransferItem,
            {
              key: index,
              selected: selectedRight.includes(item),
              onClick: function onClick() {
                return setSelectedRight([].concat(selectedRight, [item]));
              },
            },
            item
          );
        })
      )
    )
  );
};

var _excluded$12 = ["data"];
var _templateObject$12, _templateObject2$S, _templateObject3$G;
var TreeSelectContainer = styled__default.div(
  _templateObject$12 ||
    (_templateObject$12 = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  display: inline-block;\n  width: 100%;\n",
    ]))
);
var TreeSelectDropdown = styled__default.div(
  _templateObject2$S ||
    (_templateObject2$S = _taggedTemplateLiteralLoose([
      "\n  display: ",
      ";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid ",
      ";\n  border-radius: 8px;\n  margin-top: 4px;\n  max-height: 300px;\n  overflow-y: auto;\n  z-index: 1000;\n",
    ])),
  function (props) {
    return props.open ? "block" : "none";
  },
  colors.borderLight
);
var TreeItem = styled__default.div(
  _templateObject3$G ||
    (_templateObject3$G = _taggedTemplateLiteralLoose([
      "\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",
      ";\n  }\n",
    ])),
  colors.bgFillLight
);
var TxTreeSelect = function TxTreeSelect(_ref) {
  var data = _ref.data,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$12);
  var _useState = React$1.useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = React$1.useState(""),
    selectedValue = _useState2[0];
  var renderTree = function renderTree(items) {
    return items.map(function (item) {
      return /*#__PURE__*/ React.createElement(
        TreeItem,
        {
          key: item.value,
        },
        item.label
      );
    });
  };
  return /*#__PURE__*/ React.createElement(
    TreeSelectContainer,
    props,
    /*#__PURE__*/ React.createElement("input", {
      readOnly: true,
      value: selectedValue,
      onClick: function onClick() {
        return setOpen(!open);
      },
      placeholder: "Select...",
      style: {
        width: "100%",
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #ddd",
      },
    }),
    /*#__PURE__*/ React.createElement(
      TreeSelectDropdown,
      {
        open: open,
      },
      data && renderTree(data)
    )
  );
};

var _excluded$13 = ["children", "variant", "as"];
var _templateObject$13;
var TypographyBase = styled__default.div(
  _templateObject$13 ||
    (_templateObject$13 = _taggedTemplateLiteralLoose([
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
    ])),
  function (props) {
    return props.color || colors.textPrimary;
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
    return props.variant === "h1" && "\n    font-size: 48px;\n    font-weight: 700;\n    line-height: 1.2;\n  ";
  },
  function (props) {
    return props.variant === "h2" && "\n    font-size: 36px;\n    font-weight: 700;\n    line-height: 1.2;\n  ";
  },
  function (props) {
    return props.variant === "h3" && "\n    font-size: 28px;\n    font-weight: 600;\n    line-height: 1.3;\n  ";
  },
  function (props) {
    return props.variant === "h4" && "\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.3;\n  ";
  },
  function (props) {
    return props.variant === "body" && "\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n  ";
  },
  function (props) {
    return props.variant === "caption" && "\n    font-size: 14px;\n    color: " + colors.textSecondary + ";\n  ";
  },
  function (props) {
    return props.ellipsis && "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
  }
);
var TxTypography = function TxTypography(_ref) {
  var children = _ref.children,
    variant = _ref.variant,
    as = _ref.as,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$13);
  var tag = as || (variant && variant.startsWith("h") ? variant : "div");
  return /*#__PURE__*/ React.createElement(
    TypographyBase,
    _extends(
      {
        variant: variant,
        as: tag,
      },
      props
    ),
    children
  );
};

var _templateObject$14,
  _templateObject2$T,
  _templateObject3$H,
  _templateObject4$w,
  _templateObject5$n,
  _templateObject6$h,
  _templateObject7$c,
  _templateObject8$7,
  _templateObject9$6,
  _templateObject10$3,
  _templateObject11$3,
  _templateObject12$2,
  _templateObject13,
  _templateObject14;
var UploadWrapper = styled__default.div(
  _templateObject$14 ||
    (_templateObject$14 = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  width: ", ";\n"])),
  function (props) {
    return props.listType === "picture-card" ? "auto" : "100%";
  }
);
var UploadArea = styled__default.div(
  _templateObject2$T ||
    (_templateObject2$T = _taggedTemplateLiteralLoose([
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
    return props.listType === "picture-card" ? "inline-flex" : "block";
  },
  function (props) {
    return props.listType === "picture-card" ? "104px" : "100%";
  },
  function (props) {
    return props.listType === "picture-card" ? "104px" : "auto";
  },
  function (props) {
    return props.listType === "picture-card" ? "8px" : "16px";
  },
  function (props) {
    return props.isDragging ? colors.primary[500] : colors.borderDefault;
  },
  function (props) {
    return props.isDragging ? colors.primary[50] : colors.bgWhite;
  },
  function (props) {
    return props.disabled ? "not-allowed" : "pointer";
  },
  function (props) {
    return props.disabled ? 0.5 : 1;
  },
  function (props) {
    return props.disabled ? colors.borderDefault : colors.primary[500];
  },
  function (props) {
    return props.disabled ? colors.bgWhite : colors.primary[50];
  }
);
var UploadInput = styled__default.input(
  _templateObject3$H || (_templateObject3$H = _taggedTemplateLiteralLoose(["\n  display: none;\n"]))
);
var UploadIcon = styled__default.div(
  _templateObject4$w ||
    (_templateObject4$w = _taggedTemplateLiteralLoose([
      "\n  font-size: ",
      ";\n  color: ",
      ";\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: ",
      ";\n    height: ",
      ";\n  }\n",
    ])),
  function (props) {
    return props.listType === "picture-card" ? "24px" : "32px";
  },
  colors.primary[500],
  function (props) {
    return props.listType === "picture-card" ? "24px" : "32px";
  },
  function (props) {
    return props.listType === "picture-card" ? "24px" : "32px";
  }
);
var UploadText = styled__default.div(
  _templateObject5$n ||
    (_templateObject5$n = _taggedTemplateLiteralLoose([
      "\n  font-size: ",
      ";\n  color: ",
      ";\n  text-align: center;\n  font-weight: 400;\n",
    ])),
  function (props) {
    return props.listType === "picture-card" ? "12px" : "14px";
  },
  colors.textPrimary
);
var UploadHint = styled__default.div(
  _templateObject6$h ||
    (_templateObject6$h = _taggedTemplateLiteralLoose([
      "\n  font-size: 12px;\n  color: ",
      ";\n  margin-top: 4px;\n  text-align: center;\n",
    ])),
  colors.textSecondary
);
var FileList = styled__default.div(
  _templateObject7$c ||
    (_templateObject7$c = _taggedTemplateLiteralLoose([
      "\n  margin-top: ",
      ";\n  display: ",
      ";\n  flex-wrap: wrap;\n  gap: 8px;\n",
    ])),
  function (props) {
    return props.listType === "picture-card" ? "0" : "16px";
  },
  function (props) {
    return props.listType === "picture-card" ? "inline-flex" : "block";
  }
);
var FileItem = styled__default.div(
  _templateObject8$7 ||
    (_templateObject8$7 = _taggedTemplateLiteralLoose([
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
    return props.listType === "picture-card" ? "inline-flex" : "flex";
  },
  function (props) {
    return props.listType === "picture-card" ? "0" : "8px 12px";
  },
  function (props) {
    return props.listType === "picture-card" ? "transparent" : colors.bgFillLight;
  },
  function (props) {
    return props.listType === "picture-card" ? "0" : "8px";
  },
  function (props) {
    return props.listType === "picture-card" ? "104px" : "100%";
  },
  function (props) {
    return props.listType === "picture-card" ? "104px" : "auto";
  },
  function (props) {
    return props.listType === "picture-card" ? "1px solid " + colors.borderDefault : "none";
  }
);
var FileIcon = styled__default.div(
  _templateObject9$6 ||
    (_templateObject9$6 = _taggedTemplateLiteralLoose([
      "\n  width: ",
      ";\n  height: ",
      ";\n  margin-right: ",
      ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
      ";\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n",
    ])),
  function (props) {
    return props.listType === "picture-card" ? "100%" : "20px";
  },
  function (props) {
    return props.listType === "picture-card" ? "100%" : "20px";
  },
  function (props) {
    return props.listType === "picture-card" ? "0" : "8px";
  },
  colors.primary[500]
);
var FileName = styled__default.span(
  _templateObject10$3 ||
    (_templateObject10$3 = _taggedTemplateLiteralLoose([
      "\n  flex: 1;\n  font-size: 14px;\n  color: ",
      ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n",
    ])),
  colors.textPrimary
);
var FileActions = styled__default.div(
  _templateObject11$3 ||
    (_templateObject11$3 = _taggedTemplateLiteralLoose([
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
    return props.listType === "picture-card" ? 0 : 1;
  },
  function (props) {
    return props.listType === "picture-card" ? "absolute" : "relative";
  },
  function (props) {
    return props.listType === "picture-card" ? "50%" : "auto";
  },
  function (props) {
    return props.listType === "picture-card" ? "50%" : "auto";
  },
  function (props) {
    return props.listType === "picture-card" ? "translate(-50%, -50%)" : "none";
  },
  function (props) {
    return props.listType === "picture-card" ? "rgba(0, 0, 0, 0.5)" : "transparent";
  },
  function (props) {
    return props.listType === "picture-card" ? "8px 12px" : "0";
  },
  function (props) {
    return props.listType === "picture-card" ? "4px" : "0";
  }
);
var FileAction = styled__default.button(
  _templateObject12$2 ||
    (_templateObject12$2 = _taggedTemplateLiteralLoose([
      "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
      ";\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: ",
      ";\n    transform: scale(1.1);\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n",
    ])),
  function (props) {
    return props.listType === "picture-card" ? "white" : props.danger ? colors.danger[500] : colors.textSecondary;
  },
  function (props) {
    return props.listType === "picture-card" ? "white" : props.danger ? colors.danger[600] : colors.primary[500];
  }
);
var UploadProgress = styled__default.div(
  _templateObject13 ||
    (_templateObject13 = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  height: 4px;\n  background-color: ",
      ";\n  border-radius: 2px;\n  margin-top: 8px;\n  overflow: hidden;\n",
    ])),
  colors.bgFillLight
);
var UploadProgressBar = styled__default.div(
  _templateObject14 ||
    (_templateObject14 = _taggedTemplateLiteralLoose([
      "\n  height: 100%;\n  background-color: ",
      ";\n  transition: width 0.3s ease;\n  width: ",
      "%;\n",
    ])),
  colors.primary[500],
  function (props) {
    return props.percent;
  }
);

var _excluded$14 = [
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
];
var TxUpload = function TxUpload(_ref) {
  var _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? "*" : _ref$accept,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$maxSize = _ref.maxSize,
    maxSize = _ref$maxSize === void 0 ? null : _ref$maxSize,
    _ref$fileList = _ref.fileList,
    fileList = _ref$fileList === void 0 ? [] : _ref$fileList,
    _ref$defaultFileList = _ref.defaultFileList,
    defaultFileList = _ref$defaultFileList === void 0 ? [] : _ref$defaultFileList,
    _ref$listType = _ref.listType,
    listType = _ref$listType === void 0 ? "text" : _ref$listType,
    _ref$showUploadList = _ref.showUploadList,
    showUploadList = _ref$showUploadList === void 0 ? true : _ref$showUploadList,
    children = _ref.children,
    onChange = _ref.onChange,
    onRemove = _ref.onRemove,
    beforeUpload = _ref.beforeUpload,
    customRequest = _ref.customRequest,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$14);
  var _useState = React$1.useState(defaultFileList),
    files = _useState[0],
    setFiles = _useState[1];
  var _useState2 = React$1.useState(false),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var inputRef = React$1.useRef(null);
  var currentFiles = fileList.length > 0 ? fileList : files;
  var handleClick = function handleClick() {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };
  var handleFileChange = function handleFileChange(e) {
    try {
      if (disabled) return Promise.resolve();
      var selectedFiles = Array.from(e.target.files || []);
      return Promise.resolve(processFiles(selectedFiles)).then(function () {
        e.target.value = "";
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var processFiles = function processFiles(selectedFiles) {
    try {
      var _temp2 = function _temp2() {
        if (maxSize) {
          validFiles = validFiles.filter(function (file) {
            return file.size <= maxSize * 1024 * 1024;
          });
        }
        var newFiles = validFiles.map(function (file) {
          return {
            uid: Date.now() + Math.random(),
            name: file.name,
            status: "uploading",
            percent: 0,
            originFileObj: file,
            url: URL.createObjectURL(file),
          };
        });
        var updatedFiles = multiple ? [].concat(currentFiles, newFiles) : newFiles;
        if (fileList.length === 0) {
          setFiles(updatedFiles);
        }
        if (onChange) {
          onChange(updatedFiles);
        }
        if (customRequest) {
          newFiles.forEach(function (fileObj) {
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
          });
        } else {
          newFiles.forEach(function (fileObj) {
            simulateUpload(fileObj.uid);
          });
        }
      };
      var validFiles = selectedFiles;
      var _temp = (function () {
        if (beforeUpload) {
          return Promise.resolve(
            Promise.all(
              selectedFiles.map(function (file) {
                try {
                  return Promise.resolve(beforeUpload(file)).then(function (result) {
                    return result === false ? null : file;
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              })
            )
          ).then(function (_Promise$all) {
            validFiles = _Promise$all;
            validFiles = validFiles.filter(Boolean);
          });
        }
      })();
      return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var simulateUpload = function simulateUpload(uid) {
    var percent = 0;
    var interval = setInterval(function () {
      percent += 10;
      updateFileProgress(uid, percent);
      if (percent >= 100) {
        clearInterval(interval);
        updateFileStatus(uid, "done");
      }
    }, 200);
  };
  var updateFileProgress = function updateFileProgress(uid, percent) {
    var updatedFiles = currentFiles.map(function (file) {
      return file.uid === uid
        ? _extends({}, file, {
            percent: percent,
          })
        : file;
    });
    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }
    if (onChange) {
      onChange(updatedFiles);
    }
  };
  var updateFileStatus = function updateFileStatus(uid, status) {
    var updatedFiles = currentFiles.map(function (file) {
      return file.uid === uid
        ? _extends({}, file, {
            status: status,
            percent: status === "done" ? 100 : file.percent,
          })
        : file;
    });
    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }
    if (onChange) {
      onChange(updatedFiles);
    }
  };
  var handleRemove = function handleRemove(file) {
    var updatedFiles = currentFiles.filter(function (f) {
      return f.uid !== file.uid;
    });
    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }
    if (onRemove) {
      onRemove(file);
    }
    if (onChange) {
      onChange(updatedFiles);
    }
  };
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };
  var handleDragLeave = function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  };
  var handleDrop = function handleDrop(e) {
    try {
      e.preventDefault();
      setIsDragging(false);
      var _temp3 = (function () {
        if (!disabled) {
          var droppedFiles = Array.from(e.dataTransfer.files);
          return Promise.resolve(processFiles(droppedFiles)).then(function () {});
        }
      })();
      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var renderFileIcon = function renderFileIcon(file) {
    if (listType === "picture-card" && file.url) {
      return /*#__PURE__*/ React.createElement("img", {
        src: file.url,
        alt: file.name,
      });
    }
    return /*#__PURE__*/ React.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      /*#__PURE__*/ React.createElement("path", {
        d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
      }),
      /*#__PURE__*/ React.createElement("polyline", {
        points: "13 2 13 9 20 9",
      })
    );
  };
  return /*#__PURE__*/ React.createElement(
    UploadWrapper,
    {
      className: className,
      listType: listType,
    },
    /*#__PURE__*/ React.createElement(
      UploadArea,
      {
        onClick: handleClick,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        disabled: disabled,
        isDragging: isDragging,
        listType: listType,
      },
      /*#__PURE__*/ React.createElement(
        UploadInput,
        _extends(
          {
            ref: inputRef,
            type: "file",
            accept: accept,
            multiple: multiple,
            onChange: handleFileChange,
            disabled: disabled,
          },
          props
        )
      ),
      children ||
        /*#__PURE__*/ React.createElement(
          Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            UploadIcon,
            {
              listType: listType,
            },
            /*#__PURE__*/ React.createElement(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
              },
              /*#__PURE__*/ React.createElement("path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
              }),
              /*#__PURE__*/ React.createElement("polyline", {
                points: "17 8 12 3 7 8",
              }),
              /*#__PURE__*/ React.createElement("line", {
                x1: "12",
                y1: "3",
                x2: "12",
                y2: "15",
              })
            )
          ),
          /*#__PURE__*/ React.createElement(
            UploadText,
            {
              listType: listType,
            },
            listType === "picture-card" ? "Upload" : "Click or drag file to upload"
          ),
          listType !== "picture-card" &&
            /*#__PURE__*/ React.createElement(UploadHint, null, "Support for a single or bulk upload")
        )
    ),
    showUploadList &&
      currentFiles.length > 0 &&
      /*#__PURE__*/ React.createElement(
        FileList,
        {
          listType: listType,
        },
        currentFiles.map(function (file) {
          return /*#__PURE__*/ React.createElement(
            FileItem,
            {
              key: file.uid,
              listType: listType,
            },
            /*#__PURE__*/ React.createElement(
              FileIcon,
              {
                listType: listType,
              },
              renderFileIcon(file)
            ),
            listType !== "picture-card" && /*#__PURE__*/ React.createElement(FileName, null, file.name),
            /*#__PURE__*/ React.createElement(
              FileActions,
              {
                className: "file-actions",
                listType: listType,
              },
              file.status === "done" &&
                listType === "picture-card" &&
                /*#__PURE__*/ React.createElement(
                  FileAction,
                  {
                    listType: listType,
                  },
                  /*#__PURE__*/ React.createElement(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                    },
                    /*#__PURE__*/ React.createElement("path", {
                      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
                    }),
                    /*#__PURE__*/ React.createElement("circle", {
                      cx: "12",
                      cy: "12",
                      r: "3",
                    })
                  )
                ),
              /*#__PURE__*/ React.createElement(
                FileAction,
                {
                  onClick: function onClick() {
                    return handleRemove(file);
                  },
                  danger: true,
                  listType: listType,
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                  },
                  /*#__PURE__*/ React.createElement("polyline", {
                    points: "3 6 5 6 21 6",
                  }),
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                  })
                )
              )
            ),
            file.status === "uploading" &&
              listType !== "picture-card" &&
              /*#__PURE__*/ React.createElement(
                UploadProgress,
                null,
                /*#__PURE__*/ React.createElement(UploadProgressBar, {
                  percent: file.percent,
                })
              )
          );
        })
      )
  );
};
TxUpload.propTypes = {
  accept: propTypes.string,
  multiple: propTypes.bool,
  disabled: propTypes.bool,
  maxSize: propTypes.number,
  fileList: propTypes.array,
  defaultFileList: propTypes.array,
  listType: propTypes.oneOf(["text", "picture", "picture-card"]),
  showUploadList: propTypes.bool,
  children: propTypes.node,
  onChange: propTypes.func,
  onRemove: propTypes.func,
  beforeUpload: propTypes.func,
  customRequest: propTypes.func,
  className: propTypes.string,
};
TxUpload.defaultProps = {
  accept: "*",
  multiple: false,
  disabled: false,
  maxSize: null,
  fileList: [],
  defaultFileList: [],
  listType: "text",
  showUploadList: true,
  children: null,
  onChange: undefined,
  onRemove: undefined,
  beforeUpload: undefined,
  customRequest: undefined,
  className: "",
};

var _excluded$15 = ["src", "poster", "autoplay", "controls"];
var _templateObject$15,
  _templateObject2$U,
  _templateObject3$I,
  _templateObject4$x,
  _templateObject5$o,
  _templateObject6$i,
  _templateObject7$d;
var VideoContainer = styled__default.div(
  _templateObject$15 ||
    (_templateObject$15 = _taggedTemplateLiteralLoose([
      "\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  background: ",
      ";\n  border-radius: 8px;\n  overflow: hidden;\n",
    ])),
  colors.bgFillLight
);
var VideoStyled = styled__default.video(
  _templateObject2$U || (_templateObject2$U = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: block;\n"]))
);
var Controls = styled__default.div(
  _templateObject3$I ||
    (_templateObject3$I = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n",
    ]))
);
var PlayButton = styled__default.button(
  _templateObject4$x ||
    (_templateObject4$x = _taggedTemplateLiteralLoose([
      "\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 24px;\n  padding: 4px;\n",
    ]))
);
var TimeDisplay = styled__default.span(
  _templateObject5$o || (_templateObject5$o = _taggedTemplateLiteralLoose(["\n  color: white;\n  font-size: 12px;\n"]))
);
var ProgressBar$2 = styled__default.div(
  _templateObject6$i ||
    (_templateObject6$i = _taggedTemplateLiteralLoose([
      "\n  flex: 1;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n  overflow: hidden;\n  cursor: pointer;\n",
    ]))
);
var ProgressFill$1 = styled__default.div(
  _templateObject7$d ||
    (_templateObject7$d = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  width: ", "%;\n  background: ", ";\n"])),
  function (props) {
    return props.progress;
  },
  colors.primary
);
var TxVideoPlayer = function TxVideoPlayer(_ref) {
  var src = _ref.src,
    poster = _ref.poster,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? true : _ref$controls,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$15);
  var videoRef = React$1.useRef(null);
  var _useState = React$1.useState(false),
    playing = _useState[0],
    setPlaying = _useState[1];
  var _useState2 = React$1.useState(0),
    currentTime = _useState2[0],
    setCurrentTime = _useState2[1];
  var _useState3 = React$1.useState(0),
    duration = _useState3[0],
    setDuration = _useState3[1];
  var togglePlay = function togglePlay() {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };
  var formatTime = function formatTime(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ":" + secs.toString().padStart(2, "0");
  };
  var handleTimeUpdate = function handleTimeUpdate() {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  var handleLoadedMetadata = function handleLoadedMetadata() {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  var handleProgressClick = function handleProgressClick(e) {
    if (videoRef.current) {
      var rect = e.currentTarget.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var percent = x / rect.width;
      videoRef.current.currentTime = percent * duration;
    }
  };
  return /*#__PURE__*/ React.createElement(
    VideoContainer,
    props,
    /*#__PURE__*/ React.createElement(VideoStyled, {
      ref: videoRef,
      src: src,
      poster: poster,
      onTimeUpdate: handleTimeUpdate,
      onLoadedMetadata: handleLoadedMetadata,
      onClick: togglePlay,
    }),
    controls &&
      /*#__PURE__*/ React.createElement(
        Controls,
        null,
        /*#__PURE__*/ React.createElement(
          PlayButton,
          {
            onClick: togglePlay,
          },
          playing ? "⏸️" : "▶️"
        ),
        /*#__PURE__*/ React.createElement(TimeDisplay, null, formatTime(currentTime), " / ", formatTime(duration)),
        /*#__PURE__*/ React.createElement(
          ProgressBar$2,
          {
            onClick: handleProgressClick,
          },
          /*#__PURE__*/ React.createElement(ProgressFill$1, {
            progress: (currentTime / duration) * 100 || 0,
          })
        )
      )
  );
};

var _excluded$16 = ["text", "fullPage", "zIndex", "angle", "opacity", "color", "fontSize", "children"];
var _templateObject$16, _templateObject2$V, _templateObject3$J;
var WatermarkContainer = styled__default.div(
  _templateObject$16 ||
    (_templateObject$16 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-block;\n"]))
);
var WatermarkOverlay = styled__default.div(
  _templateObject2$V ||
    (_templateObject2$V = _taggedTemplateLiteralLoose([
      "\n  position: ",
      ";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: ",
      ";\n  background-image: repeating-linear-gradient(\n    ",
      ",\n    transparent,\n    transparent ",
      ",\n    rgba(0, 0, 0, 0.03) ",
      ",\n    rgba(0, 0, 0, 0.03) ",
      "\n  );\n",
    ])),
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
    return (props.spacing || 100) * 2 + "px";
  }
);
var WatermarkText = styled__default.div(
  _templateObject3$J ||
    (_templateObject3$J = _taggedTemplateLiteralLoose([
      "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(",
      "deg);\n  color: ",
      ";\n  font-size: ",
      ";\n  opacity: ",
      ";\n  font-weight: 600;\n  white-space: nowrap;\n  pointer-events: none;\n",
    ])),
  function (props) {
    return props.angle || "-45";
  },
  function (props) {
    return props.color || colors.textSecondary;
  },
  function (props) {
    return props.fontSize || "48px";
  },
  function (props) {
    return props.opacity || 0.1;
  }
);
var TxWatermark = function TxWatermark(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "WATERMARK" : _ref$text,
    _ref$fullPage = _ref.fullPage,
    fullPage = _ref$fullPage === void 0 ? false : _ref$fullPage,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 1 : _ref$zIndex,
    _ref$angle = _ref.angle,
    angle = _ref$angle === void 0 ? -45 : _ref$angle,
    _ref$opacity = _ref.opacity,
    opacity = _ref$opacity === void 0 ? 0.1 : _ref$opacity,
    color = _ref.color,
    fontSize = _ref.fontSize,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$16);
  return /*#__PURE__*/ React.createElement(
    WatermarkContainer,
    props,
    children,
    /*#__PURE__*/ React.createElement(
      WatermarkOverlay,
      {
        fullPage: fullPage,
        zIndex: zIndex,
        angle: angle,
      },
      /*#__PURE__*/ React.createElement(
        WatermarkText,
        {
          angle: angle,
          color: color,
          fontSize: fontSize,
          opacity: opacity,
        },
        text
      )
    )
  );
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/ React$1__default.createElement(
    "div",
    {
      className: styles.test,
    },
    "Example Component: ",
    text
  );
};

exports.ExampleComponent = ExampleComponent;
exports.TxAnchor = TxAnchor;
exports.TxAvatar = TxAvatar;
exports.TxBadge = TxBadge;
exports.TxBadgeRibbon = TxBadgeRibbon;
exports.TxBreadcrumb = TxBreadcrumb;
exports.TxButton = TxButton;
exports.TxCalendar = TxCalendar;
exports.TxCard = TxCard;
exports.TxCarousel = TxCarousel;
exports.TxChart = TxChart;
exports.TxCheckbox = TxCheckbox;
exports.TxCode = TxCode;
exports.TxCollapse = TxCollapse;
exports.TxColorPicker = TxColorPicker;
exports.TxCopy = TxCopy;
exports.TxCountdown = TxCountdown;
exports.TxDatePicker = TxDatePicker;
exports.TxDateRangePicker = TxDateRangePicker;
exports.TxDivider = TxDivider;
exports.TxDnd = TxDnd;
exports.TxDrawer = TxDrawer;
exports.TxDropdown = TxDropdown;
exports.TxEditor = TxEditor;
exports.TxEmpty = TxEmpty;
exports.TxFlex = TxFlex;
exports.TxForm = TxForm;
exports.TxFormFooter = TxFormFooter;
exports.TxFormItem = TxFormItem;
exports.TxGrid = TxGrid;
exports.TxGridItem = TxGridItem;
exports.TxImage = TxImage;
exports.TxInput = TxInput;
exports.TxInputNumber = TxInputNumber;
exports.TxInputOtp = TxInputOtp;
exports.TxKbd = TxKbd;
exports.TxLightbox = TxLightbox;
exports.TxLink = TxLink;
exports.TxLoading = TxLoading;
exports.TxMap = TxMap;
exports.TxMenu = TxMenu;
exports.TxMessage = TxMessage;
exports.TxModal = TxModal;
exports.TxNotification = TxNotification;
exports.TxPagination = TxPagination;
exports.TxPopconfirm = TxPopconfirm;
exports.TxProgress = TxProgress;
exports.TxQrcode = TxQrcode;
exports.TxRadio = TxRadio;
exports.TxRate = TxRate;
exports.TxScrollProgress = TxScrollProgress;
exports.TxScrollShadow = TxScrollShadow;
exports.TxSegmented = TxSegmented;
exports.TxSelect = TxSelect;
exports.TxSkeleton = TxSkeleton;
exports.TxSlider = TxSlider;
exports.TxSnippet = TxSnippet;
exports.TxSpace = TxSpace;
exports.TxSplitter = TxSplitter;
exports.TxSteps = TxSteps;
exports.TxSwitch = TxSwitch;
exports.TxTable = TxTable;
exports.TxTabs = TxTabs;
exports.TxTag = TxTag;
exports.TxTextGradient = TxTextGradient;
exports.TxTextarea = TxTextarea;
exports.TxTimeInput = TxTimeInput;
exports.TxTimeline = TxTimeline;
exports.TxTimelineItem = TxTimelineItem;
exports.TxToggle = TxToggle;
exports.TxTooltip = TxTooltip;
exports.TxTour = TxTour;
exports.TxTransfer = TxTransfer;
exports.TxTreeSelect = TxTreeSelect;
exports.TxTypography = TxTypography;
exports.TxUpload = TxUpload;
exports.TxVideoPlayer = TxVideoPlayer;
exports.TxWatermark = TxWatermark;
exports.colors = colors;
exports.theme = theme;
//# sourceMappingURL=index.js.map
